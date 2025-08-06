import React, { useEffect } from 'react';

/**
 * قسم تقييم المستخدم للتحليل
 */
export default function FeedbackSection({ type }) {
  const t = require('../data/translations')[window.state.lang];

  useEffect(() => {
    const container = document.getElementById(`${type}FeedbackStars`);
    if (!container) return;

    // تهيئة النجوم
    container.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('i');
      star.className = 'far fa-star';
      star.dataset.rating = i;
      star.addEventListener('click', () => {
        container.querySelectorAll('.fa-star').forEach(s => s.classList.remove('active'));
        star.classList.add('active');
        star.previousSiblings().forEach(s => s.classList.add('active'));
      });
      container.appendChild(star);
    }

    // عرض التعليقات
    require('../utils/feedback').renderSharedFeedback(`${type}Feedback`, type);
  }, [type]);

  const handleSubmit = () => {
    const rating = document.querySelectorAll(`#${type}FeedbackStars .fa-star.active`).length;
    const comment = document.getElementById(`${type}Comment`)?.value.trim();
    if (rating > 0) {
      require('../utils/feedback').saveFeedback(type, rating, comment);
      require('../utils/helpers').showToast(t.submit_feedback);
      document.getElementById(`${type}Comment`).value = '';
    }
  };

  return (
    <div className="mt-10 pt-6 border-t border-gray-700 feedback-section">
      <h3 className="text-xl font-bold mb-4">{type === 'site' ? t.rate_site : t.rate_analysis}</h3>
      <div id={`${type}FeedbackStars`} className="feedback-stars"></div>
      <textarea
        id={`${type}Comment`}
        className="w-full p-3 bg-slate-700 rounded border border-slate-600 mt-2"
        placeholder={t.write_comment}
        rows="2"
      ></textarea>
      <button
        id={`submit${type === 'site' ? 'Site' : 'Analysis'}Feedback`}
        className="btn-primary mt-3"
        onClick={handleSubmit}
      >
        {t.submit_feedback}
      </button>
      <div id={`${type}Feedback`} className="mt-4"></div>
    </div>
  );
}