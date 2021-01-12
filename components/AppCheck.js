import React from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { RiCloseCircleFill } from 'react-icons/ri';

export const AppCheck = ({ exists }) => {
  return (
    <>
      {exists ? (
        <span className='text-green-600 text-lg'>
          <IoCheckmarkCircleSharp />
        </span>
      ) : (
        <span className='text-red-600 text-lg'>
          <RiCloseCircleFill />
        </span>
      )}
    </>
  );
};
