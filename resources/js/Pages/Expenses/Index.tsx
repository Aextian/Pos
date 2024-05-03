import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/ContentTitle'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Index = () => {
  const Thead = ['Date', 'Reference No', 'Expense Category', 'Location', 'Payment due', 'Expense for', 'Expense note', 'Action']

  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }

  return (
    <MainLayout>
      <ContentTitle>Expenses</ContentTitle>

      <CardBorderTop>
        <div className="flex flex-col justify-start items-start gap-5">
          <h5>Filters</h5>
          <hr className=" w-full" />

          <label htmlFor="" className="w-full">
            Business Location:
            <select className="w-full p-3 text-xs" name="type" id="cars">
              <option value="" selected>
                All
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>

          <label htmlFor="" className="w-full">
            Expense for:
            <select className="w-full p-3 text-xs" name="type" id="cars">
              <option value="" selected>
                All
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label htmlFor="" className="w-full">
            Expense Category:
            <select className="w-full p-3 text-xs" name="type" id="cars">
              <option value="" selected>
                All
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label htmlFor="" className="w-full">
            Date Range:
            <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
          </label>
        </div>
      </CardBorderTop>
      <CardBorderTop>
        {/* <span>{successMessage ? successMessage : ''}</span> */}
        <div className="flex flex-row justify-between items-center gap-2">
          <h1 className="text-lg font-medium">All Expenses</h1>
          <Link href={route('users.create')} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
            Add
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-[8px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-4 py-3">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* {data.map((product, index) => (
                <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                  <td className="rtl:text-center">02.03.2024</td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.sku}
                  </td>
                  <td className="px-6 py-4">{product.product}</td>
                  <td className="px-6 py-4">{product.category}</td>

                  <td className="px-6 py-4">{product.unit}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.tax}</td>
                  <td className="px-6 py-4">{product.price}</td>

                  <td className="px-6 py-4">
                    <button className="px-2 text-white rounded bg-cyan-500">Action</button>
                  </td>
                </tr>
              ))} */}
            </tbody>
            <tfoot>
              <tr className="text-lg">
                <td className="text-center py-10 " colSpan={4}>
                  Total
                </td>
                <td className="border-l">Received -1</td>
                <td className="border-l">Due -1</td>
                <td className="border-l">Php 17/86</td>
                <td className="border-l">Purchase Due - Php 17.86 Purchase Return - Php 0.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
