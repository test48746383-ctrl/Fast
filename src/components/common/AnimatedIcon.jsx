import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -45 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay 
      }}
    >
      {icon}
    </motion.div>
  );
};

export default AnimatedIcon;
