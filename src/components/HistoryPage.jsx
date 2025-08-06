import React from 'react';
import { useAppState } from '../context/AppState';
import { useNavigate } from '../hooks/useNavigate';

/**
 * صفحة عرض سجل النتائج السابقة
 */
export default function HistoryPage() {
  const { state } = useAppState();
  const navigate = useNavigate();
  const t = require('../data/translations')[state.lang];
  const results = require('../utils/storage').getSavedResults();

  const goToResult = (index) => {
    navigate.to('historyResult');
    // سيتم تمرير الفهرس لاحقًا
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-text">{t.history_title}</h2>
        {results.length === 0 ? (
          <p className="text-gray-300 text-center">{t.no_history}</p>
        ) : (
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="history-item" onClick={() => goToResult(index)}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{result.primary} - {result.age} {t.age_label}</p>
                    <p className="text-sm text-gray-400">{new Date(result.date).toLocaleDateString(state.lang)}</p>
                  </div>
                  <span className="zodiac-icon text-2xl">
                    {require('../data/zodiacData').zodiacData[state.lang][result.zodiac]?.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={() => navigate.to('result')} className="btn-secondary mt-6">
          {t.restart_btn}
        </button>
      </div>
    </div>
  );
}