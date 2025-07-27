// script.js - النسخة المحسنة مع دعم متعدد اللغات، الإعلانات، والأمان

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
let analysisData = null; // لتحميل بيانات analysis_data.js

// --- دوال الأمان والتنظيف ---
function sanitizeInput(input) {
  return input.replace(/[<>&"]/g, "");
}

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
    console.error(`فشل تحميل ملف اللغة '${lang}':`, error);
    if (lang !== "en") {
      await loadLanguage("en");
      alert(translations["en"]?.ui?.language_error || "Failed to load language, defaulting to English.");
    }
  }
}

// [تحسين] تحميل بيانات analysis_data.js مع التخزين المؤقت
async function loadAnalysisData() {
  if (analysisData) return; // التخزين المؤقت
  try {
    const { default: data } = await import("./analysis_data.js");
    analysisData = data;
  } catch (error) {
    console.error("فشل تحميل analysis_data.js:", error);
    alert(translations[currentLang]?.ui?.data_error || "Error loading psychological theories data.");
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
  const r = translations[lang].results || {};
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.title || "Secrets Room";

  const siteTitle = document.querySelector(".site-title");
  if (siteTitle) {
    siteTitle.innerHTML = `${t.title}<br><span style="font-size: 1.2rem; font-weight: normal;">${
      lang === "ar" ? "Secrets Room" : "غرفة الأسرار"
    }</span>`;
  }

  document.getElementById("ageLabel").textContent = t.age || "Age";
  document.getElementById("genderLabel").textContent = t.gender || "Gender";
  document.getElementById("startBtn").textContent = t.start || "Start";
  document.getElementById("nextBtn").textContent = t.next || "Next";
  document.getElementById("nextBtnHint").textContent = t.select_answer || "Please select an answer";
  document.getElementById("quizTitle").textContent = t.quiz_title || "Personality Quiz";

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
      welcomeElement.textContent = t.welcome || "Welcome back!";
      if (logoutBtnElement) logoutBtnElement.style.display = "inline-block";
    } else {
      welcomeElement.textContent = "";
      if (logoutBtnElement) logoutBtnElement.style.display = "none";
    }
  }

  updateResultButtonTitles();
}

// [تحسين] تحديث عناوين أزرار النتائج
function updateResultButtonTitles() {
  const t = translations[currentLang]?.ui || {};
  document.getElementById("btnPersonalityType").textContent = t.personality_type || "Personality Type";
  document.getElementById("btnSummary").textContent = t.result_summary || "Summary Analysis";
  document.getElementById("btnTheories").textContent = t.theories || "Theories Analysis";
  document.getElementById("btnDetailedAnalysis").textContent = t.result_full || "Detailed Analysis";
  document.getElementById("btnRecommendations").textContent = t.recommendations || "Recommendations";
  document.getElementById("downloadPdfBtn").textContent = t.download_pdf || "Download PDF";
  document.getElementById("shareBtn").textContent = t.share || "Share";
}

// [تحسين] إضافة زر تبديل الثيم
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function applyTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const next = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  applyTheme(next);
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
      const sectionName = activeResultSection.id.replace("Section", "");
      displayResultContent(sectionName);
    }
  }
}

// --- دوال إدارة الإعلانات ---
function applyAdSettings() {
  const adSettings = JSON.parse(localStorage.getItem("adSettings")) || {};
  document.querySelectorAll('ins.adsbygoogle').forEach((ins) => {
    if (adSettings.adClient) ins.setAttribute("data-ad-client", adSettings.adClient);
    if (adSettings.adSlotQuiz && ins.closest("#quizSection"))
      ins.setAttribute("data-ad-slot", adSettings.adSlotQuiz);
    if (adSettings.adSlotResults && ins.closest("#resultSection"))
      ins.setAttribute("data-ad-slot", adSettings.adSlotResults);
    if (adSettings.adSlotFooter && ins.closest("footer"))
      ins.setAttribute("data-ad-slot", adSettings.adSlotFooter);
  });
  try {
    if (window.adsbygoogle) window.adsbygoogle.push({});
  } catch (error) {
    console.warn("فشل تحميل الإعلانات:", error);
    alert(translations[currentLang]?.errors?.ad_load_error || "Failed to load ad, please try again later");
  }
}

