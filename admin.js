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
    adminLoginBtn.hidden = false;
    adminLogoutBtn.hidden = true;
    adminMessage.textContent = "ກະລຸນາ Login Admin";
    return false;
  }

  const { data, error: roleError } = await supabaseClient
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (roleError || !data) {
    adminPanel.hidden = true;
    adminMessage.textContent = "ບັນຊີນີ້ບໍ່ມີສິດ Admin";
    return false;
  }

  adminLoginBtn.hidden = true;
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

  requestList.replaceChildren();

  if (!data || data.length === 0) {
    requestList.textContent = "ບໍ່ມີລາຍການ";
    return;
  }

  for (const item of data) {
    const card = document.createElement("div");
    card.className = "admin-request-card";

    const info = document.createElement("p");
    info.textContent =
      "ຈຳນວນ: " + item.amount_lak +
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

adminLoginBtn.addEventListener("click", async () => {
  const email = prompt("Admin Email:");
  if (!email) return;

  const password = prompt("Admin Password:");
  if (!password) return;

  adminMessage.textContent = "ກຳລັງ Login...";

  const { error } = await supabaseClient.auth.signInWithPassword({
    email: email.trim(),
    password
  });

  if (error) {
    adminMessage.textContent = "Login ບໍ່ສຳເລັດ";
    return;
  }

  if (await checkAdmin()) {
    loadPremiumRequests();
  }
});

adminLogoutBtn.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  adminPanel.hidden = true;
  adminLogoutBtn.hidden = true;
  adminLoginBtn.hidden = false;
  adminMessage.textContent = "ອອກຈາກລະບົບແລ້ວ";
});

refreshRequests.addEventListener("click", loadPremiumRequests);

checkAdmin().then((isAdmin) => {
  if (isAdmin) loadPremiumRequests();
});
