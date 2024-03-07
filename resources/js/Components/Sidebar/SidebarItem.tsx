import { Link, usePage } from '@inertiajs/react'
import React, { PropsWithChildren, useEffect, useState } from 'react'

interface SidebarItemProps {
  item: {
    title: string
    url?: any
    icon: React.ReactNode // Adjust this type as per your needs
    subMenuIcon?: React.ReactNode // Adjust this type as per your needs
    children?: Array<{
      title: string
      url: string
      icon: React.ReactNode // Adjust this type as per your needs
    }>
  }
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { url, component } = usePage()

  const toggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* main menu */}
      <li className="w-[100%]">
        <Link
          className={`flex flex-row py-2 justify-between gap-2  hover:border-l-2 hover:text-white hover:border-yellow-600 hover:bg-cyan-600 active:border-cyan-600 px-4 ${
            url === item.url || isOpen ? 'border-yellow-600 border-l-2 bg-cyan-600 text-white' : ''
          }`}
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
              {item.children.map((childrenItem, index) => {
                if (childrenItem.url === url) {
                  useEffect(() => {
                    setIsOpen(true)
                    return () => {
                      setIsOpen(false)
                    }
                  }, [])
                }
                return (
                  <li key={index}>
                    <Link href={childrenItem.url} className={`border-b-8  hover:text-cyan-600 hover:border-cyan-600 active:border-[#A5DD9B] ${url === childrenItem.url ? 'text-cyan-600' : ''}`}>
                      <div className="flex gap-3">
                        <div className="text-[12px]">{childrenItem.icon}</div>
                        <div className="text-[10px]">{childrenItem.title}</div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </li>
    </>
  )
}

export default SidebarItem
