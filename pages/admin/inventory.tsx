import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/admin/shared/navbar/navbar';
import { withAuth } from '../../components/auth/auth';

const Inventory = () => {
  return (
    <>
      <Navbar />
      <Box h="100vh" w="fill" p={10}>
        <Heading>Inventory</Heading>
      </Box>
    </>
  )
}

export default withAuth(Inventory);