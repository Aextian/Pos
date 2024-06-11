import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaPrint } from 'react-icons/fa'
import Datepicker from 'react-tailwindcss-datepicker'

const ExpenseReport = () => {
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue)
    setDate(newValue)
  }
  return (
    <>
      <MainLayout>
        <ContentTitle>Expense Report</ContentTitle>
        <CardBorderTop>
          <CardTitle>Filters</CardTitle>
          <hr className="w-full" />
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
            <LabelRow>
              <SpanLabel>Business Location:</SpanLabel>
              <select
                className="w-full rounded-md border-gray-300 p-3 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                name="type"
              >
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Category:</SpanLabel>
              <select
                className="w-full rounded-md border-gray-300 p-3 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                name="type"
              >
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Date Range:</SpanLabel>
              <Datepicker
                primaryColor="cyan"
                value={date}
                onChange={handleValueChange}
                showShortcuts={true}
              />
            </LabelRow>
          </div>
          <div className="flex justify-end">
            <SecondaryButton>Apply Filter</SecondaryButton>
          </div>
        </CardBorderTop>
        <CardBorderTop></CardBorderTop>
        <div className="flex justify-end">
          <SecondaryButton className="gap-3">
            <FaPrint />
            Print
          </SecondaryButton>
        </div>
      </MainLayout>
    </>
  )
}

export default ExpenseReport
