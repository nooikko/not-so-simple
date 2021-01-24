import Link from 'next/link';
import { PageLayout } from '@components/admin';
import { Card } from '@components/general';

const AdminBank = () => {
  return (
    <PageLayout>
      <div className='flex justify-end'>
        <Link href='/admin/banks/new'>
          <a>
            <button className='bg-purple-600 p-2 px-3 text-white rounded font-medium'>
              Add Bank
            </button>
          </a>
        </Link>
      </div>
      <div>
        <Card>sdf</Card>
      </div>
    </PageLayout>
  );
};

export default AdminBank;
