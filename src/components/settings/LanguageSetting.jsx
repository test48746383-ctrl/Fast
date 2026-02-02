import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ROUTES } from '../../router/routes';
import SettingsItem from './SettingsItem';

const LanguageSetting = () => {
  const { navigate } = useNavigation();
  return (
    <SettingsItem 
       label="Change Language" 
       onClick={() => navigate(ROUTES.LANGUAGE)} 
    />
  );
};

export default LanguageSetting;
