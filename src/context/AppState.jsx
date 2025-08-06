import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { dataReducer } from '../utils/reducers';

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const initialState = {
    lang: 'ar',
    page: 'userInfo',
    userData: { gender: '', dob: '', zodiac: '' },
    userAnswers: [],
    currentQ: 0,
    resultData: null,
    historyIndex: null
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem('chamberOfSecrets_state');
    if (saved) dispatch({ type: 'RESTORE', payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem('chamberOfSecrets_state', JSON.stringify(state));
  }, [state]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);