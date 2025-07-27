// script.js - المنطق البرمجي لكل الوظائف
// إعداد
let currentLang = localStorage.getItem("lang") || "ar"; // [تحسين] وضع قيمة افتراضية مباشرة
let deviceId = localStorage.getItem("deviceId") || "";
let userSession = JSON.parse(localStorage.getItem("session")) || null;
let currentQuestion = 0;
let answers = [];
let userAnswers = {};      // لتخزين إجابات المستخدم لجميع النظريات
let detailedResults = {};  // لتخزين النتائج التفصيلية
// متغيرات لتخزين المتوسطات المحسوبة
let categoryAverages = {}; // لتخزين متوسط الدرجات لكل نظرية
let domainAverages = {};   // لتخزن متوسط الدرجات لكل مجال

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
    const browserLang = navigator.language.slice(0, 2);
    currentLang = translations[browserLang] ? browserLang : "ar"; // [تحسين] استخدام "ar" كافتراضي
    localStorage.setItem("lang", currentLang);
  } else {
    currentLang = localStorage.getItem("lang");
  }
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
  // [تحسين] استخدام const للمتغيرات التي لا تتغير قيمتها
  const t = translations[lang].ui;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // تحديث عنوان الموقع حسب اللغة
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    if (lang === "ar") {
      siteTitle.innerHTML = 'غرفة الأسرار  
<span style="font-size: 1.2rem; font-weight: normal;">Secrets Room</span>';
    } else {
      siteTitle.innerHTML = 'Secrets Room  
<span style="font-size: 1.2rem; font-weight: normal;">غرفة الأسرار</span>';
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
        welcomeElement.style.fontStyle = "italic";
        if (logoutBtnElement) logoutBtnElement.style.display = "inline-block";
      } else {
        welcomeElement.innerText = "";
        welcomeElement.style.fontStyle = "";
        if (logoutBtnElement) logoutBtnElement.style.display = "none";
      }
  }
  // تحديث نصوص أزرار النتائج
  updateResultButtonTitles();
}

// تحديث نصوص أزرار النتائج حسب اللغة
function updateResultButtonTitles() {
  const t = translations[currentLang]?.ui || {};
  document.getElementById("btnPersonalityType").innerText = t.personality_type || "تصنيف الشخصية";
  document.getElementById("btnSummary").innerText = t.summary_analysis || "التحليل المختصر";
  document.getElementById("btnTheories").innerText = t.theories_analysis || "التحليل حسب النظريات";
  document.getElementById("btnDetailedAnalysis").innerText = t.detailed_analysis || "التحليل التفصيلي";
  document.getElementById("btnRecommendations").innerText = t.recommendations || "التوصيات";
  document.getElementById("downloadPdfBtn").innerText = t.download_pdf || "تحميل التقرير PDF";
  document.getElementById("shareBtn").innerText = t.share || "مشاركة";
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
  const next = (localStorage.getItem("theme") === "dark") ? "light" : "dark";
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
  const optionsContainer = document.getElementById("answerOptions");

  container.innerHTML = `<div class="question">${q.text[currentLang] || "السؤال غير متوفر"}</div>`;
  updateProgress();
  optionsContainer.innerHTML = '';

  if (q.scale === "1-5") {
    const scaleContainer = document.createElement('div');
    scaleContainer.className = 'scale-options';
    for (let i = 1; i <= 5; i++) {
      const option = document.createElement('div');
      option.className = 'scale-option';
      option.textContent = i;
      option.onclick = () => selectAnswer(i);
      scaleContainer.appendChild(option);
    }
    optionsContainer.appendChild(scaleContainer);
  } else {
    const likertOptions = translations[currentLang]?.options?.likert || {};
    Object.entries(likertOptions).forEach(([val, txt]) => {
      const option = document.createElement('div');
      option.className = 'answer-option';
      option.textContent = txt;
      option.onclick = () => selectAnswer(Number(val));
      optionsContainer.appendChild(option);
    });
  }
  document.getElementById('nextBtn').disabled = true;
}

