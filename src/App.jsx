import React, { useState, useEffect } from 'react';
import { usePersonalityAnalysis } from './hooks/usePersonalityAnalysis';
import { useFeedback } from './hooks/useFeedback';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AdService } from './services/adService';
import { AnalyticsService } from './services/analyticsService';
import { PAGES } from './utils/constants';
import questions from './assets/data/questions';
import translations from './assets/data/translations';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import UserInfo from './components/features/UserInfo';
import Quiz from './components/features/Quiz';
import Result from './components/features/Result';
import History from './components/features/History';
import Settings from './components/ui/Settings';
import Toast from './components/ui/Toast';

function App() {
  const {
    state,
    updateState,
    startQuiz,
    selectAnswer,
    nextQuestion,
    restart,
    changeLanguage
  } = usePersonalityAnalysis(questions, translations);

  const { updateCounters } = useFeedback();
  const [savedResults, setSavedResults] = useLocalStorage('personalityResults', []);
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  // تحديث العدادات عند تحميل الصفحة
  useEffect(() => {
    updateCounters('visitor');
    AnalyticsService.updateCounters();
  }, [updateCounters]);

  // تحديث اتجاه الصفحة واللغة
  useEffect(() => {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  }, [state.lang]);

  // حفظ النتائج عند اكتمال التحليل
  useEffect(() => {
    if (state.page === PAGES.RESULT && state.resultData && !state.resultData.counted) {
      const resultData = {
        ...state.resultData,
        date: new Date().toISOString(),
        userData: { ...state.userData }
      };
      
      const newResults = [...savedResults, resultData];
      setSavedResults(newResults);
      
      updateState({ 
        resultData: { ...state.resultData, counted: true }
      });
    }
  }, [state.page, state.resultData, savedResults, setSavedResults, updateState]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleViewResult = (index) => {
    updateState({ 
      historyIndex: index,
      page: PAGES.HISTORY_RESULT
    });
  };

  const renderPage = () => {
    switch (state.page) {
      case PAGES.USER_INFO:
        return (
          <UserInfo
            state={state}
            updateState={updateState}
            translations={translations}
            onStartQuiz={startQuiz}
          />
        );
      
      case PAGES.INTRO:
        return (
          <div className="text-center">
            <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold gradient-text mb-4">
                {translations[state.lang].intro_title}
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                {translations[state.lang].intro_subtitle}
              </p>
              <p className="text-slate-400 mb-4">
                {translations[state.lang].intro_desc}
              </p>
              <div className="text-right text-slate-300 space-y-2 mb-6">
                <p>• {translations[state.lang].intro_p1}</p>
                <p>• {translations[state.lang].intro_p2}</p>
              </div>
              <button
                onClick={startQuiz}
                className="btn-primary"
              >
                {translations[state.lang].start_btn}
              </button>
            </div>
          </div>
        );
      
      case PAGES.QUIZ:
        return (
          <Quiz
            state={state}
            translations={translations}
            onSelectAnswer={selectAnswer}
            onNextQuestion={nextQuestion}
          />
        );
      
      case PAGES.LOADING:
        return (
          <div className="text-center py-12">
            <div className="loading-spinner mx-auto mb-4"></div>
            <p className="text-slate-300">
              {translations[state.lang].loading_analysis}
            </p>
          </div>
        );
      
      case PAGES.RESULT:
        return (
          <Result
            state={state}
            translations={translations}
            onRestart={restart}
            onHistory={() => updateState({ page: PAGES.HISTORY })}
            onBack={() => updateState({ page: PAGES.INTRO })}
          />
        );
      
      case PAGES.HISTORY:
        return (
          <History
            state={state}
            translations={translations}
            onBack={() => updateState({ page: PAGES.RESULT })}
            onViewResult={handleViewResult}
          />
        );
      
      case PAGES.HISTORY_RESULT:
        const result = savedResults[state.historyIndex];
        if (!result) return null;
        
        return (
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              {translations[state.lang].personality_section}
            </h2>
            <p className="text-slate-300 mb-2">
              {translations[state.lang].analysis_intro}
            </p>
            <p className="text-slate-400 mb-6">
              {new Date(result.date).toLocaleDateString(
                state.lang === 'ar' ? 'ar-SA' : 'en-US',
                { year: 'numeric', month: 'short', day: 'numeric' }
              )}
            </p>
            
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {translations[state.lang][`PERSONALITY_TYPES_${result.primary}`] || result.primary}
              </h3>
            </div>
            
            <div className="chart-container mb-8">
              {/* Chart component would go here */}
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => updateState({ page: PAGES.HISTORY })}
                className="btn-secondary mr-4"
              >
                العودة
              </button>
              <button
                onClick={() => window.print()}
                className="btn-secondary"
              >
                {translations[state.lang].print_btn}
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const { top: adTop, side: adSide, bottom: adBottom } = AdService.renderAds();

  return (
    <>
      {adTop}
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header
          lang={state.lang}
          onLanguageChange={changeLanguage}
          onSettingsClick={() => setShowSettings(true)}
        />
        
        <div id="app">
          {renderPage()}
        </div>
      </div>
      
      {adBottom}
      
      <Footer
        translations={translations}
        lang={state.lang}
      />
      
      {showSettings && (
        <Settings
          onClose={() => setShowSettings(false)}
          translations={translations}
          lang={state.lang}
        />
      )}
      
      {toast.show && (
        <Toast
          message={toast.message}
          onClose={() => setToast({ show: false, message: '' })}
        />
      )}
    </>
  );
}

export default App;
