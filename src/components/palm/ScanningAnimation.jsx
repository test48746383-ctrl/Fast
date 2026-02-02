import React from 'react';
import { motion } from 'framer-motion';

const ScanningAnimation = ({ image }) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-none md:rounded-3xl bg-cosmic-900">
        
        {/* Background Image */}
        {image && (
          <img src={image} alt="Scanning" className="w-full h-full object-cover opacity-60 relative z-0" />
        )}
        
        {/* INLINE GRID OVERLAY (Replaces external file) */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00f5ff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Scanning Line */}
        <motion.div 
          className="absolute left-0 right-0 h-1 bg-celestial-400 shadow-[0_0_20px_#4a7bc4] z-20"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />
        
        {/* Analysis Points Animation */}
        <div className="absolute inset-0 z-30">
          {[...Array(5)].map((_, i) => (
             <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full border-2 border-celestial-400 bg-celestial-400/30"
                style={{ 
                    top: `${Math.random() * 80 + 10}%`, 
                    left: `${Math.random() * 80 + 10}%` 
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.5 
                }}
             />
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 text-center z-40">
        <h3 className="text-xl font-display font-bold text-white mb-2 animate-pulse">
          Analyzing Lines...
        </h3>
        <p className="text-white/60 text-sm">Mapping Head, Heart, and Life lines</p>
      </div>
    </div>
  );
};

export default ScanningAnimation;
