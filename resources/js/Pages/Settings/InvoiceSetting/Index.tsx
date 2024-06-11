import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const Index = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <MainLayout>
        <ContentTitle>
          Invoice Settings <span className="text-xs text-gray-300"> Manage your invoice settings</span>
        </ContentTitle>
        <div className="grid gap-3 border shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="grid grid-flow-col dark:text-white">
            <button
              className={`border p-3 font-bold ${
                show ? 'border-x-0 border-b-0 border-t-cyan-600 md:border-t-2' : ''
              }`}
              onClick={() => setShow(true)}
            >
              Invoice Schemes
            </button>
            <button
              className={`border p-3 font-bold ${
                show ? '' : 'border-x-0 border-b-0 border-t-cyan-600 md:border-t-2'
              }`}
              onClick={() => setShow(false)}
            >
              Invoice Layouts
            </button>
          </div>
          <div className={`space-y-3 p-3 ${show ? '' : 'hidden'}`}>
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-lg font-bold dark:text-white">All your invoice schemes</h1>
              <Link
                href={route('invoice-schemes.create')}
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
              >
                <FaPlus /> add
              </Link>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <tr className="border">
                    <th className="border-r px-2">name</th>
                    <th className="border-r px-2">prefix</th>
                    <th className="border-r px-2">Start from</th>
                    <th className="border-r px-2">Invoice count</th>
                    <th className="border-r px-2">Number of degits</th>
                    <th className="border-r px-2">Action</th>
                  </tr>
                </TableHead>
                <tbody>
                  <tr>
                    <td className="border-r px-2"></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className={`space-y-3 p-3 ${show ? 'hidden' : ''}`}>
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-lg font-bold dark:text-white">All your invoice layouts</h1>
              <Link
                href={route('invoice-schemes.create')}
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
              >
                <FaPlus /> add
              </Link>
            </div>
            <Link href={route('invoice-schemes.create')} className="dark:text-white">
              File
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
export default Index
