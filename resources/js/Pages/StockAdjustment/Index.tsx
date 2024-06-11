import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Index = () => {
  const Thead = [
    'Date',
    'Reference No',
    'Location(From)',
    'Adjustment type',
    'Total Amount',
    'Total amount recovered',
    'action',
  ]
  return (
    <MainLayout>
      <ContentTitle>
        Stock
        <span className="text-xs text-gray-300"> Adjustments</span>
      </ContentTitle>
      <CardBorderTop>
        <CardTitle>All Stock Adjustments</CardTitle>
        <div className="flex flex-row items-center justify-between gap-2">
          <Link
            href={route('users.create')}
            className="inline-flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
          >
            <FaPlus />
            Add
          </Link>
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
              <NoDataAvailable span={Thead.length} />
            </tbody>
            <tfoot className="bg-gray-300 text-black">
              <tr className="text-[12px]">
                <td className="py-10 text-center" colSpan={2}>
                  Total
                </td>
                <td className="border-l">Received -1</td>
                <td className="border-l">Due -1</td>
                <td className="border-l">Php 17/86</td>
                <td className="border-l">Purchase Due - Php 17.86 Purchase Return - Php 0.00</td>
                <td></td>
              </tr>
            </tfoot>
          </Table>
        </div>
        <div className="flex items-center justify-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
