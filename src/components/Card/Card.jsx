import React from 'react';

function Card({ title, children }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {title && (
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}

export default Card;