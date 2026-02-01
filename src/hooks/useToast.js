import { useAppContext } from '../context/AppContext';

/**
 * 🪝 useToast Hook
 * 
 * Convenience hook to access toast functions directly.
 */
export const useToast = () => {
  const { showToast, removeToast } = useAppContext();
  
  const success = (msg) => showToast(msg, 'success');
  const error = (msg) => showToast(msg, 'error');
  const info = (msg) => showToast(msg, 'info');
  const warning = (msg) => showToast(msg, 'warning');

  return {
    show: showToast,
    remove: removeToast,
    success,
    error,
    info,
    warning
  };
};

export default useToast;