// تحديد الإجابة
function selectAnswer(value) {
  userAnswers[currentQuestion] = value;
  if (questions[currentQuestion].scale === "1-5") {
    document.querySelectorAll('.scale-option').forEach((opt, index) => {
      opt.classList.toggle('selected', index + 1 === value);
    });
  } else {
    const likertOptions = translations[currentLang]?.options?.likert || {};
    const optionValues = Object.keys(likertOptions);
    document.querySelectorAll('.answer-option').forEach((opt, index) => {
       opt.classList.toggle('selected', Number(optionValues[index]) === value);
    });
  }
  document.getElementById('nextBtn').disabled = false;
}

// تحديث شريط التقدم
function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('progressText').textContent = `${currentQuestion + 1} من ${questions.length}`;
}

// انتقل للسؤال التالي
function nextQuestion() {
  if (!userAnswers.hasOwnProperty(currentQuestion)) return alert("اختر إجابة");
  answers.push({
    questionId: questions[currentQuestion].id,
    category: questions[currentQuestion].category,
    domain: questions[currentQuestion].domain,
    value: userAnswers[currentQuestion]
  });
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

// عرض النتائج
function showResults() {
  document.getElementById("quizSection").classList.remove("active");
  document.getElementById("resultSection").classList.add("active");
  calculateAverages();
  updateResultButtonTitles();
  // [تحسين] استخدام دالة موحدة لعرض أول قسم من النتائج
  displayResultContent('personalityType');
}

// دالة لحساب المتوسطات
function calculateAverages() {
  const categoryScores = {};
  answers.forEach(a => {
    if (!categoryScores[a.category]) categoryScores[a.category] = { total: 0, count: 0 };
    categoryScores[a.category].total += a.value;
    categoryScores[a.category].count += 1;
  });
  for (const [cat, data] of Object.entries(categoryScores)) {
    categoryAverages[cat] = data.total / data.count;
  }

  const domainScores = {};
  answers.forEach(a => {
    if (!domainScores[a.domain]) domainScores[a.domain] = { total: 0, count: 0 };
    domainScores[a.domain].total += a.value;
    domainScores[a.domain].count += 1;
  });
  for (const [dom, data] of Object.entries(domainScores)) {
    domainAverages[dom] = data.total / data.count;
  }
}

// [تحسين] دالة موحدة لإظهار قسم معين من النتائج وإخفاء البقية
function displayResultContent(sectionName) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.result-section-content').forEach(section => {
        section.style.display = 'none';
    });

    // إظهار القسم المطلوب
    const sectionId = `${sectionName}Section`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.style.display = 'block';
    } else {
        console.error(`قسم النتائج '${sectionId}' غير موجود.`);
        return;
    }

    // استدعاء الدالة الخاصة بتوليد محتوى هذا القسم
    // هذا يضمن أن المحتوى يتم توليده فقط عند الحاجة
    switch (sectionName) {
        case 'personalityType':
            displayPersonalityType();
            break;
        case 'summary':
            displaySummaryAnalysis();
            break;
        case 'theories':
            displayTheoriesAnalysis();
            break;
        case 'detailedAnalysis':
            displayDetailedAnalysis();
            break;
        case 'recommendations':
            displayRecommendations();
            break;
    }
}


// --- دوال توليد محتوى النتائج ---

function displayPersonalityType() {
    const contentDiv = document.getElementById("personalityTypeContent");
    const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
    const topDomainKey = sortedDomains[0]?.[0] || "vision";
    let personalityColor, colorDescription, themes = [];

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
    } else {
        personalityColor = "شخصية بنفسجية";
        colorDescription = "أنت شخص معقد ومتنوع، بتمزج بين خصائص كتير. بتحب التنوع والتطور المستمر.";
        themes = ["التنوع", "التطور", "الإبداع", "المرونة", "العمق"];
    }

    let html = `<h2>${personalityColor}</h2><p>${colorDescription}</p><h3>ثيمات شخصيتك الأساسية:</h3><ul>`;
    themes.forEach(theme => html += `<li>${theme}</li>`);
    html += `</ul>`;
    contentDiv.innerHTML = html;
    contentDiv.style.backgroundColor = getColorCode(personalityColor);
}

