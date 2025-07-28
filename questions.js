// questions.js - ملف الأسئلة المحسن مع دعم الأرق، الوزن، وتنويع المقاييس
// المجالات:
// - vision: الرؤية الداخلية (فهم الذات، الأحلام، اللاوعي)
// - analysis: التحليل العميق (التفكير، اتخاذ القرار، الثقة)
// - healing: الشفاء النفسي (التعامل مع التوتر، النوم، قبول الذات)
// - discovery: الاكتشاف (الحدس، الأهداف، التعلم)

export const questions = [
  // === مجال الرؤية الداخلية (Vision) - 10 أسئلة ===
  {
    id: 1,
    category: "freud",
    domain: "vision",
    scale: "likert",
    weight: 1.2, // وزن مرتفع لأهمية اللاوعي في نظرية فرويد
    text: {
      ar: "هل تحلم غالبًا بأحلام تعكس مشاعرك الداخلية المكبوتة؟",
      en: "Do you often have dreams that reflect your repressed inner emotions?",
      fr: "Rêvez-vous souvent de rêves reflétant vos émotions intérieures réprimées ?",
      es: "¿Sueles soñar con sueños que reflejan tus emociones internas reprimidas?",
      de: "Träumst du oft von Träumen, die deine unterdrückten inneren Emotionen widerspiegeln?",
      zh: "你经常做反映你压抑内心情绪的梦吗？"
    }
  },
  {
    id: 2,
    category: "jung",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر بوجود جانب غامض في شخصيتك لم تكتشفه بعد؟",
      en: "Do you feel there’s a mysterious side to your personality yet to be discovered?",
      fr: "Penses-tu qu’il y a une facette mystérieuse de ta personnalité encore à découvrir ?",
      es: "¿Sientes que hay un lado misterioso de tu personalidad aún por descubrir?",
      de: "Fühlst du, dass es eine geheimnisvolle Seite deiner Persönlichkeit gibt, die noch entdeckt werden muss?",
      zh: "你觉得你的个性中有一个尚未发现的神秘面吗？"
    }
  },
  {
    id: 3,
    category: "family_systems",
    domain: "vision",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تعتقد أن تجارب طفولتك تشكل علاقاتك الحالية؟",
      en: "Do you believe your childhood experiences shape your current relationships?",
      fr: "Penses-tu que tes expériences d’enfance façonnent tes relations actuelles ?",
      es: "¿Crees que tus experiencias de infancia moldean tus relaciones actuales?",
      de: "Glaubst du, dass deine Kindheitserfahrungen deine aktuellen Beziehungen prägen?",
      zh: "你认为你的童年经历塑造了你现在的关系吗？"
    }
  },
  {
    id: 4,
    category: "enneagram",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تفكر كثيرًا في معنى حياتك وهدفك الوجودي؟",
      en: "Do you often think about the meaning of your life and your existential purpose?",
      fr: "Penses-tu souvent au sens de ta vie et à ton but existentiel ?",
      es: "¿Piensas a menudo en el significado de tu vida y tu propósito existencial?",
      de: "Denkst du oft über den Sinn deines Lebens und deinen existenziellen Zweck nach?",
      zh: "你经常思考你的人生意义和存在目标吗？"
    }
  },
  {
    id: 5,
    category: "big_five",
    domain: "vision",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تعتبر نفسك شخصًا منضبطًا وملتزمًا في معظم الوقت؟",
      en: "Do you consider yourself disciplined and responsible most of the time?",
      fr: "Te considères-tu comme une personne disciplinée et responsable la plupart du temps ?",
      es: "¿Te consideras una persona disciplinada y responsable la mayor parte del tiempo?",
      de: "Hältst du dich für eine disziplinierte und verantwortungsbewusste Person die meiste Zeit?",
      zh: "你认为自己大多数时候是一个有纪律和负责任的人吗？"
    }
  },
  {
    id: 6,
    category: "rebt",
    domain: "vision",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تؤثر أفكارك السلبية على مشاعرك وسلوكك؟",
      en: "Do your negative thoughts impact your emotions and behavior?",
      fr: "Tes pensées négatives affectent-elles tes émotions et ton comportement ?",
      es: "¿Tus pensamientos negativos afectan tus emociones y comportamiento?",
      de: "Beeinflussen deine negativen Gedanken deine Gefühle und dein Verhalten?",
      zh: "你的负面想法会影响你的情绪和行为吗？"
    }
  },
  {
    id: 7,
    category: "jung",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر أن أحلامك تحمل رموزًا أو رسائل خاصة؟",
      en: "Do you feel your dreams carry special symbols or messages?",
      fr: "Penses-tu que tes rêves portent des symboles ou des messages spéciaux ?",
      es: "¿Sientes que tus sueños contienen símbolos o mensajes especiales?",
      de: "Fühlst du, dass deine Träume besondere Symbole oder Botschaften enthalten?",
      zh: "你觉得你的梦境带有特殊的符号或信息吗？"
    }
  },
  {
    id: 8,
    category: "freud",
    domain: "vision",
    scale: "likert",
    weight: 1.2, // وزن مرتفع لأهمية اللاوعي في نظرية فرويد
    text: {
      ar: "هل تلاحظ أن رغباتك اللاواعية تؤثر على قراراتك؟",
      en: "Do you notice that your unconscious desires influence your decisions?",
      fr: "Remarques-tu que tes désirs inconscients influencent tes décisions ?",
      es: "¿Notas que tus deseos inconscientes influyen en tus decisiones?",
      de: "Bemerkst du, dass deine unbewussten Wünsche deine Entscheidungen beeinflussen?",
      zh: "你有没有注意到你的无意识欲望影响了你的决定？"
    }
  },
  {
    id: 9,
    category: "kohlberg",
    domain: "vision",
    scale: "yes-no",
    weight: 1.1,
    text: {
      ar: "هل تأخذ قراراتك بناءً على مبادئ أخلاقية ثابتة؟",
      en: "Do you make decisions based on fixed moral principles?",
      fr: "Prends-tu des décisions basées sur des principes moraux fixes ?",
      es: "¿Tomas decisiones basadas en principios morales fijos?",
      de: "Treffst du Entscheidungen basierend auf festen moralischen Prinzipien?",
      zh: "你会根据固定的道德原则做决定吗？"
    }
  },
  {
    id: 10,
    category: "vygotsky",
    domain: "vision",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تعتقد أن التفاعل الاجتماعي يساعدك في فهم نفسك؟",
      en: "Do you believe social interactions help you understand yourself?",
      fr: "Penses-tu que les interactions sociales t’aident à te comprendre ?",
      es: "¿Crees que las interacciones sociales te ayudan a entenderte a ti mismo?",
      de: "Glaubst du, dass soziale Interaktionen dir helfen, dich selbst zu verstehen?",
      zh: "你认为社交互动有助于你了解自己吗？"
    }
  },

  // === مجال التحليل العميق (Analysis) - 10 أسئلة ===
  {
    id: 11,
    category: "adler",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تسعى دائمًا لإثبات قيمتك من خلال إنجازاتك؟",
      en: "Do you always strive to prove your worth through your achievements?",
      fr: "Cherches-tu toujours à prouver ta valeur à travers tes réalisations ?",
      es: "¿Siempre te esfuerzas por demostrar tu valía a través de tus logros?",
      de: "Strebst du immer danach, deinen Wert durch deine Erfolge zu beweisen?",
      zh: "你总是通过你的成就来证明自己的价值吗？"
    }
  },
  {
    id: 12,
    category: "adler",
    domain: "analysis",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تحفزك نجاحات الآخرين لتحقيق إنجازات أكبر؟",
      en: "Do others’ successes motivate you to achieve greater accomplishments?",
      fr: "Les succès des autres te motivent-ils à accomplir de plus grandes réalisations ?",
      es: "¿Los éxitos de los demás te motivan a lograr mayores logros?",
      de: "Motivieren dich die Erfolge anderer, größere Leistungen zu erzielen?",
      zh: "他人的成功会激励你取得更大的成就吗？"
    }
  },
  {
    id: 13,
    category: "erikson",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تجد صعوبة في الثقة بالآخرين بسبب تجارب سابقة؟",
      en: "Do you find it hard to trust others due to past experiences?",
      fr: "Trouves-tu difficile de faire confiance aux autres à cause d’expériences passées ?",
      es: "¿Te resulta difícil confiar en los demás debido a experiencias pasadas?",
      de: "Fällt es dir schwer, anderen aufgrund vergangener Erfahrungen zu vertrauen?",
      zh: "由于过去的经历，你觉得很难信任他人吗？"
    }
  },
  {
    id: 14,
    category: "big_five",
    domain: "analysis",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تستمتع بتجربة أفكار وتجارب جديدة؟",
      en: "Do you enjoy exploring new ideas and experiences?",
      fr: "Aimes-tu explorer de nouvelles idées et expériences ?",
      es: "¿Disfrutas explorando nuevas ideas y experiencias?",
      de: "Genießt du es, neue Ideen und Erfahrungen zu erkunden?",
      zh: "你喜欢探索新的想法和经历吗？"
    }
  },
  {
    id: 15,
    category: "rebt",
    domain: "analysis",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تحاول تعديل أفكارك السلبية عند الشعور بالضغط؟",
      en: "Do you try to modify your negative thoughts when feeling stressed?",
      fr: "Essaies-tu de modifier tes pensées négatives lorsque tu te sens stressé ?",
      es: "¿Intentas modificar tus pensamientos negativos cuando te sientes estresado?",
      de: "Versuchst du, deine negativen Gedanken zu ändern, wenn du gestresst bist?",
      zh: "你在感到压力时会尝试改变你的负面想法吗？"
    }
  },
  {
    id: 16,
    category: "theory_of_mind",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تفسر لغة جسد الآخرين بدقة عالية؟",
      en: "Do you accurately interpret others’ body language?",
      fr: "Interprètes-tu précisément le langage corporel des autres ?",
      es: "¿Interpretas con precisión el lenguaje corporal de los demás?",
      de: "Interpretierst du die Körpersprache anderer genau?",
      zh: "你能准确解读他人的肢体语言吗？"
    }
  },
  {
    id: 17,
    category: "big_five",
    domain: "analysis",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تميل إلى تحليل المواقف بعمق قبل اتخاذ قرار؟",
      en: "Do you tend to analyze situations deeply before making a decision?",
      fr: "As-tu tendance à analyser les situations en profondeur avant de prendre une décision ?",
      es: "¿Tiendes a analizar las situaciones en profundidad antes de tomar una decisión?",
      de: "Neigst du dazu, Situationen gründlich zu analysieren, bevor du eine Entscheidung triffst?",
      zh: "你在做决定前倾向于深入分析情况吗？"
    }
  },
  {
    id: 18,
    category: "adler",
    domain: "analysis",
    scale: "1-5",
    weight: 1.1,
    text: {
      ar: "هل تشعر أنك بحاجة لتأكيد من الآخرين لتشعر بالثقة؟",
      en: "Do you feel the need for validation from others to feel confident?",
      fr: "Ressens-tu le besoin d’être validé par les autres pour te sentir confiant ?",
      es: "¿Sientes la necesidad de la validación de los demás para sentirte confiado?",
      de: "Fühlst du das Bedürfnis nach Bestätigung durch andere, um selbstbewusst zu sein?",
      zh: "你觉得需要他人的认可来感到自信吗？"
    }
  },
  {
    id: 19,
    category: "piaget",
    domain: "analysis",
    scale: "yes-no",
    weight: 1.0,
    text: {
      ar: "هل تحب استكشاف كيفية عمل الأشياء من خلال التجربة؟",
      en: "Do you enjoy exploring how things work through experimentation?",
      fr: "Aimes-tu explorer comment les choses fonctionnent par l’expérimentation ?",
      es: "¿Disfrutas explorando cómo funcionan las cosas a través de la experimentación?",
      de: "Erforschst du gerne durch Experimentieren, wie Dinge funktionieren?",
      zh: "你喜欢通过实验探索事物如何运作吗？"
    }
  },
  {
    id: 20,
    category: "disc",
    domain: "analysis",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تفضل العمل بطريقة منهجية ومنظمة؟",
      en: "Do you prefer to work in a systematic and organized manner?",
      fr: "Préfères-tu travailler de manière systématique et organisée ?",
      es: "¿Prefieres trabajar de manera sistemática y organizada?",
      de: "Arbeitest du lieber systematisch und organisiert?",
      zh: "你更喜欢以系统和有条理的方式工作吗？"
    }
  },

  // === مجال الشفاء النفسي (Healing) - 10 أسئلة ===
  {
    id: 21,
    category: "freud",
    domain: "healing",
    scale: "likert",
    weight: 1.2, // وزن مرتفع لأهمية الطفولة في نظرية فرويد
    text: {
      ar: "هل تعتقد أن طفولتك لها تأثير كبير على شخصيتك اليوم؟",
      en: "Do you believe your childhood has a significant impact on your personality today?",
      fr: "Penses-tu que ton enfance a un impact significatif sur ta personnalité aujourd’hui ?",
      es: "¿Crees que tu infancia tiene un impacto significativo en tu personalidad hoy?",
      de: "Glaubst du, dass deine Kindheit einen erheblichen Einfluss auf deine heutige Persönlichkeit hat?",
      zh: "你认为你的童年对今天的你有重大影响吗？"
    }
  },
  {
    id: 22,
    category: "multiple_selves",
    domain: "healing",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر أن أجزاء مختلفة من شخصيتك تتصارع أحيانًا؟",
      en: "Do you feel different parts of your personality sometimes conflict?",
      fr: "Ressens-tu parfois un conflit entre différentes parties de ta personnalité ?",
      es: "¿Sientes que diferentes partes de tu personalidad a veces entran en conflicto?",
      de: "Fühlst du manchmal einen Konflikt zwischen verschiedenen Teilen deiner Persönlichkeit?",
      zh: "你觉得你的个性不同部分有时会冲突吗？"
    }
  },
  {
    id: 23,
    category: "rogers",
    domain: "healing",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تجد صعوبة في قبول نفسك كما أنت؟",
      en: "Do you find it hard to accept yourself as you are?",
      fr: "Trouves-tu difficile de t’accepter tel que tu es ?",
      es: "¿Te resulta difícil aceptarte tal como eres?",
      de: "Fällt es dir schwer, dich so zu akzeptieren, wie du bist?",
      zh: "你觉得很难接受真实的自己吗？"
    }
  },
  {
    id: 24,
    category: "maslow",
    domain: "healing",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تشعر بالوحدة حتى وأنت محاط بالناس؟",
      en: "Do you feel lonely even when surrounded by people?",
      fr: "Te sens-tu seul même lorsque tu es entouré de gens ?",
      es: "¿Te sientes solo incluso cuando estás rodeado de personas?",
      de: "Fühlst du dich einsam, selbst wenn du von Menschen umgeben bist?",
      zh: "即使周围有人，你也会感到孤独吗？"
    }
  },
  {
    id: 25,
    category: "eysenck_pen",
    domain: "healing",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تشعر بالقلق بسهولة في المواقف الجديدة؟",
      en: "Do you easily feel anxious in new situations?",
      fr: "Te sens-tu facilement anxieux dans de nouvelles situations ?",
      es: "¿Te sientes ansioso fácilmente en situaciones nuevas?",
      de: "Fühlst du dich in neuen Situationen leicht ängstlich?",
      zh: "你在新环境中容易感到焦虑吗？"
    }
  },
  {
    id: 26,
    category: "rebt",
    domain: "healing",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تستخدم تقنيات مثل التأمل أو التنفس لتقليل التوتر؟",
      en: "Do you use techniques like meditation or breathing to reduce stress?",
      fr: "Utilises-tu des techniques comme la méditation ou la respiration pour réduire le stress ?",
      es: "¿Usas técnicas como la meditación o la respiración para reducir el estrés?",
      de: "Nutzt du Techniken wie Meditation oder Atmung, um Stress zu reduzieren?",
      zh: "你会使用冥想或呼吸等技巧来减轻压力吗？"
    }
  },
  {
    id: 27,
    category: "theory_of_mind",
    domain: "healing",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تستخدم لغة الجسد لتعزيز التواصل مع الآخرين؟",
      en: "Do you use body language to enhance communication with others?",
      fr: "Utilises-tu le langage corporel pour améliorer la communication avec les autres ?",
      es: "¿Usas el lenguaje corporal para mejorar la comunicación con los demás?",
      de: "Nutzt du Körpersprache, um die Kommunikation mit anderen zu verbessern?",
      zh: "你会使用肢体语言来增强与他人的沟通吗？"
    }
  },
  {
    id: 28,
    category: "sleep",
    domain: "healing",
    scale: "1-5",
    weight: 1.5, // وزن مرتفع لأهمية النوم في الشفاء النفسي
    text: {
      ar: "كم ساعة تنام يوميًا في المتوسط؟",
      en: "How many hours do you sleep daily on average?",
      fr: "Combien d’heures dors-tu en moyenne par jour ?",
      es: "¿Cuántas horas duermes al día en promedio?",
      de: "Wie viele Stunden schläfst du täglich im Durchschnitt?",
      zh: "你每天平均睡多少小时？"
    }
  },
  {
    id: 29,
    category: "sleep",
    domain: "healing",
    scale: "likert",
    weight: 1.5, // وزن مرتفع لأهمية النوم في الشفاء النفسي
    text: {
      ar: "هل تفكر كثيرًا في المشاكل أو العمل قبل النوم؟",
      en: "Do you think a lot about problems or work before sleeping?",
      fr: "Penses-tu beaucoup aux problèmes ou au travail avant de dormir ?",
      es: "¿Piensas mucho en problemas o trabajo antes de dormir?",
      de: "Denkst du viel über Probleme oder Arbeit nach, bevor du einschläfst?",
      zh: "你在睡觉前会想很多关于问题或工作的事情吗？"
    }
  },
  {
    id: 30,
    category: "colors",
    domain: "healing",
    scale: "yes-no",
    weight: 1.0,
    text: {
      ar: "هل تشعر أن الألوان تؤثر على مزاجك بشكل واضح؟",
      en: "Do you feel that colors noticeably affect your mood?",
      fr: "Penses-tu que les couleurs affectent visiblement ton humeur ?",
      es: "¿Sientes que los colores afectan notablemente tu estado de ánimo?",
      de: "Fühlst du, dass Farben deine Stimmung deutlich beeinflussen?",
      zh: "你觉得颜色会明显影响你的情绪吗？"
    }
  },

  // === مجال الاكتشاف (Discovery) - 10 أسئلة ===
  {
    id: 31,
    category: "mbti",
    domain: "discovery",
    scale: "likert",
    weight: 1.1,
    text: {
      ar: "هل تجد صعوبة في تحديد نوع شخصيتك بدقة؟",
      en: "Do you find it hard to precisely define your personality type?",
      fr: "Trouves-tu difficile de définir précisément ton type de personnalité ?",
      es: "¿Te resulta difícil definir con precisión tu tipo de personalidad?",
      de: "Fällt es dir schwer, deinen Persönlichkeitstyp präzise zu definieren?",
      zh: "你觉得很难准确定义你的个性类型吗？"
    }
  },
  {
    id: 32,
    category: "jung",
    domain: "discovery",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل ترى أنماطًا أو معاني في الأحداث العشوائية؟",
      en: "Do you see patterns or meanings in random events?",
      fr: "Vois-tu des motifs ou des significations dans des événements aléatoires ?",
      es: "¿Ves patrones o significados en eventos aleatorios?",
      de: "Siehst du Muster oder Bedeutungen in zufälligen Ereignissen?",
      zh: "你在随机事件中看到模式或意义吗？"
    }
  },
  {
    id: 33,
    category: "skinner",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تساعدك المكافآت على تحسين سلوكك؟",
      en: "Do rewards help you improve your behavior?",
      fr: "Les récompenses t’aident-elles à améliorer ton comportement ?",
      es: "¿Las recompensas te ayudan a mejorar tu comportamiento?",
      de: "Helfen dir Belohnungen, dein Verhalten zu verbessern?",
      zh: "奖励会帮助你改善行为吗？"
    }
  },
  {
    id: 34,
    category: "adler",
    domain: "discovery",
    scale: "1-5",
    weight: 1.1,
    text: {
      ar: "هل تشعر أن أهدافك الشخصية مختلفة عما يراه الآخرون؟",
      en: "Do you feel your personal goals differ from what others perceive?",
      fr: "Penses-tu que tes objectifs personnels diffèrent de ce que les autres perçoivent ?",
      es: "¿Sientes que tus objetivos personales difieren de lo que otros perciben?",
      de: "Fühlst du, dass deine persönlichen Ziele von dem abweichen, was andere wahrnehmen?",
      zh: "你觉得你的个人目标与他人所感知的不同吗？"
    }
  },
  {
    id: 35,
    category: "jung",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تعتمد على حدسك في اتخاذ القرارات المهمة؟",
      en: "Do you rely on your intuition for important decisions?",
      fr: "Te fies-tu à ton intuition pour prendre des décisions importantes ?",
      es: "¿Confías en tu intuición para tomar decisiones importantes?",
      de: "Verlässt du dich bei wichtigen Entscheidungen auf deine Intuition?",
      zh: "你在做重要决定时依靠你的直觉吗？"
    }
  },
  {
    id: 36,
    category: "maslow",
    domain: "discovery",
    scale: "1-5",
    weight: 1.1,
    text: {
      ar: "هل تشعر أن لديك هدفًا خاصًا في الحياة؟",
      en: "Do you feel you have a unique purpose in life?",
      fr: "Penses-tu avoir un but unique dans la vie ?",
      es: "¿Sientes que tienes un propósito único en la vida?",
      de: "Fühlst du, dass du einen einzigartigen Lebenszweck hast?",
      zh: "你觉得你有独特的人生目标吗？"
    }
  },
  {
    id: 37,
    category: "mbti",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تفضل التخطيط المسبق أم التصرف بعفوية؟",
      en: "Do you prefer planning ahead or acting spontaneously?",
      fr: "Préfères-tu planifier à l’avance ou agir spontanément ?",
      es: "¿Prefieres planificar con antelación o actuar espontáneamente?",
      de: "Planst du lieber im Voraus oder handelst du spontan?",
      zh: "你更喜欢提前计划还是自发行动？"
    }
  },
  {
    id: 38,
    category: "skinner",
    domain: "discovery",
    scale: "1-5",
    weight: 1.0,
    text: {
      ar: "هل تجد أن التكرار يساعدك في تعلم مهارات جديدة؟",
      en: "Do you find that repetition helps you learn new skills?",
      fr: "Trouves-tu que la répétition t’aide à apprendre de nouvelles compétences ?",
      es: "¿Encuentras que la repetición te ayuda a aprender nuevas habilidades?",
      de: "Findest du, dass Wiederholung dir hilft, neue Fähigkeiten zu erlernen?",
      zh: "你觉得重复有助于你学习新技能吗？"
    }
  },
  {
    id: 39,
    category: "bandura",
    domain: "discovery",
    scale: "likert",
    weight: 1.0,
    text: {
      ar: "هل تتعلم من خلال مراقبة تصرفات الآخرين؟",
      en: "Do you learn by observing others' behaviors?",
      fr: "Apprends-tu en observant les comportements des autres ?",
      es: "¿Aprendes observando el comportamiento de los demás?",
      de: "Lernst du durch das Beobachten des Verhaltens anderer?",
      zh: "你通过观察他人的行为来学习吗？"
    }
  },
  {
    id: 40,
    category: "keirsey",
    domain: "discovery",
    scale: "yes-no",
    weight: 1.1,
    text: {
      ar: "هل تفضل العمل ضمن فريق أم بمفردك؟",
      en: "Do you prefer working in a team or alone?",
      fr: "Préfères-tu travailler en équipe ou seul ?",
      es: "¿Prefieres trabajar en equipo o solo?",
      de: "Arbeitest du lieber im Team oder alleine?",
      zh: "你更喜欢团队工作还是独自工作？"
    }
  }
];