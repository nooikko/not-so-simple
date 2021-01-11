import React from 'react';

export const Badge = ({ name, matching, missing, fresh }) => {
  const bgColor = matching
    ? 'bg-green-500'
    : missing
    ? 'bg-red-500'
    : fresh
    ? 'bg-blue-500'
    : 'bg-purple-600';

  return (
    <div
      className={`rounded-md inline-block px-2 text-white py-0.5 ${bgColor}`}
    >
      {name}
    </div>
  );
};
