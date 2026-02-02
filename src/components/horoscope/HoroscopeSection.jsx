import React from 'react';

const HoroscopeSection = ({ title, content, icon, small }) => {
  return (
    <div className={`
      bg-white/5 border border-white/10 rounded-2xl p-4
      ${small ? 'text-center' : 'text-left'}
    `}>
       <div className={`text-white/60 text-xs uppercase mb-2 ${small ? 'justify-center' : ''} flex items-center gap-2`}>
         <span>{icon}</span> {title}
       </div>
       <div className={`text-white font-medium ${small ? 'text-lg' : 'text-base leading-relaxed'}`}>
         {content || "Loading cosmic data..."}
       </div>
    </div>
  );
};

export default HoroscopeSection;
