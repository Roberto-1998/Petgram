import React from 'react';
import SubmitButton from '../components/SubmitButton';
import { useAuth } from '../context/UserActiveContext';

const User = () => {
  const { handleLogout } = useAuth();

  return (
    <>
      <SubmitButton
        onClick={handleLogout}
        title={'Cerrar sesión'}
        disabled={false}
      />
    </>
  );
};

export default User;
