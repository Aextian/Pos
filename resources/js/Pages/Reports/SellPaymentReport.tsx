import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import Datepicker from 'react-tailwindcss-datepicker'

const SellPaymentReport = () => {
  const Thead = ['Reference NO', 'Paid on', 'Amount', 'Customer', 'Payment Method', 'Status', 'Sell', 'Action']
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
        <ContentTitle>Purcahse Payment Report</ContentTitle>
        <CardBorderTop>
          <div className="flex flex-col justify-start items-start gap-5">
            <CardTitle>Filters</CardTitle>
            <hr className=" w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              <LabelRow>
                <SpanLabel>Customer:</SpanLabel>
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

export default SellPaymentReport
