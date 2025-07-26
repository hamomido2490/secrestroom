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
// تطبيق اللغة على العناصر
function applyLanguage(lang) {
  const t = translations[lang].ui;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // تحديث عنوان الموقع حسب اللغة
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    if (lang === "ar") {
      siteTitle.innerHTML = 'غرفة الأسرار<br><span style="font-size: 1.2rem; font-weight: normal;">Secrets Room</span>';
    } else {
      siteTitle.innerHTML = 'Secrets Room<br><span style="font-size: 1.2rem; font-weight: normal;">غرفة الأسرار</span>';
    }
  }


function applyLanguage(lang) {
  const t = translations[lang].ui;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // UI
  document.getElementById("title").innerText = t.title;
  document.getElementById("ageLabel").innerText = t.age;
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
  document.getElementById("title").innerText = t.title;

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
  container.innerHTML = `
    <div class="question">${q.text[currentLang]}</div>
    <div class="options">
      ${Object.entries(translations[currentLang].options.likert)
        .map(([val, txt]) =>
          `<label>
             <input type="radio" name="opt" value="${val}">
             ${txt}
           </label>`
        ).join("")}
    </div>`;
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
  const sortedEntries = Object.entries(grouped).sort((a,b)=>b[1]-a[1]);
  const top = sortedEntries[0];
  
  // معالجة حالة عدم وجود نتائج
  if (!top) {
    summaryDiv.innerHTML = `<h2>${translations[currentLang].ui.result_summary}</h2><p>لا توجد نتائج كافية</p>`;
    return;
  }
  
  const trait = translations[currentLang].results.traits[top[0]];
  summaryDiv.innerHTML = `
    <h2>${translations[currentLang].ui.result_summary}</h2>
    <p>${translations[currentLang].results.summary_intro}</p>
    <strong>${trait}</strong>`;
}

// عرض التفاصيل
function showDetails() {
  const detailsDiv = document.getElementById("details");
  const grouped = answers.reduce((acc,a)=>{ 
    acc[a.category] = (acc[a.category]||0) + a.value; 
    return acc;
  }, {});
  
  const t = translations[currentLang].ui;
  const results = translations[currentLang].results;
  
  let html = `<h2>${t.result_full}</h2><p>${results.full_intro}</p>`;
  
  for (let [cat, score] of Object.entries(grouped)) {
    const trait = results.traits[cat];
    html += `<h3>${trait}</h3><p>Score: ${score}</p>`;
  }
  detailsDiv.innerHTML = html;
}

// تحميل PDF
function downloadPDF() {
  // التحقق من وجود مكتبة jsPDF
  if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
    alert('خطأ في تحميل مكتبة PDF');
    return;
  }
  
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
  
  // استخدام Web Share API إذا كان مدعوماً
  if (navigator.share) {
    navigator.share({ 
      title: translations[currentLang].ui.title,
      text: text 
    }).catch(console.error);
  } else {
    //_FALLBACK_ إلى WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  }
}

// تسجيل الخروج (حذف الجلسة)
function logout() {
  localStorage.removeItem("session");
  localStorage.removeItem("savedAnswers"); // حذف الإجابات المحفوظة
  userSession = null;
  location.reload();
}

// عند التحميل
window.onload = () => {
  initDevice();
  initLanguage();
  applyTheme(localStorage.getItem("theme") || "light");
};
