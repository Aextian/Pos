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
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const ProductPurchaseReport = () => {
  const Thead = [
    'Product',
    'Supplier',
    'Reference code',
    'Date',
    'Quantity',
    'Total Unit Adjusted',
    'Unit Purchase Price',
    'SubTotal',
  ]
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
        <ContentTitle>Product Purchase Report</ContentTitle>
        <CardBorderTop>
          <div className="flex flex-col items-start justify-start gap-5">
            <CardTitle>Filters</CardTitle>
            <hr className="w-full" />
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
              <LabelRow>
                <SpanLabel>Search Product:</SpanLabel>
                <TextInput placeholder="Enter Product name /SKU/Scan bar code" className="w-full p-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Supplier:</SpanLabel>
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
                  {Thead.map((item, key) => (
                    <th scope="col" className="px-4 py-3" key={key}>
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
          <div className="flex items-center justify-center">pagination</div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default ProductPurchaseReport
