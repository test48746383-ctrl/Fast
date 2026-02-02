import React from 'react';
import { motion } from 'framer-motion';

const TarotCard = ({ card, isRevealed, onClick, size = "large" }) => {
  const dimensions = size === "small" 
    ? "w-24 h-40" 
    : "w-48 h-80";

  return (
    <div 
      className={`relative perspective-1000 ${dimensions} cursor-pointer`}
      onClick={onClick}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d shadow-2xl rounded-xl"
      >
        {/* Back of Card - NO EXTERNAL ASSETS */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-white/20 bg-cosmic-900">
          <div 
            className="w-full h-full opacity-80"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, #2d1b4e 0%, #0f0f1a 100%),
                repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 2px, transparent 2px, transparent 10px)
              `
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 rounded-full border border-yellow-500/50 flex items-center justify-center text-xl">
               ✨
             </div>
          </div>
        </div>

        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-white border-4 border-yellow-500/50">
           {card && (
             <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-400 relative">
                 <div className="absolute bottom-0 w-full bg-black/80 p-2 text-center">
                    <span className="text-white font-display text-sm font-bold uppercase tracking-widest">
                      {card.name}
                    </span>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
                    🃏
                 </div>
             </div>
           )}
        </div>
      </motion.div>
    </div>
  );
};

export default TarotCard;
