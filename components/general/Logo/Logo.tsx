import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <div className='bg-purple-600 text-white px-3 py-1 inline-block md:text-3xl sm:text-2xl font-bold tracking-widest rounded cursor-pointer'>
          NSS
        </div>
      </a>
    </Link>
  );
};
