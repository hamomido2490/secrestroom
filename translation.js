// جميع النظريات النفسية والمدارس
const psychologicalTheories = {
    // التحليل الفرويدي
    freudian: {
        id: "freudian",
        name: {
            ar: "التحليل النفسي الكلاسيكي (فرويد)",
            en: "Classical Psychoanalysis (Freud)"
        },
        founder: {
            ar: "سيغموند فرويد",
            en: "Sigmund Freud"
        },
        year: "1890s",
        description: {
            ar: "تركز نظرية فرويد على تأثير اللاوعي والدوافع الغريزية على السلوك الإنساني. تنقسم الشخصية وفق فرويد إلى ثلاثة مكونات: الهو (الغرائز)، الأنا (الواقع)، والأنا العليا (المثالية).",
            en: "Freud's theory focuses on the influence of the unconscious and instinctual drives on human behavior. According to Freud, personality is divided into three components: Id (instincts), Ego (reality), and Superego (morality)."
        },
        keyConcepts: {
            ar: [
                "الهو، الأنا، والأنا العليا",
                "مراحل النمو النفسي-الجنسي",
                "الدفاعات النفسية",
                "اللاوعي",
                "تفسير الأحلام"
            ],
            en: [
                "Id, Ego, and Superego",
                "Psychosexual development stages",
                "Defense mechanisms",
                "The unconscious",
                "Dream interpretation"
            ]
        },
        strengths: {
            ar: [
                "أول نظرية منهجية في الشخصية",
                "أثرت على العديد من النظريات اللاحقة",
                "اهتمامها باللاوعي والدوافع الخفية"
            ],
            en: [
                "First systematic theory of personality",
                "Influenced many subsequent theories",
                "Focus on unconscious and hidden motives"
            ]
        },
        weaknesses: {
            ar: [
                "صعوبة الإثبات العلمي",
                "تركيز مبالغ فيه على الجنس",
                "إهمال العوامل الاجتماعية"
            ],
            en: [
                "Difficult to scientifically verify",
                "Overemphasis on sexuality",
                "Neglect of social factors"
            ]
        },
        assessmentMethods: {
            ar: [
                "التداعي الحر",
                "تفسير الأحلام",
                "زلات فرويد (الزلات اللغوية)",
                "اختبارات الإسقاط"
            ],
            en: [
                "Free association",
                "Dream analysis",
                "Freudian slips",
                "Projective tests"
            ]
        },
        traits: [
            {
                id: "id_strength",
                name: { ar: "قوة الهو", en: "Id Strength" },
                description: {
                    ar: "مدى هيمنة الغرائز والرغبات الفطرية على الشخصية",
                    en: "The dominance of innate instincts and desires in personality"
                },
                score: 0,
                interpretation: [
                    {
                        range: [0, 3],
                        text: {
                            ar: "سيطرة ضعيفة للغرائز، شخصية متحفظة",
                            en: "Weak instinct control, reserved personality"
                        }
                    },
                    {
                        range: [4, 7],
                        text: {
                            ar: "توازن بين الغرائز والواقع",
                            en: "Balance between instincts and reality"
                        }
                    },
                    {
                        range: [8, 10],
                        text: {
                            ar: "هيمنة قوية للغرائز، شخصية متهورة",
                            en: "Strong instinct dominance, impulsive personality"
                        }
                    }
                ]
            },
            // باقي السمات الفرويدية...
        ]
    },

// التحليل اليونغي
    jungian: {
        id: "jungian",
        name: {
            ar: "التحليل التحليلي (كارل يونغ)",
            en: "Analytical Psychology (Jung)"
        },
        founder: {
            ar: "كارل يونغ",
            en: "Carl Jung"
        },
        year: "1910s",
        description: {
            ar: "طور يونغ نظرية التركيب النفسي التي تشمل اللاوعي الفردي والجمعي. قدم مفهوم الأنماط الأصلية والنوعية النفسية (الانطواء والانبساط).",
            en: "Jung developed a theory of psychic structure that includes the personal and collective unconscious. He introduced the concepts of archetypes and psychological types (introversion and extraversion)."
        },
        keyConcepts: {
            ar: [
                "اللاوعي الجمعي",
                "الأنماط الأصلية (الأنا، الظل، الأنيمة/الأنيموس)",
                "الانطواء والانبساط",
                "عملية التفرد",
                "الوظائف النفسية (التفكير، الشعور، الإحساس، الحدس)"
            ],
            en: [
                "Collective unconscious",
                "Archetypes (Self, Shadow, Anima/Animus)",
                "Introversion and Extraversion",
                "Individuation process",
                "Psychological functions (Thinking, Feeling, Sensing, Intuiting)"
            ]
        },
        traits: [
            {
                id: "introversion_extraversion",
                name: { ar: "الانطواء/الانبساط", en: "Introversion/Extraversion" },
                description: {
                    ar: "اتجاه الطاقة النفسية نحو الداخل أو الخارج",
                    en: "Direction of psychic energy inward or outward"
                },
                score: 0,
                interpretation: [
                    {
                        range: [0, 4],
                        text: {
                            ar: "انطوائي - يركز على العالم الداخلي",
                            en: "Introverted - focused on inner world"
                        }
                    },
                    {
                        range: [5, 7],
                        text: {
                            ar: "متوازن - يتكيف مع الموقف",
                            en: "Balanced - adapts to situation"
                        }
                    },
                    {
                        range: [8, 10],
                        text: {
                            ar: "انبساطي - يركز على العالم الخارجي",
                            en: "Extraverted - focused on outer world"
                        }
                    }
                ]
            },
            // باقي السمات اليونغية...
        ]
    },

    // علم النفس الفردي (أدلر)
    adlerian: {
        id: "adlerian",
        name: {
            ar: "علم النفس الفردي (أدلر)",
            en: "Individual Psychology (Adler)"
        },
        // ... تفاصيل نظرية أدلر
    },

    // مدرسة العلاقات الموضوعية (كلاين)
    kleinian: {
        id: "kleinian",
        name: {
            ar: "مدرسة العلاقات الموضوعية (كلاين)",
            en: "Object Relations Theory (Klein)"
        },
        // ... تفاصيل نظرية كلاين
    },

    // التحليل الثقافي (فروم)
    fromm: {
        id: "fromm",
        name: {
            ar: "التحليل الثقافي (فروم)",
            en: "Cultural Psychoanalysis (Fromm)"
        },
        // ... تفاصيل نظرية فروم
    },

    // التحليل الوجودي
    existential: {
        id: "existential",
        name: {
            ar: "التحليل الوجودي",
            en: "Existential Analysis"
        },
        // ... تفاصيل التحليل الوجودي
    },

    // نظرية السمات
    trait: {
        id: "trait",
        name: {
            ar: "نظرية السمات",
            en: "Trait Theory"
        },
        // ... تفاصيل نظرية السمات
    },

    // تحليل التفاعلات (Transactional Analysis)
    ta: {
        id: "ta",
        name: {
            ar: "تحليل التفاعلات (بيرن)",
            en: "Transactional Analysis (Berne)"
        },
        // ... تفاصيل نظرية بيرن
    },

// العلاج المعرفي السلوكي (CBT)
    cbt: {
        id: "cbt",
        name: {
            ar: "العلاج المعرفي السلوكي (CBT)",
            en: "Cognitive Behavioral Therapy (CBT)"
        },
        // ... تفاصيل الـ CBT
    },

    // مؤشر مايرز-بريجز (MBTI)
    mbti: {
        id: "mbti",
        name: {
            ar: "مؤشر مايرز-بريجز (MBTI)",
            en: "Myers-Briggs Type Indicator (MBTI)"
        },
        // ... تفاصيل الـ MBTI
    },

    // نظرية التوافقي (Enneagram)
    enneagram: {
        id: "enneagram",
        name: {
            ar: "نظرية التوافقي (Enneagram)",
            en: "Enneagram Theory"
        },
        // ... تفاصيل التوافقي
    },

    // نموذج العوامل الخمسة
    bigfive: {
        id: "bigfive",
        name: {
            ar: "نموذج العوامل الخمسة",
            en: "Big Five Personality Traits"
        },
        // ... تفاصيل العوامل الخمسة
    }
};

