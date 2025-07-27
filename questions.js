// questions.js - ملف الأسئلة المحسن مع دعم الأرق، الوزن، وتنويع المقاييس
export const questions = [
  // === مجال الرؤية الداخلية (Vision) - 10 أسئلة ===
  {
    id: 2,
    category: "freud",
    domain: "vision",
    scale: "likert",
    weight: 1.2,
    text: {
      ar: "هل تحلم غالبًا بأحلام تعكس مشاعرك الداخلية المكبوتة؟",
      en: "Do you often have dreams that reflect your repressed inner emotions?"
    }
  },
  {
    id: 3,
    category: "jung",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر بوجود جانب غامض في شخصيتك لم تكتشفه بعد؟",
      en: "Do you feel there’s a mysterious side to your personality yet to be discovered?"
    }
  },
  {
    id: 5,
    category: "family_systems",
    domain: "vision",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تعتقد أن تجارب طفولتك تشكل علاقاتك الحالية؟",
      en: "Do you believe your childhood experiences shape your current relationships?"
    }
  },
  {
    id: 7,
    category: "enneagram",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تفكر كثيرًا في معنى حياتك وهدفك الوجودي؟",
      en: "Do you often think about the meaning of your life and your existential purpose?"
    }
  },
  {
    id: 8,
    category: "big_five",
    domain: "vision",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تعتبر نفسك شخصًا منضبطًا وملتزمًا في معظم الوقت؟",
      en: "Do you consider yourself disciplined and responsible most of the time?"
    }
  },
  {
    id: 10,
    category: "rebt",
    domain: "vision",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تؤثر أفكارك السلبية على مشاعرك وسلوكك؟",
      en: "Do your negative thoughts impact your emotions and behavior?"
    }
  },
  {
    id: 41,
    category: "jung",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر أن أحلامك تحمل رموزًا أو رسائل خاصة؟",
      en: "Do you feel your dreams carry special symbols or messages?"
    }
  },
  {
    id: 42,
    category: "freud",
    domain: "vision",
    scale: "likert",
    weight: 1.2,
    text: {
      ar: "هل تلاحظ أن رغباتك اللاواعية تؤثر على قراراتك؟",
      en: "Do you notice that your unconscious desires influence your decisions?"
    }
  },
  {
    id: 49, // سؤال جديد
    category: "kohlberg",
    domain: "vision",
    scale: "yes-no",
    weight: 1.1,
    text: {
      ar: "هل تأخذ قراراتك بناءً على مبادئ أخلاقية ثابتة؟",
      en: "Do you make decisions based on fixed moral principles?"
    }
  },
  {
    id: 50, // سؤال جديد
    category: "vygotsky",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تعتقد أن التفاعل الاجتماعي يساعدك في فهم نفسك؟",
      en: "Do you believe social interactions help you understand yourself?"
    }
  },

  // === مجال التحليل العميق (Analysis) - 10 أسئلة ===
  {
    id: 11,
    category: "adler",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تسعى دائمًا لإثبات قيمتك من خلال إنجازاتك؟",
      en: "Do you always strive to prove your worth through your achievements?"
    }
  },
  {
    id: 12,
    category: "adler",
    domain: "analysis",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تحفزك نجاحات الآخرين لتحقيق إنجازات أكبر؟",
      en: "Do others’ successes motivate you to achieve greater accomplishments?"
    }
  },
  {
    id: 13,
    category: "erikson",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تجد صعوبة في الثقة بالآخرين بسبب تجارب سابقة؟",
      en: "Do you find it hard to trust others due to past experiences?"
    }
  },
  {
    id: 16,
    category: "big_five",
    domain: "analysis",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تستمتع بتجربة أفكار وتجارب جديدة؟",
      en: "Do you enjoy exploring new ideas and experiences?"
    }
  },
  {
    id: 18,
    category: "rebt",
    domain: "analysis",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تحاول تعديل أفكارك السلبية عند الشعور بالضغط؟",
      en: "Do you try to modify your negative thoughts when feeling stressed?"
    }
  },
  {
    id: 20,
    category: "theory_of_mind",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تفسر لغة جسد الآخرين بدقة عالية؟",
      en: "Do you accurately interpret others’ body language?"
    }
  },
  {
    id: 43,
    category: "big_five",
    domain: "analysis",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تميل إلى تحليل المواقف بعمق قبل اتخاذ قرار؟",
      en: "Do you tend to analyze situations deeply before making a decision?"
    }
  },
  {
    id: 44,
    category: "adler",
    domain: "analysis",
    scale: "1-5",
    weight: 1.1,
    text: {
      ar: "هل تشعر أنك بحاجة لتأكيد من الآخرين لتشعر بالثقة؟",
      en: "Do you feel the need for validation from others to feel confident?"
    }
  },
  {
    id: 51, // سؤال جديد
    category: "piaget",
    domain: "analysis",
    scale: "yes-no",
    weight: 1.0,
    text: {
      ar: "هل تحب استكشاف كيفية عمل الأشياء من خلال التجربة؟",
      en: "Do you enjoy exploring how things work through experimentation?"
    }
  },
  {
    id: 52, // سؤال جديد
    category: "disc",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تفضل العمل بطريقة منهجية ومنظمة؟",
      en: "Do you prefer to work in a systematic and organized manner?"
    }
  },

  // === مجال الشفاء النفسي (Healing) - 10 أسئلة ===
  {
    id: 21,
    category: "freud",
    domain: "healing",
    scale: "likert",
    weight: 1.2,
    text: {
      ar: "هل تعتقد أن طفولتك لها تأثير كبير على شخصيتك اليوم؟",
      en: "Do you believe your childhood has a significant impact on your personality today?"
    }
  },
  {
    id: 22,
    category: "multiple_selves",
    domain: "healing",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر أن أجزاء مختلفة من شخصيتك تتصارع أحيانًا؟",
      en: "Do you feel different parts of your personality sometimes conflict?"
    }
  },
  {
    id: 23,
    category: "rogers",
    domain: "healing",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تجد صعوبة في قبول نفسك كما أنت؟",
      en: "Do you find it hard to accept yourself as you are?"
    }
  },
  {
    id: 25,
    category: "maslow",
    domain: "healing",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر بالوحدة حتى وأنت محاط بالناس؟",
      en: "Do you feel lonely even when surrounded by people?"
    }
  },
  {
    id: 26,
    category: "eysenck_pen",
    domain: "healing",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تشعر بالقلق بسهولة في المواقف الجديدة؟",
      en: "Do you easily feel anxious in new situations?"
    }
  },
  {
    id: 28,
    category: "rebt",
    domain: "healing",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تستخدم تقنيات مثل التأمل أو التنفس لتقليل التوتر؟",
      en: "Do you use techniques like meditation or breathing to reduce stress?"
    }
  },
  {
    id: 30,
    category: "theory_of_mind",
    domain: "healing",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تستخدم لغة الجسد لتعزيز التواصل مع الآخرين؟",
      en: "Do you use body language to enhance communication with others?"
    }
  },
  {
    id: 45,
    category: "sleep",
    domain: "healing",
    scale: "1-5",
    weight: 1.5,
    text: {
      ar: "كم ساعة تنام يوميًا في المتوسط؟",
      en: "How many hours do you sleep daily on average?"
    }
  },
  {
    id: 46,
    category: "sleep",
    domain: "healing",
    scale: "likert",
    weight: 1.5,
    text: {
      ar: "هل تفكر كثيرًا في المشاكل أو العمل قبل النوم؟",
      en: "Do you think a lot about problems or work before sleeping?"
    }
  },
  {
    id: 53, // سؤال جديد
    category: "colors",
    domain: "healing",
    scale: "yes-no",
    weight: 1.0,
    text: {
      ar: "هل تشعر أن الألوان تؤثر على مزاجك بشكل واضح؟",
      en: "Do you feel that colors noticeably affect your mood?"
    }
  },

  // === مجال الاكتشاف (Discovery) - 10 أسئلة ===
  {
    id: 31,
    category: "mbti",
    domain: "discovery",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تجد صعوبة في تحديد نوع شخصيتك بدقة؟",
      en: "Do you find it hard to precisely define your personality type?"
    }
  },
  {
    id: 32,
    category: "jung",
    domain: "discovery",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل ترى أنماطًا أو معاني في الأحداث العشوائية؟",
      en: "Do you see patterns or meanings in random events?"
    }
  },
  {
    id: 34,
    category: "skinner",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تساعدك المكافآت على تحسين سلوكك؟",
      en: "Do rewards help you improve your behavior?"
    }
  },
  {
    id: 35,
    category: "adler",
    domain: "discovery",
    scale: "1-5",
    weight: 1.1,
    text: {
      ar: "هل تشعر أن أهدافك الشخصية مختلفة عما يراه الآخرون؟",
      en: "Do you feel your personal goals differ from what others perceive?"
    }
  },
  {
    id: 37,
    category: "jung",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تعتمد على حدسك في اتخاذ القرارات المهمة؟",
      en: "Do you rely on your intuition for important decisions?"
    }
  },
  {
    id: 39,
    category: "maslow",
    domain: "discovery",
    scale: "1-5",
    weight: 1.1,
    text: {
      ar: "هل تشعر أن لديك هدفًا خاصًا في الحياة؟",
      en: "Do you feel you have a unique purpose in life?"
    }
  },
  {
    id: 47,
    category: "mbti",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تفضل التخطيط المسبق أم التصرف بعفوية؟",
      en: "Do you prefer planning ahead or acting spontaneously?"
    }
  },
  {
    id: 48,
    category: "skinner",
    domain: "discovery",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تجد أن التكرار يساعدك في تعلم مهارات جديدة؟",
      en: "Do you find that repetition helps you learn new skills?"
    }
  },
  {
    id: 54, // سؤال جديد
    category: "bandura",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تتعلم من خلال مراقبة تصرفات الآخرين؟",
      en: "Do you learn by observing others' behaviors?"
    }
  },
  {
    id: 55, // سؤال جديد
    category: "keirsey",
    domain: "discovery",
    scale: "yes-no",
    weight: 1.1,
    text: {
      ar: "هل تفضل العمل ضمن فريق أم بمفردك؟",
      en: "Do you prefer working in a team or alone?"
    }
  }
];