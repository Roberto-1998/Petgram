import { useAuth } from '../../context/UserActiveContext';
import { NotRegisteredUser } from '../../pages/NotRegisteredUser';
import React from 'react';

export const RequiredAuth = ({ children }) => {
  const { isUserActive } = useAuth();

  if (!isUserActive) return <NotRegisteredUser />;

  return children;
};
