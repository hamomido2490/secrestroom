// questions.js - ملف الأسئلة المعدل والمتوافق مع analysis_data.js
const questions = [
  // === مجال الرؤية الداخلية (Vision) - 6 أسئلة ===
  {
    id: 2,
    category: "freud", // متوافق
    domain: "vision",
    scale: "1-5",
    text: {
      ar: "هل تجد نفسك تحلم بأشياء غريبة تعكس مشاعرك المكبوتة؟",
      en: "Do you often dream of strange things that reflect your repressed emotions?"
    }
  },
  {
    id: 3,
    category: "jung", // متوافق
    domain: "vision",
    scale: "1-5",
    text: {
      ar: "هل تشعر أن لديك جانبًا مظلمًا أو غير مكشوف من شخصيتك؟",
      en: "Do you feel you have a dark or undiscovered side to your personality?"
    }
  },
  {
    id: 5,
    category: "family_systems", // تعديل: object_relations -> family_systems (الأقرب منطقياً)
    domain: "vision",
    scale: "1-5",
    text: {
      ar: "هل تعتقد أن تجاربك الطفولية تؤثر على علاقاتك الحالية؟",
      en: "Do you think your childhood experiences affect your current relationships?"
    }
  },
  {
    id: 7,
    category: "enneagram", // تعديل: existential -> enneagram (يركز على الدوافع العميقة والمعنى)
    domain: "vision",
    scale: "1-5",
    text: {
      ar: "هل تتساءل كثيرًا عن معنى الحياة والموت؟",
      en: "Do you often wonder about the meaning of life and death?"
    }
  },
  {
    id: 8,
    category: "big_five", // تعديل: traits_theory -> big_five (أحد أشهر نظريات السمات)
    domain: "vision",
    scale: "1-5",
    text: {
      ar: "هل تصف نفسك بأنك منضبط ومسؤول في معظم المواقف؟",
      en: "Do you describe yourself as disciplined and responsible in most situations?"
    }
  },
  {
    id: 10,
    category: "rebt", // تعديل: cbt -> rebt (نظرية Ellis هي أساس العلاج المعرفي السلوكي)
    domain: "vision",
    scale: "1-5",
    text: {
      ar: "هل تلاحظ أن أفكارك السلبية تؤثر على مشاعرك وسلوكك؟",
      en: "Do you notice that your negative thoughts affect your feelings and behavior?"
    }
  },

  // === مجال التحليل العميق (Analysis) - 6 أسئلة ===
  {
    id: 11,
    category: "adler", // متوافق
    domain: "analysis",
    scale: "1-5",
    text: {
      ar: "هل تسعى دائمًا لإثبات نفسك وإظهار قدراتك للآخرين؟",
      en: "Do you constantly strive to prove yourself and showcase your abilities?"
    }
  },
  {
    id: 12,
    category: "adler", // متوافق
    domain: "analysis",
    scale: "1-5",
    text: {
      ar: "هل تشعر بالغيرة من نجاح الآخرين وتعمل على تحفيز نفسك لتحقق إنجازات؟",
      en: "Do you feel envious of others' success and motivate yourself to achieve accomplishments?"
    }
  },
  {
    id: 13,
    category: "erikson", // تعديل: object_relations -> erikson (يركز على أزمات الثقة)
    domain: "analysis",
    scale: "1-5",
    text: {
      ar: "هل تجد صعوبة في الوثوق بالآخرين بعد خيبات سابقة؟",
      en: "Do you find it difficult to trust others after past disappointments?"
    }
  },
  {
    id: 16,
    category: "big_five", // تعديل: traits_theory -> big_five (الانفتاح على التجارب سمة أساسية فيه)
    domain: "analysis",
    scale: "1-5",
    text: {
      ar: "هل تميل إلى الانفتاح على تجارب جديدة وأفكار مختلفة؟",
      en: "Do you tend to be open to new experiences and different ideas?"
    }
  },
  {
    id: 18,
    category: "rebt", // تعديل: cbt -> rebt (تغيير أنماط التفكير هو جوهر النظرية)
    domain: "analysis",
    scale: "1-5",
    text: {
      ar: "هل تحاول تغيير أنماط تفكيرك عندما تكون تحت الضغط؟",
      en: "Do you try to change your thinking patterns when under pressure?"
    }
  },
  {
    id: 20,
    category: "theory_of_mind", // تعديل: body_language -> theory_of_mind (فهم الآخرين)
    domain: "analysis",
    scale: "1-5",
    text: {
      ar: "هل تنتبه للغة جسد الآخرين وتفسرها بسهولة؟",
      en: "Do you pay attention to others' body language and interpret it easily?"
    }
  },

  // === مجال الشفاء النفسي (Healing) - 7 أسئلة ===
  {
    id: 21,
    category: "freud", // متوافق
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تشعر أن طفولتك تؤثر على شخصيتك اليوم بشكل كبير؟",
      en: "Do you feel that your childhood greatly influences your personality today?"
    }
  },
  {
    id: 22,
    category: "multiple_selves", // تعديل: jung -> multiple_selves (أكثر تخصصًا في هذه الفكرة)
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تشعر أن لديك عدة 'أنا' داخلية تتنافس على السيطرة؟",
      en: "Do you feel you have several inner 'selves' competing for control?"
    }
  },
  {
    id: 23,
    category: "rogers", // تعديل: object_relations -> rogers (يركز على التقبل غير المشروط)
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تجد صعوبة في التسامح مع الآخرين والتسامح مع نفسك؟",
      en: "Do you find it difficult to forgive others and forgive yourself?"
    }
  },
  {
    id: 25,
    category: "maslow", // تعديل: existential -> maslow (الشعور بالانتماء من الاحتياجات العليا)
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تشعر بالوحدة الوجودية رغم وجود أشخاص من حولك؟",
      en: "Do you feel existential loneliness despite having people around you?"
    }
  },
  {
    id: 26,
    category: "eysenck_pen", // تعديل: traits_theory -> eysenck_pen (العصابية سمة أساسية فيه)
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تميل إلى القلق والتوتر في المواقف الجديدة؟",
      en: "Do you tend to worry and feel anxious in new situations?"
    }
  },
  {
    id: 28,
    category: "rebt", // تعديل: cbt -> rebt (تقنيات الاسترخاء جزء من إدارة المشاعر)
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تستخدم تقنيات الاسترخاء لتهدئة قلقك؟",
      en: "Do you use relaxation techniques to calm your anxiety?"
    }
  },
  {
    id: 30,
    category: "theory_of_mind", // تعديل: body_language -> theory_of_mind (استخدام الإشارات للتواصل)
    domain: "healing",
    scale: "1-5",
    text: {
      ar: "هل تستخدم لغة الجسد بشكل واعٍ للتواصل مع الآخرين؟",
      en: "Do you use body language consciously to communicate with others?"
    }
  },

  // === مجال الاكتشاف (Discovery) - 6 أسئلة ===
  {
    id: 31,
    category: "mbti", // تعديل: personality_tests -> mbti (أشهر اختبار لتصنيف الشخصية)
    domain: "discovery",
    scale: "1-5",
    text: {
      ar: "هل تجد صعوبة في تصنيف نفسك في نوع شخصية واحد؟",
      en: "Do you find it difficult to classify yourself in one personality type?"
    }
  },
  {
    id: 32,
    category: "jung", // تعديل: projective -> jung (التركيز على الرموز والأنماط)
    domain: "discovery",
    scale: "1-5",
    text: {
      ar: "هل تميل إلى رؤية أنماط أو معاني في الأشياء العشوائية؟",
      en: "Do you tend to see patterns or meanings in random things?"
    }
  },
  {
    id: 34,
    category: "skinner", // تعديل: aba -> skinner (الاشتراط الإجرائي هو أساس تحليل السلوك التطبيقي)
    domain: "discovery",
    scale: "1-5",
    text: {
      ar: "هل تلاحظ تحسنًا في سلوكك عند استخدام نظام مكافآت؟",
      en: "Do you notice improvement in your behavior when using a reward system?"
    }
  },
  {
    id: 35,
    category: "adler", // متوافق
    domain: "discovery",
    scale: "1-5",
    text: {
      ar: "هل تشعر أن أهدافك الحقيقية تختلف عما تراه الآخرون؟",
      en: "Do you feel your true goals are different from what others see?"
    }
  },
  {
    id: 37,
    category: "jung", // متوافق
    domain: "discovery",
    scale: "1-5",
    text: {
      ar: "هل تؤمن بوجود حدس قوي يرشدك في القرارات؟",
      en: "Do you believe in a strong intuition that guides you in decisions?"
    }
  },
  {
    id: 39,
    category: "maslow", // تعديل: existential -> maslow (تحقيق الذات والهدف)
    domain: "discovery",
    scale: "1-5",
    text: {
      ar: "هل تشعر أن لديك هدفًا وجوديًا مميزًا في الحياة؟",
      en: "Do you feel you have a unique existential purpose in life?"
    }
  }
];
