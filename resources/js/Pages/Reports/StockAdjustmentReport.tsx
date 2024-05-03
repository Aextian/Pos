import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import NoDataAvailable from '@/Components/GlobalComponent/Table/NoDataAvailable'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import PrimaryButton from '@/Components/PrimaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaPrint } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import Datepicker from 'react-tailwindcss-datepicker'

const StockAdjustmentReport = () => {
  const Thead = ['Date', 'Reference No', 'Location', 'Adjustment Type', 'Total Amount', 'Total Amount Recovered', ' Reason', 'Action']
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })
  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue)
    setDate(newValue)
  }
  return (
    <>
      <MainLayout>
        <ContentTitle>Stock Adjustment Report</ContentTitle>
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
              <p className="font-bold">Total Normal:</p>
              <p>Php:1000</p>
            </div>
            <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
              <p className="font-bold">Total Abnormal:</p>
              <p>Php:1000</p>
            </div>
            <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10 ">
              <p className="font-bold">Total Stock Adjustment:</p>
              <p>Php:1000</p>
            </div>
          </div>
          <div className="grid gap-2 shadow-lg bg-white  dark:bg-gray-800 dark:border-gray-700 p-3">
            <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 p-2 flex justify-between pr-10  ">
              <p className="font-bold">Total Amount Recovery:</p>
              <p>Php:1000</p>
            </div>
          </div>
        </div>
        <CardBorderTop>
          <CardTitle>Stock Adjustments</CardTitle>
          <CardContent>
            <Table>
              <TableHead>
                <tr className="">
                  {Thead.map((item, index) => (
                    <th scope="col" className="px-4 py-3 border-r" key={index}>
                      {item}
                    </th>
                  ))}
                </tr>
              </TableHead>
              <tbody>
                <NoDataAvailable span={Thead.length} />
              </tbody>
            </Table>
          </CardContent>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default StockAdjustmentReport
