import React from 'react';

const Input = ({ label, type = "text", value, onChange, placeholder, className = "" }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-white/70 ml-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-celestial-400 focus:bg-white/10 focus:shadow-[0_0_0_2px_rgba(102,126,234,0.2)] transition-all outline-none"
      />
    </div>
  );
};

export default Input;
