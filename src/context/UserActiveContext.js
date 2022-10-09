import React, { createContext, useContext, useState } from 'react';

const UserAuthContext = createContext({});

const UserAuthProvider = ({ children }) => {
  const [isUserActive, setUserActive] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const activateAuth = (token) => {
    setUserActive(true);
    window.sessionStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setUserActive(false);
    window.sessionStorage.removeItem('token');
  };

  return (
    <UserAuthContext.Provider
      value={{ isUserActive, activateAuth, handleLogout }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isUserActive, activateAuth, handleLogout } =
    useContext(UserAuthContext);

  return {
    isUserActive,
    activateAuth,
    handleLogout,
  };
};

export default UserAuthProvider;
