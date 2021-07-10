import { Box, Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import {
  IoAnalyticsOutline,
  IoBarcodeOutline,
  IoDocumentOutline,
  IoEyeOutline,
  IoLayersOutline,
  IoMenu,
} from 'react-icons/io5';
import DataTable from '../../shared/table/data-table';

const InventoryTable = (props: any) => {
  const data = React.useMemo(
    () => [
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
        state: 'Active',
      },
      {
        sku: 'ABC123',
        desc: 'Keyboard 1',
        group: 'Group A',
        stock: '4',
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
            <Heading size="xs" blue>
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
            <Heading size="xs" color="#3c495e">
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
            <Heading size="xs" color="#3c495e">
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
            <Heading size="xs" color="#3c495e">
              Stock
            </Heading>
          </HStack>
        ),
        accessor: 'stock',
      },
      {
        Header: () => (
          <HStack>
            <Icon as={IoEyeOutline} boxSize={5} />
            <Heading size="xs" color="#3c495e">
              Status
            </Heading>
          </HStack>
        ),
        accessor: 'state',
      },
    ],
    []
  );

  return <DataTable columns={columns} data={data} />;
};

export default InventoryTable;
