const personalityQuestions = [
  {
    id: 1,
    text: "عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟",
    options: [
      { text: "أنا متحمس لأبدأ يومي!", theory: "MBTI, PERMA", trait: "E", description: "انبساط" },
      { text: "هل كل شيء تحت السيطرة؟", theory: "Big Five, DISC", trait: "C", description: "ضمير عالٍ" },
      { text: "هل سأكون كافيًا اليوم؟", theory: "Adler", trait: "Inferiority", description: "شعور بالنقص" },
      { text: "أريد أن أفهم معنى هذا اليوم", theory: "MBTI, Keirsey", trait: "N", description: "حدس، مثالي" }
    ]
  },
  {
    id: 2,
    text: "في لقاء اجتماعي جديد، ماذا تفعل؟",
    options: [
      { text: "أبدأ الحديث مع الجميع بسرعة", theory: "MBTI, DISC", trait: "E,I", description: "انبساط، تأثير" },
      { text: "أراقب أولًا ثم أتحدث مع شخص واحد", theory: "MBTI, DISC", trait: "I,S", description: "انطوائي، استقرار" },
      { text: "أركز على من يمكن أن يفيدني أو أفيد منه", theory: "MBTI, Keirsey", trait: "T", description: "تفكير منطقي" },
      { text: "أحاول فهم مشاعر الآخرين بسرعة", theory: "MBTI, Keirsey", trait: "F", description: "شعور بالعلاقات" }
    ]
  },
  {
    id: 3,
    text: "ما نوع المهمة التي تجعلك 'تُنسى' من نفسك؟",
    options: [
      { text: "التحديات السريعة والملتزمة بالوقت", theory: "Keirsey, Flow", trait: "Artisan", description: "فنان، انغماس" },
      { text: "التحليل العميق للبيانات أو الأنظمة", theory: "MBTI", trait: "NT", description: "منطقي" },
      { text: "مساعدة شخص على تجاوز أزمة", theory: "Keirsey", trait: "Idealist", description: "مثالي" },
      { text: "تنظيم فريق لتحقيق هدف منظم", theory: "Keirsey", trait: "Guardian", description: "حارس" }
    ]
  },
  {
    id: 4,
    text: "ما أكثر شيء تبحث عنه في الصداقات؟",
    options: [
      { text: "المرح والطاقة", theory: "DISC", trait: "I", description: "تأثير، اجتماعي" },
      { text: "الولاء والاستقرار", theory: "DISC", trait: "S", description: "استقرار" },
      { text: "العمق والمعنى", theory: "MBTI", trait: "NF", description: "مثالي" },
      { text: "التحدي الفكري", theory: "Keirsey", trait: "Rational", description: "منطقي" }
    ]
  },
  {
    id: 5,
    text: "كيف تتعامل مع الأخطاء؟",
    options: [
      { text: "أتعلم وأتحرك بسرعة", theory: "MBTI", trait: "P", description: "مدرك" },
      { text: "أحلل ما حدث بدقة", theory: "Big Five", trait: "C", description: "ضمير عالٍ" },
      { text: "أشعر بالذنب، لكنني أسامح نفسي", theory: "Rogers", trait: "A", description: "وئام" },
      { text: "أتساءل: هل هذا يثبت أنني غير كافٍ؟", theory: "Adler", trait: "Inferiority", description: "شعور بالنقص" }
    ]
  },
  {
    id: 6,
    text: "ما الذي يُشعرك بالفخر؟",
    options: [
      { text: "تحقيق نتائج ملموسة", theory: "DISC", trait: "D", description: "هيمنة" },
      { text: "دعم شخص في أزمة", theory: "MBTI", trait: "F", description: "شعور بالعطاء" },
      { text: "ابتكار فكرة جديدة", theory: "MBTI", trait: "N", description: "حدس" },
      { text: "الالتزام بالواجبات والمسؤوليات", theory: "MBTI", trait: "J", description: "حكم" }
    ]
  },
  {
    id: 7,
    text: "في قرار مهم، ما مصدر قوتك؟",
    options: [
      { text: "منطق الأرقام والحقائق", theory: "MBTI", trait: "T", description: "تفكير" },
      { text: "مشاعر القلب وتأثير القرار على الآخرين", theory: "MBTI", trait: "F", description: "شعور" },
      { text: "ما يقوله القانون أو التقاليد", theory: "MBTI", trait: "S", description: "إدراك" },
      { text: "رؤيتي المستقبلية والبصيرة", theory: "MBTI", trait: "N", description: "حدس" }
    ]
  },
  {
    id: 8,
    text: "ماذا تفعل عندما تشعر بالضغط؟",
    options: [
      { text: "أتحدى الموقف مباشرة", theory: "DISC", trait: "D", description: "هيمنة" },
      { text: "أبحث عن دعم من الآخرين", theory: "DISC", trait: "I", description: "تأثير" },
      { text: "أبتعد مؤقتًا لأعيد التفكير", theory: "DISC", trait: "S", description: "استقرار" },
      { text: "أحلل المشكلة من كل الزوايا", theory: "DISC", trait: "C", description: "ضمير" }
    ]
  },
  {
    id: 9,
    text: "ما نوع الكتب أو المحتوى الذي تفضله؟",
    options: [
      { text: "قصص نجاح، قيادة، تأثير", theory: "Keirsey", trait: "Guardian,Rational", description: "حارس، منطقي" },
      { text: "روايات، فلسفة، تأملات وجودية", theory: "Keirsey", trait: "Idealist", description: "مثالي" },
      { text: "أدلة عملية، خطوات، تقنيات", theory: "MBTI", trait: "S,J", description: "إدراك، حكم" },
      { text: "ألعاب، ألغاز، تجارب جديدة", theory: "MBTI", trait: "SP", description: "فنان" }
    ]
  },
  {
    id: 10,
    text: "ما الذي يعطيك إحساسًا بالمعنى؟",
    options: [
      { text: "تحقيق إنجازات كبيرة", theory: "Maslow", trait: "Self-actualization", description: "تحقيق الذات" },
      { text: "خدمة الآخرين", theory: "PERMA, Rogers", trait: "Meaning", description: "المعنى" },
      { text: "فهم الكون أو النظام الكوني", theory: "Keirsey", trait: "Rational", description: "منطقي" },
      { text: "الاستقرار والانتماء", theory: "Erikson", trait: "Generativity", description: "إنجابية" }
    ]
  }
];

export default personalityQuestions;
