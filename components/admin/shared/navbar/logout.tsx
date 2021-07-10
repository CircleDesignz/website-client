import React from 'react';
import { useRouter } from 'next/router';
import PlainIconButton from '../../../shared/icon-button-plain';
import { IoLogOut } from 'react-icons/io5';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/redirect-logout');
  };

  return (
    <PlainIconButton
      label="Logout"
      icon={IoLogOut}
      iconBoxSize={5}
      iconColor="black"
      onClick={handleLogout}
    />
  );
};

export default LogoutButton;
