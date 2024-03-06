import { Link } from '@inertiajs/react'
import React, { PropsWithChildren, useState } from 'react'

interface SidebarItemProps {
  item: {
    title: string
    url?: any
    icon: React.ReactNode // Adjust this type as per your needs
    subMenuIcon: React.ReactNode // Adjust this type as per your needs
    children?: Array<{
      title: string
      url: string
      icon: React.ReactNode // Adjust this type as per your needs
    }>
  }
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    console.log('sds')
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* main menu */}
      <li className="w-[100%]">
        <Link
          className="flex flex-row py-2 justify-between gap-2  hover:border-l-2 hover:text-[#A5DD9B] hover:border-[#A5DD9B] active::text-[#A5DD9B] active:border-[#A5DD9B] px-4"
          href={item.url || '#'}
          onClick={item.children ? (e) => toggle(e) : undefined}>
          <div className="flex gap-3">
            <div className="text-[12px]">{item.icon}</div>
            <div className="text-[12px]">{item.title}</div>
          </div>

          <div className={isOpen ? 'rotate-180' : 'null'}>{item.children ? item.subMenuIcon : null}</div>
        </Link>

        {/* submenu children */}
        {item.children && (
          <div className={`overflow-hidden transition-all duration-[300] ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <ul className=" border-l-2 border-cyan-500 pl-7 py-2 text-xs space-y-3 bg-slate-100">
              {item.children.map((childrenItem, index) => (
                <li key={index}>
                  <Link href={childrenItem.url} className="hover:text-[#A5DD9B] hover:border-[#A5DD9B] active::text-[#A5DD9B] active:border-[#A5DD9B]">
                    <div className="flex gap-3">
                      <div className="text-[12px]">{childrenItem.icon}</div>
                      <div className="text-[10px]">{childrenItem.title}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </>
  )
}

export default SidebarItem
