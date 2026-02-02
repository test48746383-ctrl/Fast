import React, { useState } from 'react';
import Modal from '../common/Modal';
import SettingsItem from './SettingsItem';

const AboutApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsItem label="About App" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="About">
         <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-white font-bold text-lg">AI Palm Reader</h3>
            <p className="text-white/60 text-sm mt-2">
              Combining ancient wisdom with modern AI to guide you on your journey.
            </p>
         </div>
      </Modal>
    </>
  );
};

export default AboutApp;
