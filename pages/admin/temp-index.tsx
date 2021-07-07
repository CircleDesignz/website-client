import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useStore } from '../_app';
import { withAuth } from '../../components/auth/auth';

const AdminHome = () => {
  const router = useRouter();
  const isLoggedIn = useStore((state) => state.authenticated);

  const handleLogout = () => {
    router.replace('/redirect-logout');
  };

  return (
    <>
      <Flex justify="center">
        User is currently {isLoggedIn ? 'LOGGED IN' : 'NOT LOGGED IN'}
        <Button mt={50} onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </>
  );
};

export default withAuth(AdminHome);
