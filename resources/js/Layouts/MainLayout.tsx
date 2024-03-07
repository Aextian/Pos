import sidebarData from '@/Components/Sidebar/SidebarData'
import SidebarItem from '@/Components/Sidebar/SidebarItem'
import React, { PropsWithChildren, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'

import { FaWindowClose, FaChartPie, FaCalculator, FaMoneyBill } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* header */}
      <div className="w-screen h-[60px] bg-cyan-500">
        <div className="flex items-center justify-between  p-5">
          <div className="flex gap-10 justify-center items-center">
            <button onClick={toggleSidebar}>
              <CiMenuBurger size={24} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-7">
            <button className="border text-sm p-1 rounded-lg hover:bg-cyan-50">Price Check</button>

            <a className="text-white bg-lime-700 hover:bg-lime-300 p-2 " href="">
              <FaCalculator size={11} />
            </a>
            <a className="text-white bg-lime-700 hover:bg-lime-300 px-2  " href="">
              Z
            </a>

            <a className="text-white bg-lime-700 hover:bg-lime-300 px-2  " href="">
              <span>X</span>
            </a>

            <a className="border rounded-sm hover:bg-cyan-50 px-2 " href="">
              <span className="text-[10px]">POS</span>
            </a>
            <a className="text-white bg-lime-700 hover:bg-lime-300 p-2 " href="">
              <FaMoneyBill size={11} />
            </a>

            <div>
              <span className="text-white text-xs font-bold">02/29/24</span>
            </div>
            <a className="text-white" href="">
              <IoIosNotifications size={20} />
            </a>

            <div className="text-white text-xs">POS</div>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div className={`z-10 h-screen w-48 top-0 bg-white fixed shadow-lg overflow-auto transition-all duration-300 ease-in-out ${isOpen ? 'left-[0] ' : 'left-[-250px]'}`}>
        <div className="p-5 flex justify-between border-b-2">
          <h2>Logo</h2>
          <button onClick={toggleSidebar}>
            <FaWindowClose size={24} />
          </button>
        </div>

        <div className="mt-5">
          <ul className="flex flex-col gap-3 items-start justify-start text-[.8rem] md:text-[.9rem] ">
            {sidebarData.map((item, index) => (
              <SidebarItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
      {/* Main Content */}
      {children}
    </>
  )
}

export default MainLayout
