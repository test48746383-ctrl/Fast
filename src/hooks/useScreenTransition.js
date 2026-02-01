import { useNavigation } from './useNavigation';

/**
 * 🪝 useScreenTransition Hook
 * 
 * Helper to determine animation direction based on route depth.
 * Used by Framer Motion variants.
 */
export const useScreenTransition = () => {
  const { direction } = useNavigation();

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98,
      zIndex: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -20 : 20,
      opacity: 0,
      scale: 0.98,
      zIndex: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    })
  };

  return {
    variants,
    custom: direction
  };
};

export default useScreenTransition;
