import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ROUTES } from '../../router/routes';
import { HomeIcon, PalmIcon, ChatIcon, TarotIcon, UserIcon } from './IconComponents';

const BottomNav = () => {
  const { currentRoute, navigate } = useNavigation();

  const NAV_ITEMS = [
    { id: ROUTES.HOME, icon: HomeIcon, label: 'Home' },
    { id: ROUTES.PALM_SCAN, icon: PalmIcon, label: 'Palm' },
    { id: ROUTES.CHAT, icon: ChatIcon, label: 'AI Chat' },
    { id: ROUTES.TAROT, icon: TarotIcon, label: 'Tarot' },
    { id: ROUTES.SETTINGS, icon: UserIcon, label: 'You' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-nav pb-safe-bottom bg-cosmic-900/90 backdrop-blur-xl border-t border-white/10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around items-center h-16 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = currentRoute === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="relative w-full h-full flex flex-col items-center justify-center gap-1 group"
            >
              {/* Active Glow Indicator */}
              {isActive && (
                <div className="absolute top-0 w-8 h-1 bg-gradient-to-r from-celestial-400 to-mystic-400 rounded-full shadow-[0_0_10px_#667eea]" />
              )}
              
              {/* Icon */}
              <div className={`transition-all duration-300 ${isActive ? 'text-white -translate-y-1' : 'text-white/40 group-hover:text-white/70'}`}>
                <Icon size={24} filled={isActive} />
              </div>
              
              {/* Label */}
              <span className={`text-[10px] font-medium transition-all duration-300 ${isActive ? 'text-white opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
