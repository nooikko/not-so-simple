import { PageLayout } from '@components/admin';
import Link from 'next/link';

const AdminBank = () => {
  return (
    <PageLayout>
      <div className='flex'>
        <Link href='/banks/simple'>
          <a>
            <button className='bg-purple-600 p-2 px-3 text-white rounded font-medium'>
              View More
            </button>
          </a>
        </Link>
      </div>
    </PageLayout>
  );
};

export default AdminBank;
