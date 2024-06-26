import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import PostLabel from '@/shared/components/PostLabel'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const VoidedTransaction = () => {
  const Thead = [
    'Date',
    'Invoice No',
    'Customer Name',
    'Location',
    'Payment Status',
    'Total Amount',
    'MAC Address',
    'Ip Address',
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
      <ContentTitle>Void Transaction</ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
            <SpanLabel>Customer</SpanLabel>
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
        <CardTitle>Void Transaction</CardTitle>
        <Table>
          <TableHead>
            <tr>
              {Thead.map((item, index) => (
                <th scope="col" className="border-r px-4 py-3" key={index}>
                  {item}
                </th>
              ))}
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
            <NoDataAvailable span={Thead.length} />
          </tbody>
        </Table>

        <div className="flex items-center justify-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default VoidedTransaction
