import CardBorderTop from '@/Components/CardBorderTop'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaMoneyBill, FaRegCalendar, FaSearch, FaTrash } from 'react-icons/fa'

const Create = () => {
  return (
    <MainLayout>
      <div className="px-5 md:px-2">
        <h1 className="text-lg">
          Add <span className="text-xs">Stock Adjustment</span>
        </h1>
      </div>

      <CardBorderTop>
        <div className="flex flex-col justify-start items-start gap-5">
          <label className="w-full">
            Business Location (To):*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label className="w-full">
            Reference No:
            <TextInput className="w-full p-2 text-xs" type="text" />
          </label>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Date:*</label>
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 flex items-center">
                <FaRegCalendar size={18} />
              </div>
              <TextInput className="w-full  p-1 rounded-none" type="date" />
            </div>
          </div>
          <label className="w-full">
            Adjustment type:*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <button className="text-left  text-cyan-600"> Search Products</button>
        <div className="flex w-full flex-nowrap">
          <div className="border px-2 grid place-items-center">
            <FaSearch size={15} />
          </div>
          <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Search Product of stock adjustent" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[8px] text-left  text-gray-500 dark:text-gray-400 ">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-cyan-600 text-white">
                <th className="whitespace-nowrap border-r p-1">Product</th>
                <th className="whitespace-nowrap border-r p-1">Quantity</th>
                <th className="whitespace-nowrap border-r p-1">Subtotal</th>
                <th className="whitespace-nowrap border-r p-1">
                  <FaTrash size={10} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white ">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-t text-right p-3 space-x-3">
          <h5 className="text-xs inline font-bold">Net Total Amount </h5> <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid gap-5">
          <label>
            Total amount recovered
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 grid place-items-center">
                <FaMoneyBill size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="0" />
            </div>
          </label>
          <label htmlFor="">
            Reason
            <textarea className="w-full" name="" id="" cols={20}></textarea>
          </label>
          <div className="border-t  p-3 gap-5 flex flex-col items-end justify-end">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
