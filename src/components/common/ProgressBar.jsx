import React from 'react';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-celestial-400 to-mystic-400 transition-all duration-500 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
};

export default ProgressBar;
