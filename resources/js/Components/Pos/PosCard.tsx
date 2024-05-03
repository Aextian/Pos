import React, { PropsWithChildren } from 'react'

const PosCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-gray-300 min-h-screen grid grid-cols-1 p-5">{children}</div>
}

export default PosCard
