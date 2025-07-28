// analysis_data.js - بيانات النظريات النفسية لتحليل نتائج الاختبار
// الفئات:
// - personality_types: نماذج تصنيف الشخصية (DISC, Enneagram, Keirsey, Colors)
// - developmental: نظريات التطور النفسي والاجتماعي (Kohlberg, Vygotsky, Erikson)
// - cognitive: النظريات المعرفية (Multiple Intelligences, Theory of Mind)
// - therapeutic: النظريات العلاجية (REBT, Family Systems, IFS)
// - wellness: النظريات المتعلقة بالرفاهية (Sleep)

export const analysis_data = {
  personality_types: {
    disc: {
      id: "disc_001",
      category: "personality_types",
      name: {
        ar: "نموذج DISC (الهيمنة، التأثير، الثبات، الالتزام)",
        en: "DISC Model (Dominance, Influence, Steadiness, Conscientiousness)",
        fr: "Modèle DISC (Domination, Influence, Stabilité, Conformité)",
        es: "Modelo DISC (Dominio, Influencia, Estabilidad, Cumplimiento)",
        de: "DISC-Modell (Dominanz, Einfluss, Stabilität, Gewissenhaftigkeit)",
        zh: "DISC模型（支配、影响、稳定、尽责）"
      },
      description: {
        ar: "طُور نموذج DISC في الأربعينيات بواسطة وليام مولتون مارستون، ويصنف السلوكيات إلى أربعة أنماط: الهيمنة (التركيز على الإنجاز والسيطرة)، التأثير (التركيز على التفاعل الاجتماعي والإقناع)، الثبات (التركيز على التعاون والاستقرار)، والالتزام (التركيز على الدقة والتحليل). يُستخدم في تطوير القيادة، بناء الفرق، وتحسين التواصل في بيئات العمل.",
        en: "Developed by William Moulton Marston in the 1940s, the DISC model classifies behaviors into four types: Dominance (focus on achievement and control), Influence (focus on social interaction and persuasion), Steadiness (focus on cooperation and stability), and Conscientiousness (focus on accuracy and analysis). Used in leadership development, team building, and workplace communication.",
        fr: "Développé par William Moulton Marston dans les années 1940, le modèle DISC classe les comportements en quatre types : Domination (axée sur la réussite et le contrôle), Influence (axée sur l’interaction sociale et la persuasion), Stabilité (axée sur la coopération et la stabilité), et Conformité (axée sur la précision et l’analyse). Utilisé dans le développement du leadership, la construction d’équipes et la communication en milieu de travail.",
        es: "Desarrollado por William Moulton Marston en la década de 1940, el modelo DISC clasifica los comportamientos en cuatro tipos: Dominio (enfoque en logros y control), Influencia (enfoque en la interacción social y la persuasión), Estabilidad (enfoque en la cooperación y la estabilidad) y Cumplimiento (enfoque en la precisión y el análisis). Utilizado en el desarrollo de liderazgo, la formación de equipos y la comunicación en el lugar de trabajo.",
        de: "Das von William Moulton Marston in den 1940er Jahren entwickelte DISC-Modell klassifiziert Verhaltensweisen in vier Typen: Dominanz (Fokus auf Erfolg und Kontrolle), Einfluss (Fokus auf soziale Interaktion und Überzeugung), Stabilität (Fokus auf Zusammenarbeit und Stabilität) und Gewissenhaftigkeit (Fokus auf Genauigkeit und Analyse). Wird in der Führungskräfteentwicklung, im Teambuilding und in der Arbeitsplatzkombination verwendet.",
        zh: "由威廉·莫尔顿·马斯顿在1940年代开发，DISC模型将行为分为四种类型：支配（专注于成就和控制）、影响（专注于社交互动和说服）、稳定（专注于合作和稳定性）和尽责（专注于准确性和分析）。用于领导力发展、团队建设和工作场所沟通。"
      },
      scientific_background: {
        ar: "يستند النموذج إلى نظرية مارستون حول العواطف والسلوك (Marston, 1928)، ولكنه يفتقر إلى دعم تجريبي قوي مقارنة بنظريات السمات مثل Big Five. ومع ذلك، أثبتت دراسات (مثل Jones & Hartley, 2013) فعاليته في بيئات العمل.",
        en: "Based on Marston’s theory of emotions and behavior (Marston, 1928), it lacks strong empirical support compared to trait theories like Big Five. However, studies (e.g., Jones & Hartley, 2013) have demonstrated its effectiveness in workplace settings.",
        fr: "Basé sur la théorie de Marston sur les émotions et le comportement (Marston, 1928), il manque de soutien empirique fort par rapport aux théories des traits comme le Big Five. Cependant, des études (par exemple, Jones & Hartley, 2013) ont démontré son efficacité dans les environnements de travail.",
        es: "Basado en la teoría de Marston sobre las emociones y el comportamiento (Marston, 1928), carece de un fuerte apoyo empírico en comparación con teorías de rasgos como Big Five. Sin embargo, estudios (por ejemplo, Jones & Hartley, 2013) han demostrado su efectividad en entornos laborales.",
        de: "Basierend auf Marstons Theorie der Emotionen und des Verhaltens (Marston, 1928), fehlt es im Vergleich zu Trait-Theorien wie Big Five an starker empirischer Unterstützung. Studien (z. B. Jones & Hartley, 2013) haben jedoch seine Wirksamkeit in Arbeitsumgebungen nachgewiesen.",
        zh: "基于马斯顿的情绪与行为理论（Marston, 1928），与Big Five等特质理论相比缺乏强有力的实证支持。然而，研究（例如Jones & Hartley, 2013）证明了其在工作场所的有效性。"
      },
      key_concepts: [
        {
          ar: "الهيمنة (D): التركيز على النتائج والتحديات.",
          en: "Dominance (D): Focus on results and challenges.",
          fr: "Domination (D) : Concentration sur les résultats et les défis.",
          es: "Dominio (D): Enfoque en resultados y desafíos.",
          de: "Dominanz (D): Fokus auf Ergebnisse und Herausforderungen.",
          zh: "支配（D）：专注于结果和挑战。"
        },
        {
          ar: "التأثير (I): التركيز على التفاعل الاجتماعي والإلهام.",
          en: "Influence (I): Focus on social interaction and inspiration.",
          fr: "Influence (I) : Concentration sur l’interaction sociale et l’inspiration.",
          es: "Influencia (I): Enfoque en la interacción social y la inspiración.",
          de: "Einfluss (I): Fokus auf soziale Interaktion und Inspiration.",
          zh: "影响（I）：专注于社交互动和启发。"
        },
        {
          ar: "الثبات (S): التركيز على التعاون والاستقرار.",
          en: "Steadiness (S): Focus on cooperation and stability.",
          fr: "Stabilité (S) : Concentration sur la coopération et la stabilité.",
          es: "Estabilidad (S): Enfoque en la cooperación y la estabilidad.",
          de: "Stabilität (S): Fokus auf Zusammenarbeit und Stabilität.",
          zh: "稳定（S）：专注于合作和稳定性。"
        },
        {
          ar: "الالتزام (C): التركيز على الدقة والجودة.",
          en: "Conscientiousness (C): Focus on accuracy and quality.",
          fr: "Conformité (C) : Concentration sur la précision et la qualité.",
          es: "Cumplimiento (C): Enfoque en la precisión y la calidad.",
          de: "Gewissenhaftigkeit (C): Fokus auf Genauigkeit und Qualität.",
          zh: "尽责（C）：专注于准确性和质量。"
        }
      ],
      strengths: [
        {
          ar: "سهولة الفهم والتطبيق في بيئات العمل.",
          en: "Easy to understand and apply in workplace settings.",
          fr: "Facile à comprendre et à appliquer dans les environnements de travail.",
          es: "Fácil de entender y aplicar en entornos laborales.",
          de: "Leicht verständlich und anwendbar in Arbeitsumgebungen.",
          zh: "易于理解并应用于工作场所。"
        },
        {
          ar: "تعزيز التواصل وبناء الفرق من خلال فهم الأنماط السلوكية.",
          en: "Enhances communication and team building through understanding behavioral styles.",
          fr: "Améliore la communication et la construction d’équipe grâce à la compréhension des styles comportementaux.",
          es: "Mejora la comunicación y la formación de equipos mediante la comprensión de los estilos de comportamiento.",
          de: "Fördert Kommunikation und Teambuilding durch das Verständnis von Verhaltensstilen.",
          zh: "通过了解行为风格提升沟通和团队建设。"
        },
        {
          ar: "مناسب للتطبيقات العملية مثل التدريب المهني.",
          en: "Suitable for practical applications like professional training.",
          fr: "Adapté aux applications pratiques comme la formation professionnelle.",
          es: "Adecuado para aplicaciones prácticas como la formación profesional.",
          de: "Geeignet für praktische Anwendungen wie berufliche Schulungen.",
          zh: "适用于职业培训等实际应用。"
        }
      ],
      weaknesses: [
        {
          ar: "نقص الأدلة العلمية القوية مقارنة بنماذج مثل Big Five.",
          en: "Lack of strong scientific evidence compared to models like Big Five.",
          fr: "Manque de preuves scientifiques solides par rapport à des modèles comme le Big Five.",
          es: "Falta de evidencia científica sólida en comparación con modelos como Big Five.",
          de: "Mangel an starker wissenschaftlicher Evidenz im Vergleich zu Modellen wie Big Five.",
          zh: "与Big Five等模型相比缺乏强有力的科学证据。"
        },
        {
          ar: "التركيز على السلوك الملحوظ دون الدوافع الداخلية.",
          en: "Focus on observable behavior rather than internal motivations.",
          fr: "Concentration sur le comportement observable plutôt que sur les motivations internes.",
          es: "Enfoque en el comportamiento observable en lugar de las motivaciones internas.",
          de: "Fokus auf beobachtbares Verhalten statt auf innere Motivationen.",
          zh: "专注于可观察的行为而非内在动机。"
        },
        {
          ar: "قد لا يناسب التحليل العميق للشخصية.",
          en: "May not be suitable for deep personality analysis.",
          fr: "Peut ne pas convenir à une analyse approfondie de la personnalité.",
          es: "Puede no ser adecuado para un análisis profundo de la personalidad.",
          de: "Möglicherweise nicht geeignet für eine tiefgehende Persönlichkeitsanalyse.",
          zh: "可能不适合深入的个性分析。"
        }
      ],
      high_score_interpretation: {
        ar: "تشير درجاتك العالية إلى توافق مع نموذج DISC، مما يعني أنكِ تقدرين تصنيف السلوكيات وتستفيدين من فهم أنماطك السلوكية (مثل الهيمنة أو التأثير) في التفاعلات اليومية.",
        en: "Your high scores indicate alignment with the DISC model, meaning you value behavioral classification and benefit from understanding your behavioral patterns (e.g., Dominance or Influence) in daily interactions.",
        fr: "Vos scores élevés indiquent un alignement avec le modèle DISC, ce qui signifie que vous appréciez la classification des comportements et tirez parti de la compréhension de vos schémas comportementaux (par exemple, Domination ou Influence) dans les interactions quotidiennes.",
        es: "Tus altas puntuaciones indican alineación con el modelo DISC, lo que significa que valoras la clasificación de comportamientos y te beneficias de entender tus patrones de comportamiento (por ejemplo, Dominio o Influencia) en las interacciones diarias.",
        de: "Deine hohen Punktzahlen deuten auf eine Übereinstimmung mit dem DISC-Modell hin, was bedeutet, dass du die Klassifizierung von Verhaltensweisen schätzt und von der Einsicht in deine Verhaltensmuster (z. B. Dominanz oder Einfluss) in täglichen Interaktionen profitierst.",
        zh: "你的高分表明你与DISC模型一致，这意味着你重视行为分类，并从了解你的行为模式（例如支配或影响）在日常互动中受益。"
      },
      low_score_interpretation: {
        ar: "تشير درجاتك المنخفضة إلى تفضيل التفسيرات الأكثر تعقيدًا للشخصية أو التركيز على الدوافع الداخلية بدلاً من السلوكيات الملحوظة.",
        en: "Your low scores suggest a preference for more complex personality interpretations or a focus on internal motivations rather than observable behaviors.",
        fr: "Vos scores faibles suggèrent une préférence pour des interprétations de la personnalité plus complexes ou un accent sur les motivations internes plutôt que sur les comportements observables.",
        es: "Tus bajas puntuaciones sugieren una preferencia por interpretaciones de la personalidad más complejas o un enfoque en las motivaciones internas en lugar de los comportamientos observables.",
        de: "Deine niedrigen Punktzahlen deuten auf eine Vorliebe für komplexere Persönlichkeitsinterpretationen oder einen Fokus auf innere Motivationen statt auf beobachtbare Verhaltensweisen hin.",
        zh: "你的低分表明你更倾向于更复杂的个性解读或专注于内在动机而非可观察的行为。"
      },
      high_score_traits: [
        {
          ar: "وضوح السلوك",
          en: "Behavioral clarity",
          fr: "Clarté comportementale",
          es: "Claridad conductual",
          de: "Verhaltensklarheit",
          zh: "行为清晰"
        },
        {
          ar: "القدرة على التكيف مع الأنماط",
          en: "Adaptability to patterns",
          fr: "Adaptabilité aux schémas",
          es: "Adaptabilidad a los patrones",
          de: "Anpassungsfähigkeit an Muster",
          zh: "对模式的适应能力"
        },
        {
          ar: "مهارات التواصل",
          en: "Communication skills",
          fr: "Compétences en communication",
          es: "Habilidades de comunicación",
          de: "Kommunikationsfähigkeiten",
          zh: "沟通技能"
        }
      ],
      low_score_traits: [
        {
          ar: "التركيز على الدوافع الداخلية",
          en: "Focus on internal motivations",
          fr: "Concentration sur les motivations internes",
          es: "Enfoque en las motivaciones internas",
          de: "Fokus auf innere Motivationen",
          zh: "专注于内在动机"
        },
        {
          ar: "الشك في التصنيفات السلوكية",
          en: "Skepticism of behavioral classifications",
          fr: "Scepticisme envers les classifications comportementales",
          es: "Escepticismo hacia las clasificaciones conductuales",
          de: "Skepsis gegenüber Verhaltensklassifikationen",
          zh: "对行为分类的怀疑"
        }
      ],
      development_tips: [
        {
          ar: "خذي تقييم DISC رسميًا لتحديد نمطك السلوكي الرئيسي.",
          en: "Take a formal DISC assessment to identify your primary behavioral style.",
          fr: "Passez une évaluation DISC officielle pour identifier votre style comportemental principal.",
          es: "Realiza una evaluación DISC formal para identificar tu estilo conductual principal.",
          de: "Führe eine formale DISC-Bewertung durch, um deinen primären Verhaltensstil zu identifizieren.",
          zh: "进行正式的DISC评估以确定你的主要行为风格。"
        },
        {
          ar: "استخدمي فهمك لأنماط DISC لتحسين التواصل مع الزملاء أو الأصدقاء.",
          en: "Use your understanding of DISC patterns to improve communication with colleagues or friends.",
          fr: "Utilisez votre compréhension des schémas DISC pour améliorer la communication avec vos collègues ou amis.",
          es: "Utiliza tu comprensión de los patrones DISC para mejorar la comunicación con colegas o amigos.",
          de: "Nutze dein Verständnis der DISC-Muster, um die Kommunikation mit Kollegen oder Freunden zu verbessern.",
          zh: "利用你对DISC模式的理解来改善与同事或朋友的沟通。"
        },
        {
          ar: "اقرئي كتاب 'Emotions of Normal People' لمارستون لفهم الأسس النظرية.",
          en: "Read Marston’s 'Emotions of Normal People' to understand the theoretical foundations.",
          fr: "Lisez 'Emotions of Normal People' de Marston pour comprendre les fondements théoriques.",
          es: "Lee 'Emotions of Normal People' de Marston para comprender los fundamentos teóricos.",
          de: "Lies Marstons 'Emotions of Normal People', um die theoretischen Grundlagen zu verstehen.",
          zh: "阅读马斯顿的《正常人的情感》以了解理论基础。"
        }
      ],
      case_studies: [
        {
          ar: "استخدام DISC في تدريب فرق المبيعات لتحسين التواصل مع العملاء.",
          en: "Using DISC in sales team training to improve customer communication.",
          fr: "Utilisation de DISC dans la formation des équipes de vente pour améliorer la communication avec les clients.",
          es: "Uso de DISC en la formación de equipos de ventas para mejorar la comunicación con los clientes.",
          de: "Verwendung von DISC im Vertriebsteam-Training zur Verbesserung der Kundenkommunikation.",
          zh: "在销售团队培训中使用DISC以改善客户沟通。"
        },
        {
          ar: "تطبيق النموذج في حل النزاعات داخل الفرق من خلال فهم الأنماط السلوكية.",
          en: "Applying the model to resolve team conflicts through understanding behavioral styles.",
          fr: "Application du modèle pour résoudre les conflits d’équipe grâce à la compréhension des styles comportementaux.",
          es: "Aplicación del modelo para resolver conflictos de equipo mediante la comprensión de los estilos de comportamiento.",
          de: "Anwendung des Modells zur Lösung von Teamkonflikten durch Verständnis der Verhaltensstile.",
          zh: "通过了解行为风格应用模型来解决团队冲突。"
        }
      ],
      cultural_considerations: {
        ar: "قد يحتاج إلى تعديلات في الثقافات الجماعية التي تركز على التعاون أكثر من الهيمنة أو التأثير الفردي.",
        en: "May require adjustments in collectivist cultures that prioritize cooperation over individual dominance or influence.",
        fr: "Peut nécessiter des ajustements dans les cultures collectivistes qui privilégient la coopération à la domination ou à l’influence individuelle.",
        es: "Puede requerir ajustes en culturas colectivistas que priorizan la cooperación sobre el dominio o la influencia individual.",
        de: "Kann Anpassungen in kollektivistischen Kulturen erfordern, die Zusammenarbeit über individuelle Dominanz oder Einfluss priorisieren.",
        zh: "在重视合作而非个人支配或影响的集体主义文化中可能需要调整。"
      },
      modern_relevance: {
        ar: "يُستخدم على نطاق واسع في التطوير المهني، بناء الفرق، وبرامج القيادة.",
        en: "Widely used in professional development, team building, and leadership programs.",
        fr: "Largement utilisé dans le développement professionnel, la construction d’équipe et les programmes de leadership.",
        es: "Ampliamente utilizado en el desarrollo profesional, la formación de equipos y los programas de liderazgo.",
        de: "Weit verbreitet in der beruflichen Entwicklung, im Teambuilding und in Führungsprogrammen.",
        zh: "广泛用于职业发展、团队建设和领导力项目。"
      },
      related_domains: ["team_dynamics", "communication", "leadership"],
      references: [
        {
          ar: "Marston, W. M. (1928). عواطف الناس العاديين. لندن: Kegan Paul.",
          en: "Marston, W. M. (1928). Emotions of Normal People. London: Kegan Paul."
        },
        {
          ar: "Jones, C., & Hartley, N. (2013). فعالية نموذج DISC في بيئات العمل. Journal of Workplace Behavioral Analysis.",
          en: "Jones, C., & Hartley, N. (2013). Effectiveness of the DISC Model in Workplace Settings. Journal of Workplace Behavioral Analysis."
        }
      ]
    },
    enneagram: {
      id: "enneagram_002",
      category: "personality_types",
      name: {
        ar: "نموذج الإنياغرام (Enneagram)",
        en: "Enneagram Model",
        fr: "Modèle de l’Ennéagramme",
        es: "Modelo del Eneagrama",
        de: "Enneagramm-Modell",
        zh: "九型人格模型"
      },
      description: {
        ar: "نموذج الإنياغرام هو نظام تصنيف شخصي يُرجع أصله إلى أعمال جورج غوردجييف وتم تطويره لاحقًا بواسطة أوسكار إيكازو وكلاوديو نارانجو في القرن العشرين. يصنف الأفراد إلى تسعة أنواع شخصية (مثل المصلح، المساعد، المنجز) بناءً على الدوافع الأساسية والمخاوف. يُستخدم في التطوير الشخصي والروحي.",
        en: "The Enneagram is a personality classification system originating from the work of George Gurdjieff and later developed by Oscar Ichazo and Claudio Naranjo in the 20th century. It categorizes individuals into nine personality types (e.g., Reformer, Helper, Achiever) based on core motivations and fears. Used in personal and spiritual development.",
        fr: "L’Ennéagramme est un système de classification de la personnalité issu des travaux de George Gurdjieff et développé par Oscar Ichazo et Claudio Naranjo au 20e siècle. Il catégorise les individus en neuf types de personnalité (par exemple, Réformateur, Aide, Réalisateur) en fonction des motivations et des peurs fondamentales. Utilisé dans le développement personnel et spirituel.",
        es: "El Eneagrama es un sistema de clasificación de la personalidad que proviene de los trabajos de George Gurdjieff y fue desarrollado posteriormente por Oscar Ichazo y Claudio Naranjo en el siglo XX. Clasifica a los individuos en nueve tipos de personalidad (por ejemplo, Reformador, Ayudante, Triunfador) según las motivaciones y miedos fundamentales. Utilizado en el desarrollo personal y espiritual.",
        de: "Das Enneagramm ist ein Persönlichkeitsklassifikationssystem, das auf die Arbeiten von George Gurdjieff zurückgeht und später im 20. Jahrhundert von Oscar Ichazo und Claudio Naranjo entwickelt wurde. Es kategorisiert Individuen in neun Persönlichkeitstypen (z. B. Reformer, Helfer, Erfolgstyp) basierend auf Kernmotivationen und Ängsten. Wird in der persönlichen und spirituellen Entwicklung verwendet.",
        zh: "九型人格是一个起源于乔治·古尔杰夫的工作，并于20世纪由奥斯卡·伊查佐和克劳迪奥·纳兰霍开发的个性分类系统。它根据核心动机和恐惧将个体分为九种人格类型（例如改革者、助人者、成就者）。用于个人和精神发展。"
      },
      scientific_background: {
        ar: "يفتقر الإنياغرام إلى دعم تجريبي قوي، لكنه يعتمد على ملاحظات نفسية وروحية. دراسات محدودة (مثل Wagner, 1981) أشارت إلى فعاليته في التطوير الشخصي، لكنه يُعتبر أقل علمية من Big Five أو MBTI.",
        en: "The Enneagram lacks strong empirical support but relies on psychological and spiritual observations. Limited studies (e.g., Wagner, 1981) suggest its effectiveness in personal development, though it is considered less scientific than Big Five or MBTI.",
        fr: "L’Ennéagramme manque de soutien empirique fort, mais repose sur des observations psychologiques et spirituelles. Des études limitées (par exemple, Wagner, 1981) suggèrent son efficacité dans le développement personnel, bien qu’il soit considéré comme moins scientifique que le Big Five ou le MBTI.",
        es: "El Eneagrama carece de un fuerte apoyo empírico, pero se basa en observaciones psicológicas y espirituales. Estudios limitados (por ejemplo, Wagner, 1981) sugieren su efectividad en el desarrollo personal, aunque se considera menos científico que Big Five o MBTI.",
        de: "Das Enneagramm fehlt an starker empirischer Unterstützung, stützt sich aber auf psychologische und spirituelle Beobachtungen. Begrenzte Studien (z. B. Wagner, 1981) deuten auf seine Wirksamkeit in der persönlichen Entwicklung hin, obwohl es als weniger wissenschaftlich als Big Five oder MBTI gilt.",
        zh: "九型人格缺乏强有力的实证支持，但依赖于心理和精神观察。有限的研究（例如Wagner, 1981）表明其在个人发展中的有效性，尽管它被认为不如Big Five或MBTI科学。"
      },
      key_concepts: [
        {
          ar: "التسعة أنواع: المصلح، المساعد، المنجز، الفردي، المحقق، الموالي، المتحمس، المتحدي، صانع السلام.",
          en: "Nine Types: Reformer, Helper, Achiever, Individualist, Investigator, Loyalist, Enthusiast, Challenger, Peacemaker.",
          fr: "Neuf types : Réformateur, Aide, Réalisateur, Individualiste, Enquêteur, Loyaliste, Enthousiaste, Challenger, Pacificateur.",
          es: "Nueve tipos: Reformador, Ayudante, Triunfador, Individualista, Investigador, Leal, Entusiasta, Desafiante, Pacificador.",
          de: "Neun Typen: Reformer, Helfer, Erfolgstyp, Individualist, Forscher, Loyalist, Enthusiast, Herausforderer, Friedensstifter.",
          zh: "九种类型：改革者、助人者、成就者、个人主义者、研究者、忠诚者、热情者、挑战者、和平使者。"
        },
        {
          ar: "الدوافع الأساسية: كل نوع يحركه دافع وخوف أساسي.",
          en: "Core Motivations: Each type is driven by a core motivation and fear.",
          fr: "Motivations fondamentales : Chaque type est motivé par une motivation et une peur fondamentale.",
          es: "Motivaciones fundamentales: Cada tipo está impulsado por una motivación y un miedo fundamental.",
          de: "Kernmotivationen: Jeder Typ wird von einer Kernmotivation und Angst angetrieben.",
          zh: "核心动机：每种类型都由核心动机和恐惧驱动。"
        },
        {
          ar: "الأجنحة والمستويات: التفاعل بين الأنواع ومستويات النمو.",
          en: "Wings and Levels: Interaction between types and levels of development.",
          fr: "Ailes et niveaux : Interaction entre les types et les niveaux de développement.",
          es: "Alas y niveles: Interacción entre tipos y niveles de desarrollo.",
          de: "Flügel und Ebenen: Interaktion zwischen Typen und Entwicklungsstufen.",
          zh: "侧翼和层次：类型与发展层次的互动。"
        }
      ],
      strengths: [
        {
          ar: "تقديم رؤى عميقة حول الدوافع والمخاوف الشخصية.",
          en: "Provides deep insights into personal motivations and fears.",
          fr: "Offre des perspectives profondes sur les motivations et les peurs personnelles.",
          es: "Proporciona perspectivas profundas sobre las motivaciones y los miedos personales.",
          de: "Bietet tiefe Einblicke in persönliche Motivationen und Ängste.",
          zh: "提供对个人动机和恐惧的深刻见解。"
        },
        {
          ar: "تطبيقات في التطوير الشخصي والروحي.",
          en: "Applications in personal and spiritual development.",
          fr: "Applications dans le développement personnel et spirituel.",
          es: "Aplicaciones en el desarrollo personal y espiritual.",
          de: "Anwendungen in der persönlichen und spirituellen Entwicklung.",
          zh: "在个人和精神发展中的应用。"
        }
      ],
      weaknesses: [
        {
          ar: "نقص الأدلة العلمية القوية.",
          en: "Lack of strong scientific evidence.",
          fr: "Manque de preuves scientifiques solides.",
          es: "Falta de evidencia científica sólida.",
          de: "Mangel an starker wissenschaftlicher Evidenz.",
          zh: "缺乏强有力的科学证据。"
        },
        {
          ar: "التعقيد في تحديد النوع بدقة.",
          en: "Complexity in accurately identifying the type.",
          fr: "Complexité à identifier précisément le type.",
          es: "Complejidad para identificar con precisión el tipo.",
          de: "Komplexität bei der genauen Identifizierung des Typs.",
          zh: "准确识别类型的复杂性。"
        }
      ],
      high_score_interpretation: {
        ar: "تشير درجاتك العالية إلى توافق مع نموذج الإنياغرام، مع اهتمام بالدوافع العميقة والنمو الشخصي.",
        en: "Your high scores indicate alignment with the Enneagram model, with a focus on deep motivations and personal growth.",
        fr: "Vos scores élevés indiquent un alignement avec le modèle de l’Ennéagramme, avec un accent sur les motivations profondes et la croissance personnelle.",
        es: "Tus altas puntuaciones indican alineación con el modelo del Eneagrama, con un enfoque en las motivaciones profundas y el crecimiento personal.",
        de: "Deine hohen Punktzahlen deuten auf eine Übereinstimmung mit dem Enneagramm-Modell hin, mit einem Fokus auf tiefe Motivationen und persönliches Wachstum.",
        zh: "你的高分表明你与九型人格模型一致，注重深层动机和个人成长。"
      },
      low_score_interpretation: {
        ar: "تشير درجاتك المنخفضة إلى تفضيل التفسيرات العلمية أو السلوكية بدلاً من الدوافع الروحية.",
        en: "Your low scores suggest a preference for scientific or behavioral interpretations over spiritual motivations.",
        fr: "Vos scores faibles suggèrent une préférence pour des interprétations scientifiques ou comportementales plutôt que des motivations spirituelles.",
        es: "Tus bajas puntuaciones sugieren una preferencia por interpretaciones científicas o conductuales en lugar de motivaciones espirituales.",
        de: "Deine niedrigen Punktzahlen deuten auf eine Vorliebe für wissenschaftliche oder verhaltensbasierte Interpretationen statt spiritueller Motivationen hin.",
        zh: "你的低分表明你更倾向于科学或行为解读而非精神动机。"
      },
      high_score_traits: [
        {
          ar: "الوعي بالدوافع",
          en: "Awareness of motivations",
          fr: "Conscience des motivations",
          es: "Conciencia de las motivaciones",
          de: "Bewusstsein für Motivationen",
          zh: "动机意识"
        },
        {
          ar: "النمو الشخصي",
          en: "Personal growth",
          fr: "Croissance personnelle",
          es: "Crecimiento personal",
          de: "Persönliches Wachstum",
          zh: "个人成长"
        },
        {
          ar: "التفكير الروحي",
          en: "Spiritual thinking",
          fr: "Pensée spirituelle",
          es: "Pensamiento espiritual",
          de: "Spirituelles Denken",
          zh: "精神思考"
        }
      ],
      low_score_traits: [
        {
          ar: "التركيز على السلوك الملحوظ",
          en: "Focus on observable behavior",
          fr: "Concentration sur le comportement observable",
          es: "Enfoque en el comportamiento observable",
          de: "Fokus auf beobachtbares Verhalten",
          zh: "专注于可观察的行为"
        },
        {
          ar: "الشك في التصنيفات الروحية",
          en: "Skepticism of spiritual classifications",
          fr: "Scepticisme envers les classifications spirituelles",
          es: "Escepticismo hacia las clasificaciones espirituales",
          de: "Skepsis gegenüber spirituellen Klassifikationen",
          zh: "对精神分类的怀疑"
        }
      ],
      development_tips: [
        {
          ar: "خذي تقييم الإنياغرام لتحديد نوعك وفهم دوافعك الأساسية.",
          en: "Take an Enneagram assessment to identify your type and understand your core motivations.",
          fr: "Passez une évaluation de l’Ennéagramme pour identifier votre type et comprendre vos motivations fondamentales.",
          es: "Realiza una evaluación del Eneagrama para identificar tu tipo y comprender tus motivaciones fundamentales.",
          de: "Führe eine Enneagramm-Bewertung durch, um deinen Typ zu identifizieren und deine Kernmotivationen zu verstehen.",
          zh: "进行九型人格评估以确定你的类型并了解你的核心动机。"
        },
        {
          ar: "استخدمي الإنياغرام لتحديد مجالات النمو الشخصي وتطويرها.",
          en: "Use the Enneagram to identify and develop areas of personal growth.",
          fr: "Utilisez l’Ennéagramme pour identifier et développer des domaines de croissance personnelle.",
          es: "Utiliza el Eneagrama para identificar y desarrollar áreas de crecimiento personal.",
          de: "Nutze das Enneagramm, um Bereiche des persönlichen Wachstums zu identifizieren und zu entwickeln.",
          zh: "使用九型人格来识别和发展个人成长领域。"
        },
        {
          ar: "اقرئي كتاب 'The Wisdom of the Enneagram' لدون ريسو وراس هودسون.",
          en: "Read 'The Wisdom of the Enneagram' by Don Riso and Russ Hudson.",
          fr: "Lisez 'The Wisdom of the Enneagram' de Don Riso et Russ Hudson.",
          es: "Lee 'The Wisdom of the Enneagram' de Don Riso y Russ Hudson.",
          de: "Lies 'The Wisdom of the Enneagram' von Don Riso und Russ Hudson.",
          zh: "阅读唐·里索和拉斯·哈德森的《九型人格的智慧》。"
        }
      ],
      case_studies: [
        {
          ar: "استخدام الإنياغرام في برامج التطوير الشخصي لتعزيز الوعي الذاتي.",
          en: "Using the Enneagram in personal development programs to enhance self-awareness.",
          fr: "Utilisation de l’Ennéagramme dans les programmes de développement personnel pour renforcer la conscience de soi.",
          es: "Uso del Eneagrama en programas de desarrollo personal para mejorar la autoconciencia.",
          de: "Verwendung des Enneagramms in Persönlichkeitsentwicklungsprogrammen zur Förderung der Selbstwahrnehmung.",
          zh: "在个人发展项目中使用九型人格以增强自我意识。"
        },
        {
          ar: "تطبيق النموذج في العلاج النفسي لفهم الدوافع العميقة.",
          en: "Applying the model in psychotherapy to understand deep motivations.",
          fr: "Application du modèle en psychothérapie pour comprendre les motivations profondes.",
          es: "Aplicación del modelo en psicoterapia para comprender motivaciones profundas.",
          de: "Anwendung des Modells in der Psychotherapie zur Erfassung tiefer Motivationen.",
          zh: "在心理治疗中应用该模型以了解深层动机。"
        }
      ],
      cultural_considerations: {
        ar: "يناسب الثقافات التي تقدر التأمل الذاتي والروحانيات، وقد يحتاج إلى تعديلات في الثقافات العملية.",
        en: "Suitable for cultures valuing self-reflection and spirituality, but may require adjustments in practical cultures.",
        fr: "Convient aux cultures valorisant l’auto-réflexion et la spiritualité, mais peut nécessiter des ajustements dans les cultures pratiques.",
        es: "Adecuado para culturas que valoran la autorreflexión y la espiritualidad, pero puede requerir ajustes en culturas prácticas.",
        de: "Geeignet für Kulturen, die Selbstreflexion und Spiritualität schätzen, kann jedoch in praktischen Kulturen Anpassungen erfordern.",
        zh: "适合重视自我反思和精神性的文化，但在实用文化中可能需要调整。"
      },
      modern_relevance: {
        ar: "يُستخدم في التطوير الشخصي، الإرشاد الروحي، والعلاج النفسي.",
        en: "Used in personal development, spiritual coaching, and psychotherapy.",
        fr: "Utilisé dans le développement personnel, le coaching spirituel et la psychothérapie.",
        es: "Utilizado en el desarrollo personal, el coaching espiritual y la psicoterapia.",
        de: "Wird in der persönlichen Entwicklung, im spirituellen Coaching und in der Psychotherapie verwendet.",
        zh: "用于个人发展、精神指导和心理治疗。"
      },
      related_domains: ["self_discovery", "growth", "spirituality"],
      references: [
        {
          ar: "Riso, D. R., & Hudson, R. (1999). حكمة الإنياغرام. نيويورك: Bantam Books.",
          en: "Riso, D. R., & Hudson, R. (1999). The Wisdom of the Enneagram. New York: Bantam Books."
        }
      ]
    },
    keirsey: {
      id: "keirsey_003",
      category: "personality_types",
      name: {
        ar: "نموذج كيرسي للطباع (Keirsey Temperament Sorter)",
        en: "Keirsey Temperament Sorter",
        fr: "Sorteuse de Tempérament de Keirsey",
        es: "Clasificador de Temperamentos de Keirsey",
        de: "Keirsey Temperament Sorter",
        zh: "凯尔西气质分类"
      },
      description: {
        ar: "طوّر ديفيد كيرسي نموذج الطباع في السبعينيات استنادًا إلى MBTI، لكنه يركز على أربعة طباع رئيسية: الحرفي، الحامي، المثالي، والعقلاني. يُستخدم في فهم الأنماط السلوكية وتحسين العلاقات الشخصية والمهنية.",
        en: "Developed by David Keirsey in the 1970s based on MBTI, it focuses on four main temperaments: Artisan, Guardian, Idealist, and Rational. Used to understand behavioral patterns and improve personal and professional relationships.",
        fr: "Développé par David Keirsey dans les années 1970 sur la base du MBTI, il se concentre sur quatre tempéraments principaux : Artisan, Gardien, Idéaliste et Rationnel. Utilisé pour comprendre les schémas comportementaux et améliorer les relations personnelles et professionnelles.",
        es: "Desarrollado por David Keirsey en la década de 1970 basado en el MBTI, se centra en cuatro temperamentos principales: Artesano, Guardián, Idealista y Racional. Utilizado para comprender patrones de comportamiento y mejorar las relaciones personales y profesionales.",
        de: "Entwickelt von David Keirsey in den 1970er Jahren auf Basis des MBTI, konzentriert es sich auf vier Haupttemperamente: Handwerker, Wächter, Idealist und Rational. Wird verwendet, um Verhaltensmuster zu verstehen und persönliche sowie berufliche Beziehungen zu verbessern.",
        zh: "由大卫·凯尔西在1970年代基于MBTI开发，专注于四种主要气质：工匠、守护者、理想主义者和理性主义者。用于理解行为模式并改善个人和职业关系。"
      },
      scientific_background: {
        ar: "يستند إلى أعمال يونغ وMBTI، لكنه يفتقر إلى دعم تجريبي قوي (Keirsey, 1987). يُعتبر أداة عملية وليست علمية بحتة.",
        en: "Based on Jung’s work and MBTI, it lacks strong empirical support (Keirsey, 1987). Considered a practical rather than purely scientific tool.",
        fr: "Basé sur les travaux de Jung et le MBTI, il manque de soutien empirique fort (Keirsey, 1987). Considéré comme un outil pratique plutôt que purement scientifique.",
        es: "Basado en el trabajo de Jung y el MBTI, carece de un fuerte apoyo empírico (Keirsey, 1987). Considerado una herramienta práctica más que puramente científica.",
        de: "Basierend auf Jungs Arbeiten und dem MBTI, fehlt es an starker empirischer Unterstützung (Keirsey, 1987). Wird als praktisches, nicht rein wissenschaftliches Werkzeug betrachtet.",
        zh: "基于荣格的工作和MBTI，缺乏强有力的实证支持（Keirsey, 1987）。被视为实用工具而非纯科学工具。"
      },
      key_concepts: [
        {
          ar: "الطباع الأربعة: الحرفي (SP)، الحامي (SJ)، المثالي (NF)، العقلاني (NT).",
          en: "Four Temperaments: Artisan (SP), Guardian (SJ), Idealist (NF), Rational (NT).",
          fr: "Quatre tempéraments : Artisan (SP), Gardien (SJ), Idéaliste (NF), Rationnel (NT).",
          es: "Cuatro temperamentos: Artesano (SP), Guardián (SJ), Idealista (NF), Racional (NT).",
          de: "Vier Temperamente: Handwerker (SP), Wächter (SJ), Idealist (NF), Rational (NT).",
          zh: "四种气质：工匠（SP）、守护者（SJ）、理想主义者（NF）、理性主义者（NT）。"
        },
        {
          ar: "السلوكيات الملحوظة: التركيز على الأنماط السلوكية بدلاً من الدوافع الداخلية.",
          en: "Observable Behaviors: Focus on behavioral patterns rather than internal motivations.",
          fr: "Comportements observables : Concentration sur les schémas comportementaux plutôt que sur les motivations internes.",
          es: "Comportamientos observables: Enfoque en patrones de comportamiento en lugar de motivaciones internas.",
          de: "Beobachtbare Verhaltensweisen: Fokus auf Verhaltensmuster statt auf innere Motivationen.",
          zh: "可观察行为：专注于行为模式而非内在动机。"
        }
      ],
      strengths: [
        {
          ar: "بساطة التصنيف وسهولة التطبيق.",
          en: "Simplicity of classification and ease of application.",
          fr: "Simplicité de la classification et facilité d’application.",
          es: "Simplicidad de la clasificación y facilidad de aplicación.",
          de: "Einfachheit der Klassifikation und Anwendungsfreundlichkeit.",
          zh: "分类的简单性和应用的便捷性。"
        },
        {
          ar: "تطبيقات في التطوير المهني وبناء الفرق.",
          en: "Applications in professional development and team building.",
          fr: "Applications dans le développement professionnel et la construction d’équipe.",
          es: "Aplicaciones en el desarrollo profesional y la formación de equipos.",
          de: "Anwendungen in der beruflichen Entwicklung und im Teambuilding.",
          zh: "在职业发展和团队建设中的应用。"
        }
      ],
      weaknesses: [
        {
          ar: "نقص الأدلة العلمية مقارنة بنماذج السمات.",
          en: "Lack of scientific evidence compared to trait models.",
          fr: "Manque de preuves scientifiques par rapport aux modèles de traits.",
          es: "Falta de evidencia científica en comparación con los modelos de rasgos.",
          de: "Mangel an wissenschaftlicher Evidenz im Vergleich zu Trait-Modellen.",
          zh: "与特质模型相比缺乏科学证据。"
        },
        {
          ar: "الاعتماد على MBTI، مما يحد من موثوقيته.",
          en: "Reliance on MBTI, which limits its reliability.",
          fr: "Dépendance au MBTI, ce qui limite sa fiabilité.",
          es: "Dependencia del MBTI, lo que limita su fiabilidad.",
          de: "Abhängigkeit vom MBTI, was seine Zuverlässigkeit einschränkt.",
          zh: "依赖MBTI，这限制了其可靠性。"
        }
      ],
      high_score_interpretation: {
        ar: "تشير درجاتك العالية إلى توافق مع نموذج كيرسي، مع تقدير لتصنيف الطباع وفهم الأنماط السلوكية.",
        en: "Your high scores indicate alignment with the Keirsey model, with an appreciation for temperament classification and understanding behavioral patterns.",
        fr: "Vos scores élevés indiquent un alignement avec le modèle de Keirsey, avec une appréciation de la classification des tempéraments et de la compréhension des schémas comportementaux.",
        es: "Tus altas puntuaciones indican alineación con el modelo de Keirsey, con una apreciación por la clasificación de temperamentos y la comprensión de patrones de comportamiento.",
        de: "Deine hohen Punktzahlen deuten auf eine Übereinstimmung mit dem Keirsey-Modell hin, mit einer Wertschätzung für die Temperamentklassifikation und das Verständnis von Verhaltensmustern.",
        zh: "你的高分表明你与凯尔西模型一致，重视气质分类和理解行为模式。"
      },
      low_score_interpretation: {
        ar: "تشير درجاتك المنخفضة إلى تفضيل التفسيرات الأكثر تعقيدًا أو العلمية.",
        en: "Your low scores suggest a preference for more complex or scientific interpretations.",
        fr: "Vos scores faibles suggèrent une préférence pour des interprétations plus complexes ou scientifiques.",
        es: "Tus bajas puntuaciones sugieren una preferencia por interpretaciones más complejas o científicas.",
        de: "Deine niedrigen Punktzahlen deuten auf eine Vorliebe für komplexere oder wissenschaftliche Interpretationen hin.",
        zh: "你的低分表明你更倾向于更复杂或科学的解读。"
      },
      high_score_traits: [
        {
          ar: "الوعي بالطباع",
          en: "Awareness of temperaments",
          fr: "Conscience des tempéraments",
          es: "Conciencia de los temperamentos",
          de: "Bewusstsein für Temperamente",
          zh: "气质意识"
        },
        {
          ar: "القدرة على التكيف",
          en: "Adaptability",
          fr: "Adaptabilité",
          es: "Adaptabilidad",
          de: "Anpassungsfähigkeit",
          zh: "适应能力"
        },
        {
          ar: "مهارات التواصل",
          en: "Communication skills",
          fr: "Compétences en communication",
          es: "Habilidades de comunicación",
          de: "Kommunikationsfähigkeiten",
          zh: "沟通技能"
        }
      ],
      low_score_traits: [
        {
          ar: "التركيز على الدوافع الداخلية",
          en: "Focus on internal motivations",
          fr: "Concentration sur les motivations internes",
          es: "Enfoque en las motivaciones internas",
          de: "Fokus auf innere Motivationen",
          zh: "专注于内在动机"
        },
        {
          ar: "الشك في التصنيفات",
          en: "Skepticism of classifications",
          fr: "Scepticisme envers les classifications",
          es: "Escepticismo hacia las clasificaciones",
          de: "Skepsis gegenüber Klassifikationen",
          zh: "对分类的怀疑"
        }
      ],
      development_tips: [
        {
          ar: "خذي تقييم كيرسي لتحديد طبعك الرئيسي.",
          en: "Take a Keirsey assessment to identify your primary temperament.",
          fr: "Passez une évaluation Keirsey pour identifier votre tempérament principal.",
          es: "Realiza una evaluación de Keirsey para identificar tu temperamento principal.",
          de: "Führe eine Keirsey-Bewertung durch, um dein primäres Temperament zu identifizieren.",
          zh: "进行凯尔西评估以确定你的主要气质。"
        },
        {
          ar: "استخدمي فهمك للطباع لتحسين التفاعلات في العمل أو العلاقات.",
          en: "Use your understanding of temperaments to improve interactions at work or in relationships.",
          fr: "Utilisez votre compréhension des tempéraments pour améliorer les interactions au travail ou dans les relations.",
          es: "Utiliza tu comprensión de los temperamentos para mejorar las interacciones en el trabajo o en las relaciones.",
          de: "Nutze dein Verständnis der Temperamente, um Interaktionen am Arbeitsplatz oder in Beziehungen zu verbessern.",
          zh: "利用你对气质的理解来改善工作或关系中的互动。"
        },
        {
          ar: "اقرئي كتاب 'Please Understand Me' لكيرسي.",
          en: "Read 'Please Understand Me' by Keirsey.",
          fr: "Lisez 'Please Understand Me' de Keirsey.",
          es: "Lee 'Please Understand Me' de Keirsey.",
          de: "Lies 'Please Understand Me' von Keirsey.",
          zh: "阅读凯尔西的《请理解我》。"
        }
      ],
      case_studies: [
        {
          ar: "تطبيق نموذج كيرسي في بناء فرق العمل لتحسين التعاون.",
          en: "Applying the Keirsey model in team building to enhance collaboration.",
          fr: "Application du modèle Keirsey dans la construction d’équipe pour améliorer la collaboration.",
          es: "Aplicación del modelo de Keirsey en la formación de equipos para mejorar la colaboración.",
          de: "Anwendung des Keirsey-Modells im Teambuilding zur Förderung der Zusammenarbeit.",
          zh: "在团队建设中应用凯尔西模型以增强协作。"
        },
        {
          ar: "استخدام النموذج في الإرشاد المهني لاختيار الوظائف.",
          en: "Using the model in career counseling for job selection.",
          fr: "Utilisation du modèle dans l’orientation professionnelle pour la sélection d’emplois.",
          es: "Uso del modelo en la orientación profesional para la selección de empleos.",
          de: "Verwendung des Modells in der Berufsberatung für die Berufswahl.",
          zh: "在职业咨询中使用该模型进行职业选择。"
        }
      ],
      cultural_considerations: {
        ar: "قد يحتاج إلى تعديلات في الثقافات الجماعية التي تركز على التعاون بدلاً من التصنيفات الفردية.",
        en: "May require adjustments in collectivist cultures that prioritize cooperation over individual classifications.",
        fr: "Peut nécessiter des ajustements dans les cultures collectivistes qui privilégient la coopération à la classification individuelle.",
        es: "Puede requerir ajustes en culturas colectivistas que priorizan la cooperación sobre las clasificaciones individuales.",
        de: "Kann Anpassungen in kollektivistischen Kulturen erfordern, die Zusammenarbeit über individuelle Klassifikationen priorisieren.",
        zh: "在重视合作而非个人分类的集体主义文化中可能需要调整。"
      },
      modern_relevance: {
        ar: "يُستخدم في التطوير المهني والإرشاد، لكنه أقل شيوعًا من MBTI أو DISC.",
        en: "Used in professional development and counseling, but less common than MBTI or DISC.",
        fr: "Utilisé dans le développement professionnel et l’orientation, mais moins courant que le MBTI ou le DISC.",
        es: "Utilizado en el desarrollo profesional y la orientación, pero menos común que el MBTI o DISC.",
        de: "Wird in der beruflichen Entwicklung und Beratung verwendet, ist jedoch weniger verbreitet als MBTI oder DISC.",
        zh: "用于职业发展和咨询，但不如MBTI或DISC常见。"
      },
      related_domains: ["team_dynamics", "self_discovery", "career_planning"],
      references: [
        {
          ar: "Keirsey, D. (1987). من فضلك افهمني II. ديلمار، كاليفورنيا: Prometheus Nemesis Book Company.",
          en: "Keirsey, D. (1987). Please Understand Me II. Delmar, CA: Prometheus Nemesis Book Company."
        }
      ]
    },
    colors_personality: {
      id: "colors_personality_004",
      category: "personality_types",
      name: {
        ar: "نموذج الألوان الشخصية",
        en: "Personality Colors Model",
        fr: "Modèle des Couleurs de la Personnalité",
        es: "Modelo de Colores de la Personalidad",
        de: "Persönlichkeitsfarben-Modell",
        zh: "个性色彩模型"
      },
      description: {
        ar: "نموذج الألوان الشخصية هو أداة بسيطة تصنف الشخصية إلى أربعة ألوان (الأحمر، الأزرق، الأخضر، الأصفر) بناءً على السمات السلوكية والدوافع. طُور في القرن العشرين كأداة عملية لفهم الشخصية في بيئات العمل والتعليم، ويُركز على السلوكيات الملحوظة.",
        en: "The Personality Colors Model is a simple tool that classifies personality into four colors (Red, Blue, Green, Yellow) based on behavioral traits and motivations. Developed in the 20th century as a practical tool for understanding personality in work and educational settings, it focuses on observable behaviors.",
        fr: "Le Modèle des Couleurs de la Personnalité est un outil simple qui classe la personnalité en quatre couleurs (Rouge, Bleu, Vert, Jaune) en fonction des traits comportementaux et des motivations. Développé au 20e siècle comme un outil pratique pour comprendre la personnalité dans les environnements de travail et éducatifs, il se concentre sur les comportements observables.",
        es: "El Modelo de Colores de la Personalidad es una herramienta simple que clasifica la personalidad en cuatro colores (Rojo, Azul, Verde, Amarillo) según rasgos y motivaciones conductuales. Desarrollado en el siglo XX como una herramienta práctica para entender la personalidad en entornos laborales y educativos, se centra en comportamientos observables.",
        de: "Das Persönlichkeitsfarben-Modell ist ein einfaches Werkzeug, das die Persönlichkeit in vier Farben (Rot, Blau, Grün, Gelb) basierend auf Verhaltensmerkmalen und Motivationen klassifiziert. Entwickelt im 20. Jahrhundert als praktisches Werkzeug zur Persönlichkeitsverständnis in Arbeits- und Bildungsumgebungen, konzentriert es sich auf beobachtbare Verhaltensweisen.",
        zh: "个性色彩模型是一种简单的工具，根据行为特质和动机将个性分为四种颜色（红色、蓝色、绿色、黄色）。在20世纪开发，作为工作和教育环境中理解个性的实用工具，专注于可观察的行为。"
      },
      scientific_background: {
        ar: "يفتقر إلى دعم تجريبي قوي، لكنه مستوحى من نماذج مثل DISC. يُستخدم كأداة تعليمية وعملية (Hartman, 1998).",
        en: "Lacks strong empirical support but is inspired by models like DISC. Used as an educational and practical tool (Hartman, 1998).",
        fr: "Manque de soutien empirique fort, mais inspiré par des modèles comme DISC. Utilisé comme outil éducatif et pratique (Hartman, 1998).",
        es: "Carece de un fuerte apoyo empírico, pero está inspirado en modelos como DISC. Utilizado como una herramienta educativa y práctica (Hartman, 1998).",
        de: "Fehlt an starker empirischer Unterstützung, ist aber von Modellen wie DISC inspiriert. Wird als pädagogisches und praktisches Werkzeug verwendet (Hartman, 1998).",
        zh: "缺乏强有力的实证支持，但受到DISC等模型的启发。用作教育和实用工具（Hartman, 1998）。"
      },
      key_concepts: [
        {
          ar: "الأحمر: القيادة، الطموح، التركيز على النتائج.",
          en: "Red: Leadership, ambition, focus on results.",
          fr: "Rouge : Leadership, ambition, concentration sur les résultats.",
          es: "Rojo: Liderazgo, ambición, enfoque en resultados.",
          de: "Rot: Führung, Ehrgeiz, Fokus auf Ergebnisse.",
          zh: "红色：领导力、雄心、专注于结果。"
        },
        {
          ar: "الأزرق: التحليل، الدقة، التفكير المنطقي.",
          en: "Blue: Analysis, precision, logical thinking.",
          fr: "Bleu : Analyse, précision, pensée logique.",
          es: "Azul: Análisis, precisión, pensamiento lógico.",
          de: "Blau: Analyse, Präzision, logisches Denken.",
          zh: "蓝色：分析、精确、逻辑思维。"
        },
        {
          ar: "الأخضر: التعاطف، التعاون، الاستقرار.",
          en: "Green: Empathy, cooperation, stability.",
          fr: "Vert : Empathie, coopération, stabilité.",
          es: "Verde: Empatía, cooperación, estabilidad.",
          de: "Grün: Empathie, Zusammenarbeit, Stabilität.",
          zh: "绿色：同理心、合作、稳定性。"
        },
        {
          ar: "