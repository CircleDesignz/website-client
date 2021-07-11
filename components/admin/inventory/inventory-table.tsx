import { Box, Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import {
  IoAnalyticsOutline,
  IoBarcodeOutline,
  IoDocumentOutline,
  IoEyeOutline,
  IoLayersOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import DataTable from '../../shared/table/data-table';

const InventoryTable = () => {
  const data = React.useMemo(
    () => [
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        location: 'Main',
        state: 'Active',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <HStack>
            <Icon as={IoBarcodeOutline} boxSize={5} />
            <Heading size="xs" color="cDarkBlue">
              SKU
            </Heading>
          </HStack>
        ),
        accessor: 'sku',
      },
      {
        Header: () => (
          <HStack>
            <Icon as={IoDocumentOutline} boxSize={5} />
            <Heading size="xs" color="cDarkBlue">
              Descriptor
            </Heading>
          </HStack>
        ),
        accessor: 'desc',
      },
      {
        Header: () => (
          <HStack>
            <Icon as={IoLayersOutline} boxSize={5} />
            <Heading size="xs" color="cDarkBlue">
              Group
            </Heading>
          </HStack>
        ),
        accessor: 'group',
      },
      {
        Header: () => (
          <HStack>
            <Icon as={IoAnalyticsOutline} boxSize={5} />
            <Heading size="xs" color="cDarkBlue">
              Stock
            </Heading>
          </HStack>
        ),
        accessor: 'stock',
      },
      {
        Header: () => (
          <HStack>
            <Icon as={IoLocationOutline} boxSize={5} />
            <Heading size="xs" color="cDarkBlue">
              Location
            </Heading>
          </HStack>
        ),
        accessor: 'location',
      },
      {
        Header: () => (
          <HStack>
            <Icon as={IoEyeOutline} boxSize={5} />
            <Heading size="xs" color="cDarkBlue">
              Status
            </Heading>
          </HStack>
        ),
        accessor: 'state',
      },
    ],
    []
  );

  return <DataTable size="sm" columns={columns} data={data} />;
};

export default InventoryTable;
