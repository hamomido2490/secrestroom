import React from 'react';
import { useAppState } from '../context/AppState';
import { useNavigate } from '../hooks/useNavigate';
import ChartWrapper from '../lib/ChartWrapper';

/**
 * صفحة عرض نتيجة سابقة من السجل
 */
export default function HistoryResultPage() {
  const { state } = useAppState();
  const navigate = useNavigate();
  const t = require('../data/translations')[state.lang];
  const results = require('../utils/storage').getSavedResults();
  const result = results[state.historyIndex] || results[0];

  if (!result) {
    return <div className="text-center py-10">{t.no_history}</div>;
  }

  const personalityColors = {
    D: '#ef4444',
    I: '#f59e0b',
    S: '#10b981',
    C: '#3b82f6'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-text">{t.personality_section}</h2>
        <p className="text-gray-300 mb-6">{t.analysis_intro}</p>

        <ChartWrapper data={result.scores} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-right">
            <p><strong>{t.personality_type}:</strong> <span style={{ color: personalityColors[result.primary] }}>{result.primary}</span></p>
            <p><strong>{t.age_label}:</strong> <span>{result.age}</span></p>
            <p><strong>{t.zodiac_sign}:</strong> <span>{result.zodiac}</span></p>
          </div>
          <div className="text-right">
            <p><strong>{t.personality_color}:</strong></p>
            <div className="w-10 h-10 rounded-full mt-2" style={{ backgroundColor: personalityColors[result.primary] }}></div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold mb-2">{t.partner_section}</h3>
          <p><strong>{t.partner_type}:</strong> {result.partnerType}</p>
          <p><strong>{t.similar_personalities}:</strong> {result.similarPersonality}</p>
        </div>

        <div className="mt-8">
          <button onClick={() => navigate.to('history')} className="btn-secondary mr-4">{t.history_btn}</button>
          <button onClick={() => navigate.to('result')} className="btn-primary">{t.restart_btn}</button>
        </div>
      </div>
    </div>
  );
}