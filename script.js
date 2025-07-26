// إعداد
let currentLang = localStorage.getItem("lang") || "";
let deviceId = localStorage.getItem("deviceId") || "";
let userSession = JSON.parse(localStorage.getItem("session")) || null;
let currentQuestion = 0;
let answers = [];

// توليد معرف جهاز وحفظ
function initDevice() {
  if (!deviceId) {
    deviceId = "SR-" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("deviceId", deviceId);
  }
}

// اكتشاف لغة الجهاز أول مرة
function initLanguage() {
  if (!localStorage.getItem("lang")) {
    let browserLang = navigator.language.slice(0, 2);
    currentLang = translations[browserLang] ? browserLang : "en";
    localStorage.setItem("lang", currentLang);
  } else currentLang = localStorage.getItem("lang");
  document.getElementById("langSelect").value = currentLang;
  applyLanguage(currentLang);
}

// تطبيق اللغة على العناصر
function applyLanguage(lang) {
  const t = translations[lang].ui;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // UI
  document.getElementById("title").innerText = t.title;
  document.getElementById("ageLabel").innerText = t.age;

سالم لتصنيع وتجارة الشنط الحريمي, [7/26/2025 2:15 AM]
document.getElementById("genderLabel").innerText = t.gender;
  document.getElementById("startBtn").innerText = t.start;
  document.getElementById("nextBtn").innerText = t.next;
  document.getElementById("downloadPdfBtn").innerText = t.download_pdf;
  document.getElementById("shareBtn").innerText = t.share;
  document.getElementById("logoutBtn").innerText = t.logout;

  // رسالة ترحيب
  if (userSession) {
    document.getElementById("welcome").innerText = t.welcome;
    document.getElementById("logoutBtn").style.display = "inline-block";
  }
}

// تغيير اللغة يدوياً
function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  currentLang = lang;
  applyLanguage(lang);
}

// تبديل الثيم
function applyTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}
function toggleTheme() {
  let next = (localStorage.getItem("theme") === "dark") ? "light" : "dark";
  applyTheme(next);
}

// ابدأ الاختبار
function startTest() {
  const age = document.getElementById("ageInput").value;
  const gender = document.getElementById("genderSelect").value;
  if (!age) return alert("يرجى إدخال العمر");
  userSession = { age, gender, deviceId, timestamp: Date.now() };
  localStorage.setItem("session", JSON.stringify(userSession));
  document.getElementById("welcomeSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  renderQuestion();
}

// عرض السؤال الحالي
function renderQuestion() {
  if (currentQuestion >= questions.length) return showResults();
  const q = questions[currentQuestion];
  const container = document.getElementById("questionContainer");
  container.innerHTML = 
    <div class="question">${q.text[currentLang]}</div>
    <div class="options">
      ${Object.entries(translations[currentLang].options.likert)
        .map(([val, txt]) =>
          <label>
             <input type="radio" name="opt" value="${val}">
             ${txt}
           </label>
        ).join("")}
    </div>;
}

// انتقل للسؤال التالي
function nextQuestion() {
  const sel = document.querySelector('input[name="opt"]:checked');
  if (!sel) return alert("اختر إجابة");
  answers.push({
    category: questions[currentQuestion].category,
    value: Number(sel.value)
  });
  currentQuestion++;
  renderQuestion();
}

// عرض النتائج
function showResults() {
  document.getElementById("quizSection").classList.remove("active");
  document.getElementById("resultSection").classList.add("active");
  calculateSummary();
  showDetails();
}

// حساب الملخص
function calculateSummary() {
  const summaryDiv = document.getElementById("summary");
  const grouped = {};
  answers.forEach(a => grouped[a.category] = (grouped[a.category] || 0) + a.value);
  const top = Object.entries(grouped).sort((a,b)=>b[1]-a[1])[0];
  const trait = translations[currentLang].results.traits[top[0]];
  summaryDiv.innerHTML = 
    <h2>${translations[currentLang].ui.result_summary}</h2>
    <p>${translations[currentLang].results.summary_intro}</p>
    <strong>${trait}</strong>;
}

// عرض التفاصيل
function showDetails() {
  const detailsDiv = document.getElementById("details");
  let html = <h2>${translations[currentLang].ui.resultfull}</h2><p>${translations[currentLang].results.fullintro}</p>;
  for (let [cat, score] of Object.entries(
       answers.reduce((acc,a)=>{ acc[a.category]=(acc[a.category]||0)+a.value; return acc;},{})
     )) {
    const trait = translations[currentLang].results.traits[cat];
    html += <h3>${trait}</h3><p>Score: ${score}</p>;
  }
  detailsDiv.innerHTML = html;
}

// تحميل PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(document.getElementById("summary").innerText, 10, 10);
  doc.text(document.getElementById("details").innerText, 10, 30);
  doc.save("SecretsRoom_Report.pdf");
}

// مشاركة النتيجة
function shareResult() {
  const text = document.getElementById("summary").innerText
             + "\n\n" + document.getElementById("details").innerText;
  window.open(https://wa.me/?text=${encodeURIComponent(text)});
}

سالم لتصنيع وتجارة الشنط الحريمي, [7/26/2025 2:15 AM]
// تسجيل الخروج (حذف الجلسة)
function logout() {
  localStorage.removeItem("session");
  userSession = null;
  location.reload();
}

// عند التحميل
window.onload = () => {
  initDevice();
  initLanguage();
  applyTheme(localStorage.getItem("theme") || "light");
};
