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
  translations: {
    // ... نفس الترجمة كما بالكود السابق ...
    ar: {/* ... تماثل السابق ... */},
    en: {/* ... تماثل السابق ... */}
  },
  init() {
    this.addSwitcher();
    this.apply();
    this.bind();
  },
  addSwitcher() {
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
  apply() {
    const t = this.translations[this.current];
    if (!t) return;
    // تحديث النصوص حسب اللغة (نفس الكود السابق)
    function set(selector, value) {
      const el = document.querySelector(selector);
      if (el) el.textContent = value;
    }
    set('#userInfo h3:nth-of-type(1)', t.welcome_title);
    set('#userInfo h3:nth-of-type(2)', t.user_info_title);
    set('#userInfo p', t.user_info_desc);
    if (document.querySelector('#age')) document.querySelector('#age').previousElementSibling.textContent = t.age_label;
    if (document.querySelector('#gender')) document.querySelector('#gender').previousElementSibling.textContent = t.gender_label;
    set('#submitUserInfo', t.submit_user_info);
    set('#intro h1', t.intro_title);
    set('#intro h2', t.intro_subtitle);
    if (document.querySelector('#intro .divider + p')) document.querySelector('#intro .divider + p').textContent = t.intro_desc;
    if (document.querySelectorAll('#intro p')[0]) document.querySelectorAll('#intro p')[0].textContent = t.intro_p1;
    if (document.querySelectorAll('#intro p')[1]) document.querySelectorAll('#intro p')[1].textContent = t.intro_p2;
    set('#startBtn', t.start_btn);
    set('#nextBtn', t.next_btn);
    set('#restartBtn', t.restart_btn);
    set('footer p:nth-of-type(1)', t.footer1);
    set('footer p:nth-of-type(2)', t.footer2);
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = t.lang_switch;
    document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.current;
  },
  bind() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.onclick = () => {
        this.current = this.current === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', this.current);
        location.reload(); // أفضل reload بدل apply فقط للأسئلة
      };
    }
  }
};

