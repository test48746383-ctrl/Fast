// Note: This file is actually redundant because Toast logic is inside AppContext.
// But for cleaner component structure, we can export the UI part here if we want to separate it.
// The file index listed this, so I will create a stateless UI component for it.

import React from 'react';

const Toast = ({ message, type = 'info' }) => {
  const colors = {
    info: 'bg-gray-800',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600'
  };

  return (
    <div className={`px-6 py-3 rounded-xl shadow-lg backdrop-blur-md border border-white/10 text-sm font-medium text-white ${colors[type]}`}>
      {message}
    </div>
  );
};

export default Toast;
