// main.js - تم التحديث والتحسين
import { showToast } from './toast.js';
import { translations, getLang, setLang } from './lang.js';
import { getQuestions } from './questions.js';
import { getZodiacSign, getHoroscopePredictions } from './zodiac.js';
import { generatePersonalityAnalysis } from './analysis.js';
import { loadAd } from './ads.js';
import { calculateAge, showAlert, copyToClipboard } from './utils.js';

let state = {
  lang: getLang(),
  page: 'userInfo',
  userData: { age: '', gender: '', dob: '' },
  currentQ: 0,
  userAnswers: []
};

// محاولة تحميل الحالة السابقة
try {
  const saved = localStorage?.getItem('quizState');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed };
  }
} catch (e) {
  console.warn('⚠️ فشل تحميل الحالة المحفوظة.');
}

// تحديث الحالة
function setState(newState, shouldRender = true) {
  state = { ...state, ...newState };
  localStorage?.setItem('quizState', JSON.stringify(state));
  if (shouldRender) render();
}

// تبديل اللغة
function switchLang() {
  const newLang = state.lang === 'ar' ? 'en' : 'ar';
  setLang(newLang);
  setState({ lang: newLang });
}

// التحقق من صحة التاريخ
function isValidDate(dateString) {
  const date = new Date(dateString);
  return date <= new Date() && !isNaN(date.getTime());
}

