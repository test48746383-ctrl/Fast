import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const OnboardingSlide = ({ data }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
      {/* Image Area */}
      <div className="w-64 h-64 mb-12 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-mystic-500/20 to-celestial-400/20 rounded-full blur-[60px] animate-pulse-glow" />
        
        {/* Emoji Placeholder - Replace with Lottie or Real Assets later */}
        <div className="text-[100px] animate-float">
          {data.image}
        </div>
      </div>

      {/* Text Area */}
      <h2 className="text-3xl font-display font-bold text-white mb-4">
        {t(data.titleKey)}
      </h2>
      <p className="text-white/70 leading-relaxed max-w-xs">
        {t(data.descKey)}
      </p>
    </div>
  );
};

export default OnboardingSlide;
