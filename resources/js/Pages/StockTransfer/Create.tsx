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
import React from 'react'
import { FaInfo, FaMoneyBill, FaMoneyBillWave, FaRegCalendar, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { IoIosAddCircle } from 'react-icons/io'

const Create = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Add <span className="text-xs text-gray-300">Stock Transfer</span>
      </ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <LabelRow>
            <SpanLabel>Date:*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <div className="border dark:border-slate-500 px-2 flex items-center dark:text-white">
                <FaRegCalendar size={18} />
              </div>
              <TextInput className="w-full  p-1 rounded-none" type="date" />
            </div>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Reference No:</SpanLabel>
            <TextInput className="w-full p-2 text-xs rounded-none" type="text" placeholder="Reference No" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Location (From):*</SpanLabel>
            <select className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-cyan-600 focus:ring-cyan-600" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Location (To):*</SpanLabel>
            <select className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-cyan-600 focus:ring-cyan-600" name="type">
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
          <div className="border dark:border-slate-500 px-2 grid place-items-center dark:text-white">
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
              <div className="border dark:border-slate-500 px-2 grid place-items-center dark:text-white">
                <FaMoneyBill size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="0" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Additional Notes</SpanLabel>
            <TextArea className="w-full" cols={20}></TextArea>
          </LabelRow>
          <div className="p-3 gap-5 flex flex-col items-end justify-end">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
