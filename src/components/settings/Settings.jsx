import React from 'react';
import Header from '../common/Header';
import SettingsItem from './SettingsItem';
import LanguageSetting from './LanguageSetting';
import PrivacyPolicy from './PrivacyPolicy';
import AboutApp from './AboutApp';
import { useUser } from '../../context/UserContext';
import { useToast } from '../../hooks/useToast';

const Settings = () => {
  const { resetUser } = useUser();
  const toast = useToast();

  const handleReset = () => {
    // Using window.confirm for simplicity in MVP
    if (window.confirm("Are you sure? This will delete your profile data.")) {
      resetUser();
      toast.info("Profile reset. Please restart app.");
      setTimeout(() => window.location.reload(), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-900 pb-safe-bottom">
      <Header title="Settings" showBack />
      
      <div className="pt-20 px-4 flex flex-col gap-6">
        <section>
          <h3 className="text-white/40 uppercase text-xs font-bold mb-2 ml-2">General</h3>
          <div className="bg-white/5 rounded-2xl overflow-hidden">
             <LanguageSetting />
             <div className="h-[1px] bg-white/5" />
             <SettingsItem label="Notifications" toggle />
          </div>
        </section>

        <section>
          <h3 className="text-white/40 uppercase text-xs font-bold mb-2 ml-2">Data</h3>
          <div className="bg-white/5 rounded-2xl overflow-hidden">
             <SettingsItem label="Clear Profile Data" onClick={handleReset} danger />
          </div>
        </section>

        <section>
          <h3 className="text-white/40 uppercase text-xs font-bold mb-2 ml-2">About</h3>
          <div className="bg-white/5 rounded-2xl overflow-hidden">
             <AboutApp />
             <div className="h-[1px] bg-white/5" />
             <PrivacyPolicy />
          </div>
        </section>
        
        <div className="text-center text-white/20 text-xs mt-4">
          Version 1.0.0
        </div>
      </div>
    </div>
  );
};

export default Settings;
