// bundle.js - غرفة الأسرار | تحليل موسّع ومنسق للعربية
// تم التصميم والتطوير من قبل: Mohammed Tarek

// --- الأسئلة ---
const personalityQuestions = [
  {
    id: 1,
    text: "عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟",
    options: [
      { text: "أنا متحمس لأبدأ يومي!", trait: "E" },
      { text: "هل كل شيء تحت السيطرة؟", trait: "C" },
      { text: "هل سأكون كافيًا اليوم؟", trait: "Inferiority" },
      { text: "أريد أن أفهم معنى هذا اليوم", trait: "N" }
    ]
  },
  {
    id: 2,
    text: "في لقاء اجتماعي جديد، ماذا تفعل؟",
    options: [
      { text: "أبدأ الحديث مع الجميع بسرعة", trait: "E,I" },
      { text: "أراقب أولًا ثم أتحدث مع شخص واحد", trait: "I,S" },
      { text: "أركز على من يمكن أن يفيدني أو أفيد منه", trait: "T" },
      { text: "أحاول فهم مشاعر الآخرين بسرعة", trait: "F" }
    ]
  },
  {
    id: 3,
    text: "ما نوع المهمة التي تجعلك 'تُنسى' من نفسك؟",
    options: [
      { text: "التحديات السريعة والملتزمة بالوقت", trait: "Artisan" },
      { text: "التحليل العميق للبيانات أو الأنظمة", trait: "NT" },
      { text: "مساعدة شخص على تجاوز أزمة", trait: "Idealist" },
      { text: "تنظيم فريق لتحقيق هدف منظم", trait: "Guardian" }
    ]
  },
  {
    id: 4,
    text: "ما أكثر شيء تبحث عنه في الصداقات؟",
    options: [
      { text: "المرح والطاقة", trait: "I" },
      { text: "الولاء والاستقرار", trait: "S" },
      { text: "العمق والمعنى", trait: "NF" },
      { text: "التحدي الفكري", trait: "Rational" }
    ]
  },
  {
    id: 5,
    text: "كيف تتعامل مع الأخطاء؟",
    options: [
      { text: "أتعلم وأتحرك بسرعة", trait: "P" },
      { text: "أحلل ما حدث بدقة", trait: "C" },
      { text: "أشعر بالذنب، لكنني أسامح نفسي", trait: "A" },
      { text: "أتساءل: هل هذا يثبت أنني غير كافٍ؟", trait: "Inferiority" }
    ]
  },
  {
    id: 6,
    text: "ما الذي يُشعرك بالفخر؟",
    options: [
      { text: "تحقيق نتائج ملموسة", trait: "D" },
      { text: "دعم شخص في أزمة", trait: "F" },
      { text: "ابتكار فكرة جديدة", trait: "N" },
      { text: "الالتزام بالواجبات والمسؤوليات", trait: "J" }
    ]
  }
];

