import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import Table from '@/shared/components/Table/Table'
import TableBody from '@/shared/components/Table/TableBody'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Datepicker from 'react-tailwindcss-datepicker'

const Index = () => {
  const Thead = ['SKU', 'Product', 'Category', 'Unit', 'Brand', 'Tax', 'Price', 'action']
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
  return (
    <MainLayout>
      <ContentTitle>
        Products <span className="text-xs text-slate-300">Manage your products</span>
      </ContentTitle>
      <CardBorderTop>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <LabelRow>
            <SpanLabel>Product Type:</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Category:</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Unit:</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Tax:</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            <SpanLabel>Brand:</SpanLabel>
            <select
              className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              name="type"
            >
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
        </div>
      </CardBorderTop>
      <CardBorderTop>
        {/* <span>{successMessage ? successMessage : ''}</span> */}
        <CardBorderTop.Header>
          <CardBorderTop.Title>All Products</CardBorderTop.Title>
          <Link
            href={route('users.create')}
            className="inline-flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
          >
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>

        <Table>
          <TableHead>
            <tr>
              <th className="pl-4">
                <input className="rounded" type="checkbox" name="" id="" />
              </th>
              {Thead.map((item, index) => (
                <th scope="col" className="px-4 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </TableHead>
          <TableBody>
            {data.map((product, index) => (
              <TableBody.Row key={index}>
                <td className="pl-4 rtl:text-center">
                  <input className="rounded" type="checkbox" name="" id="" />
                </td>
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {product.sku}
                </td>
                <td className="px-6 py-4">{product.product}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.unit}</td>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.tax}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">
                  <button className="rounded bg-cyan-500 px-2 text-white">Action</button>
                </td>
              </TableBody.Row>
            ))}
          </TableBody>
        </Table>
        <div className="my-2 ml-2 space-x-3 text-white">
          <button className="rounded bg-red-500 px-3">Delete Selected</button>
          <button className="rounded bg-yellow-500 px-3">Delete Selected</button>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
