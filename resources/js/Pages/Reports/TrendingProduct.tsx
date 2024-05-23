import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const TrendingProduct = () => {
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }
  return (
    <>
      <MainLayout>
        <ContentTitle>Trending Product</ContentTitle>
        <CardBorderTop>
          <CardTitle>Filters</CardTitle>
          <hr className=" w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <LabelRow>
              <SpanLabel>Business Location:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Category:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Sub Category:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Brand:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Unit:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Number of Products:</SpanLabel>
              <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Number of Products:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
          </div>
          <div className="flex justify-end">
            <SecondaryButton>Apply Filters</SecondaryButton>
          </div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default TrendingProduct