// --- الأسئلة (20 سؤالاً) ---
function getQuestions() {
  const t = Lang.translations[Lang.current];
  return [
    // 1 - 16 من كودك
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
    },
    // 7-16 (أكمل بنفس النمط)
    {
      id: 7,
      text: "عند اتخاذ قرار مهم، ما الذي تثق به أكثر؟",
      options: [
        { text: "منطق العقل وتحليل المخاطر", trait: "T" },
        { text: "مشاعر القلب وتأثير القرار على الآخرين", trait: "F" },
        { text: "ما يقوله القانون أو التقاليد", trait: "S" },
        { text: "رؤيتي المستقبلية والبصيرة", trait: "N" }
      ]
    },
    {
      id: 8,
      text: "ماذا تفعل عندما تشعر بالضغط؟",
      options: [
        { text: "أتحدى الموقف مباشرة", trait: "D" },
        { text: "أبحث عن دعم من الآخرين", trait: "I" },
        { text: "أبتعد مؤقتًا لأعيد التفكير", trait: "S" },
        { text: "أحلل المشكلة من كل الزوايا", trait: "C" }
      ]
    },
    {
      id: 9,
      text: "ما نوع الكتب أو المحتوى الذي تفضله؟",
      options: [
        { text: "قصص نجاح، قيادة، تأثير", trait: "Guardian,Rational" },
        { text: "روايات، فلسفة، تأملات وجودية", trait: "Idealist" },
        { text: "أدلة عملية، خطوات، تقنيات", trait: "S,J" },
        { text: "ألعاب، ألغاز، تجارب جديدة", trait: "SP" }
      ]
    },
    {
      id: 10,
      text: "ما الذي يعطيك إحساسًا بالمعنى؟",
      options: [
        { text: "تحقيق إنجازات كبيرة", trait: "Self-actualization" },
        { text: "خدمة الآخرين", trait: "Meaning" },
        { text: "فهم الكون أو النظام الكوني", trait: "Rational" },
        { text: "الاستقرار والانتماء", trait: "Generativity" }
      ]
    },
    {
      id: 11,
      text: "كم مرة تغير رأيك بناءً على معلومة جديدة؟",
      options: [
        { text: "نادرًا، أنا واثق من قراراتي", trait: "D" },
        { text: "أحيانًا، إذا كانت الحجة قوية", trait: "T" },
        { text: "غالبًا، أحب التعلم المستمر", trait: "N" },
        { text: "بشكل متكرر، أتأثر بمشاعر الآخرين", trait: "F" }
      ]
    },
    {
      id: 12,
      text: "ما أهم شيء في بيئة العمل بالنسبة لك؟",
      options: [
        { text: "النتائج والإنجازات", trait: "D" },
        { text: "الطاقة والتفاعل الاجتماعي", trait: "I" },
        { text: "الاستقرار والانسجام", trait: "S" },
        { text: "الدقة والتنظيم", trait: "C" }
      ]
    },
    {
      id: 13,
      text: "كيف تتعامل مع التغيير؟",
      options: [
        { text: "أنا من يُحدثه", trait: "D" },
        { text: "أرحب به إذا كان ممتعًا", trait: "I" },
        { text: "أتأقلم ببطء وحذر", trait: "S" },
        { text: "أحلله قبل قبوله", trait: "C" }
      ]
    },
    {
      id: 14,
      text: "ما الذي يُشعرك بالقلق؟",
      options: [
        { text: "فقدان السيطرة على الأمور", trait: "D" },
        { text: "الوحدة أو فقدان التفاعل", trait: "I" },
        { text: "الصراع أو التوتر بين الفريق", trait: "S" },
        { text: "العشوائية أو غياب النظام", trait: "C" }
      ]
    },
    {
      id: 15,
      text: "ما أكثر شيء تُقدّره في الآخرين؟",
      options: [
        { text: "القوة والطموح", trait: "D" },
        { text: "الطاقة والحيوية", trait: "I" },
        { text: "الولاء والدعم", trait: "S" },
        { text: "الذكاء والتحليل", trait: "C" }
      ]
    },
    {
      id: 16,
      text: "كيف تُخطط ليومك؟",
      options: [
        { text: "بشكل مباشر، أركز على المهام العاجلة", trait: "D" },
        { text: "بحسب ما يُشعرني بالحماس", trait: "I" },
        { text: "بهدوء، حسب الأولويات والالتزامات", trait: "S" },
        { text: "بجدول دقيق وتفصيلي", trait: "C" }
      ]
    },
    // 17-20 (أكمل كما في الكود الأصلي)
    {
      id: 17,
      text: "ما نوع التحدي الذي يثيرك؟",
      options: [
        { text: "التحديات الكبيرة التي تغير الواقع", trait: "D" },
        { text: "التحديات التي تُظهر إبداعي", trait: "I" },
        { text: "التحديات التي تساعد الآخرين", trait: "S" },
        { text: "التحديات التي تتطلب تفكيرًا عميقًا", trait: "C" }
      ]
    },
    {
      id: 18,
      text: "كيف تُظهر قوتك؟",
      options: [
        { text: "بالقيادة والسيطرة", trait: "D" },
        { text: "بالإلهام والحماس", trait: "I" },
        { text: "بالدعم والثبات", trait: "S" },
        { text: "بالتحليل والدقة", trait: "C" }
      ]
    },
    {
      id: 19,
      text: "ما الذي يُشعرك بالراحة؟",
      options: [
        { text: "تحقيق الهدف", trait: "D" },
        { text: "الضحك والتفاعل", trait: "I" },
        { text: "الهدوء والاستقرار", trait: "S" },
        { text: "النظام والفهم الكامل", trait: "C" }
      ]
    },
    {
      id: 20,
      text: "ما هو شعارك في الحياة؟",
      options: [
        { text: "النتيجة أهم من الطريقة", trait: "D" },
        { text: "الحياة للمرح والتجربة", trait: "I" },
        { text: "العلاقات تُبني بالصبر والوفاء", trait: "S" },
        { text: "الفهم يسبق كل شيء", trait: "C" }
      ]
    }
  ];
}

