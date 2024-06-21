import { Link, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

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

  const { url } = usePage()

  // TODO trigger Submenu
  useEffect(() => {
    if (item.children) {
      item.children.forEach((childrenItem) => {
        if (url.startsWith(childrenItem.url) && childrenItem.url) {
          setIsOpen(true)
        }
      })
    }
  }, [url, item.children])

  const toggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen((prevState) => !prevState)

    return () => setIsOpen(false)
  }

  return (
    <>
      {/* Main menu */}
      <li className="w-full">
        <Link
          className={`active:green-cyan-600 flex flex-row justify-between gap-2 whitespace-nowrap px-4 py-3 text-gray-500 hover:rounded-r-2xl hover:border-l-2 hover:border-cyan-600 hover:bg-green-600 hover:text-white dark:text-gray-200 ${
            url === item.url || isOpen
              ? 'rounded-r-2xl border-l-2 border-cyan-600 bg-green-600 text-white'
              : ''
          }`}
          href={item.url || '#'}
          preserveScroll
          preserveState
          onClick={item.children ? (e) => toggle(e) : undefined}>
          <div className="flex gap-3">
            <div className="text-lg">{item.icon}</div>
            <div className="text-xs md:text-sm">{item.title}</div>
          </div>
          <div className={isOpen ? 'rotate-180' : ''}>{item.children ? item.subMenuIcon : null}</div>
        </Link>

        {/* Submenu*/}
        {item.children && (
          <div
            className={`overflow-hidden whitespace-nowrap bg-slate-100 transition-all duration-500 dark:bg-slate-700 dark:text-gray-300 ${
              isOpen ? 'max-h-screen' : 'max-h-0'
            }`}>
            <ul className="my-3 ml-5 space-y-5 border-l-2 border-cyan-500 py-2 pl-7 text-slate-500">
              {item.children.map((childrenItem, index) => (
                <li key={index}>
                  <Link
                    href={childrenItem.url}
                    preserveScroll
                    preserveState
                    className={`border-b-8 hover:border-cyan-600 hover:text-cyan-600 active:border-[#A5DD9B] ${
                      url === childrenItem.url ? 'text-cyan-600' : ''
                    }`}>
                    <div className="flex gap-3">
                      <div className="text-sm">{childrenItem.icon}</div>
                      <div className="text-xs md:text-sm">{childrenItem.title}</div>
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
