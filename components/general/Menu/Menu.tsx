import Link from 'next/link';

export const Menu = () => {
  return (
    <div className='flex'>
      <div className='hover:text-purple-600'>
        <a href='https://www.buymeacoffee.com/bringthesun'>Buy me 🍕</a>
      </div>
      <div className='px-3' />
      <div className='hover:text-purple-600'>
        <Link href='/login'>Login</Link>
      </div>
    </div>
  );
};
