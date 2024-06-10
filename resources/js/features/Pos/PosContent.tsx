import React, { PropsWithChildren } from 'react'

const PosContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="border-t-4 border-cyan-600 bg-white  p-3 flex flex-col gap-5 place-content-start">{children}</div>
}

export default PosContent
