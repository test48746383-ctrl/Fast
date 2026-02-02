import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ROUTES } from '../../router/routes';
import FeatureCard from './FeatureCard';

const FeatureGrid = () => {
  const { navigate } = useNavigation();

  const features = [
    {
      id: 'tarot',
      title: 'Tarot Reading',
      icon: '🃏',
      color: '#bf00ff', // Purple
      route: ROUTES.TAROT
    },
    {
      id: 'chat',
      title: 'AI Guide',
      icon: '💬',
      color: '#00f5ff', // Cyan
      route: ROUTES.CHAT
    },
    {
      id: 'horoscope',
      title: 'Horoscope',
      icon: '♈',
      color: '#f6d365', // Gold
      route: ROUTES.HOROSCOPE
    },
    {
      id: 'love',
      title: 'Love Match',
      icon: '💕',
      color: '#ff6b9d', // Pink
      route: ROUTES.LOVE
    }
  ];

  return (
    <div>
       <h3 className="text-white/80 font-semibold mb-4 text-sm uppercase tracking-wide">
         Explore
       </h3>
       <div className="grid grid-cols-2 gap-4">
         {features.map((feature, index) => (
           <FeatureCard
             key={feature.id}
             title={feature.title}
             icon={feature.icon}
             color={feature.color}
             onClick={() => navigate(feature.route)}
             delay={index * 0.1}
           />
         ))}
       </div>
    </div>
  );
};

export default FeatureGrid;
