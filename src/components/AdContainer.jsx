import React, { useEffect } from 'react';

/**
 * مكون إدارة الإعلانات
 */
export function AdContainer({ position }) {
  useEffect(() => {
    const settings = require('../utils/adSystem').getAdSettings();
    const adCode = settings[`${position}Code`];
    const isEnabled = settings[position];

    const adElement = document.getElementById(`ad-${position}`);
    if (adElement) {
      if (isEnabled && adCode.trim()) {
        adElement.innerHTML = adCode;
      } else {
        adElement.innerHTML = '';
      }
    }
  }, [position]);

  return <div id={`ad-${position}`}></div>;
}

/**
 * تحميل إعدادات الإعلانات
 */
export function loadAdSettings() {
  const settings = require('../utils/adSystem').getAdSettings();
  const positions = ['top', 'side', 'bottom'];

  positions.forEach(pos => {
    const toggle = document.getElementById(`${pos}AdToggle`);
    const code = document.getElementById(`${pos}AdCode`);
    if (toggle) toggle.classList.toggle('checked', settings[pos]);
    if (code) code.value = settings[`${pos}Code`];
    updateAdPreview(pos, settings[`${pos}Code`]);
  });

  updateAdStatus();
}

/**
 * تحديث حالة الإعلانات
 */
export function updateAdStatus() {
  const settings = require('../utils/adSystem').getAdSettings();
  const positions = ['top', 'side', 'bottom'];

  positions.forEach(pos => {
    const status = document.getElementById(`${pos}Status`);
    if (status) {
      status.textContent = settings[pos] ? 'مفعل' : 'معطل';
      status.className = settings[pos] ? 'text-lg font-bold text-green-400' : 'text-lg font-bold text-red-400';
    }
  });
}

/**
 * تحديث معاينة الإعلان
 */
export function updateAdPreview(position, code) {
  const preview = document.getElementById(`${position}AdPreview`);
  if (preview) {
    preview.innerHTML = code.trim() ? '<div class="bg-slate-800 p-2 text-xs text-center">معاينة الإعلان</div>' : '<div class="bg-slate-700 p-2 text-xs text-center text-gray-400">لا يوجد كود</div>';
  }
}