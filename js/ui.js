// ===== عرض النتائج =====
function renderResult() {
    try {
        const { scores, primary } = analyzePersonality();
        const t = translations[state.lang];
        const types = {
            ar: { D: "القائد المهيمن (الأحمر)", I: "الشخصية المؤثرة (الأصفر)", S: "الشخصية المستقرة (الأخضر)", C: "الشخصية الواعية (الأزرق)" },
            en: { D: "The Dominant Leader (Red)", I: "The Influencer (Yellow)", S: "The Steady Supporter (Green)", C: "The Conscientious Thinker (Blue)" }
        };
        
        // حساب العمر من تاريخ الميلاد
        const age = calculateAge(state.userData.dob);
        
        // حساب البرج تلقائياً
        const userZodiac = calculateZodiac(state.userData.dob);
        const zodiacInfo = zodiacData[state.lang][userZodiac];
        const compatibleZodiacs = zodiacCompatibility[state.lang][userZodiac] || [];
        
        // الحصول على تحليل الشخصية المفصل
        const analysis = personalityAnalysis[state.lang][primary];
        
        // الحصول على معلومات الشريك المثالي
        const partnerInfo = getPartnerInfo(primary, state.lang);
        
        // الحصول على الشخصيات المشابهة
        const similarPersonalities = getSimilarPersonalities(primary, state.lang);
        
        // إضافة لون الشخصية
        const personalityColors = {
            D: '#ef4444', // أحمر
            I: '#f59e0b', // أصفر
            S: '#10b981', // أخضر
            C: '#3b82f6'  // أزرق
        };
        
        // حفظ النتائج
        const resultData = { 
            scores, 
            primary, 
            date: new Date().toISOString(),
            age: age,
            zodiac: userZodiac,
            partnerType: partnerInfo.type,
            personalityColor: personalityColors[primary],
            similarPersonality: similarPersonalities[0]
        };
        state.resultData = resultData;
        saveResult(resultData);
        
        // تحديث العدادات
        updateCounters();
        
        // إنشاء قائمة الأبراج المتوافقة
        const compatibleZodiacsHTML = compatibleZodiacs.map(z => {
            const zData = zodiacData[state.lang][z];
            return `
            <div class="flex items-center mb-2">
                <span class="zodiac-icon mr-3">${zData.icon}</span>
                <div>
                    <div class="font-bold">${zData.name}</div>
                    <div class="text-sm text-gray-400">${zData.dates} • ${zData.element}</div>
                </div>
            </div>`;
        }).join('');
        
        // بناء أقسام التحليل المفصل
        const analysisSections = `
        <!-- نظرة عامة -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.overview}</h3>
            <p class="text-gray-300">${analysis.overview}</p>
        </div>
        
        <!-- السمات الأساسية -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.core_traits}</h3>
            <p class="text-gray-300">${analysis.core_traits}</p>
        </div>
        
        <!-- الملف النفسي -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.psychological_profile}</h3>
            <p class="text-gray-300">${analysis.psychological_profile}</p>
        </div>
        
        <!-- السلوك في العمل -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.work_behavior}</h3>
            <p class="text-gray-300">${analysis.work_behavior}</p>
        </div>
        
        <!-- السلوك في العلاقات -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.relationship_behavior}</h3>
            <p class="text-gray-300">${analysis.relationship_behavior}</p>
        </div>
        
        <!-- التحديات -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.challenges}</h3>
            <p class="text-gray-300">${analysis.challenges}</p>
        </div>
        
        <!-- نصائح للتنمية -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.development_tips}</h3>
            <p class="text-gray-300">${analysis.development_tips}</p>
        </div>
        
        <!-- إدارة الضغط -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.stress_management}</h3>
            <p class="text-gray-300">${analysis.stress_management}</p>
        </div>
        
        <!-- أسلوب التعلم -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.learning_style}</h3>
            <p class="text-gray-300">${analysis.learning_style}</p>
        </div>
        
        <!-- القيم والمبادئ -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.values_principles}</h3>
            <p class="text-gray-300">${analysis.values_principles}</p>
        </div>
        
        <!-- أنماط التواصل -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.communication_patterns}</h3>
            <p class="text-gray-300">${analysis.communication_patterns}</p>
        </div>
        
        <!-- اتخاذ القرار -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.decision_making}</h3>
            <p class="text-gray-300">${analysis.decision_making}</p>
        </div>
        
        <!-- أسلوب القيادة -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.leadership_style}</h3>
            <p class="text-gray-300">${analysis.leadership_style}</p>
        </div>
        
        <!-- حل النزاعات -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.conflict_resolution}</h3>
            <p class="text-gray-300">${analysis.conflict_resolution}</p>
        </div>
        
        <!-- عوامل التحفيز -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.motivation_factors}</h3>
            <p class="text-gray-300">${analysis.motivation_factors}</p>
        </div>
        
        <!-- البيئة المثالية -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.ideal_environment}</h3>
            <p class="text-gray-300">${analysis.ideal_environment}</p>
        </div>
        
        <!-- مجالات النمو -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.growth_areas}</h3>
            <p class="text-gray-300">${analysis.growth_areas}</p>
        </div>
        
        <!-- توازن الحياة -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.life_balance}</h3>
            <p class="text-gray-300">${analysis.life_balance}</p>
        </div>
        
        <!-- المسارات المهنية -->
        <div class="analysis-section section-${primary.toLowerCase()}">
            <h3 class="text-xl font-bold mb-3">${t.career_paths}</h3>
            <p class="text-gray-300">${analysis.career_paths}</p>
        </div>`;
        
        const result = `
        <div class="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 gradient-text">${t.personality_section}</h2>
            <p class="text-gray-300 mb-6">${t.analysis_intro}</p>
            
            <!-- معلومات المستخدم -->
            <div class="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg mb-8">
                <div class="flex flex-wrap justify-between items-center mb-4">
                    <h3 class="text-2xl font-bold">${types[state.lang][primary]}</h3>
                    <div class="flex flex-wrap gap-4 text-lg">
                        <div>
                            <span class="text-gray-300">${t.age_label}:</span> 
                            <span class="font-bold">${age}</span>
                        </div>
                        <div>
                            <span class="text-gray-300">${t.zodiac_sign}:</span> 
                            <span class="font-bold">${zodiacInfo.icon} ${zodiacInfo.name}</span>
                        </div>
                        <div>
                            <span class="text-gray-300">${t.personality_color}:</span> 
                            <span class="font-bold" style="color: ${personalityColors[primary]}">${t.colors[primary]}</span>
                            <span class="personality-color" style="background-color: ${personalityColors[primary]}"></span>
                        </div>
                    </div>
                </div>
                <div class="text-sm text-gray-400">
                    ${zodiacInfo.dates} • ${zodiacInfo.element} • ${zodiacInfo.traits}
                </div>
            </div>
            
            <!-- الشريك المثالي -->
            <div class="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-lg mb-8">
                <h3 class="text-2xl font-bold mb-6">${t.ideal_partner}</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="text-lg font-bold mb-3">${t.partner_type}</h4>
                        <p class="text-gray-300 mb-4">${partnerInfo.type}</p>
                        
                        <h4 class="text-lg font-bold mb-3">${t.partner_traits}</h4>
                        <p class="text-gray-300 mb-4">${partnerInfo.traits}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold mb-3">${t.relationship_needs}</h4>
                        <p class="text-gray-300 mb-4">${analysis.relationship_needs}</p>
                        
                        <h4 class="text-lg font-bold mb-3">${t.compatible_zodiacs}</h4>
                        <div class="mb-4">
                            ${compatibleZodiacsHTML}
                        </div>
                    </div>
                </div>
                
                <div class="mt-6">
                    <div class="flex justify-between mb-2">
                        <span>${t.compatibility_title}</span>
                        <span class="font-bold">85%</span>
                    </div>
                    <div class="compatibility-meter">
                        <div class="compatibility-fill" style="width: 85%"></div>
                    </div>
                </div>
            </div>
            
            <!-- الشخصيات المشابهة -->
            <div class="bg-gradient-to-r from-indigo-900 to-purple-900 p-6 rounded-lg mb-8">
                <h3 class="text-2xl font-bold mb-6">${t.similar_personalities}</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${similarPersonalities.map(person => `
                    <div class="similar-personality">
                        <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mx-auto mb-2">
                        <h4 class="font-bold">${person.name}</h4>
                        <p class="text-sm text-gray-400">${person.description}</p>
                    </div>`).join('')}
                </div>
            </div>
            
            <!-- الرسم البياني -->
            <div class="chart-container mb-8">
                <canvas id="personalityChart"></canvas>
            </div>
            
            <!-- تحليل الشخصية المفصل -->
            <div class="mb-8">
                ${analysisSections}
            </div>
            
            <!-- قسم التقييم والتعليقات -->
            <div class="feedback-section">
                <h3 class="text-xl font-bold mb-4">${t.rate_analysis}</h3>
                <div class="feedback-stars" id="analysisRating">
                    <i class="fas fa-star" data-rating="1"></i>
                    <i class="fas fa-star" data-rating="2"></i>
                    <i class="fas fa-star" data-rating="3"></i>
                    <i class="fas fa-star" data-rating="4"></i>
                    <i class="fas fa-star" data-rating="5"></i>
                </div>
                <textarea id="analysisComment" class="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 mb-4" rows="3" placeholder="${t.write_comment}"></textarea>
                <button id="submitAnalysisFeedback" class="btn-primary">${t.submit_feedback}</button>
                
                <!-- عرض التعليقات المشتركة -->
                <div class="shared-feedback">
                    <h4 class="text-lg font-bold mb-4">${t.shared_feedback}</h4>
                    <div id="sharedAnalysisFeedback"></div>
                </div>
            </div>
            
            <div class="mt-8 text-center">
                <button id="restartBtn" class="btn-secondary mr-4">${t.restart_btn}</button>
                <button id="copyBtn" class="btn-primary mr-4">${t.copy_btn}</button>
                <button id="shareBtn" class="btn-primary mr-4">${t.share_btn}</button>
                <button id="printBtn" class="btn-secondary mr-4">${t.print_btn}</button>
                <button id="historyBtn" class="btn-secondary">${t.history_btn}</button>
            </div>
        </div>`;
        
        state.resultText = result;
        return result;
    } catch (error) {
        console.error('Error rendering result:', error);
        return '<div class="glass-card"><h2>حدث خطأ في عرض النتائج</h2></div>';
    }
}

