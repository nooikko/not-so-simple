import React from 'react';

interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  return (
    <div>
      <label className='inline-block'>
        <input
          type='checkbox'
          className='rounded text-purple-400 mr-3 border-2 border-gray-400 focus:ring-transparent cursor-pointer bg-transparent'
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className='font-medium text-gray-600'>{label}</span>
      </label>
    </div>
  );
};
