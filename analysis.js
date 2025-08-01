// analysis.js - توليد التحليل النفسي الموسع (نسخة سردية مترابطة)

import { getQuestions } from './questions.js';
import { getZodiacSign, getHoroscopePredictions } from './zodiac.js';
import { translations, getLang } from './lang.js';

// --- دالة داخلية لحساب العمر من تاريخ الميلاد ---
function calculateAge(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (isNaN(birth.getTime())) return null;
  const diff = Date.now() - birth.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}

export function generatePersonalityAnalysis(answers, userData) {
  const { dob, gender } = userData;
  const lang = getLang();
  const t = translations[lang];

  // --- حساب العمر من تاريخ الميلاد ---
  const age = calculateAge(dob);
  let ageNarrative = "";

  if (age === null) {
    ageNarrative = t.age_unknown || "رغم أن عمرك لم يُحدد بدقة، إلا أن نمط تفكيرك يُظهر نضجًا نفسيًا واضحًا.";
  } else if (age >= 13 && age <= 18) {
    ageNarrative = t.age_teen || "أنت في مرحلة بناء الهوية، حيث تبحث عن نفسك ومكانك في العالم. كل سؤال تطرحه على ذاتك اليوم يُشكّل الأساس لما ستكون عليه غدًا.";
  } else if (age >= 19 && age <= 25) {
    ageNarrative = t.age_young || "أنت في عمر الحميمية، حيث تبحث عن علاقات حقيقية، وارتباطات عميقة. قلبك يسأل: من سيفهمني حقًا؟";
  } else if (age >= 26 && age <= 45) {
    ageNarrative = t.age_adult || "أنت في مرحلة الإنجابية، حيث لا يكفي أن تنجح أنت، بل أن تُسهم في نجاح الآخرين. أنت تبني، تُعلّم، وتُشارك.";
  } else if (age >= 46) {
    ageNarrative = t.age_wise || "أنت في مرحلة التقييم، حيث تنظر إلى رحلة حياتك بعين الحكيم. السؤال لم يعد 'ماذا أنجزت؟' بل 'ماذا عنيت؟'";
  }

  // --- تحليل DISC ---
  const colorCount = { red: 0, yellow: 0, green: 0, blue: 0 };
  const questions = getQuestions(lang);

  questions.forEach((q, i) => {
    const answerIndex = answers[i];
    if (answerIndex === undefined || answerIndex === null) return;
    const option = q.options[answerIndex];
    if (!option || !option.trait) return;

    if (option.trait.includes('D')) colorCount.red++;
    if (option.trait.includes('I')) colorCount.yellow++;
    if (option.trait.includes('S')) colorCount.green++;
    if (option.trait.includes('C')) colorCount.blue++;
  });

  // --- تحديد الشخصية المسيطرة ---
  let dominantColor = 'green';
  let max = 0;
  for (const [color, count] of Object.entries(colorCount)) {
    if (count > max) {
      max = count;
      dominantColor = color;
    }
  }

  // --- وصف الشخصية (مدمج في السرد لاحقًا) ---
  const colorProfiles = {
    red: {
      name: t.color_red_name || "شخصية حمراء",
      essence: t.color_red_essence || "القيادة، الإرادة، والنتائج",
      description: t.color_red_desc || "أنت من يصنع الفرصة ولا ينتظرها. فيك نار لا تنطفئ، وحاجة ملحة للسيطرة على مصيرك. لا تهرب من التحدي، بل تطلبه. تحب أن ترى الأثر بوضوح، والتردد يُشعرك بالإحباط. أنت صريح، لا مجامل. في الأزمات، تكون أول من يقف في المقدمة."
    },
    yellow: {
      name: t.color_yellow_name || "شخصية صفراء",
      essence: t.color_yellow_essence || "الطاقة، الإلهام، والمرح",
      description: t.color_yellow_desc || "أنت شرارة الضوء في أي مكان. طاقتك معدية، وابتسامتك سلاحك. لا ترى عقبات، بل فرصًا. تحب أن تكون محط الأنظار، ليس من أجل الغرور، بل لأنك تشعر بالحياة حين تُلهم الآخرين. الروتين يُثبّطك، أما الحرية فتُطلق إبداعك. أنت تُحدث التغيير بالحماس، لا بالقوة."
    },
    green: {
      name: t.color_green_name || "شخصية خضراء",
      essence: t.color_green_essence || "الاستقرار، الدعم، والهدوء",
      description: t.color_green_desc || "أنت القلب الهادئ في وسط العاصفة. تبني الثقة ببطء، لكنها تدوم. الصراع يُرهقك، لكنك لا تهرب — بل تسعى للتسوية. لا تطلب التقدير، لكنك تستحقه. أنت من يُكمل الفريق، من يُشعر الآخرين بالأمان. تقود بالقدوة، لا بالصراخ. تُحدث التغيير بصمت، لكن أثرك يدوم."
    },
    blue: {
      name: t.color_blue_name || "شخصية زرقاء",
      essence: t.color_blue_essence || "التحليل، الدقة، والرؤية",
      description: t.color_blue_desc || "أنت لا تُسرع، لأنك تعرف أن خطأ واحدًا قد يُكلّف الكثير. تُفكّر بعمق، تُحلّل بتركيز، وتحب أن تفهم 'لماذا' قبل أن تفعل 'كيف'. النظام يمنحك الأمان، والعشوائية تُربكك. تبحث عن المعنى وراء الأشياء. قد يراك البعض باردًا، لكنك ببساطة تحترم العقل بقدر احترامك للقلب."
    }
  };

  const profile = colorProfiles[dominantColor];

  // --- تحليل جنسي ---
  let genderNarrative = "";
  if (gender === (lang === 'ar' ? "أنثى" : "Female")) {
    genderNarrative = t.gender_female || "كأنثى، تُظهر قوة داخلية نادرة: التوازن بين القلب والعقل. أنت تُعطي دون أن تفقد ذاتك، وتدعم دون أن تذلّ نفسك.";
  } else if (gender === (lang === 'ar' ? "ذكر" : "Male")) {
    genderNarrative = t.gender_male || "كذكر، تحمل مسؤولية القيادة بثقلها وضوءها. أنت لا تهرب من التحدي، بل تراه فرصة لإثبات أن القوة الحقيقية تأتي من الداخل.";
  } else {
    genderNarrative = t.gender_other || "أنت تتجاوز التصنيفات، وتُظهر توازنًا نادرًا بين الحدس والمنطق، بين العاطفة والتحليل.";
  }

  // --- تحليل فلكي ---
  let zodiacNarrative = "";
  if (dob) {
    const zodiacSign = getZodiacSign(dob);
    const predictions = getHoroscopePredictions(zodiacSign, lang);
    zodiacNarrative = t.zodiac_intro?.replace('%SIGN%', zodiacSign) || `وُلدتَ تحت برج ${zodiacSign}، وهو ما يُضيف إلى شخصيتك لمسة من الجرأة، التفاؤل، والطموح.`;
    zodiacNarrative += ` ${t.zodiac_weekly_label || "تنبؤك الأسبوعي"}: "${predictions.weekly}"`;
  }

  // --- التحليل السردي النهائي (مترابط، جذاب، وشبه بشرى) ---
  const analysis = `
          ${profile.name.toUpperCase()}
          ${"=".repeat(profile.name.length + 10)}

        ${ageNarrative}

        ${genderNarrative}

        ${profile.description}

        أنت لست مجرد مزيج من الصفات، بل ظاهرة نفسية فريدة. ما يميّزك ليس فقط ما تفعله، بل كيف تفكر، وكيف تتفاعل مع العالم من حولك. فيك قدرة نادرة على التوازن: بين القوة والهدوء، بين الإصرار والتعاطف، بين الطموح والمعنى.

        ${zodiacNarrative ? `\n        ${zodiacNarrative}` : ""}

        أنت لا تُظهر كل ما في داخلك، لكن من يراقبك جيدًا يلاحظ أن في عينيك بريقًا لا يُطفأ. تُخطط بصمت، وتُقرر بثقة. أخطاؤك لا تُكسرك، بل تُعلّمك. ونجاحاتك لا تُغررك، بل تُذكّرك بأن الطريق لا ينتهي.

        أنت تبحث عن المعنى أكثر من التقدير. عن التأثير أكثر من الشهرة. عن الاستقرار الداخلي أكثر من الظهور الخارجي. وهذا ما يجعلك مختلفًا.

        في عالم مليء بالضجيج، أنت من يُحدث تغييرًا حقيقيًا. ليس بالصراخ، بل بالوجود. ليس بالسيطرة، بل بالتأثير. أنت لست مجرد شخصية، بل ظاهرة.

---

        ${t.sources_title || "المصادر النفسية المستخدمة في التحليل"}:
        - ${t.source_disc || "نظرية DISC للسلوك البشري"}
        - ${t.source_mbti || "نظرية MBTI (مايرز-بريجز)"}
        - ${t.source_bigfive || "نظرية العوامل الخمسة الكبرى (Big Five)"}
        - ${t.source_adler || "نظرية أدلر (الشعور بالنقص والسعي للتفوق)"}
        - ${t.source_maslow || "نظرية ماسلو (هرم الحاجات)"}
        - ${t.source_erikson || "نظرية إريكسون (المراحل النفسية الاجتماعية)"}
        - ${t.source_perma || "نظرية PERMA (مكونات الرفاهية النفسية)"}
        - ${t.source_flow || "نظرية الانغماس (Flow) - ميهل يتشينتنهامي"}

        ${t.report_prepared || "تم إعداد هذا التقرير بعناية من قِبل"}:  
        **${t.chamber_name || "غرفة الأسرار | Chamber of Secrets"}**  
        ${t.developed_by || "تم التصميم والتحليل النفسي والتطوير من قبل"}:  
        **Mohammed Tarek**  
        © 2025 ${t.all_rights || "جميع الحقوق محفوظة"}.
  `.trim();

  return analysis;
}
