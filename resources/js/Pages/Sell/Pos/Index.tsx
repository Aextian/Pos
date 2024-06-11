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
import React, { PropsWithChildren, useState } from 'react'
import { BiCaretDownCircle } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'
import Datepicker from 'react-tailwindcss-datepicker'

const Index = () => {
  // Table Header
  const Thead = [
    'Date',
    'Invoice No',
    'Customer name',
    'Location',
    'Payment status',
    'Total amount',
    'Total paid',
    'Payment due',
    'Vatable',
    'Vat@12%',
    'Vat Exempt',
    'Vat Zero Rated',
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
      <ContentTitle>Pos</ContentTitle>

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
          <CardTitle>List POS</CardTitle>
          <Link
            href={route('users.create')}
            className="inline-flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
          >
            <FaPlus /> Add
          </Link>
        </CardHeader>
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
          {/* <tfoot className="bg-gray-300 text-black">
            <tr className="text-[12px]">
              <td className="text-center py-10 " colSpan={5}>
                Total
              </td>
              <td className="border-l">Received -1</td>
              <td className="border-l">Due -1</td>
              <td className="border-l">Php 17/86</td>
              <td className="border-l">Purchase Due - Php 17.86 Purchase Return - Php 0.00</td>
              <td></td>
            </tr>
          </tfoot> */}
        </Table>
      </CardBorderTop>
    </MainLayout>
  )
}

const PostLabel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <label htmlFor="" className="block w-full text-xs font-medium text-gray-700">
        {children}
      </label>
    </>
  )
}

export default Index
