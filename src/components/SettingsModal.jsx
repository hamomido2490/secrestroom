import React, { useEffect } from 'react';
import { useAppState } from '../context/AppState';

/**
 * نافذة إعدادات الإدارة (مخفية افتراضيًا)
 */
export default function SettingsModal() {
  const { state } = useAppState();

  useEffect(() => {
    const settingsOverlay = document.getElementById('settingsOverlay');
    const closeBtn = document.getElementById('closeSettings');
    const loginBtn = document.getElementById('loginBtn');
    const saveBtn = document.getElementById('saveSettings');

    const handleLogin = () => {
      const pass = document.getElementById('adminPassword');
      const correctHash = "2097122383"; // simpleHash("Farida")
      if (!pass || !pass.value) return;
      const hashedPass = require('../utils/helpers').simpleHash(pass.value);
      if (hashedPass === correctHash || pass.value === "Farida") {
        document.getElementById('passwordSection').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        require('./AdContainer').loadAdSettings();
        require('../utils/helpers').showToast('تم تسجيل الدخول بنجاح');
      } else {
        require('../utils/helpers').showToast('كلمة المرور خاطئة');
      }
    };

    const handleSave = () => {
      const settings = {
        top: document.getElementById('topAdToggle')?.classList.contains('checked') || false,
        side: document.getElementById('sideAdToggle')?.classList.contains('checked') || false,
        bottom: document.getElementById('bottomAdToggle')?.classList.contains('checked') || false,
        topCode: document.getElementById('topAdCode')?.value || '',
        sideCode: document.getElementById('sideAdCode')?.value || '',
        bottomCode: document.getElementById('bottomAdCode')?.value || ''
      };
      require('../utils/adSystem').saveAdSettings(settings);
      require('../utils/helpers').showToast('تم الحفظ');
    };

    if (loginBtn) loginBtn.addEventListener('click', handleLogin);
    if (saveBtn) saveBtn.addEventListener('click', handleSave);
    if (closeBtn) closeBtn.addEventListener('click', () => {
      if (settingsOverlay) settingsOverlay.style.display = 'none';
    });

    return () => {
      if (loginBtn) loginBtn.removeEventListener('click', handleLogin);
      if (saveBtn) saveBtn.removeEventListener('click', handleSave);
      if (closeBtn) closeBtn.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div id="settingsOverlay" className="settings-overlay">
      <div className="settings-panel">
        <h3 className="text-xl font-bold gradient-text mb-4">لوحة الإدارة</h3>
        <div id="passwordSection">
          <label className="block mb-2">كلمة المرور</label>
          <input type="password" id="adminPassword" className="w-full p-3 bg-slate-700 rounded border border-slate-600" placeholder="أدخل كلمة المرور" />
          <button id="loginBtn" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 mt-2 rounded">دخول</button>
        </div>
        <div id="adminPanel" style={{ display: 'none' }}>
          {/* محتوى لوحة الإدارة */}
        </div>
      </div>
    </div>
  );
}