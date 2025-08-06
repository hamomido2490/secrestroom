export function saveFeedback(type, rating, comment) {
  try {
    const feedback = {
      type,
      rating,
      comment,
      date: new Date().toISOString()
    };
    const all = JSON.parse(localStorage.getItem('shared_feedback') || '[]');
    all.unshift(feedback);
    localStorage.setItem('shared_feedback', JSON.stringify(all.slice(0, 50)));
  } catch (error) {
    console.error('Error saving feedback:', error);
  }
}

export function getFeedback(type) {
  try {
    const all = JSON.parse(localStorage.getItem('shared_feedback') || '[]');
    return all.filter(f => f.type === type);
  } catch (error) {
    console.error('Error getting feedback:', error);
    return [];
  }
}

export function calculateAverageRating(type) {
  const feedback = getFeedback(type);
  if (feedback.length === 0) return 0;
  const sum = feedback.reduce((acc, f) => acc + f.rating, 0);
  return (sum / feedback.length).toFixed(1);
}

export function renderSharedFeedback(containerId, type, limit = 5) {
  try {
    const container = document.getElementById(containerId);
    if (!container) return;

    const feedback = getFeedback(type);
    if (feedback.length === 0) {
      container.innerHTML = '<p class="text-gray-400 text-center">لا توجد تعليقات بعد</p>';
      return;
    }

    const limitedFeedback = feedback.slice(0, limit);
    const t = window.translations[window.state.lang];
    const feedbackHTML = limitedFeedback.map(item => {
      const date = new Date(item.date).toLocaleDateString(window.state.lang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      });
      const stars = Array(5).fill(0).map((_, i) =>
        `<i class="fas fa-star ${i < item.rating ? 'text-yellow-400' : 'text-gray-600'}"></i>`
      ).join('');
      const comment = item.comment ? `<div class="feedback-comment">${item.comment}</div>` : '';
      return `<div class="feedback-item"><div class="feedback-header"><div class="feedback-rating">${stars}</div><div class="feedback-date">${date}</div></div>${comment}</div>`;
    }).join('');

    container.innerHTML = feedbackHTML;
  } catch (error) {
    console.error('Error rendering shared feedback:', error);
  }
}