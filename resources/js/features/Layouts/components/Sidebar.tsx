import React from 'react'
import sidebarData from '@/features/Sidebar/SidebarData'
import SidebarItem from '../../Sidebar/SidebarItem'
import exampleImage from '../images/example.jpg'
import { FaWindowClose } from 'react-icons/fa'
import TestLogo from '/img/test-logo.jpg'

interface ButtonProps {
  handleClick: () => void
  isOpen: boolean
}
const Sidebar: React.FC<ButtonProps> = ({ handleClick, isOpen }) => {
  return (
    <div
      className={`fixed top-0 z-10 mt-[3.7rem] h-[calc(100%-3.7rem)] w-48 overflow-y-auto bg-white shadow-lg transition-all duration-500 ease-in-out scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-300 dark:bg-slate-700 dark:text-white md:w-64 ${
        isOpen ? 'left-[0]' : 'left-[-280px]'
      }`}>
      <div>
        {/* sidebar logo */}
        <div className="flex justify-between border-b-2 p-4">
          <img src="/img/test-logo.jpg" width="75" height="100" alt="" className="logo_normal" />
        </div>
        {/* sidebar item */}
        <div className="mt-5">
          <ul className="flex flex-col items-start justify-start gap-3">
            {sidebarData.map((item, index) => (
              <SidebarItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
