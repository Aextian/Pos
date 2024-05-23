import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

const Index = () => {
  const Thead = ['Date', 'Reference No', 'Customer Name', 'Location', 'Action']
  return (
    <MainLayout>
      <ContentTitle>List Quotations</ContentTitle>

      <CardBorderTop>
        <div className="flex flex-row justify-end items-center gap-2">
          <Link
            href={route('users.create')}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-3">
            <FaPlus /> Add
          </Link>
        </div>
        <div className="self-end relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <FaSearch size={20} />
            </div>
          </div>
          <TextInput className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " type="search" name="" id="" />
        </div>
        <Table>
          <TableHead>
            <tr>
              {Thead.map((item, index) => (
                <th scope="col" className="px-4 py-3 border-r" key={index}>
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
          </tbody>
        </Table>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
