import React from 'react';
import UserFormLogin from '../components/UserFormLogin';
import UserFormRegister from '../components/UserFormRegister';
import { useAuth } from '../context/UserActiveContext';

export const NotRegisteredUser = () => {
  const { isUserActive, activateAuth } = useAuth();

  if (!isUserActive)
    return (
      <>
        <UserFormRegister onSubmit={activateAuth} title={'Registrarse'} />

        <UserFormLogin onSubmit={activateAuth} title={'Iniciar sesión'} />
      </>
    );
};
