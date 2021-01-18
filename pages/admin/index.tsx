import { GetServerSideProps } from 'next';
import { adminLockout } from '@utils';
import { PageLayout } from '@components/admin';

const AdminHome = () => {
  return <PageLayout>Admin Home</PageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return adminLockout(context);
};

export default AdminHome;
