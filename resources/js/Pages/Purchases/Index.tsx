import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

function Index() {
  const data = [
    {
      sku: '00912',
      product: '	Abbocath/ iv Cath (g-20)',
      category: 'MED-SUP',
      unit: 'pcs',
      brand: 'CAN-CARE',
      tax: 'VAT@12%',
      price: '20.00',
    },
    {
      sku: '0092',
      product: '	Abbocath/ iv Cath (g-21)',
      category: 'SUP-MED',
      unit: 'box',
      brand: 'CAN-CARE',
      tax: 'VAT@20%',
      price: '20.00',
    },
  ]
  const Thead = [
    'Date',
    'Reference no',
    'Location',
    'Supplier',
    'purchase status',
    'payment status',
    'grand total',
    'payment due',
    'action',
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
      <ContentTitle>Purchases</ContentTitle>

      <CardBorderTop>
        <CardBorderTop.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <LabelRow>
              <SpanLabel>Business Location</SpanLabel>
              <select
                className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="type">
                <option value="" selected>
                  Please Select
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>

            <LabelRow>
              <SpanLabel>Supplier</SpanLabel>
              <select
                className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="type">
                <option value="" selected>
                  Please Select
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>

            <LabelRow>
              <SpanLabel>Purchase Status</SpanLabel>
              <select
                className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="type">
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
                className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="type">
                <option value="" selected>
                  Please Select
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
        </CardBorderTop.Content>
      </CardBorderTop>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All Purchases</CardBorderTop.Title>
          <Link
            href={route('purchase.create')}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
            Add
          </Link>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
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
                {data.map((product, index) => (
                  <tr
                    className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600"
                    key={index}>
                    <td className="rtl:text-center">02.03.2024</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                ))}
              </tbody>
            </Table>
          </div>
        </CardBorderTop.Content>

        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
