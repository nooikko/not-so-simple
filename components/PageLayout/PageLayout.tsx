import { Logo } from '@components';

/**
 * @namespace Components/PageLayout
 */
export const PageLayout: React.FC = ({ children }) => {
  return (
    <div className='h-full w-full bg-gray-100'>
      <div className='flex flex-col container mx-auto px-6 lg:px-24'>
        <div className='my-4'>
          <Logo />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
