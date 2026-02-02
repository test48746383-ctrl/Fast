import React from 'react';
import { motion } from 'framer-motion';

const ScanningAnimation = ({ image }) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-none md:rounded-3xl">
        {/* Background Image */}
        <img src={image} alt="Scanning" className="w-full h-full object-cover opacity-60" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20" />
        
        {/* Scanning Line */}
        <motion.div 
          className="absolute left-0 right-0 h-1 bg-celestial-400 shadow-[0_0_20px_#4a7bc4] z-10"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />
        
        {/* Analysis Points Animation */}
        <div className="absolute inset-0">
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

      <div className="absolute bottom-20 text-center">
        <h3 className="text-xl font-display font-bold text-white mb-2 animate-pulse">
          Analyzing Lines...
        </h3>
        <p className="text-white/60 text-sm">Mapping Head, Heart, and Life lines</p>
      </div>
    </div>
  );
};

export default ScanningAnimation;
