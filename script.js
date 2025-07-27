// script.js - المنطق البرمجي لكل الوظائف

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
    questionId: questions[currentQuestion].id, // حفظ ID السؤال
    category: questions[currentQuestion].category, // حفظ الفئة (النظرية)
    domain: questions[currentQuestion].domain, // حفظ المجال
    value: Number(sel.value) // حفظ القيمة الرقمية للإجابة
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

  // 1. جمع النقاط حسب الفئة (category) - حساب متوسط الدرجات
  const categoryScores = {}; // { categoryName: { total: 0, count: 0 } }
  answers.forEach(a => {
    const cat = a.category;
    if (!categoryScores[cat]) categoryScores[cat] = { total: 0, count: 0 };
    categoryScores[cat].total += a.value;
    categoryScores[cat].count += 1;
  });

  // حساب المتوسط لكل فئة
  const categoryAverages = {};
  for (const [cat, data] of Object.entries(categoryScores)) {
    categoryAverages[cat] = data.total / data.count;
  }

  // 2. تحديد أعلى فئتين (نظريتين) بناءً على المتوسط
  const sortedCategories = Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]);
  const topCategories = sortedCategories.slice(0, 2); // أعلى فئتين

  // 3. جمع النقاط حسب المجال (domain) - حساب متوسط الدرجات
  const domainScores = {}; // { domainName: { total: 0, count: 0 } }
  answers.forEach(a => {
    const dom = a.domain;
    if (!domainScores[dom]) domainScores[dom] = { total: 0, count: 0 };
    domainScores[dom].total += a.value;
    domainScores[dom].count += 1;
  });

  // حساب المتوسط لكل مجال
  const domainAverages = {};
  for (const [dom, data] of Object.entries(domainScores)) {
    domainAverages[dom] = data.total / data.count;
  }

  // 4. تحديد المجال الأقوى
  const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
  const topDomainKey = sortedDomains[0]?.[0] || "full"; // افتراضي "full" إذا ما لقاش
  const topDomainName = translations[currentLang]?.results?.domains?.[topDomainKey] || topDomainKey;

  // 5. بناء نص الملخص
  let summaryText = `<h2>${translations[currentLang]?.ui?.result_summary || "التحليل المختصر"}</h2>`;
  summaryText += `<p>${translations[currentLang]?.results?.summary_intro || "هذه نظرة سريعة على شخصيتك:"}</p>`;

  // عرض المجال الأقوى
  summaryText += `<p><strong>مجالك الأقوى: ${topDomainName}</strong></p>`;

  // عرض أعلى الفئات (النظريات)
  summaryText += `<p><strong>نظرياتك المهيمنة:</strong></p><ul>`;
  topCategories.forEach(([catKey, avgScore]) => {
    const categoryName = translations[currentLang]?.results?.traits?.[catKey] || catKey;
    summaryText += `<li>${categoryName} (متوسط: ${avgScore.toFixed(1)})</li>`;
  });
  summaryText += `</ul>`;

  summaryDiv.innerHTML = summaryText;
}


