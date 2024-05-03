import { Link } from '@inertiajs/react'
import React, { PropsWithChildren } from 'react'

const CardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex justify-between">{children}</div>
}

export default CardHeader
