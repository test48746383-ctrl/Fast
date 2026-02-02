import React from 'react';

const DateInput = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-white/70 ml-1">
          {label}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={onChange}
        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-celestial-400 focus:bg-white/10 outline-none appearance-none"
        // Force dark mode calendar
        style={{ colorScheme: 'dark' }}
      />
    </div>
  );
};

export default DateInput;
