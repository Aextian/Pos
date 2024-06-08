import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import Table from '@/Components/Shared/ui/Table/Table'
import TableBody from '@/Components/Shared/ui/Table/TableBody'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <LabelRow>
            <SpanLabel>Product Type:</SpanLabel>
            <select
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
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
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
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
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
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
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
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
              className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
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
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-3">
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
                <td className="rtl:text-center pl-4">
                  <input className="rounded" type="checkbox" name="" id="" />
                </td>
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
              </TableBody.Row>
            ))}
          </TableBody>
        </Table>
        <div className="my-2 text-white space-x-3 ml-2">
          <button className="bg-red-500 px-3 rounded">Delete Selected</button>
          <button className="bg-yellow-500 px-3 rounded">Delete Selected</button>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