// --- تحليل الشخصية المطوّل (نفس كودك السابق) ---
function generatePersonalityAnalysis(answers, userData) {
  // ... نفس الدالة السابقة ...
  // لم يتم تغيير أي منطق هنا للحفاظ على النتائج
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

  let userData = { age: '', gender: '' };
  let currentQ = 0;
  let userAnswers = [];
  let personalityQuestions = getQuestions();

  Lang.init();

  submitUserInfo.addEventListener('click', () => {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    if (!age || !gender) {
      alert("الرجاء اختيار العمر والجنس");
      return;
    }
    userData.age = age;
    userData.gender = gender;
    userInfoEl.style.display = 'none';
    introEl.style.display = 'block';
  });

  startBtn.addEventListener('click', () => {
    introEl.style.display = 'none';
    quizEl.style.display = 'block';
    personalityQuestions = getQuestions(); // تحديث حسب اللغة
    showQuestion();
  });

  function showQuestion() {
    const q = personalityQuestions[currentQ];
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
  }

  nextBtn.addEventListener('click', () => {
    if (userAnswers[currentQ] === undefined) {
      alert("الرجاء اختيار إجابة");
      return;
    }
    currentQ++;
    if (currentQ < personalityQuestions.length) {
      showQuestion();
    } else {
      const fullAnalysis = generatePersonalityAnalysis(userAnswers, userData);
      analysisEl.textContent = fullAnalysis;
      quizEl.style.display = 'none';

      // --- إعلانات (كما هو بكودك) ---
      try {
        if (window.adNetworkLoaded) return;
        const adContainer = document.getElementById('monetag-inpage');
        if (!adContainer) return;
        adContainer.innerHTML = '<div style="padding: 15px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; font-size: 0.9rem; color: #94a3b8;">جاري تحميل الإعلان...</div>';
        const roll = Math.random();
        let network, scriptSrc;
        if (roll < 0.45) {
          network = 'monetag';
          const monetagZones = ['9643708', '9643709', '9643715', '9643714'];
          const randomEmid = monetagZones[Math.floor(Math.random() * monetagZones.length)];
          scriptSrc = `https://g.adspeed.net/gads.js?async=1&emid=${randomEmid}`;
        } else if (roll < 0.70) {
          network = 'adsterra';
          scriptSrc = "";
        } else if (roll < 0.90) {
          network = 'richads';
          scriptSrc = "";
        } else {
          network = 'hilltop';
          scriptSrc = "";
        }
        if (!scriptSrc || scriptSrc.trim() === "") {
          adContainer.innerHTML = '<div style="color: #94a3b8; font-size: 0.9rem;">إعلان: شارك الموقع مع أصدقائك!</div>';
          window.adNetworkLoaded = true;
          return;
        }
        const script = document.createElement('script');
        script.id = `ad-network-script-${network}`;
        script.async = true;
        script.src = scriptSrc;
        script.onload = () => {
          if (typeof goAds !== 'undefined' && goAds.length > 0) {
            goAds[0].loadAd && goAds[0].loadAd();
          } else if (window.RichAds && network === 'richads') {
            window.RichAds.setup && window.RichAds.setup();
          }
        };
        script.onerror = () => {
          adContainer.innerHTML = '<div style="color: #ef4444; font-size: 0.9rem;">فشل تحميل الإعلان</div>';
        };
        document.body.appendChild(script);
        window.adNetworkLoaded = true;
      } catch (e) {
        console.error("Ad Networks: فشل في التحميل", e);
      }
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
