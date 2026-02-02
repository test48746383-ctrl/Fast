import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

// Mock visual spread of cards face down
const TarotSpread = ({ category, onCardsDrawn }) => {
  return (
    <div className="pt-24 px-4 h-[80vh] flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white font-bold text-xl mb-8 text-center"
      >
        Concentrate on your question...
      </motion.h2>

      {/* Fan of Cards */}
      <div className="relative h-64 w-full max-w-sm flex justify-center items-center mb-12">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0, y: 100, opacity: 0 }}
            animate={{ 
              rotate: (i - 2) * 10, 
              y: Math.abs(i - 2) * 5,
              opacity: 1
            }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="absolute w-32 h-48 bg-cosmic-800 border-2 border-white/20 rounded-xl shadow-2xl origin-bottom"
            style={{ zIndex: i }}
          >
             <div className="w-full h-full bg-[url('/assets/tarot-back.png')] bg-cover opacity-50" />
          </motion.div>
        ))}
      </div>

      <Button onClick={onCardsDrawn} className="max-w-xs animate-pulse">
        Draw Cards
      </Button>
      
      <p className="mt-6 text-white/40 text-xs text-center">
        Tap to reveal the universe's message
      </p>
    </div>
  );
};

export default TarotSpread;
