import React, { PropsWithChildren } from 'react'

const PosCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid min-h-screen grid-cols-1 bg-gray-300 p-5">{children}</div>
}

export default PosCard
