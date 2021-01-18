export const getAppCookies = (request: any) => {
  if (!request?.headers?.cookie) {
    return {};
  }

  const {
    headers: { cookie },
  } = request;

  const cookies = cookie.split(';').reduce((acc, cur: string) => {
    const [key, value] = cur.split('=');
    acc[key] = value;
    return acc;
  }, {});

  return cookies;
};
