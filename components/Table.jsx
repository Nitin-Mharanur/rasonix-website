import React from 'react'
import DataTable from 'react-data-table-component'
const Table = ({columns,data,pagination,fixedHeader}) => {
  return (
    <div>
    <DataTable columns={columns} data={data} pagination={pagination} fixedHeader={fixedHeader} />
    </div>
  )
}

export default Table