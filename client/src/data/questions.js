// Questions for DISC (original), MBTI, and Big Five.
// For MBTI: Binary choices for 4 dimensions (E/I, S/N, T/F, J/P), ~5 per dimension.
// For Big Five: Likert scale (1-5: Disagree to Agree), ~5 per trait.
// Questions designed with "human touch": natural, conversational, relatable to daily life.

export default {
  ar: {
    disc: [
      {
        text: "في يوم عادي، أي من هذه الصفات تشبهك أكثر وأقل؟",
        options: [
          "أفكر بعمق قبل أن أقرر أي شيء، مثل عند اختيار فيلم جديد.", // C
          "أحب الدردشة مع أي شخص أقابله، حتى في المقهى.", // I
          "ألتزم بروتيني اليومي، مثل شرب القهوة في نفس الوقت كل صباح.", // S
          "أقود المجموعة وأقرر الخطط، مثل تنظيم رحلة مع الأصدقاء." // D
        ]
      },
      {
        text: "عند التعامل مع مشكلة في العمل أو الدراسة، أي صفة تشبهك؟",
        options: [
          "أبحث عن الحلول الجريئة، مثل تغيير الطريقة كليًا.", // D
          "أفكر في التفاصيل الدقيقة لتجنب الأخطاء.", // C
          "أتحمس وأشارك الآخرين في الفكرة.", // I
          "أكون راضيًا بما لدي وأستمر بهدوء." // S
        ]
      },
      {
        text: "مع الأصدقاء، أي صفة تشبهك أكثر وأقل؟",
        options: [
          "أساعد الجميع بسعادة، مثل الاستماع لمشاكلهم.", // S
          "أحب النشاط والحيوية، مثل اقتراح ألعاب جديدة.", // I
          "أكون جريئًا وأخوض المغامرات، مثل اقتراح رحلة مفاجئة.", // D
          "أنجز المهام بدقة، مثل ترتيب الجدول الزمني." // C
        ]
      },
      {
        text: "في موقف صعب، أي صفة تشبهك؟",
        options: [
          "أجادل لأحصل على ما أريد، مثل في نقاش عائلي.", // D
          "أطلب دليلًا قبل الاقتناع، مثل في شراء منتج جديد.", // C
          "أتردد في اتخاذ القرار، مثل اختيار وجبة في مطعم.", // S
          "أكون غير متوقع، مثل تغيير الخطط فجأة." // I
        ]
      },
      {
        text: "في المنزل، أي صفة تشبهك أكثر وأقل؟",
        options: [
          "أحب النظام والترتيب، مثل ترتيب الرفوف يوميًا.", // C
          "أكون ودودًا وسهل التعامل، مثل دعوة الجيران.", // S
          "أبتكر أفكارًا جديدة، مثل تجربة وصفة طعام.", // I
          "أعتمد على نفسي، مثل إصلاح شيء بنفسي." // D
        ]
      },
      {
        text: "مع العائلة، أي صفة تشبهك؟",
        options: [
          "أكون حساسًا تجاه مشاعرهم، مثل الاستماع لهم.", // S
          "أثق بنفسي وأقرر، مثل اختيار مكان العطلة.", // D
          "أهتم بالتفاصيل، مثل تذكر التواريخ الهامة.", // C
          "أحب التواصل مع الجميع، مثل إرسال رسائل يومية." // I
        ]
      },
      {
        text: "في المغامرات، أي صفة تشبهك أكثر وأقل؟",
        options: [
          "أحب المخاطر، مثل ركوب الدراجة الجبلية.", // D
          "أفضل السلام، مثل نزهة هادئة في الحديقة.", // S
          "أستمتع بالضحك، مثل مشاهدة كوميديا مع أصدقاء.", // I
          "أتبع الإجراءات، مثل قراءة الدليل قبل البدء." // C
        ]
      },
      {
        text: "في الروتين اليومي، أي صفة تشبهك؟",
        options: [
          "أنتظر بصبر، مثل في طابور البنك.", // S
          "أعمل بسرعة، مثل إنهاء المهام بسرعة.", // D
          "أتكيف مع التغييرات، مثل تغيير الخطط.", // I
          "أخطط مسبقًا، مثل جدول أسبوعي." // C
        ]
      },
      {
        text: "في النقاشات، أي صفة تشبهك أكثر وأقل؟",
        options: [
          "أقول ما أفكر مباشرة، مثل في اجتماع عمل.", // D
          "أتجنب الصراع، مثل في خلاف عائلي.", // S
          "أشجع الآخرين، مثل في فريق رياضي.", // I
          "أفكر بعمق، مثل في حل لغز." // C
        ]
      },
      {
        text: "في العمل الجماعي، أي صفة تشبهك؟",
        options: [
          "ألتزم بالروتين، مثل العمل اليومي نفسه.", // S
          "أبتكر أشياء جديدة، مثل فكرة مشروع.", // I
          "أقود الفريق، مثل توزيع المهام.", // D
          "أتجنب الأخطاء، مثل التحقق من التفاصيل." // C
        ]
      },
      {
        text: "مع الأصدقاء، أي صفة تشبهك أكثر وأقل؟",
        options: [
          "أصنع أصدقاء جدد بسهولة، مثل في حفلة.", // I
          "لا أستسلم، مثل في لعبة تنافسية.", // D
          "لا أغضب بسهولة، مثل في نقاش ساخن.", // S
          "أرتب الأمور، مثل تنظيم لقاء." // C
        ]
      },
      {
        text: "في السفر، أي صفة تشبهك؟",
        options: [
          "أجرب الجديد، مثل طعام محلي.", // D
          "أتحمل المسؤولية، مثل قيادة السيارة.", // C
          "أعمل مع الآخرين، مثل مشاركة التكاليف.", // S
          "أفكر خارج الصندوق، مثل طريق بديل." // I
        ]
      }
    ],
    mbti: [
      { text: "أشعر بالطاقة بعد قضاء وقت مع أصدقاء في حفلة، حتى لو كانت متعبة.", dimension: "E/I", agree: "E" },
      { text: "أفضل قضاء مساء هادئ في المنزل مع كتاب أو فيلم بدلاً من الخروج.", dimension: "E/I", agree: "I" },
      { text: "أحب التحدث مع غرباء في مناسبات اجتماعية، مثل عند انتظار الطعام في مطعم.", dimension: "E/I", agree: "E" },
      { text: "أحتاج وقتًا لوحدي بعد يوم طويل لأشحن طاقتي.", dimension: "E/I", agree: "I" },
      { text: "أشعر بالملل إذا لم أكن محاطًا بأشخاص آخرين لفترة طويلة.", dimension: "E/I", agree: "E" },
      { text: "أركز على الحقائق والتفاصيل الملموسة عند حل مشكلة، مثل إصلاح شيء مكسور.", dimension: "S/N", agree: "S" },
      { text: "أحب تخيل إمكانيات مستقبلية، مثل ما سيحدث في السنوات القادمة.", dimension: "S/N", agree: "N" },
      { text: "أفضل الاعتماد على تجارب سابقة بدلاً من أفكار نظرية جديدة.", dimension: "S/N", agree: "S" },
      { text: "أستمتع بالأحلام اليومية والتفكير في 'ماذا لو' في الحياة.", dimension: "S/N", agree: "N" },
      { text: "ألاحظ التغييرات الصغيرة في البيئة، مثل ترتيب الغرفة.", dimension: "S/N", agree: "S" },
      { text: "أتخذ قرارات بناءً على المنطق، حتى لو أثرت على مشاعر الآخرين.", dimension: "T/F", agree: "T" },
      { text: "أفكر في كيف يشعر الآخرون قبل اتخاذ قرار، مثل في نزاع عائلي.", dimension: "T/F", agree: "F" },
      { text: "أفضل الحقيقة المباشرة بدلاً من تلطيف الكلام لتجنب الإيذاء.", dimension: "T/F", agree: "T" },
      { text: "أسعى للحفاظ على الانسجام في المجموعة، حتى لو كان على حساب المنطق.", dimension: "T/F", agree: "F" },
      { text: "أحلل المشكلات بعقلانية دون تدخل العواطف.", dimension: "T/F", agree: "T" },
      { text: "أحب التخطيط المسبق ليومي، مثل جدول زمني واضح.", dimension: "J/P", agree: "J" },
      { text: "أفضل الارتجال والتكيف مع ما يأتي في اللحظة.", dimension: "J/P", agree: "P" },
      { text: "أشعر بالراحة عند إغلاق المهام المفتوحة بسرعة.", dimension: "J/P", agree: "J" },
      { text: "أستمتع بالحرية في تغيير الخطط في اللحظة الأخيرة.", dimension: "J/P", agree: "P" },
      { text: "ألتزم بالمواعيد والقوائم لأشعر بالسيطرة.", dimension: "J/P", agree: "J" }
    ],
    bigFive: [
      { text: "أحب تجربة أشياء جديدة، مثل زيارة مدينة غير مألوفة.", trait: "O", reverse: false },
      { text: "أفكر كثيرًا في الأفكار العميقة، مثل معنى الحياة أثناء المشي.", trait: "O", reverse: false },
      { text: "لا أهتم بالفنون أو الشعر في حياتي اليومية.", trait: "O", reverse: true },
      { text: "أستمتع بالأحلام اليومية والتخيلات الإبداعية.", trait: "O", reverse: false },
      { text: "أفضل الروتين المألوف بدلاً من المغامرات الجديدة.", trait: "O", reverse: true },
      { text: "أنهي مهامي دائمًا في الوقت المحدد، مثل دفع الفواتير.", trait: "C", reverse: false },
      { text: "غرفتي مرتبة ومنظمة دائمًا.", trait: "C", reverse: false },
      { text: "أنسى أحيانًا الأمور المهمة، مثل مواعيد الطبيب.", trait: "C", reverse: true },
      { text: "ألتزم بخططي حتى في الأيام الصعبة.", trait: "C", reverse: false },
      { text: "أترك الأمور تتراكم حتى اللحظة الأخيرة.", trait: "C", reverse: true },
      { text: "أحب أن أكون مركز الاهتمام في التجمعات.", trait: "E", reverse: false },
      { text: "أشعر بالطاقة بعد قضاء وقت مع أصدقاء.", trait: "E", reverse: false },
      { text: "أفضل الليالي الهادئة لوحدي بدلاً من الحفلات.", trait: "E", reverse: true },
      { text: "أبدأ محادثات مع غرباء بسهولة.", trait: "E", reverse: false },
      { text: "أشعر بالإرهاق بعد اجتماعات كبيرة.", trait: "E", reverse: true },
      { text: "أساعد الآخرين دائمًا عندما يحتاجون، مثل إعارة شيء.", trait: "A", reverse: false },
      { text: "أشعر بالتعاطف مع مشاكل الآخرين.", trait: "A", reverse: false },
      { text: "أركز على مصالحي الخاصة أولاً.", trait: "A", reverse: true },
      { text: "أتجنب الجدال للحفاظ على السلام.", trait: "A", reverse: false },
      { text: "أكون صارمًا إذا لزم الأمر للحصول على ما أريد.", trait: "A", reverse: true },
      { text: "أقلق كثيرًا بشأن المستقبل.", trait: "N", reverse: false },
      { text: "مزاجي يتغير بسهولة من سعادة إلى حزن.", trait: "N", reverse: false },
      { text: "أشعر بالهدوء حتى في المواقف الضاغطة.", trait: "N", reverse: true },
      { text: "أنام سيئًا عندما أفكر في مشكلة.", trait: "N", reverse: false },
      { text: "أتعامل مع الفشل بهدوء دون إحباط كبير.", trait: "N", reverse: true }
    ]
  },
  en: {
    disc: [
      {
        text: "In a typical day, which traits feel most and least like you?",
        options: [
          "I think deeply before deciding, like choosing a new movie.", // C
          "I love chatting with anyone I meet, even at the coffee shop.", // I
          "I stick to my daily routine, like coffee at the same time every morning.", // S
          "I lead the group and make plans, like organizing a trip with friends." // D
        ]
      },
      {
        text: "When dealing with a problem at work or school, which trait fits you?",
        options: [
          "I look for bold solutions, like changing the method completely.", // D
          "I think about the fine details to avoid mistakes.", // C
          "I get excited and share the idea with others.", // I
          "I'm content with what I have and continue calmly." // S
        ]
      },
      {
        text: "With friends, which trait is most and least like you?",
        options: [
          "I help everyone happily, like listening to their problems.", // S
          "I love activity and vitality, like suggesting new games.", // I
          "I'm bold and dive into adventures, like suggesting a surprise trip.", // D
          "I complete tasks precisely, like arranging the schedule." // C
        ]
      },
      {
        text: "In a difficult situation, which trait fits you?",
        options: [
          "I argue to get what I want, like in a family discussion.", // D
          "I ask for proof before being convinced, like buying a new product.", // C
          "I hesitate in making decisions, like choosing a meal at a restaurant.", // S
          "I'm unpredictable, like changing plans suddenly." // I
        ]
      },
      {
        text: "At home, which trait is most and least like you?",
        options: [
          "I love order and arrangement, like organizing shelves daily.", // C
          "I'm friendly and easygoing, like inviting neighbors.", // S
          "I come up with new ideas, like trying a food recipe.", // I
          "I rely on myself, like fixing something myself." // D
        ]
      },
      {
        text: "With family, which trait fits you?",
        options: [
          "I'm sensitive to their feelings, like listening to them.", // S
          "I trust myself and decide, like choosing a vacation spot.", // D
          "I care about details, like remembering important dates.", // C
          "I love communicating with everyone, like sending daily messages." // I
        ]
      },
      {
        text: "In adventures, which trait is most and least like you?",
        options: [
          "I love risks, like mountain biking.", // D
          "I prefer peace, like a quiet walk in the park.", // S
          "I enjoy laughter, like watching comedy with friends.", // I
          "I follow procedures, like reading the guide before starting." // C
        ]
      },
      {
        text: "In daily routine, which trait fits you?",
        options: [
          "I wait patiently, like in a bank queue.", // S
          "I work quickly, like finishing tasks fast.", // D
          "I adapt to changes, like changing plans.", // I
          "I plan ahead, like a weekly schedule." // C
        ]
      },
      {
        text: "In discussions, which trait is most and least like you?",
        options: [
          "I say what I think directly, like in a work meeting.", // D
          "I avoid conflict, like in a family dispute.", // S
          "I encourage others, like in a sports team.", // I
          "I think deeply, like solving a puzzle." // C
        ]
      },
      {
        text: "In group work, which trait fits you?",
        options: [
          "I stick to routine, like the same daily work.", // S
          "I innovate new things, like a project idea.", // I
          "I lead the team, like distributing tasks.", // D
          "I avoid mistakes, like checking details." // C
        ]
      },
      {
        text: "With friends, which trait is most and least like you?",
        options: [
          "I make new friends easily, like at a party.", // I
          "I don't give up, like in a competitive game.", // D
          "I don't get angry easily, like in a hot discussion.", // S
          "I organize things, like arranging a meeting." // C
        ]
      },
      {
        text: "In travel, which trait fits you?",
        options: [
          "I try new things, like local food.", // D
          "I take responsibility, like driving the car.", // C
          "I work with others, like sharing costs.", // S
          "I think outside the box, like an alternative route." // I
        ]
      }
    ],
    mbti: [
      { text: "I feel energized after spending time with friends at a party, even if it's tiring.", dimension: "E/I", agree: "E" },
      { text: "I prefer a quiet evening at home with a book or movie instead of going out.", dimension: "E/I", agree: "I" },
      { text: "I love talking to strangers at social events, like waiting for food at a restaurant.", dimension: "E/I", agree: "E" },
      { text: "I need time alone after a long day to recharge my energy.", dimension: "E/I", agree: "I" },
      { text: "I feel bored if I'm not surrounded by other people for a long time.", dimension: "E/I", agree: "E" },
      { text: "I focus on facts and tangible details when solving a problem, like fixing something broken.", dimension: "S/N", agree: "S" },
      { text: "I love imagining future possibilities, like what will happen in the coming years.", dimension: "S/N", agree: "N" },
      { text: "I prefer relying on past experiences rather than new theoretical ideas.", dimension: "S/N", agree: "S" },
      { text: "I enjoy daydreaming and thinking about 'what if' in life.", dimension: "S/N", agree: "N" },
      { text: "I notice small changes in the environment, like room arrangement.", dimension: "S/N", agree: "S" },
      { text: "I make decisions based on logic, even if they affect others' feelings.", dimension: "T/F", agree: "T" },
      { text: "I think about how others feel before making a decision, like in a family dispute.", dimension: "T/F", agree: "F" },
      { text: "I prefer direct truth instead of softening words to avoid hurting.", dimension: "T/F", agree: "T" },
      { text: "I seek to maintain harmony in the group, even at the expense of logic.", dimension: "T/F", agree: "F" },
      { text: "I analyze problems rationally without emotional interference.", dimension: "T/F", agree: "T" },
      { text: "I love advance planning for my day, like a clear schedule.", dimension: "J/P", agree: "J" },
      { text: "I prefer improvisation and adapting to what comes in the moment.", dimension: "J/P", agree: "P" },
      { text: "I feel comfortable closing open tasks quickly.", dimension: "J/P", agree: "J" },
      { text: "I enjoy the freedom to change plans at the last minute.", dimension: "J/P", agree: "P" },
      { text: "I stick to deadlines and lists to feel in control.", dimension: "J/P", agree: "J" }
    ],
    bigFive: [
      { text: "I love trying new things, like visiting an unfamiliar city.", trait: "O", reverse: false },
      { text: "I think a lot about deep ideas, like the meaning of life while walking.", trait: "O", reverse: false },
      { text: "I'm not interested in arts or poetry in my daily life.", trait: "O", reverse: true },
      { text: "I enjoy daydreaming and creative imaginations.", trait: "O", reverse: false },
      { text: "I prefer familiar routines instead of new adventures.", trait: "O", reverse: true },
      { text: "I always finish my tasks on time, like paying bills.", trait: "C", reverse: false },
      { text: "My room is always tidy and organized.", trait: "C", reverse: false },
      { text: "I sometimes forget important things, like doctor's appointments.", trait: "C", reverse: true },
      { text: "I stick to my plans even on tough days.", trait: "C", reverse: false },
      { text: "I let things pile up until the last minute.", trait: "C", reverse: true },
      { text: "I love being the center of attention at gatherings.", trait: "E", reverse: false },
      { text: "I feel energized after spending time with friends.", trait: "E", reverse: false },
      { text: "I prefer quiet nights alone instead of parties.", trait: "E", reverse: true },
      { text: "I start conversations with strangers easily.", trait: "E", reverse: false },
      { text: "I feel exhausted after large meetings.", trait: "E", reverse: true },
      { text: "I always help others when they need it, like lending something.", trait: "A", reverse: false },
      { text: "I feel empathy for others' problems.", trait: "A", reverse: false },
      { text: "I focus on my own interests first.", trait: "A", reverse: true },
      { text: "I avoid arguments to keep the peace.", trait: "A", reverse: false },
      { text: "I'm strict if necessary to get what I want.", trait: "A", reverse: true },
      { text: "I worry a lot about the future.", trait: "N", reverse: false },
      { text: "My mood changes easily from happy to sad.", trait: "N", reverse: false },
      { text: "I feel calm even in stressful situations.", trait: "N", reverse: true },
      { text: "I sleep poorly when thinking about a problem.", trait: "N", reverse: false },
      { text: "I handle failure calmly without much frustration.", trait: "N", reverse: true }
    ]
  }
};