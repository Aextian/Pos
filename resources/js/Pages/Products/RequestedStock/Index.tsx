import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Index = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Requested <span className="text-xs text-gray-300">Stock</span>
      </ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>Request Stock</CardTitle>
        </CardHeader>
        <div className="flex justify-end">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                <FaSearch size={20} />
              </div>
            </div>
            <TextInput className="rounded-lg bg-slate-200 px-5 py-1 ps-10" type="search" name="" id="" />
          </div>
        </div>

        <Table>
          <TableHead>
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Request From</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Request To
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <span></span>
                </div>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr className="border- bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              ></th>
              <td className="px-6 py-4 text-right"></td>
              <td className="px-6 py-4 text-right"></td>
              <td className="px-6 py-4 text-right"></td>
              <td className="gap-2 whitespace-nowrap px-6 py-4 text-right">
                <button className="rounded bg-red-500 px-3 py-1 text-[10px] font-bold text-white hover:bg-red-700">
                  {' '}
                  Approved
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
