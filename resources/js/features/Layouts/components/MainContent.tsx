import React, { PropsWithChildren, ReactNode } from 'react'

type Props = {
  isOpen: boolean
  children: ReactNode
}
const MainContent: React.FC<Props> = ({ children, isOpen }) => {
  return (
    <main
      className={`mt-14 min-h-screen space-y-5 p-5 transition-all duration-500 ease-in-out dark:bg-slate-900 md:px-10 ${
        isOpen ? 'lg:ml-[250px]' : ''
      }`}>
      {children}
    </main>
  )
}

export default MainContent
