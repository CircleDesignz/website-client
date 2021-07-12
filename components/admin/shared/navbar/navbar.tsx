import React from 'react';
import { Box, Flex, Heading, HStack, Spacer } from '@chakra-ui/layout';
import { Avatar, Divider, Icon } from '@chakra-ui/react';
import LogoutButton from './logout';
import SidebarMenu from './sidebar-menu';
import Notifications from './notification';

const _NavbarDivider = () => {
  return <Divider orientation="vertical" colorScheme="red" />;
};

const Navbar = () => {
  return (
    <>
      <Flex backgroundColor="white" minH={50} align="center">
        <Box p={2}>
          <SidebarMenu />
        </Box>
        <Box height="30px">
          <_NavbarDivider />
        </Box>
        <Box ml={5}>
          <Heading size="md" textColor="black">
            Circle Admin
          </Heading>
        </Box>
        <Spacer />
        <Box p={2}>
          <HStack>
            <Avatar
              size="xs"
              name="T"
              src="https://avatars.githubusercontent.com/u/44934000?v=4"
            />
            <Heading size="xs">Coleman</Heading>
          </HStack>
        </Box>
        <Box p={2}>
          <Notifications />
        </Box>
        <Box height="30px">
          <_NavbarDivider />
        </Box>
        <Box p={2}>
          <LogoutButton />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
