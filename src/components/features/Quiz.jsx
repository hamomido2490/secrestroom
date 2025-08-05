import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const Quiz = ({ 
  state, 
  translations, 
  onSelectAnswer, 
  onNextQuestion 
}) => {
  const t = translations[state.lang];
  const questions = state.lang === 'ar' 
    ? require('../../assets/data/questions').questions.ar
    : require('../../assets/data/questions').questions.en;
  
  const q = questions[state.currentQ];
  const progress = ((state.currentQ + 1) / questions.length * 100).toFixed(0);

  return (
    <div>
      <div className="progress-container">
        <div className="flex justify-between">
          <span>{t.progress} {state.currentQ + 1}/{questions.length}</span>
        </div>
        <div className="w-full">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <Card className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{q.text}</h2>
        <div className="space-y-4">
          {q.options.map((opt, idx) => (
            <div
              key={idx}
              className={`option-btn ${state.userAnswers[state.currentQ] === idx ? 'selected' : ''}`}
              data-index={idx}
              onClick={() => onSelectAnswer(idx)}
            >
              {opt.text}
            </div>
          ))}
        </div>
        
        <Button 
          onClick={onNextQuestion}
          disabled={state.userAnswers[state.currentQ] === null}
          className="mt-8"
        >
          {state.currentQ === questions.length - 1
            ? t.final_results_btn 
            : t.next_btn}
        </Button>
      </Card>
    </div>
  );
};

export default Quiz;
