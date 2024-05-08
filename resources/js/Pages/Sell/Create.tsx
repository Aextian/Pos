import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import NoDataAvailable from '@/Components/GlobalComponent/Table/NoDataAvailable'
import TextArea from '@/Components/GlobalComponent/TextArea'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaInfo, FaMoneyBill, FaRegCalendar, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { FaLocationPin, FaMoneyBill1Wave } from 'react-icons/fa6'
import { IoIosAddCircle } from 'react-icons/io'

const Create = () => {
  const Thead = ['Product', 'Quantity', 'Price inc.tax', 'Discount', 'Subtotal']
  return (
    <MainLayout>
      <ContentTitle>Add Sale</ContentTitle>
      <div className="flex flex-col gap-1">
        <div className="flex w-full flex-nowrap">
          <div className="border dark:border-slate-500 dark:text-white px-2 flex items-center">
            <FaLocationPin size={15} />
          </div>
          <select name="type" className="focus:border-cyan-600 border-slate-300 text-xs focus:ring-cyan-600 dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            <option value="" selected>
              Select Location
            </option>
            <option value="">Suppliers</option>
            <option value="">Customers</option>
            <option value="">Both (Suppliers and Customer)</option>
          </select>
          <button className="bg-white-500 border px-2 text-cyan-600  dark:border-slate-500 dark:text-white">
            <FaInfo size={15} />
          </button>
        </div>
      </div>
      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <LabelRow>
            <SpanLabel>Customer:*</SpanLabel>
            <div className="flex ">
              <div className="border dark:text-white dark:border-slate-500 px-2 flex items-center">
                <FaUser size={18} />
              </div>
              <select
                name="type"
                className=" w-full focus:border-cyan-600 border-slate-300 text-xs focus:ring-cyan-600 dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="" selected>
                  Please Select
                </option>
                <option value="">Suppliers</option>
                <option value="">Customers</option>
                <option value="">Both (Suppliers and Customer)</option>
              </select>
              <button className="bg-white-500 border dark:text-white dark:border-slate-500 px-2 text-cyan-600">
                <IoIosAddCircle size={24} />
              </button>
            </div>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Pay term:</SpanLabel>
            <div className="flex">
              <TextInput className="w-full rounded-none p-2 text-xs" type="text" placeholder="Pay term" />
              <select name="type" className="focus:border-cyan-600 border-slate-300 text-xs focus:ring-cyan-600 dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="" selected>
                  Please Select
                </option>
                <option value="">Month</option>
                <option value="">Days</option>
              </select>
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Sale Date:*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="border dark:text-white dark:border-slate-500 px-2 flex items-center">
                <FaRegCalendar size={18} />
              </div>
              <TextInput className="w-full p-1 rounded-none" type="date" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Status:*</SpanLabel>
            <select className="w-full focus:border-cyan-600 border-slate-300 text-xs focus:ring-cyan-600 dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <button className="text-left  text-cyan-600"> View Supplier Products</button>
        <div className="flex w-full flex-nowrap">
          <div className="border dark:text-white dark:border-slate-500 px-2 grid place-items-center">
            <FaSearch size={15} />
          </div>
          <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Enter Product name/Sku/Scan bar code" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[8px] text-left  text-gray-500 dark:text-gray-400 ">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-cyan-600 text-white">
                {Thead.map((item, index) => (
                  <th className="whitespace-nowrap border-r p-1" key={index}>
                    {item}
                  </th>
                ))}
                <th className="whitespace-nowrap border-r p-1">#</th>
              </tr>
            </thead>
            <tbody>
              <NoDataAvailable span={Thead.length} />
            </tbody>
          </table>
        </div>
        <div className="border-t text-right p-3 space-x-3">
          <h5 className="text-xs inline font-bold">Net Total Amount </h5> <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 items-center gap-3">
          <LabelRow>
            <SpanLabel>Discount Type:</SpanLabel>
            <select name="type" className=" w-full focus:border-cyan-600 border-slate-300 text-xs focus:ring-cyan-600 dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              <option value="" selected>
                None
              </option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Discount Amount:</SpanLabel>
            <TextInput className="rounded-none p-2 w-full text-xs" value={0} />
          </LabelRow>

          <h5 className="font-bold dark:text-white">Discount Amount(-)0.00</h5>

          {/* Order Tax */}
          <div className="lg:col-span-2">
            <LabelRow>
              <SpanLabel>Order Tax:</SpanLabel>
              <select
                name="type"
                className=" w-full focus:border-cyan-600 border-slate-300 text-xs focus:ring-cyan-600 dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="" selected>
                  None
                </option>
              </select>
            </LabelRow>
          </div>
          <h5 className="font-bold dark:text-white">Order Tax(+)0.00</h5>
          <LabelRow>
            <SpanLabel>Shipping Details:</SpanLabel>
            <TextInput className="rounded-none p-2  w-full text-xs" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>(+) Shipping charges:</SpanLabel>
            <TextInput className="rounded-none p-2  w-full text-xs" value={0} />
          </LabelRow>
          <h5 className="font-bold dark:text-white">Total payable</h5>
        </div>

        <LabelRow>
          <SpanLabel>Sell Notes</SpanLabel>
          <TextArea className="w-full" cols={20}></TextArea>
        </LabelRow>
      </CardBorderTop>

      <CardBorderTop>
        <CardTitle> Add payment</CardTitle>
        <div className="grid gap-5">
          <LabelRow>
            <SpanLabel>Amount</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="border dark:border-slate-500 dark:text-white px-2 grid place-items-center">
                <FaMoneyBill size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Enter Product name/Sku/Scan bar code" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Method"*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="border  dark:border-slate-500 dark:text-white px-2 grid place-items-center">
                <FaMoneyBill1Wave size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Enter Product name/Sku/Scan bar code" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Notes</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>

          <div className="border-t  p-3 gap-5 flex flex-col items-end justify-end">
            <h5 className="text-xs inline font-bold dark:text-white">Balance:0.00</h5>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