// ===== عرض سجل النتائج =====
function renderHistory() {
    try {
        const t = translations[state.lang];
        const results = getSavedResults();
        
        if (results.length === 0) {
            return `
            <div class="glass-card rounded-xl p-8 max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">${t.history_title}</h2>
                <p class="text-gray-300">${t.no_history}</p>
                <button id="backBtn" class="btn-primary mt-6">العودة</button>
            </div>`;
        }
        
        let historyHTML = '';
        results.forEach((result, index) => {
            const date = new Date(result.date).toLocaleDateString(state.lang === 'ar' ? 'ar-SA' : 'en-US');
            const age = result.userData.dob ? calculateAge(result.userData.dob) : 'غير محدد';
            const zodiac = result.userData.dob ? calculateZodiac(result.userData.dob) : null;
            const zodiacInfo = zodiac ? zodiacData[state.lang][zodiac] : null;
            const types = {
                ar: { D: "القائد المهيمن", I: "الشخصية المؤثرة", S: "الشخصية المستقرة", C: "الشخصية الواعية" },
                en: { D: "Dominant Leader", I: "Influencer", S: "Steady Supporter", C: "Conscientious Thinker" }
            };
            
            historyHTML += `
            <div class="history-item" data-index="${index}">
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-xl font-bold">${types[state.lang][result.primary]}</h3>
                        <p class="text-gray-400">${date} • ${t.age_label}: ${age} ${zodiacInfo ? `• ${zodiacInfo.icon} ${zodiacInfo.name}` : ''}</p>
                    </div>
                    <i class="fas fa-chevron-left"></i>
                </div>
            </div>`;
        });
        
        return `
        <div class="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">${t.history_title}</h2>
            <div class="space-y-4">
                ${historyHTML}
            </div>
            <button id="backBtn" class="btn-secondary mt-6">العودة</button>
        </div>`;
    } catch (error) {
        console.error('Error rendering history:', error);
        return '<div class="glass-card"><h2>حدث خطأ في عرض السجل</h2></div>';
    }
}

