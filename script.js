// 🌟 script.js - النسخة النهائية | "غرفة الأسرار" | v4.0
document.addEventListener('DOMContentLoaded', async () => {
    // --- 1. التهيئة ---
    let translations = {};
    let currentLang = localStorage.getItem("lang") || "ar";
    let deviceId = localStorage.getItem("deviceId") || "";
    let userSession = JSON.parse(localStorage.getItem("session")) || null;
    let currentQuestion = 0;
    let answers = [];
    let categoryAverages = {};
    let domainAverages = {};
    let analysisData = null;
    let myChart = null;

    const userDataKey = 'psychApp_v4';
    let userData = JSON.parse(localStorage.getItem(userDataKey)) || {
        visitorCount: 0,
        testCount: 0,
        lastVisit: null
    };

    // --- 2. دوال الأمان ---
    function sanitizeInput(input) {
        return input ? String(input).replace(/[<>&"]/g, "") : "";
    }

    function logEvent(action, details = {}) {
        console.log(`[SecretsRoom] ${action}`, { ...details, time: new Date().toISOString() });
    }

    // --- 3. تهيئة الجهاز ---
    function initDevice() {
        if (!deviceId) {
            deviceId = "SR-" + Math.random().toString(36).substr(2, 9);
            localStorage.setItem("deviceId", deviceId);
        }
        userData.visitorCount++;
        userData.lastVisit = new Date().toISOString();
        localStorage.setItem(userDataKey, JSON.stringify(userData));
    }

    // --- 4. إدارة اللغة ---
    async function loadLanguage(lang) {
        if (translations[lang]) return applyLanguage(lang);

        try {
            const { default: langData } = await import(`./locales/${lang}.js`);
            translations[lang] = langData;
            applyLanguage(lang);
        } catch (error) {
            console.error(`فشل تحميل اللغة: ${lang}`, error);
            if (lang !== "en") await loadLanguage("en");
            showNotification(translations["en"]?.ui?.language_error || "فشل تحميل اللغة", "error");
        }
    }

    function applyLanguage(lang) {
        const t = translations[lang]?.ui || {};
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.title = t.title || "غرفة الأسرار";

        updateElement("ageLabel", t.age || "العمر");
        updateElement("genderLabel", t.gender || "الجنس");
        updateElement("startBtn", t.start || "ابدأ");
        updateElement("nextBtn", t.next || "التالي");
        updateElement("quizTitle", t.quiz_title || "اختبار الشخصية");
        updateElement("visitorCount", userData.visitorCount);
        updateElement("testCount", userData.testCount);

        updateResultButtonTitles();
    }

    function updateElement(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function updateResultButtonTitles() {
        const t = translations[currentLang]?.ui || {};
        updateElement("btnPersonalityType", t.personality_type || "نوع الشخصية");
        updateElement("btnSummary", t.result_summary || "الملخص");
        updateElement("btnTheories", t.theories || "النظريات");
        updateElement("btnDetailedAnalysis", t.result_full || "تحليل مفصل");
        updateElement("btnRecommendations", t.recommendations || "توصيات");
        updateElement("downloadPdfBtn", t.download_pdf || "PDF");
        updateElement("shareBtn", t.share || "شارك");
    }

    // --- 5. إدارة الثيم ---
    function initThemeToggle() {
        const toggle = document.querySelector(".theme-toggle");
        if (toggle) {
            toggle.addEventListener("click", () => {
                const theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
                applyTheme(theme);
            });
        }
    }

    function applyTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
        const icon = document.querySelector(".theme-toggle i");
        if (icon) icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    // --- 6. إدارة الإعلانات ---
    function applyAdSettings() {
        const adSettings = JSON.parse(localStorage.getItem("adSettings")) || {};
        document.querySelectorAll('ins.adsbygoogle').forEach(ins => {
            if (adSettings.adClient) ins.setAttribute("data-ad-client", adSettings.adClient);
            if (ins.closest("#quizSection") && adSettings.adSlotQuiz)
                ins.setAttribute("data-ad-slot", adSettings.adSlotQuiz);
            if (ins.closest("#resultSection") && adSettings.adSlotResults)
                ins.setAttribute("data-ad-slot", adSettings.adSlotResults);
            if (ins.closest("footer") && adSettings.adSlotFooter)
                ins.setAttribute("data-ad-slot", adSettings.adSlotFooter);
        });
        try { window.adsbygoogle?.push({}); } catch (e) { console.warn("إعلانات فشلت", e); }
    }

    // --- 7. منطق الاختبار ---
    function startTest() {
        const age = sanitizeInput(document.getElementById("ageInput").value);
        if (!age || isNaN(age) || age < 10 || age > 100) {
            return showNotification(translations[currentLang]?.ui?.age_error || "أدخل عمرًا صحيحًا (10-100)", "error");
        }

        const gender = sanitizeInput(document.getElementById("genderSelect").value);
        userSession = { age, gender, deviceId, timestamp: Date.now() };
        localStorage.setItem("session", JSON.stringify(userSession));

        document.getElementById("welcomeSection").classList.remove("active");
        document.getElementById("quizSection").classList.add("active");
        renderQuestion();
    }

    function renderQuestion() {
        if (currentQuestion >= questions.length) return showResults();
        const q = questions[currentQuestion];
        const questionText = q.text[currentLang] || q.text["en"] || "سؤال غير متوفر";

        document.getElementById("questionContainer").innerHTML = `<div class="question">${questionText}</div>`;
        updateProgress();

        const optionsContainer = document.getElementById("answerOptions");
        optionsContainer.innerHTML = "";

        const createOption = (text, value) => {
            const opt = document.createElement("div");
            opt.className = "answer-option";
            opt.textContent = text;
            opt.onclick = () => selectAnswer(value);
            optionsContainer.appendChild(opt);
        };

        if (q.scale === "1-5") {
            for (let i = 1; i <= 5; i++) createOption(i, i);
        } else if (q.scale === "yes-no") {
            const opts = translations[currentLang]?.options?.yes_no || { yes: "نعم", no: "لا" };
            createOption(opts.yes, 5);
            createOption(opts.no, 1);
        } else {
            const likert = translations[currentLang]?.options?.likert || {};
            Object.entries(likert).forEach(([v, txt]) => createOption(txt, Number(v)));
        }

        document.getElementById("nextBtn").disabled = true;
    }

    function selectAnswer(value) {
        answers[currentQuestion] = value;
        document.querySelectorAll(".answer-option").forEach((el, i) => {
            el.classList.toggle("selected", i === value - 1 || (value === 5 && i === 0) || (value === 1 && i === 1));
        });
        document.getElementById("nextBtn").disabled = false;
    }

    function updateProgress() {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        document.getElementById("progressFill").style.width = `${progress}%`;
        document.getElementById("progressText").textContent = `${currentQuestion + 1} / ${questions.length}`;
    }

    function nextQuestion() {
        if (answers[currentQuestion] === undefined) {
            return showNotification(translations[currentLang]?.ui?.select_answer || "اختر إجابة", "info");
        }
        currentQuestion++;
        if (currentQuestion < questions.length) renderQuestion();
        else showResults();
    }

    // --- 8. عرض النتائج ---
    function showResults() {
        document.getElementById("quizSection").classList.remove("active");
        document.getElementById("resultSection").classList.add("active");
        calculateAverages();
        displayResultContent("personalityType");
        applyAdSettings();
        userData.testCount++;
        localStorage.setItem(userDataKey, JSON.stringify(userData));
        updateElement("testCount", userData.testCount);
    }

    function calculateAverages() {
        const categoryScores = {};
        const domainScores = {};
        answers.forEach((val, i) => {
            const q = questions[i];
            const cat = q.category;
            const dom = q.domain;
            categoryScores[cat] = (categoryScores[cat] || 0) + val;
            domainScores[dom] = (domainScores[dom] || 0) + val;
        });
        categoryAverages = {};
        for (const [k, v] of Object.entries(categoryScores)) {
            categoryAverages[k] = v / questions.filter(q => q.category === k).length;
        }
        domainAverages = {};
        for (const [k, v] of Object.entries(domainScores)) {
            domainAverages[k] = v / questions.filter(q => q.domain === k).length;
        }
    }

    function displayResultContent(section) {
        document.querySelectorAll(".result-section-content").forEach(el => el.style.display = "none");
        document.getElementById(`${section}Section`).style.display = "block";

        switch (section) {
            case "personalityType": displayPersonalityType(); break;
            case "summary": displaySummary(); break;
            case "theories": displayTheories(); break;
            case "detailedAnalysis": displayDetailed(); break;
            case "recommendations": displayRecommendations(); break;
        }
    }

    function displayPersonalityType() {
        const scores = domainAverages;
        const topDomain = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const t = translations[currentLang]?.results || {};
        const color = topDomain === "vision" ? "#e74c3c" : topDomain === "analysis" ? "#3498db" : "#9b59b6";
        const personality = t[`${topDomain}_personality`] || "شخصيتك";
        const desc = t[`${topDomain}_description`] || "وصف شخصيتك";

        document.getElementById("personalityTypeContent").innerHTML = `
            <h2 style="color:${color}">${personality}</h2>
            <p>${desc}</p>
        `;

        const ctx = document.getElementById("resultChart").getContext("2d");
        if (myChart) myChart.destroy();
        myChart = new Chart(ctx, {
            type: "radar",
             {
                labels: Object.keys(domainAverages).map(k => t.domains[k] || k),
                datasets: [{
                    label: t.domain_scores || "النتائج",
                    data: Object.values(domainAverages),
                    backgroundColor: "rgba(52,152,219,0.2)",
                    borderColor: "#3498db"
                }]
            },
            options: { scales: { r: { suggestedMin: 1, suggestedMax: 5 } } }
        });
    }

    function displaySummary() {
        const t = translations[currentLang]?.results || {};
        let html = `<h2>${t.summary_intro || "ملخص النتائج"}</h2>`;
        for (const [k, v] of Object.entries(domainAverages)) {
            html += `<p>${t.domains[k] || k}: ${v.toFixed(2)}/5</p>`;
        }
        document.getElementById("summaryContent").innerHTML = html;
    }

    function displayTheories() {
        const t = translations[currentLang]?.results || {};
        let html = `<h2>${t.theories_intro || "تحليل النظريات"}</h2>`;
        html += Object.keys(domainAverages).map(cat => {
            const theory = analysisData?.[cat]?.MBTI;
            if (!theory) return "";
            const score = domainAverages[cat];
            const interp = score > 3.5 ? theory.high_score_interpretation : theory.low_score_interpretation;
            return `<div class="theory-card"><h4>${theory.name}</h4><p>${interp}</p></div>`;
        }).join("");
        document.getElementById("theoriesContent").innerHTML = html;
    }

    function displayDetailed() {
        const t = translations[currentLang]?.results || {};
        let html = `<h2>${t.full_intro || "تحليل مفصل"}</h2>`;
        for (const [k, v] of Object.entries(categoryAverages)) {
            html += `<div class="result-card" style="border-left: 4px solid ${v > 3.5 ? "#2ecc71" : "#e74c3c"}"><p>${t.traits[k] || k}: ${v.toFixed(2)}/5</p></div>`;
        }
        document.getElementById("detailedAnalysisContent").innerHTML = html;
    }

    function displayRecommendations() {
        const t = translations[currentLang]?.results || {};
        const tips = Object.keys(domainAverages).flatMap(cat => {
            const theory = analysisData?.[cat]?.MBTI;
            return theory ? theory.development_tips || [] : [];
        });
        const list = tips.length ? tips : [t.general_recommendation || "واصل التطور"];
        document.getElementById("recommendationsContent").innerHTML = `<ul>${list.map(i => `<li>${i}</li>`).join("")}</ul>`;
    }

    // --- 9. PDF ومشاركة ---
    async function downloadPDF() {
        try {
            await loadJS('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
            const { jsPDF } = jspdf;
            const doc = new jsPDF({ format: 'a4' });
            doc.setFontSize(16);
            doc.text("تقرير شخصيتك", 105, 20, { align: 'center' });

            doc.setFontSize(12);
            doc.text(`النتيجة: ${document.getElementById("personalityTypeContent").innerText}`, 20, 40);
            doc.text(`الملخص: ${document.getElementById("summaryContent").innerText}`, 20, 70);
            doc.text(`التوصيات: ${document.getElementById("recommendationsContent").innerText}`, 20, 100);

            doc.save(`تقرير_الشخصية_${new Date().toLocaleDateString()}.pdf`);
            showNotification("تم الحفظ بنجاح", "success");
        } catch (e) {
            showNotification("فشل الحفظ", "error");
        }
    }

    function shareResult() {
        const text = "اكتشفت شخصيتي! جرب أنت كمان!";
        if (navigator.share) {
            navigator.share({ title: "تحليل شخصيتي", text, url: location.href });
        } else {
            navigator.clipboard.writeText(location.href).then(() => showNotification("تم النسخ", "info"));
        }
    }

    // --- 10. أدوات ---
    async function loadJS(src) {
        return new Promise((res, rej) => {
            if (document.querySelector(`script[src="${src}"]`)) return res();
            const s = document.createElement('script');
            s.src = src; s.onload = res; s.onerror = rej;
            document.head.appendChild(s);
        });
    }

    function showNotification(msg, type = 'info') {
        const notif = document.createElement('div');
        notif.className = `notification notification-${type}`;
        notif.innerHTML = `<i class="fas fa-${type === 'error' ? 'times' : type === 'success' ? 'check' : 'info'}-circle"></i> ${msg}`;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 3000);
    }

    // --- 11. بدء التشغيل ---
    initDevice();
    await loadLanguage(currentLang);
    applyTheme(localStorage.getItem("theme") || "light");
    initThemeToggle();
    applyAdSettings();

    // تحميل analysis_data.js
    try {
        const { analysis_data } = await import("./analysis_data.js");
        analysisData = analysis_data;
    } catch (e) {
        console.error("فشل تحميل analysis_data.js", e);
    }

    // إخفاء شاشة التحميل
    setTimeout(() => {
        const screen = document.getElementById('loadingScreen');
        if (screen) {
            screen.style.opacity = '0';
            setTimeout(() => screen.style.display = 'none', 500);
        }
    }, 1500);

    // دعم Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('theoryModal');
            if (modal && modal.style.display === 'block') modal.style.display = 'none';
        }
    });

    logEvent("App initialized", { deviceId, lang: currentLang });
});
