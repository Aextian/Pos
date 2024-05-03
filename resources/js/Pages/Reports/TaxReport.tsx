import ContentTitle from '@/Components/ContentTitle'
import PrimaryButton from '@/Components/PrimaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import Datepicker from 'react-tailwindcss-datepicker'

const TaxReport = () => {
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }

  return (
    <MainLayout>
      <ContentTitle>Tax Report</ContentTitle>
      <span className="text-xs text-gray-300">Tax details for the selected date range</span>

      <div className="flex justify-end items-center gap-3 md:gap-10 ">
        <div className="flex items-center">
          <div className=" dark:border-slate-500 border border-r-0 p-[10px] bg-cyan-600 dark:bg-slate-800 dark:text-white text-white">
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

      <div className="grid grid-cols-2 gap-6 ">
        <div className="grid gap-5 shadow-lg  col-span-2 bg-white p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <h5 className="text-sm md:text-lg font-bold">Summary</h5>
          <h5 className="text-lg text-gray-400">Total Sales:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total Vatable:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total Vat:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total Vat exempt:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total zero rated:Php 0.00</h5>
        </div>

        <div className="space-y-5 shadow-xl p-5  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <h5 className="font-bold">Input Tax</h5>
          <div className="flex gap-5 text-xs md:text-sm font-bold">
            <p>Total</p>
            <span>Php 0.00</span>
          </div>
        </div>
        <div className="space-y-5 shadow-xl p-5   dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <h5 className="font-bold">Ouput Tax</h5>
          <div className="flex gap-5 text-xs md:text-sm">
            <p>Total</p>
            <span>Php 0.00</span>
          </div>
        </div>

        <div className="shadow-lg  col-span-2 p-5 space-y-5 text-xs  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <h5 className="text-sm md:text-lg font-bold">OverAll (Input-Output)</h5>
          <p className="text-lg text-gray-400 font-bold">Output Tax - Input Tax:Php 0.00</p>
        </div>
      </div>
      <div className="text-right">
        <PrimaryButton>Print</PrimaryButton>
      </div>
    </MainLayout>
  )
}

export default TaxReport
