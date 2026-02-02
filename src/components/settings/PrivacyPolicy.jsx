import React, { useState } from 'react';
import Modal from '../common/Modal';
import SettingsItem from './SettingsItem';

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsItem label="Privacy Policy" onClick={() => setIsOpen(true)} />
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Privacy Policy"
      >
        <div className="text-white/80 text-sm space-y-4">
          <p>
            Your privacy is important to us. We do not store your palm photos on any server. 
            All analysis is done securely via API and images are discarded immediately.
          </p>
          <p>
            Profile data is stored locally on your device.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
