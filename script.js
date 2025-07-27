// script.js - النسخة النهائية مع تحميل اللغات الديناميكي

// --- إعداد المتغيرات العامة ---
let translations = {}; // سيتم ملؤه ديناميكيًا
let currentLang = localStorage.getItem("lang") || "ar";
let deviceId = localStorage.getItem("deviceId") || "";
let userSession = JSON.parse(localStorage.getItem("session")) || null;
let currentQuestion = 0;
let answers = [];
let userAnswers = {};
let categoryAverages = {};
let domainAverages = {};

// --- دوال التهيئة واللغة ---

// دالة جديدة لتحميل ملف اللغة المطلوب ديناميكيًا
async function loadLanguage(lang) {
  // إذا كانت الترجمة محملة بالفعل في الذاكرة، فقط قم بتطبيقها
  if (translations[lang]) {
    applyLanguage(lang);
    return;
  }
  
  try {
    // استيراد ملف اللغة ديناميكيًا باستخدام ميزة حديثة
    // ملاحظة: يجب أن تحتوي ملفات اللغات على "export default"
    const { default: langData } = await import(`./locales/${lang}.js`);
    translations[lang] = langData; // تخزين الترجمة في الذاكرة
    applyLanguage(lang);
  } catch (error) {
    console.error(`فشل تحميل ملف اللغة '${lang}'. سيتم استخدام اللغة الإنجليزية كبديل.`, error);
    // في حالة الفشل (مثل عدم وجود الملف)، حاول تحميل اللغة الإنجليزية كلغة احتياطية
    if (lang !== 'en') {
      await loadLanguage('en');
    }
  }
}

function initDevice() {
  if (!deviceId) {
    deviceId = "SR-" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("deviceId", deviceId);
  }
}

function initLanguage() {
  const langToLoad = localStorage.getItem("lang") || "ar";
  currentLang = langToLoad;
  document.getElementById("langSelect").value = currentLang;
}

function applyLanguage(lang) {
  if (!translations[lang]) {
    console.error(`الترجمة للغة ${lang} غير متوفرة في الذاكرة.`);
    return;
  }
  const t = translations[lang].ui;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  
  document.title = t.title || "Secrets Room";

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

  document.getElementById("ageLabel").innerText = t.age || "";
  document.getElementById("genderLabel").innerText = t.gender || "";
  document.getElementById("startBtn").innerText = t.start || "";
  document.getElementById("nextBtn").innerText = t.next || "";
  
  const welcomeElement = document.getElementById("welcome");
  const logoutBtnElement = document.getElementById("logoutBtn");
  if (welcomeElement) {
      if (userSession) {
        welcomeElement.innerText = t.welcome || "";
        if (logoutBtnElement) logoutBtnElement.style.display = "inline-block";
      } else {
        welcomeElement.innerText = "";
        if (logoutBtnElement) logoutBtnElement.style.display = "none";
      }
  }
  updateResultButtonTitles();
}

async function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  currentLang = lang;
  await loadLanguage(lang); // تحميل وتطبيق اللغة الجديدة
  // إعادة عرض السؤال أو النتيجة الحالية باللغة الجديدة
  if (document.getElementById("quizSection").classList.contains("active")) {
    renderQuestion();
  } else if (document.getElementById("resultSection").classList.contains("active")) {
    // إعادة عرض القسم النشط من النتائج
    const activeResultSection = document.querySelector('.result-section-content[style*="block"]');
    if (activeResultSection) {
        const sectionName = activeResultSection.id.replace('Section', '');
        displayResultContent(sectionName);
    }
  }
}

// --- دوال الثيم والمظهر ---
function applyTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const next = (localStorage.getItem("theme") === "dark") ? "light" : "dark";
  applyTheme(next);
}

