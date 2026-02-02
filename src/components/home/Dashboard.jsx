import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import { useBackHandler } from '../../hooks/useBackHandler';
import WelcomeHeader from './WelcomeHeader';
import FeatureGrid from './FeatureGrid';
import QuickAction from './QuickAction';
import DailyGuidance from '../daily/DailyGuidance';
import { ROUTES } from '../../router/routes';

const Dashboard = () => {
  useBackHandler(); // Activate double-back-to-exit
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen pb-32">
      {/* Header Section */}
      <WelcomeHeader />

      <motion.div 
        className="px-4 -mt-6 relative z-10 flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Main Feature: Palm Scan */}
        <QuickAction 
          title="AI Palm Reading"
          subtitle="Scan your hand to reveal your destiny"
          icon="✋"
          onClick={() => navigate(ROUTES.PALM_SCAN)}
          variant="glow"
        />

        {/* Feature Grid */}
        <FeatureGrid />

        {/* Daily Insight Preview */}
        <div onClick={() => navigate(ROUTES.DAILY)}>
           <DailyGuidance previewMode />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
