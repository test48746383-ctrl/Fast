import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from './TarotCard';

const TarotCardReveal = ({ card, index, isRevealed, onReveal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      <TarotCard 
        card={card} 
        isRevealed={isRevealed} 
        onClick={onReveal}
        size="small"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        className="mt-4 text-white font-semibold text-center text-sm"
      >
        {card.name}
      </motion.p>
    </motion.div>
  );
};

export default TarotCardReveal;