// ===== عرض تفاصيل نتيجة من السجل =====
function renderHistoryResult(index) {
    try {
        const t = translations[state.lang];
        const results = getSavedResults();
        const result = results[index];
        
        if (!result) return renderHistory();
        
        const types = {
            ar: { D: "القائد المهيمن (الأحمر)", I: "الشخصية المؤثرة (الأصفر)", S: "الشخصية المستقرة (الأخضر)", C: "الشخصية الواعية (الأزرق)" },
            en: { D: "The Dominant Leader (Red)", I: "The Influencer (Yellow)", S: "The Steady Supporter (Green)", C: "The Conscientious Thinker (Blue)" }
        };
        
        const date = new Date(result.date).toLocaleDateString(state.lang === 'ar' ? 'ar-SA' : 'en-US');
        const age = result.userData.dob ? calculateAge(result.userData.dob) : 'غير محدد';
        const userZodiac = result.userData.dob ? calculateZodiac(result.userData.dob) : null;
        const zodiacInfo = userZodiac ? zodiacData[state.lang][userZodiac] : null;
        
        return `
        <div class="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 gradient-text">${t.personality_section}</h2>
            <p class="text-gray-300 mb-2">${t.analysis_intro}</p>
            <p class="text-gray-400 mb-6">${date} • ${t.age_label}: ${age} ${zodiacInfo ? `• ${zodiacInfo.icon} ${zodiacInfo.name}` : ''}</p>
            
            <div class="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg mb-8">
                <h3 class="text-2xl font-bold mb-2">${types[state.lang][result.primary]}</h3>
            </div>
            
            <div class="chart-container mb-8">
                <canvas id="personalityChart"></canvas>
            </div>
            
            <div class="mt-8 text-center">
                <button id="backBtn" class="btn-secondary mr-4">العودة</button>
                <button id="printBtn" class="btn-secondary">${t.print_btn}</button>
            </div>
        </div>`;
    } catch (error) {
        console.error('Error rendering history result:', error);
        return '<div class="glass-card"><h2>حدث خطأ في عرض النتيجة</h2></div>';
    }
}

