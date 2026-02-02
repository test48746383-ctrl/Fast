import React, { useState } from 'react';

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4 bg-cosmic-900/90 backdrop-blur-lg border-t border-white/10 flex items-center gap-3 z-20"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask the stars..."
        disabled={disabled}
        className="flex-1 h-12 rounded-full bg-white/5 border border-white/10 px-5 text-white focus:border-celestial-400 focus:bg-white/10 outline-none transition-all"
      />
      
      <button 
        type="submit" 
        disabled={!text.trim() || disabled}
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-celestial-500 to-mystic-500 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-md transition-all active:scale-95"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
