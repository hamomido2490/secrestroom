// نظام الاختبار النفسي المتكامل
document.addEventListener('DOMContentLoaded', function() {
    console.log('نظام التحليل النفسي المتكامل جاهز للبدء');
});

// قاعدة البيانات الكاملة للاختبار
const comprehensiveQuiz = {
    // الأسئلة المتكاملة
    questions: [
        // أسئلة فرويد - اللاوعي والرغبات المكبوتة
        {
            id: 1,
            category: "freud",
            question: "في أحلامك، ما هو الشيء الأكثر تكرارًا الذي تراه؟",
            options: [
                {text: "الماء أو البحار", points: {freud: 5, jung: 3, adler: 1}},
                {text: "الأشخاص المهمين في حياتك", points: {freud: 3, jung: 5, adler: 4}},
                {text: "الأماكن المظلمة أو المجهولة", points: {freud: 4, jung: 4, adler: 2}},
                {text: "الأشياء المفقودة", points: {freud: 5, jung: 2, adler: 3}}
            ]
        },
        {
            id: 2,
            category: "freud",
            question: "عندما تشعر بالتوتر، ما هو أول شيء تفكر فيه؟",
            options: [
                {text: "الطفولة أو الذكريات القديمة", points: {freud: 5, jung: 3, adler: 2}},
                {text: "المستقبل والتحديات القادمة", points: {freud: 1, jung: 4, adler: 5}},
                {text: "العلاقات مع الآخرين", points: {freud: 3, jung: 5, adler: 4}},
                {text: "النجاح أو الفشل", points: {freud: 2, jung: 2, adler: 5}}
            ]
        },
        
        // أسئلة يونغ - اللاوعي الجمعي والأنماط الأصلية
        {
            id: 3,
            category: "jung",
            question: "ما نوع الشخصيات التي تجذبك أكثر في الأفلام والكتب؟",
            options: [
                {text: "الأبطال الذين يخوضون مغامرات", points: {jung: 5, mbti: {ESTP: 3, ENFP: 2}, bigFive: {openness: 4}}},
                {text: "الشخصيات المعقدة ذات الأسرار", points: {jung: 5, mbti: {INTJ: 4, INTP: 3}, bigFive: {openness: 5}}},
                {text: "الشخصيات التي تساعد الآخرين", points: {jung: 4, mbti: {ENFJ: 5, ISFJ: 4}, bigFive: {agreeableness: 5}}},
                {text: "الشخصيات التي تسعى للسلطة", points: {jung: 3, mbti: {ENTJ: 5, ESTJ: 4}, bigFive: {conscientiousness: 4}}}
            ]
        },
        {
            id: 4,
            category: "jung",
            question: "كيف تصف علاقتك مع الجانب المظلم من شخصيتك؟",
            options: [
                {text: "أقبله وأفهمه", points: {jung: 5, freud: 3, bigFive: {neuroticism: 2}}},
                {text: "أحاول تجنبه", points: {jung: 2, freud: 4, bigFive: {neuroticism: 4}}},
                {text: "لا أفكر فيه كثيرًا", points: {jung: 1, freud: 2, bigFive: {neuroticism: 1}}},
                {text: "أحاول دمجه مع الجانب الإيجابي", points: {jung: 5, freud: 2, bigFive: {openness: 5}}}
            ]
        },
        
        // أسئلة أدلر - Complex والتفوق
        {
            id: 5,
            category: "adler",
            question: "ما هو أكبر تحدٍ تواجهه في حياتك الاجتماعية؟",
            options: [
                {text: "الشعور بأنني أقل من الآخرين", points: {adler: 5, bigFive: {neuroticism: 4}, freud: 3}},
                {text: "الشعور بأنني مختلف عن الآخرين", points: {adler: 4, jung: 4, mbti: {INTP: 3, INFP: 3}}},
                {text: "الخوف من الرفض أو النقد", points: {adler: 3, bigFive: {neuroticism: 5}, freud: 4}},
                {text: "الرغبة في أن أكون الأفضل دائماً", points: {adler: 4, bigFive: {conscientiousness: 5}, mbti: {ENTJ: 4}}}
            ]
        },
        {
            id: 6,
            category: "adler",
            question: "كيف تتعامل مع المنافسة؟",
            options: [
                {text: "أتنافس بقوة لأثبت نفسي", points: {adler: 5, bigFive: {conscientiousness: 4}, mbti: {ESTJ: 3}}},
                {text: "أفضل التعاون على المنافسة", points: {adler: 2, bigFive: {agreeableness: 5}, mbti: {ISFJ: 4}}},
                {text: "أتنافس لكن بعدل واحترام", points: {adler: 3, bigFive: {agreeableness: 4, conscientiousness: 3}, mbti: {ENFJ: 4}}},
                {text: "أتجنب المنافسة قدر الإمكان", points: {adler: 1, bigFive: {neuroticism: 3}, freud: 2}}
            ]
        },
        
        // أسئلة MBTI
        {
            id: 7,
            category: "mbti",
            question: "في المجموعات الاجتماعية، أنت عادةً:",
            options: [
                {text: "أتحدث أكثر مما أستمع", points: {mbti: {ESTP: 4, ENFP: 3, ENTJ: 3}, bigFive: {extraversion: 5}}},
                {text: "أستمع أكثر مما أتحدث", points: {mbti: {INTJ: 4, INTP: 5, INFJ: 4}, bigFive: {extraversion: 1}}},
                {text: "أتحدث عند الحاجة فقط", points: {mbti: {ISTJ: 3, ISFJ: 3}, bigFive: {extraversion: 2}}},
                {text: "أشارك بحماس وطاقة", points: {mbti: {ESFP: 5, ENFJ: 3}, bigFive: {extraversion: 4}}}
            ]
        },
        {
            id: 8,
            category: "mbti",
            question: "كيف تفضل تنظيم وقتك؟",
            options: [
                {text: "بحسب الخطة والجدول المحدد", points: {mbti: {ISTJ: 5, ESTJ: 4, INTJ: 3}, bigFive: {conscientiousness: 5}}},
                {text: "بحسب المزاج والفرص المتاحة", points: {mbti: {ESFP: 4, ENFP: 5, ISFP: 3}, bigFive: {openness: 4}}},
                {text: "بحسب الأولويات المتغيرة", points: {mbti: {ENFJ: 3, INFP: 3}, bigFive: {openness: 3}}},
                {text: "بحسب الضغوط والمواعيد النهائية", points: {mbti: {ESTP: 3, ENTJ: 4}, bigFive: {conscientiousness: 2}}}
            ]
        },
        
        // أسئلة Big Five
        {
            id: 9,
            category: "bigFive",
            question: "ما مدى اهتمامك بالتجارب الجديدة والمغامرات؟",
            options: [
                {text: "أحب التجارب الجديدة جداً", points: {bigFive: {openness: 5}, mbti: {ENFP: 4, ENTP: 5}}},
                {text: "أحب بعض التجارب الجديدة", points: {bigFive: {openness: 3}, mbti: {INFP: 3, ESFP: 3}}},
                {text: "أفضل الأمور المألوفة", points: {bigFive: {openness: 2}, mbti: {ISTJ: 4, ISFJ: 3}}},
                {text: "أخشى التجارب الجديدة", points: {bigFive: {openness: 1, neuroticism: 4}, mbti: {INTJ: 2, INFJ: 2}}}
            ]
        },
        {
            id: 10,
            category: "bigFive",
            question: "ما مدى اهتمامك بمشاعر الآخرين؟",
            options: [
                {text: "أهتم جداً ودائماً", points: {bigFive: {agreeableness: 5}, mbti: {INFP: 5, ENFJ: 5}}},
                {text: "أهتم لكن بحدود", points: {bigFive: {agreeableness: 3}, mbti: {ISFP: 3, ESFJ: 4}}},
                {text: "أهتم عند الحاجة فقط", points: {bigFive: {agreeableness: 2}, mbti: {ISTJ: 2, ESTJ: 1}}},
                {text: "أركز أكثر على نفسي", points: {bigFive: {agreeableness: 1}, mbti: {INTJ: 3, ENTJ: 2}}}
            ]
        }
        // يمكن إضافة 20 سؤال أخرى مشابهة...
    ],
    
    // قاعدة بيانات النظريات
    theories: {
        freud: {
            name: "سيجموند فرويد - التحليل النفسي الكلاسيكي",
            focus: "اللاوعي، الرغبات المكبوتة، مراحل النمو الجنسي",
            keyConcepts: ["اللاوعي", "الرغبات المكبوتة", "الصراع النفسي", "الدفاعات النفسية"],
            analysis: ""
        },
        jung: {
            name: "كارل يونغ - التحليل النفسي التحليلي",
            focus: "اللاوعي الجمعي، الأنماط الأصلية، الاندماج والانفصال",
            keyConcepts: ["اللاوعي الجمعي", "الأنماط الأصلية", "الظل", "الأناسي", "الأنيما/الأنيموس"],
            analysis: ""
        },
        adler: {
            name: " ألفريد أدلر - علم النفس الفردي",
            focus: "Inferiority Complex، стремление للتفوق، النمو الاجتماعي",
            keyConcepts: [" комплекс النقص", "الهدف النهائي", "الشعور بالمجتمع", "نمط الحياة"],
            analysis: ""
        },
        mbti: {
            name: "مؤشر مايرز بريغز - MBTI",
            types: {
                "INTJ": "المهندس المعماري - استراتيجي ومبتكر",
                "INTP": "الмысл - مبدع ومحلل",
                "ENTJ": "الmarshal - قائد وحاسم",
                "ENTP": "المخترع - مبدع ومتحمس",
                "INFJ": "المناصر - بصير ومتعاطف",
                "INFP": "المediator - مثالي وموحد",
                "ENFJ": "البطل - ملهم ومتعاون",
                "ENFP": "المنشق - مبدع ومتحمس",
                "ISTJ": "ال logistician - عملي ومسؤول",
                "ISFJ": "المدافع - مخلص ومتعاطف",
                "ESTJ": "التنفيذي - منظم ومسؤول",
                "ESFJ": "القائد - ودود ومتعاون",
                "ISTP": "الفنان - مرن ومحلل",
                "ISFP": "المغامرة - مهذب ومبدع",
                "ESTP": "الرائد - متحمس واجتماعي",
                "ESFP": "المنocrat - مرِح ومرِح"
            },
            analysis: ""
        },
        bigFive: {
            name: "السمات الخمس الكبرى - Big Five",
            traits: {
                openness: "الانفتاح على التجارب",
                conscientiousness: "الضمير والتنظيم",
                extraversion: "الانبساط",
                agreeableness: "التوافق الاجتماعي",
                neuroticism: "العُصابية"
            },
            analysis: ""
        }
    }
};