function getColorCode(colorName) {
    switch (colorName) {
        case "شخصية حمراء": return "#e74c3c";
        case "شخصية زرقاء": return "#3498db";
        case "شخصية خضراء": return "#2ecc71";
        case "شخصية بنفسجية": return "#9b59b6";
        default: return "#95a5a6";
    }
}

function displaySummaryAnalysis() {
    const contentDiv = document.getElementById("summaryContent");
    const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
    const topDomainKey = sortedDomains[0]?.[0] || "full";
    const topDomainAvg = sortedDomains[0]?.[1] || 0;
    const topDomainName = getDomainName(topDomainKey);
    const sortedCategories = Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]);
    const topCategories = sortedCategories.slice(0, 3);

    let mainInsight = "";
    if (topDomainAvg >= 4) mainInsight = `🌟 <strong> قوتك في ${topDomainName}!</strong> هذا المجال يهيمن على شخصيتك ويوجه قراراتك.`;
    else if (topDomainAvg >= 3) mainInsight = `🧭 <strong>${topDomainName}</strong> هو بوصلة داخلية قوية توجه خطواتك.`;
    else if (topDomainAvg >= 2) mainInsight = `⚖️ <strong>${topDomainName}</strong> يلعب دورًا متوازنًا في حياتك.`;
    else mainInsight = `🌱 <strong>${topDomainName}</strong> هو مجال يحمل إمكانيات نمو كبيرة لك.`;

    let summaryHtml = `<h2>${translations[currentLang]?.ui?.result_summary || "تحليلك النفسي المختصر"}</h2>`;
    summaryHtml += `<div class="result-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">`;
    summaryHtml += `<p style="font-size: 1.2em; margin-bottom: 15px;">${mainInsight}</p>`;
    summaryHtml += `<p style="font-style: italic; margin-bottom: 10px;">"القوى التي تشكلك:"</p><ul style="text-align: right; display: inline-block;">`;
    topCategories.forEach(([catKey, avgScore]) => {
        summaryHtml += `<li><strong>${getTheoryName(catKey)}</strong>: ${getScoreInterpretation(avgScore)} (${avgScore.toFixed(1)})</li>`;
    });
    summaryHtml += `</ul><p style="margin-top: 15px; font-weight: bold;">🔍 اكتشف المزيد عن هذه الجوانب لتصل إلى أعماق نفسك!</p></div>`;
    summaryHtml += `<h3 style="margin-top: 25px;">نظرة سريعة على قواك الأساسية:</h3>`;

    // [تحسين] التأكد من وجود analysisData واللغة المطلوبة
    const langAnalysisData = (typeof analysisData !== 'undefined' && analysisData[currentLang]) ? analysisData[currentLang] : null;

    topCategories.slice(0, 2).forEach(([catKey, avgScore]) => {
        const theoryData = langAnalysisData ? langAnalysisData[catKey] : null;
        if (theoryData) {
            let keyTraitOrInterpretation = "";
            if (avgScore >= 4 && theoryData.high_score_traits?.length > 0) {
                keyTraitOrInterpretation = `<strong>سمة بارزة:</strong> ${theoryData.high_score_traits[0]}.`;
            } else if (avgScore <= 2 && theoryData.low_score_traits?.length > 0) {
                keyTraitOrInterpretation = `<strong>مجال للنمو:</strong> ${theoryData.low_score_traits[0]}.`;
            } else {
                const fullInterpretation = avgScore >= 3.5 ? theoryData.high_score_interpretation : theoryData.low_score_interpretation;
                keyTraitOrInterpretation = fullInterpretation ? fullInterpretation.substring(0, 80) + "..." : "تحليل متاح.";
            }
            summaryHtml += `<div class="result-card" style="border-left: 4px solid #e74c3c;"><h4>${theoryData.name}</h4><p>${keyTraitOrInterpretation}</p></div>`;
        }
    });
    contentDiv.innerHTML = summaryHtml;
}

