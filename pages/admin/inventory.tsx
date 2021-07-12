import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatLabel,
  StatNumber,
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
          <Button background="black" color="white" size="sm" leftIcon={<IoFilterOutline />}>
            Filter
          </Button>
          <Box w="25%">
            <InputGroup>
              <Input
                size="sm"
                focusBorderColor="#556785"
                placeholder="Search"
              />
            </InputGroup>
          </Box>
          <Spacer />
          <HStack direction="column-reverse">
            <Button
              background="black"
              color="white"
              size="sm"
              leftIcon={<IoArrowDownCircleOutline />}
            >
              Import
            </Button>
            <Button
              background="black"
              color="white"
              size="sm"
              leftIcon={<IoArrowUpCircleOutline />}
            >
              Export
            </Button>
          </HStack>
        </HStack>
        <InventoryTable />
        <StatGroup mt={10} >
          <Stat>
            <StatLabel>Test</StatLabel>
            <StatNumber>0.00</StatNumber>
            <StatArrow type="increase" />
          </Stat>
          <Stat>
            <StatLabel>Test</StatLabel>
            <StatNumber>0.00</StatNumber>
            <StatArrow type="increase" />
          </Stat>
          <Stat>
            <StatLabel>Test</StatLabel>
            <StatNumber>0.00</StatNumber>
            <StatArrow type="increase" />
          </Stat>
          <Stat>
            <StatLabel>Test</StatLabel>
            <StatNumber>0.00</StatNumber>
            <StatArrow type="increase" />
          </Stat>
        </StatGroup>
      </Box>
    </>
  );
};

export default Inventory;
