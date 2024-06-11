import React, { PropsWithChildren } from 'react'

interface TableProps extends React.FC<PropsWithChildren> {
  Row: React.FC<PropsWithChildren>
}

const TableBody: TableProps = ({ children, ...props }) => {
  return (
    <>
      <tbody {...props}>{children}</tbody>
    </>
  )
}

const Row: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <>
      <tr
        {...props}
        className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
      >
        {children}
      </tr>
    </>
  )
}

TableBody.Row = Row

export default TableBody
