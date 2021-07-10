import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import InventoryTable from '../../components/admin/inventory/inventory-table';
import Navbar from '../../components/admin/shared/navbar/navbar';
import { withAuth } from '../../components/auth/auth';

const Inventory = () => {
  return (
    <>
      <Navbar />
      <Box h="100vh" w="fill" px={10} py={5}>
        <Heading mb={10}>Inventory</Heading>
        <InventoryTable />
      </Box>
    </>
  );
};

export default Inventory;
