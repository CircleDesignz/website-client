import { Flex, Heading } from '@chakra-ui/react';

type AppProps = {
  header: string;
  children: React.ReactNode;
  [x: string]: any;
};

const Callout = (props: AppProps) => {
  return (
    <Flex p={3} rounded={6} direction="column" background="gray.100" {...props}>
      <Heading size="sm">{props.header}</Heading>
      {props.children}
    </Flex>
  );
};

export default Callout;
