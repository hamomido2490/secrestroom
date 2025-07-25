// جميع أسئلة الاختبار النفسي (30 سؤال)
const testQuestions = [
    {
        id: 1,
        theory: "freudian",
        type: "personality",
        text: {
            ar: "عند مواجهة مشكلة صعبة، هل تميل إلى:",
            en: "When facing a difficult problem, do you tend to:"
        },
        options: [
            {
                text: {
                    ar: "تحليل جذورها في ماضيك أو طفولتك",
                    en: "Analyze its roots in your past or childhood"
                },
                value: "a",
                scores: {
                    freudian: { id_strength: 2, ego_strength: -1 },
                    jungian: { introversion_extraversion: -1 },
                    bigfive: { neuroticism: 1 }
                }
            },
            {
                text: {
                    ar: "البحث عن حل عملي دون التركيز على الماضي",
                    en: "Look for a practical solution without focusing on the past"
                },
                value: "b",
                scores: {
                    freudian: { ego_strength: 2 },
                    jungian: { thinking_feeling: 1 },
                    bigfive: { conscientiousness: 1 }
                }
            },
            {
                text: {
                    ar: "التفكير في كيف تؤثر على علاقاتك مع الآخرين",
                    en: "Think about how it affects your relationships with others"
                },
                value: "c",
                scores: {
                    freudian: { superego_strength: 2 },
                    jungian: { feeling_thinking: 1 },
                    bigfive: { agreeableness: 1 }
                }
            }
        ]
    },
    {
        id: 2,
        theory: "jungian",
        type: "cognitive",
        text: {
            ar: "في وقت فراغك، هل تفضل:",
            en: "In your free time, do you prefer:"
        },
        options: [
            {
                text: {
                    ar: "التفكير والتأمل بمفردك",
                    en: "Thinking and meditating alone"
                },
                value: "a",
                scores: {
                    jungian: { introversion_extraversion: -2, intuition_sensing: 1 },
                    mbti: { introversion: 1, intuition: 1 },
                    bigfive: { extraversion: -1 }
                }
            },
            {
                text: {
                    ar: "قضاء الوقت مع الأصدقاء أو العائلة",
                    en: "Spending time with friends or family"
                },
                value: "b",
                scores: {
                    jungian: { introversion_extraversion: 2 },
                    mbti: { extraversion: 1 },
                    bigfive: { extraversion: 1 }
                }
            },
            {
                text: {
                    ar: "ممارسة أنشطة إبداعية أو فنية",
                    en: "Engaging in creative or artistic activities"
                },
                value: "c",
                scores: {
                    jungian: { sensing_intuition: 1, feeling_thinking: -1 },
                    mbti: { sensing: 1, feeling: 1 },
                    bigfive: { openness: 1 }
                }
            }
        ]
    },
    // 28 سؤال إضافي بنفس التفصيل...
];

// أسئلة ديموغرافية إضافية
const demographicQuestions = [
    {
        id: "education",
        text: {
            ar: "ما هو أعلى مستوى تعليمي حصلت عليه؟",
            en: "What is your highest level of education?"
        },
        options: [
            { text: { ar: "ثانوي أو أقل", en: "High school or less" }, value: "school" },
            { text: { ar: "دبلوم", en: "Diploma" }, value: "diploma" },
            { text: { ar: "بكالوريوس", en: "Bachelor's degree" }, value: "bachelor" },
            { text: { ar: "ماجستير", en: "Master's degree" }, value: "master" },
           { text: { ar: "دكتوراه", en: "PhD" }, value: "phd" }
        ]
    },
    {
        id: "relationship",
        text: {
            ar: "ما هو وضعك الاجتماعي الحالي؟",
            en: "What is your current relationship status?"
        },
        options: [
            { text: { ar: "أعزب", en: "Single" }, value: "single" },
            { text: { ar: "في علاقة", en: "In a relationship" }, value: "relationship" },
            { text: { ar: "متزوج", en: "Married" }, value: "married" },
            { text: { ar: "منفصل/مطلق", en: "Separated/Divorced" }, value: "divorced" },
            { text: { ar: "أرمل", en: "Widowed" }, value: "widowed" }
        ]
    }
];

export { testQuestions, demographicQuestions };
