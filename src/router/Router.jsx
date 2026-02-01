import React, { Suspense, lazy } from 'react';
import { useNavigation } from '../context/NavigationContext';
import ScreenTransition from '../components/layout/ScreenTransition';
import Loading from '../components/common/Loading';

// Lazy Load Components for Performance
const SplashScreen = lazy(() => import('../components/splash/SplashScreen'));
const LanguageSelection = lazy(() => import('../components/language/LanguageSelection'));
const Onboarding = lazy(() => import('../components/onboarding/Onboarding'));
const ProfileSetup = lazy(() => import('../components/profile/ProfileSetup'));
const Dashboard = lazy(() => import('../components/home/Dashboard'));
const PalmScan = lazy(() => import('../components/palm/PalmScan'));
const AIPalmChat = lazy(() => import('../components/chat/AIPalmChat'));
const TarotReading = lazy(() => import('../components/tarot/TarotReading'));
const DailyGuidance = lazy(() => import('../components/daily/DailyGuidance'));
const Horoscope = lazy(() => import('../components/horoscope/Horoscope'));
const LoveReading = lazy(() => import('../components/love/LoveReading'));
const Settings = lazy(() => import('../components/settings/Settings'));

/**
 * 🗺️ Main Router Component
 * 
 * Controls which screen is displayed based on current route in NavigationContext.
 * Wraps screens in AnimatePresence (via ScreenTransition) for smooth navigation.
 */
const Router = () => {
  const { currentRoute } = useNavigation();

  const renderScreen = () => {
    switch (currentRoute) {
      case 'SPLASH':
        return <SplashScreen />;
      case 'LANGUAGE':
        return <LanguageSelection />;
      case 'ONBOARDING':
        return <Onboarding />;
      case 'PROFILE_SETUP':
        return <ProfileSetup />;
      case 'HOME':
        return <Dashboard />;
      case 'PALM_SCAN':
        return <PalmScan />;
      case 'CHAT':
        return <AIPalmChat />;
      case 'TAROT':
        return <TarotReading />;
      case 'DAILY':
        return <DailyGuidance />;
      case 'HOROSCOPE':
        return <Horoscope />;
      case 'LOVE':
        return <LoveReading />;
      case 'SETTINGS':
        return <Settings />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <Suspense fallback={<Loading fullScreen />}>
      <ScreenTransition key={currentRoute}>
        {renderScreen()}
      </ScreenTransition>
    </Suspense>
  );
};

export default Router;