// عرض التفاصيل (التحليل التفصيلي)
function showDetails() {
  const detailsDiv = document.getElementById("details");
  if (!detailsDiv) return; // التحقق من وجود العنصر

  // 1. جمع النقاط حسب الفئة (category) - حساب متوسط الدرجات
  const categoryScores = {}; // { categoryName: { total: 0, count: 0 } }
  answers.forEach(a => {
    const cat = a.category;
    if (!categoryScores[cat]) categoryScores[cat] = { total: 0, count: 0 };
    categoryScores[cat].total += a.value;
    categoryScores[cat].count += 1;
  });

  // حساب المتوسط لكل فئة
  const categoryAverages = {};
  for (const [cat, data] of Object.entries(categoryScores)) {
    categoryAverages[cat] = data.total / data.count;
  }

  // 2. جمع النقاط حسب المجال (domain) - حساب متوسط الدرجات
  const domainScores = {}; // { domainName: { total: 0, count: 0 } }
  answers.forEach(a => {
    const dom = a.domain;
    if (!domainScores[dom]) domainScores[dom] = { total: 0, count: 0 };
    domainScores[dom].total += a.value;
    domainScores[dom].count += 1;
  });

  // حساب المتوسط لكل مجال
  const domainAverages = {};
  for (const [dom, data] of Object.entries(domainScores)) {
    domainAverages[dom] = data.total / data.count;
  }

  // 3. بناء نص التفاصيل
  const t = translations[currentLang]?.ui || {};
  const results = translations[currentLang]?.results || {};
  const domains = translations[currentLang]?.results?.domains || {};

  let html = `<h2>${t.result_full || "التحليل التفصيلي"}</h2>`;
  html += `<p>${results.full_intro || "تحليل متكامل بجميع النظريات النفسية الحديثة والكلاسيكية:"}</p>`;

  // أ) عرض النتائج حسب المجالات (كما في الموقع)
  html += `<h3>📊 ${domains.full || "التحليل الكامل"}</h3>`;
  html += `<p>هنا تحليل متوسط درجاتك في كل مجال:</p>`;
  html += `<ul>`;
  Object.entries(domainAverages).forEach(([domainKey, avgScore]) => {
    const domainName = domains[domainKey] || domainKey;
    html += `<li><strong>${domainName}:</strong> ${avgScore.toFixed(2)} / 5</li>`;
  });
  html += `</ul>`;

  // ب) عرض تفاصيل كل مجال مع متوسط درجات النظريات فيه
  html += `<h3>🔍 التحليل حسب المجالات</h3>`;
  Object.entries(domainAverages).forEach(([domainKey, avgScore]) => {
    const domainName = domains[domainKey] || domainKey;
    html += `<div class="result-card">`;
    html += `<h4>${domainName} (متوسط: ${avgScore.toFixed(2)})</h4>`;
    html += `<p>النظريات المتعلقة بهذا المجال:</p>`;
    html += `<ul>`;
    // ايجاد النظريات اللي تابعة للمجال ده
    const theoriesInDomain = [...new Set(answers.filter(a => a.domain === domainKey).map(a => a.category))];
    theoriesInDomain.forEach(catKey => {
      const categoryName = results.traits?.[catKey] || catKey;
      const catAvg = categoryAverages[catKey] !== undefined ? categoryAverages[catKey].toFixed(2) : "N/A";
      html += `<li>${categoryName}: ${catAvg}/5</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  });

  // ج) عرض تحليل مفصل لكل نظرية (category) باستخدام analysis_data.js
  html += `<h3>🧠 التحليل حسب النظريات</h3>`;
  // التأكد من وجود ملف analysis_data.js وتحميله
  if (typeof analysisData !== 'undefined' && analysisData[currentLang]) {
    Object.entries(categoryAverages).forEach(([categoryKey, avgScore]) => {
      const theoryData = analysisData[currentLang][categoryKey];
      if (theoryData) {
        html += `<div class="result-card">`;
        html += `<h4>${theoryData.name} (متوسط: ${avgScore.toFixed(2)})</h4>`;
        html += `<p><strong>الوصف:</strong> ${theoryData.description}</p>`;
        html += `<p><strong>التفسير:</strong> ${avgScore >= 3 ? theoryData.high_score_interpretation : theoryData.low_score_interpretation}</p>`;
        html += `<p><strong>نقاط القوة:</strong> <ul>`;
        theoryData.strengths.forEach(strength => html += `<li>${strength}</li>`);
        html += `</ul></p>`;
        html += `<p><strong>نقاط الضعف:</strong> <ul>`;
        theoryData.weaknesses.forEach(weakness => html += `<li>${weakness}</li>`);
        html += `</ul></p>`;
        html += `<p><strong>اقتراحات للتطوير:</strong> <ul>`;
        theoryData.development_tips.forEach(tip => html += `<li>${tip}</li>`);
        html += `</ul></p>`;
        html += `</div>`;
      } else {
        // إذا ما لقاش بيانات التحليل، نعرض اسم النظرية وبس
        const categoryName = results.traits?.[categoryKey] || categoryKey;
        html += `<div class="result-card">`;
        html += `<h4>${categoryName} (متوسط: ${avgScore.toFixed(2)})</h4>`;
        html += `<p>تحليل مفصل لهذه النظرية غير متوفر حاليًا.</p>`;
        html += `</div>`;
      }
    });
  } else {
    // إذا ملف analysis_data.js مش متاح، نعرض رسالة
    html += `<p>بيانات التحليل التفصيلي غير متوفرة حاليًا.</p>`;
    // عرض قائمة بجميع النظريات ومتوسطاتها كحل بديل
    html += `<div class="result-card">`;
    html += `<h4>جميع النظريات</h4>`;
    html += `<ul>`;
    Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]).forEach(([catKey, avgScore]) => {
      const categoryName = results.traits?.[catKey] || catKey;
      html += `<li>${categoryName}: ${avgScore.toFixed(2)}/5</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  }

  detailsDiv.innerHTML = html;
}


// تحميل PDF - محدث لتحميل التحليل + رابط الموقع في الأول
function downloadPDF() {
  // التحقق من وجود مكتبة jsPDF
  if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
    alert(translations[currentLang]?.ui?.pdf_error || 'خطأ في تحميل مكتبة PDF. يرجى المحاولة لاحقًا.');
    console.error('مكتبة jsPDF غير متوفرة.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // جلب العناصر
  const summaryElement = document.getElementById("summary");
  const detailsElement = document.getElementById("details");

  // التأكد من وجود العناصر
  if (!summaryElement || !detailsElement) {
    console.error("عناصر Summary أو Details غير موجودة.");
    alert("حدث خطأ أثناء إعداد التقرير. يرجى المحاولة لاحقًا.");
    return;
  }

  // جلب النصوص بشكل مباشر باستخدام innerText علشان يتجاهل الـ HTML tags
  const summaryText = summaryElement.innerText || summaryElement.textContent || '';
  const detailsText = detailsElement.innerText || detailsElement.textContent || '';

  // التأكد من وجود نص للتحميل
  if (!summaryText.trim() && !detailsText.trim()) {
    alert(translations[currentLang]?.ui?.no_content_to_download || "لا يوجد محتوى لتحميله.");
    return;
  }

  // تحديد رابط الموقع
  const websiteUrl = "https://secertsroom.netlify.app/"; // <- رابط موقعك

  // إضافة النصوص للـ PDF
  try {
    let yPosition = 20; // بداية الكتابة من هنا عمودياً
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10;
    const maxWidth = pageWidth - 2 * margin; // عرض أقصى للنص

    // --- إضافة رابط الموقع في أول الصفحة ---
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 255); // لون أزرق للرابط
    doc.setFont(undefined, 'bold');
    // الحصول على ترجمة "Powered by" أو نص مشابه
    const poweredByText = translations[currentLang]?.ui?.powered_by || "Powered by:";
    doc.text(poweredByText, margin, yPosition);
    yPosition += 7;
    doc.text(websiteUrl, margin, yPosition);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0); // رجوع للون الأسود
    yPosition += 15; // مسافة أكبر بعد الرابط

    // --- إضافة التحليل المختصر ---
    if (summaryText.trim()) {
        // التأكد من الحاجة لصفحة جديدة
        if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = margin;
        }

        // استخدام splitTextToSize علشان النص ينضبط في الصفحة
        const splitSummary = doc.splitTextToSize(summaryText, maxWidth);
        doc.text(splitSummary, margin, yPosition);
        // حساب الـ Y position الجديد بعد كتابة النص المختصر
        // افترضنا ارتفاع كل سطر حوالي 7 نقاط
        yPosition += splitSummary.length * 7 + 10; // +10 مسافة بعد التحليل المختصر
    }

    // --- إضافة التحليل التفصيلي ---
    if (detailsText.trim()) {
        // التأكد من الحاجة لصفحة جديدة
        if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = margin;
        }

        // استخدام splitTextToSize علشان النص التفصيلي كمان
        const splitDetails = doc.splitTextToSize(detailsText, maxWidth);
        doc.text(splitDetails, margin, yPosition);
        // ممكن نحسب الـ Y position هنا كمان لو حابب نضيف حاجات تانية بعدها
    }

    // حفظ الملف
    doc.save("SecretsRoom_Report.pdf");
    console.log("تم إنشاء ملف PDF بنجاح.");

  } catch (error) {
    console.error("حدث خطأ أثناء إنشاء ملف PDF:", error);
    alert("حدث خطأ أثناء إنشاء ملف PDF. يرجى المحاولة لاحقًا.");
  }
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
