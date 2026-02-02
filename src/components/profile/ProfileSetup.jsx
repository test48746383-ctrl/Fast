import React from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import { useNavigation } from '../../context/NavigationContext';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../router/routes';
import ProfileForm from './ProfileForm';
import Header from '../common/Header';

const ProfileSetup = () => {
  const { updateProfile, completeOnboarding } = useUser();
  const { navigate } = useNavigation();
  const { t } = useLanguage();

  const handleComplete = (data) => {
    updateProfile(data);
    completeOnboarding();
    navigate(ROUTES.HOME);
  };

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      <Header title={t('profile.title')} />

      <div className="pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            {t('profile.subtitle')}
          </h2>
          <p className="text-white/60 text-sm">
            We use this to personalize your reading tone.
          </p>
        </motion.div>

        <ProfileForm onSubmit={handleComplete} />
      </div>
    </div>
  );
};

export default ProfileSetup;
