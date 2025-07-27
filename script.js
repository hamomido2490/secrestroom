// script.js - النسخة المحسنة مع تحسينات للنتايج، الـPDF، الأرق، والإعلانات

// --- إعداد المتغيرات العامة ---
let translations = {};
let currentLang = localStorage.getItem("lang") || "ar";
let deviceId = localStorage.getItem("deviceId") || "";
let userSession = JSON.parse(localStorage.getItem("session")) || null;
let currentQuestion = 0;
let answers = [];
let userAnswers = {};
let categoryAverages = {};
let domainAverages = {};

// --- دوال التهيئة واللغة ---
async function loadLanguage(lang) {
  if (translations[lang]) {
    applyLanguage(lang);
    return;
  }
  try {
    const { default: langData } = await import(`./locales/${lang}.js`);
    translations[lang] = langData;
    applyLanguage(lang);
  } catch (error) {
    console.error(`فشل تحميل ملف اللغة '${lang}'.`, error);
    if (lang !== 'en') {
      await loadLanguage('en');
      alert(translations['en']?.ui?.language_error || "Failed to load language, defaulting to English.");
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
  currentLang = localStorage.getItem("lang") || "ar";
  document.getElementById("langSelect").value = currentLang;
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  const t = translations[lang].ui;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.title || "Secrets Room";

  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    siteTitle.innerHTML = `${t.title}  
<span style="font-size: 1.2rem; font-weight: normal;">${lang === 'ar' ? 'Secrets Room' : 'غرفة الأسرار'}</span>`;
  }

  document.getElementById("ageLabel").innerText = t.age || "Age";
  document.getElementById("genderLabel").innerText = t.gender || "Gender";
  document.getElementById("startBtn").innerText = t.start || "Start";
  document.getElementById("nextBtn").innerText = t.next || "Next";
  
  // تحديث نصوص genderSelect
  const genderSelect = document.getElementById("genderSelect");
  genderSelect.innerHTML = `
    <option value="male">${t.male || "Male ♂️"}</option>
    <option value="female">${t.female || "Female ♀️"}</option>
    <option value="other">${t.other || "Prefer not to say ⚧️"}</option>
  `;

  const welcomeElement = document.getElementById("welcome");
  const logoutBtnElement = document.getElementById("logoutBtn");
  if (welcomeElement) {
    if (userSession) {
      welcomeElement.innerText = t.welcome || "Welcome back!";
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
  await loadLanguage(lang);
  if (document.getElementById("quizSection").classList.contains("active")) {
    renderQuestion();
  } else if (document.getElementById("resultSection").classList.contains("active")) {
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
  const next = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  applyTheme(next);
}

// --- دوال منطق الاختبار ---
function startTest() {
  const age = document.getElementById("ageInput").value;
  if (!age) return alert(translations[currentLang]?.ui?.age_error || "Please enter your age");
  const gender = document.getElementById("genderSelect").value;
  userSession = { age, gender, deviceId, timestamp: Date.now() };
  localStorage.setItem("session", JSON.stringify(userSession));
  document.getElementById("welcomeSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestion >= questions.length) return showResults();
  const q = questions[currentQuestion];
  document.getElementById("questionContainer").innerHTML = `<div class="question">${q.text[currentLang] || q.text['en']}</div>`;
  updateProgress();
  const optionsContainer = document.getElementById("answerOptions");
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
  document.getElementById("nextBtn").disabled = true;
  const hint = document.getElementById("nextBtnHint");
  if (hint) hint.style.display = "none";
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
  document.getElementById("nextBtn").disabled = false;
  const hint = document.getElementById("nextBtnHint");
  if (hint) hint.style.display = "none";
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + '%';
  document.getElementById("progressText").textContent = `${currentQuestion + 1} / ${questions.length}`;
}

function nextQuestion() {
  if (!userAnswers.hasOwnProperty(currentQuestion)) {
    const hint = document.getElementById("nextBtnHint");
    if (hint) {
      hint.textContent = translations[currentLang]?.ui?.select_answer || "Please select an answer";
      hint.style.display = "block";
    }
    return;
  }
  answers.push({
    questionId: questions[currentQuestion].id,
    category: questions[currentQuestion].category,
    domain: questions[currentQuestion].domain,
    value: userAnswers[currentQuestion],
    weight: questions[currentQuestion].weight || 1 // دعم الوزن
  });
  currentQuestion++;
  if (currentQuestion < questions.length) renderQuestion();
  else showResults();
}

// --- دوال عرض النتائج ---
function showResults() {
  document.getElementById("quizSection").classList.remove("active");
  document.getElementById("resultSection").classList.add("active");
  calculateAverages();
  updateResultButtonTitles();
  displayResultContent('personalityType');
  // تحميل الإعلانات بعد عرض النتايج
  if (window.adsbygoogle) {
    window.adsbygoogle.push({});
  }
}

function calculateAverages() {
  const categoryScores = {};
  const domainScores = {};
  answers.forEach(a => {
    if (!categoryScores[a.category]) categoryScores[a.category] = { total: 0, count: 0 };
    if (!domainScores[a.domain]) domainScores[a.domain] = { total: 0, count: 0 };
    categoryScores[a.category].total += a.value * a.weight;
    categoryScores[a.category].count += a.weight;
    domainScores[a.domain].total += a.value * a.weight;
    domainScores[a.domain].count += a.weight;
  });
  categoryAverages = {};
  for (const [cat, data] of Object.entries(categoryScores)) {
    categoryAverages[cat] = data.total / data.count;
  }
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
  document.querySelectorAll('.result-section-content').forEach(s => s.style.display = 'none');
  const sectionElement = document.getElementById(`${sectionName}Section`);
  if (sectionElement) sectionElement.style.display = 'block';
  
  switch (sectionName) {
    case 'personalityType': displayPersonalityType(); break;
    case 'summary': displaySummaryAnalysis(); break;
    case 'theories': displayTheoriesAnalysis(); break;
    case 'detailedAnalysis': displayDetailedAnalysis(); break;
    case 'recommendations': displayRecommendations(); break;
  }
}

// --- دوال توليد محتوى النتائج ---
function displayPersonalityType() {
  const contentDiv = document.getElementById("personalityTypeContent");
  const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
  const topDomainKey = sortedDomains[0]?.[0] || "vision";
  let personalityColor, colorDescription, themes;

  if (topDomainKey === "vision" || topDomainKey === "discovery") {
    personalityColor = translations[currentLang]?.ui?.red_personality || "Red Personality";
    colorDescription = translations[currentLang]?.ui?.red_description || "You are enthusiastic, energetic, and driven to lead and explore. You love challenges and innovation.";
    themes = translations[currentLang]?.ui?.red_themes || ["Energy", "Passion", "Leadership", "Innovation", "Boldness"];
  } else if (topDomainKey === "analysis" || topDomainKey === "healing") {
    personalityColor = translations[currentLang]?.ui?.blue_personality || "Blue Personality";
    colorDescription = translations[currentLang]?.ui?.blue_description || "You are calm, analytical, and prefer deep thinking and understanding. You value order and helping others.";
    themes = translations[currentLang]?.ui?.blue_themes || ["Calmness", "Deep Thinking", "Analysis", "Helping", "Organization"];
  } else {
    personalityColor = translations[currentLang]?.ui?.purple_personality || "Purple Personality";
    colorDescription = translations[currentLang]?.ui?.purple_description || "You are complex and versatile, blending various traits. You thrive on diversity and continuous growth.";
    themes = translations[currentLang]?.ui?.purple_themes || ["Diversity", "Growth", "Creativity", "Flexibility", "Depth"];
  }

  let html = `<h2>${personalityColor}</h2><p>${colorDescription}</p><h3>${translations[currentLang]?.ui?.themes || "Your Core Themes"}:</h3><ul>`;
  themes.forEach(theme => html += `<li>${theme}</li>`);
  html += `</ul>`;
  contentDiv.innerHTML = html;
  contentDiv.style.backgroundColor = getColorCode(personalityColor);

  // رسم بياني بـChart.js
  const ctx = document.getElementById('resultChart').getContext('2d');
  if (window.myChart) window.myChart.destroy(); // تدمير الرسم البياني القديم
  window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(domainAverages),
      datasets: [{
        label: translations[currentLang]?.ui?.domain_scores || 'Domain Scores',
        data: Object.values(domainAverages),
        backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6']
      }]
    },
    options: {
      scales: { y: { beginAtZero: true, max: 5 } },
      plugins: { legend: { display: false } }
    }
  });
}

function getColorCode(colorName) {
  const colors = {
    [translations[currentLang]?.ui?.red_personality || "Red Personality"]: "#e74c3c",
    [translations[currentLang]?.ui?.blue_personality || "Blue Personality"]: "#3498db",
    [translations[currentLang]?.ui?.green_personality || "Green Personality"]: "#2ecc71",
    [translations[currentLang]?.ui?.purple_personality || "Purple Personality"]: "#9b59b6"
  };
  return colors[colorName] || "#95a5a6";
}

function displaySummaryAnalysis() {
  const contentDiv = document.getElementById("summaryContent");
  let html = `<h2>${translations[currentLang]?.ui?.summary_analysis || "Summary Analysis"}</h2>`;
  html += `<p>${translations[currentLang]?.ui?.summary_intro || "Here is a brief overview of your personality based on your answers:"}</p>`;
  for (const [domain, score] of Object.entries(domainAverages)) {
    html += `<p>${domain}: ${score.toFixed(2)}/5</p>`;
  }
  contentDiv.innerHTML = html;
}

function displayTheoriesAnalysis() {
  const contentDiv = document.getElementById("theoriesContent");
  let html = `<h2>${translations[currentLang]?.ui?.theories_analysis || "Theories Analysis"}</h2>`;
  html += `<p>${translations[currentLang]?.ui?.theories_intro || "Your results mapped to psychological theories:"}</p>`;
  // مثال: ربط بـMBTI
  const extroversion = domainAverages["vision"] || 0;
  const introversion = domainAverages["analysis"] || 0;
  const mbti = extroversion > introversion ? "Extrovert" : "Introvert";
  html += `<p>MBTI: ${mbti}</p>`;
  contentDiv.innerHTML = html;
}

function displayDetailedAnalysis() {
  const contentDiv = document.getElementById("detailedAnalysisContent");
  let html = `<h2>${translations[currentLang]?.ui?.detailed_analysis || "Detailed Analysis"}</h2>`;
  html += `<p>${translations[currentLang]?.ui?.detailed_intro || "Detailed breakdown of your results:"}</p>`;
  for (const [category, score] of Object.entries(categoryAverages)) {
    html += `<p>${category}: ${score.toFixed(2)}/5</p>`;
  }
  contentDiv.innerHTML = html;
}

function displayRecommendations() {
  const contentDiv = document.getElementById("recommendationsContent");
  let recommendations = [];
  if (domainAverages["vision"] > 3.5) {
    recommendations.push(translations[currentLang]?.ui?.vision_recommendation || "Try leading a new project or engaging in creative challenges to leverage your energy.");
  }
  if (domainAverages["healing"] > 3.5) {
    recommendations.push(translations[currentLang]?.ui?.healing_recommendation || "Practice meditation or yoga to enhance your inner calm.");
  }
  if (categoryAverages["sleep"] < 2.5) {
    recommendations.push(translations[currentLang]?.ui?.sleep_recommendation || "You may be experiencing insomnia. Try 4-7-8 breathing exercises or chamomile tea before bed.");
  }
  if (recommendations.length === 0) {
    recommendations.push(translations[currentLang]?.ui?.general_recommendation || "Continue exploring your strengths and stay open to personal growth.");
  }
  let html = `<ul>${recommendations.map(r => `<li>${r}</li>`).join('')}</ul>`;
  contentDiv.innerHTML = html;
}

// --- دوال الإجراءات الإضافية ---
function downloadPDF() {
  if (typeof window.jspdf === 'undefined') return alert(translations[currentLang]?.ui?.pdf_error || 'PDF library not loaded.');
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("Amiri", "normal"); // دعم الخط العربي
  doc.setFontSize(12);

  // جمع محتوى النتايج
  const personalityContent = document.getElementById("personalityTypeContent").innerText;
  const summaryContent = document.getElementById("summaryContent").innerText;
  const recommendationsContent = document.getElementById("recommendationsContent").innerText;

  doc.text(translations[currentLang]?.ui?.report_title || "Personality Report", 10, 10);
  doc.text(personalityContent, 10, 20);
  doc.text(translations[currentLang]?.ui?.summary_analysis || "Summary Analysis", 10, 50);
  doc.text(summaryContent, 10, 60);
  doc.text(translations[currentLang]?.ui?.recommendations || "Recommendations", 10, 90);
  doc.text(recommendationsContent, 10, 100);

  doc.save(`SecretsRoom_Report_${userSession.deviceId}.pdf`);
}

function shareResult() {
  const textToShare = translations[currentLang]?.ui?.share_text || "I discovered my personality secrets at Secrets Room!";
  if (navigator.share) {
    navigator.share({ 
      title: translations[currentLang]?.ui?.share_title || 'My Personality Analysis', 
      text: textToShare, 
      url: window.location.href 
    }).catch(console.error);
  } else {
    alert(textToShare);
  }
}

function logout() {
  localStorage.clear();
  location.reload();
}

// --- دالة بدء التشغيل الرئيسية ---
window.onload = async () => {
  initDevice();
  initLanguage();
  await loadLanguage(currentLang);
  applyTheme(localStorage.getItem("theme") || "light");
};