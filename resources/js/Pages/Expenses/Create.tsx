import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
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
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <LabelRow>
            <SpanLabel>Business Location (To):*</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Expense Category:*</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <TextInput
              className="w-full rounded-md border-gray-300 p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              type="text"
              placeholder="Reference No."
            />
          </LabelRow>
          <div className="flex w-full flex-col gap-1">
            <LabelRow>
              <SpanLabel>Date:*</SpanLabel>
              <div className="flex w-full flex-nowrap">
                <div className="flex items-center border px-2 dark:border-slate-500">
                  <FaRegCalendar size={18} />
                </div>
                <TextInput className="w-full rounded-none p-1" type="date" />
              </div>
            </LabelRow>
          </div>
          <LabelRow>
            <SpanLabel>Total Amount:</SpanLabel>
            <TextInput
              className="w-full rounded-md border-gray-300 p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Total Amount"
              type="text"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Expense for:*</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Attach Document:</SpanLabel>
            <TextInput
              className="w-full rounded-md border-gray-300 p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              type="file"
            />
            <span className="text-xs dark:text-white">Max file size: 1 MB</span>
          </LabelRow>
          <div className="grid w-full gap-5">
            <LabelRow>
              <SpanLabel>Expense Note</SpanLabel>
              <TextArea cols={20}></TextArea>
            </LabelRow>
          </div>
          <div className="flex flex-col items-end justify-end gap-5 border-t p-2 md:border-t-0">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
