import React, { PropsWithChildren, ReactChildren } from 'react'

const SpanLabel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <span className="white flex items-center gap-2 text-[10px] font-bold text-gray-700 dark:text-gray-400 md:text-xs">
        {children}
      </span>
    </>
  )
}

export default SpanLabel
