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
  // التحقق من وجود الترجمة للغة المطلوبة
  if (!translations[lang]) {
      console.error(`الترجمة للغة ${lang} غير متوفرة.`);
      return; // أو استخدام لغة افتراضية
  }

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

  // UI - تحديث عناصر واجهة المستخدم الأخرى
  // تأكد من وجود العناصر قبل محاولة تحديثها
  const titleElement = document.getElementById("title");
  if (titleElement) titleElement.innerText = t.title || "";

  const ageLabelElement = document.getElementById("ageLabel");
  if (ageLabelElement) ageLabelElement.innerText = t.age || "";

  const genderLabelElement = document.getElementById("genderLabel");
  if (genderLabelElement) genderLabelElement.innerText = t.gender || "";

  const startBtnElement = document.getElementById("startBtn");
  if (startBtnElement) startBtnElement.innerText = t.start || "";

  const nextBtnElement = document.getElementById("nextBtn");
  if (nextBtnElement) nextBtnElement.innerText = t.next || "";

  const downloadPdfBtnElement = document.getElementById("downloadPdfBtn");
  if (downloadPdfBtnElement) downloadPdfBtnElement.innerText = t.download_pdf || "";

  const shareBtnElement = document.getElementById("shareBtn");
  if (shareBtnElement) shareBtnElement.innerText = t.share || "";

  const logoutBtnElement = document.getElementById("logoutBtn");
  if (logoutBtnElement) logoutBtnElement.innerText = t.logout || "";

  // رسالة ترحيب
  const welcomeElement = document.getElementById("welcome");
  if (welcomeElement) {
      if (userSession) {
        welcomeElement.innerText = t.welcome || "";
        welcomeElement.style.fontStyle = "italic"; // تطبيق النمط إذا لزم
        // التأكد من وجود زر تسجيل الخروج قبل إظهاره
        if (logoutBtnElement) {
            logoutBtnElement.style.display = "inline-block";
        }
      } else {
        welcomeElement.innerText = "";
        welcomeElement.style.fontStyle = ""; // إزالة النمط إذا لم يكن هناك جلسة
        if (logoutBtnElement) {
            logoutBtnElement.style.display = "none";
        }
      }
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
  // التحقق من وجود العناصر المطلوبة في الترجمة
  const likertOptions = translations[currentLang]?.options?.likert || {};
  container.innerHTML = `
    <div class="question">${q.text[currentLang] || "السؤال غير متوفر"}</div>
    <div class="options">
      ${Object.entries(likertOptions)
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
  if (!summaryDiv) return; // التحقق من وجود العنصر

  const grouped = {};
  answers.forEach(a => grouped[a.category] = (grouped[a.category] || 0) + a.value);
  const sortedEntries = Object.entries(grouped).sort((a,b)=>b[1]-a[1]);
  const top = sortedEntries[0];

  // معالجة حالة عدم وجود نتائج
  if (!top) {
    summaryDiv.innerHTML = `<h2>${translations[currentLang]?.ui?.result_summary || "التحليل المختصر"}</h2><p>لا توجد نتائج كافية</p>`;
    return;
  }

  const traitKey = top[0];
  const traitName = translations[currentLang]?.results?.traits[traitKey] || traitKey;
  const summaryIntro = translations[currentLang]?.results?.summary_intro || "هذه نظرة سريعة على شخصيتك:";

  summaryDiv.innerHTML = `
    <h2>${translations[currentLang]?.ui?.result_summary || "التحليل المختصر"}</h2>
    <p>${summaryIntro}</p>
    <strong>${traitName}</strong>`;
}

// عرض التفاصيل
function showDetails() {
  const detailsDiv = document.getElementById("details");
  if (!detailsDiv) return; // التحقق من وجود العنصر

  const grouped = answers.reduce((acc,a)=>{
    acc[a.category] = (acc[a.category]||0) + a.value;
    return acc;
  }, {});

  const t = translations[currentLang]?.ui || {};
  const results = translations[currentLang]?.results || {};

  let html = `<h2>${t.result_full || "التحليل التفصيلي"}</h2><p>${results.full_intro || "هذا التحليل التفصيلي المبني على نظريات علم النفس:"}</p>`;

  for (let [cat, score] of Object.entries(grouped)) {
    const trait = results.traits?.[cat] || cat; // استخدام اسم الفئة إذا لم توجد الترجمة
    html += `<div class="result-card"><h3>${trait}</h3><p>Score: ${score}</p></div>`; // إضافة الكلاس للتنسيق
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
  const summaryText = document.getElementById("summary")?.innerText || "";
  const detailsText = document.getElementById("details")?.innerText || "";
  doc.text(summaryText, 10, 10);
  doc.text(detailsText, 10, 30);
  doc.save("SecretsRoom_Report.pdf");
}

// مشاركة النتيجة
function shareResult() {
  const summaryText = document.getElementById("summary")?.innerText || "";
  const detailsText = document.getElementById("details")?.innerText || "";
  const text = summaryText + "\n\n" + detailsText;

  // استخدام Web Share API إذا كان مدعوماً
  if (navigator.share && text) { // التحقق من وجود نص للمشاركة
    navigator.share({
      title: translations[currentLang]?.ui?.title || "Secrets Room",
      text: text
    }).catch(error => {
        console.error('خطأ في المشاركة:', error);
        // _FALLBACK_ إلى WhatsApp إذا فشل Web Share
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    });
  } else if (text) {
    //_FALLBACK_ إلى WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  } else {
      alert("لا توجد نتائج للمشاركة");
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
