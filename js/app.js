// ===== معالجة الأحداث =====
function setupEventListeners() {
    try {
        const app = document.getElementById('app');
        
        app.addEventListener('click', (e) => {
            const t = translations[state.lang];
            
            // معالج صفحة معلومات المستخدم
            if (e.target.id === 'submitUserInfo') {
                const gender = document.getElementById('gender') ? document.getElementById('gender').value : '';
                const dob = document.getElementById('dob') ? document.getElementById('dob').value : '';
                if (!gender || !dob) return showToast(t.alert_missing_fields);
                if (new Date(dob) > new Date()) return showToast(t.alert_invalid_dob);
                
                // حساب البرج تلقائياً
                const zodiac = calculateZodiac(dob);
                state.userData = { gender, dob, zodiac };
                state.page = 'intro';
                render();
            }
            
            // معالج صفحة المقدمة
            if (e.target.id === 'startBtn') {
                state.currentQ = 0;
                state.userAnswers = Array(questions[state.lang].length).fill(null);
                state.page = 'quiz';
                render();
            }
            
            // معالج اختيار الإجابة
            if (e.target.classList.contains('option-btn')) {
                const index = parseInt(e.target.dataset.index);
                state.userAnswers[state.currentQ] = index;
                document.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
                e.target.classList.add('selected');
            }
            
            // معالج الزر التالي
            if (e.target.id === 'nextBtn') {
                if (state.userAnswers[state.currentQ] === null) return showToast(t.alert_no_answer);
                if (state.currentQ < questions[state.lang].length - 1) {
                    state.currentQ++;
                    render();
                } else {
                    state.page = 'loading';
                    render();
                    setTimeout(() => {
                        state.page = 'result';
                        render();
                    }, 1500);
                }
            }
            
            // معالج زر إعادة البدء
            if (e.target.id === 'restartBtn') {
                state.page = 'userInfo';
                state.userData = { gender: '', dob: '' };
                state.currentQ = 0;
                state.userAnswers = [];
                render();
            }
            
            // معالج زر النسخ
            if (e.target.id === 'copyBtn') {
                const resultText = document.querySelector('.glass-card') ? document.querySelector('.glass-card').innerText : '';
                navigator.clipboard.writeText(resultText).then(() => {
                    showToast(t.alert_copied);
                });
            }
            
            // معالج زر المشاركة
            if (e.target.id === 'shareBtn') {
                const { primary } = analyzePersonality();
                const types = {
                    ar: { D: "القائد المهيمن", I: "الشخصية المؤثرة", S: "الشخصية المستقرة", C: "الشخصية الواعية" },
                    en: { D: "Dominant Leader", I: "Influencer", S: "Steady Supporter", C: "Conscientious Thinker" }
                };
                
                const shareText = `لقد اكتشفت شخصيتي في غرفة الأسرار! شخصيتي هي: ${types[state.lang][primary] || 'Unknown'}`;
                
                if (navigator.share) {
                    navigator.share({
                        title: 'غرفة الأسرار - اكتشاف الشخصية',
                        text: shareText,
                        url: window.location.href
                    }).then(() => {
                        showToast(t.alert_shared);
                    });
                } else {
                    navigator.clipboard.writeText(`${shareText}\n${window.location.href}`).then(() => {
                        showToast(t.alert_copied);
                    });
                }
            }
            
            // معالج زر الطباعة
            if (e.target.id === 'printBtn') {
                window.print();
            }
            
            // معالج زر السجل
            if (e.target.id === 'historyBtn') {
                state.page = 'history';
                render();
            }
            
            // معالج زر العودة
            if (e.target.id === 'backBtn') {
                if (state.page === 'historyResult') {
                    state.page = 'history';
                } else {
                    state.page = 'result';
                }
                render();
            }
            
            // معالج عناصر السجل
            if (e.target.closest('.history-item')) {
                const index = parseInt(e.target.closest('.history-item').dataset.index);
                state.historyIndex = index;
                state.page = 'historyResult';
                render();
            }
            
            // معالج تقييم النجوم
            if (e.target.classList.contains('fa-star')) {
                const rating = parseInt(e.target.dataset.rating);
                const container = e.target.parentElement;
                
                // تحديث النجوم
                container.querySelectorAll('.fa-star').forEach((star, index) => {
                    if (index < rating) {
                        star.classList.add('active');
                    } else {
                        star.classList.remove('active');
                    }
                });
            }
            
            // معالج إرسال تقييم الموقع
            if (e.target.id === 'submitFeedback') {
                const rating = document.querySelectorAll('#siteRating .fa-star.active').length;
                const comment = document.getElementById('siteComment') ? document.getElementById('siteComment').value : '';
                
                if (rating === 0) {
                    showToast('يرجى اختيار تقييم');
                    return;
                }
                
                saveFeedback('site', rating, comment);
                showToast('شكراً لتقييمك! سيظهر للجميع قريباً');
                
                // إعادة تعيين الحقول
                document.querySelectorAll('#siteRating .fa-star').forEach(star => {
                    star.classList.remove('active');
                });
                if (document.getElementById('siteComment')) {
                    document.getElementById('siteComment').value = '';
                }
                
                // تحديث عرض التعليقات
                setTimeout(() => {
                    renderSharedFeedback('sharedSiteFeedback', 'site');
                }, 100);
            }
            
            // معالج إرسال تقييم التحليل
            if (e.target.id === 'submitAnalysisFeedback') {
                const rating = document.querySelectorAll('#analysisRating .fa-star.active').length;
                const comment = document.getElementById('analysisComment') ? document.getElementById('analysisComment').value : '';
                
                if (rating === 0) {
                    showToast('يرجى اختيار تقييم');
                    return;
                }
                
                saveFeedback('analysis', rating, comment);
                showToast('شكراً لتقييمك! سيظهر للجميع قريباً');
                
                // إعادة تعيين الحقول
                document.querySelectorAll('#analysisRating .fa-star').forEach(star => {
                    star.classList.remove('active');
                });
                if (document.getElementById('analysisComment')) {
                    document.getElementById('analysisComment').value = '';
                }
                
                // تحديث عرض التعليقات
                setTimeout(() => {
                    renderSharedFeedback('sharedAnalysisFeedback', 'analysis');
                }, 100);
            }
            
            // معالج زر تسجيل الدخول (الحل النهائي)
            if (e.target.id === 'loginBtn') {
                e.preventDefault(); // منع السلوك الافتراضي
                
                const pass = document.getElementById('adminPassword');
                if (!pass || !pass.value) {
                    showToast('يرجى إدخال كلمة المرور');
                    return;
                }
                
                // حساب التجزئة
                const hashedPass = simpleHash(pass.value);
                const correctHash = "2097122383"; // التجزئة الصحيحة لكلمة "Farida"
                
                // التحقق من كلمة المرور
                if (hashedPass === correctHash || pass.value === "Farida") {
                    // إخفاء قسم كلمة المرور
                    const passwordSection = document.getElementById('passwordSection');
                    const adminPanel = document.getElementById('adminPanel');
                    
                    if (passwordSection) passwordSection.style.display = 'none';
                    if (adminPanel) {
                        adminPanel.style.display = 'block';
                        loadAdSettings();
                    }
                    
                    showToast('تم تسجيل الدخول بنجاح');
                } else {
                    showToast('كلمة المرور خاطئة، يرجى المحاولة مرة أخرى');
                }
            }
        });
    } catch (error) {
        console.error('Error setting up event listeners:', error);
    }
}

// ===== التهيئة =====
document.addEventListener('DOMContentLoaded', () => {
    try {
        // إعداد مستمعي الأحداث
        setupEventListeners();
        
        // إعداد مستمعي الأحداث للأزرار الثابتة
        setupSettingsEventListeners();
        
        // تحديث العدادات عند تحميل الصفحة
        updateCounters();
        
        // العرض الأولي
        render();
    } catch (error) {
        console.error('Error during DOMContentLoaded:', error);
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = '<div class="glass-card"><h2>حدث خطأ في تحميل الموقع</h2><p>يرجى تحديث الصفحة والمحاولة مرة أخرى</p></div>';
        }
    }
});