// اختبار MBTI الكامل
const mbtiTypes = {
    INTJ: {
        name: { ar: "المفكر الاستراتيجي", en: "The Strategist" },
        description: {
            ar: "يتمتع برؤية مستقبلية، مفكر تحليلي، مستقل، ومبتكر. لديه قدرة على رؤية الصورة الكبيرة وتحويل الأفكار إلى خطط استراتيجية.",
            en: "Visionary, analytical thinker, independent, and innovative. Has the ability to see the big picture and turn ideas into strategic plans."
        },
        traits: [
            { name: { ar: "الحدس", en: "Intuition" }, value: 0 },
            { name: { ar: "التفكير", en: "Thinking" }, value: 0 },
            { name: { ar: "الانطواء", en: "Introversion" }, value: 0 },
            { name: { ar: "الحكم", en: "Judging" }, value: 0 }
        ],
        strengths: {
            ar: [
                "تحليلي ومنطقي",
                "مستقل وذاتي التوجيه",
                "مبتكر ومبدع",
                "قدرة على التخطيط الاستراتيجي"
            ],
            en: [
                "Analytical and logical",
                "Independent and self-directed",
                "Innovative and creative",
                "Strategic planning ability"
            ]
        },
        weaknesses: {
            ar: [
                "يمكن أن يكون متصلبًا في الرأي",
                "قد يهمل الجانب العاطفي",
                "يميل إلى الكمالية",
                "قد يبدو غير متعاطف"
            ],
            en: [
                "Can be opinionated",
                "May neglect emotional aspects",
                "Perfectionist tendencies",
                "May appear unsympathetic"
            ]
        },
        careers: {
            ar: [
                "استراتيجي أعمال",
                "عالم أو باحث",
                "مهندس نظم",
                "مخطط مالي",
                "مبرمج كمبيوتر"
            ],
            en: [
                "Business strategist",
                "Scientist or researcher",
                "Systems engineer",
                "Financial planner",
                "Computer programmer"
            ]
        },
        relationships: {
            ar: [
                "يقدّر العلاقات العميقة والفكرية",
                "يميل إلى الخصوصية",
                "يحتاج لشريك يفهم استقلاليته",
                "غير معبر عاطفيًا بشكل علني"
            ],
            en: [
                "Values deep, intellectual relationships",
                "Tends to be private",
                "Needs a partner who understands independence",
                "Not openly emotionally expressive"
            ]
        }
    },
    // جميع أنواع MBTI الـ 16...
};

