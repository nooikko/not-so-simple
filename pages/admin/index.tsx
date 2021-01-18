import { GetServerSideProps } from 'next';
import { getAppCookies, verifyToken } from '@utils';
import { PageLayout } from '@components/admin';

const AdminHome = () => {
  return <PageLayout>Admin Home</PageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const { token } = getAppCookies(req);
  const valid = verifyToken(token);

  if (!valid) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/login',
      },
    };
  }

  return {
    props: {},
  };
};

export default AdminHome;
