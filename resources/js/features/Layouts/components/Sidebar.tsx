import React from 'react'
import sidebarData from '@/features/Sidebar/SidebarData'
import SidebarItem from '../../Sidebar/SidebarItem'
import { FaWindowClose } from 'react-icons/fa'

interface ButtonProps {
  handleClick: () => void
  isOpen: boolean
}
const Sidebar: React.FC<ButtonProps> = ({ handleClick, isOpen }) => {
  return (
    <div
      className={`fixed top-0 z-10 mt-[3.7rem] h-[calc(100%-3.7rem)] w-48 overflow-y-scroll bg-white shadow-lg transition-all duration-500 ease-in-out scrollbar-thin dark:bg-slate-700 dark:text-white md:w-64 ${
        isOpen ? 'left-[0]' : 'left-[-280px]'
      }`}>
      <div>
        {/* sidebar logo */}
        <div className="flex justify-between border-b-2 p-4">
          <h2>Logo</h2>
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
