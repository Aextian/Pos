import React, { PropsWithChildren } from 'react'

const TableHead: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <thead className="text-[10px] lg:text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">{children}</thead>
    </>
  )
}
export default TableHead
