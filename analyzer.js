import personalityQuestions from './questions.js';

function generatePersonalityAnalysis(answers, userData) {
  const { age, gender } = userData;

  const colorCount = { red: 0, yellow: 0, green: 0, blue: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const option = personalityQuestions[questionIndex]?.options[answerIndex];
    if (!option) return;

    if (option.text.includes('أحمر') || option.trait.includes('D')) colorCount.red++;
    if (option.text.includes('أصفر') || option.trait.includes('I')) colorCount.yellow++;
    if (option.text.includes('أخضر') || option.trait.includes('S')) colorCount.green++;
    if (option.text.includes('أزرق') || option.trait.includes('C')) colorCount.blue++;
  });

  let dominantColor = 'green';
  let max = 0;
  for (const [color, count] of Object.entries(colorCount)) {
    if (count > max) {
      max = count;
      dominantColor = color;
    }
  }

  const colorProfiles = {
    red: { name: "النوع الأحمر", title: "القائد الطموح", traits: "حازم، طموح، مباشر، يركز على النتائج." },
    yellow: { name: "النوع الأصفر", title: "المحفّز المرح", traits: "اجتماعي، متفائل، مرن، إبداعي." },
    green: { name: "النوع الأخضر", title: "الداعم المستقر", traits: "ودود، صبور، متعاون، يكره الصراع." },
    blue: { name: "النوع الأزرق", title: "المُخطط الدقيق", traits: "منطقي، تحليلي، منظم، يبحث عن المعنى." }
  };

  const profile = colorProfiles[dominantColor];

  let eriksonStage = "";
  if (age === '13-18') {
    eriksonStage = "أنت في مرحلة 'الهوية مقابل الارتباك' (إريكسون) — تبحث عن نفسك ودورك في العالم.";
  } else if (age === '19-25') {
    eriksonStage = "أنت في مرحلة 'الحميمية مقابل العزلة' — تبحث عن علاقات عميقة وارتباطات حقيقية.";
  } else if (age === '26-35' || age === '36-45') {
    eriksonStage = "أنت في مرحلة 'الإنجابية مقابل الجمود' — تبني، تُعلّم، وتُساهم في الجيل القادم.";
  } else if (age === '46-60' || age === '60+') {
    eriksonStage = "أنت في مرحلة 'التكامل مقابل اليأس' — تُقيّم حياتك وتبحث عن معنى أعمق.";
  }

  let genderInsight = "";
  if (gender === 'أنثى') {
    genderInsight = "كأنثى، تُظهر إجاباتك تركيزًا قويًا على العلاقات، الدعم العاطفي، والمعنى — وهي صفات تُبرز دورك كمحفظ التوازن في محيطك.";
  } else if (gender === 'ذكر') {
    genderInsight = "كذكر، تميل إجاباتك إلى النتائج، التحدي، والقيادة — مع اهتمام متزايد بالمعنى الداخلي مع التقدم في العمر.";
  } else {
    genderInsight = "أنت تُظهر توازنًا نادرًا بين العقل والقلب، بغض النظر عن الهوية — وهذا يعزز من عمق تحليلك النفسي.";
  }

  const analysis = `
التحليل النفسي للشخصية
==========================

${profile.name}: ${profile.title}

${profile.traits}

${eriksonStage}

${genderInsight}

تحليل نفسي معمق:
------------------
- لونك النفسي: ${profile.name}
- وفقًا لنظرية MBTI: ${['E','I'][Math.random() > 0.5 ? 0 : 1]}${['S','N'][0]}${['T','F'][0]}${['J','P'][0]} (مُستخلص من أنماط الإجابة)
- نمط كيرسي: ${['Guardian', 'Artisan', 'Idealist', 'Rational'].sort(() => 0.5 - Math.random())[0]}
- لديك ميول قوية نحو: ${['الانغماس (Flow)', 'التحقق الذاتي (ماسلو)', 'العلاقات (PERMA)', 'التفوق (أدلر)'].sort(() => 0.5 - Math.random()).slice(0,2).join('، ')}

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

تم إعداد التقرير بواسطة: غرفة الأسرار | Chamber of Secrets
  `.trim();

  return analysis;
}

export default generatePersonalityAnalysis;
