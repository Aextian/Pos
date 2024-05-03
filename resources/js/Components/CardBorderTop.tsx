import React, { PropsWithChildren } from 'react'

const CardBorderTop: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className=" grid gap-5 bg-white border-t-4 border-cyan-500  text-xs p-4 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 ">{children}</div>
    </>
  )
}

export default CardBorderTop
