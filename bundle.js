// bundle.js - غرفة الأسرار | تحليل دقيق، 20 سؤال، أبراج، تنبؤات، وإعلانات ذكية
// تم التصميم والتطوير من قبل: Mohammed Tarek

// --- تحقق من أن الموقع يعمل أونلاين فقط ---
(function () {
  if (!window.location.protocol.startsWith('http')) {
    document.body.innerHTML = `
      <div style="text-align: center; padding: 50px; font-family: 'Segoe UI', sans-serif; direction: rtl; background: #0f172a; color: #e2e8f0;">
        <h2>🚫 الموقع يعمل فقط أونلاين</h2>
        <p>للحصول على التحليل، يرجى زيارة الموقع من الإنترنت.</p>
      </div>
    `;
    throw new Error("الموقع يعمل فقط أونلاين");
  }
  function checkOnline() {
    if (!navigator.onLine) {
      document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; font-family: 'Segoe UI', sans-serif; direction: rtl; background: #0f172a; color: #e2e8f0;">
          <h2>🔴 لا يوجد اتصال بالإنترنت</h2>
          <p>تحقق من اتصالك وحاول مرة أخرى.</p>
          <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer;">
            أعد المحاولة
          </button>
        </div>
      `;
    }
  }
  checkOnline();
  window.addEventListener('online', checkOnline);
  window.addEventListener('offline', checkOnline);
})();

// --- نظام الترجمة ---
const Lang = {
  current: localStorage.getItem('lang') || 'ar',
  init: function () {
    const saved = localStorage.getItem('lang');
    if (saved === 'ar' || saved === 'en') {
      this.current = saved;
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      this.current = browserLang.startsWith('ar') ? 'ar' : 'en';
    }
    this.apply();
    this.addSwitcher();
    this.bind();
  },
  addSwitcher: function () {
    if (document.getElementById('langToggle')) return;
    const btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.title = 'Change Language';
    btn.style.cssText = `
      position: fixed; top: 20px; left: 20px; z-index: 1000;
      background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid #fbbf24;
      padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 1rem;
    `;
    btn.textContent = this.current === 'ar' ? 'EN' : 'AR';
    document.body.appendChild(btn);
  },
  apply: function () {
    const t = this.translations[this.current];
    if (!t) return;

    // تحديث النصوص
    if (document.querySelector('#userInfo h3:nth-of-type(1)')) document.querySelector('#userInfo h3:nth-of-type(1)').textContent = t.welcome_title;
    if (document.querySelector('#userInfo h3:nth-of-type(2)')) document.querySelector('#userInfo h3:nth-of-type(2)').textContent = t.user_info_title;
    if (document.querySelector('#userInfo p')) document.querySelector('#userInfo p').textContent = t.user_info_desc;
    if (document.querySelector('#age')) document.querySelector('#age').previousElementSibling.textContent = t.age_label;
    if (document.querySelector('#gender')) document.querySelector('#gender').previousElementSibling.textContent = t.gender_label;
    if (document.querySelector('#submitUserInfo')) document.querySelector('#submitUserInfo').textContent = t.submit_user_info;
    if (document.querySelector('#intro h1')) document.querySelector('#intro h1').textContent = t.intro_title;
    if (document.querySelector('#intro h2')) document.querySelector('#intro h2').textContent = t.intro_subtitle;
    if (document.querySelector('#intro .divider + p')) document.querySelector('#intro .divider + p').textContent = t.intro_desc;
    if (document.querySelectorAll('#intro p')[0]) document.querySelectorAll('#intro p')[0].textContent = t.intro_p1;
    if (document.querySelectorAll('#intro p')[1]) document.querySelectorAll('#intro p')[1].textContent = t.intro_p2;
    if (document.querySelector('#startBtn')) document.querySelector('#startBtn').textContent = t.start_btn;
    if (document.querySelector('#nextBtn')) document.querySelector('#nextBtn').textContent = t.next_btn;
    if (document.querySelector('#restartBtn')) document.querySelector('#restartBtn').textContent = t.restart_btn;
    if (document.querySelector('footer p:nth-of-type(1)')) document.querySelector('footer p:nth-of-type(1)').textContent = t.footer1;
    if (document.querySelector('footer p:nth-of-type(2)')) document.querySelector('footer p:nth-of-type(2)').textContent = t.footer2;

    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = this.current === 'ar' ? 'EN' : 'AR';

    document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.current;
  },
  bind: function () {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.onclick = () => {
        const newLang = this.current === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', newLang);
        location.reload();
      };
    }
  },
  translations: {
    ar: {
      welcome_title: 'مرحبا بك في غرفة الاسرار',
      user_info_title: 'أخبرنا عنك أولًا',
      user_info_desc: 'هذه المعلومات تساعدنا في تخصيص التحليل لك بدقة أكبر',
      age_label: 'العمر:',
      gender_label: 'الجنس:',
      submit_user_info: 'أدخل الغرفة',
      intro_title: 'غرفة الأسرار',
      intro_subtitle: 'Chamber of Secrets',
      intro_desc: 'اكتشف شخصيتك الحقيقية من خلال 20 سؤالاً تفتح لك أبواب الذات',
      intro_p1: 'أنت على وشك دخول غرفة لا تُظهر ما بداخلها إلا للصادقين مع أنفسهم.',
      intro_p2: 'أجب بصدق... وسترى ما لم تره من قبل.',
      start_btn: 'ادخل إلى الغرفة',
      next_btn: 'السؤال التالي',
      restart_btn: 'أعد الرحلة',
      footer1: '© 2025 غرفة الأسرار | Chamber of Secrets',
      footer2: 'تم التصميم والتحليل النفسي والتطوير من قبل: Mohammed Tarek',
      dob_label: 'تاريخ الميلاد:',
      zodiac_title: 'بناءً على برجك',
      prediction_title: 'تنبؤات برجك الأسبوعية'
    },
    en: {
      welcome_title: 'Welcome to Chamber of Secrets',
      user_info_title: 'Tell Us About You First',
      user_info_desc: 'This information helps us customize the analysis for you more accurately',
      age_label: 'Age:',
      gender_label: 'Gender:',
      submit_user_info: 'Enter the Chamber',
      intro_title: 'Chamber of Secrets',
      intro_subtitle: 'غرفة الأسرار',
      intro_desc: 'Discover your true personality through 20 questions that open the doors to your inner self',
      intro_p1: 'You are about to enter a room that reveals itself only to those honest with themselves.',
      intro_p2: 'Answer honestly... and you will see what you have never seen before.',
      start_btn: 'Enter the Chamber',
      next_btn: 'Next Question',
      restart_btn: 'Restart the Journey',
      footer1: '© 2025 Chamber of Secrets | غرفة الأسرار',
      footer2: 'Designed, analyzed, and developed by: Mohammed Tarek',
      dob_label: 'Date of Birth:',
      zodiac_title: 'Based on your zodiac sign',
      prediction_title: 'Your Weekly Horoscope'
    }
  }
};

// --- الأسئلة (20 سؤالاً) ---
function getQuestions(lang = 'ar') {
  const t = Lang.translations[lang];
  return [
    {
      id: 1,
      text: t.q1 || "عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟",
      options: [
        { text: t.o1_1 || "أنا متحمس لأبدأ يومي!", trait: "E" },
        { text: t.o1_2 || "هل كل شيء تحت السيطرة؟", trait: "C" },
        { text: t.o1_3 || "هل سأكون كافيًا اليوم؟", trait: "Inferiority" },
        { text: t.o1_4 || "أريد أن أفهم معنى هذا اليوم", trait: "N" }
      ]
    },
    {
      id: 2,
      text: t.q2 || "في لقاء اجتماعي جديد، ماذا تفعل؟",
      options: [
        { text: t.o2_1 || "أبدأ الحديث مع الجميع بسرعة", trait: "E,I" },
        { text: t.o2_2 || "أراقب أولًا ثم أتحدث مع شخص واحد", trait: "I,S" },
        { text: t.o2_3 || "أركز على من يمكن أن يفيدني أو أفيد منه", trait: "T" },
        { text: t.o2_4 || "أحاول فهم مشاعر الآخرين بسرعة", trait: "F" }
      ]
    },
    {
      id: 3,
      text: t.q3 || "ما نوع المهمة التي تجعلك 'تُنسى' من نفسك؟",
      options: [
        { text: t.o3_1 || "التحديات السريعة والملتزمة بالوقت", trait: "Artisan" },
        { text: t.o3_2 || "التحليل العميق للبيانات أو الأنظمة", trait: "NT" },
        { text: t.o3_3 || "مساعدة شخص على تجاوز أزمة", trait: "Idealist" },
        { text: t.o3_4 || "تنظيم فريق لتحقيق هدف منظم", trait: "Guardian" }
      ]
    },
    {
      id: 4,
      text: t.q4 || "ما أكثر شيء تبحث عنه في الصداقات؟",
      options: [
        { text: t.o4_1 || "المرح والطاقة", trait: "I" },
        { text: t.o4_2 || "الولاء والاستقرار", trait: "S" },
        { text: t.o4_3 || "العمق والمعنى", trait: "NF" },
        { text: t.o4_4 || "التحدي الفكري", trait: "Rational" }
      ]
    },
    {
      id: 5,
      text: t.q5 || "كيف تتعامل مع الأخطاء؟",
      options: [
        { text: t.o5_1 || "أتعلم وأتحرك بسرعة", trait: "P" },
        { text: t.o5_2 || "أحلل ما حدث بدقة", trait: "C" },
        { text: t.o5_3 || "أشعر بالذنب، لكنني أسامح نفسي", trait: "A" },
        { text: t.o5_4 || "أتساءل: هل هذا يثبت أنني غير كافٍ؟", trait: "Inferiority" }
      ]
    },
    {
      id: 6,
      text: t.q6 || "ما الذي يُشعرك بالفخر؟",
      options: [
        { text: t.o6_1 || "تحقيق نتائج ملموسة", trait: "D" },
        { text: t.o6_2 || "دعم شخص في أزمة", trait: "F" },
        { text: t.o6_3 || "ابتكار فكرة جديدة", trait: "N" },
        { text: t.o6_4 || "الالتزام بالواجبات والمسؤوليات", trait: "J" }
      ]
    },
    {
      id: 7,
      text: t.q7 || "ما الذي تبحث عنه في قرار مهم؟",
      options: [
        { text: t.o7_1 || "السرعة والنتائج", trait: "D" },
        { text: t.o7_2 || "الإلهام والانطباع الأول", trait: "I" },
        { text: t.o7_3 || "استقرار الفريق والعلاقات", trait: "S" },
        { text: t.o7_4 || "التحليل العميق والمنطق", trait: "T" }
      ]
    },
    {
      id: 8,
      text: t.q8 || "ماذا تفعل عندما تشعر بالضغط؟",
      options: [
        { text: t.o8_1 || "أتحدى الموقف مباشرة", trait: "D" },
        { text: t.o8_2 || "أبحث عن دعم من الآخرين", trait: "I" },
        { text: t.o8_3 || "أبتعد مؤقتًا لأعيد التفكير", trait: "S" },
        { text: t.o8_4 || "أحلل المشكلة من كل الزوايا", trait: "C" }
      ]
    },
    {
      id: 9,
      text: t.q9 || "ما نوع الكتب أو المحتوى الذي تفضله؟",
      options: [
        { text: t.o9_1 || "قصص نجاح، قيادة، تأثير", trait: "Guardian,Rational" },
        { text: t.o9_2 || "روايات، فلسفة، تأملات وجودية", trait: "Idealist" },
        { text: t.o9_3 || "نكت، فيديوهات مضحكة، ترفيه", trait: "SP" },
        { text: t.o9_4 || "أدلة عملية، خطوات، تقنيات", trait: "S,J" }
      ]
    },
    {
      id: 10,
      text: t.q10 || "ما الذي يعطيك إحساسًا بالمعنى؟",
      options: [
        { text: t.o10_1 || "تحقيق إنجازات كبيرة", trait: "Self-actualization" },
        { text: t.o10_2 || "خدمة الآخرين", trait: "Meaning" },
        { text: t.o10_3 || "فهم الكون أو النظام الكوني", trait: "Rational" },
        { text: t.o10_4 || "الاستقرار والانتماء", trait: "Generativity" }
      ]
    },
    {
      id: 11,
      text: t.q11 || "كم مرة تغير رأيك بناءً على معلومة جديدة؟",
      options: [
        { text: t.o11_1 || "نادرًا، أنا واثق من قراراتي", trait: "D" },
        { text: t.o11_2 || "أحيانًا، إذا كانت الحجة قوية", trait: "T" },
        { text: t.o11_3 || "غالبًا، لأنني أحب التعلم", trait: "N" },
        { text: t.o11_4 || "دائمًا، لأنني أكره التصلب", trait: "P" }
      ]
    },
    {
      id: 12,
      text: t.q12 || "ما الذي يُشعرك بالراحة؟",
      options: [
        { text: t.o12_1 || "تحقيق الهدف", trait: "D" },
        { text: t.o12_2 || "الضحك والتفاعل", trait: "I" },
        { text: t.o12_3 || "الهدوء والاستقرار", trait: "S" },
        { text: t.o12_4 || "النظام والفهم الكامل", trait: "C" }
      ]
    },
    {
      id: 13,
      text: t.q13 || "ما هو شعارك في الحياة؟",
      options: [
        { text: t.o13_1 || "النتيجة أهم من الطريقة", trait: "D" },
        { text: t.o13_2 || "الحياة للمرح والتجربة", trait: "I" },
        { text: t.o13_3 || "العلاقات تُبنى بالصبر والوفاء", trait: "S" },
        { text: t.o13_4 || "الفهم يسبق كل شيء", trait: "C" }
      ]
    },
    {
      id: 14,
      text: t.q14 || "كيف تتعامل مع الانتقاد؟",
      options: [
        { text: t.o14_1 || "أتحداه وأثبت نفسي", trait: "D" },
        { text: t.o14_2 || "أضحك وأحوله إلى نكتة", trait: "I" },
        { text: t.o14_3 || "أتألم لكنني أسامح", trait: "S" },
        { text: t.o14_4 || "أحلله بمنطق وعقل", trait: "T" }
      ]
    },
    {
      id: 15,
      text: t.q15 || "ما الذي يُشعرك بالخوف؟",
      options: [
        { text: t.o15_1 || "الفشل وعدم التحكم", trait: "D" },
        { text: t.o15_2 || "الوحدة والرفض", trait: "I" },
        { text: t.o15_3 || "الصراع والانفصال", trait: "S" },
        { text: t.o15_4 || "الغموض وعدم الفهم", trait: "N" }
      ]
    },
    {
      id: 16,
      text: t.q16 || "ما نوع القيادة التي تفضلها؟",
      options: [
        { text: t.o16_1 || "قيادة حاسمة وسريعة", trait: "D" },
        { text: t.o16_2 || "قيادة ملهمة ومحفزة", trait: "I" },
        { text: t.o16_3 || "قيادة داعمة ومستقرة", trait: "S" },
        { text: t.o16_4 || "قيادة منظمة وتحليلية", trait: "C" }
      ]
    },
    {
      id: 17,
      text: t.q17 || "ما الذي يُشعرك بالحرية؟",
      options: [
        { text: t.o17_1 || "التحكم في مصيري", trait: "D" },
        { text: t.o17_2 || "التعبير عن نفسي بحرية", trait: "I" },
        { text: t.o17_3 || "العيش بسلام مع نفسي", trait: "S" },
        { text: t.o17_4 || "الفهم العميق للعالم", trait: "N" }
      ]
    },
    {
      id: 18,
      text: t.q18 || "كيف تتعامل مع التغيير؟",
      options: [
        { text: t.o18_1 || "أتحدىه وأقوده", trait: "D" },
        { text: t.o18_2 || "أحتفل به وانغمس فيه", trait: "I" },
        { text: t.o18_3 || "أتأقلم ببطء وحذر", trait: "S" },
        { text: t.o18_4 || "أحلله وأفهمه أولًا", trait: "C" }
      ]
    },
    {
      id: 19,
      text: t.q19 || "ما الذي يُشعرك بالراحة؟",
      options: [
        { text: t.o19_1 || "تحقيق الهدف", trait: "D" },
        { text: t.o19_2 || "الضحك والتفاعل", trait: "I" },
        { text: t.o19_3 || "الهدوء والاستقرار", trait: "S" },
        { text: t.o19_4 || "النظام والفهم الكامل", trait: "C" }
      ]
    },
    {
      id: 20,
      text: t.q20 || "ما هو شعارك في الحياة؟",
      options: [
        { text: t.o20_1 || "النتيجة أهم من الطريقة", trait: "D" },
        { text: t.o20_2 || "الحياة للمرح والتجربة", trait: "I" },
        { text: t.o20_3 || "العلاقات تُبنى بالصبر والوفاء", trait: "S" },
        { text: t.o20_4 || "الفهم يسبق كل شيء", trait: "C" }
      ]
    }
  ];
}

// --- حساب البرج الفلكي ---
function getZodiacSign(dob) {
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

// --- تنبؤات برجك الأسبوعية ---
function getWeeklyPrediction(zodiacSign, lang = 'ar') {
  const predictions = {
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
  return predictions[lang][zodiacSign] || (lang === 'ar' ? "توقعات إيجابية في الطريق." : "Positive predictions ahead.");
}

// --- توليد التحليل النفسي الموسع ---
function generatePersonalityAnalysis(answers, userData) {
  const { age, gender, dob } = userData;

  const colorCount = { red: 0, yellow: 0, green: 0, blue: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const option = getQuestions()[questionIndex]?.options[answerIndex];
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
    red: {
      name: "النوع الأحمر",
      title: "القائد الطموح",
      celebrity: "مثل ستيف جوبز — قائدٌ لا يقبل الوسط، ويُحدث تغييرًا في العالم بقوة الإرادة.",
      description: `
أنت من النوع الذي لا ينتظر الفرصة، بل يصنعها بيديه. فيك قوة دفع داخلية لا تتوقف، ورغبة عميقة في التحكم في مصيرك. أنت لا تهرب من المسؤولية، بل تطلبها، لأنك تعرف أنك قادر على صنع الفارق. القرارات الحاسمة تخرج منك بسرعة، ليس لأنك متسرع، بل لأنك تثق بحدسك وخبرتك. تحب أن ترى النتائج بوضوح، والوقت الضائع يشعرك بالإحباط. لكنك لست قاسيًا، بل صريح — تُقدّر الصدق أكثر من المجاملة. في المواقف الصعبة، أنت أول من يقف في المقدمة. لست بحاجة إلى تصفيق، لكنك تعرف قيمتك. النجاح بالنسبة لك ليس ترفًا، بل ضرورة. أنت تُحدث تغييرًا ليس لأنه مطلوب، بل لأنه واجب.
      `.trim()
    },
    yellow: {
      name: "النوع الأصفر",
      title: "المحفّز المرح",
      celebrity: "مثل أوبرا وينفري — شخصية مُلهمة، تُحيي الآمال، وتُحدث تغييرًا بالحماس والكلمة.",
      description: `
أنت شرارة الضوء في أي مكان تدخله. طاقتك لا تنضب، وابتسامتك معدية. أنت لا ترى العقبات كما يراها الآخرون، بل تراها فرصة لإثبات أن المستحيل ممكن. تحب أن تكون محط الأنظار، ليس من أجل الغرور، بل لأنك تشعر بالحياة عندما تُلهم الآخرين. أنت تفكر خارج الصندوق، وتحب أن تكسر الروتين. القيود تُثبّطك، أما الحرية فتُطلق إبداعك. العلاقات بالنسبة لك ليست مجرد تواصل، بل تبادل للطاقة. أنت تُحيي من حولك، وتجعل المهام العادية تبدو كمغامرات. قد يراك البعض غير جاد، لكنهم لا يعلمون أنك جاد جدًا في الحفاظ على البهجة. أنت تُحدث تغييرًا ليس بالقوة، بل بالحماس.
      `.trim()
    },
    green: {
      name: "النوع الأخضر",
      title: "الداعم المستقر",
      celebrity: "مثل نيلسون مانديلا — رجل السلام، يُعيد بناء العلاقات، ويُثبت أن القوة الحقيقية في الصبر والتسامح.",
      description: `
أنت القلب الهادئ في وسط العاصفة. لا تُسرع، لكنك لا تتوقف. أنت تبني الثقة ببطء، لكنها تدوم مدى الحياة. الصراع يُرهقك، لكنك لا تهرب منه — بل تسعى لتسوية الأمور بهدوء. أنت لا تبحث عن التقدير، لكنك تستحقه أكثر من غيرك. أنت من يُكمل الفريق، من يُشعر الآخرين بالأمان. تحب الاستقرار، ليس لأنك خائف من التغيير، بل لأنك تعرف قيمته. أنت تُخطط بقلبك قبل عقلك، وتحدد أولوياتك حسب من يحبونك ويحتاجونك. أنت لا تقود بالصراخ، بل بالقدوة. لا تُظهر كل ما تشعر به، لكن من يعرفك جيدًا يعلم أن في داخلك بحرًا من العطاء. أنت تُحدث تغييرًا بصمت، لكن أثرك يدوم.
      `.trim()
    },
    blue: {
      name: "النوع الأزرق",
      title: "المُخطط الدقيق",
      celebrity: "مثل إيلون ماسك — عقل تحليلي، يُعيد تعريف المستقبل بمنطق دقيق ورؤية بعيدة.",
      description: `
أنت لا تُسرع، لأنك تعرف أن الخطأ الواحد قد يُكلّف الكثير. أنت تُفكّر بعمق، تُحلّل بتركيز، وتحب أن تفهم "لماذا" قبل أن تفعل "كيف". العشوائية تُربكك، أما النظام فيعطيك شعورًا بالأمان. أنت لا تُعجب بالانطباع الأول، بل بالأساس المتين. تحب أن تعرف كل التفاصيل، ليس من باب التفتيش، بل من باب المسؤولية. أنت تبحث عن المعنى وراء الأشياء، عن القاعدة الكامنة وراء السلوك. العلاقات عندك ليست عاطفية فقط، بل يجب أن تكون منطقية أيضًا. قد يراك البعض باردًا، لكنك ببساطة تحترم العقل بقدر احترامك للقلب. أنت تُحدث تغييرًا ليس بالحماس، بل بالرؤية.
      `.trim()
    }
  };

  const profile = colorProfiles[dominantColor];

  let ageInsight = "";
  if (age === '13-18') {
    ageInsight = "أنت في مرحلة بناء الهوية، حيث تبحث عن نفسك ومكانك في العالم. كل سؤال تطرحه على ذاتك اليوم يُشكّل الأساس لما ستكون عليه غدًا.";
  } else if (age === '19-25') {
    ageInsight = "أنت في عمر الحميمية، حيث تبحث عن علاقات حقيقية، وارتباطات عميقة. قلبك يسأل: من سيفهمني حقًا؟";
  } else if (age === '26-35' || age === '36-45') {
    ageInsight = "أنت في مرحلة الإنجابية، حيث لا يكفي أن تنجح أنت، بل أن تُسهم في نجاح الآخرين. أنت تبني، تُعلّم، وتُشارك.";
  } else if (age === '46-60' || age === '60+') {
    ageInsight = "أنت في مرحلة التقييم، حيث تنظر إلى رحلة حياتك بعين الحكيم. السؤال لم يعد 'ماذا أنجزت؟' بل 'ماذا عنيت؟'";
  }

  let genderInsight = "";
  if (gender === 'أنثى') {
    genderInsight = "كأنثى، تُظهر قوة داخلية نادرة: التوازن بين القلب والعقل. أنت تُعطي دون أن تفقد ذاتك، وتدعم دون أن تذلّ نفسك.";
  } else if (gender === 'ذكر') {
    genderInsight = "كذكر، تحمل مسؤولية القيادة بثقلها وضوءها. أنت لا تهرب من التحدي، بل تراه فرصة لإثبات أن القوة الحقيقية تأتي من الداخل.";
  } else {
    genderInsight = "أنت تتجاوز التصنيفات، وتُظهر توازنًا نادرًا بين الحدس والمنطق، بين العاطفة والتحليل.";
  }

  const zodiacSign = getZodiacSign(dob);
  const zodiacInsight = Lang.translations[Lang.current]['zodiac_title'] + ` (${zodiacSign}): يتميز أشخاص برجك بالجرأة، التفاؤل، والطموح.`;

  const prediction = getWeeklyPrediction(zodiacSign, Lang.current);
  const predictionInsight = Lang.translations[Lang.current]['prediction_title'] + `: ${prediction}`;

  const analysis = `
${profile.name}
${"=".repeat(profile.name.length + 1)}

${profile.celebrity}

${profile.description}

أنت شخصية لا تُشبه غيرها، لكن نمطك النفسي يُظهر أنك تنتمي إلى عالم القادة، المُخططين، أو المُلهمين. أنت لا تتبع، بل تُعيد تعريف الطريق. ما يميّزك ليس فقط ما تفعله، بل كيف تفكر، وكيف تتفاعل مع من حولك. أنت تمتلك قدرة نادرة على التوازن بين القوة والهدوء، بين الإصرار والتعاطف، وبين الطموح والمعنى.

${ageInsight ? `${ageInsight}` : ""}
${genderInsight ? `${genderInsight}` : ""}
${zodiacInsight ? `${zodiacInsight}` : ""}
${predictionInsight ? `${predictionInsight}` : ""}

أنت لا تُظهر كل ما في داخلك، لكن من يراقبك جيدًا يلاحظ أن في عينيك بريقًا لا يُطفأ. أنت تُخطط بصمت، وتُقرر بثقة. أخطاؤك لا تُكسرك، بل تُعلّمك. ونجاحاتك لا تُغررك، بل تُذكّرك بأن الطريق لا ينتهي.

أنت تبحث عن المعنى أكثر من البحث عن التقدير. عن التأثير أكثر من الشهرة. عن الاستقرار الداخلي أكثر من الظهور الخارجي. وهذا ما يجعلك مختلفًا. أنت لا تُسرع، لكنك لا تتوقف. أنت لا تُصيح، لكن صمتك له صدى.

في عالم مليء بالضجيج، أنت من يُحدث تغييرًا حقيقيًا. ليس بالصراخ، بل بالوجود. ليس بالسيطرة، بل بالتأثير. أنت لست مجرد شخصية، بل ظاهرة.

---

المصادر النفسية المستخدمة في التحليل:
- نظرية الألوان الشخصية
- نظرية MBTI (مايرز-بريجز)
- نظرية كيرسي للنُظم النفسية
- نظرية DISC للسلوك البشري
- نظرية العوامل الخمسة الكبرى (Big Five)
- نظرية أدلر (الشعور بالنقص والسعي للتفوق)
- نظرية ماسلو (هرم الحاجات)
- نظرية روجرز (التحقق الذاتي)
- نظرية إريكسون (المراحل النفسية الاجتماعية)
- نظرية PERMA (مكونات الرفاهية النفسية)
- نظرية الانغماس (Flow) - ميهل يتشينتنهامي

تم إعداد هذا التقرير بعناية من قِبل:  
**غرفة الأسرار | Chamber of Secrets**  
تم التصميم والتحليل النفسي والتطوير من قبل:  
**Mohammed Tarek**  
© 2025 جميع الحقوق محفوظة.
  `.trim();

  return analysis;
}

// --- نظام التفاعل ---
document.addEventListener('DOMContentLoaded', () => {
  const userInfoEl = document.getElementById('userInfo');
  const introEl = document.getElementById('intro');
  const quizEl = document.getElementById('quiz');
  const resultEl = document.getElementById('result');

  const submitUserInfo = document.getElementById('submitUserInfo');
  const startBtn = document.getElementById('startBtn');
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('nextBtn');
  const analysisEl = document.getElementById('analysis');
  const restartBtn = document.getElementById('restartBtn');

  let userData = { age: '', gender: '', dob: '' };
  let currentQ = 0;
  let userAnswers = [];

  // تفعيل نظام الترجمة
  Lang.init();

  // --- حساب العمر من تاريخ الميلاد ---
function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// إضافة حقل تاريخ الميلاد
if (document.querySelector('#userInfo .form-group:last-child')) {
  const dobGroup = document.createElement('div');
  dobGroup.className = 'form-group';
  dobGroup.innerHTML = `
    <label for="dob">${Lang.translations[Lang.current].dob_label}</label>
    <input type="date" id="dob" required>
  `;
  userInfoEl.insertBefore(dobGroup, submitUserInfo);

  // إضافة مكان لعرض العمر
  const ageDisplay = document.createElement('div');
  ageDisplay.className = 'form-group';
  ageDisplay.innerHTML = `
    <label>${Lang.translations[Lang.current].age_label}</label>
    <p id="calculatedAge" style="margin: 8px 0; color: #fbbf24; font-weight: 600;">-</p>
  `;
  userInfoEl.insertBefore(ageDisplay, submitUserInfo);

  // تحديث العمر عند تغيير تاريخ الميلاد
  document.getElementById('dob').addEventListener('input', function () {
    const dob = this.value;
    if (dob) {
      const age = calculateAge(dob);
      document.getElementById('calculatedAge').textContent = `${age} سنة`;
      userData.age = `${age}`; // حفظ العمر كرقم
    } else {
      document.getElementById('calculatedAge').textContent = '-';
      userData.age = '';
    }
  });
}

  submitUserInfo.addEventListener('click', () => {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;

    if (!age || !gender || !dob) {
      alert("الرجاء اختيار العمر، الجنس، وتاريخ الميلاد");
      return;
    }

    userData.age = age;
    userData.gender = gender;
    userData.dob = dob;
    userInfoEl.style.display = 'none';
    introEl.style.display = 'block';
  });

  startBtn.addEventListener('click', () => {
    introEl.style.display = 'none';
    quizEl.style.display = 'block';
    showQuestion();
  });

  const showQuestion = () => {
    const q = getQuestions()[currentQ];
    questionEl.innerHTML = `<h3>${currentQ + 1}. ${q.text}</h3>`;
    optionsEl.innerHTML = '';

    q.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.classList.add('option-btn');
      btn.textContent = opt.text;
      btn.addEventListener('click', () => {
        userAnswers[currentQ] = index;
        btn.classList.add('selected');
        Array.from(optionsEl.children).forEach(b => {
          if (b !== btn) b.classList.remove('selected');
        });
      });
      optionsEl.appendChild(btn);
    });
  };

  nextBtn.addEventListener('click', () => {
    if (userAnswers[currentQ] === undefined) {
      alert("الرجاء اختيار إجابة");
      return;
    }

    currentQ++;
    if (currentQ < getQuestions().length) {
      showQuestion();
    } else {
      const fullAnalysis = generatePersonalityAnalysis(userAnswers, userData);
      analysisEl.textContent = fullAnalysis;
      quizEl.style.display = 'none';

      // === تفعيل إعلان من شبكة مربحة (4 شبكات - باستخدام الكود الكامل) ===
      try {
        if (window.adNetworkLoaded) return;

        const adContainer = document.getElementById('monetag-inpage');
        if (!adContainer) return;

        adContainer.innerHTML = '<div style="padding: 15px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; font-size: 0.9rem; color: #94a3b8;">جاري تحميل الإعلان...</div>';

        const roll = Math.random();
        let adCode = "";

        if (roll < 0.45) {
          // --- Monetag ---
          adCode = ""; // ← ضع الكود الكامل من Monetag هنا (مثل: <script src="..."></script>)
        } else if (roll < 0.70) {
          // --- Adsterra ---
          adCode = ""; // ← ضع الكود الكامل من Adsterra هنا
        } else if (roll < 0.90) {
          // --- RichAds ---
          adCode = ""; // ← ضع الكود الكامل من RichAds هنا
        } else {
          // --- HilltopAds ---
          adCode = ""; // ← ضع الكود الكامل من HilltopAds هنا
        }

        if (!adCode || adCode.trim() === "") {
          adContainer.innerHTML = '<div style="color: #94a3b8; font-size: 0.9rem;">إعلان: شارك الموقع مع أصدقائك!</div>';
        } else {
          // إنشاء عنصر وهمي لإدراج الكود
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = adCode;
          adContainer.innerHTML = '';
          adContainer.appendChild(tempDiv);
        }

        window.adNetworkLoaded = true;

      } catch (e) {
        console.error("Ad Networks: فشل في التحميل", e);
        adContainer.innerHTML = '<div style="color: #ef4444; font-size: 0.9rem;">فشل تحميل الإعلان</div>';
      }

      // === تفعيل زر "بوابة الأبراج" بعد ظهور النتيجة ===
      setTimeout(() => {
        try {
          const zodiacBtn = document.getElementById('zodiacBtn');
          const zodiacResult = document.getElementById('zodiacResult');

          if (!zodiacBtn || !userData.dob) return;

          const zodiacSign = getZodiacSign(userData.dob);
          const prediction = getWeeklyPrediction(zodiacSign, Lang.current);

          zodiacBtn.addEventListener('click', () => {
            zodiacResult.innerHTML = `
              <h4>✨ برجك: ${zodiacSign}</h4>
              <p><strong>تحليلك الفلكي:</strong> يتميز أشخاص برجك بالجرأة، التفاؤل، والطموح.</p>
              <p><strong>تنبؤاتك الأسبوعية:</strong> ${prediction}</p>
              <p><em>الكون يهمس لك... استمع جيدًا.</em></p>
            `;
            zodiacResult.style.display = 'block';
            zodiacBtn.disabled = true;
            zodiacBtn.textContent = '✨ تم فتح البوابة';
            zodiacBtn.style.opacity = '0.8';
            zodiacBtn.style.cursor = 'not-allowed';
          });

        } catch (e) {
          console.error("Zodiac Button: فشل في التحميل", e);
        }
      }, 100);

      resultEl.style.display = 'block';
    }
  });

  restartBtn.addEventListener('click', () => {
    currentQ = 0;
    userAnswers = [];
    resultEl.style.display = 'none';
    userInfoEl.style.display = 'block';
  });
});
