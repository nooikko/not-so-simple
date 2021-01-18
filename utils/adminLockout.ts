import { getAppCookies, verifyToken } from '@utils';

export const adminLockout = (context) => {
  const { req } = context;
  const { token } = getAppCookies(req);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/login',
      },
    };
  }
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
