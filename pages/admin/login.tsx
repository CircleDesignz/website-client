import { Button, Flex, Heading } from '@chakra-ui/react';
import Callout from '../../components/common/callout';

const Login = () => {
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
          <Button mb={5} backgroundColor="black" textColor="white">
            Login
          </Button>
          <Callout header="Note">You will be redirected to Github OAuth</Callout>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
