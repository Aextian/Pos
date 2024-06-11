import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextArea from '@/shared/components/TextArea'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
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
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <LabelRow>
            <SpanLabel>Business Location (To):*</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-3 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              name="type"
            >
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
            <select
              className="w-full rounded-md border-gray-300 p-3 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
        <button className="text-left text-cyan-600"> Search Products</button>
        <div className="flex w-full flex-nowrap">
          <div className="grid place-items-center border px-2 dark:border-slate-500">
            <FaSearch size={15} />
          </div>
          <TextInput
            className="w-full rounded-none p-2 text-xs"
            type="search"
            placeholder="Search Product of stock adjustent"
          />
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
        <div className="space-x-3 border-t p-3 text-right">
          <h5 className="inline text-xs font-bold">Net Total Amount </h5>{' '}
          <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid gap-5">
          <LabelRow>
            <SpanLabel>Total amount recovered</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="grid place-items-center border px-2 dark:border-slate-500">
                <FaMoneyBill size={15} />
              </div>
              <TextInput className="w-full rounded-none p-2 text-xs" type="search" placeholder="0" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Reason</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>
          <div className="flex flex-col items-end justify-end gap-5 border-t p-3">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
