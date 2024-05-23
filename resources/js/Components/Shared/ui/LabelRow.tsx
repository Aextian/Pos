import React, { PropsWithChildren } from 'react'

const LabelRow: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <label className="space-y-2">{children}</label>
    </>
  )
}

export default LabelRow
