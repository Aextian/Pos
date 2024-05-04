import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import NoDataAvailable from '@/Components/GlobalComponent/Table/NoDataAvailable'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import TextArea from '@/Components/GlobalComponent/TextArea'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaMoneyBill, FaRegCalendar, FaSearch, FaTrash } from 'react-icons/fa'
import Datepicker from 'react-tailwindcss-datepicker'

const Create = () => {
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }

  return (
    <MainLayout>
      <ContentTitle>
        Add <span className="text-xs text-gray-300">Stock Adjustment</span>
      </ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <LabelRow>
            <SpanLabel>Business Location (To):*</SpanLabel>
            <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Reference No:</SpanLabel>
            <TextInput className="w-full p-3 text-xs" type="text" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Date Range:</SpanLabel>
            <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Adjustment type:*</SpanLabel>
            <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
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
        <button className="text-left  text-cyan-600"> Search Products</button>
        <div className="flex w-full flex-nowrap">
          <div className="border dark:border-slate-500 px-2 grid place-items-center">
            <FaSearch size={15} />
          </div>
          <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Search Product of stock adjustent" />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <tr className="bg-cyan-600 text-white">
                <th className="whitespace-nowrap border-r p-1">Product</th>
                <th className="whitespace-nowrap border-r p-1">Quantity</th>
                <th className="whitespace-nowrap border-r p-1">Subtotal</th>
                <th className="whitespace-nowrap border-r p-1">
                  <FaTrash size={10} />
                </th>
              </tr>
            </TableHead>
            <tbody>
              <NoDataAvailable span={4} />
            </tbody>
          </Table>
        </div>
        <div className="border-t text-right p-3 space-x-3">
          <h5 className="text-xs inline font-bold">Net Total Amount </h5> <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid gap-5">
          <LabelRow>
            <SpanLabel>Total amount recovered</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="border dark:border-slate-500 px-2 grid place-items-center">
                <FaMoneyBill size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="0" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Reason</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>
          <div className="border-t  p-3 gap-5 flex flex-col items-end justify-end">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
