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
        intro_desc: 'اكتشف شخصيتك الحقيقية من خلال 6 أسئلة تفتح لك أبواب الذات',
        intro_p1: 'أنت على وشك دخول غرفة لا تُظهر ما بداخلها إلا للصادقين مع أنفسهم.',
        intro_p2: 'أجب بصدق... وسترى ما لم تره من قبل.',
        start_btn: 'ادخل إلى الغرفة',
        question_prefix: 'سؤال',
        next_btn: 'السؤال التالي',
        restart_btn: 'أعد الرحلة',
        footer1: '© 2025 غرفة الأسرار | Chamber of Secrets',
        footer2: 'تم التصميم والتحليل النفسي والتطوير من قبل: Mohammed Tarek',
        lang_switch: 'EN'
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
        intro_desc: 'Discover your true personality through 6 questions that open the doors to your inner self',
        intro_p1: 'You are about to enter a room that reveals itself only to those honest with themselves.',
        intro_p2: 'Answer honestly... and you will see what you have never seen before.',
        start_btn: 'Enter the Chamber',
        question_prefix: 'Question',
        next_btn: 'Next Question',
        restart_btn: 'Restart the Journey',
        footer1: '© 2025 Chamber of Secrets | غرفة الأسرار',
        footer2: 'Designed, analyzed, and developed by: Mohammed Tarek',
        lang_switch: 'AR'
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
