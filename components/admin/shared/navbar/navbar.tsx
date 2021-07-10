import React, { MouseEventHandler, ReactElement } from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Divider, Icon, IconButton, Button } from '@chakra-ui/react';
import { IoNotifications, IoMenu, IoLogOut } from 'react-icons/io5';
import { useRouter } from 'next/router';
import LogoutButton from './logout';
import SidebarMenu from './sidebar-menu';
import Notifications from './notification';

type ButtonProps = {
  aria: string;
  icon: ReactElement;
  onClick?: MouseEventHandler | undefined;
};

type IconProps = {
  icon: any;
};

const _NavbarDivider = () => {
  return <Divider orientation="vertical" colorScheme="red" />;
};

const _IconButton = ({ aria, icon, onClick }: ButtonProps) => {
  return (
    <IconButton
      aria-label={aria}
      icon={icon}
      variant="unstyled"
      onClick={onClick}
    />
  );
};

const _Icon = ({ icon }: IconProps) => {
  return (
    <Icon
      boxSize="1.25em"
      color="black"
      as={icon}
      _hover={{ color: 'gray.400' }}
    />
  );
};

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/redirect-logout');
  };

  return (
    <>
      <Flex backgroundColor="white" minH={50} align="center">
        <Box p={2}>
          <SidebarMenu icon={<_Icon icon={IoMenu} />} />
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
          <Notifications icon={<_Icon icon={IoNotifications} />} />
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
