// translations.js - نظام ترجمة كامل (عربي / إنجليزي)
// تم التصميم من قبل: Mohammed Tarek

class LanguageManager {
  constructor() {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.translations = {
      ar: {
        welcome_title: 'مرحبا بك في غرفة الاسرار',
        user_info_title: 'أخبرنا عنك أولًا',
        user_info_desc: 'هذه المعلومات تساعدنا في تخصيص التحليل لك بدقة أكبر',
        age_label: 'العمر:',
        gender_label: 'الجنس:',
        submit_user_info: 'أدخل الغرفة',
        intro_title: 'غرفة الأسرار',
        intro_subtitle: 'Chamber of Secrets',
        intro_desc: 'اكتشف شخصيتك الحقيقية من خلال 20 سؤالاً تفتح لك أبواب الذات',
        intro_p1: 'أنت على وشك دخول غرفة لا تُظهر ما بداخلها إلا للصادقين مع أنفسهم.',
        intro_p2: 'أجب بصدق... وسترى ما لم تره من قبل.',
        start_btn: 'ادخل إلى الغرفة',
        question_prefix: 'سؤال',
        next_btn: 'السؤال التالي',
        restart_btn: 'أعد الرحلة',
        footer1: '© 2025 غرفة الأسرار | Chamber of Secrets',
        footer2: 'تم التصميم والتحليل النفسي والتطوير من قبل: Mohammed Tarek',
        lang_switch: 'EN',
        dob_label: 'تاريخ الميلاد:',
        zodiac_title: 'بناءً على برجك',
        prediction_title: 'تنبؤات برجك الأسبوعية',
        // أسئلة 1-6 وخياراتها
        q1: "عندما تستيقظ في الصباح، ما أول شيء يخطر ببالك؟",
        o1_1: "أنا متحمس لأبدأ يومي!",
        o1_2: "هل كل شيء تحت السيطرة؟",
        o1_3: "هل سأكون كافيًا اليوم؟",
        o1_4: "أريد أن أفهم معنى هذا اليوم",
        q2: "في لقاء اجتماعي جديد، ماذا تفعل؟",
        o2_1: "أبدأ الحديث مع الجميع بسرعة",
        o2_2: "أراقب أولًا ثم أتحدث مع شخص واحد",
        o2_3: "أركز على من يمكن أن يفيدني أو أفيد منه",
        o2_4: "أحاول فهم مشاعر الآخرين بسرعة",
        q3: "ما نوع المهمة التي تجعلك 'تُنسى' من نفسك؟",
        o3_1: "التحديات السريعة والملتزمة بالوقت",
        o3_2: "التحليل العميق للبيانات أو الأنظمة",
        o3_3: "مساعدة شخص على تجاوز أزمة",
        o3_4: "تنظيم فريق لتحقيق هدف منظم",
        q4: "ما أكثر شيء تبحث عنه في الصداقات؟",
        o4_1: "المرح والطاقة",
        o4_2: "الولاء والاستقرار",
        o4_3: "العمق والمعنى",
        o4_4: "التحدي الفكري",
        q5: "كيف تتعامل مع الأخطاء؟",
        o5_1: "أتعلم وأتحرك بسرعة",
        o5_2: "أحلل ما حدث بدقة",
        o5_3: "أشعر بالذنب، لكنني أسامح نفسي",
        o5_4: "أتساءل: هل هذا يثبت أنني غير كافٍ؟",
        q6: "ما الذي يُشعرك بالفخر؟",
        o6_1: "تحقيق نتائج ملموسة",
        o6_2: "دعم شخص في أزمة",
        o6_3: "ابتكار فكرة جديدة",
        o6_4: "الالتزام بالواجبات والمسؤوليات"
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
        intro_desc: 'Discover your true personality through 20 questions that open the doors to your inner self',
        intro_p1: 'You are about to enter a room that reveals itself only to those honest with themselves.',
        intro_p2: 'Answer honestly... and you will see what you have never seen before.',
        start_btn: 'Enter the Chamber',
        question_prefix: 'Question',
        next_btn: 'Next Question',
        restart_btn: 'Restart the Journey',
        footer1: '© 2025 Chamber of Secrets | غرفة الأسرار',
        footer2: 'Designed, analyzed, and developed by: Mohammed Tarek',
        lang_switch: 'AR',
        dob_label: 'Date of Birth:',
        zodiac_title: 'Based on your zodiac sign',
        prediction_title: 'Your Weekly Horoscope',
        // Questions 1-6 and options
        q1: "When you wake up in the morning, what is the first thing that comes to mind?",
        o1_1: "I am excited to start my day!",
        o1_2: "Is everything under control?",
        o1_3: "Will I be enough today?",
        o1_4: "I want to understand the meaning of this day",
        q2: "In a new social gathering, what do you do?",
        o2_1: "I start talking to everyone quickly",
        o2_2: "I observe first, then talk to one person",
        o2_3: "I focus on who can benefit me or I can benefit them",
        o2_4: "I try to understand others' feelings quickly",
        q3: "What type of task makes you 'forget yourself'?",
        o3_1: "Fast-paced, time-bound challenges",
        o3_2: "Deep analysis of data or systems",
        o3_3: "Helping someone overcome a crisis",
        o3_4: "Organizing a team to achieve a structured goal",
        q4: "What do you look for most in friendships?",
        o4_1: "Fun and energy",
        o4_2: "Loyalty and stability",
        o4_3: "Depth and meaning",
        o4_4: "Intellectual challenge",
        q5: "How do you deal with mistakes?",
        o5_1: "I learn and move quickly",
        o5_2: "I analyze what happened in detail",
        o5_3: "I feel guilty, but I forgive myself",
        o5_4: "I wonder: does this prove I'm not enough?",
        q6: "What makes you feel proud?",
        o6_1: "Achieving tangible results",
        o6_2: "Supporting someone in a crisis",
        o6_3: "Inventing a new idea",
        o6_4: "Commitment to duties and responsibilities"
      }
    };
  }

