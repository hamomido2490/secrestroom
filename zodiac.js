// zodiac.js - الأبراج والتنبؤات اليومية/الأسبوعية/السنوية

import { translations, getLang } from './lang.js';

/**
 * تحديد برج الشمس من تاريخ الميلاد
 * @param {string} dob - تاريخ الميلاد (مثل: "1995-04-15")
 * @returns {string} اسم البرج بالعربية (مثل: "الحمل")
 */
export function getZodiacSign(dob) {
  if (!dob) return "غير معروف";
  
  const date = new Date(dob);
  if (isNaN(date.getTime())) return "غير معروف";

  export function getZodiacSign(dob) {
  if (!dob) return "unknown";
  const date = new Date(dob);
  if (isNaN(date.getTime())) return "unknown";

  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "pisces";
  return "unknown";
}
}

/**
 * جلب التنبؤات اليومية/الأسبوعية/السنوية لبرج معين
 * @param {string} zodiacSign - اسم البرج (مثل: "الحمل")
 * @param {string} lang - اللغة (ar أو en)
 * @returns {Object} { daily, weekly, yearly }
 */
export function getHoroscopePredictions(zodiacSign, lang = getLang()) {
  const t = translations[lang];
  const today = new Date().getDate();

  // --- التنبؤات اليومية (مصفوفة لاختيار واحدة عشوائيًا) ---
  const dailyPredictions = {
    ar: {
      "الحمل": [
        t.zodiac_daily_aries_1 || "ستكون لديك طاقة عالية اليوم.",
        t.zodiac_daily_aries_2 || "فرصة للبدء بشيء جديد.",
        t.zodiac_daily_aries_3 || "كن حذرًا من التسرع في القرارات."
      ],
      "الثور": [
        t.zodiac_daily_taurus_1 || "اليوم مناسب للعمل الهادئ.",
        t.zodiac_daily_taurus_2 || "اهتم بصحتك الجسدية.",
        t.zodiac_daily_taurus_3 || "لا تؤجل المهام المهمة."
      ],
      "الجوزاء": [
        t.zodiac_daily_gemini_1 || "ستكون اجتماعيًا جدًا اليوم.",
        t.zodiac_daily_gemini_2 || "رسالة غير متوقعة ستُسعدك.",
        t.zodiac_daily_gemini_3 || "راقب نفقاتك."
      ],
      "السرطان": [
        t.zodiac_daily_cancer_1 || "الانسجام العائلي في ذروته.",
        t.zodiac_daily_cancer_2 || "يوم مناسب للتأمل.",
        t.zodiac_daily_cancer_3 || "كن صبورًا مع نفسك."
      ],
      "الأسد": [
        t.zodiac_daily_leo_1 || "سيُقدّر جهودك اليوم.",
        t.zodiac_daily_leo_2 || "فرصة للظهور والتحدث.",
        t.zodiac_daily_leo_3 || "لا تخف من التعبير عن رأيك."
      ],
      "العذراء": [
        t.zodiac_daily_virgo_1 || "اليوم مناسب للتنظيم.",
        t.zodiac_daily_virgo_2 || "انتبه للتفاصيل الصغيرة.",
        t.zodiac_daily_virgo_3 || "استخدم منطقك في كل قرار."
      ],
      "الميزان": [
        t.zodiac_daily_libra_1 || "ستحتاج لاتخاذ قرار مهم.",
        t.zodiac_daily_libra_2 || "التوازن بين العمل والحياة أساسي.",
        t.zodiac_daily_libra_3 || "استعن بصديق موثوق."
      ],
      "العقرب": [
        t.zodiac_daily_scorpio_1 || "ستكتشف حقيقة مهمة.",
        t.zodiac_daily_scorpio_2 || "كن حذرًا من الأشخاص الجدد.",
        t.zodiac_daily_scorpio_3 || "الحدس سيكون دليلك."
      ],
      "القوس": [
        t.zodiac_daily_sagittarius_1 || "مغامرة جديدة في انتظارك.",
        t.zodiac_daily_sagittarius_2 || "يوم مناسب للسفر أو التعلم.",
        t.zodiac_daily_sagittarius_3 || "كن متفائلًا."
      ],
      "الجدي": [
        t.zodiac_daily_capricorn_1 || "الانضباط سيقودك للنجاح.",
        t.zodiac_daily_capricorn_2 || "لا تهمل واجباتك.",
        t.zodiac_daily_capricorn_3 || "العمل الجاد سيُكافأ."
      ],
      "الدلو": [
        t.zodiac_daily_aquarius_1 || "فكرة مبتكرة ستغير كل شيء.",
        t.zodiac_daily_aquarius_2 || "كن مستعدًا للتغيير.",
        t.zodiac_daily_aquarius_3 || "لا تخف من التفكير خارج الصندوق."
      ],
      "الحوت": [
        t.zodiac_daily_pisces_1 || "الحدس سيكون دليلك.",
        t.zodiac_daily_pisces_2 || "كن حذرًا من الأوهام.",
        t.zodiac_daily_pisces_3 || "الاسترخاء ضروري اليوم."
      ]
    },
    en: {
      "الحمل": [
        t.zodiac_daily_aries_1 || "You'll have high energy today.",
        t.zodiac_daily_aries_2 || "A chance to start something new.",
        t.zodiac_daily_aries_3 || "Be careful not to rush decisions."
      ],
      // ... يمكن إكمال باقي الأبراج بنفس الطريقة
      "الثور": ["A quiet day is suitable for work.", "Take care of your physical health.", "Don't delay important tasks."]
      // (تم تقصير النسخة الإنجليزية للإيجاز)
    }
  };

  // --- التنبؤات الأسبوعية ---
  const weeklyPredictions = {
    ar: {
      "الحمل": t.zodiac_weekly_aries || "ستواجه فرصًا جديدة للقيادة. استغلها بثقة.",
      "الثور": t.zodiac_weekly_taurus || "الاستقرار المالي سيكون في متناول يدك. خطط بحكمة.",
      "الجوزاء": t.zodiac_weekly_gemini || "ستكون اجتماعيًا أكثر من المعتاد. استمتع بالتفاعل.",
      "السرطان": t.zodiac_weekly_cancer || "الانسجام العائلي سيكون في ذروته. اقضِ وقتًا مع أحبائك.",
      "الأسد": t.zodiac_weekly_leo || "سيُقدّر جهودك. لا تخف من المطالبة باستحقاقاتك.",
      "العذراء": t.zodiac_weekly_virgo || "الدقة ستُكافأ. ركّز على التفاصيل الصغيرة.",
      "الميزان": t.zodiac_weekly_libra || "ستحتاج إلى اتخاذ قرار مهم. استعن بمن تثق بهم.",
      "العقرب": t.zodiac_weekly_scorpio || "ستكتشف حقيقة مهمة. استخدمها بحكمة.",
      "القوس": t.zodiac_weekly_sagittarius || "مغامرة جديدة في انتظارك. كن مستعدًا.",
      "الجدي": t.zodiac_weekly_capricorn || "الانضباط سيقودك للنجاح. تمسك بخطتك.",
      "الدلو": t.zodiac_weekly_aquarius || "فكرة مبتكرة ستغير كل شيء. لا تتردد في تنفيذها.",
      "الحوت": t.zodiac_weekly_pisces || "الحدس سيكون دليلك. اعتمد على مشاعرك."
    },
    en: {
      "الحمل": t.zodiac_weekly_aries || "You will face new leadership opportunities. Seize them with confidence.",
      "الثور": t.zodiac_weekly_taurus || "Financial stability is within reach. Plan wisely.",
      // ... يمكن إكمالها لاحقًا
    }
  };

  // --- التنبؤات السنوية ---
  const yearlyPredictions = {
    ar: {
      "الحمل": t.zodiac_yearly_aries || "سنة مليئة بالتحديات والفرص. ستكون قائدًا في مجالك.",
      "الثور": t.zodiac_yearly_taurus || "سنة الاستقرار والنمو المالي. استثمر بحكمة.",
      "الجوزاء": t.zodiac_yearly_gemini || "سنة التعلم والاتصال. اقرأ كثيرًا وتحدث مع الناس.",
      "السرطان": t.zodiac_yearly_cancer || "سنة العائلة والمشاعر. اهتم بمن حولك.",
      "الأسد": t.zodiac_yearly_leo || "سنة النجاح والاعتراف. لا تخف من الظهور.",
      "العذراء": t.zodiac_yearly_virgo || "سنة التفاصيل والدقة. خطط لكل شيء.",
      "الميزان": t.zodiac_yearly_libra || "سنة التوازن والعلاقات. اختر شريكك بعناية.",
      "العقرب": t.zodiac_yearly_scorpio || "سنة التحول والقوة. تجاوز مخاوفك.",
      "القوس": t.zodiac_yearly_sagittarius || "سنة المغامرة والسفر. اكتشف العالم.",
      "الجدي": t.zodiac_yearly_capricorn || "سنة العمل الجاد. النتائج قادمة.",
      "الدلو": t.zodiac_yearly_aquarius || "سنة الابتكار. أفكارك ستغير شيئًا ما.",
      "الحوت": t.zodiac_yearly_pisces || "سنة الروحانية والإبداع. ثق بحدسك."
    },
    en: {
      "الحمل": t.zodiac_yearly_aries || "A year full of challenges and opportunities. You will lead in your field.",
      "الثور": t.zodiac_yearly_taurus || "A year of stability and financial growth. Invest wisely.",
      // ... يمكن إكمالها
    }
  };

  // --- اختيار تنبؤ يومي عشوائي ---
  const dailyArray = dailyPredictions[lang]?.[zodiacSign] || [];
  const dailyIndex = Math.abs((zodiacSign.charCodeAt(0) + today) % (dailyArray.length || 1));
  const daily = dailyArray[dailyIndex] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead.");

  return {
    daily,
    weekly: weeklyPredictions[lang]?.[zodiacSign] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead."),
    yearly: yearlyPredictions[lang]?.[zodiacSign] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead.")
  };
}
