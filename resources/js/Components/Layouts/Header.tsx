import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaCalculator, FaMoneyBill } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoMoon, IoSunny } from 'react-icons/io5'
import SecondaryButton from '../SecondaryButton'
import { Link } from '@inertiajs/react'
import Calculator from '../Header/Calculator'
import Notification from '../Header/Notification'
import Profile from '../Header/Profile'

interface ButtonProps {
  handleClick: () => void
}

const Header: React.FC<ButtonProps> = ({ handleClick }) => {
  const [dark, setDark] = React.useState(false)

  const [profile, ShowProfile] = useState(false)
  const [calcutor, showCalculator] = useState(false)

  const [notification, showNotification] = useState(false)

  const dropdownToggle = (name: string) => {
    if (name === 'Profile') {
      ShowProfile(!profile)
      showNotification(false)
      showCalculator(false)
    }
    if (name === 'Notification') {
      showNotification(!notification)
      showCalculator(false)

      ShowProfile(false)
    }
    if (name === 'Calculator') {
      showCalculator(!calcutor)
      ShowProfile(false)
      showNotification(false)
    }
  }

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

  const [input, setInput] = useState('')

  const handleButtonClick = (value: string) => {
    setInput(input + value)
  }

  const clearInput = () => {
    setInput('')
  }

  const calculateResult = () => {
    try {
      const result = eval(input)
      setInput(result.toString())
    } catch (error) {
      setInput('Error')
    }
  }

  return (
    <>
      <header className="w-screen h-[60px] bg-cyan-500 top-0 fixed z-10 flex items-center justify-between px-10">
        <div className="flex gap-10 justify-center items-center text-white ">
          <button onClick={handleClick}>
            <CiMenuBurger />
          </button>
        </div>
        <div className="flex gap-40 justify-center items-center">
          <div className="hidden md:flex items-center md:gap-5 lg:gap-7 font-bold text-xs lg:text-lg text-white">
            <button className="border border-slate-500 bg-lime-700 p-1 hover:bg-lime-800">Price Check</button>

            <div className="relative  flex justify-center items-center">
              <button className=" bg-lime-700 border border-slate-500 hover:bg-lime-800 p-3 h-6 lg:h-10 inline-flex items-center " onClick={() => dropdownToggle('Calculator')}>
                <FaCalculator size={11} />
              </button>
              <Calculator handleButtonClick={handleButtonClick} input={input} setInput={setInput} clearInput={clearInput} calculateResult={calculateResult} calcutor={calcutor} />
            </div>

            <a className=" bg-lime-700 border border-slate-500 hover:bg-lime-800 px-3 h-6  lg:h-10 inline-flex items-center  " href="">
              Z
            </a>

            <a className=" bg-lime-700 border border-slate-500 hover:bg-lime-800 px-3 h-6 lg:h-10 inline-flex items-center " href="">
              <span>X</span>
            </a>

            <a className="border bg-lime-700  border-slate-500 rounded-sm hover:bg-lime-800 px-3 h-6 lg:h-10 inline-flex items-center" href="">
              <span>POS</span>
            </a>

            <a className=" bg-lime-700 border border-slate-500 hover:bg-lime-800 p-2 h-6 lg:h-10 inline-flex items-center " href="">
              <FaMoneyBill />
            </a>
          </div>

          <div className="flex items-center gap-10 h-full">
            <div className="relative">
              <button className="text-white text-xs md:text-xl " onClick={() => dropdownToggle('Notification')}>
                <IoIosNotifications size={20} />
              </button>
              {/* notification */}
              <Notification notification={notification} />
            </div>

            <div>
              <button className="text-sm md:text-xl " onClick={() => darkModeHandler()}>
                {dark && <IoSunny className="dark:text-white" />}
                {!dark && <IoMoon />}
              </button>
            </div>

            <div className="relative">
              <button className="text-white text-xs md:text-lg  font-bold " onClick={() => dropdownToggle('Profile')}>
                POS
              </button>
              {/* user profile */}
              <Profile profile={profile} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
