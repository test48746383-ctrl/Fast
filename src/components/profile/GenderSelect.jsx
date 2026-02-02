import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GenderSelect = ({ value, onChange }) => {
  const { t } = useLanguage();

  const options = [
    { id: 'male', label: t('profile.gender_male'), icon: '♂️' },
    { id: 'female', label: t('profile.gender_female'), icon: '♀️' },
    { id: 'other', label: t('profile.gender_other'), icon: '🌈' },
  ];

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white/70 ml-1">
        {t('profile.gender_label')}
      </label>
      <div className="grid grid-cols-3 gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`
              flex flex-col items-center justify-center p-3 rounded-xl border transition-all
              ${value === opt.id 
                ? 'bg-celestial-600/30 border-celestial-400' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'}
            `}
          >
            <span className="text-xl mb-1">{opt.icon}</span>
            <span className="text-xs font-medium text-white/90">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderSelect;