// متغيرات النظام
let currentQuestion = 0;
let userAnswers = [];
let userScores = {
    freud: 0,
    jung: 0,
    adler: 0,
    mbti: {INTJ: 0, INTP: 0, ENTJ: 0, ENTP: 0, INFJ: 0, INFP: 0, ENFJ: 0, ENFP: 0, ISTJ: 0, ISFJ: 0, ESTJ: 0, ESFJ: 0, ISTP: 0, ISFP: 0, ESTP: 0, ESFP: 0},
    bigFive: {openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, neuroticism: 0}
};

// دالة بدء الاختبار المتكامل
function startComprehensiveQuiz() {
    document.querySelector('.quiz-intro').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    showQuestion();
}

// دالة عرض السؤال
function showQuestion() {
    const question = comprehensiveQuiz.questions[currentQuestion];
    
    // تحديث عداد الأسئلة
    document.getElementById('questionCounter').textContent = `السؤال ${currentQuestion + 1} من ${comprehensiveQuiz.questions.length}`;
    
    // تحديث شريط التقدم
    const progress = ((currentQuestion + 1) / comprehensiveQuiz.questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // عرض السؤال
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `
        <div class="question-text">${question.question}</div>
        <div class="options-container" id="optionsContainer">
            ${question.options.map((option, index) => `
                <div class="option" onclick="selectOption(${index})">
                    ${option.text}
                </div>
            `).join('')}
        </div>
    `;
    
    // تحديث أزرار التنقل
    document.getElementById('prevBtn').style.display = currentQuestion === 0 ? 'none' : 'block';
}

// دالة اختيار الإجابة
function selectOption(optionIndex) {
    const question = comprehensiveQuiz.questions[currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    // حفظ الإجابة
    userAnswers[currentQuestion] = {
        questionId: question.id,
        optionIndex: optionIndex,
        points: selectedOption.points
    };
    
    // تحديث النقاط
    updateScores(selectedOption.points);
    
    // تمييز الخيار المختار
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    // الانتقال للسؤال التالي تلقائيًا بعد ثوانٍ
    setTimeout(() => {
        if (currentQuestion < comprehensiveQuiz.questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            // نهاية الاختبار - الانتقال لصفحة النتائج
            showResults();
        }
    }, 1000);
}

// دالة تحديث النقاط
function updateScores(points) {
    // تحديث نقاط فرويد
    if (points.freud) userScores.freud += points.freud;
    
    // تحديث نقاط يونغ
    if (points.jung) userScores.jung += points.jung;
    
    // تحديث نقاط أدلر
    if (points.adler) userScores.adler += points.adler;
    
    // تحديث نقاط MBTI
    if (points.mbti) {
        for (let type in points.mbti) {
            userScores.mbti[type] += points.mbti[type];
        }
    }
    
    // تحديث نقاط Big Five
    if (points.bigFive) {
        for (let trait in points.bigFive) {
            userScores.bigFive[trait] += points.bigFive[trait];
        }
    }
}

// دالة السؤال السابق
function previousQuestion() {
    if (currentQuestion > 0) {
        // خصم النقاط السابقة
        const previousAnswer = userAnswers[currentQuestion - 1];
        if (previousAnswer) {
            const previousPoints = comprehensiveQuiz.questions[currentQuestion - 1].options[previousAnswer.optionIndex].points;
            revertScores(previousPoints);
            userAnswers[currentQuestion - 1] = null;
        }
        
        currentQuestion--;
        showQuestion();
    }
}

// دالة إرجاع النقاط
function revertScores(points) {
    if (points.freud) userScores.freud -= points.freud;
    if (points.jung) userScores.jung -= points.jung;
    if (points.adler) userScores.adler -= points.adler;
    if (points.mbti) {
        for (let type in points.mbti) {
            userScores.mbti[type] -= points.mbti[type];
        }
    }
    if (points.bigFive) {
        for (let trait in points.bigFive) {
            userScores.bigFive[trait] -= points.bigFive[trait];
        }
    }
}

// دالة عرض النتائج (временно)
function showResults() {
    alert('تم الانتهاء من الاختبار! النتائج المفصلة ستظهر في الصفحة التالية.');
    // هنا هنقل المستخدم لصفحة النتائج
    // window.location.href = 'results.html';
    
    // للتجربة الآن، نعرض النقاط
    console.log('النتائج:', userScores);
    console.log('أعلى نوع MBTI:', getHighestMBTI());
    console.log('السمات الخمس الكبرى:', userScores.bigFive);
}

// دالة الحصول على أعلى نوع MBTI
function getHighestMBTI() {
    let highestType = '';
    let highestScore = 0;
    
    for (let type in userScores.mbti) {
        if (userScores.mbti[type] > highestScore) {
            highestScore = userScores.mbti[type];
            highestType = type;
        }
    }
    
    return {type: highestType, score: highestScore};
}

// دالة حساب النسب المئوية
function calculatePercentages() {
    // هذا سيتم تطويره لاحقًا
    return {
        freud: Math.min(100, Math.max(0, userScores.freud)),
        jung: Math.min(100, Math.max(0, userScores.jung)),
        adler: Math.min(100, Math.max(0, userScores.adler))
    };
}