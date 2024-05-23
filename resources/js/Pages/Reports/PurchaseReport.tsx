import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaPrint } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import Datepicker from 'react-tailwindcss-datepicker'

const PurchaseReport = () => {
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue)
    setDate(newValue)
  }

  return (
    <MainLayout>
      <ContentTitle>Purchase and Sale Report</ContentTitle>
      <span className="text-xs text-slate-500"> Purchase & sale detail for the selected date range</span>

      <div className="flex justify-end items-center gap-3 md:gap-10 ">
        <div className="flex items-center">
          <div className="border border-r-0 p-[10px] dark:border-slate-500 bg-cyan-600 dark:bg-slate-800 dark:text-white text-white">
            <FaLocationPin />
          </div>
          <select className=" text-sm p-2 md:w-[250px] border-l-0 md:rounded-md md:rounded-l-none rounded-l-none dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
            <option value="" selected>
              All Location sdsd sd sdsd
            </option>
            <option value="">Roxas</option>
          </select>
        </div>
        <div>
          <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-[10px] md:text-xs dark:text-white">
        <div className="grid gap-2 shadow-lg bg-white p-3  dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-lg font-bold">Purchases</h1>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16  ">
            <p className="font-bold">Total Purchase:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16 ">
            <p className="font-bold">Purchase Including tax:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16 ">
            <p className="font-bold">Total Purchase Return Including Tax:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16 ">
            <p className="font-bold">Purchase Due:</p>
            <p>Php:1000</p>
          </div>
        </div>
        <div className="grid gap-2 shadow-lg bg-white p-3 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-lg font-bold">Sales</h1>

          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16  ">
            <p className="font-bold">Total Sales:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16 ">
            <p className="font-bold">Sale Including tax:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16 ">
            <p className="font-bold">Total Sell Return Including Tax:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between md:pr-16 ">
            <p className="font-bold">Sale Due:</p>
            <p>Php:1000</p>
          </div>
        </div>
        <div className="shadow-lg  col-span-2 p-5 space-y-5 ">
          <h3 className="font-bold text-xs md:text-lg">OverAll (Sale-Sale Return-Purchase-Purchase Return)</h3>
          <p className=" text-xs md:text-lg ">
            Sale-Purchase: <span className="text-red-600 md:text-lg">Php-1786</span>
          </p>
          <p className="text-xs md:text-lg">
            Due Amount: <span className="text-xs text-red-600 md:text-lg">Php-1786</span>
          </p>
        </div>
      </div>
      <div className="text-right">
        <PrimaryButton className="gap-2">
          <FaPrint />
          Print
        </PrimaryButton>
      </div>
    </MainLayout>
  )
}

export default PurchaseReport
