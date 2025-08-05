// تجزئة كلمة المرور
export function simpleHash(str) {
  try {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString();
  } catch (error) {
    console.error('Error hashing password:', error);
    return '0';
  }
}

// حساب العمر من تاريخ الميلاد
export function calculateAge(birthDate) {
  try {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  } catch (error) {
    console.error('Error calculating age:', error);
    return 0;
  }
}

// تحليل الشخصية
export function analyzePersonality(userAnswers, questions, lang) {
  try {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    
    userAnswers.forEach((answerIndex, index) => {
      const q = questions[lang] && questions[lang][index];
      if (q && q.options && q.options[answerIndex]) {
        const trait = q.options[answerIndex].trait;
        const score = q.options[answerIndex].score;
        if (trait && score && scores[trait] !== undefined) {
          scores[trait] += score;
        }
      }
    });
    
    const primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    return { scores, primary };
  } catch (error) {
    console.error('Error analyzing personality:', error);
    return { scores: { D: 0, I: 0, S: 0, C: 0 }, primary: 'D' };
  }
}

// تنسيق التاريخ
export function formatDate(date, lang) {
  return new Date(date).toLocaleDateString(
    lang === 'ar' ? 'ar-SA' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );
}

// نسخ النص إلى الحافظة
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return false;
  }
}

// مشاركة المحتوى
export async function shareContent(title, text, url) {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return true;
    } else {
      await copyToClipboard(`${text}\n${url}`);
      return false;
    }
  } catch (error) {
    console.error('Error sharing content:', error);
    return false;
  }
}
