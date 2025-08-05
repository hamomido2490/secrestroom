export const questions = {
  ar: [
    { id: 1, text: "عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟", options: [
      { text: "أنا متحمس لأبدأ يومي!", trait: "I", score: 4 },
      { text: "هل كل شيء تحت السيطرة؟", trait: "C", score: 3 },
      { text: "هل سأكون كافيًا اليوم؟", trait: "S", score: 2 },
      { text: "أريد أن أفهم معنى هذا اليوم", trait: "C", score: 3 }
    ]},
    { id: 2, text: "في لقاء اجتماعي جديد، ماذا تفعل؟", options: [
      { text: "أبدأ الحديث مع الجميع بسرعة", trait: "I", score: 4 },
      { text: "أراقب أولًا ثم أتحدث مع شخص واحد", trait: "S", score: 4 },
      { text: "أركز على من يمكن أن يفيدني أو أفيد منه", trait: "D", score: 3 },
      { text: "أحاول فهم مشاعر الآخرين بسرعة", trait: "S", score: 4 }
    ]},
    { id: 3, text: "ما نوع المهمة التي تجعلك 'تُنسى' من نفسك؟", options: [
      { text: "التحديات السريعة والملتزمة بالوقت", trait: "D", score: 4 },
      { text: "التحليل العميق للبيانات أو الأنظمة", trait: "C", score: 4 },
      { text: "مساعدة شخص على تجاوز أزمة", trait: "S", score: 4 },
      { text: "تنظيم فريق لتحقيق هدف منظم", trait: "I", score: 3 }
    ]},
    { id: 4, text: "ما أكثر شيء تبحث عنه في الصداقات؟", options: [
      { text: "المرح والطاقة", trait: "I", score: 4 },
      { text: "الولاء والاستقرار", trait: "S", score: 4 },
      { text: "العمق والمعنى", trait: "C", score: 4 },
      { text: "التحدي الفكري", trait: "D", score: 3 }
    ]},
    { id: 5, text: "كيف تتعامل مع الأخطاء؟", options: [
      { text: "أتعلم وأتحرك بسرعة", trait: "D", score: 4 },
      { text: "أحلل ما حدث بدقة", trait: "C", score: 4 },
      { text: "أشعر بالذنب، لكنني أسامح نفسي", trait: "S", score: 3 },
      { text: "أتساءل: هل هذا يثبت أنني غير كافٍ؟", trait: "S", score: 2 }
    ]},
    { id: 6, text: "ما الذي يُشعرك بالفخر؟", options: [
      { text: "تحقيق نتائج ملموسة", trait: "D", score: 4 },
      { text: "دعم شخص في أزمة", trait: "S", score: 4 },
      { text: "ابتكار فكرة جديدة", trait: "I", score: 4 },
      { text: "الالتزام بالواجبات والمسؤوليات", trait: "C", score: 3 }
    ]},
    { id: 7, text: "ما الذي تبحث عنه في قرار مهم؟", options: [
      { text: "السرعة والنتائج", trait: "D", score: 4 },
      { text: "الإلهام والانطباع الأول", trait: "I", score: 3 },
      { text: "استقرار الفريق والعلاقات", trait: "S", score: 4 },
      { text: "التحليل العميق والمنطق", trait: "C", score: 4 }
    ]},
    { id: 8, text: "ماذا تفعل عندما تشعر بالضغط؟", options: [
      { text: "أتحدى الموقف مباشرة", trait: "D", score: 4 },
      { text: "أبحث عن دعم من الآخرين", trait: "I", score: 3 },
      { text: "أبتعد مؤقتًا لأعيد التفكير", trait: "S", score: 3 },
      { text: "أحلل المشكلة من كل الزوايا", trait: "C", score: 4 }
    ]},
    { id: 9, text: "ما نوع الكتب أو المحتوى الذي تفضله؟", options: [
      { text: "قصص نجاح، قيادة، تأثير", trait: "D", score: 4 },
      { text: "روايات، فلسفة، تأملات وجودية", trait: "C", score: 4 },
      { text: "نكت، فيديوهات مضحكة، ترفيه", trait: "I", score: 3 },
      { text: "أدلة عملية، خطوات، تقنيات", trait: "S", score: 3 }
    ]},
    { id: 10, text: "ما الذي يُشعرك بالمعنى؟", options: [
      { text: "تحقيق إنجازات كبيرة", trait: "D", score: 4 },
      { text: "خدمة الآخرين", trait: "S", score: 4 },
      { text: "فهم الكون أو النظام الكوني", trait: "C", score: 4 },
      { text: "الاستقرار والانتماء", trait: "S", score: 3 }
    ]},
    { id: 11, text: "كم مرة تغير رأيك بناءً على معلومة جديدة؟", options: [
      { text: "نادرًا، أنا واثق من قراراتي", trait: "D", score: 4 },
      { text: "أحيانًا، إذا كانت الحجة قوية", trait: "C", score: 4 },
      { text: "غالبًا، لأنني أحب التعلم", trait: "I", score: 4 },
      { text: "دائمًا، لأنني أكره التصلب", trait: "I", score: 3 }
    ]},
    { id: 12, text: "ما الذي يُشعرك بالراحة؟", options: [
      { text: "تحقيق الهدف", trait: "D", score: 4 },
      { text: "الضحك والتفاعل", trait: "I", score: 4 },
      { text: "الهدوء والاستقرار", trait: "S", score: 4 },
      { text: "النظام والفهم الكامل", trait: "C", score: 4 }
    ]},
    { id: 13, text: "ما هو شعارك في الحياة؟", options: [
      { text: "النتيجة أهم من الطريقة", trait: "D", score: 4 },
      { text: "الحياة للمرح والتجربة", trait: "I", score: 4 },
      { text: "العلاقات تُبنى بالصبر والوفاء", trait: "S", score: 4 },
      { text: "الفهم يسبق كل شيء", trait: "C", score: 4 }
    ]},
    { id: 14, text: "كيف تتعامل مع الانتقاد؟", options: [
      { text: "أتحداه وأثبت نفسي", trait: "D", score: 4 },
      { text: "أضحك وأحوله إلى نكتة", trait: "I", score: 3 },
      { text: "أتألم لكنني أتعلم", trait: "S", score: 3 },
      { text: "أحلله وأستفيد منه", trait: "C", score: 4 }
    ]},
    { id: 15, text: "ما نوع القيادة التي تُلهمك؟", options: [
      { text: "قيادة حاسمة وسريعة", trait: "D", score: 3 },
      { text: "قيادة ملهمة ومحفزة", trait: "I", score: 3 },
      { text: "قيادة داعمة ومستقرة", trait: "S", score: 3 },
      { text: "قيادة منظمة وتحليلية", trait: "C", score: 3 }
    ]},
    { id: 16, text: "ما الذي يُشعرك بالإنجاز؟", options: [
      { text: "إكمال مهمة صعبة", trait: "D", score: 4 },
      { text: "رؤية الآخرين سعداء بعملي", trait: "I", score: 4 },
      { text: "الحفاظ على التوازن والانسجام", trait: "S", score: 4 },
      { text: "اتباع نظام دقيق", trait: "C", score: 4 }
    ]},
    { id: 17, text: "ما الذي يُشعرك بالحرية؟", options: [
      { text: "التحكم في مصيري", trait: "D", score: 4 },
      { text: "التعبير عن نفسي بحرية", trait: "I", score: 4 },
      { text: "العيش بسلام مع نفسي", trait: "S", score: 4 },
      { text: "الفهم العميق للعالم", trait: "C", score: 4 }
    ]},
    { id: 18, text: "كيف تتعامل مع التغيير؟", options: [
      { text: "أتحداه وأقوده", trait: "D", score: 4 },
      { text: "أحتفل به وانغمس فيه", trait: "I", score: 4 },
      { text: "أتأقلم ببطء وحذر", trait: "S", score: 3 },
      { text: "أحلله وأفهمه أولًا", trait: "C", score: 4 }
    ]},
    { id: 19, text: "ما الذي يحفزك للاستمرار؟", options: [
      { text: "تحقيق أهدافي الشخصية", trait: "D", score: 4 },
      { text: "إسعاد الآخرين ورؤيتهم يبتسمون", trait: "I", score: 4 },
      { text: "الحفاظ على الاستقرار والأمان", trait: "S", score: 4 },
      { text: "فهم الحقيقة والوصول للكمال", trait: "C", score: 4 }
    ]},
    { id: 20, text: "ما هو أسلوبك في حل المشاكل؟", options: [
      { text: "أتخذ قرارات سريعة وأتحمل المسؤولية", trait: "D", score: 4 },
      { text: "أبحث عن آراء الآخرين وأبني حلول جماعية", trait: "I", score: 4 },
      { text: "أتأنى وأفكر في تأثير الحل على الجميع", trait: "S", score: 4 },
      { text: "أبحث وأحلل حتى أجد الحل الأمثل", trait: "C", score: 4 }
    ]}
  ],
  en: [
    { id: 1, text: "When you wake up in the morning, what's the first thing on your mind?", options: [
      { text: "I'm excited to start my day!", trait: "I", score: 4 },
      { text: "Is everything under control?", trait: "C", score: 3 },
      { text: "Will I be enough today?", trait: "S", score: 2 },
      { text: "I want to understand the meaning of this day", trait: "C", score: 3 }
    ]},
    { id: 2, text: "At a new social gathering, what do you do?", options: [
      { text: "I start talking to everyone quickly", trait: "I", score: 4 },
      { text: "I observe first, then talk to one person", trait: "S", score: 4 },
      { text: "I focus on who can benefit me or I can benefit", trait: "D", score: 3 },
      { text: "I try to understand others' feelings quickly", trait: "S", score: 4 }
    ]},
    { id: 3, text: "What kind of task makes you 'lose yourself'?", options: [
      { text: "Fast-paced, time-bound challenges", trait: "D", score: 4 },
      { text: "Deep analysis of data or systems", trait: "C", score: 4 },
      { text: "Helping someone overcome a crisis", trait: "S", score: 4 },
      { text: "Organizing a team to achieve a structured goal", trait: "I", score: 3 }
    ]},
    { id: 4, text: "What do you look for most in friendships?", options: [
      { text: "Fun and energy", trait: "I", score: 4 },
      { text: "Loyalty and stability", trait: "S", score: 4 },
      { text: "Depth and meaning", trait: "C", score: 4 },
      { text: "Intellectual challenge", trait: "D", score: 3 }
    ]},
    { id: 5, text: "How do you handle mistakes?", options: [
      { text: "I learn and move on quickly.", trait: "D", score: 4 },
      { text: "I analyze what happened in detail.", trait: "C", score: 4 },
      { text: "I feel guilty, but I forgive myself.", trait: "S", score: 3 },
      { text: "I wonder: does this prove I'm not good enough?", trait: "S", score: 2 }
    ]},
    { id: 6, text: "What makes you feel proud?", options: [
      { text: "Achieving tangible results.", trait: "D", score: 4 },
      { text: "Supporting someone in a crisis.", trait: "S", score: 4 },
      { text: "Innovating a new idea.", trait: "I", score: 4 },
      { text: "Sticking to duties and responsibilities.", trait: "C", score: 3 }
    ]},
    { id: 7, text: "What do you look for in an important decision?", options: [
      { text: "Speed and results", trait: "D", score: 4 },
      { text: "Inspiration and first impression", trait: "I", score: 3 },
      { text: "Team stability and relationships", trait: "S", score: 4 },
      { text: "Deep analysis and logic", trait: "C", score: 4 }
    ]},
    { id: 8, text: "What do you do when you feel stressed?", options: [
      { text: "I confront the situation directly", trait: "D", score: 4 },
      { text: "I seek support from others", trait: "I", score: 3 },
      { text: "I step back temporarily to rethink", trait: "S", score: 3 },
      { text: "I analyze the problem from all angles", trait: "C", score: 4 }
    ]},
    { id: 9, text: "What type of books or content do you prefer?", options: [
      { text: "Success stories, leadership, influence", trait: "D", score: 4 },
      { text: "Novels, philosophy, existential reflections", trait: "C", score: 4 },
      { text: "Jokes, funny videos, entertainment", trait: "I", score: 3 },
      { text: "Practical guides, steps, techniques", trait: "S", score: 3 }
    ]},
    { id: 10, text: "What gives you a sense of meaning?", options: [
      { text: "Achieving great accomplishments", trait: "D", score: 4 },
      { text: "Serving others", trait: "S", score: 4 },
      { text: "Understanding the universe or cosmic system", trait: "C", score: 4 },
      { text: "Stability and belonging", trait: "S", score: 3 }
    ]},
    { id: 11, text: "How often do you change your mind based on new information?", options: [
      { text: "Rarely, I'm confident in my decisions", trait: "D", score: 4 },
      { text: "Sometimes, if the argument is strong", trait: "C", score: 4 },
      { text: "Often, because I love learning", trait: "I", score: 4 },
      { text: "Always, because I hate rigidity", trait: "I", score: 3 }
    ]},
    { id: 12, text: "What makes you feel comfortable?", options: [
      { text: "Achieving the goal", trait: "D", score: 4 },
      { text: "Laughing and interacting", trait: "I", score: 4 },
      { text: "Calm and stability", trait: "S", score: 4 },
      { text: "Order and complete understanding", trait: "C", score: 4 }
    ]},
    { id: 13, text: "What is your motto in life?", options: [
      { text: "The result is more important than the method.", trait: "D", score: 4 },
      { text: "Life is for fun and experience.", trait: "I", score: 4 },
      { text: "Relationships are built with patience and loyalty.", trait: "S", score: 4 },
      { text: "Understanding precedes everything.", trait: "C", score: 4 }
    ]},
    { id: 14, text: "How do you handle criticism?", options: [
      { text: "I challenge it and prove myself", trait: "D", score: 4 },
      { text: "I laugh and turn it into a joke", trait: "I", score: 3 },
      { text: "I hurt but I learn", trait: "S", score: 3 },
      { text: "I analyze it and benefit from it", trait: "C", score: 4 }
    ]},
    { id: 15, text: "What type of leadership inspires you?", options: [
      { text: "Decisive and fast leadership", trait: "D", score: 3 },
      { text: "Inspiring and motivating leadership", trait: "I", score: 3 },
      { text: "Supportive and stable leadership", trait: "S", score: 3 },
      { text: "Organized and analytical leadership", trait: "C", score: 3 }
    ]},
    { id: 16, text: "What makes you feel accomplished?", options: [
      { text: "Completing a difficult task", trait: "D", score: 4 },
      { text: "Seeing others happy with my work", trait: "I", score: 4 },
      { text: "Maintaining balance and harmony", trait: "S", score: 4 },
      { text: "Following a precise system", trait: "C", score: 4 }
    ]},
    { id: 17, text: "What makes you feel free?", options: [
      { text: "Controlling my destiny", trait: "D", score: 4 },
      { text: "Expressing myself freely", trait: "I", score: 4 },
      { text: "Living in peace with myself", trait: "S", score: 4 },
      { text: "Deep understanding of the world", trait: "C", score: 4 }
    ]},
    { id: 18, text: "How do you deal with change?", options: [
      { text: "I challenge it and lead it", trait: "D", score: 4 },
      { text: "I celebrate it and dive into it", trait: "I", score: 4 },
      { text: "I adapt slowly and cautiously", trait: "S", score: 3 },
      { text: "I analyze and understand it first", trait: "C", score: 4 }
    ]},
    { id: 19, text: "What motivates you to keep going?", options: [
      { text: "Achieving my personal goals", trait: "D", score: 4 },
      { text: "Making others happy and seeing them smile", trait: "I", score: 4 },
      { text: "Maintaining stability and safety", trait: "S", score: 4 },
      { text: "Understanding truth and reaching perfection", trait: "C", score: 4 }
    ]},
    { id: 20, text: "What is your approach to solving problems?", options: [
      { text: "I make quick decisions and take responsibility", trait: "D", score: 4 },
      { text: "I seek others' opinions and build collective solutions", trait: "I", score: 4 },
      { text: "I take my time and consider the impact on everyone", trait: "S", score: 4 },
      { text: "I research and analyze until I find the optimal solution", trait: "C", score: 4 }
    ]}
  ]
};
