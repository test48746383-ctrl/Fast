import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../router/routes';
import { ONBOARDING_SLIDES } from '../../data/onboardingData';
import OnboardingSlide from './OnboardingSlide';
import OnboardingDots from './OnboardingDots';
import Button from '../common/Button';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { navigate } = useNavigation();
  const { t } = useLanguage();

  const handleNext = () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(ROUTES.PROFILE_SETUP);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: () => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    },
    trackMouse: true
  });

  return (
    <div className="h-screen flex flex-col relative" {...handlers}>
      {/* Skip Button */}
      <div className="absolute top-safe-top right-4 z-20 pt-4">
        <button 
          onClick={() => navigate(ROUTES.PROFILE_SETUP)}
          className="text-white/50 text-sm font-medium px-4 py-2"
        >
          Skip
        </button>
      </div>

      {/* Slides Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <OnboardingSlide data={ONBOARDING_SLIDES[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="pb-safe-bottom px-6 mb-8 z-20">
        <OnboardingDots 
          count={ONBOARDING_SLIDES.length} 
          current={currentIndex} 
        />
        
        <div className="mt-8">
          <Button onClick={handleNext}>
            {currentIndex === ONBOARDING_SLIDES.length - 1 
              ? t('profile.start_journey') 
              : t('common.next')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
