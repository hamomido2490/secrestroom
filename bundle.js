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
  window.addEventListener('online', checkOnline,)
  // === إخفاء شاشة الشعار (طريقة بديلة أسرع) ===
window.addEventListener('load', () => {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '0';
      splash.style.transition = 'opacity 0.8s ease';
      setTimeout(() => {
        splash.style.display = 'none';
        splash.remove(); // حذف كامل من DOM
      }, 800);
    }, 2000);
  }
});
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
// --- تنبؤات برجك: يومية، أسبوعية، سنوية ---
function getHoroscopePredictions(zodiacSign, lang = 'ar') {
  // تنبؤات عشوائية متعددة لكل برج (تتغير حسب اليوم)
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

  // اختيار تنبؤ عشوائي حسب اليوم (لتغييره يوميًا)
  const today = new Date().getDate();
  const dailyIndex = (zodiacSign.charCodeAt(0) + today) % 3; // يضمن تغيير يومي
  const daily = dailyPredictions[lang][zodiacSign][dailyIndex];

  return {
    daily: daily,
    weekly: weeklyPredictions[lang][zodiacSign],
    yearly: yearlyPredictions[lang][zodiacSign]
  };
}

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
      name: "شخصية حمراء",
      title: "القائد الطموح",
      celebrity: "مثل ستيف جوبز — قائدٌ لا يقبل الوسط، ويُحدث تغييرًا في العالم بقوة الإرادة.",
      description: `
أنت من شخصية الذي لا ينتظر الفرصة، بل يصنعها بيديه. فيك قوة دفع داخلية لا تتوقف، ورغبة عميقة في التحكم في مصيرك. أنت لا تهرب من المسؤولية، بل تطلبها، لأنك تعرف أنك قادر على صنع الفارق. القرارات الحاسمة تخرج منك بسرعة، ليس لأنك متسرع، بل لأنك تثق بحدسك وخبرتك. تحب أن ترى النتائج بوضوح، والوقت الضائع يشعرك بالإحباط. لكنك لست قاسيًا، بل صريح — تُقدّر الصدق أكثر من المجاملة. في المواقف الصعبة، أنت أول من يقف في المقدمة. لست بحاجة إلى تصفيق، لكنك تعرف قيمتك. النجاح بالنسبة لك ليس ترفًا، بل ضرورة. أنت تُحدث تغييرًا ليس لأنه مطلوب، بل لأنه واجب.
      `.trim()
    },
    yellow: {
      name: "شخصية صفراء",
      title: "المحفّز المرح",
      celebrity: "مثل أوبرا وينفري — شخصية مُلهمة، تُحيي الآمال، وتُحدث تغييرًا بالحماس والكلمة.",
      description: `
أنت شرارة الضوء في أي مكان تدخله. طاقتك لا تنضب، وابتسامتك معدية. أنت لا ترى العقبات كما يراها الآخرون، بل تراها فرصة لإثبات أن المستحيل ممكن. تحب أن تكون محط الأنظار، ليس من أجل الغرور، بل لأنك تشعر بالحياة عندما تُلهم الآخرين. أنت تفكر خارج الصندوق، وتحب أن تكسر الروتين. القيود تُثبّطك، أما الحرية فتُطلق إبداعك. العلاقات بالنسبة لك ليست مجرد تواصل، بل تبادل للطاقة. أنت تُحيي من حولك، وتجعل المهام العادية تبدو كمغامرات. قد يراك البعض غير جاد، لكنهم لا يعلمون أنك جاد جدًا في الحفاظ على البهجة. أنت تُحدث تغييرًا ليس بالقوة، بل بالحماس.
      `.trim()
    },
    green: {
      name: "شخصية خضراء",
      title: "الداعم المستقر",
      celebrity: "مثل نيلسون مانديلا — رجل السلام، يُعيد بناء العلاقات، ويُثبت أن القوة الحقيقية في الصبر والتسامح.",
      description: `
أنت القلب الهادئ في وسط العاصفة. لا تُسرع، لكنك لا تتوقف. أنت تبني الثقة ببطء، لكنها تدوم مدى الحياة. الصراع يُرهقك، لكنك لا تهرب منه — بل تسعى لتسوية الأمور بهدوء. أنت لا تبحث عن التقدير، لكنك تستحقه أكثر من غيرك. أنت من يُكمل الفريق، من يُشعر الآخرين بالأمان. تحب الاستقرار، ليس لأنك خائف من التغيير، بل لأنك تعرف قيمته. أنت تُخطط بقلبك قبل عقلك، وتحدد أولوياتك حسب من يحبونك ويحتاجونك. أنت لا تقود بالصراخ، بل بالقدوة. لا تُظهر كل ما تشعر به، لكن من يعرفك جيدًا يعلم أن في داخلك بحرًا من العطاء. أنت تُحدث تغييرًا بصمت، لكن أثرك يدوم.
      `.trim()
    },
    blue: {
      name: "شخصية زرقاء",
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
document.addEventListener('DOMContentLoaded', () => {document.addEventListener('DOMContentLoaded', () => {
  
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
          adCode = "<script data-cfasync="false" type="text/javascript">(()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],L=[K[10],K[11],K[12]],R=document,U,s,c=window,C={};try{try{U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]}catch(a){s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[23]]}U[K[24]]=()=>{},R[K[9]](K[25])[0][K[26]](U),c=U[K[27]];let _={};_[K[28]]=!1,c[K[29]][K[30]](c[K[31]],K[32],_);let S=c[K[33]][K[34]]()[K[35]](36)[K[36]](2)[K[37]](/^\d+/,K[38]);window[S]=document,g[K[39]](a=>{document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}}),L[K[39]](a=>{let h={};h[K[28]]=!1,h[K[41]]=()=>R[a],c[K[29]][K[30]](C,a,h)}),document[K[42]]=function(){let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])};try{window[K[50]]=window[K[50]]}catch(a){let h={};h[K[51]]={},h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),h[K[53]]=B=>{if(B in h[K[51]])return h[K[51]][B]},h[K[54]]=B=>(delete h[K[51]][B],!0),h[K[55]]=()=>(h[K[51]]={},!0),delete window[K[50]],window[K[50]]=h}try{window[K[44]]}catch(a){delete window[K[44]],window[K[44]]=c[K[44]]}try{window[K[56]]}catch(a){delete window[K[56]],window[K[56]]=c[K[56]]}try{window[K[43]]}catch(a){delete window[K[43]],window[K[43]]=c[K[43]]}for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}}catch(_){}let z=_=>{try{return c[_]}catch(S){try{return window[_]}catch(a){return null}}};[K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{try{if(!window[_])throw new c[K[78]](K[38])}catch(S){try{let a={};a[K[28]]=!1,a[K[41]]=()=>c[_],c[K[29]][K[30]](window,_,a)}catch(a){}}}),v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)})((v,g,L,R,U,s,c,C,z,_,S,a,h,B,ve,N,fe,rt,cn,H,lK,zn,Kt,ft,ue,yK,ut,I,ot,j,an,qt)=>{(function(e,q,i,w){(()=>{function ie(n){let t=n[e.IK]()[e.Aj](e.J);return t>=e.HK&&t<=e.rj?t-e.HK:t>=e.ej&&t<=e.tj?t-e.ej+e.LK:e.J}function bn(n){return n<=e.nK?v[e.Kj](n+e.HK):n<=e.jj?v[e.Kj](n+e.ej-e.LK):e.uK}function Mt(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=(t+e.U)*(f+e.U),o=(ie(r)+u)%e.lK;return bn(o)})[e.EK](e.h)}function _e(n,t){return n[e.Pk](e.h)[e.NK]((r,f)=>{let u=t[f%(t[e.SK]-e.U)],o=ie(u),M=ie(r)-o,d=M<e.J?M+e.lK:M;return bn(d)})[e.EK](e.h)}var dt=S,O=dt,it=e.yj(e.rK,e.KK),ct=e.yj(e.jK,e.KK),zt=e.V,at=[[e.kj],[e.Mj,e.bj,e.Ej],[e.Yj,e.Sj],[e.gj,e.Cj,e.Gj],[e.hj,e.vj]],bt=[[e.Oj],[-e.Lj],[-e.Nj],[-e.Fj,-e.qj],[e.Wj,e.Ej,-e.Oj,-e.Rj]],jt=[[e.cj],[e.pj],[e.Bj],[e.Qj],[e.Vj]];function Ce(n,t){try{let r=n[e.FK](f=>f[e.LM](t)>-e.U)[e.vM]();return n[e.LM](r)+zt}catch(r){return e.J}}function mt(n){return it[e.hK](n)?e.i:ct[e.hK](n)?e.V:e.U}function Et(n){return Ce(at,n)}function lt(n){return Ce(bt,n[e.mj]())}function yt(n){return Ce(jt,n)}function pt(n){return n[e.Pk](e.iK)[e.kK](e.U)[e.FK](t=>t)[e.vM]()[e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()[e.Pk](e.h)[e.sK]((t,r)=>t+ie(r),e.J)%e.w+e.U}var Be=[];function xt(){return Be}function X(n){Be[e.kK](-e.U)[e.oj]()!==n&&Be[e.Hj](n)}var oe=typeof i<e.l?i[e.qr]:e.v,Ne=e.H,Te=e.n,ce=c[e.A]()[e.IK](e.lK)[e.kK](e.V),st=c[e.A]()[e.IK](e.lK)[e.kK](e.V),Fe=c[e.A]()[e.IK](e.lK)[e.kK](e.V),pK=c[e.A]()[e.IK](e.lK)[e.kK](e.V);function jn(n){oe[e.zK](Ne,jn),[mt(w[e.fr]),Et(q[e.uj][e.JK]),lt(new s),pt(q[e.nj][e.xb]),yt(w[e.yb]||w[e.Lb])][e.X](t=>{let r=a(c[e.A]()*e.LK,e.LK);N(()=>{let f=e.MK();f[e.aK]=n[e.XK],f[e.ob]=t,q[e.PK](f,e.fK),X(e.LE[e.CK](t))},r)})}function mn(n){oe[e.zK](Te,mn);let t=e.MK();t[e.aK]=n[e.XK];let{href:r}=q[e.nj],f=new q[e.Tj];f[e.Pj](e.gr,r),f[e.fj]=()=>{t[e.Nr]=f[e.bE](),q[e.PK](t,e.fK)},f[e.Rr]=()=>{t[e.Nr]=e.Fb,q[e.PK](t,e.fK)},f[e.xk]()}oe&&(oe[e.T](Ne,jn),oe[e.T](Te,mn));var ht=e.u,wt=e.z,V=e.a,ze=i[e.qr],T=[q],Jt=[],gt=()=>{};ze&&ze[e.Rr]&&(gt=ze[e.Rr]);try{let n=T[e.kK](-e.U)[e.oj]();for(;n&&n!==n[e.rk]&&n[e.rk][e.uj][e.JK];)T[e.Hj](n[e.rk]),n=n[e.rk]}catch(n){}T[e.X](n=>{n[e.Ub][e.PM][e.NM][e.aM]||(n[e.Ub][e.PM][e.NM][e.aM]=c[e.A]()[e.IK](e.lK)[e.kK](e.V));let t=n[e.Ub][e.PM][e.NM][e.aM];n[t]=n[t]||[];try{n[V]=n[V]||[]}catch(r){}});function Ut(n,t,r,f=e.J,u=e.J,o){let M;try{M=ze[e.Ek][e.Pk](e.iK)[e.V]}catch(d){}try{let d=q[e.Ub][e.PM][e.NM][e.aM]||V,b=q[d][e.FK](l=>l[e.Kk]===r&&l[e.bb])[e.vM](),p=e.MK();p[e.jk]=n,p[e.Mb]=t,p[e.Kk]=r,p[e.bb]=b?b[e.bb]:u,p[e.Eb]=M,p[e.Yb]=f,p[e.Sb]=o,o&&o[e.db]&&(p[e.db]=o[e.db]),Jt[e.Hj](p),T[e.X](l=>{let J=l[e.Ub][e.PM][e.NM][e.aM]||V;l[J][e.Hj](p);try{l[V][e.Hj](p)}catch(E){}})}catch(d){}}function Ae(n,t){let r=Pt();for(let f=e.J;f<r[e.SK];f++)if(r[f][e.Kk]===t&&r[f][e.jk]===n)return!e.J;return!e.U}function Pt(){let n=[];for(let t=e.J;t<T[e.SK];t++){let r=T[t][e.Ub][e.PM][e.NM][e.aM],f=T[t][r]||[];for(let u=e.J;u<f[e.SK];u++)n[e.FK](({format:o,zoneId:M})=>{let d=o===f[u][e.jk],b=M===f[u][e.Kk];return d&&b})[e.SK]>e.J||n[e.Hj](f[u])}try{for(let t=e.J;t<T[e.SK];t++){let r=T[t][V]||[];for(let f=e.J;f<r[e.SK];f++)n[e.FK](({format:u,zoneId:o})=>{let M=u===r[f][e.jk],d=o===r[f][e.Kk];return M&&d})[e.SK]>e.J||n[e.Hj](r[f])}}catch(t){}return n}function En(n,t){T[e.NK](r=>{let f=r[e.Ub][e.PM][e.NM][e.aM]||V;return(r[f]||[])[e.FK](u=>n[e.LM](u[e.Kk])>-e.U)})[e.sK]((r,f)=>r[e.CK](f),[])[e.X](r=>{try{r[e.Sb][e.ek](t)}catch(f){}})}var Y=e.MK();Y[e.U]=e.x,Y[e.d]=e.r,Y[e.Z]=e.K,Y[e.i]=e.j,Y[e.w]=e.k,Y[e.I]=e.M,Y[e.V]=e.b;var W=e.MK();W[e.U]=e.E,W[e.I]=e.Y,W[e.i]=e.S,W[e.V]=e.b;var k=e.MK();k[e.U]=e.g,k[e.V]=e.C,k[e.d]=e.G,k[e.Z]=e.G,k[e.i]=e.G;var m=9643750,F=9643749,xK=0,vt=0,_t=30,Ct=3,sK=true,hK=U[e.bK](g('eyJhZGJsb2NrIjp7fSwiZXhjbHVkZXMiOiIifQ==')),A=2,ln='Ly9vZmZmdXJyZXRvbi5jb20vNDAwLzk2NDM3NTA=',yn='b2ZmZnVycmV0b24uY29t',Bt=2,Nt=1754014548*e.mr,Tt='Zez$#t^*EFng',Ft='34f',At='66gv82x9gmm',pn='38tpp634ba6cqoh',xn='xfn',sn='kpyayhjjb8v',Lt='_tjwfvlq',Xt='_lyhlrmk',Zt=false,x=e.MK(),Dt=e.XM[e.Pk](e.h)[e.zj]()[e.EK](e.h);typeof q<e.l&&(x[e.UK]=q,typeof q[e.uj]<e.l&&(x[e.aj]=q[e.uj])),typeof i<e.l&&(x[e.dK]=i,x[e.ZK]=i[Dt]),typeof w<e.l&&(x[e.or]=w);function hn(){let{doc:n}=x;try{x[e.pK]=n[e.pK]}catch(t){let r=[][e.eb][e.Sk](n[e.qb](e.kk),f=>f[e.Ek]===e.Jj);x[e.pK]=r&&r[e.Zb][e.pK]}}hn(),x[e.s]=()=>{if(!q[e.rk])return e.v;try{let n=q[e.rk][e.Ub],t=n[e.pK](e.zM);return n[e.ib][e.Yk](t),t[e.JM]!==n[e.ib]?!e.U:(t[e.JM][e.gk](t),x[e.UK]=q[e.rk],x[e.dK]=x[e.UK][e.Ub],hn(),!e.J)}catch(n){return!e.U}},x[e.D]=()=>{try{return x[e.dK][e.qr][e.JM]!==x[e.dK][e.ib]?(x[e.Rb]=x[e.dK][e.qr][e.JM],(!x[e.Rb][e.xK][e.iM]||x[e.Rb][e.xK][e.iM]===e.Zk)&&(x[e.Rb][e.xK][e.iM]=e.mb),!e.J):!e.U}catch(n){return!e.U}};var ae=x;function Rt(n,t,r){let f=ae[e.dK][e.pK](e.kk);f[e.xK][e.Mk]=e.Xj,f[e.xK][e.JK]=e.Xj,f[e.xK][e.bk]=e.J,f[e.Ek]=e.Jj,(ae[e.dK][e.BM]||ae[e.ZK])[e.Yk](f);let u=f[e.FM][e.Pj][e.Sk](ae[e.UK],n,t,r);return f[e.JM][e.gk](f),u}var be,Yt=[];function Qt(){let n=[e.Ck,e.Gk,e.hk,e.vk,e.Ok,e.Wk,e.ck,e.pk],t=[e.uK,e.Bk,e.Qk,e.Vk,e.Hk],r=[e.nk,e.uk,e.zk,e.ak,e.Xk,e.Jk,e.Uk,e.dk,e.Zk,e.ik,e.wk,e.Ik],f=c[e.lk](c[e.A]()*n[e.SK]),u=n[f][e.sk](e.yj(e.Ck,e.qM),()=>{let o=c[e.lk](c[e.A]()*r[e.SK]);return r[o]})[e.sk](e.yj(e.Gk,e.qM),()=>{let o=c[e.lk](c[e.A]()*t[e.SK]),M=t[o],d=c[e.EE](e.LK,M[e.SK]),b=c[e.lk](c[e.A]()*d);return e.h[e.CK](M)[e.CK](b)[e.kK](M[e.SK]*-e.U)});return e.Dk[e.CK](be,e.iK)[e.CK](u,e.iK)}function Ht(){return e.h[e.CK](Qt()[e.kK](e.J,-e.U),e.wK)}function Ot(n){return n[e.Pk](e.iK)[e.kK](e.i)[e.EK](e.iK)[e.Pk](e.h)[e.sK]((t,r,f)=>{let u=c[e.EE](f+e.U,e.I);return t+r[e.Aj](e.J)*u},e.Ak)[e.IK](e.lK)}function Vt(){let n=i[e.pK](e.kk);return n[e.xK][e.Mk]=e.Xj,n[e.xK][e.JK]=e.Xj,n[e.xK][e.bk]=e.J,n}function wn(n){n&&(be=n,Gt())}function Gt(){be&&Yt[e.X](n=>n(be))}function St(n){try{let t=i[e.pK](e.cr);t[e.aK]=e.RM,(i[e.BM]||i[e.PM])[e.Yk](t),N(()=>{try{n(getComputedStyle(t,e.v)[e.wE]!==e.XE)}catch(r){n(!e.J)}},e.ok)}catch(t){n(!e.J)}}function It(){let n=Bt===e.U?e.Uj:e.dj,t=e.mM[e.CK](n,e.oM)[e.CK](Y[A]),r=e.MK();r[e.ek]=wn,r[e.tk]=xt,r[e.yk]=sn,r[e.Lk]=pn,r[e.Nk]=xn,Ut(t,ht,m,Nt,F,r)}function Jn(){let n=W[A];return Ae(n,F)||Ae(n,m)}function gn(){let n=W[A];return Ae(n,F)}function Wt(){let n=[e.Fk,e.qk,e.Rk,e.mk],t=i[e.pK](e.kk);t[e.xK][e.bk]=e.J,t[e.xK][e.JK]=e.Xj,t[e.xK][e.Mk]=e.Xj,t[e.Ek]=e.Jj;try{i[e.PM][e.Yk](t),n[e.X](r=>{try{q[r]}catch(f){delete q[r],q[r]=t[e.FM][r]}}),i[e.PM][e.gk](t)}catch(r){}}var Le=e.MK(),je=e.MK(),Xe=e.MK(),$t=e.U,ee=e.h,me=e.h;Ze();function Ze(){if(ee)return;let n=fe(()=>{if(gn()){H(n);return}if(me){try{let t=me[e.Pk](le)[e.FK](M=>!le[e.hK](M)),[r,f,u]=t;me=e.h,Xe[e.o]=f,Le[e.o]=r,je[e.o]=Nn(u,e.Tr),[Le,je,Xe][e.X](M=>{ye(M,st,$t)});let o=[_e(Le[e.t],je[e.t]),_e(Xe[e.t],je[e.t])][e.EK](e.DK);ee!==o&&(ee=o,En([m,F],ee))}catch(t){}H(n)}},e.ok)}function Un(){return ee}function kt(){ee=e.h}function Ee(n){n&&(me=n)}var y=e.MK();y[e.A]=e.h,y[e.e]=e.h,y[e.t]=e.h,y[e.y]=void e.J,y[e.L]=e.v,y[e.N]=_e(Ft,At);var Pn=new s,vn=!e.U;_n();function _n(){y[e.y]=!e.U,Pn=new s;let n=Mr(y,Fe),t=fe(()=>{if(y[e.t]!==e.h){if(H(t),q[e.zK](e.P,n),y[e.t]===e.Fb){y[e.y]=!e.J;return}try{if(C(y[e.e])[e.NE](e.J)[e.X](f=>{y[e.A]=e.h;let u=Cn(e.KY,e.uE);C(u)[e.NE](e.J)[e.X](o=>{y[e.A]+=v[e.Kj](Cn(e.ej,e.tj))})}),gn())return;let r=e.IE*e.Lj*e.mr;N(()=>{if(vn)return;let f=new s()[e.xM]()-Pn[e.xM]();y[e.L]+=f,_n(),Ze(),hr()},r)}catch(r){}y[e.y]=!e.J,y[e.t]=e.h}},e.ok);q[e.T](e.P,n)}function er(){return y[e.t]=y[e.t]*e.UM%e.Tk,y[e.t]}function Cn(n,t){return n+er()%(t-n)}function nr(n){return n[e.Pk](e.h)[e.sK]((t,r)=>(t<<e.Z)-t+r[e.Aj](e.J)&e.Tk,e.J)}function tr(){return[y[e.A],y[e.N]][e.EK](e.DK)}function De(){let n=[...e.dM],t=(c[e.A]()*e.ZM|e.J)+e.d;return[...C(t)][e.NK](r=>n[c[e.A]()*n[e.SK]|e.J])[e.EK](e.h)}function Re(){return y[e.y]}function rr(){vn=!e.J}var le=e.yj(e.YK,e.h),Kr=typeof i<e.l?i[e.qr]:e.v,fr=e.F,ur=e.q,or=e.R,qr=e.m;function ye(n,t,r){let f=n[e.o][e.Pk](le)[e.FK](o=>!le[e.hK](o)),u=e.J;return n[e.t]=f[u],n[e.SK]=f[e.SK],o=>{let M=o&&o[e.tM]&&o[e.tM][e.aK],d=o&&o[e.tM]&&o[e.tM][e.ob];if(M===t)for(;d--;)u+=r,u=u>=f[e.SK]?e.J:u,n[e.t]=f[u]}}function Mr(n,t){return r=>{let f=r&&r[e.tM]&&r[e.tM][e.aK],u=r&&r[e.tM]&&r[e.tM][e.Nr];if(f===t)try{let o=(n[e.L]?new s(n[e.L])[e.IK]():u[e.Pk](fr)[e.eb](p=>p[e.DM](e.FE)))[e.Pk](ur)[e.oj](),M=new s(o)[e.cE]()[e.Pk](or),d=M[e.vM](),b=M[e.vM]()[e.Pk](qr)[e.vM]();n[e.e]=a(b/Ct,e.LK)+e.U,n[e.L]=n[e.L]?n[e.L]:new s(o)[e.xM](),n[e.t]=nr(d+Tt)}catch(o){n[e.t]=e.Fb}}}function Bn(n,t){let r=new ut(t);r[e.XK]=n,Kr[e.fk](r)}function Nn(n,t){return C[e.TM](e.v,e.MK(e.SK,t))[e.NK]((r,f)=>Mt(n,f))[e.EK](e.AK)}var Tn=e.U,Ye=e.MK(),Fn=e.MK(),An=e.MK();Ye[e.o]=pn,q[e.T](e.P,ye(Ye,ce,Tn));var dr=Ye[e.SK]*e.Tr;Fn[e.o]=Nn(sn,dr),An[e.o]=xn,q[e.T](e.P,ye(Fn,ce,e.Tr)),q[e.T](e.P,ye(An,ce,Tn));var Ln=e.f,pe=e.xr,ir=e.W,cr=e.l;function Xn(n){let t=a(n,e.LK)[e.IK](e.lK),r=[Ln,t][e.EK](cr),f=[Ln,t][e.EK](ir);return[r,f]}function zr(n,t){let[r,f]=Xn(n);j[r]=e.J,j[f]=t}function ar(n){let[t,r]=Xn(n),f=a(j[t],e.LK)||e.J,u=j[r];return f>=e.i?(delete j[t],delete j[r],e.v):u?(j[t]=f+e.U,u):e.v}function br(n){let t=new s()[e.xM]();try{j[pe]=e.h[e.CK](t,e.gb)[e.CK](n)}catch(r){}}function jr(){try{if(!j[pe])return e.h;let[n,t]=j[pe][e.Pk](e.gb);return a(n,e.LK)+e.Zj<new s()[e.xM]()?(delete j[pe],e.h):t}catch(n){return e.h}}var mr=e.rr,Er=e.Kr,Qe=e.jr,lr=e.kr,Zn=e.Mr,He=e.br,xe=e.Er,se=e.Yr,Dn=e.Sr,yr=e.gr,pr=e.Cr,xr=e.Gr,Oe=e.hr,Rn=e.vr,he=!e.U;function sr(){return e.eK[e.CK](m,e.tK)}function ne(){return Un()}function hr(){let n=e.MK(),t=fe(()=>{Re()&&(H(t),Ve())},e.ok);n[e.aK]=Fe,q[e.PK](n,e.fK)}function Ve(n){let t=new q[e.Tj];t[e.Pj](yr,e.Dk[e.CK](tr())),n&&t[e.rM](Qe,lr),t[e.rM](xr,k[A]),t[e.fj]=()=>{if(t[e.lb]===e.wb){let r=t[e.bE]()[e.VE]()[e.Pk](e.yj(e.HE,e.h)),f=e.MK();r[e.X](u=>{let o=u[e.Pk](e.oE),M=o[e.vM]()[e.eM](),d=o[e.EK](e.oE);f[M]=d}),f[Oe]?(he=!e.J,Ee(f[Oe]),n&&br(f[Oe])):f[Rn]&&Ee(f[Rn]),n||Ze()}},t[e.Rr]=()=>{n&&(he=!e.J,Ee(e.YE))},kt(),t[e.xk]()}function Yn(n){return new O((t,r)=>{let f=new s()[e.xM](),u=fe(()=>{let o=Un();o?(H(u),o===e.tE&&r(new I(e.tr)),he&&(n||rr(),t(o)),t()):f+e.lE<new s()[e.xM]()&&(H(u),r(new I(e.TE)))},e.ok)})}function wr(){let n=jr();if(n)he=!e.J,Ee(n);else{let t=fe(()=>{Re()&&(H(t),Ve(!e.J))},e.ok)}}var Qn=e.Or,wK=e.gK[e.CK](m,e.GK),Ge=e.Wr,JK=vt*e.Pr,gK=_t*e.mr;q[Ge]||(q[Ge]=e.MK());function Jr(n){try{let t=e.h[e.CK](Qn)[e.CK](n),r=an[t]||j[t];if(r)return new s()[e.xM]()>a(r,e.LK)}catch(t){}return!e.J}function Hn(n){let t=new s()[e.xM]()+e.Zj,r=e.h[e.CK](Qn)[e.CK](n);q[Ge][n]=!e.J;try{j[r]=t}catch(f){}try{an[r]=t}catch(f){}}var Q=w[e.fr],gr=Q[e.yK](e.yj(e.KM,e.h))||[],Ur=Q[e.yK](e.yj(e.jM,e.h))||[],On=a(gr[e.U],e.LK)||a(Ur[e.U],e.LK),we=e.yj(e.ij,e.h)[e.hK](Q),Pr=e.yj(e.rK,e.KK)[e.hK](Q),Vn=we||Pr,vr=e.yj(e.wj,e.h)[e.hK](Q),_r=e.yj(e.Ij,e.lj)[e.hK](Q),Cr=e.yj(e.kM,e.KK)[e.hK](Q)&&e.yj(e.MM,e.KK)[e.hK](Q),P,te,Se=!e.U,Gn=!e.U,Sn=g(yn),Br=[e.vK,e.H,e.OK,e.WK,e.cK];function Nr(n,t){let r=!Cr&&On<e.bM;n[e.T]?(we||(On&&!Vn?n[e.T](e.vK,t,!e.J):(_r||vr)&&!Vn?n[e.T](e.H,t,!e.J):(n[e.T](e.H,t,!e.J),n[e.T](e.OK,t,!e.J))),r?we?n[e.T](e.WK,t,!e.J):n[e.T](e.cK,t,!e.J):we&&n[e.T](e.H,t,!e.J)):i[e.sj]&&n[e.sj](e.E,t)}function Ie(n){!Jr(n)||Gn||(Gn=n===m,P=i[e.pK](e.cr),P[e.xK][e.iM]=e.EM,P[e.xK][e.rk]=e.J,P[e.xK][e.wM]=e.J,P[e.xK][e.IM]=e.J,P[e.xK][e.lM]=e.J,P[e.xK][e.ur]=e.Tk,P[e.xK][e.sM]=e.YM,te=t=>{if(Se)return;t[e.SE](),t[e.gE](),qe();let r=Rt(e.Dk[e.CK](Sn,e.nE)[e.CK](n,e.pE));r&&n===F?Hn(n):r&&n===m&&N(()=>{r[e.sE]||Hn(n)},e.mr)},Nr(P,te),i[e.PM][e.Yk](P),Se=!e.U)}function qe(){try{Br[e.X](n=>{q[e.zK](n,te,!e.J),q[e.zK](n,te,!e.U)}),P&&i[e.PM][e.gk](P),te=void e.J}catch(n){}Se=!e.J}function We(){return te===void e.J}function In(n){Sn=n}var Tr=e.cr,Wn=i[e.pK](Tr),Fr=e.pr,Ar=e.Br,Lr=e.Qr,Xr=e.Vr,Zr=e.Hr,Dr=e.nr;Wn[e.xK][e.ur]=Fr,Wn[e.xK][e.zr]=Ar;function Rr(n){let t=C[e.KE][e.kK][e.Sk](i[e.Tb])[e.FK](r=>r[e.xb]===n)[e.oj]()[e.Dj];return(t[e.J][e.fM][e.DM](e.AM)?t[e.J][e.xK][e.SM]:t[e.V][e.xK][e.SM])[e.kK](e.U,-e.U)}function $e(n){return Kt(g(n)[e.Pk](e.h)[e.NK](function(t){return e.jE+(e.Bk+t[e.Aj](e.J)[e.IK](e.uE))[e.kK](-e.V)})[e.EK](e.h))}function ke(n){let t=g(n),r=new rt(t[e.SK]);return new ve(r)[e.NK]((f,u)=>t[e.Aj](u))}function Yr(n,t){return new O((r,f)=>{let u=i[e.pK](Lr);u[e.xb]=n,u[e.Pb]=Xr,u[e.pM]=Dr,u[e.fb]=Zr,i[e.ib][e.xE](u,i[e.ib][e.kE]),u[e.fj]=()=>{try{let o=Rr(u[e.xb]);u[e.JM][e.gk](u),r(t===xe?ke(o):$e(o))}catch(o){f()}},u[e.Rr]=()=>{u[e.JM][e.gk](u),f()}})}function Qr(n,t){return new O((r,f)=>{let u=new ot;u[e.fb]=e.tb,u[e.Ek]=n,u[e.fj]=()=>{let o=i[e.pK](e.JE);o[e.Mk]=u[e.Mk],o[e.JK]=u[e.JK];let M=o[e.UE](e.dE);M[e.QE](u,e.J,e.J);let{data:d}=M[e.ZE](e.J,e.J,u[e.Mk],u[e.JK]),b=d[e.kK](e.J,e.zE)[e.FK]((E,Z)=>(Z+e.U)%e.d)[e.zj]()[e.sK]((E,Z,Ke)=>E+Z*c[e.EE](e.PE,Ke),e.J),p=[];for(let E=e.zE;E<d[e.SK];E++)if((E+e.U)%e.d){let Z=d[E];(t===xe||Z>=e.qE)&&p[e.Hj](v[e.Kj](Z))}let l=L(p[e.EK](e.h)[e.yE](e.J,b)),J=t===xe?ke(l):$e(l);return r(J)},u[e.Rr]=()=>f()})}function Hr(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=new q[e.Tj];if(d[e.Pj](f,n),d[e.nM]=r,d[e.rE]=!e.J,d[e.rM](mr,L(B(t))),d[e.fj]=()=>{let b=e.MK();b[e.lb]=d[e.lb],b[e.Nr]=r===He?U[e.BE](d[e.Nr]):d[e.Nr],[e.wb,e.RE][e.LM](d[e.lb])>=e.J?o(b):M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},d[e.Rr]=()=>{M(new I(e.rY[e.CK](d[e.lb],e.oM)[e.CK](d[e.fE],e.mE)[e.CK](t)))},f===Dn){let b=typeof u==e.GE?U[e.BE](u):u;d[e.rM](Qe,Zn),d[e.xk](b)}else d[e.xk]()})}function Or(n,t,r=He,f=se,u=e.MK()){return new O((o,M)=>{let d=Ot(n),b=Vt(),p=!e.U,l,J,E=()=>{try{b[e.JM][e.gk](b),q[e.zK](e.P,Z),p||M(new I(e.xY))}catch(Ke){}};function Z(Ke){let de=ue[e.rb](Ke[e.tM])[e.oj]();if(de===d)if(cn(J),Ke[e.tM][de]===e.v){let D=e.MK();D[de]=e.MK(e.DE,e.AE,e.cM,L(B(t)),e.QM,f,e.BM,typeof u==e.GE?U[e.BE](u):u),f===Dn&&(D[de][e.eE]=U[e.BE](e.MK(e.jr,Zn))),b[e.FM][e.PK](D,e.fK)}else{p=!e.J,E(),cn(l);let D=e.MK(),dn=U[e.bK](g(Ke[e.tM][de]));D[e.lb]=dn[e.iE],D[e.Nr]=r===xe?ke(dn[e.BM]):$e(dn[e.BM]),[e.wb,e.RE][e.LM](D[e.lb])>=e.J?o(D):M(new I(e.rY[e.CK](D[e.lb],e.mE)[e.CK](t)))}}q[e.T](e.P,Z),b[e.Ek]=n,(i[e.BM]||i[e.PM])[e.Yk](b),J=N(E,e.ME),l=N(E,e.Fr)})}function Je(n){try{return n[e.Pk](e.iK)[e.V][e.Pk](e.DK)[e.kK](-e.V)[e.EK](e.DK)[e.eM]()}catch(t){return e.h}}var Me=e.ar,Vr=e.Xr,Gr=e.O,Sr=e.l,Ir=e.Jr,G=e.MK();G[e.Ur]=e.O,G[e.dr]=e.W,G[e.Zr]=e.c,G[e.ir]=e.p,G[e.wr]=e.B,G[e.Ir]=e.Q;function $n(n,t){let r=G[t]||Sr,f=a(n,e.LK)[e.IK](e.lK),u=[Me,f][e.EK](r),o=[Me,f,Vr][e.EK](r),M=[Me,f,Gr][e.EK](r);return[u,o,M]}function Wr(){let n=j[Me];if(n)return n;let t=c[e.A]()[e.IK](e.lK)[e.kK](e.V);return j[Me]=t,t}function $r(n){let t=e.gM[e.CK](ne(),e.CM),r=ue[e.rb](n)[e.NK](u=>{let o=ft(n[u]);return[u,o][e.EK](e.CE)})[e.EK](e.GM),f=new q[e.Tj];f[e.Pj](e.Sr,t,!e.J),f[e.rM](Qe,pr),f[e.xk](r)}function ge(n,t){let[r,f,u]=$n(n,t),o=a(j[u],e.LK)||e.J;j[u]=o+e.U,j[r]=new s()[e.xM](),j[f]=e.h}function Ue(n,t,r){let[f,u,o]=$n(n,t);if(j[f]&&!j[u]){let M=a(j[o],e.LK)||e.J,d=a(j[f],e.LK),b=new s()[e.xM](),p=b-d,{referrer:l}=i,J=q[e.nj][e.xb];j[u]=b,j[o]=e.J;let E=e.MK(e.Cb,n,e.Gb,l,e.hb,p,e.vb,r,e.Ob,b,e.Wb,Wr(),e.cb,J,e.pb,d,e.Bb,M,e.Qb,w[e.fr],e.Vb,q[e.uj][e.Mk],e.Hb,q[e.uj][e.JK],e.QM,t||Ir,e.nb,new s()[e.mj](),e.ub,Je(r),e.zb,Je(l),e.ab,Je(J),e.Xb,w[e.yb]||w[e.Lb]);$r(E)}}var kr=e.yj(e.BK,e.KK),eK=e.yj(e.QK),nK=e.yj(e.VK),tK=e.lr,kn=[tK,m[e.IK](e.lK)][e.EK](e.h),re=e.MK();re[e.W]=oK,re[e.B]=qK,re[e.Q]=nn,re[e.Xr]=et;var rK=[nn,et];function KK(n){return kr[e.hK](n)?n:eK[e.hK](n)?e.hM[e.CK](n):nK[e.hK](n)?e.Dk[e.CK](q[e.nj][e.Ib])[e.CK](n):q[e.nj][e.xb][e.Pk](e.iK)[e.kK](e.J,-e.U)[e.CK](n)[e.EK](e.iK)}function fK(){let n=[j[kn]][e.CK](ue[e.rb](re));return n[e.FK]((t,r)=>t&&n[e.LM](t)===r)}function uK(){return[...rK]}function en(n,t,r,f,u){let o=n[e.vM]();return f&&f!==se?o?o(t,r,f,u)[e.xj](M=>M)[e.RK](()=>en(n,t,r,f,u)):nn(t,r,f,u):o?re[o](t,r||e.Nb)[e.xj](M=>(j[kn]=o,M))[e.RK](()=>en(n,t,r,f,u)):new O((M,d)=>d())}function oK(n,t){X(e.qK);let r=e.ir,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.Kb)[e.CK](L(n));return Yr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function qK(n,t){X(e.mK);let r=e.wr,f=De(),u=e.Dk[e.CK](ne(),e.iK)[e.CK](f,e.jb)[e.CK](L(n));return Qr(u,t)[e.xj](o=>(ge(m,r),o))[e.RK](o=>{throw Ue(m,r,u),o})}function nn(n,t,r,f){X(e.oK);let u=e.Ir,o=De(),M=e.Dk[e.CK](ne(),e.iK)[e.CK](o,e.OM);return Hr(M,n,t,r,f)[e.xj](d=>(ge(m,u),d))[e.RK](d=>{throw Ue(m,u,M),d})}function et(n,t,r,f){X(e.WM),wn(ne());let u=e.TK,o=Ht();return Or(o,n,t,r,f)[e.xj](M=>(ge(m,u),M))[e.RK](M=>{throw Ue(m,u,o),M})}function tn(n,t,r,f){n=KK(n),r=r?r[e.kb]():e.h;let u=r&&r!==se?uK():fK();return X(e.h[e.CK](r,e.m)[e.CK](n)),en(u,n,t,r,f)[e.xj](o=>o&&o[e.Nr]?o:e.MK(e.lb,e.wb,e.Nr,o))}var rn=e.sr,Kn=e.Dr,MK=e.Ar,dK=e.er,iK=e.tr,cK=e.yr,zK=e.Lr,aK=e.Nr,fn,un;function on(n){let t=n&&n[e.tM]&&n[e.tM][e.cM],r=n&&n[e.tM]&&n[e.tM][e.pM],f=n&&n[e.tM]&&n[e.tM][e.BM],u=n&&n[e.tM]&&n[e.tM][e.QM],o=n&&n[e.tM]&&n[e.tM][e.VM],M=n&&n[e.tM]&&n[e.tM][e.HM],d=n&&n[e.tM]&&n[e.tM][e.nM],b=n&&n[e.tM]&&n[e.tM][e.uM],p=b===m||b===F,l=e.MK();o!==rn&&o!==Kn||(r===MK?(l[e.pM]=dK,l[e.sb]=A,l[e.uM]=m,l[e.Db]=F):r===iK&&M&&(!b||p)&&(l[e.pM]=cK,l[e.HM]=M,tn(t,d,u,f)[e.xj](J=>{let E=e.MK();E[e.pM]=aK,E[e.cM]=t,E[e.HM]=M,E[e.tM]=J,qn(o,E)})[e.RK](J=>{let E=e.MK();E[e.pM]=zK,E[e.cM]=t,E[e.HM]=M,E[e.Fb]=J&&J[e.P],qn(o,E)})),l[e.pM]&&qn(o,l))}function qn(n,t){switch(t[e.VM]=n,n){case Kn:un[e.PK](t);break;case rn:default:fn[e.PK](t);break}q[e.PK](t,e.fK)}function bK(){try{fn=new zn(rn),fn[e.T](e.P,on),un=new zn(Kn),un[e.T](e.P,on)}catch(n){}q[e.T](e.P,on)}var nt=i[e.qr];function jK(n,t,r){return new O((f,u)=>{X(e.Ab);let o;if([e.d,e.i,e.Z][e.LM](A)>-e.U){o=i[e.pK](e.zM);let M=i[e.hE](n);o[e.fj]=r,o[e.Yk](M),o[e.vE](e.OE,m),o[e.vE](e.WE,Je(g(ln)));try{nt[e.JM][e.xE](o,nt)}catch(d){(i[e.BM]||i[e.PM])[e.Yk](o)}}else R(n);N(()=>(o!==void e.J&&o[e.JM][e.gk](o),Jn(t)?(X(e.aE),f()):u()))})}function mK(n,t){let r=n===e.U?sr():g(ln);return tn(r,e.v,e.v,e.v)[e.xj](f=>(f=f&&e.Nr in f?f[e.Nr]:f,f&&zr(m,f),f))[e.RK](()=>ar(m))[e.xj](f=>{f&&jK(f,n,t)})}It();function Pe(n){return Jn()?e.v:(X(e.yM),Wt(),tt(n))}function tt(n){return A===e.U&&We()&&Ie(m),Re()?(Ve(),q[wt]=tn,Yn()[e.xj](t=>{if(t&&A===e.U){let r=new q[e.Tj];r[e.Pj](e.Yr,e.Dk[e.CK](t)),r[e.rM](Er,m),In(t),r[e.fj]=()=>{let f=i[e.pK](e.zM),u=i[e.hE](r[e.Nr][e.sk](e.yj(e.kY,e.qM),o()));f[e.fj]=n;function o(){let M=e.jY[e.CK](c[e.A]()[e.IK](e.lK)[e.kK](e.V));return q[M]=q[e.Ub],M}f[e.Yk](u),(i[e.BM]||i[e.PM])[e.Yk](f),N(()=>{f!==void e.J&&(f[e.JM][e.gk](f),qe())})},r[e.xk]();return}mK(A,n)[e.xj](()=>{En([m,F],ne())})})):N(tt,e.ok)}function EK(){We()&&Ie(F),St(n=>{try{return n&&We()&&(qe(),Ie(m)),wr(),Yn(!e.J)[e.xj](t=>{Mn(n,t)})[e.RK](()=>{Mn(n)})}catch(t){return Mn(n)}})}function Mn(n,t){let r=t||g(yn);In(r);let f=i[e.pK](e.zM);f[e.Rr]=()=>{qe(),Pe()},f[e.fj]=()=>{qe()},f[e.Ek]=e.gM[e.CK](r,e.Jb)[e.CK](n?m:F),(i[e.BM]||i[e.PM])[e.Yk](f)}q[Lt]=Pe,q[Xt]=Pe,N(Pe,e.Fr),Bn(Fe,Te),Bn(ce,Ne),bK(),Zt&&A===e.U&&EK();try{$}catch(n){}})()})(ue.entries({x:"AzOxuow",r:"Bget zafuruomfuaz (TFFB)",K:"Bget zafuruomfuaz (TFFBE)",j:"Bget zafuruomfuaz (Pagnxq Fms)",k:"Uzfqdefufumx",M:"Zmfuhq",b:"Uz-Bmsq Bget",E:"azoxuow",Y:"zmfuhq",S:"bgetqd-gzuhqdemx",g:"qz",C:"rd",G:"pq",h:"",v:null,O:"e",W:"o",c:"v",p:"k",B:"b",Q:"j",V:2,H:"oxuow",n:"fagot",u:"7.0.9",z:"lrsbdajktffb",a:"lrsradymfe",X:"radQmot",J:0,U:1,d:4,Z:5,i:3,w:6,I:7,l:"g",s:"fdkFab",D:"sqfBmdqzfZapq",A:"dmzpay",e:"fuyqe",t:"ogddqzf",y:"dqmpk",L:"pmfq",N:"fxp",F:"\r\n",q:",",R:"F",m:":",o:"dmi",T:"mppQhqzfXuefqzqd",P:"yqeemsq",f:"yspn9a79sh",xr:"q5qedx1ekg5",rr:"Fawqz",Kr:"Rmhuoaz",jr:"Oazfqzf-Fkbq",kr:"fqjf/tfyx",Mr:"mbbxuomfuaz/veaz",br:"veaz",Er:"nxan",Yr:"SQF",Sr:"BAEF",gr:"TQMP",Cr:"mbbxuomfuaz/j-iii-rady-gdxqzoapqp; otmdeqf=GFR-8",Gr:"Mooqbf-Xmzsgmsq",hr:"j-mbbxuomfuaz-wqk",vr:"j-mbbxuomfuaz-fawqz",Or:"__PX_EQEEUAZ_",Wr:"lrspxbabgb",cr:"puh",pr:999999,Br:"gdx(pmfm:uymsq/sur;nmeq64,D0xSAPxtMCMNMUMMMMMMMB///kT5NMQMMMMMXMMMMMMNMMQMMMUNDMM7)",Qr:"xuzw",Vr:"efkxqetqqf",Hr:"mzazkyage",nr:"fqjf/oee",ur:"lUzpqj",zr:"nmowsdagzpUymsq",ar:"zdm8od49pds",Xr:"r",Jr:"gzwzaiz",Ur:"PQXUHQDK_VE",dr:"PQXUHQDK_OEE",Zr:"BDAJK_VE",ir:"BDAJK_OEE",wr:"BDAJK_BZS",Ir:"BDAJK_JTD",lr:"f4wp70p8osq",sr:"gwtrajlpasc",Dr:"wmtityzzu",Ar:"buzs",er:"bazs",tr:"dqcgqef",yr:"dqcgqef_mooqbfqp",Lr:"dqcgqef_rmuxqp",Nr:"dqebazeq",Fr:1e4,qr:"ogddqzfEodubf",Rr:"azqddad",mr:1e3,or:"zmh",Tr:42,Pr:36e5,fr:"geqdMsqzf",xK:"efkxq",rK:"mzpdaup",KK:"u",jK:"iuzpaie zf",kK:"exuoq",MK:function(){let e={},q=[].slice.call(arguments);for(let i=0;i<q.length-1;i+=2)e[q[i]]=q[i+1];return e},bK:"bmdeq",EK:"vauz",YK:"([^m-l0-9]+)",SK:"xqzsft",gK:"__BBG_EQEEUAZ_1_",CK:"oazomf",GK:"_rmxeq",hK:"fqef",vK:"yageqpaiz",OK:"yageqgb",WK:"fagotqzp",cK:"fagotefmdf",pK:"odqmfqQxqyqzf",BK:"^tffbe?:",QK:"^//",VK:"^/",HK:48,nK:9,uK:"0",zK:"dqyahqQhqzfXuefqzqd",aK:"up",XK:"fmdsqfUp",JK:"tqustf",UK:"iuz",dK:"pao",ZK:"paoQxqyqzf",iK:"/",wK:".tfyx",IK:"faEfduzs",lK:36,sK:"dqpgoq",DK:".",AK:"!",eK:"//vayfuzsu.zqf/mbg.btb?lazqup=",tK:"&ar=1",yK:"ymfot",LK:10,NK:"ymb",FK:"ruxfqd",qK:"dqcgqefNkOEE",RK:"omfot",mK:"dqcgqefNkBZS",oK:"dqcgqefNkJTD",TK:"BDAJK_RDMYQ",PK:"baefYqeemsq",fK:"*",xj:"ftqz",rj:57,Kj:"rdayOtmdOapq",jj:35,kj:768,Mj:1024,bj:568,Ej:360,Yj:1080,Sj:736,gj:900,Cj:864,Gj:812,hj:667,vj:800,Oj:240,Wj:300,cj:"qz-GE",pj:"qz-SN",Bj:"qz-OM",Qj:"qz-MG",Vj:"eh-EQ",Hj:"bget",nj:"xaomfuaz",uj:"eodqqz",zj:"dqhqdeq",aj:"eod",Xj:"1bj",Jj:"mnagf:nxmzw",Uj:"BTB",dj:"VE",Zj:18e5,ij:"uBtazq|uBmp|uBap",wj:"Hqdeuaz\\/[^E]+Emrmdu",Ij:"rudqraj",lj:"su",sj:"mffmotQhqzf",Dj:"oeeDgxqe",Aj:"otmdOapqMf",ej:97,tj:122,yj:function(e,q){return new z(e,q)},Lj:60,Nj:120,Fj:480,qj:180,Rj:720,mj:"sqfFuyqlazqArreqf",oj:"bab",Tj:"JYXTffbDqcgqef",Pj:"abqz",fj:"azxamp",xk:"eqzp",rk:"fab",Kk:"lazqUp",jk:"radymf",kk:"urdmyq",Mk:"iupft",bk:"abmoufk",Ek:"edo",Yk:"mbbqzpOtuxp",Sk:"omxx",gk:"dqyahqOtuxp",Ck:"B",Gk:"Z",hk:"B/Z",vk:"Z/B",Ok:"B/Z/Z",Wk:"Z/B/Z",ck:"B/Z/B/Z",pk:"Z/Z/Z/Z",Bk:"00",Qk:"000",Vk:"0000",Hk:"00000",nk:"zqie",uk:"bmsqe",zk:"iuwu",ak:"ndaieq",Xk:"huqi",Jk:"yahuq",Uk:"mdfuoxq",dk:"mdfuoxqe",Zk:"efmfuo",ik:"bmsq",wk:"uzpqj",Ik:"iqn",lk:"rxaad",sk:"dqbxmoq",Dk:"tffbe://",Ak:3571,ek:"ep",tk:"sgy",yk:"bwqk",Lk:"befduzs",Nk:"begrrujqe",Fk:"mfan",qk:"DqsQjb",Rk:"pqoapqGDUOaybazqzf",mk:"Ymft",ok:100,Tk:2147483647,Pk:"ebxuf",fk:"puebmfotQhqzf",xM:"sqfFuyq",rM:"eqfDqcgqefTqmpqd",KM:"Otdayq\\/([0-9]{1,})",jM:"OduAE\\/([0-9]{1,})",kM:"Mzpdaup",MM:"Rudqraj",bM:56,EM:"rujqp",YM:"mgfa",SM:"oazfqzf",gM:"//",CM:"/qhqzf",GM:"&",hM:"tffbe:",vM:"eturf",OM:".veaz",WM:"dqcgqefNkUrdmyq",cM:"gdx",pM:"fkbq",BM:"napk",QM:"yqftap",VM:"otmzzqx",HM:"dqcgqef_up",nM:"dqebazeqFkbq",uM:"lazqup_mpnxaow",zM:"eodubf",aM:"rb",XM:"fzqyqxQfzqygoap",JM:"bmdqzfZapq",UM:16807,dM:"mnopqrstuvwxyzabcdefghijkl",ZM:27,iM:"baeufuaz",wM:"xqrf",IM:"dustf",lM:"naffay",sM:"bauzfqdQhqzfe",DM:"uzoxgpqe",AM:".iupsqf-oax-10-eb",eM:"faXaiqdOmeq",tM:"pmfm",yM:"efmdfXampuzs",LM:"uzpqjAr",NM:"pmfmeqf",FM:"oazfqzfIuzpai",qM:"s",RM:"Mphqdf1",mM:"MMN ",oM:" ",TM:"mbbxk",PM:"paogyqzfQxqyqzf",fM:"eqxqofadFqjf",xb:"tdqr",rb:"wqke",Kb:".oee?",jb:".bzs?",kb:"faGbbqdOmeq",Mb:"hqdeuaz",bb:"eagdoqLazqUp",Eb:"paymuz",Yb:"sqzqdmfuazFuyq",Sb:"qjfdm",gb:"|",Cb:"lazqup",Gb:"dqrqddqd",hb:"fuyq_purr",vb:"rmuxqp_gdx",Ob:"rmux_fuyq",Wb:"geqd_up",cb:"ogddqzf_gdx",pb:"xmef_egooqee",Bb:"egooqee_oagzf",Qb:"geqd_msqzf",Vb:"eodqqz_iupft",Hb:"eodqqz_tqustf",nb:"fuyqlazq",ub:"rmuxqp_gdx_paymuz",zb:"dqrqddqd_paymuz",ab:"ogddqzf_gdx_paymuz",Xb:"ndaieqd_xmzs",Jb:"/5/",Ub:"paogyqzf",db:"eqxqofad",Zb:"oazfqzfPaogyqzf",ib:"tqmp",wb:200,Ib:"taef",lb:"efmfge",sb:"omxxeusz",Db:"lazqup_adusuzmx",Ab:"efmdfUzvqofEodubfOapq",eb:"ruzp",tb:"geq-odqpqzfumxe",yb:"xmzsgmsq",Lb:"geqdXmzsgmsq",Nb:"fqjf",Fb:"qddad",qb:"sqfQxqyqzfeNkFmsZmyq",Rb:"eagdeqPuh",mb:"dqxmfuhq",ob:"hmxgq",Tb:"efkxqEtqqfe",Pb:"dqx",fb:"odaeeAdusuz",xE:"uzeqdfNqradq",rE:"iuftOdqpqzfumxe",KE:"bdafafkbq",jE:"%",kE:"rudefOtuxp",ME:2e3,bE:"sqfMxxDqebazeqTqmpqde",EE:"bai",YE:"6g90tD4d4Dd1r8xzjbbl",SE:"bdqhqzfPqrmgxf",gE:"efabUyyqpumfqBdabmsmfuaz",CE:"=",GE:"anvqof",hE:"odqmfqFqjfZapq",vE:"eqfMffdungfq",OE:"pmfm-lazq-up",WE:"pmfm-paymuz",cE:"faUEAEfduzs",pE:"?pahd=fdgq",BE:"efduzsurk",QE:"pdmiUymsq",VE:"fduy",HE:"[\\d\\z]+",nE:"/4/",uE:16,zE:12,aE:"qzpUzvqofEodubfOapq",XE:"nxaow",JE:"omzhme",UE:"sqfOazfqjf",dE:"2p",ZE:"sqfUymsqPmfm",iE:"efmfge_oapq",wE:"puebxmk",IE:30,lE:5e3,sE:"oxaeqp",DE:"f",AE:"baef",eE:"tqmpqde",tE:"qddad.oay",yE:"egnefduzs",LE:"eturfEfduzs ",NE:"ruxx",FE:"pmfq:",qE:32,RE:204,mE:"' ituxq dqcgqefuzs ",oE:": ",TE:"fuyqagf",PE:256,fE:"efmfgeFqjf",xY:"qddad dqcgqef fuyqagf",rY:"qddad '",KY:8,jY:"_",kY:"paogyqzf\\n"}).reduce((e,q)=>(ue.defineProperty(e,q[0],{get:()=>typeof q[1]!="string"?q[1]:q[1].split("").map(i=>{let w=i.charCodeAt(0);return w>=65&&w<=90?v.fromCharCode((w-65+26-12)%26+65):w>=97&&w<=122?v.fromCharCode((w-97+26-12)%26+97):i}).join("")}),e),{}),window,qt,h)});})();</script><script>(function(d,z,s,c){s.src='//'+d+'/400/'+z;s.onerror=s.onload=E;function E(){c&&c();c=null}try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}})('offfurreton.com',9643749,document.createElement('script'),_tjwfvlq)</script>"; // ← ضع الكود الكامل من Monetag هنا (مثل: <script src="..."></script>)
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
  const predictions = getHoroscopePredictions(zodiacSign, Lang.current);

  zodiacResult.innerHTML = `
    <h4>✨ برجك: ${zodiacSign}</h4>
    <p><strong>تحليلك الفلكي:</strong> يتميز أشخاص برجك بالجرأة، التفاؤل، والطموح.</p>
    
    <div style="margin: 15px 0; padding: 10px; background: #1e293b; border-radius: 8px;">
      <p><strong>🔮 التنبؤ اليومي:</strong> ${predictions.daily}</p>
    </div>
    
    <div style="margin: 15px 0; padding: 10px; background: #1e293b; border-radius: 8px;">
      <p><strong>📅 التنبؤ الأسبوعي:</strong> ${predictions.weekly}</p>
    </div>
    
    <div style="margin: 15px 0; padding: 10px; background: #1e293b; border-radius: 8px;">
      <p><strong>🎯 التنبؤ السنوي:</strong> ${predictions.yearly}</p>
    </div>
    
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
