import React from 'react';
import { useAppState } from '../context/AppState';
import { useNavigate } from '../hooks/useNavigate';

export default function IntroPage() {
  const { state } = useAppState();
  const navigate = useNavigate();
  const t = require('../data/translations')[state.lang];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold gradient-text mb-6">{t.intro_title}</h2>
      <p className="text-gray-300 mb-6">{t.intro_subtitle}</p>
      <div className="glass-card max-w-lg mx-auto p-6">
        <p className="text-gray-300 mb-4">{t.intro_desc}</p>
        <p className="text-gray-400 mb-6">{t.intro_p1}</p>
        <p className="text-gray-400 mb-6">{t.intro_p2}</p>
        <button onClick={() => navigate.to('quiz')} className="btn-primary w-full">
          {t.start_btn}
        </button>
      </div>
    </div>
  );
}