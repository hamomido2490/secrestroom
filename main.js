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

function setState(newState) {
  state = { ...state, ...newState };
  render();
}

function switchLang() {
  const newLang = state.lang === 'ar' ? 'en' : 'ar';
  setLang(newLang);
  setState({ lang: newLang });
}

function render() {
  const t = translations[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.direction = state.lang === 'ar' ? 'rtl' : 'ltr';
  let html = '';

  html += `<button id="langToggle">${state.lang === 'ar' ? 'EN' : 'AR'}</button>`;

  if (state.page === 'userInfo') {
    html += `
      <section>
        <h3>${t.welcome_title}</h3>
        <h3>${t.user_info_title}</h3>
        <p>${t.user_info_desc}</p>
        <div class="form-group">
          <label>${t.age_label}</label>
          <select id="age"><option value="">---</option>
            <option value="13-18">13-18</option>
            <option value="19-25">19-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-60">46-60</option>
            <option value="60+">60+</option>
          </select>
        </div>
        <div class="form-group">
          <label>${t.gender_label}</label>
          <select id="gender"><option value="">---</option>
            <option value="${state.lang === 'ar' ? "ذكر" : "Male"}">${state.lang === 'ar' ? "ذكر" : "Male"}</option>
            <option value="${state.lang === 'ar' ? "أنثى" : "Female"}">${state.lang === 'ar' ? "أنثى" : "Female"}</option>
            <option value="other">${state.lang === 'ar' ? "آخر" : "Other"}</option>
          </select>
        </div>
        <div class="form-group">
          <label>${t.dob_label}</label>
          <input type="date" id="dob">
        </div>
        <div class="form-group">
          <label>${t.age_label}</label>
          <p id="calculatedAge" style="margin: 8px 0; color: #fbbf24; font-weight: 600;">-</p>
        </div>
        <div class="btn-row">
          <button class="main-btn" id="submitUserInfo">${t.submit_user_info}</button>
        </div>
      </section>
    `;
  }

  if (state.page === 'intro') {
    html += `
      <section>
        <h1>${t.intro_title}</h1>
        <h2>${t.intro_subtitle}</h2>
        <div class="divider"></div>
        <p>${t.intro_desc}</p>
        <p>${t.intro_p1}</p>
        <p>${t.intro_p2}</p>
        <div class="btn-row">
          <button class="main-btn" id="startBtn">${t.start_btn}</button>
        </div>
      </section>
    `;
  }

  if (state.page === 'quiz') {
    let q = getQuestions(state.lang)[state.currentQ];
    let progress = Math.floor((state.currentQ) / getQuestions(state.lang).length * 100);
    html += `
      <div class="progress-bar" style="width:${progress}%;"></div>
      <div style="margin-bottom: 8px; color:#fbbf24;">${t.progress} ${state.currentQ + 1} / 20</div>
      <section>
        <div id="question"><h3>${state.currentQ + 1}. ${q.text}</h3></div>
        <div id="options">
          ${q.options.map((opt, idx) =>
            `<button class="option-btn${state.userAnswers[state.currentQ] === idx ? " selected" : ""}" data-opt="${idx}">${opt.text}</button>`
          ).join('')}
        </div>
        <div class="btn-row">
          <button id="nextBtn" class="main-btn">${state.currentQ === getQuestions(state.lang).length - 1 ? t.restart_btn : t.next_btn}</button>
        </div>
      </section>
    `;
  }

  if (state.page === 'result') {
    let analysis = generatePersonalityAnalysis(state.userAnswers, state.userData);
    html += `
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

  html += `<footer><p>${t.footer1}</p><p>${t.footer2}</p></footer>`;
  document.getElementById('app').innerHTML = html;

  document.getElementById('langToggle').onclick = switchLang;

  if (state.page === 'userInfo') {
    const dobInput = document.getElementById('dob');
    dobInput && (dobInput.oninput = function () {
      const val = this.value;
      const age = val ? calculateAge(val) : '-';
      document.getElementById('calculatedAge').textContent = age + (age !== '-' ? (state.lang === 'ar' ? " سنة" : " years") : '');
      state.userData.dob = val;
      state.userData.age = document.getElementById('age').value;
    });
    document.getElementById('age').onchange = e => state.userData.age = e.target.value;
    document.getElementById('gender').onchange = e => state.userData.gender = e.target.value;
    document.getElementById('submitUserInfo').onclick = () => {
      const { age, gender } = state.userData;
      const dob = document.getElementById('dob').value;
      if (!age || !gender || !dob) {
        showAlert(translations[state.lang].alert_missing_fields);
        return;
      }
      setState({ page: 'intro', userData: { ...state.userData, age, gender, dob } });
    };
  }

  if (state.page === 'intro') {
    document.getElementById('startBtn').onclick = () => setState({ page: 'quiz', currentQ: 0, userAnswers: [] });
  }

  if (state.page === 'quiz') {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-opt'));
        const arr = [...state.userAnswers];
        arr[state.currentQ] = idx;
        setState({ userAnswers: arr });
      };
    });
    document.getElementById('nextBtn').onclick = () => {
      if (state.userAnswers[state.currentQ] === undefined) {
        showAlert(translations[state.lang].alert_no_answer);
        return;
      }
      if (state.currentQ < getQuestions(state.lang).length - 1) {
        setState({ currentQ: state.currentQ + 1 });
      } else {
        setTimeout(() => {
          loadAd(document.getElementById('monetag-inpage'));
        }, 100);
        setState({ page: 'result' });
      }
    };
  }

  if (state.page === 'result') {
    document.getElementById('restartBtn').onclick = () =>
      setState({ page: 'userInfo', userData: { age: '', gender: '', dob: '' }, userAnswers: [], currentQ: 0 });

    document.getElementById('shareBtn').onclick = () => {
      const url = window.location.href;
      const text = generatePersonalityAnalysis(state.userAnswers, state.userData) + "\n\n" + url;
      if (navigator.share) {
        navigator.share({ title: translations[state.lang].welcome_title, text, url });
      } else {
        copyToClipboard(text);
        showAlert(state.lang === 'ar' ? "تم نسخ النتيجة!" : "Result copied!");
      }
    };

    document.getElementById('copyBtn').onclick = () => {
      const text = generatePersonalityAnalysis(state.userAnswers, state.userData);
      copyToClipboard(text);
      showAlert(state.lang === 'ar' ? "تم نسخ النتيجة!" : "Result copied!");
    };

    // زر الأبراج
    const zodiacBtn = document.getElementById('zodiacBtn');
    const zodiacResult = document.getElementById('zodiacResult');
    if (zodiacBtn && zodiacResult) {
      zodiacBtn.onclick = () => {
        const zodiacSign = getZodiacSign(state.userData.dob);
        const pred = getHoroscopePredictions(zodiacSign, state.lang);
        zodiacResult.innerHTML = `
          <h4>${t.zodiac_intro} ${zodiacSign}</h4>
          <div style="margin:10px 0; padding:10px; background:#222c40; border-radius:12px;">
            <p><strong>${t.zodiac_daily}</strong> ${pred.daily}</p>
            <p><strong>${t.zodiac_weekly}</strong> ${pred.weekly}</p>
            <p><strong>${t.zodiac_yearly}</strong> ${pred.yearly}</p>
          </div>
          <p><em>${t.zodiac_hint}</em></p>
        `;
        zodiacResult.style.display = 'block';
        zodiacBtn.disabled = true;
        zodiacBtn.textContent = '✨ ' + (state.lang === 'ar' ? "تم فتح البوابة" : "Gate opened");
        zodiacBtn.style.opacity = '0.8';
        zodiacBtn.style.cursor = 'not-allowed';
      };
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});
