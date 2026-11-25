const adminLoginBtn = document.getElementById("adminLoginBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const adminMessage = document.getElementById("adminMessage");
const adminPanel = document.getElementById("adminPanel");
const requestList = document.getElementById("requestList");
const refreshRequests = document.getElementById("refreshRequests");


async function checkAdmin() {
  const { data: { user }, error } =
    await supabaseClient.auth.getUser();

  if (error || !user) {
    adminPanel.hidden = true;
    adminLogoutBtn.hidden = true;
    adminMessage.textContent =
      "ກະລຸນາ Login ຜ່ານໜ້ານັກຮຽນກ່ອນ";
    return false;
  }

  const { data, error: roleError } = await supabaseClient
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (roleError || !data) {
    adminPanel.hidden = true;
    adminLogoutBtn.hidden = true;
    adminMessage.textContent =
      "ບັນຊີນີ້ບໍ່ມີສິດ Admin";
    return false;
  }

  adminLogoutBtn.hidden = false;
  adminPanel.hidden = false;
  adminMessage.textContent = "Login Admin ສຳເລັດ";

  return true;
}


async function loadPremiumRequests() {
  if (!(await checkAdmin())) return;

  requestList.textContent = "ກຳລັງໂຫຼດ...";

  const { data, error } = await supabaseClient
    .from("premium_payment_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    requestList.textContent = "ໂຫຼດບໍ່ສຳເລັດ";
    console.error(error);
    return;
  }
  // ດຶງຊື່ນັກຮຽນ
const userIds = [
  ...new Set(data.map(item => item.user_id).filter(Boolean))
];

let studentNames = new Map();

if (userIds.length > 0) {
  const { data: studentsData, error: studentsError } =
    await supabaseClient
      .from("students")
      .select("id, full_name")
      .in("id", userIds);

  if (studentsError) {
    console.error("Student lookup error:", studentsError);
  } else {
    studentNames = new Map(
      studentsData.map(student => [
        student.id,
        student.full_name
      ])
    );
  }
}
  
  // ຄຳນວນຈຳນວນຄຳຂໍ
  document.getElementById("totalRequests").textContent =
    data.length;

  document.getElementById("pendingRequests").textContent =
    data.filter(item => item.status === "pending").length;

  document.getElementById("approvedRequests").textContent =
    data.filter(item => item.status === "approved").length;

  document.getElementById("rejectedRequests").textContent =
    data.filter(item => item.status === "rejected").length;

  requestList.replaceChildren();

  if (!data || data.length === 0) {
    requestList.textContent = "ບໍ່ມີລາຍການ";
    return;
  }

  for (const item of data) {
    const card = document.createElement("div");
    card.className = "admin-request-card";
    card.dataset.status = item.status;

    const studentName =
  studentNames.get(item.user_id) ||
  "ບໍ່ພົບຊື່ນັກຮຽນ";
card.dataset.studentName =
  studentName.toLowerCase();
    
const info = document.createElement("p");
info.textContent =
  "ນັກຮຽນ: " + studentName +
  " | ຈຳນວນ: " + item.amount_lak +
  " ກີບ | ສະຖານະ: " + item.status;

    const date = document.createElement("p");
    date.textContent =
      "ວັນທີສົ່ງ: " +
      new Date(item.created_at).toLocaleString();

    card.append(info, date);

    if (item.proof_path) {
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("premium-payment-proofs")
          .createSignedUrl(item.proof_path, 300);

      if (!imageError && imageData?.signedUrl) {
        const link = document.createElement("a");
        link.href = imageData.signedUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "ເບິ່ງຫຼັກຖານການຊຳລະ";
        card.appendChild(link);
      }
    }

    if (item.status === "pending") {
      const approveBtn = document.createElement("button");
      approveBtn.textContent = "ອະນຸມັດ";

      approveBtn.addEventListener("click", async () => {
        if (!confirm("ຢືນຢັນວ່າກວດການຊຳລະແລ້ວບໍ?")) return;

        const { error } = await supabaseClient.rpc(
          "approve_premium_request",
          { request_id: item.id }
        );

        if (error) {
          alert("ອະນຸມັດບໍ່ສຳເລັດ");
          console.error(error);
        } else {
          alert("ອະນຸມັດສຳເລັດ");
          loadPremiumRequests();
        }
      });

      const rejectBtn = document.createElement("button");
      rejectBtn.textContent = "ປະຕິເສດ";

      rejectBtn.addEventListener("click", async () => {
        if (!confirm("ຢືນຢັນການປະຕິເສດບໍ?")) return;

        const { error } = await supabaseClient.rpc(
          "reject_premium_request",
          { request_id: item.id }
        );

        if (error) {
          alert("ປະຕິເສດບໍ່ສຳເລັດ");
          console.error(error);
        } else {
          alert("ປະຕິເສດສຳເລັດ");
          loadPremiumRequests();
        }
      });

      card.append(approveBtn, rejectBtn);
    }

    requestList.appendChild(card);
  }
}
adminLogoutBtn.addEventListener("click", async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    adminMessage.textContent = "Logout ບໍ່ສຳເລັດ";
    return;
  }

  window.location.href = "index.html";
});

refreshRequests.addEventListener("click", loadPremiumRequests);

checkAdmin().then((isAdmin) => {
  if (isAdmin) loadPremiumRequests();
});
window.filterRequests = function(status) {
  const cards = document.querySelectorAll(
    "#requestList .admin-request-card"
  );

  cards.forEach(card => {
    const cardStatus = (card.dataset.status || "").trim().toLowerCase();

    card.style.display =
      status === "all" || cardStatus === status
        ? ""
        : "none";
  });
};
document
  .getElementById("studentSearch")
  .addEventListener("input", function() {

    const keyword = this.value
      .trim()
      .toLowerCase();

    const cards = document.querySelectorAll(
      ".admin-request-card"
    );

    cards.forEach(card => {
      const studentName =
        card.dataset.studentName || "";

      card.style.display =
        studentName.includes(keyword)
          ? "block"
          : "none";
    });

  });
