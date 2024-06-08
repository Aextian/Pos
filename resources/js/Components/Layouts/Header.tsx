import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaCalculator, FaMoneyBill } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoMoon, IoSunny } from 'react-icons/io5'
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
      <header className="w-screen h-[58px] bg-green-500 top-0 fixed z-10 flex items-center justify-between px-10 shadow-md">
        <div className="flex gap-10 justify-center items-center text-white ">
          <button onClick={handleClick}>
            <CiMenuBurger />
          </button>
        </div>

        <div className="flex gap-40 justify-center items-center">
          <div className="hidden md:flex items-center md:gap-5 lg:gap-7 font-bold text-xs lg:text-lg text-white">
            <button className="px-3 py-1 rounded-tl-lg rounded-br-lg border-slate-500 bg-lime-700  hover:bg-lime-800 ">
              Price Check
            </button>

            <div className="relative flex justify-center items-center">
              <button
                className="px-3 rounded-tl-lg rounded-br-lg bg-lime-700  border-slate-500 hover:bg-lime-800  h-6 lg:h-10 inline-flex items-center "
                onClick={() => dropdownToggle('Calculator')}>
                <FaCalculator size={13} />
              </button>
              <Calculator
                handleButtonClick={handleButtonClick}
                input={input}
                setInput={setInput}
                clearInput={clearInput}
                calculateResult={calculateResult}
                calcutor={calcutor}
              />
            </div>

            <button className=" px-3 rounded-tl-lg rounded-br-lg bg-lime-700 border border-slate-500 hover:bg-lime-800 h-6  lg:h-10 inline-flex items-center  ">
              Z
            </button>

            <a className=" px-3 rounded-tl-lg rounded-br-lg bg-lime-700 border border-slate-500 hover:bg-lime-800 h-6 lg:h-10 inline-flex items-center ">
              <span>X</span>
            </a>

            <button className="rounded-tl-lg rounded-br-lg px-3 bg-lime-700  border-slate-500 hover:bg-lime-800  h-6 lg:h-10 inline-flex items-center">
              <span>POS</span>
            </button>

            <a
              className=" rounded-tl-lg rounded-br-lg px-3 bg-lime-700 border border-slate-500 hover:bg-lime-800 p-2 h-6 lg:h-10 inline-flex items-center "
              href="">
              <FaMoneyBill />
            </a>
          </div>

          <div className="flex items-center gap-10 h-full">
            <div className="relative">
              <button
                className="text-white text-xs md:text-xl "
                onClick={() => dropdownToggle('Notification')}>
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
              <button
                className="text-white text-xs md:text-lg  font-bold "
                onClick={() => dropdownToggle('Profile')}>
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
