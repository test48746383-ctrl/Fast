import React from 'react';
import { motion } from 'framer-motion';

// This is a decorative overlay that mimics line tracing
// In a real advanced version, these paths would come from the Vision AI coordinates
const PalmOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Heart Line (Pink) */}
        <motion.path
           d="M10,40 Q40,45 80,30"
           stroke="#ff6b9d"
           strokeWidth="0.5"
           fill="none"
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Head Line (Blue) */}
        <motion.path
           d="M10,50 Q45,55 85,50"
           stroke="#4a7bc4"
           strokeWidth="0.5"
           fill="none"
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ duration: 1.5, delay: 0.7 }}
        />

        {/* Life Line (Green) */}
        <motion.path
           d="M20,45 Q40,60 30,90"
           stroke="#38ef7d"
           strokeWidth="0.5"
           fill="none"
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ duration: 1.5, delay: 0.9 }}
        />
      </svg>
    </div>
  );
};

export default PalmOverlay;
