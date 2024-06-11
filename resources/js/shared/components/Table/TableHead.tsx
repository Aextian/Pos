import React, { PropsWithChildren } from 'react'

interface TableProps extends React.FC<PropsWithChildren> {
  Row: React.FC<PropsWithChildren>
}
const TableHead: TableProps = ({ children, ...props }) => {
  return (
    <>
      <thead
        className="bg-gray-50 text-[10px] font-bold uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400 lg:text-xs"
        {...props}
      >
        {children}
      </thead>
    </>
  )
}

const Row: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <tr>{children}</tr>
    </>
  )
}

TableHead.Row = Row

export default TableHead
