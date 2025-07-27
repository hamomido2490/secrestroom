// script.js - المنطق البرمجي لكل الوظائف

// إعداد
let currentLang = localStorage.getItem("lang") || "";
let deviceId = localStorage.getItem("deviceId") || "";
let userSession = JSON.parse(localStorage.getItem("session")) || null;
let currentQuestion = 0;
let answers = [];

// متغيرات لتخزين المتوسطات المحسوبة
let categoryAverages = {}; // لتخزين متوسط الدرجات لكل نظرية
let domainAverages = {};   // لتخزين متوسط الدرجات لكل مجال

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

  // تحديث نصوص أزرار النتائج
  updateResultButtonTitles();
}

// تحديث نصوص أزرار النتائج حسب اللغة
function updateResultButtonTitles() {
  const t = translations[currentLang]?.ui || {};
  const btnPersonalityType = document.getElementById("btnPersonalityType");
  const btnSummary = document.getElementById("btnSummary");
  const btnTheories = document.getElementById("btnTheories");
  const btnFullDetails = document.getElementById("btnFullDetails");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");
  const shareBtn = document.getElementById("shareBtn");

  if (btnPersonalityType) btnPersonalityType.innerText = t.personality_type || "تصنيف الشخصية";
  if (btnSummary) btnSummary.innerText = t.summary_analysis || "التحليل المختصر";
  if (btnTheories) btnTheories.innerText = t.theories_analysis || "التحليل حسب النظريات";
  if (btnFullDetails) btnFullDetails.innerText = t.full_details || "التحليل الكامل";
  if (downloadPdfBtn) downloadPdfBtn.innerText = t.download_pdf || "تحميل التقرير PDF";
  if (shareBtn) shareBtn.innerText = t.share || "مشاركة";
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

  // حساب المتوسطات (كده نحسبها مرة واحدة ونستخدمها في كل التحليلات)
  calculateAverages(); // دالة جديدة هنعملها تحت

  // تحديث نصوص الأزرار حسب اللغة الحالية
  updateResultButtonTitles();

  // عرض واجهة التحكم في النتائج (الأزرار) وتفعيل أول قسم
  showPersonalityType(); // أو ممكن showSummaryAnalysis();
}

// دالة لحساب المتوسطات - مبنية على الكود اللي في calculateSummary/showDetails
function calculateAverages() {
  // 1. جمع النقاط حسب الفئة (category) - حساب متوسط الدرجات
  const categoryScores = {}; // { categoryName: { total: 0, count: 0 } }
  answers.forEach(a => {
    const cat = a.category;
    if (!categoryScores[cat]) categoryScores[cat] = { total: 0, count: 0 };
    categoryScores[cat].total += a.value;
    categoryScores[cat].count += 1;
  });

  // حساب المتوسط لكل فئة
  categoryAverages = {}; // تخزين في المتغير العام
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
  domainAverages = {}; // تخزين في المتغير العام
  for (const [dom, data] of Object.entries(domainScores)) {
    domainAverages[dom] = data.total / data.count;
  }
}


// دوال لإظهار وإخفاء أقسام النتائج
function hideAllResultSections() {
  document.getElementById("personalityTypeSection").style.display = "none";
  document.getElementById("summarySection").style.display = "none";
  document.getElementById("theoriesSection").style.display = "none";
  document.getElementById("fullDetailsSection").style.display = "none";
}

function showPersonalityType() {
  hideAllResultSections();
  document.getElementById("personalityTypeSection").style.display = "block";
  // استدعاء دالة لحساب وعرض التصنيف
  displayPersonalityType();
}

function showSummaryAnalysis() {
  hideAllResultSections();
  document.getElementById("summarySection").style.display = "block";
  // استدعاء دالة لحساب وعرض التحليل المختصر
  displaySummaryAnalysis();
}

function showTheoriesAnalysis() {
  hideAllResultSections();
  document.getElementById("theoriesSection").style.display = "block";
  // استدعاء دالة لحساب وعرض التحليل حسب النظريات
  displayTheoriesAnalysis();
}

function showFullDetails() {
  hideAllResultSections();
  document.getElementById("fullDetailsSection").style.display = "block";
  // عرض التحليل الكامل القديم
  calculateSummary(); // دالة أصلية
  showDetails();      // دالة أصلية
}


