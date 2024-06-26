import Header from '@/features/Layouts/components/Header'
import MainContent from '@/features/Layouts/components/MainContent'
import Sidebar from '@/features/Layouts/components/Sidebar'
import React, { PropsWithChildren, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.min.css'
import 'react-toastify/dist/ReactToastify.css'
const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dark:bg-slate-900">
      <ToastContainer />
      <Header handleClick={handleClick} />
      <Sidebar handleClick={handleClick} isOpen={isOpen} />
      <MainContent isOpen={isOpen}>{children}</MainContent>
    </div>
  )
}

export default MainLayout
