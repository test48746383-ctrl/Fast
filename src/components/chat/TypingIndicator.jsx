import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
        <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};

export default TypingIndicator;
