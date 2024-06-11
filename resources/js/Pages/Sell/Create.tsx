import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import TextArea from '@/shared/components/TextArea'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
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
          <div className="flex items-center border px-2 dark:border-slate-500 dark:text-white">
            <FaLocationPin size={15} />
          </div>
          <select
            name="type"
            className="border-slate-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
          >
            <option value="" selected>
              Select Location
            </option>
            <option value="">Suppliers</option>
            <option value="">Customers</option>
            <option value="">Both (Suppliers and Customer)</option>
          </select>
          <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500 dark:text-white">
            <FaInfo size={15} />
          </button>
        </div>
      </div>
      <CardBorderTop>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <LabelRow>
            <SpanLabel>Customer:*</SpanLabel>
            <div className="flex">
              <div className="flex items-center border px-2 dark:border-slate-500 dark:text-white">
                <FaUser size={18} />
              </div>
              <select
                name="type"
                className="w-full border-slate-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              >
                <option value="" selected>
                  Please Select
                </option>
                <option value="">Suppliers</option>
                <option value="">Customers</option>
                <option value="">Both (Suppliers and Customer)</option>
              </select>
              <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500 dark:text-white">
                <IoIosAddCircle size={24} />
              </button>
            </div>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Pay term:</SpanLabel>
            <div className="flex">
              <TextInput className="w-full rounded-none p-2 text-xs" type="text" placeholder="Pay term" />
              <select
                name="type"
                className="border-slate-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              >
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
              <div className="flex items-center border px-2 dark:border-slate-500 dark:text-white">
                <FaRegCalendar size={18} />
              </div>
              <TextInput className="w-full rounded-none p-1" type="date" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Status:*</SpanLabel>
            <select
              className="w-full border-slate-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              name="type"
            >
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
        <button className="text-left text-cyan-600"> View Supplier Products</button>
        <div className="flex w-full flex-nowrap">
          <div className="grid place-items-center border px-2 dark:border-slate-500 dark:text-white">
            <FaSearch size={15} />
          </div>
          <TextInput
            className="w-full rounded-none p-2 text-xs"
            type="search"
            placeholder="Enter Product name/Sku/Scan bar code"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[8px] text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
        <div className="space-x-3 border-t p-3 text-right">
          <h5 className="inline text-xs font-bold">Net Total Amount </h5>{' '}
          <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid items-center gap-3 md:grid-cols-1 lg:grid-cols-3">
          <LabelRow>
            <SpanLabel>Discount Type:</SpanLabel>
            <select
              name="type"
              className="w-full border-slate-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
            >
              <option value="" selected>
                None
              </option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Discount Amount:</SpanLabel>
            <TextInput className="w-full rounded-none p-2 text-xs" value={0} />
          </LabelRow>

          <h5 className="font-bold dark:text-white">Discount Amount(-)0.00</h5>

          {/* Order Tax */}
          <div className="lg:col-span-2">
            <LabelRow>
              <SpanLabel>Order Tax:</SpanLabel>
              <select
                name="type"
                className="w-full border-slate-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              >
                <option value="" selected>
                  None
                </option>
              </select>
            </LabelRow>
          </div>
          <h5 className="font-bold dark:text-white">Order Tax(+)0.00</h5>
          <LabelRow>
            <SpanLabel>Shipping Details:</SpanLabel>
            <TextInput className="w-full rounded-none p-2 text-xs" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>(+) Shipping charges:</SpanLabel>
            <TextInput className="w-full rounded-none p-2 text-xs" value={0} />
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
              <div className="grid place-items-center border px-2 dark:border-slate-500 dark:text-white">
                <FaMoneyBill size={15} />
              </div>
              <TextInput
                className="w-full rounded-none p-2 text-xs"
                type="search"
                placeholder="Enter Product name/Sku/Scan bar code"
              />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Method"*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="grid place-items-center border px-2 dark:border-slate-500 dark:text-white">
                <FaMoneyBill1Wave size={15} />
              </div>
              <TextInput
                className="w-full rounded-none p-2 text-xs"
                type="search"
                placeholder="Enter Product name/Sku/Scan bar code"
              />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Notes</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>

          <div className="flex flex-col items-end justify-end gap-5 border-t p-3">
            <h5 className="inline text-xs font-bold dark:text-white">Balance:0.00</h5>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
