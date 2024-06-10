import React, { useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import {
  FaWindowClose,
  FaChartPie,
  FaCartArrowDown,
  FaMoneyBill,
  FaShieldAlt,
  FaWarehouse,
  FaCalculator,
} from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { TbReportSearch } from 'react-icons/tb'
import { IoIosNotificationsOutline, IoIosWarning } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'
import { FaUsersLine } from 'react-icons/fa6'
import TextInput from '@/shared/components/TextInput'
const Post = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* header */}
      <div className="w-screen h-[60px] bg-cyan-500">
        <div className="flex items-center justify-between  p-5">
          <div className="flex gap-10 justify-center items-center">
            <button onClick={toggleSidebar}>
              <CiMenuBurger size={24} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-7">
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
              <IoIosNotificationsOutline size={20} />
            </a>

            <div className="text-white text-xs">POS</div>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`h-screen w-48 top-0 bg-white fixed shadow-lg overflow-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'left-[-250px]' : 'left-[0]'
        }`}>
        <div className="p-5 flex justify-between border-b-2">
          <h2>Logo</h2>
          <button onClick={toggleSidebar}>
            <FaWindowClose size={24} />
          </button>
        </div>

        <div className="mt-5">
          <ul className="flex flex-col gap-3 items-start justify-start text-[.8rem] md:text-[.9rem] ">
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Stock Alert
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <MdOutlineProductionQuantityLimits size={18} />
                Products
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaCartArrowDown size={18} />
                Cart
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaMoneyBill size={18} />
                Money
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaUsersLine size={18} />
                Users
                <FiChevronDown size={18} />
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaShieldAlt size={18} />
                Roles/Permission
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaWarehouse size={18} />
                Warehouse
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <TbReportSearch size={18} />
                Reports
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <IoSettings size={18} />
                Settings
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row py-2 justify-start gap-3  hover:border-l-4 hover:text-[#A5DD9B] hover:border-[#A5DD9B] px-4"
                href="">
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* content */}

      <div className=" h-screen bg-slate-200 w-screen py-5 md:px-10">
        <div className="mb-10 px-5 md:px-2">
          <h1 className="text-lg">Welcome Mlya Pos</h1>
        </div>
        {/* date */}

        {/* btn group */}
        <div className="flex flex-wrap rounded-md shadow-sm mb-5 mx-5">
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            Profile
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            Settings
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            Messages
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            This Financial Year
          </button>
          <TextInput type="date" />
        </div>

        <div className="flex gap-5 flex-wrap">
          <div className=" flex justify-between  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-cyan-500">
            <div className="bg-cyan-600 flex items-center justify-center text-white p-4">
              <FaMoneyBill size={48} />
            </div>

            <div className="grid grid-flow-row-[auto_1fr_auto]">
              <h2 className="text-sm">TOTAL STOCK VALUE</h2>
              <p className="text-xs">(TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT)</p>
              <p className="text-sm font-extrabold">= Php 0.00</p>
            </div>
          </div>

          <div className=" flex justify-between bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-cyan-500">
            <div className="bg-cyan-600 flex items-center justify-center text-white p-4">
              <FaMoneyBill size={48} />
            </div>

            <div className="grid grid-flow-row-[auto_1fr_auto]">
              <h2 className="text-sm">TOTAL STOCK VALUE</h2>
              <p className="text-xs">(TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT)</p>
              <p className="text-sm font-extrabold">= Php 0.00</p>
            </div>
          </div>

          <div className=" flex justify-between bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-cyan-500">
            <div className="bg-cyan-600 flex items-center justify-center text-white p-4">
              <FaMoneyBill size={48} />
            </div>

            <div className="grid grid-flow-row-[auto_1fr_auto]">
              <h2 className="text-sm">TOTAL STOCK VALUE</h2>
              <p className="text-xs">(TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT)</p>
              <p className="text-sm font-extrabold">= Php 0.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-5 flex-col md:flex-row flex-wrap mt-5">
          <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700">
            <div className="flex items-center justify-start gap-2">
              <IoIosWarning size={20} />
              <h1 className="text-md">Sales Payment Due</h1>
            </div>
            <div className="grid gap-3 grid-flow-col-[1fr_1fr_1fr] shadow-sm bg-slate-50 rounded-xl p-3 text-xs">
              <div>
                Customer: <span>Walk-in Customer</span>
              </div>
              <div>
                Invoice No. <span>S-0000000019</span>
              </div>
              <div>
                Due Amount: <span>Php 1,1433.13</span>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700">
            <div className="flex items-center justify-start gap-2">
              <IoIosWarning size={20} />
              <h1 className="text-md">Purchase Payment Due</h1>
            </div>

            <div className="grid gap-3 grid-flow-col-[1fr_1fr_1fr] shadow-sm bg-slate-50 rounded-xl p-3 text-xs">
              <div>
                Customer: <span>Walk-in Customer</span>
              </div>
              <div>
                Invoice No. <span>S-0000000019</span>
              </div>
              <div>
                Due Amount: <span>Php 1,1433.13</span>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700">
            <div className="flex items-center justify-start gap-2">
              <IoIosWarning size={20} />
              <h1 className="text-md">Stock Expiry Alert</h1>
            </div>

            <div className="grid gap-3 grid-flow-col-[1fr_1fr_1fr] shadow-sm bg-slate-50 rounded-xl p-3 text-xs">
              <div>
                Customer: <span>Walk-in Customer</span>
              </div>
              <div>
                Invoice No. <span>S-0000000019</span>
              </div>
              <div>
                Due Amount: <span>Php 1,1433.13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