// دالة لحساب وعرض تصنيف الشخصية حسب الألوان
function displayPersonalityType() {
    const contentDiv = document.getElementById("personalityTypeContent");
    if (!contentDiv) {
        console.warn("عنصر personalityTypeContent غير موجود في الصفحة.");
        return;
    }

    // 1. تحديد اللون بناءً على أعلى مجالات أو نظريات
    // هذا مثال بسيط، يمكن تحسينه لاحقاً
    const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
    const topDomainKey = sortedDomains[0]?.[0] || "vision"; // افتراضي

    let personalityColor = "غير محدد";
    let colorDescription = "";
    let themes = [];

    // تحديد اللون والوصف والثيمات - هذا جزء من "قاعدة البيانات"
    // مثال بسيط:
    if (topDomainKey === "vision" || topDomainKey === "discovery") {
        personalityColor = "شخصية حمراء";
        colorDescription = "أنت شخص حماسي، مليان طاقة، وبتسعى للقيادة والاستكشاف. بتحب التحديات والابتكار.";
        themes = ["الطاقة", "الشغف", "القيادة", "الابتكار", "الجرأة"];
    } else if (topDomainKey === "analysis" || topDomainKey === "healing") {
        personalityColor = "شخصية زرقاء";
        colorDescription = "أنت شخص هادئ، تحليلي، وبتفضل التأمل والفهم العميق. بتحب النظام والمساعدة.";
        themes = ["الهدوء", "التفكير العميق", "التحليل", "المساعدة", "التنظيم"];
    } else if (topDomainKey === "cultural") {
        personalityColor = "شخصية خضراء";
        colorDescription = "أنت شخص متوازن، اجتماعي، وبتحب التواصل والانسجام. بتحب التعاون والتنوع.";
        themes = ["التوازن", "التواصل", "الانسجام", "التعاون", "التنوع"];
    } else { // افتراضي أو مزيج
        personalityColor = "شخصية بنفسجية";
        colorDescription = "أنت شخص معقد ومتنوع، بتمزج بين خصائص كتير. بتحب التنوع والتطور المستمر.";
        themes = ["التنوع", "التطور", "الإبداع", "المرونة", "العمق"];
    }

    // بناء محتوى القسم
    let html = `<h2>${personalityColor}</h2>`;
    html += `<p>${colorDescription}</p>`;
    html += `<h3>ثيمات شخصيتك الأساسية:</h3>`;
    html += `<ul>`;
    themes.forEach(theme => html += `<li>${theme}</li>`);
    html += `</ul>`;

    // ممكن نضيف تنسيق لون خلفية أو رمز حسب اللون
    contentDiv.innerHTML = html;
    contentDiv.style.backgroundColor = getColorCode(personalityColor); // دالة نعملها تحت
    // contentDiv.style.padding = "20px"; // موجود في الـ CSS
    // contentDiv.style.borderRadius = "10px"; // موجود في الـ CSS
    // contentDiv.style.color = "#fff"; // موجود في الـ CSS
}

// دالة بسيطة لتحويل اسم اللون لرمز لوني
function getColorCode(colorName) {
    switch (colorName) {
        case "شخصية حمراء": return "#e74c3c"; // أحمر
        case "شخصية زرقاء": return "#3498db"; // أزرق
        case "شخصية خضراء": return "#2ecc71"; // أخضر
        case "شخصية بنفسجية": return "#9b59b6"; // بنفسجي
        default: return "#95a5a6"; // رمادي
    }
}


