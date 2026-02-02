import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { calculateCompatibility } from './LoveCompatibility';
import HeartAnimation from './HeartAnimation';
import Button from '../common/Button';

const LoveResult = ({ sign1, sign2, onReset }) => {
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const finalScore = calculateCompatibility(sign1, sign2);
    // Animate score count up
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setScore(start);
      if (start >= finalScore) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [sign1, sign2]);

  return (
    <div className="pt-24 px-6 flex flex-col items-center text-center">
      <HeartAnimation />
      
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-red-500 mb-2"
      >
        {score}%
      </motion.div>
      
      <p className="text-white/60 uppercase tracking-widest text-sm mb-8">
        Compatibility Match
      </p>
      
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 w-full mb-8">
        <div className="flex justify-between items-center text-white text-xl font-bold mb-4">
          <span className="capitalize">{sign1}</span>
          <span className="text-pink-500">❤️</span>
          <span className="capitalize">{sign2}</span>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">
          {score > 80 
            ? "A match made in the heavens! Your energies align perfectly." 
            : "A challenging but rewarding connection. Patience is key."}
        </p>
      </div>
      
      <Button onClick={onReset} variant="secondary">
        Check Another Match
      </Button>
    </div>
  );
};

export default LoveResult;
