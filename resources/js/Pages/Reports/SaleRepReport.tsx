import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const SaleRepReport = () => {
  const TSales = [
    'Date',
    'Invoice No',
    'Customer name',
    'Location',
    'Payment status',
    'Total amount',
    'Total paid',
    'Total remaining',
  ]
  const TCommision = [
    'Date',
    'Invoice No',
    'Customer name',
    'Location',
    'Payment status',
    'Total amount',
    'Total paid',
    'Total remaining',
  ]
  const TExpenses = [
    'Date',
    'Reference No',
    'Expense Category',
    'Location',
    'Payment status',
    'Total amount',
    'Expense for',
    'Expense note',
  ]
  const [show, setShow] = useState('sales')

  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }

  const handleClick = ({ name }: { name: string }) => {
    setShow(name)
  }
  console.log(show)
  return (
    <>
      <MainLayout>
        <ContentTitle>Purcahse Payment Report</ContentTitle>
        <CardBorderTop>
          <CardTitle>Filters</CardTitle>
          <hr className="w-full" />
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
            <LabelRow>
              <SpanLabel>User:</SpanLabel>
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
        </CardBorderTop>
        <CardBorderTop>
          <CardTitle>Summary</CardTitle>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-500 md:text-2xl">
              <h5>Total Sale: Total Sales Return: Php 0.00 - Php 0.00 =Php 0.00</h5>
              <h5>Total Expense: Php 0.00</h5>
            </div>
          </CardContent>
        </CardBorderTop>

        <CardBorderTop>
          <div className="flex flex-col text-sm font-bold dark:text-white md:flex-row md:text-2xl">
            <button
              className={`border p-3 ${
                show === 'sales' ? 'border-b-0 border-r-0 border-t-cyan-600' : ''
              } dark:border-slate-500`}
              onClick={(e) => handleClick({ name: 'sales' })}
            >
              Sale Added
            </button>
            <button
              className={`border p-3 ${
                show === 'commission' ? 'border-b-0 border-l-0 border-t-cyan-600' : ''
              } dark:border-slate-500`}
              onClick={(e) => handleClick({ name: 'commission' })}
            >
              Sales With Commission
            </button>
            <button
              className={`border p-3 ${
                show === 'expenses' ? 'border-b-0 border-l-0 border-t-cyan-600' : ''
              } dark:border-slate-500`}
              onClick={(e) => handleClick({ name: 'expenses' })}
            >
              Expenses
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {show === 'sales' ? (
              <Table>
                <TableHead>
                  <tr>
                    {TSales.map((item, key) => (
                      <th scope="col" className="px-4 py-3" key={key}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </TableHead>
                <tbody>
                  <NoDataAvailable span={TSales.length} />
                </tbody>
              </Table>
            ) : (
              ''
            )}

            {show === 'commission' ? (
              <Table>
                <TableHead>
                  <tr>
                    {TCommision.map((item, key) => (
                      <th scope="col" className="px-4 py-3" key={key}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </TableHead>
                <tbody>
                  <NoDataAvailable span={TCommision.length} />
                </tbody>
              </Table>
            ) : (
              ''
            )}

            {show === 'expenses' ? (
              <Table>
                <TableHead>
                  <tr>
                    {TExpenses.map((item, key) => (
                      <th scope="col" className="px-4 py-3" key={key}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </TableHead>
                <tbody>
                  <NoDataAvailable span={TExpenses.length} />
                </tbody>
              </Table>
            ) : (
              ''
            )}
          </div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default SaleRepReport
