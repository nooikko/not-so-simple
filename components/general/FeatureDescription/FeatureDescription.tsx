import React from 'react';

interface FeatureDescriptionProps {
  title: string;
  releaseDate?: string;
  description: string;
}

export const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
  title,
  releaseDate,
  description,
}) => {
  return (
    <div>
      <div className='font-medium'>
        {title}
        {releaseDate && (
          <>
            {' '}
            - <span className='text-gray-600'>Expected {releaseDate}</span>
          </>
        )}
      </div>
      {description}
    </div>
  );
};