// --- دوال منطق الاختبار ---
function startTest() {
  const ageInput = document.getElementById("ageInput").value;
  const age = sanitizeInput(ageInput);
  if (!age || isNaN(age) || age < 10 || age > 100) {
    return alert(translations[currentLang]?.ui?.age_error || "Please enter a valid age (10-100)");
  }
  const gender = sanitizeInput(document.getElementById("genderSelect").value);
  userSession = { age, gender, deviceId, timestamp: Date.now() };
  localStorage.setItem("session", JSON.stringify(userSession));
  document.getElementById("welcomeSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  document.getElementById("quizTitle").style.display = "block";
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestion >= questions.length) return showResults();
  const q = questions[currentQuestion];
  const questionText = q.text[currentLang] || q.text["en"] || "Question not available";
  document.getElementById("questionContainer").innerHTML = `<div class="question" role="heading" aria-level="3">${questionText}</div>`;
  updateProgress();
  const optionsContainer = document.getElementById("answerOptions");
  optionsContainer.innerHTML = "";

  if (q.scale === "1-5") {
    const scaleContainer = document.createElement("div");
    scaleContainer.className = "scale-options";
    scaleContainer.setAttribute("role", "radiogroup");
    scaleContainer.setAttribute("aria-labelledby", "questionContainer");
    for (let i = 1; i <= 5; i++) {
      const option = document.createElement("div");
      option.className = "scale-option";
      option.textContent = i;
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", "false");
      option.setAttribute("tabindex", i === 1 ? "0" : "-1");
      option.onclick = () => selectAnswer(i);
      scaleContainer.appendChild(option);
    }
    optionsContainer.appendChild(scaleContainer);
  } else if (q.scale === "yes-no") {
    const yesNoContainer = document.createElement("div");
    yesNoContainer.className = "yes-no-options";
    yesNoContainer.setAttribute("role", "radiogroup");
    yesNoContainer.setAttribute("aria-labelledby", "questionContainer");
    const yesNoOptions = translations[currentLang]?.options?.yes_no || { yes: "Yes", no: "No" };
    ["yes", "no"].forEach((val) => {
      const option = document.createElement("div");
      option.className = "answer-option";
      option.textContent = yesNoOptions[val];
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", "false");
      option.setAttribute("tabindex", val === "yes" ? "0" : "-1");
      option.onclick = () => selectAnswer(val === "yes" ? 5 : 1); // نعم=5، لا=1
      yesNoContainer.appendChild(option);
    });
    optionsContainer.appendChild(yesNoContainer);
  } else {
    const likertOptions = translations[currentLang]?.options?.likert || {};
    const likertContainer = document.createElement("div");
    likertContainer.className = "likert-options";
    likertContainer.setAttribute("role", "radiogroup");
    likertContainer.setAttribute("aria-labelledby", "questionContainer");
    Object.entries(likertOptions).forEach(([val, txt], index) => {
      const option = document.createElement("div");
      option.className = "answer-option";
      option.textContent = txt;
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", "false");
      option.setAttribute("tabindex", index === 0 ? "0" : "-1");
      option.onclick = () => selectAnswer(Number(val));
      likertContainer.appendChild(option);
    });
    optionsContainer.appendChild(likertContainer);
  }
  document.getElementById("nextBtn").disabled = true;
  const hint = document.getElementById("nextBtnHint");
  if (hint) hint.style.display = "none";
}