// دالة لعرض التحليل المختصر
function displaySummaryAnalysis() {
    const contentDiv = document.getElementById("summaryContent");
    if (!contentDiv) {
        console.warn("عنصر summaryContent غير موجود في الصفحة.");
        return;
    }

    // 1. تحديد أعلى مجال وأعلى نظريتين (زي في calculateSummary القديم)
    const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
    const topDomainKey = sortedDomains[0]?.[0] || "full";
    const topDomainName = translations[currentLang]?.results?.domains?.[topDomainKey] || topDomainKey;

    const sortedCategories = Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]);
    const topCategories = sortedCategories.slice(0, 2); // أعلى فئتين

    // 2. بناء نص التحليل المختصر (نص مكتوب بدون أرقام)
    let summaryText = `<h2>${translations[currentLang]?.ui?.result_summary || "التحليل المختصر"}</h2>`;

    // التحقق من وجود ملف analysis_data.js لكتابة تحليل جذاب
    if (typeof analysisData !== 'undefined' && analysisData[currentLang]) {
        const results = translations[currentLang]?.results || {};

        // بناء جملة جذابة للملخص
        let writtenSummary = "";

        // جملة 1: المجال الأقوى
        writtenSummary += `🌟 مجالك الأقوى هو <strong>${topDomainName}</strong>. `;

        // جملة 2: النظرية المهيمنة الأولى (مع تفسير مبسط)
        if (topCategories.length > 0) {
            const topCatKey = topCategories[0][0];
            const avgScore = categoryAverages[topCatKey];
            const theoryData = analysisData[currentLang][topCatKey];
            const categoryName = results.traits?.[topCatKey] || topCatKey;

            writtenSummary += `تتأثر بشدة بنظريات <strong>${categoryName}</strong>. `;
            if (theoryData) {
                if (avgScore >= 3.5) { // عتبة متوسطة-عالية
                    writtenSummary += `هذا يشير إلى <strong>${theoryData.high_score_traits ? theoryData.high_score_traits[0] : 'سمات قوية'}</strong>. `;
                } else if (avgScore <= 2.5) { // عتبة متوسطة-منخفضة
                    writtenSummary += `هذا قد يعني أن <strong>${theoryData.low_score_traits ? theoryData.low_score_traits[0] : 'سمات أخرى تهيمن'}</strong>. `;
                } else { // متوسط
                     writtenSummary += `أنت تتوازن بين جوانب متعددة من هذه النظرية. `;
                }
            }
        }

        // جملة 3: النظرية المهيمنة الثانية
        if (topCategories.length > 1) {
            const secondCatKey = topCategories[1][0];
            const secondCatName = results.traits?.[secondCatKey] || secondCatKey;
            writtenSummary += `كما تلعب <strong>${secondCatName}</strong> دورًا مهمًا في تشكيل طريقة تفكيرك. `;
        }

        // جملة 4: نصيحة عامة
        writtenSummary += "🔍 استمر في استكشاف هذه الجوانب لفهم نفسك بشكل أعمق.";

        summaryText += `<p>${writtenSummary}</p>`;

    } else {
        // إذا ملف analysis_data.js مش متاح، نستخدم نص بسيط
        summaryText += `<p>تحليلك يشير إلى أن <strong>${topDomainName}</strong> هو مجالك الأقوى.</p>`;
        summaryText += `<p>النظريات التي تؤثر عليك بشدة تشمل: `;
        topCategories.forEach(([catKey], index) => {
            const categoryName = translations[currentLang]?.results?.traits?.[catKey] || catKey;
            summaryText += `${index > 0 ? ' و ' : ''}<strong>${categoryName}</strong>`;
        });
        summaryText += `.</p>`;
    }

    contentDiv.innerHTML = summaryText;
}


// دالة لعرض التحليل حسب كل نظرية
function displayTheoriesAnalysis() {
    const contentDiv = document.getElementById("theoriesContent");
    if (!contentDiv) {
        console.warn("عنصر theoriesContent غير موجود في الصفحة.");
        return;
    }

     const t = translations[currentLang]?.ui || {};
     const results = translations[currentLang]?.results || {};

     let html = `<h2>${t.theories_analysis || "التحليل حسب النظريات"}</h2>`;
     html += `<p>هنا تحليل مفصل لكل نظرية نفسية بناءً على إجاباتك:</p>`;

     // التحقق من وجود ملف analysis_data.js
     if (typeof analysisData !== 'undefined' && analysisData[currentLang]) {
         // عرض تحليل لكل نظرية تم التسجيل فيها، مرتبة من الأعلى للأدنى
         Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]).forEach(([categoryKey, avgScore]) => {
             const theoryData = analysisData[currentLang][categoryKey];
             if (theoryData) {
                 html += `<div class="result-card">`;
                 html += `<h3>${theoryData.name} (متوسط: ${avgScore.toFixed(2)})</h3>`;
                 html += `<p><strong>الوصف:</strong> ${theoryData.description.substring(0, 150)}...</p>`; // مختصر من الوصف
                 // عرض التفسير المخصص
                 const interpretation = avgScore >= 3.5 ? theoryData.high_score_interpretation.substring(0, 100) + "..." :
                                      avgScore <= 2.5 ? theoryData.low_score_interpretation.substring(0, 100) + "..." :
                                      `درجتك المتوسطة (${avgScore.toFixed(2)}) تشير إلى توازن.`;
                 html += `<p><strong>تحليلك:</strong> ${interpretation}</p>`;
                 html += `</div>`;
             } else {
                 // إذا ما لقاش بيانات التحليل
                 const categoryName = results.traits?.[categoryKey] || categoryKey;
                 html += `<div class="result-card">`;
                 html += `<h3>${categoryName} (متوسط: ${avgScore.toFixed(2)})</h3>`;
                 html += `<p>تحليل مفصل لهذه النظرية غير متوفر حاليًا.</p>`;
                 html += `</div>`;
             }
         });
     } else {
         // إذا ملف analysis_data.js مش متاح، نعرض رسالة بديلة
         html += `<p>بيانات التحليل التفصيلي غير متوفرة حاليًا.</p>`;
         // عرض قائمة بجميع النظريات ومتوسطاتها كحل بديل
         html += `<div class="result-card">`;
         html += `<h3>جميع النظريات</h3>`;
         html += `<ul>`;
         Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]).forEach(([catKey, avgScore]) => {
             const categoryName = results.traits?.[catKey] || catKey;
             html += `<li>${categoryName}: ${avgScore.toFixed(2)}/5</li>`;
         });
         html += `</ul>`;
         html += `</div>`;
     }

     contentDiv.innerHTML = html;
}


