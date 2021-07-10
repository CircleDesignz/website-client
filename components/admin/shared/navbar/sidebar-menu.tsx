import React from 'react';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { IoLayers, IoLogOut, IoMenu } from 'react-icons/io5';
import TaggedButton from '../../../shared/tagged-button';
import PlainIconButton from '../../../shared/icon-button-plain';

type Props = {
  icon?: React.ReactElement | undefined;
};

const SidebarMenu = ({ icon }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PlainIconButton
        label="Menu"
        icon={IoMenu}
        onClick={onOpen}
        iconColor="black"
        iconBoxSize={5}
      />
      <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background="black">
          <DrawerHeader textColor="white">
            <Container centerContent>(Circle Logo)</Container>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="20px" align="start" px={5}>
              <Button
                variant="unstyled"
                textColor="white"
                leftIcon={<IoLayers />}
              >
                Inventory
              </Button>
              <TaggedButton />
              <Box>Hey</Box>
              <Box>Hey</Box>
              <Box>Hey</Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
