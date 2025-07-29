// questions.js
// مجموعة أسئلة تحليل الشخصية - مبنية على النظريات النفسية

const personalityQuestions = [
  {
    id: 1,
    text: "عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟",
    options: [
      {
        text: "أنا متحمس لأبدأ يومي!",
        theory: "MBTI, PERMA",
        trait: "E, Positive Emotion",
        description: "انبساط (Extraversion) - تبحث عن التحفيز الخارجي. PERMA: مشاعر إيجابية."
      },
      {
        text: "هل كل شيء تحت السيطرة؟",
        theory: "Big Five, DISC",
        trait: "C, Conscientiousness",
        description: "ضمير عالٍ - تحب التنظيم والسيطرة. DISC: C (Conscientiousness)."
      },
      {
        text: "هل سأكون كافيًا اليوم؟",
        theory: "Adler",
        trait: "Inferiority",
        description: "نظرية أدلر: شعور بالنقص وسعي للإثبات."
      },
      {
        text: "أريد أن أفهم معنى هذا اليوم",
        theory: "MBTI, Keirsey",
        trait: "N, Intuition",
        description: "حدس (Intuition) - تركيز على المعنى. كيرسي: Idealist."
      }
    ]
  },
  {
    id: 2,
    text: "في لقاء اجتماعي جديد، ماذا تفعل؟",
    options: [
      {
        text: "أبدأ الحديث مع الجميع بسرعة",
        theory: "MBTI, DISC",
        trait: "E, I",
        description: "E (Extravert) - طاقة من الخارج. DISC: I (Influence)."
      },
      {
        text: "أراقب أولًا ثم أتحدث مع شخص واحد",
        theory: "MBTI, DISC",
        trait: "I, S",
        description: "I (Introvert) - طاقة من الداخل. DISC: S (Steadiness)."
      },
      {
        text: "أركز على من يمكن أن يفيدني أو أفيد منه",
        theory: "MBTI, Keirsey",
        trait: "T, Rational",
        description: "T (Thinking) - تحليل منفعتك. كيرسي: Rational."
      },
      {
        text: "أحاول فهم مشاعر الآخرين بسرعة",
        theory: "MBTI, Keirsey",
        trait: "F, Idealist",
        description: "F (Feeling) - اهتمام بالعلاقات. كيرسي: Idealist."
      }
    ]
  },
  {
    id: 3,
    text: "ما نوع المهمة التي تجعلك 'تُنسى' من نفسك؟",
    options: [
      {
        text: "التحديات السريعة والملتزمة بالوقت",
        theory: "Keirsey, Flow",
        trait: "Artisan",
        description: "Artisan - تحب الأداء الفوري. حالة الانغماس (Flow)."
      },
      {
        text: "التحليل العميق للبيانات أو الأنظمة",
        theory: "MBTI, Keirsey",
        trait: "NT, Rational",
        description: "NT - تفكير منطقي. كيرسي: Rational."
      },
      {
        text: "مساعدة شخص على تجاوز أزمة",
        theory: "MBTI, Keirsey",
        trait: "NF, Idealist",
        description: "NF - قيم إنسانية. كيرسي: Idealist."
      },
      {
        text: "تنظيم فريق لتحقيق هدف منظم",
        theory: "MBTI, Keirsey",
        trait: "SJ, Guardian",
        description: "SJ - نظام ومسؤولية. كيرسي: Guardian."
      }
    ]
  },
  {
    id: 4,
    text: "ما أكثر شيء تبحث عنه في الصداقات؟",
    options: [
      {
        text: "المرح والطاقة",
        theory: "DISC, MBTI",
        trait: "I, SP",
        description: "DISC: I (Influence). MBTI: SP - يعيش اللحظة."
      },
      {
        text: "الولاء والاستقرار",
        theory: "DISC, MBTI",
        trait: "S, SJ",
        description: "DISC: S (Steadiness). MBTI: SJ - يحب الاستمرارية."
      },
      {
        text: "العمق والمعنى",
        theory: "MBTI, Keirsey",
        trait: "NF, Idealist",
        description: "NF - يبحث عن معنى. كيرسي: Idealist."
      },
      {
        text: "التحدي الفكري",
        theory: "MBTI, Keirsey",
        trait: "NT, Rational",
        description: "NT - يحب التفكير المعقد. كيرsey: Rational."
      }
    ]
  },
  {
    id: 5,
    text: "كيف تتعامل مع الأخطاء؟",
    options: [
      {
        text: "أتعلم وأتحرك بسرعة",
        theory: "MBTI, Keirsey",
        trait: "P, Artisan",
        description: "P (Perceiving) - مرن. كيرسي: Artisan."
      },
      {
        text: "أحلل ما حدث بدقة",
        theory: "Big Five, Keirsey",
        trait: "C, Rational",
        description: "ضمير عالٍ (Conscientiousness). كيرسي: Rational."
      },
      {
        text: "أشعر بالذنب، لكنني أسامح نفسي",
        theory: "Big Five, Rogers",
        trait: "A, Acceptance",
        description: "الوئام (Agreeableness). روجرز: القبول غير المشروط."
      },
      {
        text: "أتساءل: هل هذا يثبت أنني غير كافٍ؟",
        theory: "Adler",
        trait: "Inferiority",
        description: "نظرية أدلر: الشعور بالنقص الدائم."
      }
    ]
  },
  {
    id: 6,
    text: "ما الذي يُشعرك بالفخر؟",
    options: [
      {
        text: "تحقيق نتائج ملموسة",
        theory: "DISC, Keirsey",
        trait: "D, Guardian",
        description: "D (Dominance). كيرسي: Guardian - النتائج."
      },
      {
        text: "دعم شخص في أزمة",
        theory: "MBTI, Keirsey",
        trait: "F, Idealist",
        description: "F (Feeling). كيرسي: Idealist - العطاء."
      },
      {
        text: "ابتكار فكرة جديدة",
        theory: "MBTI, Keirsey",
        trait: "N, Rational",
        description: "N (Intuition). كيرسي: Rational - الابتكار."
      },
      {
        text: "الالتزام بالواجبات والمسؤوليات",
        theory: "MBTI, Keirsey",
        trait: "J, Guardian",
        description: "J (Judging). كيرسي: Guardian - الواجب."
      }
    ]
  },
  {
    id: 7,
    text: "في قرار مهم، ما مصدر قوتك؟",
    options: [
      {
        text: "منطق الأرقام والحقائق",
        theory: "MBTI",
        trait: "T",
        description: "T (Thinking) - التفكير العقلي."
      },
      {
        text: "مشاعر القلب وتأثير القرار على الآخرين",
        theory: "MBTI",
        trait: "F",
        description: "F (Feeling) - القيم والعلاقات."
      },
      {
        text: "ما يقوله القانون أو التقاليد",
        theory: "MBTI",
        trait: "S",
        description: "S (Sensing) - الواقع والخبرة."
      },
      {
        text: "رؤيتي المستقبلية والبصيرة",
        theory: "MBTI",
        trait: "N",
        description: "N (Intuition) - الرؤية الكبيرة."
      }
    ]
  },
  {
    id: 8,
    text: "ماذا تفعل عندما تشعر بالضغط؟",
    options: [
      {
        text: "أتحدى الموقف مباشرة",
        theory: "DISC",
        trait: "D",
        description: "D (Dominance) - المواجهة."
      },
      {
        text: "أبحث عن دعم من الآخرين",
        theory: "DISC",
        trait: "I",
        description: "I (Influence) - اجتماعية."
      },
      {
        text: "أبتعد مؤقتًا لأعيد التفكير",
        theory: "DISC",
        trait: "S",
        description: "S (Steadiness) - تجنب التوتر."
      },
      {
        text: "أحلل المشكلة من كل الزوايا",
        theory: "DISC",
        trait: "C",
        description: "C (Conscientiousness) - تحليل منطقي."
      }
    ]
  },
  {
    id: 9,
    text: "ما نوع الكتب أو المحتوى الذي تفضله؟",
    options: [
      {
        text: "قصص نجاح، قيادة، تأثير",
        theory: "Keirsey",
        trait: "Guardian, Rational",
        description: " guardian: النجاح. Rational: التأثير."
      },
      {
        text: "روايات، فلسفة، تأملات وجودية",
        theory: "Keirsey",
        trait: "Idealist",
        description: "Idealist - يبحث عن المعنى."
      },
      {
        text: "أدلة عملية، خطوات، تقنيات",
        theory: "MBTI",
        trait: "S, J",
        description: "Sensing + Judging - عملي ومنظم."
      },
      {
        text: "ألعاب، ألغاز، تجارب جديدة",
        theory: "MBTI, Keirsey",
        trait: "SP, Artisan",
        description: "Artisan - يحب التحدي والتجربة."
      }
    ]
  },
  {
    id: 10,
    text: "ما الذي يعطيك إحساسًا بالمعنى؟",
    options: [
      {
        text: "تحقيق إنجازات كبيرة",
        theory: "Maslow",
        trait: "Self-actualization",
        description: "ماسلو: التحقق الذاتي."
      },
      {
        text: "خدمة الآخرين",
        theory: "PERMA, Rogers",
        trait: "Meaning",
        description: "PERMA: المعنى. روجرز: العطاء."
      },
      {
        text: "فهم الكون أو النظام الكوني",
        theory: "Keirsey",
        trait: "Rational",
        description: "Rational - فهم الأنظمة."
      },
      {
        text: "الاستقرار والانتماء",
        theory: "Erikson",
        trait: "Generativity",
        description: "إريكسون: الانتماء الاجتماعي."
      }
    ]
  }
  // يمكنك إضافة باقي الأسئلة (11-20) بنفس الطريقة
];

// تصدير الملف للاستخدام في مشروعك
export default personalityQuestions;