// ===== وظائف العرض =====
function renderUserInfo() {
    try {
        const t = translations[state.lang];
        const counters = getCounters();
        const avgSiteRating = getAverageRating('site');
        
        return `
        <div class="text-center">
            <!-- إحصائيات الموقع -->
            <div class="grid grid-cols-3 gap-4 mb-8">
                <div class="stats-card">
                    <div class="stats-number gradient-text">${counters.visitors}</div>
                    <div class="stats-label">${t.visitors_count}</div>
                </div>
                <div class="stats-card">
                    <div class="stats-number gradient-text">${counters.analyses}</div>
                    <div class="stats-label">${t.analyses_count}</div>
                </div>
                <div class="stats-card">
                    <div class="stats-number gradient-text">${avgSiteRating}</div>
                    <div class="stats-label">${t.average_rating}</div>
                </div>
            </div>
            
            <div class="glass-card rounded-xl p-8 max-w-3xl mx-auto">
                <h1 class="text-4xl font-bold gradient-text mb-4">${t.welcome_title}</h1>
                <p class="text-gray-300 text-lg mb-6">${t.user_info_desc}</p>
                <div class="space-y-6 text-right">
                    <div><label class="block mb-2">${t.gender_label}</label><select id="gender" class="w-full p-3 rounded-lg bg-gray-800 border border-gray-600"><option value="male">${t.male}</option><option value="female">${t.female}</option><option value="other">${t.other}</option></select></div>
                    <div><label class="block mb-2">${t.dob_label}</label><input type="date" id="dob" class="w-full p-3 rounded-lg bg-gray-800 border border-gray-600" /></div>
                    <button id="submitUserInfo" class="btn-primary">${t.submit_user_info}</button>
                </div>
            </div>
            
            <!-- قسم التقييم والتعليقات -->
            <div class="feedback-section glass-card rounded-xl p-6 max-w-3xl mx-auto mt-8">
                <h3 class="text-xl font-bold mb-4">${t.rate_site}</h3>
                <div class="feedback-stars" id="siteRating">
                    <i class="fas fa-star" data-rating="1"></i>
                    <i class="fas fa-star" data-rating="2"></i>
                    <i class="fas fa-star" data-rating="3"></i>
                    <i class="fas fa-star" data-rating="4"></i>
                    <i class="fas fa-star" data-rating="5"></i>
                </div>
                <textarea id="siteComment" class="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 mb-4" rows="3" placeholder="${t.write_comment}"></textarea>
                <button id="submitFeedback" class="btn-primary">${t.submit_feedback}</button>
                
                <!-- عرض التعليقات المشتركة -->
                <div class="shared-feedback">
                    <h4 class="text-lg font-bold mb-4">${t.shared_feedback}</h4>
                    <div id="sharedSiteFeedback"></div>
                </div>
            </div>
        </div>`;
    } catch (error) {
        console.error('Error rendering user info:', error);
        return '<div class="glass-card"><h2>حدث خطأ في عرض الصفحة</h2></div>';
    }
}

