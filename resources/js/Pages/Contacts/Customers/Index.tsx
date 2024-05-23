import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

const Index = () => {
  const Thead = ['Contact ID', 'Business Name', 'Name', 'Contact', 'Total Purchase Due']
  return (
    <MainLayout>
      <ContentTitle>
        Customers <span className="text-xs text-gray-300">Manage your customers</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All your Customers</CardBorderTop.Title>
          <Link
            href={route('supplier.create')}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <div className="flex justify-end">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                  <FaSearch size={20} />
                </div>
              </div>
              <TextInput className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " type="search" name="" id="" />
            </div>
          </div>

          <Table>
            <TableHead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Contact ID
                </th>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">{item}</div>
                  </th>
                ))}
              </tr>
            </TableHead>
            <tbody>
              <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-2 text-xs">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]"> Edit</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]"> Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 text-black">
                <td colSpan={4} className="px-6 py-4 text-right font-bold">
                  Total
                </td>
                <td className="px-6 py-4 text-right font-bold">00</td>
                <td></td>
              </tr>
            </tfoot>
          </Table>
          <div className="flex justify-center items-center">pagination</div>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
