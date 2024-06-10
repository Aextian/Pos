import React, { PropsWithChildren } from 'react'

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="p-5 md:px-10 mt-14  dark:bg-slate-900 min-h-screen">
      <div className="h-full space-y-5">{children}</div>
    </main>
  )
}

export default MainContent
