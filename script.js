// Supabase Configuration

const SUPABASE_URL = "https://fpfbofmnlwvfbdydikdb.supabase.co";

const SUPABASE_KEY = "sb_publishable_xw8qELYE4vv4ztVjnG8YMg_qCtEY_8f";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      detectSessionInUrl: true,
      flowType: "implicit"
    }
  }
);
const searchInput = document.getElementById("searchInput");
const lessonCards = document.querySelectorAll(".courses article");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    lessonCards.forEach(function (card) {
      const content = card.textContent.toLowerCase();

      card.style.display = content.includes(keyword)
        ? ""
        : "none";
    });
  });
}
function openLesson(name) {
  const section = document.getElementById("lessonContent");
  const title = document.getElementById("lessonTitle");
  const body = document.getElementById("lessonBody");  
if (name === "network") {
  title.textContent = "🌐 Network Basic";

  body.innerHTML = `
    <h3>📚 ເລືອກບົດຮຽນ Network Basic</h3>

    <button onclick="showComputerLesson('network1')">
      ບົດທີ 1: Network ແມ່ນຫຍັງ?
    </button>

    <button onclick="showComputerLesson('network2')">
      ບົດທີ 2: ປະເພດຂອງ Network
    </button>

    <button onclick="showComputerLesson('network3')">
      ບົດທີ 3: Network ໃຊ້ງານແນວໃດ?
    </button>

<button onclick="showNetworkQuiz()">
  📝 ເຮັດແບບທົດສອບ Network Basic
</button>
    
    <hr>

    <div id="network1" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 1: Network ແມ່ນຫຍັງ?</h3>
      <p>
        Network ແມ່ນການເຊື່ອມຕໍ່
        ອຸປະກອນຫຼາຍເຄື່ອງເຂົ້າຫາກັນ
        ເພື່ອແລກປ່ຽນຂໍ້ມູນ.
      </p>
    </div>

    <div id="network2" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 2: ປະເພດຂອງ Network</h3>
      <p>1. LAN - Local Area Network</p>
      <p>2. WAN - Wide Area Network</p>
      <p>3. WLAN - Wireless LAN</p>
    </div>

    <div id="network3" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 3: Network ໃຊ້ງານແນວໃດ?</h3>
      <p>
        Network ຊ່ວຍໃຫ້ Computer,
        Printer ແລະອຸປະກອນອື່ນໆ
        ສາມາດເຊື່ອມຕໍ່ ແລະແບ່ງປັນຂໍ້ມູນກັນໄດ້.
      </p>
    </div>
    <div id="networkQuiz" style="display:none;">

  <hr>
  <h3>📝 Quiz: Network Basic</h3>

  <p>1. Network ແມ່ນຫຍັງ?</p>

  <label>
    <input type="radio" name="nq1" value="a">
    ການເຊື່ອມຕໍ່ Computer ເຂົ້າຫາກັນ
  </label><br>

  <label>
    <input type="radio" name="nq1" value="b">
    ໂປຣແກຣມພິມເອກະສານ
  </label><br>

  <label>
    <input type="radio" name="nq1" value="c">
    ອຸປະກອນສະແດງຜົນ
  </label>

  <hr>

  <p>2. LAN ແມ່ນ Network ປະເພດໃດ?</p>

  <label>
    <input type="radio" name="nq2" value="a">
    Network ລະດັບໂລກ
  </label><br>

  <label>
    <input type="radio" name="nq2" value="b">
    Network ໃນພື້ນທີ່ຈຳກັດ
  </label><br>

  <label>
    <input type="radio" name="nq2" value="c">
    Network ໄຮ້ສາຍເທົ່ານັ້ນ
  </label>

  <hr>

  <p>3. WLAN ໃຊ້ສື່ກາງແບບໃດ?</p>

  <label>
    <input type="radio" name="nq3" value="a">
    ສາຍໄຟຟ້າ
  </label><br>

  <label>
    <input type="radio" name="nq3" value="b">
    ສາຍໃຍແກ້ວ
  </label><br>

  <label>
    <input type="radio" name="nq3" value="c">
    ຄື້ນສັນຍານໄຮ້ສາຍ
  </label>

  <br><br>

  <button onclick="checkNetworkQuiz()">
    ກວດຄຳຕອບ
  </button>

  <p id="networkQuizResult"></p>

</div>
  `;
}

  else if (name === "computer") {
    title.textContent = "💻 Computer Basic";

    body.innerHTML = `
  <h3>📚 ເລືອກບົດຮຽນ Computer Basic</h3>

  <button onclick="showComputerLesson('computer1')">
  ບົດທີ 1: Computer ແມ່ນຫຍັງ?
</button>

<button onclick="showComputerLesson('computer2')">
  ບົດທີ 2: Hardware ແລະ Software
</button>
<button onclick="showComputerQuiz()">
  📝 ເຮັດແບບທົດສອບ Computer Basic
</button>
  <hr>

 <div id="computer1" class="lesson-topic" style="display:none;">
    <h3>ບົດທີ 1: Computer ແມ່ນຫຍັງ?</h3>
    <p>
      Computer ແມ່ນອຸປະກອນ
      ທີ່ໃຊ້ປະມວນຜົນຂໍ້ມູນ
      ແລະຊ່ວຍໃນການເຮັດວຽກ.
    </p>
    <p>1. Monitor - ໜ້າຈໍ</p>
    <p>2. Keyboard - ແປ້ນພິມ</p>
    <p>3. Mouse - ເມົາສ໌</p>
    <p>4. CPU - ໜ່ວຍປະມວນຜົນ</p>
  </div>

  <hr>

  <div id="computer2" class="lesson-topic" style="display:none;">
    <h3>ບົດທີ 2: Hardware ແລະ Software</h3>
    <p>Hardware - ອຸປະກອນທີ່ຈັບຕ້ອງໄດ້.</p>
    <p>Software - ໂປຣແກຣມທີ່ໃຊ້ໃນ Computer.</p>
  </div>
    <div id="computerQuiz" style="display:none;">
    <hr>
    <h3>📝 Quiz: Computer Basic</h3>

    <p>1. Computer ໃຊ້ເຮັດຫຍັງ?</p>
    <label><input type="radio" name="q1" value="a"> ປະມວນຜົນຂໍ້ມູນ</label><br>
    <label><input type="radio" name="q1" value="b"> ໃຊ້ປຸງອາຫານ</label><br>
    <label><input type="radio" name="q1" value="c"> ໃຊ້ຊັກເຄື່ອງ</label>

    <hr>

    <p>2. ອຸປະກອນໃດແມ່ນ Hardware?</p>
    <label><input type="radio" name="q2" value="a"> Windows</label><br>
    <label><input type="radio" name="q2" value="b"> Keyboard</label><br>
    <label><input type="radio" name="q2" value="c"> Microsoft Word</label>

    <hr>

    <p>3. Software ແມ່ນຫຍັງ?</p>
    <label><input type="radio" name="q3" value="a"> ໜ້າຈໍ</label><br>
    <label><input type="radio" name="q3" value="b"> ເມົາສ໌</label><br>
    <label><input type="radio" name="q3" value="c"> ໂປຣແກຣມ</label>

    <br><br>
    <button onclick="checkComputerQuiz()">ກວດຄຳຕອບ</button>

    <p id="computerQuizResult"></p>
  </div>
`;
  }
  
else if (name === "router") {
  title.textContent = "📡 Router & Wi-Fi";

  body.innerHTML = `
    <h3>📚 ເລືອກບົດຮຽນ Router & Wi-Fi</h3>

    <button onclick="showComputerLesson('router1')">
      ບົດທີ 1: Router ແມ່ນຫຍັງ?
    </button>

    <button onclick="showComputerLesson('router2')">
      ບົດທີ 2: ສ່ວນປະກອບຂອງ Router
    </button>

    <button onclick="showComputerLesson('router3')">
      ບົດທີ 3: Wi-Fi ແມ່ນຫຍັງ?
    </button>
<button onclick="showRouterQuiz()">
  📝 ເຮັດແບບທົດສອບ Router & Wi-Fi
</button>
    <hr>

    <div id="router1" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 1: Router ແມ່ນຫຍັງ?</h3>
      <p>
        Router ແມ່ນອຸປະກອນເຄືອຂ່າຍ
        ທີ່ໃຊ້ເຊື່ອມຕໍ່ Network
        ແລະສົ່ງຂໍ້ມູນລະຫວ່າງເຄືອຂ່າຍ.
      </p>
    </div>

    <div id="router2" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 2: ສ່ວນປະກອບຂອງ Router</h3>
      <p>1. WAN Port - ຊ່ອງຮັບ Internet</p>
      <p>2. LAN Port - ຊ່ອງເຊື່ອມຕໍ່ອຸປະກອນ</p>
      <p>3. Wi-Fi Antenna - ເສົາສັນຍານ Wi-Fi</p>
      <p>4. Reset Button - ປຸ່ມຄືນຄ່າໂຮງງານ</p>
    </div>

    <div id="router3" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 3: Wi-Fi ແມ່ນຫຍັງ?</h3>
      <p>
        Wi-Fi ແມ່ນເຕັກໂນໂລຊີ
        ທີ່ໃຊ້ຄື້ນວິທະຍຸ
        ເພື່ອເຊື່ອມຕໍ່ Network
        ໂດຍບໍ່ຕ້ອງໃຊ້ສາຍ.
      </p>
    </div>
    <div id="routerQuiz" style="display:none;">

  <hr>
  <h3>📝 Quiz: Router & Wi-Fi</h3>

  <p>1. Router ເຮັດໜ້າທີ່ຫຍັງ?</p>

  <label>
    <input type="radio" name="rq1" value="a">
    ເຊື່ອມຕໍ່ Network ແລະສົ່ງຂໍ້ມູນ
  </label><br>

  <label>
    <input type="radio" name="rq1" value="b">
    ພິມເອກະສານ
  </label><br>

  <label>
    <input type="radio" name="rq1" value="c">
    ສະແກນຮູບພາບ
  </label>

  <hr>

  <p>2. ພອດໃດໃນ Router ໃຊ້ເຊື່ອມຕໍ່ກັບ Network ພາຍໃນ?</p>

  <label>
    <input type="radio" name="rq2" value="a">
    WAN
  </label><br>

  <label>
    <input type="radio" name="rq2" value="b">
    LAN
  </label><br>

  <label>
    <input type="radio" name="rq2" value="c">
    Reset
  </label>

  <hr>

  <p>3. Wi-Fi ໃຊ້ສື່ກາງແບບໃດ?</p>

  <label>
    <input type="radio" name="rq3" value="a">
    ສາຍ LAN
  </label><br>

  <label>
    <input type="radio" name="rq3" value="b">
    ສາຍໄຟຟ້າ
  </label><br>
  <label>
    <input type="radio" name="rq3" value="c">
    ຄື້ນສັນຍານໄຮ້ສາຍ
  </label>
  <br><br>
  <button onclick="checkRouterQuiz()">
    ກວດຄຳຕອບ
  </button>

  <p id="routerQuizResult"></p>

</div>
  `;
}
else if (name === "support") {
  title.textContent = "🛠️ IT Support";

  body.innerHTML = `
    <h3>📚 ເລືອກບົດຮຽນ IT Support</h3>

    <button onclick="showComputerLesson('support1')">
      ບົດທີ 1: IT Support ແມ່ນຫຍັງ?
    </button>

    <button onclick="showComputerLesson('support2')">
      ບົດທີ 2: ບັນຫາ IT ທີ່ພົບເລື້ອຍ
    </button>

    <button onclick="showComputerLesson('support3')">
      ບົດທີ 3: ຂັ້ນຕອນການແກ້ໄຂ
    </button>
    <button onclick="showSupportQuiz()">
  📝 ເຮັດແບບທົດສອບ IT Support
</button>

    <hr>

    <div id="support1" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 1: IT Support ແມ່ນຫຍັງ?</h3>
      <p>
        IT Support ແມ່ນວຽກງານ
        ຊ່ວຍແກ້ໄຂບັນຫາດ້ານ IT
        ໃຫ້ຜູ້ໃຊ້ຄອມພິວເຕີ.
      </p>
    </div>

    <div id="support2" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 2: ບັນຫາ IT ທີ່ພົບເລື້ອຍ</h3>
      <p>1. Computer ເປີດບໍ່ຕິດ</p>
      <p>2. Internet ໃຊ້ບໍ່ໄດ້</p>
      <p>3. Printer ພິມບໍ່ອອກ</p>
      <p>4. Software ເປີດບໍ່ໄດ້</p>
    </div>

    <div id="support3" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 3: ຂັ້ນຕອນການແກ້ໄຂ</h3>
      <p>1. ກວດສອບອາການຂອງບັນຫາ</p>
      <p>2. ກວດສອບສາຍໄຟ ແລະສາຍສັນຍານ</p>
      <p>3. ກວດສອບການຕັ້ງຄ່າ</p>
      <p>4. ທົດສອບວ່າບັນຫາແກ້ໄຂແລ້ວຫຼືບໍ່</p>
    </div>
    <div id="supportQuiz" style="display:none;">

  <hr>
  <h3>📝 Quiz: IT Support</h3>

  <p>1. IT Support ມີໜ້າທີ່ຫຍັງ?</p>

  <label>
    <input type="radio" name="sq1" value="a">
    ຊ່ວຍແກ້ໄຂບັນຫາ Computer ແລະ IT
  </label><br>

  <label>
    <input type="radio" name="sq1" value="b">
    ປຸງອາຫານ
  </label><br>

  <label>
    <input type="radio" name="sq1" value="c">
    ອອກແບບເຮືອນ
  </label>
  <hr>
  <p>2. ຖ້າ Computer ບໍ່ມີ Internet ຄວນກວດຫຍັງກ່ອນ?</p>
  <label>
    <input type="radio" name="sq2" value="a">
    ປ່ຽນຈໍ Monitor
  </label><br>

  <label>
    <input type="radio" name="sq2" value="b">
    ກວດສາຍ Network ແລະ Wi-Fi
  </label><br>

  <label>
    <input type="radio" name="sq2" value="c">
    ປ່ຽນ Keyboard
  </label>

  <hr>

  <p>3. ຫຼັງຈາກແກ້ໄຂບັນຫາ IT ແລ້ວ ຄວນເຮັດຫຍັງ?</p>

  <label>
    <input type="radio" name="sq3" value="a">
    ປິດ Computer ທັນທີ
  </label><br>

  <label>
    <input type="radio" name="sq3" value="b">
    ບໍ່ຕ້ອງກວດຫຍັງອີກ
  </label><br>

  <label>
    <input type="radio" name="sq3" value="c">
    ທົດສອບວ່າບັນຫາຖືກແກ້ແລ້ວ
  </label>

  <br><br>

  <button onclick="checkSupportQuiz()">
    ກວດຄຳຕອບ
  </button>

  <p id="supportQuizResult"></p>

</div>
  `;
}

else if (name === "python") {
  title.textContent = "🐍 Python Basic";

  body.innerHTML = `
    <h3>📚 ເລືອກບົດຮຽນ Python Basic</h3>

    <button onclick="showComputerLesson('python1')">
      ບົດທີ 1: Python ແມ່ນຫຍັງ?
    </button>

    <button onclick="showComputerLesson('python2')">
      ບົດທີ 2: ຄຳສັ່ງທຳອິດ
    </button>

    <button onclick="showComputerLesson('python3')">
      ບົດທີ 3: ຕົວແປ (Variables)
    </button>
<button onclick="showPythonQuiz()">
  📝 ເຮັດແບບທົດສອບ Python Basic
</button>

    <hr>

    <div id="python1" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 1: Python ແມ່ນຫຍັງ?</h3>
      <p>
        Python ແມ່ນພາສາ Programming
        ທີ່ໃຊ້ສ້າງ Software, Website
        ແລະລະບົບອັດຕະໂນມັດ.
      </p>
    </div>

    <div id="python2" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 2: ຄຳສັ່ງທຳອິດ</h3>
      <p>ຕົວຢ່າງຄຳສັ່ງ Python:</p>
      <pre><code>print("Hello Lao IT Learning")</code></pre>
      <p>ຄຳສັ່ງ print() ໃຊ້ສະແດງຂໍ້ຄວາມ.</p>
    </div>

    <div id="python3" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 3: ຕົວແປ (Variables)</h3>
      <pre><code>name = "Lao IT"
age = 20

print(name)
print(age)</code></pre>
      <p>
        Variable ແມ່ນບ່ອນເກັບຂໍ້ມູນ
        ເພື່ອນຳໄປໃຊ້ໃນໂປຣແກຣມ.
      </p>
    </div>
    <div id="pythonQuiz" style="display:none;">

  <hr>
  <h3>📝 Quiz: Python Basic</h3>

  <p>1. Python ແມ່ນຫຍັງ?</p>

  <label>
    <input type="radio" name="pq1" value="b">
    ພາສາສຳລັບຂຽນໂປຣແກຣມ
  </label><br>

  <label>
    <input type="radio" name="pq1" value="a">
    ອຸປະກອນ Computer
  </label><br>

  <label>
    <input type="radio" name="pq1" value="c">
  </label>

  <hr>

  <p>2. ຄຳສັ່ງໃດໃຊ້ສະແດງຂໍ້ຄວາມໃນ Python?</p>

  <label>
    <input type="radio" name="pq2" value="a">
    input()
  </label><br>

  <label>
    <input type="radio" name="pq2" value="c">
    print()
  </label><br>

  <label>
    <input type="radio" name="pq2" value="b">
    open()
  </label>

  <hr>

  <p>3. Variable ໃນ Python ໃຊ້ເຮັດຫຍັງ?</p>

  <label>
    <input type="radio" name="pq3" value="b">
    ລຶບໂປຣແກຣມ
  </label><br>

  <label>
    <input type="radio" name="pq3" value="c">
    ປິດ Computer
  </label><br>

  <label>
    <input type="radio" name="pq3" value="a">
    ເກັບຄ່າຂໍ້ມູນ
  </label>

  <br><br>

  <button onclick="checkPythonQuiz()">
    ກວດຄຳຕອບ
  </button>

  <p id="pythonQuizResult"></p>

</div>
  `;
}
 
else if (name === "web") {
  title.textContent = "🌍 Web Development";

  body.innerHTML = `
    <h3>📚 ເລືອກບົດຮຽນ Web Development</h3>

    <button onclick="showComputerLesson('web1')">
      ບົດທີ 1: Web Development ແມ່ນຫຍັງ?
    </button>

    <button onclick="showComputerLesson('web2')">
      ບົດທີ 2: ພາສາທີ່ໃຊ້ສ້າງ Website
    </button>

    <button onclick="showComputerLesson('web3')">
      ບົດທີ 3: ຕົວຢ່າງ HTML
    </button>

    <button onclick="showComputerLesson('web4')">
      ບົດທີ 4: ສະຫຼຸບ
    </button>
<button onclick="showWebQuiz()">
  📝 ເຮັດແບບທົດສອບ Web Development
</button>

    <hr>

    <div id="web1" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 1: Web Development ແມ່ນຫຍັງ?</h3>
      <p>
        Web Development ແມ່ນການສ້າງ Website
        ເພື່ອໃຫ້ຄົນສາມາດເຂົ້າມາໃຊ້ງານຜ່ານ Browser.
      </p>
    </div>

    <div id="web2" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 2: ພາສາທີ່ໃຊ້ສ້າງ Website</h3>
      <p>1. HTML - ສ້າງໂຄງສ້າງ Website</p>
      <p>2. CSS - ຕົກແຕ່ງ Website</p>
      <p>3. JavaScript - ເພີ່ມການເຮັດວຽກໃຫ້ Website</p>
    </div>

    <div id="web3" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 3: ຕົວຢ່າງ HTML</h3>
      <pre><code>&lt;h1&gt;Hello Lao IT Learning&lt;/h1&gt;
&lt;p&gt;Welcome to my website&lt;/p&gt;</code></pre>
    </div>

    <div id="web4" class="lesson-topic" style="display:none;">
      <h3>ບົດທີ 4: ສະຫຼຸບ</h3>
      <p>
        ເມື່ອຮຽນ HTML, CSS ແລະ JavaScript
        ແລ້ວ ເຮົາກໍສາມາດເລີ່ມສ້າງ Website
        ຂອງຕົນເອງໄດ້.
      </p>
   </div>
   
<div id="webQuiz" style="display:none;">

  <hr>
  <h3>📝 Quiz: Web Development</h3>

  <p>1. HTML ໃຊ້ເຮັດຫຍັງ?</p>

  <label>
    <input type="radio" name="wq1" value="a">
    ຕົກແຕ່ງ Website
  </label><br>

  <label>
    <input type="radio" name="wq1" value="b">
    ສ້າງໂຄງສ້າງ Website
  </label><br>

  <label>
    <input type="radio" name="wq1" value="c">
    ຈັດການ Database
  </label>

  <hr>

  <p>2. CSS ໃຊ້ເຮັດຫຍັງ?</p>

  <label>
    <input type="radio" name="wq2" value="a">
    ຂຽນ JavaScript
  </label><br>

  <label>
    <input type="radio" name="wq2" value="b">
    ສ້າງ Database
  </label><br>

  <label>
    <input type="radio" name="wq2" value="c">
    ຕົກແຕ່ງ Website
  </label>

  <hr>

  <p>3. JavaScript ໃຊ້ເຮັດຫຍັງ?</p>

  <label>
    <input type="radio" name="wq3" value="a">
    ເພີ່ມການໂຕ້ຕອບໃນ Website
  </label><br>

  <label>
    <input type="radio" name="wq3" value="b">
    ຕົກແຕ່ງສີ Website
  </label><br>

  <label>
    <input type="radio" name="wq3" value="c">
    ສ້າງໂຄງສ້າງ HTML
  </label>

  <br><br>

  <button onclick="checkWebQuiz()">
    ກວດຄຳຕອບ
  </button>

  <p id="webQuizResult"></p>

</div>

  `;
}
  body.insertAdjacentHTML("beforeend", `
  <div id="lessonNavigation" style="display:none;">

    <p id="lessonProgressText">ຄວາມຄືບໜ້າ: 0%</p>

    <div style="
      width:100%;
      height:12px;
      background:#ddd;
      border-radius:10px;
      overflow:hidden;
      margin-bottom:15px;
    ">
      <div id="lessonProgressFill" style="
        width:0%;
        height:100%;
        background:#2196F3;
        border-radius:10px;
      "></div>
    </div>

    <button id="previousLesson"
      onclick="changeLesson(-1)" disabled>
      ← ບົດກ່ອນໜ້າ
    </button>

    <button id="nextLesson"
      onclick="changeLesson(1)">
      ບົດຕໍ່ໄປ →
    </button>

  </div>
  `);
  
  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });
}
function closeLesson() {
  const section = document.getElementById("lessonContent");

  if (section) {
    section.style.display = "none";
  }

  const courses = document.getElementById("courses");

  if (courses) {
    courses.scrollIntoView({
      behavior: "smooth"
    });
  }
}

