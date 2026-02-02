import React from 'react';
import Header from '../common/Header';

const ChatHeader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <Header title="Astra Guide" showBack />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-cosmic-900/50 to-transparent pointer-events-none translate-y-full" />
    </div>
  );
};

export default ChatHeader;
