window.state = {
  currentQ: 0,
  userAnswers: [],
  userData: { gender: '', dob: '' },
  lang: 'ar',
  page: 'userInfo',
  resultText: '',
  resultData: null,
  historyIndex: null
};

function saveState() {
  try {
    localStorage.setItem('chamberOfSecrets_state', JSON.stringify(state));
  } catch (e) {
    console.error('فشل في حفظ الحالة');
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem('chamberOfSecrets_state');
    if (saved) Object.assign(state, JSON.parse(saved));
  } catch (e) {
    console.error('فشل في تحميل الحالة');
  }
}