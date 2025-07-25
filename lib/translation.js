const translations = {
    en: {
        home_title: "Discover Your Personality Depths",
        start_test: "Start Test Now",
        question: "Question",
        of: "of",
        next: "Next",
        previous: "Previous",
        // +500 ترجمة أخرى...
    },
    ar: {
        home_title: "اكتشف أعماق شخصيتك",
        start_test: "ابدأ الاختبار الآن",
        question: "السؤال",
        of: "من",
        next: "التالي",
        previous: "السابق",
        // +500 ترجمة أخرى...
    }
};

function translate(key) {
    return translations[appState.currentLanguage][key] || key;
}

function loadTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translate(key);
    });
}

export { translate, loadTranslations };
