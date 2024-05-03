import React, { PropsWithChildren } from 'react'

const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1 className="text-sm md:text-lg font-bold dark:text-white">{children}</h1>
    </>
  )
}

export default CardTitle
