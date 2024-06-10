import React, { PropsWithChildren } from 'react'

const TableRow: React.FC<PropsWithChildren> = ({ children, ...props }) => {
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

export default TableRow