// حساب الملخص (التحليل المختصر) - النسخة القديمة للتوافق
function calculateSummary() {
    const summaryDiv = document.getElementById("summaryOld"); // استخدم ID الجديد
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
    const categoryAveragesLocal = {};
    for (const [cat, data] of Object.entries(categoryScores)) {
        categoryAveragesLocal[cat] = data.total / data.count;
    }

    // 2. تحديد أعلى فئتين (نظريتين) بناءً على المتوسط
    const sortedCategories = Object.entries(categoryAveragesLocal).sort((a, b) => b[1] - a[1]);
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
    const domainAveragesLocal = {};
    for (const [dom, data] of Object.entries(domainScores)) {
        domainAveragesLocal[dom] = data.total / data.count;
    }

    // 4. تحديد المجال الأقوى
    const sortedDomains = Object.entries(domainAveragesLocal).sort((a, b) => b[1] - a[1]);
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


// عرض التفاصيل (التحليل التفصيلي) - النسخة القديمة للتوافق
function showDetails() {
    const detailsDiv = document.getElementById("detailsOld"); // استخدم ID الجديد
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
    const categoryAveragesLocal = {};
    for (const [cat, data] of Object.entries(categoryScores)) {
        categoryAveragesLocal[cat] = data.total / data.count;
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
    const domainAveragesLocal = {};
    for (const [dom, data] of Object.entries(domainScores)) {
        domainAveragesLocal[dom] = data.total / data.count;
    }

    // 3. بناء نص التفاصيل
    const t = translations[currentLang]?.ui || {};
    const results = translations[currentLang]?.results || {};
    const domains = translations[currentLang]?.results?.domains || {};

    let html = `<h2>${t.result_full || "التحليل التفصيلي"}</h2>`;
    html += `<p>${results.full_intro || "تحليل متكامل بجميع النظريات النفسية الحديثة والكلاسيكية:"}</p>`;

    // أ) عرض النتائج حسب المجالات (كما في الموقع)
    html += `<h3>📊 ${domains.full || "التحليل الكامل"}</h3>`;
    html += `<ul>`;
    Object.entries(domainAveragesLocal).forEach(([domainKey, avgScore]) => {
        const domainName = domains[domainKey] || domainKey;
        html += `<li><strong>${domainName}:</strong> ${avgScore.toFixed(2)} / 5</li>`;
    });
    html += `</ul>`;

    // ب) عرض تحليل مفصل لكل مجال مع النظريات الخاصة بيه
    Object.entries(domainAveragesLocal).forEach(([domainKey, avgScore]) => {
        const domainName = domains[domainKey] || domainKey;
        // جمع النظريات لهذا المجال فقط
        const theoriesInDomain = {};
        Object.entries(categoryAveragesLocal).forEach(([catKey, catAvg]) => {
             // تأكد من أن النظرية تابعة لهذا المجال
             const questionForCat = questions.find(q => q.category === catKey);
             if (questionForCat && questionForCat.domain === domainKey) {
                 theoriesInDomain[catKey] = catAvg;
             }
        });

        if (Object.keys(theoriesInDomain).length > 0) {
            html += `<div class="result-card">`;
            html += `<h3>🔍 ${domainName}</h3>`;
            html += `<ul>`;
            // ترتيب النظريات داخل المجال حسب النقاط
            const sortedCategoryEntries = Object.entries(theoriesInDomain).sort((a, b) => b[1] - a[1]);
            sortedCategoryEntries.forEach(([catKey, score]) => {
                const categoryName = results.traits?.[catKey] || catKey;
                html += `<li>${categoryName}: ${score.toFixed(2)} / 5</li>`;
            });
            html += `</ul>`;
            html += `</div>`;
        }
    });


    // ج) عرض *جميع* النظريات مجمعة (اختياري)
    html += `<div class="result-card">`;
    html += `<h3>📚 جميع النظريات</h3>`;
    html += `<ul>`;
    const sortedAllCategories = Object.entries(categoryAveragesLocal).sort((a, b) => b[1] - a[1]);
    sortedAllCategories.forEach(([catKey, avgScore]) => {
        const categoryName = results.traits?.[catKey] || catKey;
        html += `<li>${categoryName}: ${avgScore.toFixed(2)} / 5</li>`;
    });
    html += `</ul>`;
    html += `</div>`;

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

    // --- جمع النصوص من الأقسام الجديدة ---
    let fullText = "";

    // جمع النصوص من الأقسام الجديدة (اللي المستخدم شايفها)
    const personalityTypeText = document.getElementById("personalityTypeContent")?.innerText || "";
    const summaryText = document.getElementById("summaryContent")?.innerText || "";
    const theoriesText = document.getElementById("theoriesContent")?.innerText || "";

    // جمع النصوص من الأقسام القديمة (كمحتوى احتياطي)
    const summaryOldText = document.getElementById("summaryOld")?.innerText || "";
    const detailsOldText = document.getElementById("detailsOld")?.innerText || "";

    // بناء التقرير: نبدأ بالأقسام الجديدة لو موجودة، وإلا نستخدم القديمة
    if (personalityTypeText || summaryText || theoriesText) {
        // افتراض إنك عايز تطبع القسم الظاهر بس، أو كل الأقسام الجديدة
        // مثال على طباعة القسم الظاهر:
        // هذا يتطلب منطق أكتر علشان نحدد القسم الظاهر
        // لأبسط صورة، نطبع كل الأقسام الجديدة:
        fullText += personalityTypeText ? `تصنيف الشخصية:\n${personalityTypeText}\n\n` : '';
        fullText += summaryText ? `التحليل المختصر:\n${summaryText}\n\n` : '';
        fullText += theoriesText ? `التحليل حسب النظريات:\n${theoriesText}\n\n` : '';
    } else {
        // لو الأقسام الجديدة فاضية، نستخدم القديمة
        fullText = (summaryOldText ? `التحليل المختصر:\n${summaryOldText}\n\n` : '') +
                   (detailsOldText ? `التحليل التفصيلي:\n${detailsOldText}` : '');
    }

    // --- إضافة النص المجمع إلى الـ PDF ---
    if (fullText.trim()) {
        // التأكد من الحاجة لصفحة جديدة
        if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = margin;
        }

        // استخدام splitTextToSize علشان النص ينضبط في الصفحة
        const splitText = doc.splitTextToSize(fullText, maxWidth);
        doc.text(splitText, margin, yPosition);
        // ممكن نحسب الـ Y position هنا كمان لو حابب نضيف حاجات تانية بعدها
    } else {
         doc.text("لا يوجد محتوى لتحميله.", margin, yPosition);
    }


    // حفظ الملف
    doc.save("SecretsRoom_Report.pdf");
    console.log("تم إنشاء ملف PDF بنجاح.");

  } catch (error) {
    console.error("حدث خطأ أثناء إنشاء ملف PDF:", error);
    alert("حدث خطأ أثناء إنشاء ملف PDF. يرجى المحاولة لاحقًا.");
  }
}


