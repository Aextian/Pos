import React, { PropsWithChildren } from 'react'

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mt-14 min-h-screen p-5 dark:bg-slate-900 md:px-10">
      <div className="h-full space-y-5">{children}</div>
    </main>
  )
}

export default MainContent
