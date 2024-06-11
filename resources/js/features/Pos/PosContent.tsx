import React, { PropsWithChildren } from 'react'

const PosContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col place-content-start gap-5 border-t-4 border-cyan-600 bg-white p-3">
      {children}
    </div>
  )
}

export default PosContent
