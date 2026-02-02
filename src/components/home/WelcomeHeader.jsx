import React from 'react';
import { useUser } from '../../context/UserContext';
import { useLanguage } from '../../context/LanguageContext';

const WelcomeHeader = () => {
  const { userProfile } = useUser();
  const { t } = useLanguage();
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  };

  return (
    <div className="w-full h-[280px] bg-gradient-to-b from-cosmic-800 to-transparent relative pt-safe-top px-6 flex flex-col">
      {/* FIXED: Removed external noise.svg, using CSS pattern instead */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)`
        }}
      />
      
      <div className="flex items-center justify-between mt-6 mb-8 z-10">
        <div>
          <h2 className="text-white/60 text-sm font-medium uppercase tracking-widest">
            {t(`home.${getGreeting()}`)}
          </h2>
          <h1 className="text-3xl font-display font-bold text-white mt-1">
            {userProfile?.name || 'Seeker'}
          </h1>
        </div>
        
        {/* User Avatar */}
        <div className="w-12 h-12 rounded-full border-2 border-white/20 p-0.5">
           <div className="w-full h-full rounded-full bg-gradient-to-br from-celestial-400 to-mystic-500 flex items-center justify-center text-lg font-bold">
             {userProfile?.name ? userProfile.name[0] : 'S'}
           </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
