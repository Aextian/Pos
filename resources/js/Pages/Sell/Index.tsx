import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Index = () => {
  const Thead = [
    'Date',
    'Invoice name',
    'Customer name',
    'Location',
    'Payment status',
    'Total amount',
    'Total paid',
    'Grand total',
    'payment due',
    'variable',
    'vat@12%',
    'vatExempt',
    'vatZeroRated',
    'Action',
  ]
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }

  return (
    <MainLayout>
      <ContentTitle>Sales</ContentTitle>
      <CardBorderTop>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <LabelRow>
            <SpanLabel>Business Location</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-3 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Reference No</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-3 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Payment Status</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-3 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Date Range:</SpanLabel>
            <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
          </LabelRow>
        </div>
      </CardBorderTop>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>All Sales</CardTitle>
          <Link
            href={route('users.create')}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
          >
            Add
          </Link>
        </CardHeader>
        {/* <span>{successMessage ? successMessage : ''}</span> */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table>
            <TableHead>
              <tr>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-4 py-3" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </TableHead>
            <tbody>
              <NoDataAvailable span={Thead.length} />
            </tbody>
          </Table>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
