import { Flex, Heading } from '@chakra-ui/react';

type AppProps = {
  header: string;
  children: React.ReactNode;
  props?: any
};

const Callout = ({ header, children, props }: AppProps) => {
  return (
    <Flex p={3} rounded={6} direction="column" background="gray.100" {...props} >
      <Heading size="sm">
        {header}
      </Heading>
      {children}
    </Flex>
  );
};

export default Callout;
