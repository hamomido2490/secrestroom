// ads.js - نظام الإعلانات الذكي (اختياري حسب الشبكة)

export function loadAd(adContainer) {
  if (!adContainer) return;

  adContainer.innerHTML = '<div style="padding: 15px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; font-size: 0.9rem; color: #94a3b8;">جاري تحميل الإعلان...</div>';
  const roll = Math.random();
  let adCode = "";

  if (roll < 0.45) {
    // Monetag
    adCode = ""; // الكود الكامل لـ Monetag
  } else if (roll < 0.70) {
    // Adsterra
    adCode = ""; // الكود الكامل لـ Adsterra
  } else if (roll < 0.90) {
    // RichAds
    adCode = ""; // الكود الكامل لـ RichAds
  } else {
    // HilltopAds
    adCode = ""; // الكود الكامل لـ HilltopAds
  }

  if (!adCode || adCode.trim() === "") {
    adContainer.innerHTML = '<div style="color: #94a3b8; font-size: 0.9rem;">إعلان: شارك الموقع مع أصدقائك!</div>';
  } else {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = adCode;
    adContainer.innerHTML = '';
    adContainer.appendChild(tempDiv);
  }
}