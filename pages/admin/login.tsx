import React from 'react';
import { useRouter } from 'next/router'
import { Button, Flex, Heading } from '@chakra-ui/react';
import Callout from '../../components/common/callout';

const Login = () => {
  const router = useRouter()

  const handleLogin = async () => {
    router.replace("/redirect-login")
  };

  return (
    <>
      <Flex h="100vh" justify="center" align="center">
        <Flex
          borderWidth="1px"
          borderColor="black"
          borderRadius={4}
          direction="column"
          p={8}
        >
          <Heading mb={7} size="md">
            Admin Login
          </Heading>
          <Callout header="Note" mb={5} maxWidth={350}>
            You will be redirected to Github for authentication.
          </Callout>
          <Button
            backgroundColor="black"
            textColor="white"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
