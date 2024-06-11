import React, { PropsWithChildren } from 'react'

const ContentTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg font-extrabold tracking-wide dark:text-white">{children}</h1>
    </div>
  )
}
export default ContentTitle
