// bundle.js - غرفة الأسرار | تم التحديث: إزالة الإعلانات، تحسين الأداء
// تم التصميم والتطوير من قبل: Mohammed Tarek

// الأسئلة
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

// تحليل الشخصية
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
      traits: ["حازم", "طموح", "مباشر", "محب للنتائج"],
      description: `أنت من النوع الذي لا ينتظر الفرصة، بل يصنعها. لديك قوة دفع داخلية، وثقة في قراراتك. تحب أن ترى النتائج، ولا تهرب من التحدي.`
    },
    yellow: {
      name: "النوع الأصفر",
      title: "المحفّز المرح",
      traits: ["اجتماعي", "متفائل", "مبدع", "حيوي"],
      description: `أنت شرارة الضوء في أي مكان. طاقتك معدية، وتحب أن تُلهم الآخرين. لا ترى العقبات كما يراها غيرك، بل كفرص للإبداع.`
    },
    green: {
      name: "النوع الأخضر",
      title: "الداعم المستقر",
      traits: ["ودود", "صبور", "متعاون", "يحافظ على الانسجام"],
      description: `أنت القلب الهادئ في وسط العاصفة. تبني الثقة ببطء، لكنها تدوم. لا تقود بالصراخ، بل بالقدوة. أنت من يُشعر الآخرين بالأمان.`
    },
    blue: {
      name: "النوع الأزرق",
      title: "المُخطط الدقيق",
      traits: ["منطقي", "محلل", "منظم", "يسعى للدقة"],
      description: `أنت تفكر قبل أن تتصرف. تحب النظام، وتحتاج إلى فهم الصورة الكاملة. قد يراك البعض باردًا، لكنك ببساطة تحترم العقل بقدر احترامك للقلب.`
    }
  };

  const profile = colorProfiles[dominantColor];

  let ageInsight = "";
  if (age === '13-18') {
    ageInsight = "أنت في مرحلة بناء الهوية، حيث تبحث عن نفسك ومكانك في العالم.";
  } else if (age === '19-25') {
    ageInsight = "أنت في عمر الحميمية، حيث تبحث عن علاقات حقيقية وارتباطات عميقة.";
  } else if (age === '26-35' || age === '36-45') {
    ageInsight = "أنت في مرحلة الإنجابية، حيث تبني، تُعلّم، وتُساهم في الجيل القادم.";
  } else if (age === '46-60' || age === '60+') {
    ageInsight = "أنت في مرحلة التقييم، حيث تنظر إلى رحلة حياتك بعين الحكيم.";
  }

  let genderInsight = "";
  if (gender === 'أنثى') {
    genderInsight = "كأنثى، تُظهر قوة داخلية نادرة: التوازن بين القلب والعقل.";
  } else if (gender === 'ذكر') {
    genderInsight = "كذكر، تحمل مسؤولية القيادة بثقلها وضوءها.";
  } else {
    genderInsight = "أنت تتجاوز التصنيفات، وتُظهر توازنًا نادرًا بين الحدس والمنطق.";
  }

  const analysis = `
${profile.name}
${"=".repeat(profile.name.length + 1)}

${profile.description}

أبرز صفاتك القوية:
${profile.traits.map(trait => `• ${trait}`).join('\n')}

${ageInsight ? `\nملاحظة حسب مرحلتك العمرية:\n${ageInsight}` : ""}

${genderInsight ? `\nملاحظة حسب هويتك:\n${genderInsight}` : ""}

خلاصة:
--------
أنت شخصية فريدة، لكن لونك النفسي المسيطر هو **${profile.name}**، وهذا لا يُقيّدك، بل يُظهر نمطك المفضل في التفكير، التفاعل، والوجود.  
أنت لا تتبع القواعد، بل تُعيد تعريفها.

---

المصادر النفسية المستخدمة في التحليل:
- نظرية الألوان الشخصية
- نظرية MBTI
- نظرية كيرسي
- نظرية DISC
- نظرية العوامل الخمسة الكبرى
- نظرية أدلر
- نظرية ماسلو
- نظرية روجرز
- نظرية إريكسون
- نظرية PERMA
- نظرية الانغماس (Flow)

تم إعداد هذا التقرير بعناية من قِبل:  
**غرفة الأسرار | Chamber of Secrets**  
تم التصميم والتحليل النفسي والتطوير من قبل:  
**Mohammed Tarek**  
© 2025 جميع الحقوق محفوظة.
  `.trim();

  return analysis;
}

// نظام التفاعل
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
