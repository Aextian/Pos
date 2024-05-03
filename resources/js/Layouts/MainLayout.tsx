import Header from '@/Components/Layouts/Header'
import MainContent from '@/Components/Layouts/MainContent'
import Sidebar from '@/Components/Layouts/Sidebar'
import React, { PropsWithChildren, useState } from 'react'
const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header handleClick={handleClick} />

      <Sidebar handleClick={handleClick} isOpen={isOpen} />

      <MainContent>{children}</MainContent>
    </>
  )
}

export default MainLayout
