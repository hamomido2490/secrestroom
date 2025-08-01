export function loadAd(adContainer) {
  if (!adContainer) return;
  adContainer.innerHTML = '<div style="padding: 15px; background: #232e4a; border-radius: 8px; color: #94a3b8;">جاري تحميل الإعلان...</div>';
  const roll = Math.random();
  let adCode = "";
  if (roll < 0.45) {
    adCode = "";
  } else if (roll < 0.70) {
    adCode = "";
  } else if (roll < 0.90) {
    adCode = "";
  } else {
    adCode = "";
  }
  if (!adCode || adCode.trim() === "") {
    adContainer.innerHTML = '<div style="color: #94a3b8; font-size: 0.98em;">إعلان: شارك الموقع مع أصدقائك!</div>';
  } else {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = adCode;
    adContainer.innerHTML = '';
    adContainer.appendChild(tempDiv);
  }
}
