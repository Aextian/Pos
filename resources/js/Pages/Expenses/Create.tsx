import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import TextArea from '@/Components/GlobalComponent/TextArea'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaMoneyBill, FaRegCalendar, FaSearch, FaTrash } from 'react-icons/fa'

const Create = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Add <span className="text-xs text-gray-300">Stock Expense</span>
      </ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <LabelRow>
            <SpanLabel>Business Location (To):*</SpanLabel>
            <select className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Expense Category:*</SpanLabel>
            <select className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Reference No:</SpanLabel>
            <TextInput
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
              type="text"
              placeholder="Reference No."
            />
          </LabelRow>
          <div className="flex flex-col gap-1 w-full">
            <LabelRow>
              <SpanLabel>Date:*</SpanLabel>
              <div className="flex w-full flex-nowrap">
                <div className="border dark:border-slate-500 px-2 flex items-center">
                  <FaRegCalendar size={18} />
                </div>
                <TextInput className="w-full  p-1 rounded-none" type="date" />
              </div>
            </LabelRow>
          </div>
          <LabelRow>
            <SpanLabel>Total Amount:</SpanLabel>
            <TextInput
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
              placeholder="Total Amount"
              type="text"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Expense for:*</SpanLabel>
            <select className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Attach Document:</SpanLabel>
            <TextInput className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" type="file" />
            <span className="text-xs dark:text-white">Max file size: 1 MB</span>
          </LabelRow>
          <div className="grid gap-5 w-full">
            <LabelRow>
              <SpanLabel>Expense Note</SpanLabel>
              <TextArea cols={20}></TextArea>
            </LabelRow>
          </div>
          <div className="border-t md:border-t-0 p-2 gap-5 flex flex-col items-end justify-end">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
