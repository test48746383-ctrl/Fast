import React from 'react';
import { motion } from 'framer-motion';

const ChatBubble = ({ role, content }) => {
  const isUser = role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`
          max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-md
          ${isUser 
            ? 'bg-gradient-to-br from-celestial-500 to-celestial-600 text-white rounded-tr-none' 
            : 'bg-white/10 backdrop-blur-md border border-white/10 text-white/90 rounded-tl-none'}
        `}
      >
        {content}
      </div>
    </motion.div>
  );
};

export default ChatBubble;
