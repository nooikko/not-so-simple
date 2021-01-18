import { Menu } from '@components/admin';
import { Logo } from '@components/general';

export const PageLayout = ({ children }) => {
  return (
    <div className='h-full w-full bg-gray-100'>
      <div className='flex flex-col container mx-auto xl:px-18 px-1'>
        <div className='my-4 flex flex-row justify-between mb-8'>
          <Logo />
          <Menu />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
