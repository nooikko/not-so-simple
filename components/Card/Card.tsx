import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className='bg-white w-100 shadow rounded p-5 grid gap-4'>
      {children}
    </div>
  );
};
