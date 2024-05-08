import React, { PropsWithChildren } from 'react'

const Table: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right  text-gray-400 dark:text-gray-400">{children}</table>
      </div>
    </>
  )
}

export default Table
