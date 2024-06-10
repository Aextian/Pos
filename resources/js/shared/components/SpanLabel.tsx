import React, { PropsWithChildren, ReactChildren } from 'react'

const SpanLabel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <span className="text-[10px] md:text-xs font-bold text-gray-700 dark:text-gray-400 white flex items-center gap-2">
        {children}
      </span>
    </>
  )
}

export default SpanLabel