function selectAnswer(value) {
  userAnswers[currentQuestion] = value;
  const q = questions[currentQuestion];
  if (q.scale === "1-5") {
    document.querySelectorAll(".scale-option").forEach((opt, index) => {
      const isSelected = index + 1 === value;
      opt.classList.toggle("selected", isSelected);
      opt.setAttribute("aria-checked", isSelected ? "true" : "false");
      opt.setAttribute("tabindex", isSelected ? "0" : "-1");
    });
  } else if (q.scale === "yes-no") {
    document.querySelectorAll(".answer-option").forEach((opt, index) => {
      const isSelected = (index === 0 && value === 5) || (index === 1 && value === 1);
      opt.classList.toggle("selected", isSelected);
      opt.setAttribute("aria-checked", isSelected ? "true" : "false");
      opt.setAttribute("tabindex", isSelected ? "0" : "-1");
    });
  } else {
    const likertOptions = translations[currentLang]?.options?.likert || {};
    const optionValues = Object.keys(likertOptions);
    document.querySelectorAll(".answer-option").forEach((opt, index) => {
      const isSelected = Number(optionValues[index]) === value;
      opt.classList.toggle("selected", isSelected);
      opt.setAttribute("aria-checked", isSelected ? "true" : "false");
      opt.setAttribute("tabindex", isSelected ? "0" : "-1");
    });
  }
  document.getElementById("nextBtn").disabled = false;
  const hint = document.getElementById("nextBtnHint");
  if (hint) hint.style.display = "none";
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("progressText").textContent = `${
    currentQuestion + 1
  } / ${questions.length}`;
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
  const q = questions[currentQuestion];
  answers.push({
    questionId: q.id,
    category: q.category,
    domain: q.domain,
    value: userAnswers[currentQuestion],
    weight: q.weight || 1,
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
  displayResultContent("personalityType");
  applyAdSettings(); // [تحسين] تحميل إعدادات الإعلانات
}

function calculateAverages() {
  const categoryScores = {};
  const domainScores = {};
  answers.forEach((a) => {
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

function displayResultContent(sectionName) {
  document.querySelectorAll(".result-section-content").forEach((s) => (s.style.display = "none"));
  const sectionElement = document.getElementById(`${sectionName}Section`);
  if (sectionElement) {
    sectionElement.style.display = "block";
    sectionElement.setAttribute("aria-hidden", "false");
  }
  document.querySelectorAll(".result-section-content").forEach((s) => {
    if (s !== sectionElement) s.setAttribute("aria-hidden", "true");
  });

  switch (sectionName) {
    case "personalityType":
      displayPersonalityType();
      break;
    case "summary":
      displaySummaryAnalysis();
      break;
    case "theories":
      displayTheoriesAnalysis();
      break;
    case "detailedAnalysis":
      displayDetailedAnalysis();
      break;
    case "recommendations":
      displayRecommendations();
      break;
  }
}

function displayPersonalityType() {
  const contentDiv = document.getElementById("personalityTypeContent");
  const t = translations[currentLang]?.results || {};
  const sortedDomains = Object.entries(domainAverages).sort((a, b) => b[1] - a[1]);
  const topDomainKey = sortedDomains[0]?.[0] || "vision";
  let personalityColor, colorDescription, themes;

  if (topDomainKey === "vision" || topDomainKey === "discovery") {
    personalityColor = t.red_personality || "Red Personality";
    colorDescription = t.red_description || "You are enthusiastic, energetic, and driven to lead and explore.";
    themes = t.red_themes || ["Energy", "Passion", "Leadership", "Innovation", "Boldness"];
  } else if (topDomainKey === "analysis" || topDomainKey === "healing") {
    personalityColor = t.blue_personality || "Blue Personality";
    colorDescription = t.blue_description || "You are calm, analytical, and prefer deep thinking and understanding.";
    themes = t.blue_themes || ["Calmness", "Deep Thinking", "Analysis", "Helping", "Organization"];
  } else {
    personalityColor = t.purple_personality || "Purple Personality";
    colorDescription = t.purple_description || "You are complex and versatile, blending various traits.";
    themes = t.purple_themes || ["Diversity", "Growth", "Creativity", "Flexibility", "Depth"];
  }

  let html = `<h2>${personalityColor}</h2><p>${colorDescription}</p><h3>${
    t.themes || "Your Core Themes"
  }:</h3><ul>`;
  themes.forEach((theme) => (html += `<li>${theme}</li>`));
  html += `</ul>`;
  contentDiv.innerHTML = html;
  contentDiv.style.backgroundColor = getColorCode(personalityColor);
  contentDiv.setAttribute("data-score", domainAverages[topDomainKey] > 3.5 ? "high" : "low");

  // [تحسين] رسم بياني راداري مع تدمير الرسم القديم
  const ctx = document.getElementById("resultChart").getContext("2d");
  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: Object.keys(domainAverages).map((key) => t.domains[key] || key),
      datasets: [
        {
          label: t.domain_scores || "Domain Scores",
          data: Object.values(domainAverages),
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          borderColor: "#3498db",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 5 },
      },
      plugins: { legend: { display: true, position: "top" } },
    },
  });
}

function getColorCode(colorName) {
  const t = translations[currentLang]?.results || {};
  const colors = {
    [t.red_personality || "Red Personality"]: "#e74c3c",
    [t.blue_personality || "Blue Personality"]: "#3498db",
    [t.green_personality || "Green Personality"]: "#2ecc71",
    [t.purple_personality || "Purple Personality"]: "#9b59b6",
  };
  return colors[colorName] || "#95a5a6";
}

function displayTheoriesAnalysis() {
  const contentDiv = document.getElementById("theoriesContent");
  const t = translations[currentLang]?.results || {};
  let html = `<h2>${t.theories_intro || "Theories Analysis"}</h2>`;
  html += `<p>${t.theories_intro || "Your results mapped to psychological theories:"}</p>`;

  if (!analysisData) {
    html += `<p>${translations[currentLang]?.ui?.data_error || "Error loading psychological theories data."}</p>`;
    contentDiv.innerHTML = html;
    return;
  }

  for (const category in analysisData) {
    for (const theoryKey in analysisData[category]) {
      const theory = analysisData[category][theoryKey];
      const score = categoryAverages[category] || 0;
      const interpretation = score > 3.5 ? theory.high_score_interpretation : theory.low_score_interpretation;
      html += `
        <div class="theory-card" data-theory="${theoryKey}" role="button" tabindex="0" aria-label="${
        t.traits[theoryKey] || theoryKey
      }">
          <h4>${t.traits[theoryKey] || theory.name}</h4>
          <p><strong>${t.score || "Score"}:</strong> ${score.toFixed(2)}/5</p>
          <p><strong>${t.interpretation || "Interpretation"}:</strong> ${interpretation}</p>
          <p><strong>${t.description || "Description"}:</strong> ${theory.description}</p>
          <p><strong>${t.key_concepts || "Key Concepts"}:</strong> ${theory.key_concepts.join(", ")}</p>
        </div>`;
    }
  }
  contentDiv.innerHTML = html;

  // [تحسين] إضافة تفاعلية للمودال
  document.querySelectorAll(".theory-card").forEach((card) => {
    card.addEventListener("click", () => showTheoryModal(card.dataset.theory));
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") showTheoryModal(card.dataset.theory);
    });
  });
}

