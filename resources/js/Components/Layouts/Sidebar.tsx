import React from 'react'
import sidebarData from '@/Components/Sidebar/SidebarData'
import SidebarItem from '../Sidebar/SidebarItem'
import { FaWindowClose } from 'react-icons/fa'

interface ButtonProps {
  handleClick: () => void
  isOpen: boolean
}
const Sidebar: React.FC<ButtonProps> = ({ handleClick, isOpen }) => {
  return (
    <div
      className={`z-10 h-screen w-48 md:w-64 top-0 bg-white dark:text-white dark:bg-slate-700 fixed shadow-lg overflow-auto transition-all duration-700 ease-in-out ${
        isOpen ? 'left-[0] ' : 'left-[-280px]'
      }`}>
      <div className="p-5 flex justify-between border-b-2">
        <h2>Logo</h2>
        <button onClick={handleClick}>
          <FaWindowClose size={24} />
        </button>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col gap-3 items-start justify-start text-[.8rem] md:text-[.9rem]  font-bold ">
          {sidebarData.map((item, index) => (
            <SidebarItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
