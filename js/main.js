import './state.js';
import './data/questions.js';
import './data/translations.js';
import './data/zodiac-data.js';
import './data/partner-info.js';
import './utils/analysis.js';
import './utils/zodiac.js';
import './utils/partner.js';
import './utils/storage.js';
import './utils/feedback.js';
import './utils/helpers.js';
import './ui/render.js';
import './ui/components.js';
import './ad-system.js';

// ===== التهيئة =====
document.addEventListener('DOMContentLoaded', () => {
  try {
    loadState();
    renderPage(state.page || 'userInfo');

    // تحديث عداد الزوار
    const visitorsCount = incrementCounter('visitorsCount');
    const analysesCount = getCounter('analysesCount');
    document.getElementById('visitorsCount').textContent = visitorsCount;
    document.getElementById('analysesCount').textContent = analysesCount;

    // تحديث تقييمات الموقع
    document.getElementById('siteRating').textContent = calculateAverageRating('site');
    document.getElementById('analysisRating').textContent = calculateAverageRating('analysis');

    // عرض التعليقات
    renderSharedFeedback('sharedSiteFeedback', 'site');
    renderSharedFeedback('sharedAnalysisFeedback', 'analysis');

  } catch (error) {
    console.error('Error during initialization:', error);
  }
});