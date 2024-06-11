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
      <div className="h-[60px] w-screen bg-cyan-500">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center justify-center gap-10">
            <button onClick={toggleSidebar}>
              <CiMenuBurger size={24} />
            </button>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <button className="rounded-lg border p-1 text-sm hover:bg-cyan-50">Price Check</button>

            <a className="bg-lime-700 p-2 text-white hover:bg-lime-300" href="">
              <FaCalculator size={11} />
            </a>
            <a className="bg-lime-700 px-2 text-white hover:bg-lime-300" href="">
              Z
            </a>

            <a className="bg-lime-700 px-2 text-white hover:bg-lime-300" href="">
              <span>X</span>
            </a>

            <a className="rounded-sm border px-2 hover:bg-cyan-50" href="">
              <span className="text-[10px]">POS</span>
            </a>
            <a className="bg-lime-700 p-2 text-white hover:bg-lime-300" href="">
              <FaMoneyBill size={11} />
            </a>

            <div>
              <span className="text-xs font-bold text-white">02/29/24</span>
            </div>
            <a className="text-white" href="">
              <IoIosNotificationsOutline size={20} />
            </a>

            <div className="text-xs text-white">POS</div>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`fixed top-0 h-screen w-48 overflow-auto bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'left-[-250px]' : 'left-[0]'
        }`}
      >
        <div className="flex justify-between border-b-2 p-5">
          <h2>Logo</h2>
          <button onClick={toggleSidebar}>
            <FaWindowClose size={24} />
          </button>
        </div>

        <div className="mt-5">
          <ul className="flex flex-col items-start justify-start gap-3 text-[.8rem] md:text-[.9rem]">
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Stock Alert
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <MdOutlineProductionQuantityLimits size={18} />
                Products
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaCartArrowDown size={18} />
                Cart
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaMoneyBill size={18} />
                Money
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaUsersLine size={18} />
                Users
                <FiChevronDown size={18} />
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaShieldAlt size={18} />
                Roles/Permission
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaWarehouse size={18} />
                Warehouse
              </a>
            </li>
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <TbReportSearch size={18} />
                Reports
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <IoSettings size={18} />
                Settings
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>{' '}
            <li className="w-[100%]">
              <a
                className="flex flex-row justify-start gap-3 px-4 py-2 hover:border-l-4 hover:border-[#A5DD9B] hover:text-[#A5DD9B]"
                href=""
              >
                <FaChartPie size={18} />
                Dashhboard
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* content */}

      <div className="h-screen w-screen bg-slate-200 py-5 md:px-10">
        <div className="mb-10 px-5 md:px-2">
          <h1 className="text-lg">Welcome Mlya Pos</h1>
        </div>
        {/* date */}

        {/* btn group */}
        <div className="mx-5 mb-5 flex flex-wrap rounded-md shadow-sm">
          <button
            type="button"
            className="border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            Profile
          </button>
          <button
            type="button"
            className="border-b border-t border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            Settings
          </button>
          <button
            type="button"
            className="border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            Messages
          </button>
          <button
            type="button"
            className="border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            This Financial Year
          </button>
          <TextInput type="date" />
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="flex justify-between gap-2 rounded-sm border-t-2 border-cyan-500 bg-slate-100 p-2 shadow-lg">
            <div className="flex items-center justify-center bg-cyan-600 p-4 text-white">
              <FaMoneyBill size={48} />
            </div>

            <div className="grid-flow-row-[auto_1fr_auto] grid">
              <h2 className="text-sm">TOTAL STOCK VALUE</h2>
              <p className="text-xs">(TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT)</p>
              <p className="text-sm font-extrabold">= Php 0.00</p>
            </div>
          </div>

          <div className="flex justify-between gap-2 rounded-sm border-t-2 border-cyan-500 bg-slate-100 p-2 shadow-lg">
            <div className="flex items-center justify-center bg-cyan-600 p-4 text-white">
              <FaMoneyBill size={48} />
            </div>

            <div className="grid-flow-row-[auto_1fr_auto] grid">
              <h2 className="text-sm">TOTAL STOCK VALUE</h2>
              <p className="text-xs">(TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT)</p>
              <p className="text-sm font-extrabold">= Php 0.00</p>
            </div>
          </div>

          <div className="flex justify-between gap-2 rounded-sm border-t-2 border-cyan-500 bg-slate-100 p-2 shadow-lg">
            <div className="flex items-center justify-center bg-cyan-600 p-4 text-white">
              <FaMoneyBill size={48} />
            </div>

            <div className="grid-flow-row-[auto_1fr_auto] grid">
              <h2 className="text-sm">TOTAL STOCK VALUE</h2>
              <p className="text-xs">(TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT)</p>
              <p className="text-sm font-extrabold">= Php 0.00</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-col flex-wrap gap-5 md:flex-row">
          <div className="grid grid-flow-row gap-2 rounded-sm border-t-2 border-t-amber-700 bg-slate-100 p-2 shadow-lg">
            <div className="flex items-center justify-start gap-2">
              <IoIosWarning size={20} />
              <h1 className="text-md">Sales Payment Due</h1>
            </div>
            <div className="grid-flow-col-[1fr_1fr_1fr] grid gap-3 rounded-xl bg-slate-50 p-3 text-xs shadow-sm">
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

          <div className="grid grid-flow-row gap-2 rounded-sm border-t-2 border-t-amber-700 bg-slate-100 p-2 shadow-lg">
            <div className="flex items-center justify-start gap-2">
              <IoIosWarning size={20} />
              <h1 className="text-md">Purchase Payment Due</h1>
            </div>

            <div className="grid-flow-col-[1fr_1fr_1fr] grid gap-3 rounded-xl bg-slate-50 p-3 text-xs shadow-sm">
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

          <div className="grid grid-flow-row gap-2 rounded-sm border-t-2 border-t-amber-700 bg-slate-100 p-2 shadow-lg">
            <div className="flex items-center justify-start gap-2">
              <IoIosWarning size={20} />
              <h1 className="text-md">Stock Expiry Alert</h1>
            </div>

            <div className="grid-flow-col-[1fr_1fr_1fr] grid gap-3 rounded-xl bg-slate-50 p-3 text-xs shadow-sm">
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
