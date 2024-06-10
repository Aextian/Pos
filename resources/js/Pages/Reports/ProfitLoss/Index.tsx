import CardHeader from '@/Components/CardHeader'
import ContentTitle from '@/shared/components/ContentTitle'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaPrint } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import Datepicker from 'react-tailwindcss-datepicker'
const Index = () => {
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
      <ContentTitle>Profit /Loss Report</ContentTitle>
      <div className="flex justify-end items-center gap-3 md:gap-10 ">
        <div className="flex items-center">
          <div className="border border-r-0 p-[10px] bg-cyan-600 dark:border-slate-500 dark:bg-slate-800 dark:text-white text-white">
            <FaLocationPin />
          </div>
          <select className=" text-sm p-2 md:w-[250px] border-l-0 md:rounded-md md:rounded-l-none rounded-l-none dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
            <option value="" selected>
              All Location
            </option>
            <option value="">Roxas</option>
          </select>
        </div>
        <div>
          <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-[10px] md:text-xs dark:text-white">
        <div className="grid gap-2 shadow-lg bg-white  dark:bg-gray-800 dark:border-gray-700 p-3">
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10  ">
            <p className="font-bold">Opening Stock:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total purchase:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Stock Adjustment:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Expense:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Shipping Charges:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Sell discount:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Sell Return:</p>
            <p>Php:1000</p>
          </div>
        </div>

        <div className="grid gap-2 shadow-lg bg-white  dark:bg-gray-800 dark:border-gray-700 p-3">
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10  ">
            <p className="font-bold">Closing stock:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Sales:</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Stock Recovered</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Purchase Return</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
            <p className="font-bold">Total Purchase Discount</p>
            <p>Php:1000</p>
          </div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 "></div>
          <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 "></div>
        </div>
      </div>

      <div className="shadow-lg p-5 text-sm font-bold md:text-3xl bg-white  dark:bg-gray-800 dark:border-gray-700">
        <span className="dark:text-white">Net Profit:</span> <span className="text-red-600"> Php 0.00</span>
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

export default Index
