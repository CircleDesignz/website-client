import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
  IoFilterOutline,
} from 'react-icons/io5';
import InventoryTable from '../../components/admin/inventory/inventory-table';
import Navbar from '../../components/admin/shared/navbar/navbar';
import { withAuth } from '../../components/auth/auth';

const Inventory = () => {
  return (
    <>
      <Navbar />
      <Box h="100vh" w="fill" px={10} py={5}>
        <Heading mb={10} size="lg">
          Inventory
        </Heading>
        <HStack mb={5}>
          <Button variant="outline" size="sm" leftIcon={<IoFilterOutline />}>
            Filter
          </Button>
          <Box w="25%">
            <InputGroup>
              <Input
                size="sm"
                variant="flushed"
                focusBorderColor="#556785"
                placeholder="Search"
              />
            </InputGroup>
          </Box>
          <Spacer />
          <HStack direction="column-reverse">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<IoArrowDownCircleOutline />}
            >
              Import
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<IoArrowUpCircleOutline />}
            >
              Export
            </Button>
          </HStack>
        </HStack>
        <InventoryTable />
        <Heading mt="25px" size="md">Data</Heading>
      </Box>
    </>
  );
};

export default Inventory;
