import ContentTitle from '@/shared/components/ContentTitle'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
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

      <div className="flex items-center justify-end gap-3 md:gap-10">
        <div className="flex items-center">
          <div className="border border-r-0 bg-cyan-600 p-[10px] text-white dark:border-slate-500 dark:bg-slate-800 dark:text-white">
            <FaLocationPin />
          </div>
          <select className="rounded-l-none border-l-0 p-2 text-sm dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 md:w-[250px] md:rounded-md md:rounded-l-none">
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

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 grid gap-5 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <h5 className="text-sm font-bold md:text-lg">Summary</h5>
          <h5 className="text-lg text-gray-400">Total Sales:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total Vatable:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total Vat:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total Vat exempt:Php 0.00</h5>
          <h5 className="text-lg text-gray-400">Total zero rated:Php 0.00</h5>
        </div>

        <div className="space-y-5 p-5 shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <h5 className="font-bold">Input Tax</h5>
          <div className="flex gap-5 text-xs font-bold md:text-sm">
            <p>Total</p>
            <span>Php 0.00</span>
          </div>
        </div>
        <div className="space-y-5 p-5 shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <h5 className="font-bold">Ouput Tax</h5>
          <div className="flex gap-5 text-xs md:text-sm">
            <p>Total</p>
            <span>Php 0.00</span>
          </div>
        </div>

        <div className="col-span-2 space-y-5 p-5 text-xs shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <h5 className="text-sm font-bold md:text-lg">OverAll (Input-Output)</h5>
          <p className="text-lg font-bold text-gray-400">Output Tax - Input Tax:Php 0.00</p>
        </div>
      </div>
      <div className="text-right">
        <PrimaryButton>Print</PrimaryButton>
      </div>
    </MainLayout>
  )
}

export default TaxReport
