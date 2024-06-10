import React, { PropsWithChildren } from 'react'
type Props = {
  className?: string
  children?: React.ReactNode
}
const LabelRow: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <label className={`space-y-2 ` + className}>{children}</label>
    </>
  )
}

export default LabelRow