  init() {
    this.addLanguageSwitcher();
    this.applyTranslation();
    this.bindEvents();
  }

  addLanguageSwitcher() {
    if (document.getElementById('langToggle')) return;
    const switcher = document.createElement('button');
    switcher.id = 'langToggle';
    switcher.title = 'Change Language';
    switcher.style.cssText = `
      position: fixed; top: 20px; left: 20px; z-index: 1000;
      background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid #fbbf24;
      padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 1rem;
      transition: all 0.3s ease;
    `;
    switcher.textContent = this.lang === 'ar' ? 'EN' : 'AR';
    document.body.appendChild(switcher);
  }

  applyTranslation() {
    const t = this.translations[this.lang];
    if (!t) return;

    // تحديث النصوص
    if (document.querySelector('#userInfo h3:nth-of-type(1)')) {
      document.querySelector('#userInfo h3:nth-of-type(1)').textContent = t.welcome_title;
    }
    if (document.querySelector('#userInfo h3:nth-of-type(2)')) {
      document.querySelector('#userInfo h3:nth-of-type(2)').textContent = t.user_info_title;
    }
    if (document.querySelector('#userInfo p')) {
      document.querySelector('#userInfo p').textContent = t.user_info_desc;
    }
    if (document.querySelector('#age')) {
      document.querySelector('#age').previousElementSibling.textContent = t.age_label;
    }
    if (document.querySelector('#gender')) {
      document.querySelector('#gender').previousElementSibling.textContent = t.gender_label;
    }
    if (document.querySelector('#submitUserInfo')) {
      document.querySelector('#submitUserInfo').textContent = t.submit_user_info;
    }
    if (document.querySelector('#intro h1')) {
      document.querySelector('#intro h1').textContent = t.intro_title;
    }
    if (document.querySelector('#intro h2')) {
      document.querySelector('#intro h2').textContent = t.intro_subtitle;
    }
    if (document.querySelector('#intro .divider + p')) {
      document.querySelector('#intro .divider + p').textContent = t.intro_desc;
    }
    if (document.querySelectorAll('#intro p')[0]) {
      document.querySelectorAll('#intro p')[0].textContent = t.intro_p1;
    }
    if (document.querySelectorAll('#intro p')[1]) {
      document.querySelectorAll('#intro p')[1].textContent = t.intro_p2;
    }
    if (document.querySelector('#startBtn')) {
      document.querySelector('#startBtn').textContent = t.start_btn;
    }
    if (document.querySelector('#nextBtn')) {
      document.querySelector('#nextBtn').textContent = t.next_btn;
    }
    if (document.querySelector('#restartBtn')) {
      document.querySelector('#restartBtn').textContent = t.restart_btn;
    }
    if (document.querySelector('footer p:nth-of-type(1)')) {
      document.querySelector('footer p:nth-of-type(1)').textContent = t.footer1;
    }
    if (document.querySelector('footer p:nth-of-type(2)')) {
      document.querySelector('footer p:nth-of-type(2)').textContent = t.footer2;
    }

    // تحديث زر اللغة
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.textContent = t.lang_switch;
    }

    // تغيير اتجاه الصفحة
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.lang;
  }

  bindEvents() {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.onclick = () => {
        this.lang = this.lang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', this.lang);
        this.applyTranslation();
        // تحديث اتجاه الصفحة
        document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.lang;
      };
    }
  }
}

// تفعيل النظام
document.addEventListener('DOMContentLoaded', () => {
  window.Lang = new LanguageManager();
  window.Lang.init();
});
