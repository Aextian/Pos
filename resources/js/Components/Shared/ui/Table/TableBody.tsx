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
        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        {children}
      </tr>
    </>
  )
}

TableBody.Row = Row

export default TableBody
