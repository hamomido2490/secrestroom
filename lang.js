// lang.js - نظام الترجمة والدوال المساعدة للغة

export const translations = {
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
    next_btn: 'السؤال التالي',
    restart_btn: 'أعد الرحلة',
    footer1: '© 2025 غرفة الأسرار | Chamber of Secrets',
    footer2: 'تم التصميم والتحليل النفسي والتطوير من قبل: Mohammed Tarek',
    dob_label: 'تاريخ الميلاد:',
    zodiac_title: 'بناءً على برجك',
    prediction_title: 'تنبؤات برجك الأسبوعية',
    alert_missing_fields: "الرجاء اختيار العمر، الجنس، وتاريخ الميلاد",
    alert_no_answer: "الرجاء اختيار إجابة",
    alert_no_connection: "لا يوجد اتصال بالإنترنت",
    alert_reload: "أعد المحاولة",
    progress: "السؤال",
    share_btn: "مشاركة النتيجة",
    copy_btn: "نسخ النتيجة"
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
    next_btn: 'Next Question',
    restart_btn: 'Restart the Journey',
    footer1: '© 2025 Chamber of Secrets | غرفة الأسرار',
    footer2: 'Designed, analyzed, and developed by: Mohammed Tarek',
    dob_label: 'Date of Birth:',
    zodiac_title: 'Based on your zodiac sign',
    prediction_title: 'Your Weekly Horoscope',
    alert_missing_fields: "Please select age, gender, and date of birth",
    alert_no_answer: "Please select an answer",
    alert_no_connection: "No internet connection",
    alert_reload: "Retry",
    progress: "Question",
    share_btn: "Share Result",
    copy_btn: "Copy Result"
  }
};

export function getLang() {
  const saved = localStorage.getItem('lang');
  if (saved === 'ar' || saved === 'en') return saved;
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('ar') ? 'ar' : 'en';
}

export function setLang(newLang) {
  localStorage.setItem('lang', newLang);
}