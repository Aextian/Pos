import React, { PropsWithChildren } from 'react'

const Table: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md scrollbar-thin sm:rounded-lg">
        <table className="w-full text-left text-gray-400 dark:text-gray-400 rtl:text-right">{children}</table>
      </div>
    </>
  )
}

export default Table
