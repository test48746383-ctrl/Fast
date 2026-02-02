import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Input from '../common/Input';
import DateInput from '../common/DateInput';
import TimeInput from '../common/TimeInput';
import GenderSelect from './GenderSelect';
import Button from '../common/Button';
import { isValidName, isValidDOB } from '../../utils/validators';
import { useToast } from '../../hooks/useToast';

const ProfileForm = ({ onSubmit }) => {
  const { t } = useLanguage();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    gender: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isValidName(formData.name)) {
      toast.error("Please enter a valid name");
      return;
    }
    if (!isValidDOB(formData.dob)) {
      toast.error("You must be at least 13 years old");
      return;
    }
    if (!formData.gender) {
      toast.error("Please select a gender");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        label={t('profile.name_label')}
        placeholder="e.g. Alex"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />

      <DateInput
        label={t('profile.dob_label')}
        value={formData.dob}
        onChange={(e) => handleChange('dob', e.target.value)}
      />

      <TimeInput
        label={t('profile.tob_label')}
        value={formData.tob}
        onChange={(e) => handleChange('tob', e.target.value)}
      />

      <GenderSelect
        value={formData.gender}
        onChange={(val) => handleChange('gender', val)}
      />

      <div className="pt-4">
        <Button type="submit">
          {t('profile.start_journey')}
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
