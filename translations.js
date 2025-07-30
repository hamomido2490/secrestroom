// translations.js - نظام ترجمة ثنائي (عربي / إنجليزي)
// تم التصميم من قبل: Mohammed Tarek

class LanguageSwitcher {
  constructor() {
    this.lang = 'ar'; // اللغة الافتراضية
    this.translations = {
      ar: {
        // --- النصوص العامة ---
        'welcome_title': 'مرحبا بك في غرفة الاسرار',
        'user_info_title': 'أخبرنا عنك أولًا',
        'user_info_desc': 'هذه المعلومات تساعدنا في تخصيص التحليل لك بدقة أكبر',
        'age_label': 'العمر:',
        'gender_label': 'الجنس:',
        'submit_user_info': 'أدخل الغرفة',
        'intro_title': 'غرفة الأسرار',
        'intro_subtitle': 'Chamber of Secrets',
        'intro_desc': 'اكتشف شخصيتك الحقيقية من خلال 6 أسئلة تفتح لك أبواب الذات',
        'intro_p1': 'أنت على وشك دخول غرفة لا تُظهر ما بداخلها إلا للصادقين مع أنفسهم.',
        'intro_p2': 'أجب بصدق... وسترى ما لم تره من قبل.',
        'start_btn': 'ادخل إلى الغرفة',
        'question': 'سؤال',
        'next_btn': 'السؤال التالي',
        'restart_btn': 'أعد الرحلة',
        'footer1': '© 2025 غرفة الأسرار | Chamber of Secrets',
        'footer2': 'تم التصميم والتحليل النفسي والتطوير من قبل: Mohammed Tarek',

        // --- الأسئلة ---
        'q1': 'عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟',
        'q2': 'في لقاء اجتماعي جديد، ماذا تفعل؟',
        'q3': 'ما نوع المهمة التي تجعلك "تُنسى" من نفسك؟',
        'q4': 'ما أكثر شيء تبحث عنه في الصداقات؟',
        'q5': 'كيف تتعامل مع الأخطاء؟',
        'q6': 'ما الذي يُشعرك بالفخر؟',

        // --- خيارات الأسئلة ---
        'o1_1': 'أنا متحمس لأبدأ يومي!',
        'o1_2': 'هل كل شيء تحت السيطرة؟',
        'o1_3': 'هل سأكون كافيًا اليوم؟',
        'o1_4': 'أريد أن أفهم معنى هذا اليوم',

        'o2_1': 'أبدأ الحديث مع الجميع بسرعة',
        'o2_2': 'أراقب أولًا ثم أتحدث مع شخص واحد',
        'o2_3': 'أركز على من يمكن أن يفيدني أو أفيد منه',
        'o2_4': 'أحاول فهم مشاعر الآخرين بسرعة',

        'o3_1': 'التحديات السريعة والملتزمة بالوقت',
        'o3_2': 'التحليل العميق للبيانات أو الأنظمة',
        'o3_3': 'مساعدة شخص على تجاوز أزمة',
        'o3_4': 'تنظيم فريق لتحقيق هدف منظم',

        'o4_1': 'المرح والطاقة',
        'o4_2': 'الولاء والاستقرار',
        'o4_3': 'العمق والمعنى',
        'o4_4': 'التحدي الفكري',

        'o5_1': 'أتعلم وأتحرك بسرعة',
        'o5_2': 'أحلل ما حدث بدقة',
        'o5_3': 'أشعر بالذنب، لكنني أسامح نفسي',
        'o5_4': 'أتساءل: هل هذا يثبت أنني غير كافٍ؟',

        'o6_1': 'تحقيق نتائج ملموسة',
        'o6_2': 'دعم شخص في أزمة',
        'o6_3': 'ابتكار فكرة جديدة',
        'o6_4': 'الالتزام بالواجبات والمسؤوليات',

        // --- تحليل الشخصية ---
        'red_name': 'النوع الأحمر',
        'red_title': 'القائد الطموح',
        'red_desc': 'أنت من النوع الذي لا ينتظر الفرصة، بل يصنعها بيديه.',
        
        'yellow_name': 'النوع الأصفر',
        'yellow_title': 'المحفّز المرح',
        'yellow_desc': 'أنت شرارة الضوء في أي مكان تدخله. طاقتك لا تنضب.',
        
        'green_name': 'النوع الأخضر',
        'green_title': 'الداعم المستقر',
        'green_desc': 'أنت القلب الهادئ في وسط العاصفة. لا تُسرع، لكنك لا تتوقف.',
        
        'blue_name': 'النوع الأزرق',
        'blue_title': 'المُخطط الدقيق',
        'blue_desc': 'أنت لا تُسرع، لأنك تعرف أن الخطأ الواحد قد يُكلّف الكثير.',

        // --- فقرات إضافية ---
        'age_insight_13_18': 'أنت في مرحلة بناء الهوية، حيث تبحث عن نفسك ومكانك في العالم.',
        'age_insight_19_25': 'أنت في عمر الحميمية، حيث تبحث عن علاقات حقيقية.',
        'age_insight_26_60': 'أنت في مرحلة الإنجابية، حيث تُسهم في نجاح الآخرين.',
        'gender_male': 'كذكر، تحمل مسؤولية القيادة بثقلها وضوءها.',
        'gender_female': 'كأنثى، تُظهر قوة داخلية نادرة: التوازن بين القلب والعقل.',
        'gender_other': 'أنت تتجاوز التصنيفات، وتُظهر توازنًا نادرًا بين الحدس والمنطق.',

        // --- المصادر ---
        'sources_title': 'المصادر النفسية المستخدمة في التحليل:',
        'source_1': 'نظرية الألوان الشخصية',
        'source_2': 'نظرية MBTI (مايرز-بريجز)',
        'source_3': 'نظرية كيرسي للنُظم النفسية',
        'source_4': 'نظرية DISC للسلوك البشري',
        'source_5': 'نظرية العوامل الخمسة الكبرى (Big Five)',
        'source_6': 'نظرية أدلر (الشعور بالنقص والسعي للتفوق)',
        'source_7': 'نظرية ماسلو (هرم الحاجات)',
        'source_8': 'نظرية روجرز (التحقق الذاتي)',
        'source_9': 'نظرية إريكسون (المراحل النفسية الاجتماعية)',
        'source_10': 'نظرية PERMA (مكونات الرفاهية النفسية)',
        'source_11': 'نظرية الانغماس (Flow) - ميهل يتشينتنهامي'
      },
      en: {
        // --- General Texts ---
        'welcome_title': 'Welcome to Chamber of Secrets',
        'user_info_title': 'Tell Us About You First',
        'user_info_desc': 'This information helps us customize the analysis for you more accurately',
        'age_label': 'Age:',
        'gender_label': 'Gender:',
        'submit_user_info': 'Enter the Chamber',
        'intro_title': 'Chamber of Secrets',
        'intro_subtitle': 'غرفة الأسرار',
        'intro_desc': 'Discover your true personality through 6 questions that open the doors to your inner self',
        'intro_p1': 'You are about to enter a room that reveals itself only to those honest with themselves.',
        'intro_p2': 'Answer honestly... and you will see what you have never seen before.',
        'start_btn': 'Enter the Chamber',
        'question': 'Question',
        'next_btn': 'Next Question',
        'restart_btn': 'Restart the Journey',
        'footer1': '© 2025 Chamber of Secrets | غرفة الأسرار',
        'footer2': 'Designed, analyzed, and developed by: Mohammed Tarek',

        // --- Questions ---
        'q1': 'When you wake up in the morning, what is the first thing that comes to mind?',
        'q2': 'In a new social gathering, what do you do?',
        'q3': 'What type of task makes you "forget yourself"?',
        'q4': 'What do you look for most in friendships?',
        'q5': 'How do you deal with mistakes?',
        'q6': 'What makes you feel proud?',

        // --- Options ---
        'o1_1': 'I am excited to start my day!',
        'o1_2': 'Is everything under control?',
        'o1_3': 'Will I be enough today?',
        'o1_4': 'I want to understand the meaning of this day',

        'o2_1': 'I start talking to everyone quickly',
        'o2_2': 'I observe first, then talk to one person',
        'o2_3': 'I focus on who can benefit me or I can benefit them',
        'o2_4': 'I try to understand others\' feelings quickly',

        'o3_1': 'Fast-paced, time-bound challenges',
        'o3_2': 'Deep analysis of data or systems',
        'o3_3': 'Helping someone overcome a crisis',
        'o3_4': 'Organizing a team to achieve a structured goal',

        'o4_1': 'Fun and energy',
        'o4_2': 'Loyalty and stability',
        'o4_3': 'Depth and meaning',
        'o4_4': 'Intellectual challenge',

        'o5_1': 'I learn and move quickly',
        'o5_2': 'I analyze what happened in detail',
        'o5_3': 'I feel guilty, but I forgive myself',
        'o5_4': 'I wonder: does this prove I\'m not enough?',

        'o6_1': 'Achieving tangible results',
        'o6_2': 'Supporting someone in a crisis',
        'o6_3': 'Inventing a new idea',
        'o6_4': 'Commitment to duties and responsibilities',

        // --- Personality Analysis ---
        'red_name': 'The Red Type',
        'red_title': 'The Ambitious Leader',
        'red_desc': 'You are the type who doesn\'t wait for opportunity — you create it with your own hands.',
        
        'yellow_name': 'The Yellow Type',
        'yellow_title': 'The Cheerful Motivator',
        'yellow_desc': 'You are a spark of light wherever you go. Your energy is contagious.',
        
        'green_name': 'The Green Type',
        'green_title': 'The Stable Supporter',
        'green_desc': 'You are the calm heart in the middle of the storm. You don\'t rush, but you never stop.',
        
        'blue_name': 'The Blue Type',
        'blue_title': 'The Precise Planner',
        'blue_desc': 'You don\'t rush because you know one mistake can cost a lot.',

        // --- Additional Paragraphs ---
        'age_insight_13_18': 'You are in the identity-building stage, searching for yourself and your place in the world.',
        'age_insight_19_25': 'You are in the intimacy stage, seeking real relationships and deep connections.',
        'age_insight_26_60': 'You are in the generativity stage, where you contribute to the success of others.',
        'gender_male': 'As a man, you carry the weight and light of leadership.',
        'gender_female': 'As a woman, you show rare inner strength: balance between heart and mind.',
        'gender_other': 'You transcend categories, showing a rare balance between intuition and logic.',

        // --- Sources ---
        'sources_title': 'Psychological sources used in the analysis:',
        'source_1': 'Color Personality Theory',
        'source_2': 'MBTI (Myers-Briggs)',
        'source_3': 'Keirsey Temperament Theory',
        'source_4': 'DISC Behavior Model',
        'source_5': 'Big Five Personality Traits',
        'source_6': 'Adler\'s Theory (Inferiority & Striving for Superiority)',
        'source_7': 'Maslow\'s Hierarchy of Needs',
        'source_8': 'Rogers\' Self-Actualization',
        'source_9': 'Erikson\'s Psychosocial Stages',
        'source_10': 'PERMA Model (Well-being Components)',
        'source_11': 'Flow Theory - Mihaly Csikszentmihalyi'
      }
    };
  }