function displayTheoriesAnalysis() {
    const contentDiv = document.getElementById("theoriesContent");
    const t = translations[currentLang]?.ui || {};
    let html = `<h2>${t.theories_analysis || "التحليل حسب النظريات"}</h2><p>هنا تحليل مفصل لكل نظرية نفسية بناءً على إجاباتك:</p>`;
    
    // [تحسين] التأكد من وجود analysisData واللغة المطلوبة
    const langAnalysisData = (typeof analysisData !== 'undefined' && analysisData[currentLang]) ? analysisData[currentLang] : null;

    if (langAnalysisData) {
        Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]).forEach(([categoryKey, avgScore]) => {
            const theoryData = langAnalysisData[categoryKey];
            html += `<div class="result-card">`;
            if (theoryData) {
                html += `<h3>${theoryData.name} <span class="score">(متوسط: ${avgScore.toFixed(2)})</span></h3>`;
                html += `<p><strong>الوصف:</strong> ${theoryData.description}</p>`;
                let interpretation = "";
                if (avgScore >= 3.5) interpretation = theoryData.high_score_interpretation;
                else if (avgScore <= 2.5) interpretation = theoryData.low_score_interpretation;
                else interpretation = `درجتك المتوسطة (${avgScore.toFixed(2)}) تشير إلى توازن نسبي.`;
                html += `<p><strong>تحليلك:</strong> ${interpretation}</p>`;
                if (theoryData.strengths?.length > 0) html += `<p><strong>نقاط القوة:</strong> ${theoryData.strengths.slice(0, 3).join(', ')}.</p>`;
                if (theoryData.development_tips?.length > 0) html += `<p><strong>نصائح للتطوير:</strong> ${theoryData.development_tips[0]} <a href="#" onclick="alert('${theoryData.development_tips.join('\\n')}'); return false;">[+] المزيد</a></p>`;
            } else {
                html += `<h3>${getTheoryName(categoryKey)} <span class="score">(متوسط: ${avgScore.toFixed(2)})</span></h3>`;
                html += `<p>تحليل مفصل لهذه النظرية غير متوفر حاليًا.</p>`;
            }
            html += `</div>`;
        });
    } else {
        html += `<div class="result-card"><p>⚠️ بيانات التحليل التفصيلي غير متوفرة حاليًا.</p></div>`;
    }
    contentDiv.innerHTML = html;
}

function displayDetailedAnalysis() {
  const contentDiv = document.getElementById("detailedAnalysisContent");
  let html = '<h3>التحليل التفصيلي لجميع النظريات</h3>';
  html += `<h4>📊 المتوسطات حسب المجالات</h4><ul>`;
  Object.entries(domainAverages).sort((a,b) => b[1] - a[1]).forEach(([domain, avg]) => {
    html += `<li><strong>${getDomainName(domain)}:</strong> ${avg.toFixed(2)}/5 - ${getDomainInterpretation(avg)}</li>`;
  });
  html += `</ul><h4>🧠 التحليل حسب النظريات</h4>`;

  const langAnalysisData = (typeof analysisData !== 'undefined' && analysisData[currentLang]) ? analysisData[currentLang] : null;

  Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]).forEach(([category, avg]) => {
    const theoryData = langAnalysisData ? langAnalysisData[category] : null;
    html += `<div class="theory-card"><h4>${getTheoryName(category)} (متوسط: ${avg.toFixed(2)})</h4>`;
    if(theoryData) {
        html += `<p><strong>الوصف:</strong> ${theoryData.description.substring(0, 200)}...</p>`;
        html += `<p><strong>التحليل:</strong> ${getTheoryInterpretation(category, avg)}</p>`;
        if (theoryData.strengths?.length > 0) html += `<p><strong>نقاط القوة:</strong> ${theoryData.strengths.join(', ')}.</p>`;
        if (theoryData.weaknesses?.length > 0) html += `<p><strong>التحديات:</strong> ${theoryData.weaknesses.join(', ')}.</p>`;
    } else {
        html += `<p><strong>التحليل:</strong> ${getTheoryInterpretation(category, avg)}</p>`;
        html += `<p style="color: #e74c3c;">(بيانات تفصيلية لهذه النظرية غير متوفرة حالياً)</p>`;
    }
    html += `</div>`;
  });
  contentDiv.innerHTML = html;
}

