import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import OrdersTable from '../../components/admin/orders/orders-table';
import Navbar from '../../components/admin/shared/navbar/navbar';

const Orders = () => {
  return (
    <>
      <Navbar />
      <Box h="100vh" w="fill" px={10} py={5}>
        <Heading mb={10} size="lg">Orders</Heading>
        <OrdersTable />
      </Box>
    </>
  );
};

export default Orders;
