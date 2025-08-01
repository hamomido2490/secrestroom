// zodiac.js - الأبراج والتنبؤات اليومية/الأسبوعية/السنوية

import { translations, getLang } from './lang.js';

export function getZodiacSign(dob) {
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "الحمل";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "الثور";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "الجوزاء";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "السرطان";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "الأسد";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "العذراء";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "الميزان";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "العقرب";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "القوس";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "الجدي";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "الدلو";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "الحوت";
  return "غير معروف";
}

export function getHoroscopePredictions(zodiacSign, lang = getLang()) {
  // نفس البيانات من الكود الأصلي (daily/weekly/yearly)
  const dailyPredictions = {
    ar: {
      "الحمل": ["ستكون لديك طاقة عالية اليوم.", "فرصة للبدء بشيء جديد.", "كن حذرًا من التسرع في القرارات."],
      "الثور": ["اليوم مناسب للعمل الهادئ.", "اهتم بصحتك الجسدية.", "لا تؤجل المهام المهمة."],
      "الجوزاء": ["ستكون اجتماعيًا جدًا اليوم.", "رسالة غير متوقعة ستُسعدك.", "راقب نفقاتك."],
      "السرطان": ["الانسجام العائلي في ذروته.", "يوم مناسب للتأمل.", "كن صبورًا مع نفسك."],
      "الأسد": ["سيُقدّر جهودك اليوم.", "فرصة للظهور والتحدث.", "لا تخف من التعبير عن رأيك."],
      "العذراء": ["اليوم مناسب للتنظيم.", "انتبه للتفاصيل الصغيرة.", "استخدم منطقك في كل قرار."],
      "الميزان": ["ستحتاج لاتخاذ قرار مهم.", "التوازن بين العمل والحياة أساسي.", "استعن بصديق موثوق."],
      "العقرب": ["ستكتشف حقيقة مهمة.", "كن حذرًا من الأشخاص الجدد.", "الحدس سيكون دليلك."],
      "القوس": ["مغامرة جديدة في انتظارك.", "يوم مناسب للسفر أو التعلم.", "كن متفائلًا."],
      "الجدي": ["الانضباط سيقودك للنجاح.", "لا تهمل واجباتك.", "العمل الجاد سيُكافأ."],
      "الدلو": ["فكرة مبتكرة ستغير كل شيء.", "كن مستعدًا للتغيير.", "لا تخف من التفكير خارج الصندوق."],
      "الحوت": ["الحدس سيكون دليلك.", "كن حذرًا من الأوهام.", "الاسترخاء ضروري اليوم."]
    },
    en: {
      "الحمل": ["You'll have high energy today.", "A chance to start something new.", "Be careful not to rush decisions."],
      "الثور": ["A quiet day is suitable for work.", "Take care of your physical health.", "Don't delay important tasks."],
      "الجوزاء": ["You'll be very social today.", "An unexpected message will make you happy.", "Watch your expenses."],
      "السرطان": ["Family harmony is at its peak.", "A day suitable for reflection.", "Be patient with yourself."],
      "الأسد": ["Your efforts will be appreciated today.", "A chance to speak up.", "Don't hesitate to express your opinion."],
      "العذراء": ["A good day for organization.", "Pay attention to small details.", "Use logic in every decision."],
      "الميزان": ["You'll need to make an important decision.", "Balance between work and life is key.", "Consult a trusted friend."],
      "العقرب": ["You'll discover an important truth.", "Be cautious with new people.", "Your intuition will guide you."],
      "القوس": ["A new adventure awaits you.", "A good day for travel or learning.", "Stay optimistic."],
      "الجدي": ["Discipline will lead you to success.", "Don't neglect your duties.", "Hard work will be rewarded."],
      "الدلو": ["An innovative idea will change everything.", "Be ready for change.", "Don't be afraid to think outside the box."],
      "الحوت": ["Your intuition will be your guide.", "Be careful of illusions.", "Relaxation is essential today."]
    }
  };
  const weeklyPredictions = {
    ar: {
      "الحمل": "ستواجه فرصًا جديدة للقيادة. استغلها بثقة.",
      "الثور": "الاستقرار المالي سيكون في متناول يدك. خطط بحكمة.",
      "الجوزاء": "ستكون اجتماعيًا أكثر من المعتاد. استمتع بالتفاعل.",
      "السرطان": "الانسجام العائلي سيكون في ذروته. اقضِ وقتًا مع أحبائك.",
      "الأسد": "سيُقدّر جهودك. لا تخف من المطالبة باستحقاقاتك.",
      "العذراء": "الدقة ستُكافأ. ركّز على التفاصيل الصغيرة.",
      "الميزان": "ستحتاج إلى اتخاذ قرار مهم. استعن بمن تثق بهم.",
      "العقرب": "ستكتشف حقيقة مهمة. استخدمها بحكمة.",
      "القوس": "مغامرة جديدة في انتظارك. كن مستعدًا.",
      "الجدي": "الانضباط سيقودك للنجاح. تمسك بخطتك.",
      "الدلو": "فكرة مبتكرة ستغير كل شيء. لا تتردد في تنفيذها.",
      "الحوت": "الحدس سيكون دليلك. اعتمد على مشاعرك."
    },
    en: {
      "الحمل": "You will face new leadership opportunities. Seize them with confidence.",
      "الثور": "Financial stability is within reach. Plan wisely.",
      "الجوزاء": "You'll be more social than usual. Enjoy the interaction.",
      "السرطان": "Family harmony will peak. Spend time with loved ones.",
      "الأسد": "Your efforts will be appreciated. Don't hesitate to claim your dues.",
      "العذراء": "Precision will be rewarded. Focus on the small details.",
      "الميزان": "You'll need to make an important decision. Consult trusted ones.",
      "العقرب": "You'll discover a crucial truth. Use it wisely.",
      "القوس": "A new adventure awaits. Be ready.",
      "الجدي": "Discipline will lead you to success. Stick to your plan.",
      "الدلو": "An innovative idea will change everything. Don't hesitate to execute it.",
      "الحوت": "Intuition will be your guide. Trust your feelings."
    }
  };
  const yearlyPredictions = {
    ar: {
      "الحمل": "سنة مليئة بالتحديات والفرص. ستكون قائدًا في مجالك.",
      "الثور": "سنة الاستقرار والنمو المالي. استثمر بحكمة.",
      "الجوزاء": "سنة التعلم والاتصال. اقرأ كثيرًا وتحدث مع الناس.",
      "السرطان": "سنة العائلة والمشاعر. اهتم بمن حولك.",
      "الأسد": "سنة النجاح والاعتراف. لا تخف من الظهور.",
      "العذراء": "سنة التفاصيل والدقة. خطط لكل شيء.",
      "الميزان": "سنة التوازن والعلاقات. اختر شريكك بعناية.",
      "العقرب": "سنة التحول والقوة. تجاوز مخاوفك.",
      "القوس": "سنة المغامرة والسفر. اكتشف العالم.",
      "الجدي": "سنة العمل الجاد. النتائج قادمة.",
      "الدلو": "سنة الابتكار. أفكارك ستغير شيئًا ما.",
      "الحوت": "سنة الروحانية والإبداع. ثق بحدسك."
    },
    en: {
      "الحمل": "A year full of challenges and opportunities. You will lead in your field.",
      "الثور": "A year of stability and financial growth. Invest wisely.",
      "الجوزاء": "A year of learning and communication. Read and talk to people.",
      "السرطان": "A year of family and emotions. Care for your loved ones.",
      "الأسد": "A year of success and recognition. Don't fear the spotlight.",
      "العذراء": "A year of details and precision. Plan everything.",
      "الميزان": "A year of balance and relationships. Choose your partner wisely.",
      "العقرب": "A year of transformation and power. Overcome your fears.",
      "القوس": "A year of adventure and travel. Explore the world.",
      "الجدي": "A year of hard work. Results are coming.",
      "الدلو": "A year of innovation. Your ideas will change something.",
      "الحوت": "A year of spirituality and creativity. Trust your intuition."
    }
  };
  const today = new Date().getDate();
  const dailyIndex = (zodiacSign.charCodeAt(0) + today) % 3;
  const daily = (dailyPredictions[lang][zodiacSign] || [])[dailyIndex] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead.");

  return {
    daily: daily,
    weekly: weeklyPredictions[lang][zodiacSign] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead."),
    yearly: yearlyPredictions[lang][zodiacSign] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead.")
  };
}