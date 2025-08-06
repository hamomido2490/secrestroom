import React from 'react';
import { AppStateProvider, useAppState } from './context/AppState';
import UserInfoPage from './components/UserInfoPage';
import IntroPage from './components/IntroPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import HistoryPage from './components/HistoryPage';
import HistoryResultPage from './components/HistoryResultPage';
import SettingsModal from './components/SettingsModal';
import Toast from './components/Toast';

function AppContent() {
  const { state } = useAppState();

  const renderPage = () => {
    switch (state.page) {
      case 'userInfo': return <UserInfoPage />;
      case 'intro': return <IntroPage />;
      case 'quiz': return <QuizPage />;
      case 'result': return <ResultPage />;
      case 'history': return <HistoryPage />;
      case 'historyResult': return <HistoryResultPage />;
      default: return <UserInfoPage />;
    }
  };

  return (
    <div className="bg-gradient min-h-screen text-white">
      {renderPage()}
      <SettingsModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <AppContent />
    </AppStateProvider>
  );
}