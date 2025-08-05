import { useState, useCallback } from 'react';
import { analyzePersonality } from '../utils/helpers';
import { PAGES } from '../utils/constants';

export function usePersonalityAnalysis(questions, translations) {
  const [state, setState] = useState({
    currentQ: 0,
    userAnswers: [],
    userData: { gender: '', dob: '' },
    lang: 'ar',
    page: PAGES.USER_INFO,
    resultText: '',
    resultData: null,
    historyIndex: null
  });

  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const startQuiz = useCallback(() => {
    updateState({
      currentQ: 0,
      userAnswers: Array(questions[state.lang].length).fill(null),
      page: PAGES.QUIZ
    });
  }, [questions, state.lang, updateState]);

  const selectAnswer = useCallback((index) => {
    const newAnswers = [...state.userAnswers];
    newAnswers[state.currentQ] = index;
    updateState({ userAnswers: newAnswers });
  }, [state.currentQ, state.userAnswers, updateState]);

  const nextQuestion = useCallback(() => {
    if (state.currentQ < questions[state.lang].length - 1) {
      updateState({ currentQ: state.currentQ + 1 });
    } else {
      updateState({ page: PAGES.LOADING });
      setTimeout(() => {
        const { scores, primary } = analyzePersonality(state.userAnswers, questions, state.lang);
        updateState({ 
          page: PAGES.RESULT, 
          resultData: { scores, primary } 
        });
      }, 1500);
    }
  }, [questions, state, updateState]);

  const restart = useCallback(() => {
    updateState({
      page: PAGES.USER_INFO,
      userData: { gender: '', dob: '' },
      currentQ: 0,
      userAnswers: [],
      resultData: null
    });
  }, [updateState]);

  const changeLanguage = useCallback(() => {
    updateState({ lang: state.lang === 'ar' ? 'en' : 'ar' });
  }, [state.lang, updateState]);

  return {
    state,
    updateState,
    startQuiz,
    selectAnswer,
    nextQuestion,
    restart,
    changeLanguage
  };
}