  init() {
    const toggleBtn = document.getElementById('langToggle');
    if (!toggleBtn) return;

    // تحقق من اللغة المحفوظة
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      this.lang = savedLang;
    }

    // تحديث الواجهة
    this.updateUI();

    // تفعيل الزر
    toggleBtn.addEventListener('click', () => {
      this.lang = this.lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('preferredLang', this.lang);
      this.updateUI();
      // تحديث اتجاه الصفحة
      document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = this.lang;
    });
  }

  updateUI() {
    const t = this.translations[this.lang];
    const $ = (id) => document.getElementById(id);

    // تحديث النصوص
    if ($('userInfo')) {
      $('userInfo').querySelector('h3:nth-of-type(1)').textContent = t.welcome_title;
      $('userInfo').querySelector('h3:nth-of-type(2)').textContent = t.user_info_title;
      $('userInfo').querySelector('p').textContent = t.user_info_desc;
      $('age').previousElementSibling.textContent = t.age_label;
      $('gender').previousElementSibling.textContent = t.gender_label;
      $('submitUserInfo').textContent = t.submit_user_info;
    }

    if ($('intro')) {
      $('intro').querySelector('h1').textContent = t.intro_title;
      $('intro').querySelector('h2').textContent = t.intro_subtitle;
      $('intro').querySelector('.divider').nextElementSibling.textContent = t.intro_desc;
      $('intro').querySelectorAll('p')[0].textContent = t.intro_p1;
      $('intro').querySelectorAll('p')[1].textContent = t.intro_p2;
      $('startBtn').textContent = t.start_btn;
    }

    if ($('nextBtn')) {
      $('nextBtn').textContent = t.next_btn;
    }

    if ($('restartBtn')) {
      $('restartBtn').textContent = t.restart_btn;
    }

    // تحديث الفوتر
    if (document.querySelector('footer p:nth-of-type(1)')) {
      document.querySelector('footer p:nth-of-type(1)').textContent = t.footer1;
      document.querySelector('footer p:nth-of-type(2)').textContent = t.footer2;
    }

    // تحديث زر اللغة
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.textContent = this.lang === 'ar' ? '🌐 AR' : '🌐 EN';
    }

    // إرسال إشارة لتغيير اللغة
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: this.lang }));
  }

  // دالة لترجمة النتائج
  translateText(text) {
    return this.translations[this.lang][text] || text;
  }
}

// جعل الكلاس متاحًا عالميًا
window.LanguageSwitcher = new LanguageSwitcher();
