import React from 'react';
import { Logo } from '../components';

export const PageLayout = ({ children }) => {
  return (
    <div className='w-100 h-full flex flex-col bg-gray-100 px-2 pb-4'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-between py-3'>
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
};