// --- دوال منطق الاختبار ---
function startTest() {
  const age = document.getElementById("ageInput").value;
  const gender = document.getElementById("genderSelect").value;
  if (!age) return alert(translations[currentLang]?.ui?.age || "يرجى إدخال العمر");
  userSession = { age, gender, deviceId, timestamp: Date.now() };
  localStorage.setItem("session", JSON.stringify(userSession));
  document.getElementById("welcomeSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestion >= questions.length) return showResults();
  const q = questions[currentQuestion];
  const container = document.getElementById("questionContainer");
  const optionsContainer = document.getElementById("answerOptions");

  container.innerHTML = `<div class="question">${q.text[currentLang] || q.text['en']}</div>`;
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

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('progressText').textContent = `${currentQuestion + 1} / ${questions.length}`;
}

function nextQuestion() {
  if (!userAnswers.hasOwnProperty(currentQuestion)) return;
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

// --- دوال عرض النتائج ---
function showResults() {
  document.getElementById("quizSection").classList.remove("active");
  document.getElementById("resultSection").classList.add("active");
  calculateAverages();
  updateResultButtonTitles();
  displayResultContent('personalityType');
}

function calculateAverages() {
  const categoryScores = {};
  answers.forEach(a => {
    if (!categoryScores[a.category]) categoryScores[a.category] = { total: 0, count: 0 };
    categoryScores[a.category].total += a.value;
    categoryScores[a.category].count += 1;
  });
  categoryAverages = {};
  for (const [cat, data] of Object.entries(categoryScores)) {
    categoryAverages[cat] = data.total / data.count;
  }

  const domainScores = {};
  answers.forEach(a => {
    if (!domainScores[a.domain]) domainScores[a.domain] = { total: 0, count: 0 };
    domainScores[a.domain].total += a.value;
    domainScores[a.domain].count += 1;
  });
  domainAverages = {};
  for (const [dom, data] of Object.entries(domainScores)) {
    domainAverages[dom] = data.total / data.count;
  }
}

function updateResultButtonTitles() {
  const t = translations[currentLang]?.ui || {};
  document.getElementById("btnPersonalityType").innerText = t.personality_type || "Personality Type";
  document.getElementById("btnSummary").innerText = t.summary_analysis || "Summary Analysis";
  document.getElementById("btnTheories").innerText = t.theories_analysis || "Theories Analysis";
  document.getElementById("btnDetailedAnalysis").innerText = t.detailed_analysis || "Detailed Analysis";
  document.getElementById("btnRecommendations").innerText = t.recommendations || "Recommendations";
  document.getElementById("downloadPdfBtn").innerText = t.download_pdf || "Download PDF";
  document.getElementById("shareBtn").innerText = t.share || "Share";
}

function displayResultContent(sectionName) {
    document.querySelectorAll('.result-section-content').forEach(section => {
        section.style.display = 'none';
    });
    const sectionId = `${sectionName}Section`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.style.display = 'block';
    } else {
        return;
    }
    switch (sectionName) {
        case 'personalityType': displayPersonalityType(); break;
        case 'summary': displaySummaryAnalysis(); break;
        case 'theories': displayTheoriesAnalysis(); break;
        case 'detailedAnalysis': displayDetailedAnalysis(); break;
        case 'recommendations': displayRecommendations(); break;
    }
}

// --- دوال توليد محتوى النتائج (هذه مجرد أمثلة، يجب عليك إكمالها من الكود الأصلي) ---
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

// (تأكد من إضافة باقي دوال عرض النتائج هنا مثل displaySummaryAnalysis, displayTheoriesAnalysis, etc.)


// --- دوال الإجراءات الإضافية ---
function downloadPDF() {
    if (typeof window.jspdf === 'undefined') {
        alert('PDF library is not loaded.');
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // يجب إعادة كتابة هذه الدالة لتعتمد على البيانات مباشرة بدلاً من innerText
    const textToPrint = document.getElementById('resultSection').innerText;
    const splitText = doc.splitTextToSize(textToPrint, 180);
    doc.text(splitText, 10, 10);
    doc.save("SecretsRoom_Report.pdf");
}

function shareResult() {
    const textToShare = "اكتشفت أسرار شخصيتي في غرفة الأسرار! اكتشف أسرارك أنت أيضًا.";
    if (navigator.share) {
        navigator.share({
            title: 'تحليل شخصيتي',
            text: textToShare,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support navigator.share
        alert(textToShare);
    }
}

function logout() {
  localStorage.clear(); // مسح كل شيء لضمان جلسة جديدة نظيفة
  location.reload();
}

// --- دالة بدء التشغيل الرئيسية ---
window.onload = async () => {
  initDevice();
  initLanguage();
  await loadLanguage(currentLang); // تحميل اللغة المحددة عند فتح الصفحة
  applyTheme(localStorage.getItem("theme") || "light");
};