function displayRecommendations() {
  const contentDiv = document.getElementById("recommendationsContent");
  const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
  const topDomain = sortedDomains[0]?.[0];
  const topDomainAvg = sortedDomains[0]?.[1] || 0;
  const secondDomain = sortedDomains[1]?.[0];
  const sortedTheories = Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]);
  const topTheories = sortedTheories.slice(0, 2).map(([cat]) => cat);
  const langAnalysisData = (typeof analysisData !== 'undefined' && analysisData[currentLang]) ? analysisData[currentLang] : null;
  const topTheoryData1 = langAnalysisData ? langAnalysisData[topTheories[0]] : null;

  let html = '<h3>التوصيات والنصائح</h3>';
  html += `<div class="result-card" style="background-color: #e8f4f8; border-left: 4px solid #3498db;"><h4>🚀 لتطوير إمكاناتك الكاملة:</h4><ul>`;
  html += `<li><strong>ركّز على:</strong> تعزيز مهارات <em>${getDomainName(topDomain)}</em> (${topDomainAvg.toFixed(1)}/5).</li>`;
  html += `<li><strong>استفد من نقاط القوة:</strong> استخدم خصائص <em>${getTheoryName(topTheories[0])}</em> و <em>${getTheoryName(topTheories[1])}</em> في مسيرة حياتك.</li>`;
  html += `<li><strong>ابقَ متصلاً:</strong> بجذورك وقيمك الأساسية للاستقرار والنمو.</li></ul></div>`;
  html += `<div class="result-card" style="background-color: #f9f3e9; border-left: 4px solid #e67e22;"><h4>🌱 للمزيد من النمو:</h4><ul>`;
  if(topTheoryData1 && topTheoryData1.development_tips?.length > 0) {
      html += `<li><strong>لنظرية ${getTheoryName(topTheories[0])}:</strong> ${topTheoryData1.development_tips[0]}</li>`;
  }
  html += `<li><strong>مارس:</strong> التأمل أو التأمل العميق لتعزيز <em>${getDomainName(topDomain)}</em>.</li>`;
  html += `<li><strong>تواصل:</strong> مع أشخاص يشاركونك اهتماماتك في <em>${getDomainName(secondDomain || 'التطور')}</em>.</li></ul></div>`;
  html += `<div class="result-card" style="background-color: #f0f0f0; border-left: 4px solid #95a5a6;"><h4>💡 نصائح عامة:</h4><ul>`;
  html += `<li>اقرأ عن النظريات التي حصلت على أعلى درجات فيها لفهم نفسك أكثر.</li>`;
  html += `<li>استخدم هذه النتائج كنقطة بداية للتطوير الشخصي.</li>`;
  html += `<li>تذكر أن الشخصية متعددة الأبعاد والنمو مستمر.</li></ul></div>`;
  contentDiv.innerHTML = html;
}

// --- دوال مساعدة ---
function getTheoryName(categoryKey) {
  return translations[currentLang]?.results?.traits?.[categoryKey] || categoryKey;
}

function getDomainName(domainKey) {
  return translations[currentLang]?.results?.domains?.[domainKey] || domainKey;
}

function getScoreInterpretation(avg) {
    if (avg >= 4) return "مؤثر بقوة";
    if (avg >= 3) return "مؤثر";
    if (avg >= 2) return "متوسط التأثير";
    return "تأثير محدود";
}

function getDomainInterpretation(avg) {
  if (avg >= 4) return "مؤثر بقوة";
  if (avg >= 3) return "مؤثر";
  if (avg >= 2) return "متوسط التأثير";
  return "تأثير محدود";
}

