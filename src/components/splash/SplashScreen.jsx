import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PalmLogo from './PalmLogo';
import { useNavigation } from '../../context/NavigationContext';
import { useUser } from '../../context/UserContext';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../router/routes';

const SplashScreen = () => {
  const { navigate } = useNavigation();
  const { hasCompletedOnboarding, isProfileComplete } = useUser();
  const { t } = useLanguage();

  useEffect(() => {
    // 2.5s Splash Delay
    const timer = setTimeout(() => {
      if (!hasCompletedOnboarding) {
        navigate(ROUTES.LANGUAGE);
      } else if (!isProfileComplete) {
        navigate(ROUTES.PROFILE_SETUP);
      } else {
        navigate(ROUTES.HOME);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, hasCompletedOnboarding, isProfileComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cosmic-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mystic-500 rounded-full blur-[100px] opacity-20 animate-pulse-glow" />

      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 mb-8"
      >
        <PalmLogo size={120} />
      </motion.div>

      {/* Text Animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">
          AI Palm Reader
        </h1>
        <p className="text-white/60 text-sm tracking-widest uppercase">
          {t('splash.tagline')}
        </p>
      </motion.div>
      
      {/* Loader */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 z-10"
      >
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