// --- توليد التحليل النفسي الموسع ---
function generatePersonalityAnalysis(answers, userData) {
  const { age, gender } = userData;

  // حساب لون الشخصية
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

  // تعريف الألوان بتحليل موسّع
  const colorProfiles = {
    red: {
      name: "النوع الأحمر",
      title: "القائد الطموح",
      description: `
أنت من النوع الذي لا ينتظر الفرصة، بل يصنعها بيديه. فيك قوة دفع داخلية لا تتوقف، ورغبة عميقة في التحكم في مصيرك. أنت لا تهرب من المسؤولية، بل تطلبها، لأنك تعرف أنك قادر على صنع الفارق. القرارات الحاسمة تخرج منك بسرعة، ليس لأنك متسرع، بل لأنك تثق بحدسك وخبرتك. تحب أن ترى النتائج بوضوح، والوقت الضائع يشعرك بالإحباط. لكنك لست قاسيًا، بل صريح — تُقدّر الصدق أكثر من المجاملة. في المواقف الصعبة، أنت أول من يقف في المقدمة. لست بحاجة إلى تصفيق، لكنك تعرف قيمتك. النجاح بالنسبة لك ليس ترفًا، بل ضرورة. أنت تُحدث تغييرًا ليس لأنه مطلوب، بل لأنه واجب.
      `.trim()
    },
    yellow: {
      name: "النوع الأصفر",
      title: "المحفّز المرح",
      description: `
أنت شرارة الضوء في أي مكان تدخله. طاقتك لا تنضب، وابتسامتك معدية. أنت لا ترى العقبات كما يراها الآخرون، بل تراها فرصة لإثبات أن المستحيل ممكن. تحب أن تكون محط الأنظار، ليس من أجل الغرور، بل لأنك تشعر بالحياة عندما تُلهم الآخرين. أنت تفكر خارج الصندوق، وتحب أن تكسر الروتين. القيود تُثبّطك، أما الحرية فتُطلق إبداعك. العلاقات بالنسبة لك ليست مجرد تواصل، بل تبادل للطاقة. أنت تُحيي من حولك، وتجعل المهام العادية تبدو كمغامرات. قد يراك البعض غير جاد، لكنهم لا يعلمون أنك جاد جدًا في الحفاظ على البهجة. أنت تُحدث تغييرًا ليس بالقوة، بل بالحماس.
      `.trim()
    },
    green: {
      name: "النوع الأخضر",
      title: "الداعم المستقر",
      description: `
أنت القلب الهادئ في وسط العاصفة. لا تُسرع، لكنك لا تتوقف. أنت تبني الثقة ببطء، لكنها تدوم مدى الحياة. الصراع يُرهقك، لكنك لا تهرب منه — بل تسعى لتسوية الأمور بهدوء. أنت لا تبحث عن التقدير، لكنك تستحقه أكثر من غيرك. أنت من يُكمل الفريق، من يُشعر الآخرين بالأمان. تحب الاستقرار، ليس لأنك خائف من التغيير، بل لأنك تعرف قيمته. أنت تُخطط بقلبك قبل عقلك، وتحدد أولوياتك حسب من يحبونك ويحتاجونك. أنت لا تقود بالصراخ، بل بالقدوة. لا تُظهر كل ما تشعر به، لكن من يعرفك جيدًا يعلم أن في داخلك بحرًا من العطاء. أنت تُحدث تغييرًا بصمت، لكن أثرك يدوم.
      `.trim()
    },
    blue: {
      name: "النوع الأزرق",
      title: "المُخطط الدقيق",
      description: `
أنت لا تُسرع، لأنك تعرف أن الخطأ الواحد قد يُكلّف الكثير. أنت تُفكّر بعمق، تُحلّل بتركيز، وتحب أن تفهم "لماذا" قبل أن تفعل "كيف". العشوائية تُربكك، أما النظام فيعطيك شعورًا بالأمان. أنت لا تُعجب بالانطباع الأول، بل بالأساس المتين. تحب أن تعرف كل التفاصيل، ليس من باب التفتيش، بل من باب المسؤولية. أنت تبحث عن المعنى وراء الأشياء، عن القاعدة الكامنة وراء السلوك. العلاقات عندك ليست عاطفية فقط، بل يجب أن تكون منطقية أيضًا. قد يراك البعض باردًا، لكنك ببساطة تحترم العقل بقدر احترامك للقلب. أنت تُحدث تغييرًا ليس بالحماس، بل بالرؤية.
      `.trim()
    }
  };

  const profile = colorProfiles[dominantColor];

  // تحليل العمر
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

  // تحليل جنسي
  let genderInsight = "";
  if (gender === 'أنثى') {
    genderInsight = "كأنثى، تُظهر قوة داخلية نادرة: التوازن بين القلب والعقل. أنت تُعطي دون أن تفقد ذاتك، وتدعم دون أن تذلّ نفسك.";
  } else if (gender === 'ذكر') {
    genderInsight = "كذكر، تحمل مسؤولية القيادة بثقلها وضوءها. أنت لا تهرب من التحدي، بل تراه فرصة لإثبات أن القوة الحقيقية تأتي من الداخل.";
  } else {
    genderInsight = "أنت تتجاوز التصنيفات، وتُظهر توازنًا نادرًا بين الحدس والمنطق، بين العاطفة والتحليل.";
  }

  // --- التقرير النهائي: منسق، موسّع، وسلس ---
  const analysis = `
${profile.name}
${"=".repeat(profile.name.length + 1)}

${profile.description}

أنت شخصية لا تُشبه غيرها، لكن نمطك النفسي يُظهر أنك تنتمي إلى عالم القادة، المُخططين، أو المُلهمين. أنت لا تتبع، بل تُعيد تعريف الطريق. ما يميّزك ليس فقط ما تفعله، بل كيف تفكر، وكيف تتفاعل مع من حولك. أنت تمتلك قدرة نادرة على التوازن بين القوة والهدوء، بين الإصرار والتعاطف، وبين الطموح والمعنى.

${ageInsight ? `
${ageInsight}` : ""}

${genderInsight ? `
${genderInsight}` : ""}

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
resultEl.style.display = 'block'; // اعرض النتيجة أولًا

// === تفعيل إعلانات Monetag بعد 2 ثانية من ظهور النتيجة ===
setTimeout(() => {
  try {
    // تأكد أن الإعلان لم يُفعّل من قبل
    if (window.monetagLoaded) return;

    // الأيديه الخاصة بك
    const monetagZones = ['9643618', '9643617', '9643591', '9643590'];
    const randomEmid = monetagZones[Math.floor(Math.random() * monetagZones.length)];

    // إنشاء سكربت Monetag
    const script = document.createElement('script');
    script.id = 'monetag-popunder';
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-cfasync', 'false');
    script.src = `https://g.adspeed.net/gads.js?async=1&emid=${randomEmid}`;

    // إضافة السكربت إلى الصفحة
    document.body.appendChild(script);

    // بعد التحميل، شغّل الإعلان
    script.onload = () => {
      console.log("Monetag: السكربت حُمّل بنجاح");
      setTimeout(() => {
        if (typeof goAds !== 'undefined' && goAds.length > 0) {
          if (goAds[0].loadAd) {
            goAds[0].loadAd();
            console.log("Monetag: الإعلان تم تحميله وعرضه");
          }
        }
      }, 100); // تأخير بسيط داخلي لضمان التفاعل
    };

    script.onerror = () => {
      console.error("Monetag: فشل في تحميل السكربت");
    };

    // علامة أن الإعلان تم تفعيله
    window.monetagLoaded = true;

  } catch (e) {
    console.error("Monetag: خطأ غير متوقع", e);
  }
}, 2000); // ⏱️ 2 ثانية بعد ظهور النتيجة
    }
  });

  restartBtn.addEventListener('click', () => {
    currentQ = 0;
    userAnswers = [];
    resultEl.style.display = 'none';
    userInfoEl.style.display = 'block';
  });
});
