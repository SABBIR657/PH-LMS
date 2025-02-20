/* eslint-disable react/prop-types */
import { AuthContext } from '@/hooks/AuthContextProvider';
import LoaderScreen from '@/others/LoadingScreen';
import {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';



export default function PrivateAdminRoute({ children }) {
  const { pathname } = useLocation();
  const { user, loginChecking } = useContext(AuthContext);
  console.log(user);
  if (loginChecking && !user) {
    return <LoaderScreen />;
  }

  if (!user) {
    return <Navigate to={'/login'} replace={true} state={{ path: pathname }} />;
  }

  if (user?.role != 'admin') {
    return (
      <Navigate to={'/dashboard'} replace={true} state={{ path: pathname }} />
    );
  }
  return children;
}
