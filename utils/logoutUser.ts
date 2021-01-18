import cookies from 'js-cookie';
import Router from 'next/router';

export const logoutUser = (event: any) => {
  event.preventDefault();
  cookies.remove('token');
  Router.push('/');
};
