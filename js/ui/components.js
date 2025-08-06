function setupEventListeners() {
  const app = document.getElementById('app');
  const t = translations[state.lang];

  // معالج صفحة معلومات المستخدم
  if (e.target.id === 'submitUserInfo') {
    const gender = document.getElementById('gender')?.value;
    const dob = document.getElementById('dob')?.value;
    if (!gender || !dob) return showToast(t.alert_missing_fields);
    if (new Date(dob) > new Date()) return showToast(t.alert_invalid_dob);

    const zodiac = calculateZodiac(dob);
    state.userData = { gender, dob, zodiac };
    state.page = 'intro';
    renderPage('intro');
  }

  // معالج زر البدء
  if (e.target.id === 'startBtn') {
    state.page = 'quiz';
    state.currentQ = 0;
    state.userAnswers = Array(questions[state.lang].length).fill(null);
    renderPage('quiz');
  }

  // معالج زر التالي في الاختبار
  if (e.target.id === 'nextBtn') {
    const selected = document.querySelector('.option-btn.selected');
    if (!selected) return showToast(t.alert_no_answer);
    const answerIndex = parseInt(selected.dataset.index);
    state.userAnswers[state.currentQ] = answerIndex;

    if (state.currentQ < questions[state.lang].length - 1) {
      state.currentQ++;
      renderPage('quiz');
    } else {
      renderPage('loading');
      setTimeout(() => showResults(), 1500);
    }
  }

  // معالج خيارات الاختبار
  if (e.target.classList.contains('option-btn')) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
  }

  // معالج زر اللغة
  if (e.target.id === 'langToggle') {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    state.page = state.page || 'userInfo';
    renderPage(state.page);
  }

  // معالج زر الإعدادات
  if (e.target.id === 'settingsBtn') {
    const settingsOverlay = document.getElementById('settingsOverlay');
    if (settingsOverlay) settingsOverlay.style.display = 'flex';
  }

  // معالج زر الإغلاق
  if (e.target.id === 'closeSettings') {
    const settingsOverlay = document.getElementById('settingsOverlay');
    if (settingsOverlay) settingsOverlay.style.display = 'none';
  }

  // معالج تسجيل الدخول
  if (e.target.id === 'loginBtn') {
    const pass = document.getElementById('adminPassword');
    const correctHash = "1087939788"; // simpleHash("Farida")
    if (pass && (simpleHash(pass.value) === correctHash || pass.value === "Farida")) {
      const passwordSection = document.getElementById('passwordSection');
      const adminPanel = document.getElementById('adminPanel');
      if (passwordSection) passwordSection.style.display = 'none';
      if (adminPanel) {
        adminPanel.style.display = 'block';
        loadAdSettings();
      }
      showToast('تم تسجيل الدخول بنجاح');
    } else {
      showToast('كلمة المرور خاطئة، يرجى المحاولة مرة أخرى');
    }
  }

  // معالج حفظ الإعدادات
  if (e.target.id === 'saveSettings') {
    const settings = {
      top: document.getElementById('topAdToggle')?.classList.contains('checked') || false,
      side: document.getElementById('sideAdToggle')?.classList.contains('checked') || false,
      bottom: document.getElementById('bottomAdToggle')?.classList.contains('checked') || false,
      topCode: document.getElementById('topAdCode')?.value.trim() || '',
      sideCode: document.getElementById('sideAdCode')?.value.trim() || '',
      bottomCode: document.getElementById('bottomAdCode')?.value.trim() || ''
    };
    saveAdSettings(settings);
    showToast('تم حفظ الإعدادات بنجاح');
  }
}

// ===== تحميل إعدادات الإعلانات =====
function loadAdSettings() {
  try {
    const settings = getAdSettings();
    const topAdCode = document.getElementById('topAdCode');
    const sideAdCode = document.getElementById('sideAdCode');
    const bottomAdCode = document.getElementById('bottomAdCode');
    const topAdToggle = document.getElementById('topAdToggle');
    const sideAdToggle = document.getElementById('sideAdToggle');
    const bottomAdToggle = document.getElementById('bottomAdToggle');

    if (topAdCode) topAdCode.value = settings.topCode;
    if (sideAdCode) sideAdCode.value = settings.sideCode;
    if (bottomAdCode) bottomAdCode.value = settings.bottomCode;

    if (topAdToggle) topAdToggle.classList.toggle('checked', settings.top);
    if (sideAdToggle) sideAdToggle.classList.toggle('checked', settings.side);
    if (bottomAdToggle) bottomAdToggle.classList.toggle('checked', settings.bottom);

    updateAdPreview('top', settings.topCode);
    updateAdPreview('side', settings.sideCode);
    updateAdPreview('bottom', settings.bottomCode);
    updateAdStatus();
  } catch (error) {
    console.error('Error loading ad settings:', error);
  }
}

// ===== تحديث حالة الإعلانات =====
function updateAdStatus() {
  const settings = getAdSettings();
  const topStatus = document.getElementById('topStatus');
  const sideStatus = document.getElementById('sideStatus');
  const bottomStatus = document.getElementById('bottomStatus');

  if (topStatus) {
    topStatus.textContent = settings.top ? 'مفعل' : 'معطل';
    topStatus.className = settings.top ? 'text-lg font-bold text-green-400' : 'text-lg font-bold text-red-400';
  }
  if (sideStatus) {
    sideStatus.textContent = settings.side ? 'مفعل' : 'معطل';
    sideStatus.className = settings.side ? 'text-lg font-bold text-green-400' : 'text-lg font-bold text-red-400';
  }
  if (bottomStatus) {
    bottomStatus.textContent = settings.bottom ? 'مفعل' : 'معطل';
    bottomStatus.className = settings.bottom ? 'text-lg font-bold text-green-400' : 'text-lg font-bold text-red-400';
  }
}

// ===== تحديث عرض الإعلانات =====
function updateAdPreview(position, code) {
  const preview = document.getElementById(`${position}AdPreview`);
  if (preview) {
    if (code.trim()) {
      preview.innerHTML = '<div class="bg-slate-800 p-2 text-xs text-center">عرض معاينة الإعلان</div>';
    } else {
      preview.innerHTML = '<div class="bg-slate-700 p-2 text-xs text-center text-gray-400">لا يوجد كود إعلان</div>';
    }
  }
}