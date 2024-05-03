import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaCalculator, FaMoneyBill } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoMoon, IoSunny } from 'react-icons/io5'

interface ButtonProps {
  handleClick: () => void
}

const Header: React.FC<ButtonProps> = ({ handleClick }) => {
  const [dark, setDark] = React.useState(false)

  const darkModeHandler = () => {
    setDark(!dark)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
    document.body.classList.toggle('dark')
  }
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDark(true)
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <>
      <div className="w-screen h-[60px] bg-cyan-500 top-0 fixed z-10">
        <div className="flex items-center justify-between  p-5">
          <div className="flex gap-10 justify-center items-center text-white">
            <button onClick={handleClick}>
              <CiMenuBurger size={24} />
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => darkModeHandler()}>
              {dark && <IoSunny className="dark:text-white" />}
              {!dark && <IoMoon />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-7">
            <button onClick={() => darkModeHandler()}>
              {dark && <IoSunny className="dark:text-white" />}
              {!dark && <IoMoon />}
            </button>
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
          {/* <div>
                        <Link href={route('logout')} method="post" as="button" className="text-white bg-lime-700 hover:bg-lime-300 p-2 rounded-lg">
                            Logout
                        </Link>
                    </div> */}
        </div>
      </div>
    </>
  )
}

export default Header
