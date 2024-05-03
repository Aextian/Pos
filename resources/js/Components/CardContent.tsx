import React, { PropsWithChildren } from 'react'

const CardContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid gap-5">{children}</div>
}

export default CardContent
