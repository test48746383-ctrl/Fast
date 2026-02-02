import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TarotCardReveal from './TarotCardReveal';
import Loading from '../common/Loading';
import Button from '../common/Button';

const TarotResult = ({ cards, reading, isLoading, onReset }) => {
  const [revealedCount, setRevealedCount] = useState(0);

  // Auto reveal one by one
  useEffect(() => {
    if (revealedCount < cards.length) {
      const timer = setTimeout(() => {
        setRevealedCount(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, cards.length]);

  return (
    <div className="pt-20 px-6 pb-20">
      {/* Cards Row */}
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto py-4">
        {cards.map((card, i) => (
          <TarotCardReveal 
            key={card.id}
            card={card}
            index={i}
            isRevealed={i < revealedCount}
            onReveal={() => {}} 
          />
        ))}
      </div>

      {/* Interpretation Area */}
      <div className="min-h-[200px]">
        {isLoading || revealedCount < cards.length ? (
           <div className="text-center py-10">
             <Loading text={revealedCount < cards.length ? "Revealing Fate..." : "Interpreting..."} />
           </div>
        ) : (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
           >
             <h3 className="text-xl font-bold text-white mb-4">The Guidance</h3>
             <div className="text-white/80 leading-relaxed space-y-4 whitespace-pre-wrap">
               {reading}
             </div>

             <div className="mt-8 pt-6 border-t border-white/10">
               <Button onClick={onReset} variant="secondary">
                 New Reading
               </Button>
             </div>
           </motion.div>
        )}
      </div>
    </div>
  );
};

export default TarotResult;
