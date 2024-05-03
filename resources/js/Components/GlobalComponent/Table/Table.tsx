import React, { PropsWithChildren } from 'react'

const Table: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <table className="w-full text-left rtl:text-right  text-gray-400 dark:text-gray-400">{children}</table>
    </>
  )
}

export default Table
