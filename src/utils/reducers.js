export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_USER_DATA':
      return { ...state, userData: action.payload };
    case 'SET_ANSWER':
      const newAnswers = [...state.userAnswers];
      newAnswers[state.currentQ] = action.payload;
      return { ...state, userAnswers: newAnswers };
    case 'NEXT_QUESTION':
      return { ...state, currentQ: state.currentQ + 1 };
    case 'SET_RESULT':
      return { ...state, resultData: action.payload };
    case 'RESTORE':
      return { ...action.payload };
    case 'RESET':
      return {
        ...state,
        page: 'userInfo',
        userData: { gender: '', dob: '', zodiac: '' },
        userAnswers: [],
        currentQ: 0,
        resultData: null
      };
    default:
      return state;
  }
};