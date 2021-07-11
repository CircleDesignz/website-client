import React from 'react';
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
  Divider,
  Heading,
} from '@chakra-ui/react';
import {
  IoBoat,
  IoFolder,
  IoHomeSharp,
  IoLayers,
  IoMenuOutline,
  IoPersonSharp,
  IoPricetag,
  IoReader,
} from 'react-icons/io5';
import PlainIconButton from '../../../shared/icon-button-plain';
import MenuItem from './menu-item';

const SidebarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PlainIconButton
        label="Menu"
        icon={IoMenuOutline}
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
            <VStack spacing="15px" align="start" px={5}>
              <Divider />
              <Heading size="md" color="white">
                Pages
              </Heading>
              <MenuItem
                name="Dashboard"
                icon={IoHomeSharp}
                newPath="/admin/dashboard"
                tagValue={25}
              />
              <MenuItem
                name="Inventory"
                icon={IoLayers}
                newPath="/admin/inventory"
              />
              <MenuItem
                name="Catalog"
                icon={IoPricetag}
                newPath="/admin/catalog"
                tagValue={32}
              />
              <MenuItem
                name="Orders"
                icon={IoReader}
                newPath="/admin/orders"
                tagValue={23}
              />
              <MenuItem
                name="Customers"
                icon={IoPersonSharp}
                newPath="/admin/customers"
                tagValue={4}
              />
              <MenuItem
                name="Shipping"
                icon={IoBoat}
                newPath="/admin/shipping"
              />
              <Heading size="md" color="white">
                Other
              </Heading>
              <MenuItem
                name="Scheduler"
                icon={IoFolder}
                newPath="/admin/dashboard"
              />
              <MenuItem
                name="Accounts"
                icon={IoFolder}
                newPath="/admin/dashboard"
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
