import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaCalculator, FaMoneyBill } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoMoon, IoSunny } from 'react-icons/io5'
import Calculator from '../../Header/Calculator'
import Notification from '../../Header/Notification'
import Profile from '../../Header/Profile'

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
      <header className="fixed top-0 z-10 flex h-[58px] w-screen items-center justify-between bg-green-500 px-10 shadow-md">
        <div className="flex items-center justify-center gap-10 text-white">
          <button onClick={handleClick}>
            <CiMenuBurger />
          </button>
        </div>

        <div className="flex items-center justify-center gap-40">
          <div className="hidden items-center text-xs font-bold text-white md:flex md:gap-5 lg:gap-7 lg:text-lg">
            <button className="rounded-br-lg rounded-tl-lg border-slate-500 bg-lime-700 px-3 py-1 hover:bg-lime-800">
              Price Check
            </button>

            <div className="relative flex items-center justify-center">
              <button
                className="inline-flex h-6 items-center rounded-br-lg rounded-tl-lg border-slate-500 bg-lime-700 px-3 hover:bg-lime-800 lg:h-10"
                onClick={() => dropdownToggle('Calculator')}
              >
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

            <button className="inline-flex h-6 items-center rounded-br-lg rounded-tl-lg border border-slate-500 bg-lime-700 px-3 hover:bg-lime-800 lg:h-10">
              Z
            </button>

            <a className="inline-flex h-6 items-center rounded-br-lg rounded-tl-lg border border-slate-500 bg-lime-700 px-3 hover:bg-lime-800 lg:h-10">
              <span>X</span>
            </a>

            <button className="inline-flex h-6 items-center rounded-br-lg rounded-tl-lg border-slate-500 bg-lime-700 px-3 hover:bg-lime-800 lg:h-10">
              <span>POS</span>
            </button>

            <a
              className="inline-flex h-6 items-center rounded-br-lg rounded-tl-lg border border-slate-500 bg-lime-700 p-2 px-3 hover:bg-lime-800 lg:h-10"
              href=""
            >
              <FaMoneyBill />
            </a>
          </div>

          <div className="flex h-full items-center gap-10">
            <div className="relative">
              <button
                className="text-xs text-white md:text-xl"
                onClick={() => dropdownToggle('Notification')}
              >
                <IoIosNotifications size={20} />
              </button>
              {/* notification */}
              <Notification notification={notification} />
            </div>

            <div>
              <button className="text-sm md:text-xl" onClick={() => darkModeHandler()}>
                {dark && <IoSunny className="dark:text-white" />}
                {!dark && <IoMoon />}
              </button>
            </div>

            <div className="relative">
              <button
                className="text-xs font-bold text-white md:text-lg"
                onClick={() => dropdownToggle('Profile')}
              >
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
