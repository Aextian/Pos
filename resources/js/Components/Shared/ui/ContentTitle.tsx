import React, { PropsWithChildren } from 'react'

const ContentTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg font-extrabold dark:text-white tracking-wide">{children}</h1>
    </div>
  )
}
export default ContentTitle
