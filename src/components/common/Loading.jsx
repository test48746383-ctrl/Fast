import React from 'react';

/**
 * ⏳ Loading Component
 * 
 * Used for sections/components loading state (not full screen overlay).
 */
const Loading = ({ fullScreen = false, text = "Loading..." }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cosmic-900/80 backdrop-blur-md">
        <div className="w-16 h-16 border-4 border-t-celestial-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white/80 animate-pulse">{text}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-t-celestial-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
