import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { ROUTES } from '../../router/routes';
import LanguageOption from './LanguageOption';
import Button from '../common/Button';

const LanguageSelection = () => {
  const { availableLanguages, changeLanguage, language } = useLanguage();
  const { navigate } = useNavigation();

  const handleContinue = () => {
    navigate(ROUTES.ONBOARDING);
  };

  return (
    <div className="min-h-screen p-6 pt-12 flex flex-col items-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-display font-bold text-white mb-2">Choose Language</h1>
        <p className="text-white/60">Select your preferred language</p>
      </motion.div>

      <div className="w-full max-w-sm grid grid-cols-2 gap-4 mb-8">
        {Object.keys(availableLanguages).map((key, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LanguageOption
              code={key}
              label={availableLanguages[key].nativeName}
              subLabel={availableLanguages[key].label}
              isSelected={language === key}
              onClick={() => changeLanguage(key)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-sm mt-auto pb-8"
      >
        <Button onClick={handleContinue}>
          Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default LanguageSelection;
