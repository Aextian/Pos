import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

const Customer = () => {
  const Thead = ['Contact ID', 'Business Name', 'Name', 'Contact', 'Total Purchase Due']
  return (
    <MainLayout>
      <ContentTitle>
        Customers <span className="text-xs text-gray-300">Manage your customers</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All Your Customers</CardBorderTop.Title>
          <Link
            href={route('customer.create', { type: 'customer' })}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
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
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right"></td>
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-2 text-xs">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                      {' '}
                      Edit
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                      {' '}
                      Delete
                    </button>
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

export default Customer
