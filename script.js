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
    domain: questions[currentQuestion].domain, // حفظ المجال أيضًا
    value: Number(sel.value)
  });
  currentQuestion++;
  renderQuestion();
}

// عرض النتائج
function showResults() {
  document.getElementById("quizSection").classList.remove("active");
  document.getElementById("resultSection").classList.add("active");
  calculateSummary(); // حساب وعرض التحليل المختصر
  showDetails();      // حساب وعرض التحليل التفصيلي
}

// حساب الملخص (التحليل المختصر)
function calculateSummary() {
  const summaryDiv = document.getElementById("summary");
  if (!summaryDiv) return; // التحقق من وجود العنصر

  // 1. جمع النقاط حسب الفئة (category) - كما كان
  const scoresByCategory = {};
  answers.forEach(a => {
    scoresByCategory[a.category] = (scoresByCategory[a.category] || 0) + a.value;
  });

  // 2. تحديد أعلى فئتين للحصول على النظرية الأساسية
  const sortedCategories = Object.entries(scoresByCategory).sort((a, b) => b[1] - a[1]);
  const topCategories = sortedCategories.slice(0, 2); // أعلى فئتين

  // 3. جمع النقاط حسب المجال (domain) - جديد
  const scoresByDomain = {};
  answers.forEach((a, index) => {
    // استخدام المجال المخزن في الإجابة أو من السؤال الأصلي كاحتياطي
    const answerDomain = a.domain;
    const questionDomain = questions[index]?.domain || "unknown";
    const domain = answerDomain || questionDomain;
    scoresByDomain[domain] = (scoresByDomain[domain] || 0) + a.value;
  });

  // 4. تحديد المجال الأقوى
  const sortedDomains = Object.entries(scoresByDomain).sort((a, b) => b[1] - a[1]);
  const topDomainKey = sortedDomains[0]?.[0] || "full"; // افتراضي "full" إذا ما لقاش
  const topDomainName = translations[currentLang]?.results?.domains?.[topDomainKey] || topDomainKey;

  // 5. بناء نص الملخص
  let summaryText = `<h2>${translations[currentLang]?.ui?.result_summary || "التحليل المختصر"}</h2>`;
  summaryText += `<p>${translations[currentLang]?.results?.summary_intro || "هذه نظرة سريعة على شخصيتك:"}</p>`;

  // عرض المجال الأقوى
  summaryText += `<p><strong>مجالك الأقوى: ${topDomainName}</strong></p>`;

  // عرض أعلى الفئات (النظريات)
  summaryText += `<p>نظرياتك المهيمنة:`;
  topCategories.forEach(([catKey, score]) => {
    const categoryName = translations[currentLang]?.results?.traits?.[catKey] || catKey;
    summaryText += ` ${categoryName},`;
  });
  // إزالة الفاصلة الأخيرة
  if (topCategories.length > 0) {
    summaryText = summaryText.slice(0, -1);
  }
  summaryText += `</p>`;

  summaryDiv.innerHTML = summaryText;
}


// عرض التفاصيل (التحليل التفصيلي)
function showDetails() {
  const detailsDiv = document.getElementById("details");
  if (!detailsDiv) return; // التحقق من وجود العنصر

  // 1. جمع النقاط حسب الفئة (category) - كما كان
  const scoresByCategory = answers.reduce((acc, a, index) => {
    // الحصول على الفئة من السؤال نفسه (أكثر دقة)
    const questionCategory = questions[index]?.category || a.category;
    acc[questionCategory] = (acc[questionCategory] || 0) + a.value;
    return acc;
  }, {});

  // 2. جمع النقاط حسب المجال (domain) - جديد
  const scoresByDomain = {};
  answers.forEach((a, index) => {
    const questionDomain = questions[index]?.domain || "unknown";
    scoresByDomain[questionDomain] = (scoresByDomain[questionDomain] || 0) + a.value;
  });

  // 3. جمع النقاط حسب الفئة *ضمن* كل مجال - جديد
  const domainCategoryScores = {}; // { domain1: { cat1: score, cat2: score }, ... }
  answers.forEach((a, index) => {
    const question = questions[index];
    if (question) {
      const domain = question.domain || "unknown";
      const category = question.category || "unknown";
      if (!domainCategoryScores[domain]) domainCategoryScores[domain] = {};
      domainCategoryScores[domain][category] = (domainCategoryScores[domain][category] || 0) + a.value;
    }
  });

  // 4. بناء نص التفاصيل
  const t = translations[currentLang]?.ui || {};
  const results = translations[currentLang]?.results || {};
  const domains = translations[currentLang]?.results?.domains || {};

  let html = `<h2>${t.result_full || "التحليل التفصيلي"}</h2>`;
  html += `<p>${results.full_intro || "تحليل متكامل بجميع النظريات النفسية الحديثة والكلاسيكية:"}</p>`;

  // أ) عرض النتائج حسب المجالات (كما في الموقع)
  html += `<h3>📊 ${domains.full || "التحليل الكامل"}</h3>`;
  // يمكن عرض النقاط الإجمالية للمجالات هنا إذا حبيت
  // مثلاً:
  html += `<ul>`;
  Object.entries(scoresByDomain).forEach(([domainKey, score]) => {
    const domainName = domains[domainKey] || domainKey;
    html += `<li>${domainName}: ${score} نقطة</li>`;
  });
  html += `</ul>`;

  // ب) عرض تفاصيل كل مجال مع النظريات الخاصة بيه
  Object.entries(domainCategoryScores).forEach(([domainKey, categoryScores]) => {
    const domainName = domains[domainKey] || domainKey;
    html += `<div class="result-card">`;
    html += `<h3>🔍 ${domainName}</h3>`;
    html += `<ul>`;
    // ترتيب النظريات داخل المجال حسب النقاط
    const sortedCategoryEntries = Object.entries(categoryScores).sort((a, b) => b[1] - a[1]);
    sortedCategoryEntries.forEach(([catKey, score]) => {
      const categoryName = results.traits?.[catKey] || catKey;
      html += `<li>${categoryName}: ${score} نقطة</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  });

  // ج) عرض *جميع* النظريات مجمعة (اختياري، يمكن حذفه إذا كان التقسيم حسب المجال كافي)
  /*
  html += `<div class="result-card">`;
  html += `<h3>📚 جميع النظريات</h3>`;
  html += `<ul>`;
  const sortedAllCategories = Object.entries(scoresByCategory).sort((a, b) => b[1] - a[1]);
  sortedAllCategories.forEach(([catKey, score]) => {
    const categoryName = results.traits?.[catKey] || catKey;
    html += `<li>${categoryName}: ${score} نقطة</li>`;
  });
  html += `</ul>`;
  html += `</div>`;
  */

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
        // إزالة المسافات الزائدة من الرابط
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    });
  } else if (text) {
    //_FALLBACK_ إلى WhatsApp
    // إزالة المسافات الزائدة من الرابط
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