// اختبار الأنماط التساعية (Enneagram) الكامل
const enneagramTypes = {
    Type1: {
        name: { ar: "المصلح", en: "The Reformer" },
        description: {
            ar: "عقلاني ومثالي، لديه حس قوي بالصواب والخطأ. يسعى للتحسين ويميل إلى الكمالية والنظام.",
            en: "Rational and idealistic, with a strong sense of right and wrong. Strives for improvement and tends toward perfectionism and order."
        },
        // ... تفاصيل النوع 1
    },
    // جميع الأنماط التساعية...
};

// نموذج العوامل الخمسة الكبير
const bigFiveTraits = {
    openness: {
        name: { ar: "الانفتاح على التجربة", en: "Openness to Experience" },
        description: {
            ar: "مدى انفتاح الشخص على التجارب الجديدة والأفكار المبتكرة والخيال.",
            en: "The extent to which a person is open to new experiences, innovative ideas, and imagination."
        },
        facets: [
            { name: { ar: "الخيال", en: "Imagination" }, score: 0 },
            { name: { ar: "الفنية", en: "Artistic Interests" }, score: 0 },
            { name: { ar: "العاطفية", en: "Emotionality" }, score: 0 },
            { name: { ar: "المغامرة", en: "Adventurousness" }, score: 0 },
            { name: { ar: "الفكر", en: "Intellect" }, score: 0 },
            { name: { ar: "الليبرالية", en: "Liberalism" }, score: 0 }
        ]
    },
    // بقية العوامل (الضمير، الانبساط، القبول، العصابية)...
};

// تصدير جميع البيانات
export { psychologicalTheories, mbtiTypes, enneagramTypes, bigFiveTraits };
