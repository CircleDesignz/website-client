import React, { useMemo } from 'react';
import DataTable from '../../shared/table/data-table';

const OrdersTable = () => {
  const data = useMemo(() => [
    {
      id: "12345",
      customer: "Charlie M."
    }
  ], [])

  const columns = useMemo(() => [
    {
      Header: "Order #",
      accessor: "id"
    },
    {
      Header: "Customer",
      accessor: "customer"
    }
  ], [])

  return (
    <>
      <DataTable size="sm" columns={columns} data={data} />
    </>
  )
}

export default OrdersTable;