import React from 'react';
import { Column, useTable } from 'react-table';
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from '@chakra-ui/react';

type Props = {
  columns: any;
  data: any; // FIXME: generalize type for data
  size?: string | undefined;
};

const DataTable = ({ columns, data, size }: Props) => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Table size={size} {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <Tr key={key} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key, ...restOfHeaderProps } = column.getHeaderProps();
                return (
                  <Th key={key} {...restOfHeaderProps}>
                    {column.render('Header')}
                  </Th>
                );
              })}
            </Tr>
          );
        })}
      </Thead>
      <Tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          const { key, ...restOfRowProps } = row.getRowProps();
          return (
            <Tr
              _hover={{ background: 'gray.100' }}
              key={key}
              {...restOfRowProps}
            >
              {row.cells.map((cell) => {
                const { key, ...restOfCellProps } = cell.getCellProps();
                return (
                  <Td key={key} {...restOfCellProps}>
                    {cell.render('Cell')}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DataTable;
