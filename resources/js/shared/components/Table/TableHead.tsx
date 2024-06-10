import React, { PropsWithChildren } from 'react'

interface TableProps extends React.FC<PropsWithChildren> {
  Row: React.FC<PropsWithChildren>
}
const TableHead: TableProps = ({ children, ...props }) => {
  return (
    <>
      <thead
        className="text-[10px] lg:text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 "
        {...props}>
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