function showTheoryModal(theoryKey) {
  const modal = document.getElementById("theoryModal");
  const modalContent = document.getElementById("theoryModalContent");
  const t = translations[currentLang]?.results || {};
  let found = false;

  for (const category in analysisData) {
    if (analysisData[category][theoryKey]) {
      const theory = analysisData[category][theoryKey];
      const score = categoryAverages[category] || 0;
      const interpretation = score > 3.5 ? theory.high_score_interpretation : theory.low_score_interpretation;
      modalContent.innerHTML = `
        <h4>${t.traits[theoryKey] || theory.name}</h4>
        <p><strong>${t.score || "Score"}:</strong> ${score.toFixed(2)}/5</p>
        <p><strong>${t.interpretation || "Interpretation"}:</strong> ${interpretation}</p>
        <p><strong>${t.description || "Description"}:</strong> ${theory.description}</p>
        <p><strong>${t.key_concepts || "Key Concepts"}:</strong> ${theory.key_concepts.join(", ")}</p>
      `;
      found = true;
      break;
    }
  }

  if (!found) {
    modalContent.innerHTML = `<p>${translations[currentLang]?.ui?.data_error || "Theory data not found."}</p>`;
  }
  modal.style.display = "block";
}

function displaySummaryAnalysis() {
  const contentDiv = document.getElementById("summaryContent");
  const t = translations[currentLang]?.results || {};
  let html = `<h2>${t.summary_intro || "Summary Analysis"}</h2>`;
  html += `<p>${t.summary_intro || "Here is a brief overview of your personality based on your answers:"}</p>`;
  for (const [domain, score] of Object.entries(domainAverages)) {
    html += `<p>${t.domains[domain] || domain}: ${score.toFixed(2)}/5</p>`;
  }
  contentDiv.innerHTML = html;
}

function displayDetailedAnalysis() {
  const contentDiv = document.getElementById("detailedAnalysisContent");
  const t = translations[currentLang]?.results || {};
  let html = `<h2>${t.full_intro || "Detailed Analysis"}</h2>`;
  html += `<p>${t.full_intro || "Detailed breakdown of your results:"}</p>`;
  for (const [category, score] of Object.entries(categoryAverages)) {
    html += `<div class="result-card" data-score="${score > 3.5 ? "high" : "low"}"><p>${
      t.traits[category] || category
    }: ${score.toFixed(2)}/5</p></div>`;
  }
  contentDiv.innerHTML = html;
}

