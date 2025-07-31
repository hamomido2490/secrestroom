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

// --- نظام الترجمة ---
const Lang = {
  current: localStorage.getItem('lang') || 'ar',
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
      intro_desc: 'اكتشف شخصيتك الحقيقية من خلال 6 أسئلة تفتح لك أبواب الذات',
      intro_p1: 'أنت على وشك دخول غرفة لا تُظهر ما بداخلها إلا للصادقين مع أنفسهم.',
      intro_p2: 'أجب بصدق... وسترى ما لم تره من قبل.',
      start_btn: 'ادخل إلى الغرفة',
      question_prefix: 'سؤال',
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
      question_prefix: 'Question',
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
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = t.lang_switch;

    // تغيير اتجاه الصفحة
    document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.current;
  },

  bind() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.onclick = () => {
        this.current = this.current === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', this.current);
        this.apply();
      };
    }
  }
};

// --- الأسئلة ---
function getQuestions() {
  const t = Lang.translations[Lang.current];
  return [
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

const personalityQuestions = getQuestions();

// --- توليد التحليل النفسي الموسع ---
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

  const analysis = `
${profile.name}
${"=".repeat(profile.name.length + 1)}

${profile.celebrity}

${profile.description}

أنت شخصية لا تُشبه غيرها، لكن نمطك النفسي يُظهر أنك تنتمي إلى عالم القادة، المُخططين، أو المُلهمين. أنت لا تتبع، بل تُعيد تعريف الطريق. ما يميّزك ليس فقط ما تفعله، بل كيف تفكر، وكيف تتفاعل مع من حولك. أنت تمتلك قدرة نادرة على التوازن بين القوة والهدوء، بين الإصرار والتعاطف، وبين الطموح والمعنى.

${ageInsight ? `${ageInsight}` : ""}
${genderInsight ? `${genderInsight}` : ""}

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

  let userData = { age: '', gender: '' };
  let currentQ = 0;
  let userAnswers = [];

  // تفعيل نظام الترجمة
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
    showQuestion();
  });

  const showQuestion = () => {
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
  };

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

// === تفعيل إعلان من شبكة مربحة (4 شبكات - توزيع ذكي) ===
try {
  if (window.adNetworkLoaded) return;

  const adContainer = document.getElementById('monetag-inpage');
  if (!adContainer) return;

  // رسالة تحميل
  adContainer.innerHTML = '<div style="padding: 15px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; font-size: 0.9rem; color: #94a3b8;">جاري تحميل الإعلان...</div>';

  // توزيع ذكي: 45% Monetag, 25% Adsterra, 20% RichAds, 10% HilltopAds
  const roll = Math.random();
  let network, scriptSrc;

  if (roll < 0.45) {
    // --- Monetag (الأعلى أداءً) ---
    network = 'monetag';
    const monetagZones = ['9643708', '9643709', '9643715', '9643714'];
    const randomEmid = monetagZones[Math.floor(Math.random() * monetagZones.length)];
    scriptSrc = `https://g.adspeed.net/gads.js?async=1&emid=${randomEmid}`;
  } else if (roll < 0.70) {
    // --- Adsterra (إعلانات داخلية جذابة) ---
    network = 'adsterra';
    // ⬇️ ضع كود Adsterra هنا (مثل: https://jsc.adskeeper.com/...)
    scriptSrc = ""; // ← املأ هذا الرابط من لوحة Adsterra
  } else if (roll < 0.90) {
    // --- RichAds (نافذة خلفية عالية CPM) ---
    network = 'richads';
    // ⬇️ ضع كود RichAds هنا (مثل: https://cdn.richads.com/...)
    scriptSrc = ""; // ← املأ هذا الرابط من لوحة RichAds
  } else {
    // --- HilltopAds (نافذة خلفية بديلة) ---
    network = 'hilltop';
    // ⬇️ ضع كود HilltopAds هنا (مثل: https://cdn.hilltopads.com/...)
    scriptSrc = ""; // ← املأ هذا الرابط من لوحة HilltopAds
  }

  // إذا ما حطيت كود، ما يُنشئش سكربت
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
