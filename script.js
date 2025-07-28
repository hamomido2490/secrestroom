// 🌟 script.js - النسخة النهائية المتكاملة | "Secrets Room Pro"
document.addEventListener('DOMContentLoaded', async () => {
    // --- 1. إعدادات أولية ---
    let translations = {};
    let currentLang = localStorage.getItem("lang") || "ar";
    let deviceId = localStorage.getItem("deviceId") || "";
    let userSession = JSON.parse(localStorage.getItem("session")) || null;
    let currentQuestion = 0;
    let answers = [];
    let analysisData = null;
    let myChart = null; // لتجنب تكرار الرسم البياني

    const userDataKey = 'psychApp_v2'; // تخزين مركزي
    let userData = JSON.parse(localStorage.getItem(userDataKey)) || {
        visitorCount: 0,
        testCount: 0,
        lastVisit: null
    };

    // --- 2. دوال الأمان والتنظيم ---
    function sanitizeInput(input) {
        return input ? String(input).replace(/[<>&"]/g, "") : "";
    }

    function logEvent(action, details = {}) {
        console.log(`[PsychApp] ${action}`, { timestamp: new Date().toISOString(), ...details });
    }

    // --- 3. تهيئة الجهاز والجلسة ---
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
        const r = translations[lang]?.results || {};
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.title = t.title || "Secrets Room";

        // تحديث العناصر
        updateElement("ageLabel", t.age || "Age");
        updateElement("genderLabel", t.gender || "Gender");
        updateElement("startBtn", t.start || "Start");
        updateElement("nextBtn", t.next || "Next");
        updateElement("quizTitle", t.quiz_title || "Personality Quiz");

        const genderSelect = document.getElementById("genderSelect");
        if (genderSelect && t.male) {
            genderSelect.innerHTML = `
                <option value="male">${t.male}</option>
                <option value="female">${t.female}</option>
                <option value="other">${t.other}</option>
            `;
        }

        // تحديث إحصائيات الزوار
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
        updateElement("btnPersonalityType", t.personality_type || "Personality Type");
        updateElement("btnSummary", t.result_summary || "Summary");
        updateElement("btnTheories", t.theories || "Theories");
        updateElement("btnDetailedAnalysis", t.result_full || "Detailed");
        updateElement("btnRecommendations", t.recommendations || "Recommendations");
        updateElement("downloadPdfBtn", t.download_pdf || "PDF");
        updateElement("shareBtn", t.share || "Share");
    }

    // --- 5. إدارة الثيم (فاتح / داكن) ---
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
        const toggle = document.querySelector(".theme-toggle i");
        if (toggle) toggle.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
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
        });
        try { window.adsbygoogle?.push({}); } catch (e) { console.warn("إعلانات فشلت", e); }
    }

    // --- 7. منطق الاختبار ---
    function startTest() {
        const age = sanitizeInput(document.getElementById("ageInput").value);
        if (!age || isNaN(age) || age < 10 || age > 100) {
            return showNotification(translations[currentLang]?.ui?.age_error || "أدخل عمراً صحيحاً (10-100)", "error");
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
        const scores = {};
        answers.forEach((val, i) => {
            const q = questions[i];
            const cat = q.category;
            scores[cat] = (scores[cat] || 0) + val;
        });
        for (const cat in scores) scores[cat] = scores[cat] / questions.filter(q => q.category === cat).length;
        window.categoryAverages = scores;
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
        const scores = window.categoryAverages;
        const topCat = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const t = translations[currentLang]?.results || {};
        const color = topCat === "vision" ? "#e74c3c" : topCat === "analysis" ? "#3498db" : "#9b59b6";
        const personality = t[`${topCat}_personality`] || "Personality";
        const desc = t[`${topCat}_description`] || "وصف";

        document.getElementById("personalityTypeContent").innerHTML = `
            <h2 style="color:${color}">${personality}</h2>
            <p>${desc}</p>
        `;

        // رسم بياني
        const ctx = document.getElementById("resultChart").getContext("2d");
        if (myChart) myChart.destroy();
        myChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: Object.keys(scores).map(k => t.domains[k] || k),
                datasets: [{ label: t.domain_scores || "النتائج", data: Object.values(scores), backgroundColor: "rgba(52,152,219,0.2)", borderColor: "#3498db" }]
            },
            options: { scales: { r: { suggestedMin: 1, suggestedMax: 5 } } }
        });
    }

    function displaySummary() {
        const t = translations[currentLang]?.results || {};
        let html = `<h2>${t.summary_intro || "ملخص"}</h2>`;
        for (const [k, v] of Object.entries(window.categoryAverages)) {
            html += `<p>${t.domains[k] || k}: ${v.toFixed(2)}/5</p>`;
        }
        document.getElementById("summaryContent").innerHTML = html;
    }

    function displayTheories() {
        const t = translations[currentLang]?.results || {};
        let html = `<h2>${t.theories_intro || "نظريات"}</h2>`;
        html += Object.keys(window.categoryAverages).map(cat => {
            const theory = analysisData?.[cat]?.MBTI;
            if (!theory) return "";
            const score = window.categoryAverages[cat];
            const interp = score > 3 ? theory.high_score_interpretation : theory.low_score_interpretation;
            return `<div class="theory-card"><h4>${theory.name}</h4><p>${interp}</p></div>`;
        }).join("");
        document.getElementById("theoriesContent").innerHTML = html;
    }

    function displayDetailed() {
        const t = translations[currentLang]?.results || {};
        let html = `<h2>${t.full_intro || "تحليل مفصل"}</h2>`;
        for (const [k, v] of Object.entries(window.categoryAverages)) {
            html += `<div class="result-card" style="border-left: 4px solid ${v > 3 ? "#2ecc71" : "#e74c3c"}"><p>${t.traits[k] || k}: ${v.toFixed(2)}/5</p></div>`;
        }
        document.getElementById("detailedAnalysisContent").innerHTML = html;
    }

    function displayRecommendations() {
        const t = translations[currentLang]?.results || {};
        const tips = Object.keys(window.categoryAverages).flatMap(cat => {
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

    function logout() {
        localStorage.removeItem("session");
        location.reload();
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
        const { default: data } = await import("./analysis_data.js");
        analysisData = data;
    } catch (e) {
        console.error("فشل تحميل analysis_data.js", e);
    }

    // تأخير تحميل شاشة التحميل
    setTimeout(() => {
        const screen = document.getElementById('loadingScreen');
        if (screen) {
            screen.style.opacity = '0';
            setTimeout(() => screen.style.display = 'none', 500);
        }
    }, 1500);

    logEvent("App initialized", { deviceId, lang: currentLang });
});
