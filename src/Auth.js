import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Auth = () => {
  const query = useQuery();

  const accessToken = query.get('access_token');
  let userId = '';

  if (accessToken) {
    userId = jwt_decode(accessToken).userId;
  }

  if (!accessToken || !userId) {
    return <Redirect to="/portal-pick" />;
  }

  console.log({ accessToken, userId });

  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('user_id', userId);

  return <Redirect push to="/" />;
};

export default Auth;