function displayRecommendations() {
  const contentDiv = document.getElementById("recommendationsContent");
  const t = translations[currentLang]?.results || {};
  let recommendations = [];

  if (!analysisData) {
    recommendations.push(translations[currentLang]?.ui?.data_error || "Error loading recommendations data.");
  } else {
    for (const category in analysisData) {
      for (const theoryKey in analysisData[category]) {
        const theory = analysisData[category][theoryKey];
        const score = categoryAverages[category] || 0;
        if (score > 3.5) {
          recommendations.push(...theory.development_tips);
        }
      }
    }
  }

  if (recommendations.length === 0) {
    recommendations.push(
      translations[currentLang]?.ui?.general_recommendation ||
        "Continue exploring your strengths and stay open to personal growth."
    );
  }
  let html = `<ul>${recommendations.map((r) => `<li>${r}</li>`).join("")}</ul>`;
  contentDiv.innerHTML = html;
}

// --- دوال الإجراءات الإضافية ---
function downloadPDF() {
  if (typeof window.jspdf === "undefined") {
    return alert(translations[currentLang]?.ui?.pdf_error || "PDF library not loaded.");
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(12);

  // [تحسين] دعم الخطوط لجميع اللغات
  if (currentLang === "ar") {
    doc.addFileToVFS(
      "Amiri-Regular.ttf",
      "data:font/ttf;base64,..." // استبدلي بـ Base64 لخط Amiri
    );
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    doc.setFont("Amiri");
  } else if (currentLang === "zh") {
    doc.addFileToVFS(
      "NotoSansSC-Regular.ttf",
      "data:font/ttf;base64,..." // استبدلي بـ Base64 لخط Noto Sans SC
    );
    doc.addFont("NotoSansSC-Regular.ttf", "NotoSansSC", "normal");
    doc.setFont("NotoSansSC");
  } else {
    doc.setFont("helvetica", "normal");
  }

  const t = translations[currentLang]?.results || {};
  let y = 10;
  doc.text(t.report_title || "Personality Report", 10, y);
  y += 10;
  doc.text(document.getElementById("personalityTypeContent").innerText, 10, y, {
    align: currentLang === "ar" ? "right" : "left",
    maxWidth: 180,
  });
  y += 40;
  doc.text(t.summary_intro || "Summary Analysis", 10, y);
  y += 10;
  doc.text(document.getElementById("summaryContent").innerText, 10, y, {
    align: currentLang === "ar" ? "right" : "left",
    maxWidth: 180,
  });
  y += 40;
  doc.text(t.theories_intro || "Theories Analysis", 10, y);
  y += 10;
  doc.text(document.getElementById("theoriesContent").innerText, 10, y, {
    align: currentLang === "ar" ? "right" : "left",
    maxWidth: 180,
  });
  y += 40;
  doc.text(t.recommendations_intro || "Recommendations", 10, y);
  y += 10;
  doc.text(document.getElementById("recommendationsContent").innerText, 10, y, {
    align: currentLang === "ar" ? "right" : "left",
    maxWidth: 180,
  });

  doc.save(`SecretsRoom_Report_${userSession.deviceId}.pdf`);
}

function shareResult() {
  const t = translations[currentLang]?.ui || {};
  const textToShare = t.share_text || "I discovered my personality secrets at Secrets Room!";
  if (navigator.share) {
    navigator.share({
      title: t.share_title || "My Personality Analysis",
      text: textToShare,
      url: window.location.href,
    }).catch(console.error);
  } else {
    alert(textToShare);
  }
}

function logout() {
  localStorage.removeItem("session");
  localStorage.removeItem("adminSession");
  location.reload();
}

// --- دالة بدء التشغيل الرئيسية ---
window.onload = async () => {
  initDevice();
  initLanguage();
  await loadLanguage(currentLang);
  await loadAnalysisData();
  applyTheme(localStorage.getItem("theme") || "light");
  initThemeToggle();
  applyAdSettings(); // [تحسين] تحميل إعدادات الإعلانات عند بدء التشغيل
};