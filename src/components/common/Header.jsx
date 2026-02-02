import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useUser } from '../../context/UserContext';
import { ROUTES } from '../../router/routes';

const Header = ({ title, showBack = false, showProfile = false }) => {
  const { goBack, navigate } = useNavigation();
  const { userProfile } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-nav px-4 pt-safe-top pb-4 bg-cosmic-900/50 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="flex items-center justify-between h-12">
        {/* Left: Back Button or Logo */}
        <div className="flex items-center min-w-[40px]">
          {showBack ? (
            <button 
              onClick={goBack}
              className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-95 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-mystic-500 to-celestial-400 flex items-center justify-center">
              <span className="text-lg">🔮</span>
            </div>
          )}
        </div>

        {/* Center: Title */}
        <h1 className="text-lg font-display font-semibold text-white tracking-wide">
          {title || "AI Palm Reader"}
        </h1>

        {/* Right: Profile or Settings */}
        <div className="flex items-center justify-end min-w-[40px]">
          {showProfile && (
            <button 
              onClick={() => navigate(ROUTES.SETTINGS)}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 overflow-hidden hover:bg-white/20 transition-all"
            >
               {userProfile?.name ? (
                 <span className="font-bold text-sm">{userProfile.name[0]}</span>
               ) : (
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                   <circle cx="12" cy="7" r="4"></circle>
                 </svg>
               )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
