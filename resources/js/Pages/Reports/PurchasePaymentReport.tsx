import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import NoDataAvailable from '@/Components/GlobalComponent/Table/NoDataAvailable'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const PurchasePaymentReport = () => {
  const Thead = ['Reference No', 'Paid on', 'Amount', 'Supplier', 'Payment Method', 'Purchase', 'Action']
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
        <ContentTitle>Purcahse Payment Report</ContentTitle>
        <CardBorderTop>
          <CardTitle>Filters</CardTitle>
          <hr className=" w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <LabelRow>
              <SpanLabel>Supplier:</SpanLabel>
              <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
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
              <SpanLabel>Date Range:</SpanLabel>
              <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
            </LabelRow>
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
          <div className="flex justify-center items-center">pagination</div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default PurchasePaymentReport
