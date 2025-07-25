// حالة التطبيق
const appState = {
    currentLanguage: 'ar',
    currentSection: 'home',
    currentQuestion: 0,
    userAnswers: {},
    userDemographics: {},
    testStarted: false,
    testCompleted: false,
    results: {}
};

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initNavigation();
    initTest();
    initResults();
    initAdSettings();
    loadTheories();
});

// إدارة اللغة
function initLanguage() {
    // تحميل اللغة المحددة
    const savedLang = localStorage.getItem('secretsRoomLang') || 'ar';
    setLanguage(savedLang);
    
    // زر تبديل اللغة
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
}

function setLanguage(lang) {
    appState.currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث واجهة المستخدم حسب اللغة
    updateLanguageUI();
    localStorage.setItem('secretsRoomLang', lang);
}

function toggleLanguage() {
    const newLang = appState.currentLanguage === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
}

function updateLanguageUI() {
    // تحديث نص زر اللغة
    document.getElementById('languageToggle').textContent = 
        appState.currentLanguage === 'ar' ? 'English' : 'العربية';
    
    // تحديث النصوص الأخرى حسب اللغة
    // (سيتم تنفيذ هذا عبر نظام الترجمة الكامل)
}

// إدارة التنقل بين الأقسام
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // زر القائمة المتنقلة
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

function showSection(sectionId) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // إزالة التنشيط من جميع روابط التنقل
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // عرض القسم المطلوب
    document.getElementById(sectionId).classList.add('active');
    
    // تنشيط رابط التنقل المقابل
    document.querySelector(.nav-link[data-section="${sectionId}"]).classList.add('active');
    
    // إغلاق القائمة المتنقلة إذا كانت مفتوحة
    document.querySelector('.main-nav').classList.remove('active');
    
    // تحديث حالة التطبيق
    appState.currentSection = sectionId;
}

// إدارة الاختبار
function initTest() {
    // بدء الاختبار
    document.getElementById('startTestBtn').addEventListener('click', startTest);
    
    // تقديم البيانات الديموغرافية
    document.getElementById('submitDemographics').addEventListener('click', submitDemographics);
    
    // التنقل بين الأسئلة
    document.getElementById('prevQuestion').addEventListener('click', prevQuestion);
    document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
}

function startTest() {
    appState.testStarted = true;
    showSection('demographics');
}

function submitDemographics() {
    // جمع البيانات الديموغرافية
    appState.userDemographics = {
        name: document.getElementById('userName').value,
        age: document.getElementById('userAge').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        education: document.getElementById('userEducation').value
    };
    
    // التحقق من صحة البيانات
    if (!validateDemographics()) return;
    
    // بدء الاختبار الفعلي
    showSection('test');
    loadQuestion(0);
}
function validateDemographics() {
    let isValid = true;
    
    // التحقق من العمر
    const age = parseInt(appState.userDemographics.age);
    if (isNaN(age)  age < 12  age > 100) {
        document.querySelector('#userAge + .validation-message').style.display = 'block';
        isValid = false;
    } else {
        document.querySelector('#userAge + .validation-message').style.display = 'none';
    }
    
    // التحقق من الجنس
    if (!appState.userDemographics.gender) {
        alert(appState.currentLanguage === 'ar' ? 'الرجاء تحديد الجنس' : 'Please select your gender');
        isValid = false;
    }
    
    // التحقق من المستوى التعليمي
    if (!appState.userDemographics.education) {
        alert(appState.currentLanguage === 'ar' ? 'الرجاء تحديد المستوى التعليمي' : 'Please select your education level');
        isValid = false;
    }
    
    return isValid;
}

function loadQuestion(questionIndex) {
    const question = testQuestions[questionIndex];
    
    // تحديث شريط التقدم
    updateProgressBar((questionIndex + 1) / testQuestions.length * 100);
    document.querySelector('.progress-text').textContent = 
        appState.currentLanguage === 'ar' ? 
        السؤال ${questionIndex + 1} من ${testQuestions.length} :
        Question ${questionIndex + 1} of ${testQuestions.length};
    
    // تحديث النظرية الحالية
    const theory = psychologicalTheories[question.theory];
    document.getElementById('currentTheory').textContent = 
        appState.currentLanguage === 'ar' ? theory.name.ar : theory.name.en;
    
    // عرض السؤال
    const questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = `
        <h3 class
