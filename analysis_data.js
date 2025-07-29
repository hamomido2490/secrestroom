// analyzer.js
// تحليل الشخصية بناءً على الإجابات - تقرير شبه بشري

import personalityQuestions from './questions.js';

// دالة رئيسية لتوليد التحليل
function generatePersonalityAnalysis(answers) {
  /*
   * answers: مصفوفة من أرقام (اختيار كل سؤال من 0 إلى 3)
   * مثال: [0, 2, 1, 3, ...] حسب الفهرس في options
   */

  // عدّ الاختيارات حسب لون الشخصية (من السؤال 11 أو من الأنماط)
  const colorCount = { red: 0, yellow: 0, green: 0, blue: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const option = personalityQuestions[questionIndex]?.options[answerIndex];
    if (!option) return;

    if (option.text.includes('أحمر') || option.trait === 'D') colorCount.red++;
    if (option.text.includes('أصفر') || option.trait === 'I') colorCount.yellow++;
    if (option.text.includes('أخضر') || option.trait === 'S') colorCount.green++;
    if (option.text.includes('أزرق') || option.trait === 'C') colorCount.blue++;
  });

  // تحديد لون الشخصية المسيطر
  let dominantColor = 'green';
  let max = 0;
  for (const [color, count] of Object.entries(colorCount)) {
    if (count > max) {
      max = count;
      dominantColor = color;
    }
  }

  // خرائط الألوان إلى الصفات
  const colorProfiles = {
    red: {
      name: "النوع الأحمر",
      title: "القائد الطموح",
      traits: "حازم، طموح، مباشر، يركز على النتائج، يحب السيطرة، واثق، صاحب قرار.",
      style: "تُقدّر الكفاءة أكثر من التفاصيل. تكره الفوضى وتحب أن تتحرك الأمور بسرعة. أنت من يبدأ، يقود، ويُنهي."
    },
    yellow: {
      name: "النوع الأصفر",
      title: "المحفّز المرح",
      traits: "اجتماعي، متفائل، مرن، إبداعي، مليء بالطاقة، يحب الاعتراف.",
      style: "أنت بطل الجلسات، تُضيء المكان بحضورك. تحب الحرية، تكره الروتين، وتحتاج إلى الإلهام والتقدير."
    },
    green: {
      name: "النوع الأخضر",
      title: "الداعم المستقر",
      traits: "ودود، صبور، متعاون، مستقر، يكره الصراع، مخلص، مُستمع جيد.",
      style: "أنت القلب الهادئ في أي فريق. تُقدّر العلاقات، تُكمل الآخرين، وتعمل من وراء الكواليس دون ضجيج."
    },
    blue: {
      name: "النوع الأزرق",
      title: "المُخطط الدقيق",
      traits: "منطقي، تحليلي، منظم، دقيق، يحب التخطيط، يهتم بالجودة، يبحث عن المعنى.",
      style: "أنت تفكر قبل أن تتصرف. تحب الأنظمة، تكره العشوائية، وتحتاج إلى فهم الصورة الكاملة قبل اتخاذ قرار."
    }
  };

  const profile = colorProfiles[dominantColor];

  // احسب مؤشرات نظرية أخرى
  let mbti = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  let theories = {
    adler: 0,
    erikson: 0,
    maslow: 0,
    rogers: 0,
    bigFive: { C: 0, E: 0, O: 0, A: 0, N: 0 },
    disc: { D: 0, I: 0, S: 0, C: 0 },
    keirsey: { Guardian: 0, Artisan: 0, Idealist: 0, Rational: 0 },
    flow: 0,
    perma: 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    const option = personalityQuestions[questionIndex]?.options[answerIndex];
    if (!option) return;

    // MBTI
    if (option.trait.includes('E')) mbti.E++;
    if (option.trait.includes('I')) mbti.I++;
    if (option.trait.includes('S')) mbti.S++;
    if (option.trait.includes('N')) mbti.N++;
    if (option.trait.includes('T')) mbti.T++;
    if (option.trait.includes('F')) mbti.F++;
    if (option.trait.includes('J')) mbti.J++;
    if (option.trait.includes('P')) mbti.P++;

    // DISC
    if (option.trait === 'D') theories.disc.D++;
    if (option.trait === 'I') theories.disc.I++;
    if (option.trait === 'S') theories.disc.S++;
    if (option.trait === 'C') theories.disc.C++;

    // Keirsey
    if (option.trait.includes('Guardian')) theories.keirsey.Guardian++;
    if (option.trait.includes('Artisan')) theories.keirsey.Artisan++;
    if (option.trait.includes('Idealist')) theories.keirsey.Idealist++;
    if (option.trait.includes('Rational')) theories.keirsey.Rational++;

    // Big Five
    if (option.trait === 'C') theories.bigFive.C++;
    if (option.trait === 'E') theories.bigFive.E++;
    if (option.trait === 'O') theories.bigFive.O++;
    if (option.trait === 'A') theories.bigFive.A++;
    if (option.trait === 'N') theories.bigFive.N++;

    // Other theories
    if (option.theory.includes('Adler')) theories.adler++;
    if (option.theory.includes('Erikson')) theories.erikson++;
    if (option.theory.includes('Maslow')) theories.maslow++;
    if (option.theory.includes('Rogers')) theories.rogers++;
    if (option.theory.includes('Flow')) theories.flow++;
    if (option.theory.includes('PERMA')) theories.perma++;
  });

  // توليد تقرير بشري
  const mbtiType = 
    (mbti.E > mbti.I ? 'E' : 'I') +
    (mbti.S > mbti.N ? 'S' : 'N') +
    (mbti.T > mbti.F ? 'T' : 'F') +
    (mbti.J > mbti.P ? 'J' : 'P');

  const keirseyType = Object.keys(theories.keirsey).reduce((a, b) => theories.keirsey[a] > theories.keirsey[b] ? a : b);

  // === التقرير النهائي ===
  const analysis = `
التحليل النفسي للشخصية
==========================

${profile.name}: ${profile.title}

${profile.style}

أنت شخصية تُقدّر ${{
  red: "النتائج، التحدي، والقيادة.",
  yellow: "الحرية، التفاعل، والتقدير.",
  green: "الاستقرار، الدعم، والولاء.",
  blue: "الدقة، الفهم، والمعنى."
}[dominantColor]}

في بيئة العمل، أنت غالبًا ما تُنظر إليك كـ:
- ${profile.traits.split('، ')[0]} و${profile.traits.split('، ')[1]}

تحليل نفسي معمق:
------------------
- وفقًا لنظرية **MBTI**، أنماطك تشير إلى: ${mbtiType}
- حسب **نظرية كيرسي**، أنت من النوع: ${keirseyType}
- في **نظرية DISC**، لديك هيمنة على نمط: ${Object.keys(theories.disc).reduce((a, b) => theories.disc[a] > theories.disc[b] ? a : b)}
- مستوى الـ **Big Five** يُظهر أنك: 
  - ضمير عالٍ: ${theories.bigFive.C > 2 ? 'نعم' : 'متوسط'}
  - انفتاح: ${theories.bigFive.O > 2 ? 'عالي' : 'متوسط'}
  - انبساط: ${theories.bigFive.E > 2 ? 'عالي' : 'منخفض'}
  - وئام: ${theories.bigFive.A > 2 ? 'عالي' : 'متوسط'}
  - عصابية: ${theories.bigFive.N > 2 ? 'متوسطة إلى عالية' : 'منخفضة'}

- تُظهر إجاباتك علامات على:
  ${theories.adler > 2 ? "شعور بالنقص وسعي للتفوق (نظرية أدلر)" : ""}
  ${theories.maslow > 2 ? "سعي نحو تحقيق الذات (ماسلو)" : ""}
  ${theories.rogers > 2 ? "بحث عن التحقق الذاتي (روجرز)" : ""}
  ${theories.flow > 2 ? "تجربة حالات انغماس (Flow) عند التحدي المتوازن" : ""}
  ${theories.perma > 2 ? "اهتمام بالعلاقات والمعنى (PERMA)" : ""}

خلاصة:
--------
أنت شخصية مُركبة، لكن لونك النفسي المسيطر هو **${profile.name}**، وهذا يشرح الكثير عن طريقة تفكيرك، اتخاذ قراراتك، وتفاعلك مع العالم. سواء كنت تقود، تُلهم، تدعم، أو تُحلل — فإنك تُحدث فرقًا بطريقتك الخاصة.

تم بناء هذا التحليل بناءً على النظريات التالية:
- نظرية الألوان الشخصية
- نظرية MBTI (مايرز-برiggs)
- نظرية كيرسي للنُظم
- نظرية DISC
- نظرية العوامل الخمسة الكبرى (Big Five)
- نظرية أدلر (الشعور بالنقص)
- نظرية ماسلو (سلم الحاجات)
- نظرية روجرز (التحقق الذاتي)
- نظرية PERMA (الرفاهية النفسية)
- نظرية Flow (الانغماس)
- نظرية إريكسون (المراحل النفسية الاجتماعية)

تم إعداد التقرير بواسطة: نظام تحليل الشخصية الذكي
`;

  return analysis.trim();
}

// تصدير الدالة
export default generatePersonalityAnalysis;
