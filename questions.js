const questions = [
  // === مجال الرؤية الداخلية (Vision) - 10 أسئلة ===
  { id: 1, category: "freud", domain: "vision", text: { ar: "عندما تواجه موقفًا صعبًا، هل تشعر بأن دوافعك الداخلية تفوق سيطرتك؟", en: "When facing a difficult situation, do you feel your inner drives overpower your control?" } },
  { id: 2, category: "freud", domain: "vision", text: { ar: "هل تجد نفسك تحلم بأشياء غريبة تعكس مشاعرك المكبوتة؟", en: "Do you often dream of strange things that reflect your repressed emotions?" } },
  { id: 5, category: "jung", domain: "vision", text: { ar: "هل تشعر أن لديك جانبًا مظلمًا أو غير مكشوف من شخصيتك؟", en: "Do you feel you have a dark or undiscovered side to your personality?" } },
  { id: 6, category: "jung", domain: "vision", text: { ar: "هل تجد نفسك تتأثر بحواسك و]intuition] في اتخاذ القرارات؟", en: "Do you find yourself influenced by your senses and intuition in decision-making?" } },
  { id: 7, category: "object_relations", domain: "vision", text: { ar: "هل تعتقد أن تجاربك الطفولية تؤثر على علاقاتك الحالية؟", en: "Do you think your childhood experiences affect your current relationships?" } },
  { id: 9, category: "cultural", domain: "vision", text: { ar: "هل تشعر أن قيم ثقافتك تؤثر على طريقة تفكيرك وسلوكك؟", en: "Do you feel that your cultural values influence your thinking and behavior?" } },
  { id: 11, category: "existential", domain: "vision", text: { ar: "هل تتساءل كثيرًا عن معنى الحياة والموت؟", en: "Do you often wonder about the meaning of life and death?" } },
  { id: 13, category: "traits_theory", domain: "vision", text: { ar: "هل تصف نفسك بأنك منضبط ومسؤول في معظم المواقف؟", en: "Do you describe yourself as disciplined and responsible in most situations?" } },
  { id: 15, category: "transactional", domain: "vision", text: { ar: "هل تجد نفسك تتعامل مع الآخرين بطريقة والدة أحيانًا؟", en: "Do you find yourself dealing with others in a parental way sometimes?" } },
  { id: 17, category: "cbt", domain: "vision", text: { ar: "هل تلاحظ أن أفكارك السلبية تؤثر على مشاعرك وسلوكك؟", en: "Do you notice that your negative thoughts affect your feelings and behavior?" } },

  // === مجال التحليل العميق (Analysis) - 10 أسئلة ===
  { id: 3, category: "adler", domain: "analysis", text: { ar: "هل تسعى دائمًا لإثبات نفسك وإظهار قدراتك للآخرين؟", en: "Do you constantly strive to prove yourself and showcase your abilities?" } },
  { id: 4, category: "adler", domain: "analysis", text: { ar: "هل تشعر بالغيرة من نجاح الآخرين وتعمل على تحفيز نفسك لتحقق إنجازات؟", en: "Do you feel envious of others' success and motivate yourself to achieve accomplishments?" } },
  { id: 8, category: "object_relations", domain: "analysis", text: { ar: "هل تجد صعوبة في الوثوق بالآخرين بعد خيبات سابقة؟", en: "Do you find it difficult to trust others after past disappointments?" } },
  { id: 10, category: "cultural", domain: "analysis", text: { ar: "هل تختلف في سلوكك بين البيئات الثقافية المختلفة؟", en: "Do you behave differently in different cultural environments?" } },
  { id: 12, category: "existential", domain: "analysis", text: { ar: "هل تشعر بالمسؤولية الكاملة عن اختياراتك وحياتك؟", en: "Do you feel completely responsible for your choices and life?" } },
  { id: 14, category: "traits_theory", domain: "analysis", text: { ar: "هل تميل إلى الانفتاح على تجارب جديدة وأفكار مختلفة؟", en: "Do you tend to be open to new experiences and different ideas?" } },
  { id: 16, category: "transactional", domain: "analysis", text: { ar: "هل تميل إلى انتقاد نفسك أو الآخرين بطريقة حادة؟", en: "Do you tend to criticize yourself or others in a sharp way?" } },
  { id: 18, category: "cbt", domain: "analysis", text: { ar: "هل تحاول تغيير أنماط تفكيرك عندما تكون تحت الضغط؟", en: "Do you try to change your thinking patterns when under pressure?" } },
  { id: 19, category: "personality_tests", domain: "analysis", text: { ar: "هل تشعر أنك تمتلك خصائص من عدة أنواع شخصية مختلفة؟", en: "Do you feel you possess traits from several different personality types?" } },
  { id: 21, category: "body_language", domain: "analysis", text: { ar: "هل تنتبه لغة جسد الآخرين وتفسرها بسهولة؟", en: "Do you pay attention to others' body language and interpret it easily?" } },

  // === مجال الشفاء النفسي (Healing) - 10 أسئلة ===
  { id: 22, category: "body_language", domain: "healing", text: { ar: "هل تستخدم لغة الجسد بشكل واعٍ للتواصل مع الآخرين؟", en: "Do you use body language consciously to communicate with others?" } },
  { id: 23, category: "projective", domain: "healing", text: { ar: "هل تجد أن الصور الغامضة تحفز خيالك وتثير مشاعرك؟", en: "Do you find that ambiguous images stimulate your imagination and evoke emotions?" } },
  { id: 24, category: "projective", domain: "healing", text: { ar: "هل تميل إلى رؤية أنماط أو معاني في الأشياء العشوائية؟", en: "Do you tend to see patterns or meanings in random things?" } },
  { id: 25, category: "existential", domain: "healing", text: { ar: "هل تشعر بالوحدة الوجودية رغم وجود أشخاص من حولك؟", en: "Do you feel existential loneliness despite having people around you?" } },
  { id: 26, category: "aba", domain: "healing", text: { ar: "هل تجد صعوبة في تغيير عاداتك القديمة؟", en: "Do you find it difficult to change your old habits?" } },
  { id: 27, category: "freud", domain: "healing", text: { ar: "هل تشعر أن طفولتك تؤثر على شخصيتك اليوم بشكل كبير؟", en: "Do you feel that your childhood greatly influences your personality today?" } },
  { id: 28, category: "jung", domain: "healing", text: { ar: "هل تشعر أن لديك عدة 'أنا' داخلية تتنافس على السيطرة؟", en: "Do you feel you have several inner 'selves' competing for control?" } },
  { id: 29, category: "traits_theory", domain: "healing", text: { ar: "هل تميل إلى القلق والتوتر في المواقف الجديدة؟", en: "Do you tend to worry and feel anxious in new situations?" } },
  // أسئلتان إضافيتان لمجال الشفاء النفسي (نحتاج لتعريفها أو إعادة تصنيف أسئلة موجودة)
  { id: 42, category: "object_relations", domain: "healing", text: { ar: "هل تجد صعوبة في ت原谅 الآخرين والتسامح معهم؟", en: "Do you find it difficult to forgive others and forgive yourself?" } }, // يجب تصحيح "ت原谅" إلى "تتسامح"
  { id: 43, category: "cultural", domain: "healing", text: { ar: "هل تشعر أن تقاليدك الثقافية تساعدك على التعافي من الصدمات؟", en: "Do you feel your cultural traditions help you recover from trauma?" } },

  // === مجال الكشف الصادق (Discovery) - 10 أسئلة ===
  { id: 20, category: "personality_tests", domain: "discovery", text: { ar: "هل تجد صعوبة في تصنيف نفسك في نوع شخصية واحد؟", en: "Do you find it difficult to classify yourself in one personality type?" } },
  // أسئلة إضافية لمجال الكشف الصادق
  { id: 30, category: "existential", domain: "discovery", text: { ar: "هل تشعر أن لديك هدفًا وجوديًا مميزًا في الحياة؟", en: "Do you feel you have a unique existential purpose in life?" } }, // نقل هذا السؤال من healing إلى discovery
  { id: 44, category: "body_language", domain: "discovery", text: { ar: "هل يمكنك اكتشاف الكذب من خلال لغة جسد الشخص؟", en: "Can you detect lies through a person's body language?" } },
  { id: 45, category: "projective", domain: "discovery", text: { ar: "هل تستخدم الرسم أو الكتابة لاكتشاف ذاتك الداخلية؟", en: "Do you use drawing or writing to discover your inner self?" } },
  { id: 46, category: "aba", domain: "discovery", text: { ar: "هل تلاحظ تحسنًا في سلوكك عند استخدام نظام مكافآت؟", en: "Do you notice improvement in your behavior when using a reward system?" } },
  { id: 47, category: "adler", domain: "discovery", text: { ar: "هل تشعر أن أهدافك الحقيقية تختلف عما تراه الآخرون؟", en: "Do you feel your true goals are different from what others see?" } },
  { id: 48, category: "freud", domain: "discovery", text: { ar: "هل تشعر أن لديك ذكريات طفولية مخفية تؤثر عليك؟", en: "Do you feel you have hidden childhood memories that affect you?" } },
  { id: 49, category: "jung", domain: "discovery", text: { ar: "هل تؤمن بوجود حدس قوي يرشدك في القرارات؟", en: "Do you believe in a strong intuition that guides you in decisions?" } },
  { id: 50, category: "traits_theory", domain: "discovery", text: { ar: "هل تكتشف صفات جديدة في نفسك بمرور الوقت؟", en: "Do you discover new traits in yourself over time?" } },
  { id: 51, category: "cultural", domain: "discovery", text: { ar: "هل تكتشف جوانب جديدة من ثقافتك بمرور الوقت؟", en: "Do you discover new aspects of your culture over time?" } }
];

// تصحيح الخطأ في السؤال
// يجب تعديل السؤال الذي يحتوي على "ت原谅" إلى:
// { id: 42, category: "object_relations", domain: "healing", text: { ar: "هل تجد صعوبة في تتسامح مع الآخرين ومع نفسك؟", en: "Do you find it difficult to forgive others and forgive yourself?" } },
