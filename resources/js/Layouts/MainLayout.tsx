import Header from '@/Components/Layouts/Header'
import MainContent from '@/Components/Layouts/MainContent'
import Sidebar from '@/Components/Layouts/Sidebar'
import React, { PropsWithChildren, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.min.css'
import 'react-toastify/dist/ReactToastify.css'
const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ToastContainer />
      <Header handleClick={handleClick} />
      <Sidebar handleClick={handleClick} isOpen={isOpen} />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default MainLayout
