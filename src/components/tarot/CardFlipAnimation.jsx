// Helper logic for card flip animations (reusable)
import { motion } from 'framer-motion';

export const flipVariants = {
  hidden: { rotateY: 0 },
  visible: { rotateY: 180 }
};

export const flipTransition = {
  duration: 0.6,
  type: "spring",
  stiffness: 260,
  damping: 20
};
