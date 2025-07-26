// analysis_data.js - قاعدة بيانات التحليل النفسي الكاملة
const analysisData = {
  ar: {
    freud: {
      name: "التحليل الكلاسيكي (فرويد)",
      description: "تشرح هذه النظرية التركيز على اللاوعي والصراعات الداخلية والدوافع الجنسية والعدوانية كقوى أساسية في تشكيل السلوك والشخصية. تركز على تأثير الطفولة المبكرة، والآليات الدفاعية، والأحلام، والرمزية في فهم النفس.",
      strengths: ["الوعي بالدوافع الداخلية", "فهم تأثير الطفولة المبكرة", "التفسير العميق للسلوك غير الواعي", "الاهتمام بالصراع النفسي"],
      weaknesses: ["تجاهل العوامل الاجتماعية والثقافية", "التركيز المفرط على الجنس", "صعوبة الإثبات العلمي", "التعقيد الشديد أحيانًا"],
      high_score_interpretation: "درجتك العالية تشير إلى وعي قوي بالتعقيدات الداخلية والصراعات النفسية. أنت متأثر بتجاربك السابقة، ولديك حساسية عالية لمشاعرك ودوافعك المكبوتة. هذا يمنحك عمقًا في الفهم النفسي لكنه قد يحمل بعض التحديات العاطفية.",
      low_score_interpretation: "درجتك المنخفضة تشير إلى تركيز أكبر على الواقع والمنطق الواعي. أنت تتحكم جيدًا في مشاعرك، وتفضل التعامل مع الأمور بشكل مباشر. هذا يمنحك استقرارًا عاطفيًا، لكن قد تفوتك بعض التعقيدات الداخلية التي تساعد على الفهم الذاتي العميق.",
      high_score_traits: ["الوعي بالدوافع المكبوتة", "التأثر الكبير بالتجارب الطفولية", "الأحلام الغنية بالرموز", "الحساسية للصراعات النفسية"],
      low_score_traits: ["التحكم الجيد في المشاعر", "التركيز على الحاضر أكثر من الماضي", "السلوك المنطقي الواضح", "الاعتماد على الواقعية"],
      development_tips: [
        "مارس التأمل أو الكتابة التأملية لفهم دوافعك الداخلية بشكل أعمق.",
        "فكر في تأثير تجاربك الطفولية على علاقاتك الحالية.",
        "استكشف تحليل الأحلام ببساطة لفهم رموز لاوعيك.",
        "استشر معالج نفسي إذا شعرت أن تجاربك السابقة تؤثر سلبًا عليك."
      ],
      related_domains: ["vision", "healing", "discovery"]
    },
    adler: {
      name: "علم النفس الفردي (أدلر)",
      description: "يركز هذا التيار على فكرة ' Superiority Complex ' والرغبة في التفوق والنمو الشخصي. يؤكد على أهمية الشعور بالانتماء، والهدف في الحياة، وتأثير الإعاقة (الحقيقية أو المدركة) على تكوين الشخصية.",
      strengths: ["الطموح والرغبة في التحسن", "الوعي بالتنافس الاجتماعي", "التركيز على الأهداف والتطلعات", "القدرة على التكيف مع التحديات"],
      weaknesses: ["التنافس المفرط أو الشعور بالضعف", "تجاهل العوامل اللاواعية", "التركيز على الأداء قد يؤدي للضغط النفسي", "قد يُنظر للآخرين كمنافسين دائمًا"],
      high_score_interpretation: "درجتك العالية تدل على رغبة قوية في التفوق والتطور الشخصي. أنت تسعى لإثبات نفسك، ولديك طموح عالي. هذا يمنحك دافعًا قويًا، لكن قد يسبب لك ضغطًا أو شعورًا بالتنافس المستمر.",
      low_score_interpretation: "درجتك المنخفضة تشير إلى رضا أكبر عن الذات وتركيز أقل على التنافس. أنت تميل للتعاون والعمل الجماعي. هذا يمنحك استقرارًا، لكن قد تحتاج لتحفيز إضافي لتحقيق أهدافك.",
      high_score_traits: ["الطموح العالي", "الرغبة في الإثبات", "الوعي بالمكانة الاجتماعية", "التركيز على الأداء"],
      low_score_traits: ["الرضا عن الذات", "التعاون أكثر من التنافس", "التركيز على العلاقات", "الراحة مع الأدوار الداعمة"],
      development_tips: [
        "حدد أهدافًا واضحة ومحددة لتطوير نفسك.",
        "ابحث عن التحديات التي تساعدك على النمو دون الشعور بالإرهاق.",
        "مارس التقدير الذاتي المتوازن، لا المبالغ فيه.",
        "طور مهارات التفاهم مع الآخرين لتعزيز الشعور بالانتماء الإيجابي."
      ],
      related_domains: ["analysis", "discovery"]
    },
    jung: {
      name: "التحليل التحليلي (يونغ)",
      description: "تركز هذه النظرية على الأنا والظل والأنماط الجماعية (Archetypes) والغريزة كمكونات رئيسية للعقل الباطن. تهتم بفهم 'الأنا المتعددة' والتطور النفسي عبر مراحل الحياة (الاندماج والتفريق).",
      strengths: ["الحدس القوي", "الوعي بالتعقيدات النفسية", "القدرة على التكيف مع الأدوار المختلفة", "الفهم العميق للرموز والمعاني"],
      weaknesses: ["المفاهيم الغامضة أحيانًا", "التركيز على الجانب الغامض للشخصية", "قد تؤدي لتشتت الهوية", "التعقيد في التطبيق العملي"],
      high_score_interpretation: "درجتك العالية تدل على حساسية عالية للبصائر والحدس والتعقيدات النفسية. أنت تدرك وجود 'أنا' متعددة، ولديك قدرة قوية على فهم الرموز والمعاني العميقة. هذا يمنحك عمقًا واسعًا، لكن قد يسبب شعورًا بالتشتت أحيانًا.",
      low_score_interpretation: "درجتك المنخفضة تشير إلى تفضيل للوضوح والثبات في الهوية. أنت تركز على الواقعية والتفكير المنطقي المباشر. هذا يمنحك استقرارًا، لكن قد تفوتك بعض الأبعاد الغنية للنفس الباطن.",
      high_score_traits: ["الوعي بالأنماط السلوكية الداخلية", "القدرة على فهم رموز الأحلام", "الانفتاح على وجهات نظر متعددة", "الشعور بوجود 'أنا' متعددة"],
      low_score_traits: ["التفضيل للتفكير المنطقي المباشر", "التركيز على الواقعية", "الراحة مع الثوابت الشخصية", "الوضوح في الهوية"],
      development_tips: [
        "طور وعيك بالظلال (الجانب المظلم من الشخصية).",
        "مارس فهم أنماطك السلوكية المتكررة.",
        "استكشف الفن والأساطير لفهم الأرشتيتايبات (الأنماط الجماعية).",
        "خصص وقتًا للتأمل والاستكشاف الداخلي."
      ],
      related_domains: ["vision", "healing", "discovery"]
    },
    object_relations: {
      name: "العلاقات الموضوعية",
      description: "تركز هذه النظرية على أهمية العلاقات المبكرة (خاصة مع الأم) في تشكيل الصورة الداخلية للذات وللآخرين. تهتم بكيفية تأثير هذه 'الصور الداخلية' على العلاقات الحالية والصحة النفسية.",
      strengths: ["الوعي بتأثير العلاقات المبكرة", "القدرة على فهم الديناميكيات العاطفية", "الاهتمام بالثقة والأمان العاطفي", "القدرة على التعاطف"],
      weaknesses: ["التأثر الكبير بالعلاقات السلبية في الماضي", "صعوبة الثقة في بعض الحالات", "التعلق بالصور الداخلية قد يعيق العلاقات الجديدة", "قد تؤدي لتأنيب الضمير الزائد"],
      high_score_interpretation: "درجتك العالية تشير إلى وعي قوي بتأثير تجاربك العاطفية المبكرة على علاقاتك الحالية. أنت حساس للديناميكيات العاطفية، ولديك قدرة على التعاطف. هذا يمنحك عمقًا عاطفيًا، لكن قد يجعلك متألمًا من الخيبات.",
      low_score_interpretation: "درجتك المنخفضة تدل على استقلالية أكبر في تكوين علاقاتك. أنت تركز على الحاضر أكثر من الماضي، وتتعامل مع الآخرين بشكل أكثر موضوعية. هذا يمنحك مرونة، لكن قد تفوتك بعض التعقيدات العاطفية المهمة.",
      high_score_traits: ["التأثر بتجارب الطفولة العاطفية", "الوعي بالصور الداخلية للذات وللآخرين", "الحساسية للдинاميكيات العاطفية", "القدرة على التعاطف العميق"],
      low_score_traits: ["التركيز على العلاقات الحالية", "الاستقلالية العاطفية", "التعامل الموضوعي مع الآخرين", "المرونة في تكوين الروابط"],
      development_tips: [
        "اعمل على فهم 'الصور الداخلية' التي لديك عن نفسك والآخرين.",
        "مارس الثقة التدريجية في العلاقات الجديدة.",
        "اطور مهارات التواصل العاطفي بصراحة ولطف.",
        "استشر معالج إذا كانت تجاربك الماضية تؤثر سلبًا على حاضرك."
      ],
      related_domains: ["vision", "analysis", "healing"]
    },
    cultural: {
      name: "التحليل الثقافي",
      description: "يركز هذا التيار على تأثير الثقافة والمجتمع على تشكيل الشخصية والسلوك. يهتم بكيفية تأثير القيم والمعتقدات الثقافية على طريقة تفكير الفرد وتفاعلاته الاجتماعية.",
      strengths: ["الوعي بالتنوع الثقافي", "القدرة على التكيف مع بيئات ثقافية مختلفة", "الاحترام للقيم الثقافية", "الفهم العميق للسياق الاجتماعي"],
      weaknesses: ["الصراع بين القيم الشخصية والثقافية", "صعوبة الانفصال عن التقاليد", "قد يؤدي لرفض القيم الأخرى", "التحيز الثقافي غير الواعي"],
      high_score_interpretation: "درجتك العالية تشير إلى وعي قوي بتأثير الثقافة على شخصيتك وسلوكك. أنت تفهم تنوع وجهات النظر الثقافية، وقد تتأقلم بسهولة مع بيئات مختلفة. هذا يمنحك مرونة ثقافية، لكن قد تشعر أحيانًا بالانقسام بين قيمك الشخصية والثقافية.",
      low_score_interpretation: "درجتك المنخفضة تدل على تركيز أكبر على القيم الشخصية أو العالمية. أنت تميل للتعامل مع الآخرين بشكل فردي أكثر من كونهم ممثلي ثقافات. هذا يمنحك وضوحًا في التعامل، لكن قد تفوتك فهم أعمق للسياق الثقافي.",
      high_score_traits: ["التأثر بقيم ثقافتك", "السلوك المختلف في بيئات ثقافية متنوعة", "الاحترام للتنوع الثقافي", "الفهم للسياق الاجتماعي"],
      low_score_traits: ["التركيز على القيم الفردية", "التعامل مع الأفراد بشكل مستقل عن الثقافة", "الوضوح في المبادئ الشخصية", "المرونة في التعامل مع الأفكار المختلفة"],
      development_tips: [
        "استكشف ثقافات مختلفة لتوسيع آفاقك.",
        "فكر في تأثير قيمك الثقافية على قراراتك.",
        "مارس التسامح والانفتاح على وجهات النظر الثقافية المختلفة.",
        "طور وعيًا نقديًا تجاه التحيزات الثقافية."
      ],
      related_domains: ["vision", "analysis", "healing", "discovery"]
    },
    existential: {
      name: "التحليل الوجودي",
      description: "يركز هذا التيار على الحرية، والمسؤولية، والوحدة، والمعنى في الحياة. يهتم بمساعد individuals على إيجاد معنى شخصي لحياتهم والتعامل مع القلق الوجودي والموت.",
      strengths: ["البحث عن المعنى والهدف", "الوعي بالمسؤولية الشخصية", "القدرة على التأمل الفلسفي", "التعامل مع القلق والوحدة"],
      weaknesses: ["القلق الوجودي المفرط", "الشعور بالوحدة العميقة", "التركيز المفرط على المعنى قد يؤدي للإحباط", "قد يتجاهل الحاجة للدعم العاطفي"],
      high_score_interpretation: "درجتك العالية تشير إلى تفكير عميق في معنى الحياة والموت والمسؤولية. أنت تشعر بمسؤولية كبيرة عن اختياراتك، وقد تتأمل كثيرًا في الوجود. هذا يمنحك عمقًا فلسفيًا، لكن قد يحمل بعض القلق أو الشعور بالوحدة.",
      low_score_interpretation: "درجتك المنخفضة تدل على تركيز أكبر على الجوانب العملية والاجتماعية للحياة. أنت تتعامل مع الأمور بشكل مباشر، وتفضل التفاعل مع الآخرين. هذا يمنحك استقرارًا، لكن قد تفوتك بعض الأبعاد الفلسفية المهمة.",
      high_score_traits: ["التساؤل عن معنى الحياة والموت", "الشعور بالمسؤولية الكاملة عن الاختيارات", "التأمل الفلسفي", "الوعي بالوحدة الوجودية"],
      low_score_traits: ["التركيز على الحاضر والعمل", "التفاعل الاجتماعي المباشر", "الراحة مع الثوابت اليومية", "التعامل مع القلق بشكل عملي"],
      development_tips: [
        "خصص وقتًا للتفكير في أهدافك ومعاني حياتك.",
        "مارس الامتنان للحظات الصغيرة في الحياة.",
        "ابحث عن أنشطة تمنحك شعورًا بالهدف والمعنى.",
        "تحدث مع أشخاص تثق بهم حول أفكارك الوجودية."
      ],
      related_domains: ["vision", "analysis", "healing", "discovery"]
    },
    traits_theory: {
      name: "نظرية السمات",
      description: "تهدف هذه النظرية إلى تحديد وقياس السمات الشخصية المستقرة التي تحدد سلوك الفرد عبر المواقف والزمن. تشمل نماذج مثل Big Five (الانفتاح، الوعي، الانبساط، القبول، العدوانية).",
      strengths: ["القدرة على تصنيف وفهم الشخصية", "التنبؤ بالسلوك في مواقف مختلفة", "سهولة التطبيق في التقييم", "التركيز على السمات القابلة للقياس"],
      weaknesses: ["تجاهل التأثيرات الموقفية والوقتية", "الثبات قد لا يعكس التغيير الشخصي", "قد تبسط التعقيدات البشرية", "التركيز على النتائج قد يتجاهل العملية"],
      high_score_interpretation: "درجتك العالية تشير إلى وعي جيد بصفاتك الشخصية وثباتها. أنت تفهم نقاط قوتك وضعفك، ولديك فكرة واضحة عن شخصيتك. هذا يمنحك استقرارًا وتوقعات، لكن قد تصبح صارمًا مع نفسك أو الآخرين.",
      low_score_interpretation: "درجتك المنخفضة تدل على مرونة أكبر في التكيف مع المواقف المختلفة. أنت قد تتصرف بشكل مختلف حسب السياق، وتشعر أن شخصيتك متعددة الأوجه. هذا يمنحك مرونة، لكن قد تحتاج لفهم أعمق لصفاتك الأساسية.",
      high_score_traits: ["الوعي بصفات الشخصية المستقرة", "التنبؤ بالسلوك في مواقف مختلفة", "الثقة في تصنيف الشخصية", "التركيز على الثبات"],
      low_score_traits: ["المرونة في التكيف مع المواقف", "السلوك المتغير حسب السياق", "الشعور بعدم الثبات في الشخصية", "التركيز على التغيير"],
      development_tips: [
        "استخدم أدوات مثل Big Five لفهم سماتك الشخصية بشكل أعمق.",
        "اعترف بأن سماتك يمكن أن تتطور مع الوقت والتجربة.",
        "مارس قبول السمات التي لا تستطيع تغييرها.",
        "ركز على تطوير السمات التي ترغب في تحسينها."
      ],
      related_domains: ["vision", "analysis", "healing", "discovery"]
    },
    transactional: {
      name: "تحليل التفاعلات",
      description: "يركز هذا التيار على تحليل أنماط التواصل بين الأفراد، وخاصة 'الأنا الوالد'، 'الأنا البالغ'، و'الأنا الطفل'. يهدف إلى فهم كيف تؤثر هذه 'الأنا' على التفاعلات وحل مشاكلها.",
      strengths: ["الوعي بأنماط التواصل", "القدرة على تحليل الديناميكيات العائلية", "تحسين مهارات التواصل", "فهم ردود الفعل التلقائية"],
      weaknesses: ["قد يؤدي لتصنيف مفرط للأشخاص", "تجاهل العوامل العاطفية العميقة", "التركيز على السلوك قد يتجاهل المشاعر", "قد يُستخدم لتبرير السلوكيات السلبية"],
      high_score_interpretation: "درجتك العالية تشير إلى وعي قوي بأنماط تفاعلك مع الآخرين. أنت تفهم كيف تؤثر 'الأنا' المختلفة (الوالد، البالغ، الطفل) على محادثاتك، ولديك قدرة على تحليل الديناميكيات الاجتماعية. هذا يمنحك مهارات تواصل قوية، لكن قد تحلل الآخرين أكثر من اللازم.",
      low_score_interpretation: "درجتك المنخفضة تدل على تفاعل أكثر عفوية وأقل تحليلًا. أنت تركز على المحتوى العاطفي للتفاعل أكثر من البنية النفسية. هذا يمنحك طبيعية، لكن قد تفوتك بعض الأدوات لفهم التوترات في العلاقات.",
      high_score_traits: ["التعامل الوالدي أحيانًا", "الانتقاد الذاتي أو للآخرين بشكل حاد", "الوعي بأنماط التواصل", "التحليل الاجتماعي"],
      low_score_traits: ["التفاعل العفوي", "التركيز على المشاعر أكثر من البنية", "الراحة مع التفاعل المباشر", "الثقة في الغريزة الاجتماعية"],
      development_tips: [
        "تعلم أساسيات تحليل التفاعلات لفهم سلوكك وسلوك الآخرين.",
        "مارس التواصل من 'الأنا البالغ' (المنطقي والمحترم).",
        "اعترف بأنماط تفاعلك التلقائية وحاول تغييرها إذا لزم.",
        "طور مهارات الإصغاء الفعّال."
      ],
      related_domains: ["vision", "analysis", "healing"]
    },
    cbt: {
      name: "CBT / DBT / ACT",
      description: "تشمل هذه الطرق العلاجية الحديثة العلاج المعرفي السلوكي (CBT) والعلاج السلوكي الجدلي (DBT) والعلاج المقبول والالتزام (ACT). تركز على العلاقة بين الأفكار والمشاعر والسلوك، وتقنيات إدارة المشاعر والقلق.",
      strengths: ["الوعي بأنماط التفكير السلبية", "القدرة على تغيير الأنماط المدمرة", "مهارات إدارة القلق والتوتر", "التركيز على الحلول العملية"],
      weaknesses: ["قد تتجاهل الأسباب الجذرية للصراعات", "التركيز على التقنية قد يقلل من العمق العاطفي", "التحفيز العالي قد يؤدي للإرهاق", "قد تحتاج لوقت طويل للرؤية"],
      high_score_interpretation: "درجتك العالية تشير إلى وعي قوي بكيفية تأثير أفكارك على مشاعرك وسلوكك. أنت تلاحظ الأنماط السلبية، وتحاول تغييرها، ولديك مهارات للتعامل مع القلق. هذا يمنحك أدوات عملية، لكن قد تصبح صارمًا مع نفسك.",
      low_score_interpretation: "درجتك المنخفضة تدل على تركيز أكبر على المشاعر والانسيابية. أنت تتعامل مع التحديات بشكل طبيعي أكثر من منهجي. هذا يمنحك حرية، لكن قد تحتاج لتطوير مهارات للتعامل مع الضغوط بشكل أفضل.",
      high_score_traits: ["الانتباه للأفكار السلبية", "محاولة تغيير أنماط التفكير", "استخدام تقنيات الاسترخاء", "التركيز على الحلول"],
      low_score_traits: ["التعامل مع المشاعر بشكل طبيعي", "التركيز على الانسيابية", "الراحة مع التوتر", "الثقة في الغريزة للتكيف"],
      development_tips: [
        "تعلم أساسيات CBT لفهم العلاقة بين أفكارك ومشاعرك.",
        "مارس تقنيات التنفس العميق وإدارة القلق.",
        "طور وعيًا بأنماط تفكيرك التلقائية.",
        "استخدم أدوات ACT لزيادة قبولك للحظة الحالية."
      ],
      related_domains: ["vision", "analysis", "healing"]
    },
    personality_tests: {
      name: "MBTI / Big Five / DISC / Enneagram / HBDI",
      description: "تشمل هذه مجموعة من أدوات تقييم الشخصية الشائعة مثل MBTI (Myers-Briggs Type Indicator)، و Big Five (Big Five Personality Traits)، و DISC، و Enneagram، و HBDI (Herrmann Brain Dominance Instrument). تهدف إلى تصنيف الأفراد في أنواع شخصية أو سمات مميزة.",
      strengths: ["تصنيف واضح للشخصية", "زيادة الوعي الذاتي", "أداة مفيدة للتطوير المهني", "سهولة الفهم والتطبيق"],
      weaknesses: ["التصنيف قد يكون محدودًا أو م僵化", "قد يتجاهل التغيير الشخصي", "التركيز على النوع قد يؤدي للتعميم", "قد تُستخدم لتقييد الإمكانات"],
      high_score_interpretation: "درجتك العالية تشير إلى اهتمام كبير بأنواع الشخصية وتصنيف الذات. أنت تبحث عن فهم أعمق لنفسك، وقد تجد راحة في معرفة 'نوعك'. هذا يمنحك وعيًا، لكن قد تصبح متشبثًا بالتصنيف أو تتجاهله في مواقف جديدة.",
      low_score_interpretation: "درجتك المنخفضة تدل على رفض أكبر للتصنيف أو شعور بعدم الراحة معه. أنت ترى نفسك كشخص معقد وغير قابل للتصنيف بسهولة. هذا يمنحك حرية، لكن قد تفوتك بعض الأدوات المفيدة للفهم الذاتي.",
      high_score_traits: ["البحث عن تصنيف الشخصية", "الشعور بالراحة مع 'نوعك'", "الاهتمام بالأدوات التقييمية", "الثقة في التصنيف"],
      low_score_traits: ["رفض التصنيف أو الشعور بعدم الراحة معه", "الرؤية الذاتية المعقدة", "التركيز على التغيير المستمر", "الشك في الأدوات التقييمية"],
      development_tips: [
        "استخدم أدوات تقييم الشخصية كنقطة بداية للفهم الذاتي، وليس كمحدد نهائي.",
        "استكشف أنواعًا مختلفة لتوسيع آفاقك.",
        "تذكر أن الشخصية يمكن أن تتطور مع الوقت.",
        "لا تدع التصنيف يحد من إمكاناتك أو اختياراتك."
      ],
      related_domains: ["analysis", "discovery"]
    },
    body_language: {
      name: "لغة الجسد / NLP / جرافولوجي",
      description: "تشمل هذه المجالات دراسة لغة الجسد، وبرمجة اللغوية العصبية (NLP)، والكتابة اليدوية (جرافولوجي) لفهم الشخصية والسلوك. تركز على الإشارات غير اللفظية والتواصل غير المباشر.",
      strengths: ["الانتباه للإشارات غير اللفظية", "القدرة على قراءة مشاعر الآخرين", "مهارات التواصل غير اللفظي", "الاهتمام بالتفاصيل السلوكية"],
      weaknesses: ["قد تؤدي لسوء الفهم أو التحيز", "التركيز المفرط على التفاصيل الخارجية", "تجاهل الكلمات والمضمون", "قد تُستخدم للتلاعب"],
      high_score_interpretation: "درجتك العالية تشير إلى حساسية عالية للإشارات غير اللفظية ولغة الجسد. أنت تنتبه لتفاصيل دقيقة في سلوك الآخرين، ولديك مهارات في التواصل غير اللفظي. هذا يمنحك ميزة في القراءة الاجتماعية، لكن قد تفسر الأمور بشكل خاطئ أحيانًا.",
      low_score_interpretation: "درجتك المنخفضة تدل على تركيز أكبر على الكلمات والمحتوى المباشر. أنت تفضل التواصل الصريح والوضوح. هذا يمنحك صراحة، لكن قد تفوتك بعض الإشارات المهمة في التفاعل الاجتماعي.",
      high_score_traits: ["الانتباه لغة الجسد", "التفسير السريع للإشارات السلوكية", "المهارات في التواصل غير اللفظي", "الحساسية للنبرة الصوتية"],
      low_score_traits: ["التركيز على الكلام المباشر", "التفضيل للوضوح اللفظي", "الراحة مع التواصل الصريح", "الثقة في الكلمات أكثر من الإشارات"],
      development_tips: [
        "تعلم أساسيات لغة الجسد لتحسين مهارات التواصل.",
        "مارس الإصغاء لجميع أنواع الإشارات (لفظية وغير لفظية).",
        "طور وعيًا بدقة بإشاراتك غير اللفظية الخاصة.",
        "استخدم NLP بحذر لفهم أنماط التفكير والسلوك."
      ],
      related_domains: ["analysis", "discovery"]
    },
    projective: {
      name: "MMPI / رورشاخ / TAT",
      description: "تشمل هذه أدوات تقييم نفسية مشروعة تُستخدم في الإعدادات السريرية لفهم الشخصية والاضطرابات النفسية. تشمل مقياس الشخصية متعددة الأبعاد (MMPI)، واختبار بقعة الحبر (Rorschach Inkblot Test)، ومشروعية التخيل (Thematic Apperception Test - TAT).",
      strengths: ["الكشف عن الجوانب اللاواعية", "أداة قوية في التقييم السريري", "القدرة على استكشاف التعقيدات النفسية", "التركيز على التفسير العميق"],
      weaknesses: ["صعوبة التفسير والتحيز المحتمل", "الاعتماد على المترجم المتخصص", "قد تثير القلق أو القبولة الزائدة", "غير مناسب للاستخدام العام أو الترفيهي"],
      high_score_interpretation: "درجتك العالية (في السياق الترفيهي لهذا الاختبار) تشير إلى اهتمام بالتعقيدات النفسية والجوانب اللاواعية. أنت متأثر بالرموز والصور، وقد تبحث عن معاني أعمق. هذا يمنحك خيالًا واسعًا، لكن قد تصبح مشتتًا أو متخيلًا أحيانًا.",
      low_score_interpretation: "درجتك المنخفضة تدل على تفضيل للواقع والتفكير المنطقي المباشر. أنت تركز على الحقائق والأدلة الواضحة. هذا يمنحك وضوحًا، لكن قد تفوتك بعض الأبعاد الغنية للنفس الباطن.",
      high_score_traits: ["رؤية أنماط أو معاني في الأشياء العشوائية", "التأثر بالصور والرموز الغامضة", "الخيال الواسع", "البحث عن المعنى العميق"],
      low_score_traits: ["التفضيل للتفكير المنطقي المباشر", "التركيز على الحقائق الواضحة", "الراحة مع الأشياء الملموسة", "الشك في التفسيرات الرمزية"],
      development_tips: [
        "استخدم أدوات مثل رورشاك وTAT في سياقات علاجية مهنية فقط.",
        "مارس التمييز بين الخيال والإدراك الواقعي.",
        "طور وعيًا بأنماط تفكيرك التخيلية.",
        "استشر مختصًا نفسيًا إذا شعرت بالحاجة لفهم نفسك على هذا المستوى."
      ],
      related_domains: ["vision", "discovery"]
    },
    aba: {
      name: "ABA (تحليل السلوك التطبيقي)",
      description: "يركز هذا التيار على فهم وتحسين السلوك من خلال مبادئ التعلم (التعزيز، العقاب، الان extinction). يُستخدم بشكل واسع في تدريب الأطفال (خاصة ذوي الاحتياجات الخاصة) وتعديل السلوك.",
      strengths: ["القدرة على تغيير السلوك بشكل فعال", "التركيز على النتائج القابلة للقياس", "استخدام تقنيات مبنية على الأدلة", "الوضوح في الخطوات السلوكية"],
      weaknesses: ["قد يتجاهل الأسباب العاطفية للسلوك", "التركيز على السلوك الخارجي قد يتجاهل الداخل", "قد يبدو قاسيًا أو ميكانيكيًا", "غير مناسب لجميع أنواع التعلم أو التطور"],
      high_score_interpretation: "درجتك العالية (في السياق الترفيهي) تشير إلى إدراك جيد لكيفية تأثير التعزيز على السلوك. أنت تلاحظ كيف تؤثر المكافآت والعقوبات على قراراتك، وقد تستخدم هذه المبادئ في تنظيم حياتك. هذا يمنحك هيكلًا، لكن قد تصبح صارمًا أو ميكانيكيًا.",
      low_score_interpretation: "درجتك المنخفضة تدل على تفضيل للدوافع الداخلية أو العاطفية على المحفزات الخارجية. أنت تتحرك وفقًا لمشاعرك أو قناعاتك أكثر من المكافآت. هذا يمنحك حرية، لكن قد تحتاج لهياكل إضافية لتحقيق الأهداف.",
      high_score_traits: ["الانتباه لتأثير المكافآت والعقوبات", "تحسين السلوك باستخدام الأنظمة", "التركيز على النتائج السلوكية", "الثقة في المبادئ المنهجية"],
      low_score_traits: ["التفضيل للدوافع العاطفية", "التحرك وفقًا للقناعات الشخصية", "الراحة مع التلقائية", "الشك في الهياكل السلوكية الصارمة"],
      development_tips: [
        "تعلم أساسيات ABA لفهم تأثير التعزيز على سلوكك.",
        "استخدم أنظمة مكافآت بسيطة لتحقيق أهدافك.",
        "مارس الوعي بأنماط سلوكك التلقائية.",
        "_balance بين الدوافع الخارجية والداخلية."
      ],
      related_domains: ["analysis", "healing", "discovery"]
    }
  },
  en: {
    freud: {
      name: "Freudian Psychoanalysis",
      description: "This theory focuses on the unconscious mind, internal conflicts, and sexual and aggressive drives as fundamental forces in shaping behavior and personality. It emphasizes the impact of early childhood, defense mechanisms, dreams, and symbolism in understanding the self.",
      strengths: ["Awareness of internal drives", "Understanding the impact of early childhood", "Deep interpretation of unconscious behavior", "Attention to psychological conflict"],
      weaknesses: ["Neglect of social and cultural factors", "Overemphasis on sexuality", "Difficulty in scientific proof", "Complexity can be overwhelming"],
      high_score_interpretation: "Your high score indicates a strong awareness of internal complexities and psychological conflicts. You are influenced by past experiences and highly sensitive to your feelings and repressed motives. This gives you depth in psychological understanding but may also bring emotional challenges.",
      low_score_interpretation: "Your low score suggests a greater focus on conscious reality and logic. You control your emotions well and prefer direct dealing with matters. This provides emotional stability, but you might miss some of the deeper internal complexities that aid profound self-understanding.",
      high_score_traits: ["Awareness of repressed motives", "Strong influence of childhood experiences", "Symbol-rich dreams", "Sensitivity to psychological conflicts"],
      low_score_traits: ["Good emotional control", "Focus on the present more than the past", "Clear logical behavior", "Reliance on realism"],
      development_tips: [
        "Practice meditation or reflective writing to gain deeper insight into your inner drives.",
        "Consider how your childhood experiences affect your current relationships.",
        "Explore dream analysis simply to understand symbols in your unconscious.",
        "Consult a therapist if you feel your past experiences are negatively impacting you."
      ],
      related_domains: ["vision", "healing", "discovery"]
    },
    adler: {
      name: "Adlerian Individual Psychology",
      description: "This school focuses on the concept of the 'Superiority Complex' and the desire for superiority and personal growth. It emphasizes the importance of belonging, life goals, and the impact of (real or perceived) disabilities on personality formation.",
      strengths: ["Ambition and desire for self-improvement", "Awareness of social competition", "Focus on goals and aspirations", "Ability to adapt to challenges"],
      weaknesses: ["Excessive competition or feeling of inferiority", "Neglect of unconscious factors", "Focus on performance can lead to mental pressure", "May view others primarily as competitors"],
      high_score_interpretation: "Your high score indicates a strong desire for superiority and personal development. You strive to prove yourself and have high ambitions. This gives you strong drive, but may also cause stress or a constant feeling of competition.",
      low_score_interpretation: "Your low score suggests greater self-contentment and less focus on competition. You tend towards cooperation and teamwork. This provides stability, but you might need extra motivation to achieve your goals.",
      high_score_traits: ["High ambition", "Desire to prove oneself", "Awareness of social status", "Focus on performance"],
      low_score_traits: ["Self-contentment", "Cooperation over competition", "Focus on relationships", "Comfort with supportive roles"],
      development_tips: [
        "Set clear and specific goals for self-development.",
        "Seek challenges that help you grow without feeling overwhelmed.",
        "Practice balanced self-esteem, not over-inflated.",
        "Develop skills for empathetic understanding with others to foster positive belonging."
      ],
      related_domains: ["analysis", "discovery"]
    },
    jung: {
      name: "Jungian Analysis",
      description: "This theory focuses on the ego, shadow, archetypes, and instincts as key components of the unconscious mind. It is interested in understanding 'multiple selves' and psychological development through life stages (individuation).",
      strengths: ["Strong intuition", "Awareness of psychological complexities", "Ability to adapt to different roles", "Deep understanding of symbols and meanings"],
      weaknesses: ["Concepts can sometimes be vague", "Focus on the shadowy side of personality", "May lead to identity fragmentation", "Complexity in practical application"],
      high_score_interpretation: "Your high score indicates high sensitivity to insights, intuition, and psychological complexities. You are aware of multiple 'selves' and have a strong ability to understand deep symbols and meanings. This gives you vast depth, but may sometimes cause a feeling of fragmentation.",
      low_score_interpretation: "Your low score suggests a preference for clarity and stability in identity. You focus on realism and direct logical thinking. This provides stability, but you might miss some of the rich dimensions of the unconscious mind.",
      high_score_traits: ["Awareness of inner behavioral patterns", "Ability to understand dream symbols", "Openness to multiple perspectives", "Feeling of multiple 'selves'"],
      low_score_traits: ["Preference for direct logical thinking", "Focus on realism", "Comfort with personal constants", "Clarity in identity"],
      development_tips: [
        "Develop your awareness of shadows (the dark side of personality).",
        "Practice understanding your recurring behavioral patterns.",
        "Explore art and myths to understand archetypes.",
        "Set aside time for contemplation and inner exploration."
      ],
      related_domains: ["vision", "healing", "discovery"]
    },
    object_relations: {
      name: "Object Relations",
      description: "This theory focuses on the importance of early relationships (especially with the mother) in forming internal representations of the self and others. It deals with how these 'internal images' affect current relationships and mental health.",
      strengths: ["Awareness of the impact of early emotional experiences", "Ability to understand emotional dynamics", "Interest in emotional trust and safety", "Ability to empathize"],
      weaknesses: ["Heavy influence of negative past relationships", "Difficulty trusting in some cases", "Attachment to internal images may hinder new relationships", "May lead to excessive guilt"],
      high_score_interpretation: "Your high score indicates strong awareness of how your early emotional experiences affect your current relationships. You are sensitive to emotional dynamics and have a capacity for deep empathy. This gives you emotional depth, but may make you vulnerable to disappointments.",
      low_score_interpretation: "Your low score indicates greater independence in forming relationships. You focus more on the present than the past and deal with others more objectively. This provides flexibility, but you might miss some important emotional complexities.",
      high_score_traits: ["Influence of early emotional experiences", "Awareness of internal images of self and others", "Sensitivity to emotional dynamics", "Capacity for deep empathy"],
      low_score_traits: ["Focus on current relationships", "Emotional independence", "Objective dealing with others", "Flexibility in forming bonds"],
      development_tips: [
        "Work on understanding the 'internal images' you have of yourself and others.",
        "Practice gradual trust in new relationships.",
        "Develop skills for honest and kind emotional communication.",
        "Consult a therapist if past experiences negatively impact your present."
      ],
      related_domains: ["vision", "analysis", "healing"]
    },
    cultural: {
      name: "Cultural Analysis",
      description: "This school focuses on the impact of culture and society on shaping personality and behavior. It deals with how cultural values and beliefs influence an individual's way of thinking and social interactions.",
      strengths: ["Awareness of cultural diversity", "Ability to adapt to different cultural environments", "Respect for cultural values", "Deep understanding of social context"],
      weaknesses: ["Conflict between personal and cultural values", "Difficulty separating from traditions", "May lead to rejection of other values", "Unconscious cultural bias"],
      high_score_interpretation: "Your high score indicates strong awareness of how culture affects your personality and behavior. You understand diverse cultural perspectives and may adapt easily to different environments. This gives you cultural flexibility, but you may sometimes feel torn between personal and cultural values.",
      low_score_interpretation: "Your low score suggests a greater focus on personal or universal values. You tend to deal with others more as individuals than as representatives of cultures. This provides clarity in dealing, but you might miss a deeper understanding of cultural context.",
      high_score_traits: ["Influence of your cultural values", "Different behavior in diverse cultural environments", "Respect for cultural diversity", "Understanding of social context"],
      low_score_traits: ["Focus on individual values", "Dealing with individuals independent of culture", "Clarity in personal principles", "Flexibility in dealing with different ideas"],
      development_tips: [
        "Explore different cultures to broaden your horizons.",
        "Think about how your cultural values influence your decisions.",
        "Practice tolerance and openness to different cultural perspectives.",
        "Develop critical awareness of cultural biases."
      ],
      related_domains: ["vision", "analysis", "healing", "discovery"]
    },
    existential: {
      name: "Existential Analysis",
      description: "This school focuses on freedom, responsibility, loneliness, and meaning in life. It aims to help individuals find personal meaning in their lives and deal with existential anxiety and death.",
      strengths: ["Search for meaning and purpose", "Awareness of personal responsibility", "Ability for philosophical reflection", "Dealing with anxiety and loneliness"],
      weaknesses: ["Excessive existential anxiety", "Feeling of deep loneliness", "Over-focus on meaning may lead to frustration", "May neglect the need for emotional support"],
      high_score_interpretation: "Your high score indicates deep thinking about the meaning of life, death, and responsibility. You feel great responsibility for your choices and may contemplate existence a lot. This gives you philosophical depth, but may also carry some anxiety or loneliness.",
      low_score_interpretation: "Your low score suggests a greater focus on the practical and social aspects of life. You deal with matters directly and prefer social interaction. This provides stability, but you might miss some important philosophical dimensions.",
      high_score_traits: ["Questioning the meaning of life and death", "Feeling of complete responsibility for choices", "Philosophical reflection", "Awareness of existential loneliness"],
      low_score_traits: ["Focus on the present and work", "Direct social interaction", "Comfort with daily constants", "Practical dealing with anxiety"],
      development_tips: [
        "Set aside time to think about your goals and life meanings.",
        "Practice gratitude for small moments in life.",
        "Look for activities that give you a sense of purpose and meaning.",
        "Talk with trusted people about your existential thoughts."
      ],
      related_domains: ["vision", "analysis", "healing", "discovery"]
    },
    traits_theory: {
      name: "Trait Theory",
      description: "This theory aims to identify and measure stable personal traits that determine an individual's behavior across situations and time. It includes models like Big Five (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism).",
      strengths: ["Ability to classify and understand personality", "Predicting behavior in different situations", "Ease of application in assessment", "Focus on measurable traits"],
      weaknesses: ["Neglect of situational and temporal influences", "Stability may not reflect personal change", "May oversimplify human complexities", "Focus on outcomes may neglect process"],
      high_score_interpretation: "Your high score indicates good awareness of your stable personality traits. You understand your strengths and weaknesses and have a clear idea of your personality. This gives you stability and predictability, but you may become rigid with yourself or others.",
      low_score_interpretation: "Your low score suggests greater flexibility in adapting to different situations. You may behave differently depending on the context and feel your personality is multi-faceted. This gives you flexibility, but you may need a deeper understanding of your core traits.",
      high_score_traits: ["Awareness of stable personality traits", "Predicting behavior in different situations", "Confidence in personality classification", "Focus on stability"],
      low_score_traits: ["Flexibility in adapting to situations", "Behavior varying by context", "Feeling of instability in personality", "Focus on change"],
      development_tips: [
        "Use tools like Big Five to understand your personality traits more deeply.",
        "Acknowledge that your traits can evolve with time and experience.",
        "Practice accepting traits you cannot change.",
        "Focus on developing traits you wish to improve."
      ],
      related_domains: ["vision", "analysis", "healing", "discovery"]
    },
    transactional: {
      name: "Transactional Analysis",
      description: "This school focuses on analyzing patterns of communication between individuals, especially 'Parent Ego', 'Adult Ego', and 'Child Ego'. It aims to understand how these 'egos' affect interactions and solve their problems.",
      strengths: ["Awareness of communication patterns", "Ability to analyze family dynamics", "Improving communication skills", "Understanding automatic reactions"],
      weaknesses: ["May lead to excessive classification of people", "Neglect of deep emotional factors", "Focus on behavior may neglect feelings", "May be used to justify negative behaviors"],
      high_score_interpretation: "Your high score indicates strong awareness of your interaction patterns with others. You understand how different 'egos' (Parent, Adult, Child) affect your conversations and have the ability to analyze social dynamics. This gives you strong communication skills, but you may analyze others too much.",
      low_score_interpretation: "Your low score suggests more spontaneous and less analytical interaction. You focus more on the emotional content of the interaction than the psychological structure. This gives you naturalness, but you might miss some tools for understanding tensions in relationships.",
      high_score_traits: ["Sometimes dealing in a parental way", "Sharp self-criticism or criticism of others", "Awareness of communication patterns", "Social analysis"],
      low_score_traits: ["Spontaneous interaction", "Focus on emotions more than structure", "Comfort with direct interaction", "Trust in social instinct"],
      development_tips: [
        "Learn the basics of Transactional Analysis to understand your and others' behavior.",
        "Practice communicating from the 'Adult Ego' (logical and respectful).",
        "Acknowledge your automatic interaction patterns and try to change them if needed.",
        "Develop effective listening skills."
      ],
      related_domains: ["vision", "analysis", "healing"]
    },
    cbt: {
      name: "CBT / DBT / ACT",
      description: "These modern therapeutic methods include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT). They focus on the relationship between thoughts, feelings, and behavior, and techniques for managing emotions and anxiety.",
      strengths: ["Awareness of negative thinking patterns", "Ability to change destructive patterns", "Skills for managing anxiety and stress", "Focus on practical solutions"],
      weaknesses: ["May neglect root causes of conflicts", "Focus on technique may reduce emotional depth", "High motivation may lead to burnout", "May need long time for insight"],
      high_score_interpretation: "Your high score indicates strong awareness of how your thoughts affect your feelings and behavior. You notice negative patterns, try to change them, and have skills for dealing with anxiety. This gives you practical tools, but you may become strict with yourself.",
      low_score_interpretation: "Your low score suggests a greater focus on emotions and fluidity. You deal with challenges more naturally than methodically. This gives you freedom, but you may need to develop skills for dealing with stress better.",
      high_score_traits: ["Attention to negative thoughts", "Trying to change thinking patterns", "Using relaxation techniques", "Focus on solutions"],
      low_score_traits: ["Dealing with emotions naturally", "Focus on fluidity", "Comfort with tension", "Trust in instinct to adapt"],
      development_tips: [
        "Learn the basics of CBT to understand the relationship between your thoughts and feelings.",
        "Practice deep breathing and anxiety management techniques.",
        "Develop awareness of your automatic thinking patterns.",
        "Use ACT tools to increase your acceptance of the present moment."
      ],
      related_domains: ["vision", "analysis", "healing"]
    },
    personality_tests: {
      name: "MBTI / Big Five / DISC / Enneagram / HBDI",
      description: "This includes a set of popular personality assessment tools such as the Myers-Briggs Type Indicator (MBTI), Big Five Personality Traits, DISC, Enneagram, and Herrmann Brain Dominance Instrument (HBDI). They aim to classify individuals into distinct personality types or traits.",
      strengths: ["Clear personality classification", "Increased self-awareness", "Useful tool for professional development", "Easy to understand and apply"],
      weaknesses: ["Classification may be limited or rigid", "May neglect personal change", "Focus on type may lead to generalization", "May be used to limit potential"],
      high_score_interpretation: "Your high score indicates great interest in personality types and self-classification. You search for deeper self-understanding and may find comfort in knowing your 'type'. This gives you awareness, but you may become attached to the classification or ignore it in new situations.",
      low_score_interpretation: "Your low score suggests greater rejection of classification or discomfort with it. You see yourself as a complex person not easily classified. This gives you freedom, but you might miss some useful tools for self-understanding.",
      high_score_traits: ["Searching for personality classification", "Feeling comfortable with your 'type'", "Interest in assessment tools", "Trust in classification"],
      low_score_traits: ["Rejecting classification or feeling uncomfortable with it", "Complex self-view", "Focus on continuous change", "Skepticism of assessment tools"],
      development_tips: [
        "Use personality assessment tools as a starting point for self-understanding, not as a final determinant.",
        "Explore different types to broaden your horizons.",
        "Remember that personality can evolve with time.",
        "Don't let classification limit your potential or choices."
      ],
      related_domains: ["analysis", "discovery"]
    },
    body_language: {
      name: "Body Language / NLP / Graphology",
      description: "These fields include the study of body language, Neuro-Linguistic Programming (NLP), and handwriting analysis (graphology) to understand personality and behavior. They focus on non-verbal signals and indirect communication.",
      strengths: ["Attention to non-verbal signals", "Ability to read others' emotions", "Non-verbal communication skills", "Interest in behavioral details"],
      weaknesses: ["May lead to misinterpretation or bias", "Over-focus on external details", "Neglect of words and content", "May be used for manipulation"],
      high_score_interpretation: "Your high score indicates high sensitivity to non-verbal signals and body language. You notice fine details in others' behavior and have skills in non-verbal communication. This gives you an advantage in social reading, but you may sometimes misinterpret things.",
      low_score_interpretation: "Your low score suggests a greater focus on words and direct content. You prefer clear and explicit communication. This gives you directness, but you might miss some important signals in social interaction.",
      high_score_traits: ["Attention to body language", "Quick interpretation of behavioral signals", "Skills in non-verbal communication", "Sensitivity to vocal tone"],
      low_score_traits: ["Focus on direct speech", "Preference for verbal clarity", "Comfort with explicit communication", "Trust in words more than signals"],
      development_tips: [
        "Learn the basics of body language to improve communication skills.",
        "Practice listening to all types of signals (verbal and non-verbal).",
        "Develop accurate awareness of your own non-verbal signals.",
        "Use NLP cautiously to understand thinking and behavior patterns."
      ],
      related_domains: ["analysis", "discovery"]
    },
    projective: {
      name: "MMPI / Rorschach / TAT",
      description: "These include legitimate psychological assessment tools used in clinical settings to understand personality and mental disorders. They include the Minnesota Multiphasic Personality Inventory (MMPI), Rorschach Inkblot Test, and Thematic Apperception Test (TAT).",
      strengths: ["Revealing unconscious aspects", "Powerful tool in clinical assessment", "Ability to explore psychological complexities", "Focus on deep interpretation"],
      weaknesses: ["Difficulty in interpretation and potential bias", "Reliance on specialized interpretation", "May raise anxiety or over-acceptance", "Not suitable for general or recreational use"],
      high_score_interpretation: "Your high score (in the recreational context of this test) indicates interest in psychological complexities and unconscious aspects. You are influenced by symbols and images and may search for deeper meanings. This gives you a wide imagination, but you may sometimes become distracted or overly imaginative.",
      low_score_interpretation: "Your low score suggests a preference for reality and direct logical thinking. You focus on facts and clear evidence. This provides clarity, but you might miss some of the rich dimensions of the unconscious mind.",
      high_score_traits: ["Seeing patterns or meanings in random things", "Being influenced by ambiguous images and symbols", "Wide imagination", "Searching for deep meaning"],
      low_score_traits: ["Preference for direct logical thinking", "Focus on clear facts", "Comfort with tangible things", "Skepticism of symbolic interpretations"],
      development_tips: [
        "Use tools like Rorschach and TAT only in professional therapeutic contexts.",
        "Practice distinguishing between imagination and realistic perception.",
        "Develop awareness of your imaginative thinking patterns.",
        "Consult a mental health professional if you feel the need to understand yourself at this level."
      ],
      related_domains: ["vision", "discovery"]
    },
    aba: {
      name: "ABA (Applied Behavior Analysis)",
      description: "This school focuses on understanding and improving behavior through principles of learning (reinforcement, punishment, extinction). It is widely used in training children (especially those with special needs) and behavior modification.",
      strengths: ["Ability to effectively change behavior", "Focus on measurable outcomes", "Use of evidence-based techniques", "Clarity in behavioral steps"],
      weaknesses: ["May neglect emotional reasons for behavior", "Focus on external behavior may neglect the inner self", "May seem harsh or mechanical", "Not suitable for all types of learning or development"],
      high_score_interpretation: "Your high score (in the recreational context) indicates good understanding of how reinforcement affects behavior. You notice how rewards and punishments affect your decisions and may use these principles to organize your life. This gives you structure, but you may become rigid or mechanical.",
      low_score_interpretation: "Your low score suggests a preference for internal or emotional motivations over external incentives. You move according to your feelings or convictions more than rewards. This gives you freedom, but you might need additional structures to achieve goals.",
      high_score_traits: ["Attention to the effect of rewards and punishments", "Improving behavior using systems", "Focus on behavioral outcomes", "Trust in systematic principles"],
      low_score_traits: ["Preference for emotional motivations", "Moving according to personal convictions", "Comfort with spontaneity", "Skepticism of rigid behavioral structures"],
      development_tips: [
        "Learn the basics of ABA to understand how reinforcement affects your behavior.",
        "Use simple reward systems to achieve your goals.",
        "Practice awareness of your automatic behavioral patterns.",
        "Balance between external and internal motivations."
      ],
      related_domains: ["analysis", "healing", "discovery"]
    }
  }
};
