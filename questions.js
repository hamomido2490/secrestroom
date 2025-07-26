const questions = [
  {
    id: 1,
    category: "freud",
    text: {
      ar: "عندما تواجه موقفًا صعبًا، هل تشعر بأن دوافعك الداخلية تفوق سيطرتك؟",
      en: "When facing a difficult situation, do you feel your inner drives overpower your control?"
    }
  },
  {
    id: 2,
    category: "freud",
    text: {
      ar: "هل تجد نفسك تحلم بأشياء غريبة تعكس مشاعرك المكبوتة؟",
      en: "Do you often dream of strange things that reflect your repressed emotions?"
    }
  },
  {
    id: 3,
    category: "adler",
    text: {
      ar: "هل تسعى دائمًا لإثبات نفسك وإظهار قدراتك للآخرين؟",
      en: "Do you constantly strive to prove yourself and showcase your abilities?"
    }
  },
  {
    id: 4,
    category: "adler",
    text: {
      ar: "هل تشعر بالغيرة من نجاح الآخرين وتعمل على تحفيز نفسك لتحقق إنجازات؟",
      en: "Do you feel envious of others' success and motivate yourself to achieve accomplishments?"
    }
  },
  {
    id: 5,
    category: "jung",
    text: {
      ar: "هل تشعر أن لديك جانبًا مظلمًا أو غير مكشوف من شخصيتك؟",
      en: "Do you feel you have a dark or undiscovered side to your personality?"
    }
  },
  {
    id: 6,
    category: "jung",
    text: {
      ar: "هل تجد نفسك تتأثر بحواسك و]intuition] في اتخاذ القرارات؟",
      en: "Do you find yourself influenced by your senses and intuition in decision-making?"
    }
  },
  {
    id: 7,
    category: "object_relations",
    text: {
      ar: "هل تعتقد أن تجاربك الطفولية تؤثر على علاقاتك الحالية؟",
      en: "Do you think your childhood experiences affect your current relationships?"
    }
  },
  {
    id: 8,
    category: "object_relations",
    text: {
      ar: "هل تجد صعوبة في الوثوق بالآخرين بعد خيبات سابقة؟",
      en: "Do you find it difficult to trust others after past disappointments?"
    }
  },
  {
    id: 9,
    category: "cultural",
    text: {
      ar: "هل تشعر أن قيم ثقافتك تؤثر على طريقة تفكيرك وسلوكك؟",
      en: "Do you feel that your cultural values influence your thinking and behavior?"
    }
  },
  {
    id: 10,
    category: "cultural",
    text: {
      ar: "هل تختلف في سلوكك بين البيئات الثقافية المختلفة؟",
      en: "Do you behave differently in different cultural environments?"
    }
  },
  {
    id: 11,
    category: "existential",
    text: {
      ar: "هل تتساءل كثيرًا عن معنى الحياة والموت؟",
      en: "Do you often wonder about the meaning of life and death?"
    }
  },
  {
    id: 12,
    category: "existential",
    text: {
      ar: "هل تشعر بالمسؤولية الكاملة عن اختياراتك وحياتك؟",
      en: "Do you feel completely responsible for your choices and life?"
    }
  },
  {
    id: 13,
    category: "traits_theory",
    text: {
      ar: "هل تصف نفسك بأنك منضبط ومسؤول في معظم المواقف؟",
      en: "Do you describe yourself as disciplined and responsible in most situations?"
    }
  },
  {
    id: 14,
    category: "traits_theory",
    text: {
      ar: "هل تميل إلى الانفتاح على تجارب جديدة وأفكار مختلفة؟",
      en: "Do you tend to be open to new experiences and different ideas?"
    }
  },
  {
    id: 15,
    category: "transactional",
    text: {
      ar: "هل تجد نفسك تتعامل مع الآخرين بطريقة والدة أحيانًا؟",
      en: "Do you find yourself dealing with others in a parental way sometimes?"
    }
  },
  {
    id: 16,
    category: "transactional",
    text: {
      ar: "هل تميل إلى انتقاد نفسك أو الآخرين بطريقة حادة؟",
      en: "Do you tend to criticize yourself or others in a sharp way?"
    }
  },
  {
    id: 17,
    category: "cbt",
    text: {
      ar: "هل تلاحظ أن أفكارك السلبية تؤثر على مشاعرك وسلوكك؟",
      en: "Do you notice that your negative thoughts affect your feelings and behavior?"
    }
  },
  {
    id: 18,
    category: "cbt",
    text: {
      ar: "هل تحاول تغيير أنماط تفكيرك عندما تكون تحت الضغط؟",
      en: "Do you try to change your thinking patterns when under pressure?"
    }
  },
  {
    id: 19,
    category: "personality_tests",
    text: {
      ar: "هل تشعر أنك تمتلك خصائص من عدة أنواع شخصية مختلفة؟",
      en: "Do you feel you possess traits from several different personality types?"
    }
  },
  {
    id: 20,
    category: "personality_tests",
    text: {
      ar: "هل تجد صعوبة في تصنيف نفسك في نوع شخصية واحد؟",
      en: "Do you find it difficult to classify yourself in one personality type?"
    }
  },
  {
    id: 21,
    category: "body_language",
    text: {
      ar: "هل تنتبه لغة جسد الآخرين وتفسرها بسهولة؟",
      en: "Do you pay attention to others' body language and interpret it easily?"
    }
  },
  {
    id: 22,
    category: "body_language",
    text: {
      ar: "هل تستخدم لغة الجسد بشكل واعٍ للتواصل مع الآخرين؟",
      en: "Do you use body language consciously to communicate with others?"
    }
  },
  {
    id: 23,
    category: "projective",
    text: {
      ar: "هل تجد أن الصور الغامضة تحفز خيالك وتثير مشاعرك؟",
      en: "Do you find that ambiguous images stimulate your imagination and evoke emotions?"
    }
  },
  {
    id: 24,
    category: "projective",
    text: {
      ar: "هل تميل إلى رؤية أنماط أو معاني في الأشياء العشوائية؟",
      en: "Do you tend to see patterns or meanings in random things?"
    }
  },
  {
    id: 25,
    category: "aba",
    text: {
      ar: "هل تلاحظ تحسنًا في سلوكك عند استخدام نظام مكافآت؟",
      en: "Do you notice improvement in your behavior when using a reward system?"
    }
  },
  {
    id: 26,
    category: "aba",
    text: {
      ar: "هل تجد صعوبة في تغيير عاداتك القديمة؟",
      en: "Do you find it difficult to change your old habits?"
    }
  },
  {
    id: 27,
    category: "freud",
    text: {
      ar: "هل تشعر أن طفولتك تؤثر على شخصيتك اليوم بشكل كبير؟",
      en: "Do you feel that your childhood greatly influences your personality today?"
    }
  },
  {
    id: 28,
    category: "jung",
    text: {
      ar: "هل تشعر أن لديك عدة 'أنا' داخلية تتنافس على السيطرة؟",
      en: "Do you feel you have several inner 'selves' competing for control?"
    }
  },
  {
    id: 29,
    category: "traits_theory",
    text: {
      ar: "هل تميل إلى القلق والتوتر في المواقف الجديدة؟",
      en: "Do you tend to worry and feel anxious in new situations?"
    }
  },
  {
    id: 30,
    category: "existential",
    text: {
      ar: "هل تشعر بالوحدة الوجودية رغم وجود أشخاص من حولك؟",
      en: "Do you feel existential loneliness despite having people around you?"
    }
  }
];
