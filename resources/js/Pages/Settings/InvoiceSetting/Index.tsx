import ContentTitle from '@/Components/ContentTitle'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
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
        <div className="grid border gap-3 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-flow-col dark:text-white">
            <button className={`border font-bold p-3 ${show ? 'border-b-0  border-x-0 md:border-t-2 border-t-cyan-600' : ''}`} onClick={() => setShow(true)}>
              Invoice Schemes
            </button>
            <button className={`border font-bold  p-3 ${show ? '' : 'border-b-0 border-x-0 md:border-t-2 border-t-cyan-600'}`} onClick={() => setShow(false)}>
              Invoice Layouts
            </button>
          </div>
          <div className={`p-3 space-y-3 ${show ? '' : 'hidden'}`}>
            <div className="flex justify-between gap-3 items-center">
              <h1 className="font-bold text-lg dark:text-white">All your invoice schemes</h1>
              <Link
                href={route('invoice-schemes.create')}
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
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
          <div className={`p-3 space-y-3 ${show ? 'hidden' : ''}`}>
            <div className="flex justify-between gap-3 items-center">
              <h1 className="font-bold text-lg dark:text-white">All your invoice layouts</h1>
              <Link
                href={route('invoice-schemes.create')}
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
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
