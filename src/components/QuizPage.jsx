import React from 'react';
import { useAppState } from '../context/AppState';
import { useNavigate } from '../hooks/useNavigate';

export default function QuizPage() {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const t = require('../data/translations')[state.lang];
  const questions = require('../data/questions')[state.lang];
  const q = questions[state.currentQ];

  const selectAnswer = (index) => {
    dispatch({ type: 'SET_ANSWER', payload: index });
  };

  const nextQuestion = () => {
    if (state.userAnswers[state.currentQ] === null) {
      return navigate.showToast(t.alert_no_answer);
    }
    if (state.currentQ < questions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
    } else {
      dispatch({ type: 'SET_PAGE', payload: 'loading' });
      setTimeout(() => {
        const analyze = require('../utils/analysis').analyzePersonality;
        const result = analyze(state.userAnswers, state.lang);
        dispatch({ type: 'SET_RESULT', payload: result });
        dispatch({ type: 'SET_PAGE', payload: 'result' });
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="progress-container">
        <span>{t.progress} {state.currentQ + 1}/{questions.length}</span>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((state.currentQ + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{q.text}</h2>
        <div className="space-y-4">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              className={`option-btn ${state.userAnswers[state.currentQ] === i ? 'selected' : ''}`}
              data-index={i}
            >
              {opt.text}
            </button>
          ))}
        </div>
        <button onClick={nextQuestion} className="btn-primary mt-8 w-full">
          {state.currentQ === questions.length - 1 ? t.final_results_btn : t.next_btn}
        </button>
      </div>
    </div>
  );
}