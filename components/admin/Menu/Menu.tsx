import Link from 'next/link';
import { logoutUser } from '@utils';

export const Menu = () => {
  return (
    <div className='flex'>
      <div className='px-3' />
      <div>
        <Link href='/admin/banks'>
          <a className='text-black hover:text-purple-600'>Banks</a>
        </Link>
      </div>
      <div className='px-3' />
      <div
        className='hover:text-purple-600 cursor-pointer'
        onClick={logoutUser}
      >
        Logout
      </div>
    </div>
  );
};
