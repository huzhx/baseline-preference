import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Auth = () => {
  const query = useQuery();

  const accessToken = query.get('access_token');

  console.log({ accessToken });

  // TODO: invoke api to verify the access_token

  // TODO: if verification succeed, will get the userId and redirect the user to home page

  // TODO: if verfication failed, direct the user back to login page

  return <div></div>;
};

export default Auth;
