import { useAppState } from '../context/AppState';

export const useNavigate = () => {
  const { dispatch } = useAppState();

  return {
    to: (page) => dispatch({ type: 'SET_PAGE', payload: page }),
    showToast: (message) => {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.innerHTML = `<div class="toast">${message}</div>`;
        setTimeout(() => toast.innerHTML = '', 3000);
      }
    }
  };
};