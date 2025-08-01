import { translations, getLang } from './lang.js';

export function generatePersonalityAnalysis(answers, userData) {
  const lang = getLang();
  const t = translations[lang];
  // حساب الألوان حسب DISC
  const colorCount = { red: 0, yellow: 0, green: 0, blue: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    // توزيع اللون بناء على trait
    // هذا التوزيع ثابت كما في النسخة الأصلية
    if (answerIndex === undefined) return;
    if ([0].includes(answerIndex)) colorCount.red++;
    if ([1].includes(answerIndex)) colorCount.yellow++;
    if ([2].includes(answerIndex)) colorCount.green++;
    if ([3].includes(answerIndex)) colorCount.blue++;
  });

  let dominantColor = 'green';
  let max = 0;
  for (const [color, count] of Object.entries(colorCount)) {
    if (count > max) {
      max = count;
      dominantColor = color;
    }
  }

  // استرجاع النصوص من lang.js
  let title = '', desc = '', discClass = '';
  if (dominantColor === 'red') {
    title = t.disc_red_title;
    desc = t.disc_red_desc;
    discClass = 'disc-red';
  } else if (dominantColor === 'yellow') {
    title = t.disc_yellow_title;
    desc = t.disc_yellow_desc;
    discClass = 'disc-yellow';
  } else if (dominantColor === 'green') {
    title = t.disc_green_title;
    desc = t.disc_green_desc;
    discClass = 'disc-green';
  } else {
    title = t.disc_blue_title;
    desc = t.disc_blue_desc;
    discClass = 'disc-blue';
  }

  // العمر
  let ageInsight = "";
  if (userData.age === '13-18') ageInsight = t.disc_age_teen;
  else if (userData.age === '19-25') ageInsight = t.disc_age_youth;
  else if (userData.age === '26-35' || userData.age === '36-45') ageInsight = t.disc_age_adult;
  else if (userData.age === '46-60' || userData.age === '60+') ageInsight = t.disc_age_senior;

  // الجنس
  let genderInsight = "";
  if (userData.gender === (lang === 'ar' ? 'أنثى' : 'Female')) genderInsight = t.disc_gender_female;
  else if (userData.gender === (lang === 'ar' ? 'ذكر' : 'Male')) genderInsight = t.disc_gender_male;
  else genderInsight = t.disc_gender_other;

  // النتيجة النهائية
  return `
  <div class="${discClass}" style="padding:18px; border-radius: 18px;">
    <h3>${title}</h3>
    <p>${desc}</p>
    <hr>
    <div style="margin:8px 0 0 0;">${ageInsight}</div>
    <div style="margin:8px 0 0 0;">${genderInsight}</div>
  </div>
  `;
}
