import React from 'react';

interface BadgeProps {
  label: string;
  color: 'green' | 'red' | 'blue';
}

export const Badge: React.FC<BadgeProps> = ({ label, color }) => {
  return (
    <div className={`bg-${color}-500 p-0.5 px-2 rounded text-white mr-2 mb-1`}>
      {label}
    </div>
  );
};
