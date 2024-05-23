import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaWindowClose, FaChartPie, FaCartArrowDown, FaMoneyBill, FaShieldAlt, FaWarehouse, FaCalculator } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { TbReportSearch } from 'react-icons/tb'
import { IoIosNotificationsOutline, IoIosWarning } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'
import { FaUsersLine } from 'react-icons/fa6'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
const Dashboard = () => {
  return (
    <MainLayout>
      <ContentTitle>Welcome Mlya Pos</ContentTitle>

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
        <TextInput type="date" className=" rounded-none" />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3  ">
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

      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
        <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700 w-full">
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

        <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700 w-full">
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

        <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700 w-full">
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
    </MainLayout>
  )
}

export default Dashboard
