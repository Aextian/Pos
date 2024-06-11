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
import React from 'react'
import {
  FaInfo,
  FaMoneyBill,
  FaMoneyBillWave,
  FaRegCalendar,
  FaSearch,
  FaTrash,
  FaUser,
} from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { IoIosAddCircle } from 'react-icons/io'

const Create = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Add <span className="text-xs text-gray-300">Stock Transfer</span>
      </ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <LabelRow>
            <SpanLabel>Date:*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="flex items-center border px-2 dark:border-slate-500 dark:text-white">
                <FaRegCalendar size={18} />
              </div>
              <TextInput className="w-full rounded-none p-1" type="date" />
            </div>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Reference No:</SpanLabel>
            <TextInput className="w-full rounded-none p-2 text-xs" type="text" placeholder="Reference No" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Location (From):*</SpanLabel>
            <select
              className="w-full p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Location (To):*</SpanLabel>
            <select
              className="w-full p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
          <div className="grid place-items-center border px-2 dark:border-slate-500 dark:text-white">
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
                <th className="whitespace-nowrap border-r p-1">Unit Price</th>
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
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid gap-5">
          <LabelRow>
            <SpanLabel>Shipping Charges:</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="grid place-items-center border px-2 dark:border-slate-500 dark:text-white">
                <FaMoneyBill size={15} />
              </div>
              <TextInput className="w-full rounded-none p-2 text-xs" type="search" placeholder="0" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Additional Notes</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>
          <div className="flex flex-col items-end justify-end gap-5 p-3">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
