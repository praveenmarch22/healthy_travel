import React from 'react';

function Text({ children, className = '' }) {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  );
}

export default Text;