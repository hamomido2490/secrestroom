// bundle.js - غرفة الأسرار | تحليل دقيق وموسع مع تشبيه بشخصيات مشهورة
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
    throw new Error("الموقع يعمل فقط أونلاي");
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

// === نظام الترجمة: عربي / إنجليزي (تحديث فوري بدون إعادة تحميل) ===
(function () {
  // ترجمات النصوص
  const translations = {
    ar: {
      welcome_title: 'مرحبا بك في غرفة الاسرار',
      user_info_title: 'أخبرنا عنك أولًا',
      user_info_desc: 'هذه المعلومات تساعدنا في تخصيص التحليل لك بدقة أكبر',
      age_label: 'العمر:',
      gender_label: 'الجنس:',
      submit_user_info: 'أدخل الغرفة',
      intro_title: 'غرفة الأسرار',
      intro_subtitle: 'Chamber of Secrets',
      intro_desc: 'اكتشف شخصيتك الحقيقية من خلال 6 أسئلة تفتح لك أبواب الذات',
      intro_p1: 'أنت على وشك دخول غرفة لا تُظهر ما بداخلها إلا للصادقين مع أنفسهم.',
      intro_p2: 'أجب بصدق... وسترى ما لم تره من قبل.',
      start_btn: 'ادخل إلى الغرفة',
      next_btn: 'السؤال التالي',
      restart_btn: 'أعد الرحلة',
      footer1: '© 2025 غرفة الأسرار | Chamber of Secrets',
      footer2: 'تم التصميم والتحليل النفسي والتطوير من قبل: Mohammed Tarek',
      lang_switch: 'EN',
      q1: 'عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟',
      q2: 'في لقاء اجتماعي جديد، ماذا تفعل؟',
      q3: 'ما نوع المهمة التي تجعلك "تُنسى" من نفسك؟',
      q4: 'ما أكثر شيء تبحث عنه في الصداقات؟',
      q5: 'كيف تتعامل مع الأخطاء؟',
      q6: 'ما الذي يُشعرك بالفخر؟',
      o1_1: 'أنا متحمس لأبدأ يومي!',
      o1_2: 'هل كل شيء تحت السيطرة؟',
      o1_3: 'هل سأكون كافيًا اليوم؟',
      o1_4: 'أريد أن أفهم معنى هذا اليوم',
      o2_1: 'أبدأ الحديث مع الجميع بسرعة',
      o2_2: 'أراقب أولًا ثم أتحدث مع شخص واحد',
      o2_3: 'أركز على من يمكن أن يفيدني أو أفيد منه',
      o2_4: 'أحاول فهم مشاعر الآخرين بسرعة',
      o3_1: 'التحديات السريعة والملتزمة بالوقت',
      o3_2: 'التحليل العميق للبيانات أو الأنظمة',
      o3_3: 'مساعدة شخص على تجاوز أزمة',
      o3_4: 'تنظيم فريق لتحقيق هدف منظم',
      o4_1: 'المرح والطاقة',
      o4_2: 'الولاء والاستقرار',
      o4_3: 'العمق والمعنى',
      o4_4: 'التحدي الفكري',
      o5_1: 'أتعلم وأتحرك بسرعة',
      o5_2: 'أحلل ما حدث بدقة',
      o5_3: 'أشعر بالذنب، لكنني أسامح نفسي',
      o5_4: 'أتساءل: هل هذا يثبت أنني غير كافٍ؟',
      o6_1: 'تحقيق نتائج ملموسة',
      o6_2: 'دعم شخص في أزمة',
      o6_3: 'ابتكار فكرة جديدة',
      o6_4: 'الالتزام بالواجبات والمسؤوليات'
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
      intro_desc: 'Discover your true personality through 6 questions that open the doors to your inner self',
      intro_p1: 'You are about to enter a room that reveals itself only to those honest with themselves.',
      intro_p2: 'Answer honestly... and you will see what you have never seen before.',
      start_btn: 'Enter the Chamber',
      next_btn: 'Next Question',
      restart_btn: 'Restart the Journey',
      footer1: '© 2025 Chamber of Secrets | غرفة الأسرار',
      footer2: 'Designed, analyzed, and developed by: Mohammed Tarek',
      lang_switch: 'AR',
      q1: 'When you wake up in the morning, what is the first thing that comes to mind?',
      q2: 'In a new social gathering, what do you do?',
      q3: 'What type of task makes you "forget yourself"?',
      q4: 'What do you look for most in friendships?',
      q5: 'How do you deal with mistakes?',
      q6: 'What makes you feel proud?',
      o1_1: 'I am excited to start my day!',
      o1_2: 'Is everything under control?',
      o1_3: 'Will I be enough today?',
      o1_4: 'I want to understand the meaning of this day',
      o2_1: 'I start talking to everyone quickly',
      o2_2: 'I observe first, then talk to one person',
      o2_3: 'I focus on who can benefit me or I can benefit them',
      o2_4: 'I try to understand others\' feelings quickly',
      o3_1: 'Fast-paced, time-bound challenges',
      o3_2: 'Deep analysis of data or systems',
      o3_3: 'Helping someone overcome a crisis',
      o3_4: 'Organizing a team to achieve a structured goal',
      o4_1: 'Fun and energy',
      o4_2: 'Loyalty and stability',
      o4_3: 'Depth and meaning',
      o4_4: 'Intellectual challenge',
      o5_1: 'I learn and move quickly',
      o5_2: 'I analyze what happened in detail',
      o5_3: 'I feel guilty, but I forgive myself',
      o5_4: 'I wonder: does this prove I\'m not enough?',
      o6_1: 'Achieving tangible results',
      o6_2: 'Supporting someone in a crisis',
      o6_3: 'Inventing a new idea',
      o6_4: 'Commitment to duties and responsibilities'
    }
  };

  // تطبيق الترجمة على النصوص
  function applyTranslation(lang) {
    const t = translations[lang];
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

    // تحديث زر اللغة
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = t.lang_switch;

    // تغيير اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  // توليد الأسئلة حسب اللغة
  function updateQuestions(lang) {
    const t = translations[lang];
    window.personalityQuestions = [
      {
        id: 1,
        text: t.q1,
        options: [
          { text: t.o1_1, trait: "E" },
          { text: t.o1_2, trait: "C" },
          { text: t.o1_3, trait: "Inferiority" },
          { text: t.o1_4, trait: "N" }
        ]
      },
      {
        id: 2,
        text: t.q2,
        options: [
          { text: t.o2_1, trait: "E,I" },
          { text: t.o2_2, trait: "I,S" },
          { text: t.o2_3, trait: "T" },
          { text: t.o2_4, trait: "F" }
        ]
      },
      {
        id: 3,
        text: t.q3,
        options: [
          { text: t.o3_1, trait: "Artisan" },
          { text: t.o3_2, trait: "NT" },
          { text: t.o3_3, trait: "Idealist" },
          { text: t.o3_4, trait: "Guardian" }
        ]
      },
      {
        id: 4,
        text: t.q4,
        options: [
          { text: t.o4_1, trait: "I" },
          { text: t.o4_2, trait: "S" },
          { text: t.o4_3, trait: "NF" },
          { text: t.o4_4, trait: "Rational" }
        ]
      },
      {
        id: 5,
        text: t.q5,
        options: [
          { text: t.o5_1, trait: "P" },
          { text: t.o5_2, trait: "C" },
          { text: t.o5_3, trait: "A" },
          { text: t.o5_4, trait: "Inferiority" }
        ]
      },
      {
        id: 6,
        text: t.q6,
        options: [
          { text: t.o6_1, trait: "D" },
          { text: t.o6_2, trait: "F" },
          { text: t.o6_3, trait: "N" },
          { text: t.o6_4, trait: "J" }
        ]
      }
    ];
  }

  // إدارة زر الترجمة
  function initLanguageSwitcher() {
    const langBtn = document.createElement('button');
    langBtn.id = 'langToggle';
    langBtn.title = 'Change Language';
    langBtn.style.cssText = `
      position: fixed; top: 20px; left: 20px; z-index: 1000;
      background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid #fbbf24;
      padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 1rem;
    `;

    // تحديد اللغة
    const savedLang = localStorage.getItem('lang') || 'ar';
    langBtn.textContent = savedLang === 'ar' ? 'EN' : 'AR';
    document.body.appendChild(langBtn);

    // تطبيق اللغة المحفوظة
    applyTranslation(savedLang);
    updateQuestions(savedLang);

    // تغيير اللغة عند النقر
    langBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === 'ar' ? 'en' : 'ar';

      // تطبيق الترجمة
      applyTranslation(newLang);
      updateQuestions(newLang);

      // حفظ اللغة
      localStorage.setItem('lang', newLang);

      // إذا كان المستخدم في صفحة الأسئلة أو النتيجة، أعد تحميل الأسئلة
      if (window.currentQ !== undefined) {
        // إذا كان في منتصف الأسئلة
        if (currentQ < window.personalityQuestions.length) {
          showQuestion(); // أعد تحميل السؤال الحالي
        }
      }
    });
  }

  // تفعيل النظام بعد تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