// واجهة العرض
function render() {
  const t = translations[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.direction = document.documentElement.dir;

  let html = '';

  // زر تغيير اللغة
  html += `<button id="langToggle">${state.lang === 'ar' ? 'EN' : 'AR'}</button>`;

  if (state.page === 'userInfo') {
    html += renderUserInfo(t);
  } else if (state.page === 'intro') {
    html += renderIntro(t);
  } else if (state.page === 'quiz') {
    html += renderQuiz(t);
  } else if (state.page === 'result') {
    html += renderResult(t);
  }

  html += `<footer><p>${t.footer1}</p><p>${t.footer2}</p></footer>`;
  document.getElementById('app').innerHTML = html;
  setupEventListeners();
}

function renderUserInfo(t) {
  return `
    <section style="display: flex; flex-direction: row; align-items: flex-start; gap: 32px;">
      <div style="flex: 0.6; display: flex; flex-direction: column; align-items: center;">
        <div id="ageCard" style="background: linear-gradient(135deg, #fbbf24, #d97706), url('https://images.unsplash.com/photo-1509062522240-38782236d0a8?auto=format&fit=crop&w=600&q=80'); background-size: cover; background-position: center; color: white; border-radius: 20px; padding: 24px 16px; text-align: center; width: 140px; box-shadow: 0 4px 15px rgba(251, 191, 36, 0.2); font-family: 'Segoe UI', sans-serif; backdrop-filter: blur(4px); border: 2px solid rgba(255, 255, 255, 0.2);">
          <div style="font-size: 1.1em; font-weight: 600; margin-bottom: 8px;">${t.age_label}</div>
          <div id="calculatedAge" style="font-size: 3.2em; font-weight: bold; line-height: 1; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${state.userData.age || '-'}</div>
          <div style="font-size: 0.95em; margin-top: 4px; opacity: 0.9;">${state.lang === 'ar' ? 'سنة' : 'years'}</div>
        </div>
      </div>

      <div style="flex: 1;">
        <h3>${t.welcome_title}</h3>
        <h3>${t.user_info_title}</h3>
        <p>${t.user_info_desc}</p>
        <div class="form-group">
          <label>${t.gender_label}</label>
          <select id="gender" required style="font-size: 1em; padding: 12px; border-radius: 12px; border: 1.5px solid #3b82f6; background: #1e293b; color: white; width: 100%;">
            <option value="">---</option>
            <option value="${state.lang === 'ar' ? 'ذكر' : 'Male'}" ${state.userData.gender === (state.lang === 'ar' ? 'ذكر' : 'Male') ? 'selected' : ''}>${state.lang === 'ar' ? 'ذكر' : 'Male'}</option>
            <option value="${state.lang === 'ar' ? 'أنثى' : 'Female'}" ${state.userData.gender === (state.lang === 'ar' ? 'أنثى' : 'Female') ? 'selected' : ''}>${state.lang === 'ar' ? 'أنثى' : 'Female'}</option>
            <option value="other" ${state.userData.gender === 'other' ? 'selected' : ''}>${state.lang === 'ar' ? 'آخر' : 'Other'}</option>
          </select>
        </div>

        <div class="form-group">
          <label>${t.dob_label}</label>
          <input type="date" id="dob" value="${state.userData.dob || ''}" required style="font-size: 1em; padding: 12px; border-radius: 12px; border: 1.5px solid #3b82f6; background: #1e293b; color: white; width: 100%;">
        </div>

        <div class="btn-row"><button class="main-btn" id="submitUserInfo">${t.submit_user_info}</button></div>
      </div>
    </section>
  `;
}

function renderIntro(t) {
  return `
    <section>
      <h1>${t.intro_title}</h1>
      <h2>${t.intro_subtitle}</h2>
      <div class="divider"></div>
      <p>${t.intro_desc}</p>
      <p>${t.intro_p1}</p>
      <p>${t.intro_p2}</p>
      <div class="btn-row"><button class="main-btn" id="startBtn">${t.start_btn}</button></div>
    </section>
  `;
}

function renderQuiz(t) {
  const questions = getQuestions(state.lang);
  const q = questions[state.currentQ];
  const progress = Math.floor((state.currentQ) / questions.length * 100);

  return `
    <div class="progress-bar" style="width:${progress}%;"></div>
    <div style="margin-bottom: 8px; color:#fbbf24;">${t.progress} ${state.currentQ + 1} / ${questions.length}</div>
    <section>
      <div id="question"><h3>${state.currentQ + 1}. ${q.text}</h3></div>
      <div id="options">
        ${q.options.map((opt, idx) =>
          `<button class="option-btn${state.userAnswers[state.currentQ] === idx ? " selected" : ""}" data-opt="${idx}">${opt.text}</button>`
        ).join('')}
      </div>
      <div class="btn-row">
        <button id="nextBtn" class="main-btn">${state.currentQ === questions.length - 1 ? t.restart_btn : t.next_btn}</button>
      </div>
    </section>
  `;
}

function renderResult(t) {
  const analysis = generatePersonalityAnalysis(state.userAnswers, state.userData);
  return `
    <section>
      <h2>${t.welcome_title}</h2>
      <div id="analysis">${analysis}</div>
      <div class="btn-row">
        <button id="shareBtn">${t.share_btn}</button>
        <button id="copyBtn">${t.copy_btn}</button>
      </div>
      <div id="monetag-inpage" style="margin-bottom: 24px;"></div>
      <div class="btn-row">
        <button id="zodiacBtn">${t.zodiac_title}</button>
        <button id="restartBtn">${t.restart_btn}</button>
      </div>
      <div id="zodiacResult" style="display:none; margin-top:20px;"></div>
    </section>
  `;
}

function setupEventListeners() {
  const app = document.getElementById('app');
  app.removeEventListener('click', handleAppClick);
  app.addEventListener('click', handleAppClick);

  document.getElementById('dob')?.addEventListener('input', function () {
    const val = this.value;
    if (val && isValidDate(val)) {
      const age = calculateAge(val);
      document.getElementById('calculatedAge').textContent = age;
      setState({ userData: { ...state.userData, dob: val, age: age.toString() } }, false);
    } else {
      document.getElementById('calculatedAge').textContent = '-';
      setState({ userData: { ...state.userData, dob: '', age: '' } }, false);
      if (val) showAlert(translations[state.lang].alert_invalid_dob);
    }
  });

  document.getElementById('gender')?.addEventListener('change', (e) => {
    setState({ userData: { ...state.userData, gender: e.target.value } }, false);
  });
}

function handleAppClick(e) {
  const t = translations[state.lang];

  switch (e.target.id) {
    case 'langToggle': return switchLang();
    case 'submitUserInfo': {
      const { age, gender, dob } = state.userData;
      if (!age || !gender || !dob) return showAlert(t.alert_missing_fields);
      return setState({ page: 'intro' });
    }
    case 'startBtn': return setState({ page: 'quiz', currentQ: 0, userAnswers: [] });
    case 'nextBtn': {
      const questions = getQuestions(state.lang);
      if (state.userAnswers[state.currentQ] === undefined) return showAlert(t.alert_no_answer);
      if (state.currentQ < questions.length - 1) return setState({ currentQ: state.currentQ + 1 });
      setTimeout(() => loadAd(document.getElementById('monetag-inpage')), 100);
      return setState({ page: 'result' });
    }
    case 'restartBtn': {
      localStorage?.removeItem('quizState');
      return setState({
        page: 'userInfo',
        userData: { age: '', gender: '', dob: '' },
        userAnswers: [],
        currentQ: 0
      });
    }
    case 'shareBtn':
    case 'copyBtn': {
      const text = generatePersonalityAnalysis(state.userAnswers, state.userData);
      if (e.target.id === 'copyBtn' || !navigator.share) {
        copyToClipboard(text + '\n\n' + window.location.href);
        return showAlert(state.lang === 'ar' ? "تم نسخ النتيجة!" : "Result copied!");
      }
      return navigator.share({ title: t.welcome_title, text, url: window.location.href }).catch(() => {
        copyToClipboard(text + '\n\n' + window.location.href);
        showAlert(state.lang === 'ar' ? "تم نسخ النتيجة!" : "Result copied!");
      });
    }
    case 'zodiacBtn': {
      const zodiacSign = getZodiacSign(state.userData.dob);
      const pred = getHoroscopePredictions(zodiacSign, state.lang);
      const zodiacResult = document.getElementById('zodiacResult');
      e.target.disabled = true;
      e.target.textContent = '✨ ' + (state.lang === 'ar' ? "تم فتح البوابة" : "Gate opened");
      zodiacResult.innerHTML = `
        <h4>${t.zodiac_intro} ${zodiacSign}</h4>
        <div style="padding:10px; background:#222c40; border-radius:12px;">
          <p><strong>${t.zodiac_daily}</strong> ${pred.daily}</p>
          <p><strong>${t.zodiac_weekly}</strong> ${pred.weekly}</p>
          <p><strong>${t.zodiac_yearly}</strong> ${pred.yearly}</p>
        </div>
        <p><em>${t.zodiac_hint}</em></p>
      `;
      zodiacResult.style.display = 'block';
      break;
    }
  }

  // اختيار الإجابة
  if (e.target.classList.contains('option-btn')) {
    const idx = parseInt(e.target.getAttribute('data-opt'));
    const arr = [...state.userAnswers];
    arr[state.currentQ] = idx;
    setState({ userAnswers: arr });
  }
}

document.addEventListener('DOMContentLoaded', render);
