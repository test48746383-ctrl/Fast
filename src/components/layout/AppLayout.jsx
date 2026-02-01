import React from 'react';
import CosmicBackground from './CosmicBackground';
import StarField from './StarField';
import BottomNav from '../common/BottomNav';
import { useNavigation } from '../../context/NavigationContext';
import { shouldShowBottomNav } from '../../router/routes';

/**
 * 🖼️ App Layout Component
 * 
 * Provides the visual foundation for the application:
 * - Persistent Cosmic Background
 * - Starfield Animation
 * - Bottom Navigation (conditional)
 * - Main Content Area
 */
const AppLayout = ({ children }) => {
  const { currentRoute } = useNavigation();
  const showNav = shouldShowBottomNav(currentRoute);

  return (
    <div className="app-container relative w-full h-full min-h-screen text-white overflow-hidden">
      {/* Background Layers */}
      <CosmicBackground />
      <StarField />
      
      {/* Main Content */}
      <main className={`relative z-content w-full h-full ${showNav ? 'pb-24' : ''}`}>
        {children}
      </main>

      {/* Navigation */}
      {showNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