let currentLessonIndex = -1;
let currentLessonList = [];

function showComputerLesson(id) {
  const topics = Array.from(
    document.querySelectorAll(
      "#lessonBody .lesson-topic"
    )
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  const selected = document.getElementById(id);
  const quiz = document.getElementById("computerQuiz");

if (quiz) {
  quiz.style.display = "none";
}

  if (selected) {
    selected.style.display = "block";
      const navigation = document.getElementById("lessonNavigation");

  if (navigation) {
    navigation.style.display = "block";
  }
    currentLessonList = topics;
    currentLessonIndex = topics.indexOf(selected);

    selected.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    updateLessonButtons();
  }
}

function changeLesson(direction) {
  const newIndex = currentLessonIndex + direction;

  if (
    newIndex >= 0 &&
    newIndex < currentLessonList.length
  ) {
    showComputerLesson(
      currentLessonList[newIndex].id
    );
  }
}

function updateLessonButtons() {
  const previous = document.getElementById("previousLesson");
  const next = document.getElementById("nextLesson");

  if (previous) {
    previous.disabled = currentLessonIndex === 0;
  }

  if (next) {
    next.disabled =
      currentLessonIndex === currentLessonList.length - 1;
  }
    const progress =
    ((currentLessonIndex + 1) /
    currentLessonList.length) * 100;

  const progressFill =
    document.getElementById("lessonProgressFill");

  const progressText =
    document.getElementById("lessonProgressText");

  if (progressFill && progressText) {
    progressFill.style.width = progress + "%";

    progressText.textContent =
      "ຄວາມຄືບໜ້າ: " +
      Math.round(progress) + "%";
  }
}
function checkComputerQuiz() {

  const answers = {
    q1: "a",
    q2: "b",
    q3: "c"
  };

  let score = 0;

  for (let question in answers) {

    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }
saveQuizScore("Computer Basic", score, 3);
saveQuizScoreOnline("Computer Basic", score, 3);
  const result = document.getElementById("computerQuizResult");

  result.innerHTML =
    "🎉 ທ່ານໄດ້ " + score + " / 3 ຄະແນນ";

  if (score === 3) {
    result.innerHTML += "<br>🏆 ດີເລີດ! ຕອບຖືກທຸກຂໍ້";
  } else {
    result.innerHTML += "<br>📚 ລອງທົດສອບອີກຄັ້ງ!";
  }
}
function checkNetworkQuiz() {

  const answers = {
    nq1: "a",
    nq2: "b",
    nq3: "c"
  };

  let score = 0;

  for (let question in answers) {

    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }
saveQuizScore("Network Basic", score, 3);
saveQuizScoreOnline("Network Basic", score, 3);
  const result = document.getElementById("networkQuizResult");

  result.innerHTML =
    "🎉 ທ່ານໄດ້ " + score + " / 3 ຄະແນນ";

  if (score === 3) {
    result.innerHTML += "<br>🏆 ດີເລີດ! ຕອບຖືກທຸກຂໍ້";
  } else {
    result.innerHTML += "<br>📚 ລອງທົດສອບອີກຄັ້ງ!";
  }
}


function showComputerQuiz() {

  // ເຊື່ອງບົດຮຽນທັງໝົດ
  const topics = document.querySelectorAll(
    "#lessonBody .lesson-topic"
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  // ສະແດງ Quiz
  const quiz = document.getElementById("computerQuiz");

  if (quiz) {
    quiz.style.display = "block";

    quiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  // ເຊື່ອງປຸ່ມບົດຮຽນກ່ອນ/ຕໍ່ໄປ
  const navigation = document.getElementById("lessonNavigation");

  if (navigation) {
    navigation.style.display = "none";
  }
}


function showNetworkQuiz() {

  const topics = document.querySelectorAll(
    "#lessonBody .lesson-topic"
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  const quiz = document.getElementById("networkQuiz");

  if (quiz) {
    quiz.style.display = "block";

    quiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  const navigation = document.getElementById("lessonNavigation");

  if (navigation) {
    navigation.style.display = "none";
  }
}
function checkRouterQuiz() {

  const answers = {
    rq1: "a",
    rq2: "b",
    rq3: "c"
  };

  let score = 0;

  for (let question in answers) {

    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }
saveQuizScore("Router & Wi-Fi", score, 3);
saveQuizScoreOnline("Router & Wi-Fi", score, 3);
  const result = document.getElementById("routerQuizResult");

  result.innerHTML =
    "🎉 ທ່ານໄດ້ " + score + " / 3 ຄະແນນ";

  if (score === 3) {
    result.innerHTML += "<br>🏆 ດີເລີດ! ຕອບຖືກທຸກຂໍ້";
  } else {
    result.innerHTML += "<br>📚 ລອງທົດສອບອີກຄັ້ງ!";
  }
}
function showRouterQuiz() {

  const topics = document.querySelectorAll(
    "#lessonBody .lesson-topic"
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  const quiz = document.getElementById("routerQuiz");

  if (quiz) {
    quiz.style.display = "block";

    quiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  const navigation = document.getElementById("lessonNavigation");

  if (navigation) {
    navigation.style.display = "none";
  }
}
function checkSupportQuiz() {

  const answers = {
    sq1: "a",
    sq2: "b",
    sq3: "c"
  };

  let score = 0;

  for (let question in answers) {

    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }
saveQuizScore("IT Support", score, 3);
saveQuizScoreOnline("IT Support", score, 3);
  const result = document.getElementById("supportQuizResult");

  result.innerHTML =
    "🎉 ທ່ານໄດ້ " + score + " / 3 ຄະແນນ";

  if (score === 3) {
    result.innerHTML += "<br>🏆 ດີເລີດ! ຕອບຖືກທຸກຂໍ້";
  } else {
    result.innerHTML += "<br>📚 ລອງທົດສອບອີກຄັ້ງ!";
  }
}
function showSupportQuiz() {

  const topics = document.querySelectorAll(
    "#lessonBody .lesson-topic"
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  const quiz = document.getElementById("supportQuiz");

  if (quiz) {
    quiz.style.display = "block";

    quiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  const navigation = document.getElementById("lessonNavigation");

  if (navigation) {
    navigation.style.display = "none";
  }
}
function checkPythonQuiz() {

  const answers = {
    pq1: "b",
    pq2: "c",
    pq3: "a"
  };

  let score = 0;

  for (let question in answers) {

    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }
saveQuizScore("Python Basic", score, 3);
saveQuizScoreOnline("Python Basic", score, 3);
  const result = document.getElementById("pythonQuizResult");

  result.innerHTML =
    "🎉 ທ່ານໄດ້ " + score + " / 3 ຄະແນນ";

  if (score === 3) {
    result.innerHTML += "<br>🏆 ດີເລີດ! ຕອບຖືກທຸກຂໍ້";
  } else {
    result.innerHTML += "<br>📚 ກະລຸນາທົບທວນບົດຮຽນອີກຄັ້ງ!";
  }
}
function showPythonQuiz() {

  // ເຊື່ອງບົດຮຽນທັງໝົດ
  const topics = document.querySelectorAll(
    "#lessonBody .lesson-topic"
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  // ສະແດງ Quiz Python
  const quiz = document.getElementById("pythonQuiz");

  if (quiz) {
    quiz.style.display = "block";

    quiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  // ເຊື່ອງ Progress Bar ແລະປຸ່ມບົດຮຽນ
  const navigation = document.getElementById(
    "lessonNavigation"
  );

  if (navigation) {
    navigation.style.display = "none";
  }

}

function checkWebQuiz() {

  const answers = {
    wq1: "b",
    wq2: "c",
    wq3: "a"
  };

  let score = 0;

  for (let question in answers) {
    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }
saveQuizScore("Web Development", score, 3);
saveQuizScoreOnline("Web Development", score, 3);
  const result = document.getElementById("webQuizResult");

  if (result) {
    result.innerHTML =
      "🎉 ທ່ານໄດ້ " + score + " / 3 ຄະແນນ";
  }
}

function showWebQuiz() {

  // ເຊື່ອງບົດຮຽນທັງໝົດ
  const topics = document.querySelectorAll(
    "#lessonBody .lesson-topic"
  );

  topics.forEach(function(topic) {
    topic.style.display = "none";
  });

  // ສະແດງ Quiz
  const quiz = document.getElementById("webQuiz");

  if (quiz) {
    quiz.style.display = "block";

    quiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  // ເຊື່ອງ Progress Bar
  const navigation = document.getElementById(
    "lessonNavigation"
  );

  if (navigation) {
    navigation.style.display = "none";
  }
}

function saveQuizScore(courseName, score, total) {

  let scores = JSON.parse(
    localStorage.getItem("laoITQuizScores") || "{}"
  );

  scores[courseName] = {
    score: score,
    total: total,
    date: new Date().toLocaleString()
  };

  localStorage.setItem(
    "laoITQuizScores",
    JSON.stringify(scores)
  );

}

// Show Quiz Scores from Supabase
async function showScorePage() {

  const scoreSection =
    document.getElementById("dashboardMyScores");

  const list =
    document.getElementById("dashboardScoreList");

  const total =
    document.getElementById("dashboardScoreTotal");

  if (!scoreSection || !list || !total) return;

  // ກົດອີກຄັ້ງເພື່ອເຊື່ອງຄະແນນ
  if (scoreSection.style.display === "block") {
    scoreSection.style.display = "none";
    return;
  }
  scoreSection.style.display = "block";
  list.innerHTML = "ກຳລັງໂຫຼດຄະແນນ...";
  total.textContent = "";
  const { data: { user }, error: userError } =
    await supabaseClient.auth.getUser();
  if (userError || !user) {
    list.textContent = "ກະລຸນາ Login ກ່ອນເບິ່ງຄະແນນ";
    return;
  }
  const { data: scores, error } = await supabaseClient
    .from("quiz_scores")
    .select("course_name, score, total");

  if (error) {
    list.textContent =
      "ໂຫຼດຄະແນນບໍ່ສຳເລັດ: " + error.message;
    return;
  }
  let totalScore = 0;
  let totalQuestions = 0;
  const courses = [
    "Computer Basic",
    "Network Basic",
    "Router & Wi-Fi",
    "IT Support",
    "Python Basic",
    "Web Development"
  ];
  let html = "";
  courses.forEach(function(course) {
    const result = scores.find(function(item) {
      return item.course_name === course;
    });

    if (result) {
      totalScore += result.score;
      totalQuestions += result.total;

      html += `
        <p>📘 ${course}</p>
        <p>ຄະແນນ: ${result.score} / ${result.total}</p>
        <hr>
      `;
    } else {
      html += `
        <p>📘 ${course}</p>
        <p>ຍັງບໍ່ໄດ້ທົດສອບ</p>
        <hr>
      `;
    }

  });

  list.innerHTML = html;

  total.textContent =
    "🏆 ຄະແນນລວມ: " +
    totalScore + " / " + totalQuestions;
}
function closeScorePage() {

  const page = document.getElementById("scorePage");

  if (page) {
    page.style.display = "none";
  }

  const courses = document.getElementById("courses");

  if (courses) {
    courses.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

}
// Student Registration
async function registerStudent() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const password = document.getElementById("studentPassword").value;
  const message = document.getElementById("authMessage");

  if (!fullName || !email || !password) {
    message.textContent = "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password ຕ້ອງມີຢ່າງໜ້ອຍ 8 ຕົວ";
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (error) {
    message.textContent = "ສະໝັກບໍ່ສຳເລັດ: " + error.message;
    return;
  }

  message.textContent =
    "ສະໝັກສຳເລັດ! ກະລຸນາກວດ Email ເພື່ອຢືນຢັນ.";

}

// Student Login
async function loginStudent() {
  const email = document.getElementById("studentEmail").value.trim();
  const password = document.getElementById("studentPassword").value;
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = "ກະລຸນາປ້ອນ Email ແລະ Password";
    return;
  }

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

  if (error) {
    message.textContent = "Login ບໍ່ສຳເລັດ: " + error.message;
    return;
  }

  const user = data.user;

  const { error: profileError } = await supabaseClient
    .from("students")
    .upsert({
      id: user.id,
      full_name: user.user_metadata?.full_name || ""
    });

  if (profileError) {
    message.textContent =
      "Login ສຳເລັດ ແຕ່ບັນທຶກ Profile ບໍ່ສຳເລັດ: " +
      profileError.message;
    return;
  }

  message.textContent = "ຍິນດີຕ້ອນຮັບ! Login ສຳເລັດ.";
  showStudentDashboard(user);

document.getElementById("authSection").style.display = "none";
}

// Student Logout

async function logoutStudent() {
  const { error } = await supabaseClient.auth.signOut();

  const message = document.getElementById("authMessage");

  if (error) {
    message.textContent =
      "Logout ບໍ່ສຳເລັດ: " + error.message;
    return;
  }

  message.textContent = "ອອກຈາກລະບົບສຳເລັດ.";

  document.getElementById("studentDashboard").style.display = "none";
  document.getElementById("authSection").style.display = "none";

  document.getElementById("navGuest").style.display = "inline-flex";
  document.getElementById("navStudent").style.display = "none";
}

 // Save Quiz Score to Supabase
async function saveQuizScoreOnline(courseName, score, total) {

  const { data: { user }, error: userError } =
    await supabaseClient.auth.getUser();

  if (userError || !user) {
    console.log("Student is not logged in");
    return;
  }

  const { error } = await supabaseClient
    .from("quiz_scores")
    .upsert({
      student_id: user.id,
      course_name: courseName,
      score: score,
      total: total
    }, {
      onConflict: "student_id,course_name"
    });

  if (error) {
    console.log("Save online score error:", error.message);
  } else {
    console.log("Online score saved successfully");
  }
}

// Show Student Dashboard
function showStudentDashboard(user) {

  const dashboard = document.getElementById("studentDashboard");
  const name = document.getElementById("dashboardName");
  const email = document.getElementById("dashboardEmail");

  if (dashboard && name && email) {
    name.textContent =
      user.user_metadata?.full_name || "Student";

    email.textContent = user.email || "";

    dashboard.style.display = "block";
    
const navGuest = document.getElementById("navGuest");
const navStudent = document.getElementById("navStudent");
const navStudentName = document.getElementById("navStudentName");

if (navGuest && navStudent && navStudentName) {
  navGuest.style.display = "none";
  navStudent.style.display = "inline-flex";

  navStudentName.textContent =
    user.user_metadata?.full_name || "Student";
}
loadDashboardScores();
  }
}

async function loadDashboardScores() {
  const totalElement =
    document.getElementById("dashboardTotalScore");

  const coursesElement =
    document.getElementById("dashboardCompletedCourses");

  const progressBar =
    document.getElementById("dashboardProgressBar");

  const progressText =
    document.getElementById("dashboardProgressText");

  if (!totalElement || !coursesElement) return;

  totalElement.textContent = "ກຳລັງໂຫຼດ...";

  const { data: { user }, error: userError } =
    await supabaseClient.auth.getUser();

  if (userError || !user) {
    totalElement.textContent = "ກະລຸນາ Login";
    coursesElement.textContent = "";
    return;
  }

  const { data: scores, error } = await supabaseClient
    .from("quiz_scores")
    .select("course_name, score, total");

  if (error) {
    totalElement.textContent = "ໂຫຼດຄະແນນບໍ່ສຳເລັດ";
    coursesElement.textContent = "";
    return;
  }

  const courseNames = [
    "Computer Basic",
    "Network Basic",
    "Router & Wi-Fi",
    "IT Support",
    "Python Basic",
    "Web Development"
  ];

  let scoreSum = 0;
  let questionSum = 0;

  courseNames.forEach(function(course) {
    const result = scores.find(function(item) {
      return item.course_name === course;
    });

    if (result) {
      scoreSum += result.score;
      questionSum += result.total;
    }
  });

  const completedCourses = courseNames.filter(function(course) {
    return scores.some(function(item) {
      return item.course_name === course;
    });
  }).length;

  const progressPercent = Math.round(
    completedCourses / courseNames.length * 100
  );

  totalElement.textContent =
    "🏆 ຄະແນນລວມ: " + scoreSum + " / " + questionSum;

  coursesElement.textContent =
    "📚 ວິຊາທີ່ທົດສອບ: " +
    completedCourses + " / 6";

  if (progressBar) {
    progressBar.style.width = progressPercent + "%";
  }

  if (progressText) {
    progressText.textContent = progressPercent + "%";
  }
}

function showAuthForm(mode) {
  const authSection = document.getElementById("authSection");

  const fullName = document.getElementById("fullName");
  const registerButton = document.getElementById("registerButton");
  const loginButton = document.getElementById("loginButton");
  const cancelButton = document.getElementById("cancelButton");
  const forgotButton =
  document.getElementById("forgotPasswordButton");

  if (!authSection) return;

  authSection.style.display = "block";

  if (mode === "login") {
    fullName.style.display = "none";
    registerButton.style.display = "none";
    loginButton.style.display = "inline-block";
    cancelButton.style.display = "inline-block";
    forgotButton.style.display = "inline-block";
  } else {
    fullName.style.display = "block";
    registerButton.style.display = "inline-block";
    loginButton.style.display = "none";
    cancelButton.style.display = "inline-block";
    forgotButton.style.display = "none";
  }

  authSection.scrollIntoView({
    behavior: "smooth"
  });
}

function cancelAuthForm() {
  document.getElementById("authSection").style.display = "none";
}
function showProfileForm() {
  const form = document.getElementById("profileForm");
  const nameInput = document.getElementById("profileFullName");
  const dashboardName = document.getElementById("dashboardName");

  if (!form || !nameInput || !dashboardName) return;

  nameInput.value = dashboardName.textContent.trim();
  form.style.display = "block";

  form.scrollIntoView({
    behavior: "smooth"
  });
}

function hideProfileForm() {
  const form = document.getElementById("profileForm");

  if (form) {
    form.style.display = "none";
  }
}
async function updateStudentProfile() {

  const nameInput =
    document.getElementById("profileFullName");

  const message =
    document.getElementById("profileMessage");

  const newName = nameInput.value.trim();

  if (!newName) {
    message.textContent = "ກະລຸນາປ້ອນຊື່";
    return;
  }

  message.textContent = "ກຳລັງບັນທຶກ...";

  const { data: { user }, error: userError } =
    await supabaseClient.auth.getUser();

  if (userError || !user) {
    message.textContent = "ກະລຸນາ Login ກ່ອນ";
    return;
  }

  const { error: updateError } = await supabaseClient
    .from("students")
    .update({ full_name: newName })
    .eq("id", user.id);

  if (updateError) {
    message.textContent =
      "ບັນທຶກບໍ່ສຳເລັດ: " + updateError.message;
    return;
  }

  const { data, error } =
    await supabaseClient.auth.updateUser({
      data: {
        full_name: newName
      }
    });

  if (error) {
    message.textContent =
      "ອັບເດດຊື່ບັນຊີບໍ່ສຳເລັດ: " + error.message;
    return;
  }

  document.getElementById("dashboardName").textContent =
    newName;

  const navName =
    document.getElementById("navStudentName");

  if (navName) {
    navName.textContent = newName;
  }

  message.textContent = "ບັນທຶກຊື່ສຳເລັດ!";

  setTimeout(function() {
    hideProfileForm();
  }, 1500);
}
async function updateStudentPassword() {
  const newPassword =
    document.getElementById("newPassword").value;

  const confirmPassword =
    document.getElementById("confirmPassword").value;

  const message =
    document.getElementById("resetPasswordMessage");

  if (!newPassword || !confirmPassword) {
    message.textContent =
      "ກະລຸນາປ້ອນ Password ໃຫ້ຄົບ";
    return;
  }

  if (newPassword.length < 8) {
    message.textContent =
      "Password ຕ້ອງມີຢ່າງໜ້ອຍ 8 ຕົວ";
    return;
  }

  if (newPassword !== confirmPassword) {
    message.textContent =
      "Password ທັງສອງບໍ່ກົງກັນ";
    return;
  }

  message.textContent =
    "ກຳລັງບັນທຶກ...";

  const { error } =
    await supabaseClient.auth.updateUser({
      password: newPassword
    });

  if (error) {
    message.textContent =
      "ປ່ຽນ Password ບໍ່ສຳເລັດ: " +
      error.message;
    return;
  }

  message.textContent =
    "ປ່ຽນ Password ສຳເລັດແລ້ວ!";

  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
  
}

supabaseClient.auth.onAuthStateChange(
  function(event, session) {
    console.log(
  "AUTH EVENT:",
  event,
  "HASH:",
  window.location.hash
);
    if (event === "PASSWORD_RECOVERY") {
      const authSection =
        document.getElementById("authSection");

      const resetForm =
        document.getElementById("resetPasswordForm");

      if (authSection && resetForm) {
        authSection.style.display = "block";
        resetForm.style.display = "block";

        resetForm.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }
);

window.showForgotPassword = async function() {

  const email = document
    .getElementById("studentEmail")
    .value.trim();

  const message =
    document.getElementById("authMessage");

  if (!email) {
    message.textContent =
      "ກະລຸນາປ້ອນ Email ກ່ອນ";
    return;
  }

  message.textContent = "ກຳລັງສົ່ງລິ້ງ...";

  const { error } =
    await supabaseClient.auth.resetPasswordForEmail(
      email,
      {
       redirectTo:
  "https://lao-it-learning.sattasine.workers.dev"
      }
    );

  if (error) {
    message.textContent =
      "ສົ່ງບໍ່ສຳເລັດ: " + error.message;
    return;
  }

  message.textContent =
    "ສົ່ງລິ້ງໄປ Email ແລ້ວ. ກະລຸນາກວດກ່ອງຈົດໝາຍ.";
};
