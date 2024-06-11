import React, { PropsWithChildren } from 'react'

const TableRow: React.FC<PropsWithChildren> = ({ children, ...props }) => {
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

export default TableRow
