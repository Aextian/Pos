import React, { PropsWithChildren } from 'react'

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="p-5 md:px-10 mt-14 space-y-5 dark:bg-slate-900 min-h-screen">{children}</main>
}

export default MainContent
