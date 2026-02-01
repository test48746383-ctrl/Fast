import React, { createContext, useContext, useState, useCallback } from 'react';

// Create Context
const AppContext = createContext();

/**
 * 🔌 App Context Provider
 * 
 * Manages global application state:
 * - Loading Overlays (blocking)
 * - Toast Notifications
 * - Modals
 * - Global Error Handling
 */
export const AppProvider = ({ children }) => {
  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  // Toast State
  const [toasts, setToasts] = useState([]);

  /**
   * Show a global loading overlay
   */
  const showLoading = useCallback((message = 'Loading...') => {
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  /**
   * Hide the global loading overlay
   */
  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  /**
   * Trigger a toast notification
   * @param {string} message - Text to display
   * @param {'success'|'error'|'info'|'warning'} type - Visual style
   * @param {number} duration - ms to stay visible
   */
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  /**
   * Remove a specific toast
   */
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const value = {
    isLoading,
    loadingMessage,
    showLoading,
    hideLoading,
    toasts,
    showToast,
    removeToast
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      
      {/* Global Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-modal flex flex-col items-center justify-center bg-cosmic-900/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-20 h-20 mb-4">
            <div className="absolute inset-0 border-4 border-t-celestial-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-t-transparent border-r-mystic-400 border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
          </div>
          <p className="text-white font-medium tracking-wider animate-pulse">{loadingMessage}</p>
        </div>
      )}

      {/* Toast Container */}
      <div className="fixed bottom-safe-bottom left-0 right-0 p-4 z-toast pointer-events-none flex flex-col items-center gap-2">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className={`
              pointer-events-auto px-6 py-3 rounded-xl shadow-lg backdrop-blur-md border border-white/10
              animate-slide-in-up text-sm font-medium text-white
              ${toast.type === 'error' ? 'bg-red-500/80' : 
                toast.type === 'success' ? 'bg-green-500/80' : 
                'bg-gray-800/80'}
            `}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