// مشاركة النتيجة - محدثة لمشاركة التحليل المرئي
function shareResult() {
  // جمع النصوص من الأقسام الجديدة (اللي المستخدم شايفها)
  const personalityTypeText = document.getElementById("personalityTypeContent")?.innerText || "";
  const summaryText = document.getElementById("summaryContent")?.innerText || "";
  const theoriesText = document.getElementById("theoriesContent")?.innerText || "";

  // جمع النصوص من الأقسام القديمة (كمحتوى احتياطي)
  const summaryOldText = document.getElementById("summaryOld")?.innerText || "";
  const detailsOldText = document.getElementById("detailsOld")?.innerText || "";

  let fullText = "";

  // بناء النص للمشاركة: نبدأ بالأقسام الجديدة لو موجودة، وإلا نستخدم القديمة
  if (personalityTypeText || summaryText || theoriesText) {
      fullText += personalityTypeText ? `تصنيف الشخصية:\n${personalityTypeText}\n\n` : '';
      fullText += summaryText ? `التحليل المختصر:\n${summaryText}\n\n` : '';
      fullText += theoriesText ? `التحليل حسب النظريات:\n${theoriesText}\n\n` : '';
  } else {
      fullText = (summaryOldText ? `التحليل المختصر:\n${summaryOldText}\n\n` : '') +
                 (detailsOldText ? `التحليل التفصيلي:\n${detailsOldText}` : '');
  }

  const text = fullText.trim();

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
