import CardBorderTop from '@/Components/CardBorderTop'
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

const GroupReport = () => {
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
        <ContentTitle>Customer Groups Report</ContentTitle>
        <CardBorderTop>
          <div className="flex flex-col items-start justify-start gap-5">
            <CardTitle>Filters</CardTitle>
            <hr className="w-full" />
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
              <LabelRow>
                <SpanLabel>Customer Groups Name:</SpanLabel>
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
                <SpanLabel>Date Range:</SpanLabel>
                <Datepicker
                  primaryColor="cyan"
                  value={date}
                  onChange={handleValueChange}
                  showShortcuts={true}
                />
              </LabelRow>
            </div>
          </div>
        </CardBorderTop>
        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table>
              <TableHead>
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Customer Group
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Total Sale{' '}
                  </th>
                </tr>
              </TableHead>
              <tbody>
                {/* {data.map((product, index) => (
                <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                  <td className="rtl:text-center">02.03.2024</td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.sku}
                  </td>
                  <td className="px-6 py-4">{product.product}</td>
                  <td className="px-6 py-4">{product.category}</td>

                  <td className="px-6 py-4">{product.unit}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.tax}</td>
                  <td className="px-6 py-4">{product.price}</td>

                  <td className="px-6 py-4">
                    <button className="px-2 text-white rounded bg-cyan-500">Action</button>
                  </td>
                </tr>
              ))} */}
                <NoDataAvailable span={2} />
              </tbody>
            </Table>
          </div>
          <div className="flex items-center justify-center">pagination</div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default GroupReport