function renderIntro() {
    try {
        const t = translations[state.lang];
        return `
        <div class="text-center">
            <div class="glass-card rounded-xl p-8 max-w-3xl mx-auto">
                <h1 class="text-4xl font-bold gradient-text mb-4">${t.intro_title}</h1>
                <p class="text-xl text-gray-300 mb-6">${t.intro_subtitle}</p>
                <p class="text-gray-400 mb-4">${t.intro_desc}</p>
                <div class="text-right text-gray-300 space-y-2 mb-6">
                    <p>• ${t.intro_p1}</p>
                    <p>• ${t.intro_p2}</p>
                </div>
                <button id="startBtn" class="btn-primary">${t.start_btn}</button>
            </div>
        </div>`;
    } catch (error) {
        console.error('Error rendering intro:', error);
        return '<div class="glass-card"><h2>حدث خطأ في عرض الصفحة</h2></div>';
    }
}

function renderQuiz() {
    try {
        const q = questions[state.lang][state.currentQ];
        const t = translations[state.lang];
        const progress = ((state.currentQ + 1) / questions[state.lang].length * 100).toFixed(0);
        let optionsHTML = '';
        q.options.forEach((opt, idx) => {
            const selected = state.userAnswers[state.currentQ] === idx ? 'selected' : '';
            optionsHTML += `<div class="option-btn ${selected}" data-index="${idx}">${opt.text}</div>`;
        });
        return `
        <div>
            <div class="progress-container">
                <div class="flex justify-between"><span>${t.progress} ${state.currentQ + 1}/${questions[state.lang].length}</span></div>
                <div class="w-full"><div class="progress-bar" style="width:${progress}%"></div></div>
            </div>
            <div class="glass-card rounded-xl p-8 max-w-3xl mx-auto">
                <h2 class="text-2xl font-bold mb-6">${q.text}</h2>
                <div class="space-y-4">${optionsHTML}</div>
                <button id="nextBtn" class="btn-primary mt-8">
                    ${state.currentQ === questions[state.lang].length - 1 ? t.final_results_btn : t.next_btn}
                </button>
            </div>
        </div>`;
    } catch (error) {
        console.error('Error rendering quiz:', error);
        return '<div class="glass-card"><h2>حدث خطأ في عرض الاختبار</h2></div>';
    }
}

function renderLoading() {
    try {
        const t = translations[state.lang];
        return `
        <div class="text-center py-12">
            <div class="loading-spinner mx-auto mb-4"></div>
            <p class="text-gray-300">${t.loading_analysis}</p>
        </div>`;
    } catch (error) {
        console.error('Error rendering loading:', error);
        return '<div class="glass-card"><h2>جاري التحميل...</h2></div>';
    }
}

// ===== العرض الرئيسي =====
function render() {
    try {
        document.documentElement.lang = state.lang;
        document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
        const t = translations[state.lang];
        const { top: adTop, side: adSide, bottom: adBottom } = renderAds();
        
        // تحديث نص زر اللغة
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.innerHTML = `<i class="fas fa-language ml-2"></i>${t.lang_btn}`;
        }
        
        let content = '';
        switch (state.page) {
            case 'userInfo': content = renderUserInfo(); break;
            case 'intro': content = renderIntro(); break;
            case 'quiz': content = renderQuiz(); break;
            case 'loading': content = renderLoading(); break;
            case 'result': content = renderResult(); break;
            case 'history': content = renderHistory(); break;
            case 'historyResult': content = renderHistoryResult(state.historyIndex); break;
        }
        
        const html = `
            ${adTop}
            <div class="container mx-auto px-4 py-8 max-w-4xl">
                ${content}
            </div>
            ${adBottom}
            <footer class="footer">
                <p class="font-semibold">${t.footer1}</p>
                <p>${t.footer2}</p>
            </footer>`;
        
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = html;
        }
        
        // إنشاء الرسم البياني بعد عرض النتائج
        if (state.page === 'result' && state.resultData) {
            setTimeout(() => createPersonalityChart(state.resultData.scores), 100);
        } else if (state.page === 'historyResult' && state.historyIndex !== undefined) {
            const results = getSavedResults();
            if (results && results[state.historyIndex]) {
                setTimeout(() => createPersonalityChart(results[state.historyIndex].scores), 100);
            }
        }
        
        // عرض التعليقات المشتركة بعد العرض
        if (state.page === 'userInfo') {
            setTimeout(() => {
                renderSharedFeedback('sharedSiteFeedback', 'site');
            }, 100);
        } else if (state.page === 'result') {
            setTimeout(() => {
                renderSharedFeedback('sharedAnalysisFeedback', 'analysis');
            }, 100);
        }
    } catch (error) {
        console.error('Error rendering page:', error);
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = '<div class="glass-card"><h2>حدث خطأ في تحميل الصفحة</h2></div>';
        }
    }
}
