import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Auth = () => {
  const query = useQuery();

  const accessToken = query.get('access_token');

  console.log({ accessToken });

  localStorage.setItem('access_token', accessToken);

  return <Redirect push to="/" />;
};

export default Auth;
