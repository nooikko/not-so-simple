import React from 'react';

interface BadgeProps {
  label: string;
  color: 'green' | 'red' | 'blue';
}

export const Badge: React.FC<BadgeProps> = ({ label, color }) => {
  switch (color) {
    case 'red':
      return (
        <div className='bg-red-500 p-0.5 px-2 rounded text-white mr-2 mb-1'>
          {label}
        </div>
      );
    case 'green':
      return (
        <div className='bg-green-500 p-0.5 px-2 rounded text-white mr-2 mb-1'>
          {label}
        </div>
      );
    case 'blue':
      return (
        <div className='bg-blue-500 p-0.5 px-2 rounded text-white mr-2 mb-1'>
          {label}
        </div>
      );
  }
};