function getTheoryInterpretation(category, avg) {
  if (avg >= 4) return "مستوى عالٍ جداً - لديك مهارات قوية في هذا المجال";
  if (avg >= 3) return "مستوى جيد - لديك أساس قوي مع إمكانية للتطوير";
  if (avg >= 2) return "مستوى متوسط - يمكنك تطوير مهاراتك في هذا المجال";
  return "مستوى منخفض - هذا المجال يحتاج لتطوير";
}

// [تحسين] دالة تحميل PDF مبنية على البيانات مباشرة
function downloadPDF() {
    if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
        alert(translations[currentLang]?.ui?.pdf_error || 'خطأ في تحميل مكتبة PDF.');
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const margin = 10;
    let yPosition = 20;
    const maxWidth = doc.internal.pageSize.width - 2 * margin;
    const langAnalysisData = (typeof analysisData !== 'undefined' && analysisData[currentLang]) ? analysisData[currentLang] : null;

    // --- بناء محتوى الـ PDF من البيانات ---
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 255);
    doc.text(translations[currentLang]?.ui?.powered_by || "Powered by: secertsroom.netlify.app", margin, yPosition);
    yPosition += 15;
    doc.setTextColor(0, 0, 0);

    // 1. التحليل المختصر
    doc.setFontSize(16);
    doc.text("التحليل المختصر", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    const topDomainKey = Object.entries(domainAverages).sort((a, b) => b[1] - a[1])[0][0];
    const summaryIntro = `مجالك الأقوى هو: ${getDomainName(topDomainKey)}.`;
    doc.text(summaryIntro, margin, yPosition, { maxWidth });
    yPosition += 10;

    // 2. التحليل حسب النظريات
    doc.setFontSize(16);
    doc.text("التحليل حسب النظريات", margin, yPosition);
    yPosition += 10;
    doc.setFontSize(12);

    Object.entries(categoryAverages).sort((a, b) => b[1] - a[1]).forEach(([catKey, avgScore]) => {
        if (yPosition > doc.internal.pageSize.height - 30) { // Check for new page
            doc.addPage();
            yPosition = margin;
        }
        const theoryData = langAnalysisData ? langAnalysisData[catKey] : null;
        const theoryName = theoryData ? theoryData.name : getTheoryName(catKey);
        doc.setFont(undefined, 'bold');
        doc.text(`${theoryName} (متوسط: ${avgScore.toFixed(2)})`, margin, yPosition);
        yPosition += 7;
        doc.setFont(undefined, 'normal');
        if (theoryData) {
            const interpretation = avgScore >= 3.5 ? theoryData.high_score_interpretation : theoryData.low_score_interpretation;
            const splitText = doc.splitTextToSize(`تحليلك: ${interpretation}`, maxWidth);
            doc.text(splitText, margin, yPosition);
            yPosition += (splitText.length * 5) + 5;
        }
    });

    doc.save("SecretsRoom_Report.pdf");
}


// مشاركة النتيجة
function shareResult() {
  const topDomainKey = Object.entries(domainAverages).sort((a, b) => b[1] - a[1])[0][0];
  const topTheoryKey = Object.entries(categoryAverages).sort((a, b) => b[1] - a[1])[0][0];
  
  const text = `لقد اكتشفت أسرار شخصيتي! 🌟
مجالي الأقوى هو "${getDomainName(topDomainKey)}" ونظريتي المهيمنة هي "${getTheoryName(topTheoryKey)}".
اكتشف المزيد عن نفسك في غرفة الأسرار: secertsroom.netlify.app`;

  if (navigator.share) {
    navigator.share({
      title: "تحليل شخصيتي من غرفة الأسرار",
      text: text,
      url: "https://secertsroom.netlify.app"
    } ).catch(error => console.error('خطأ في المشاركة:', error));
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(text )}`);
  }
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem("session");
  localStorage.removeItem("savedAnswers");
  userSession = null;
  location.reload();
}

// عند التحميل
window.onload = () => {
  initDevice();
  initLanguage();
  applyTheme(localStorage.getItem("theme") || "light");
};
