import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import TextArea from '@/Components/Shared/ui/TextArea'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import Tooltip from '@/Components/Shared/ui/Tooltip'
import MainLayout from '@/Layouts/MainLayout'
import { useState } from 'react'
import { FaMoneyBillWaveAlt, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { FaExclamationCircle, FaRegCalendarAlt } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import Datepicker from 'react-tailwindcss-datepicker'

const Create = () => {
  const Thead = [
    '#',
    'Product name',
    'Purchases Quantity',
    'Unit Cost(Before Discount)',
    'Discount Percent',
    'Unit Cost(Before Tax)',
    'Subtotal(Before Tax)',
    'Product Tax',
    'Net cost',
    'line total',
    'profit margin %',
    'unit selling price',
    'MFG Date / EXP Date',
  ]
  return (
    <MainLayout>
      <ContentTitle>Add Purchase</ContentTitle>
      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <LabelRow>
            <SpanLabel>Supplier</SpanLabel>
            <select
              className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Reference No</SpanLabel>
            <TextInput placeholder="Reference No" className="p-3 text-xs w-full" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Purchase Date</SpanLabel>
            <TextInput type="date" placeholder="Reference No" className="p-2 w-full" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Purchase Status</SpanLabel>
            <select
              className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Business Location</SpanLabel>
            <select
              className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Attach Document:</SpanLabel>
            <TextInput type="file" name="" id="" className="w-full border p-2" />
            <span className="text-[10px] dark:text-white">Max File size:1MB</span>
          </LabelRow>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <button className="text-left  text-cyan-600"> View Supplier Products</button>

        <div className="flex w-full flex-nowrap">
          <div className="border dark:border-slate-500 px-2 grid place-items-center">
            <FaSearch size={15} />
          </div>
          <TextInput
            className="w-full  p-2 rounded-none text-xs "
            type="search"
            placeholder="Enter Product name/Sku/Scan bar code"
          />
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
              </tr>
            </thead>
            <tbody>
              <NoDataAvailable span={Thead.length} />
            </tbody>
          </table>
        </div>
        <div className="border-t text-right p-3 space-x-3 dark:text-white">
          <h5 className="text-xs inline font-bold">Net Total Amount </h5> <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid grid-cols-3 gap-3 w-full items-center">
          <LabelRow>
            <SpanLabel>Discount Type:</SpanLabel>
            <select
              name="type"
              className=" p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 w-full">
              <option value="" selected>
                None
              </option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Discount Amount:</SpanLabel>
            <TextInput className=" p-2 rounded-md  text-xs w-full" value={0} />
          </LabelRow>
          <h5 className="dark:text-white">Discount:(-)0.00</h5>
        </div>
        <hr />
        <div className="flex justify-between gap-5  pb-3 mr-5 ">
          <LabelRow>
            <SpanLabel>
              Purchase Tax: <span className="text-red-500">(Not Required!)</span>
            </SpanLabel>
            <select
              name="type"
              className="p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 w-full">
              <option value="" selected>
                None
              </option>
            </select>
          </LabelRow>
          <h5 className="dark:text-white">Purchase tax:(+) 0.00</h5>
        </div>
        <hr />
        <div className="flex justify-between gap-5 border-b pb-3">
          <LabelRow>
            <SpanLabel>Shipping Details:</SpanLabel>
            <TextInput className=" p-2  text-xs w-full rounded-md" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>(+) Additional Shipping charges:</SpanLabel>
            <TextInput className="rounded-md p-2 text-xs w-full" value={0} />
          </LabelRow>
        </div>
        <div className="flex justify-end">
          <h5 className="dark:text-white">Purchase total:(+) 0.00</h5>
        </div>
        <hr />
        <LabelRow>
          <SpanLabel>Additional Notes</SpanLabel>
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
                <FaMoneyBillWaveAlt size={15} />
              </div>
              <TextInput
                className="w-full  p-2 rounded-none text-xs "
                type="search"
                placeholder="Enter Product name/Sku/Scan bar code"
              />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Method"*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="border  dark:border-slate-500 dark:text-white px-2 grid place-items-center">
                <FaMoneyBillWaveAlt size={15} />
              </div>
              <TextInput
                className="w-full  p-2 rounded-none text-xs "
                type="search"
                placeholder="Enter Product name/Sku/Scan bar code"
              />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Notes</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>

          <div className="border-t  p-3 gap-5 flex flex-col items-end justify-end">
            <h5 className="text-xs inline font-bold dark:text-white">Payment due:0.00</h5>
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
