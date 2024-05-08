import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Index = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <MainLayout>
      <Modal show={showModal} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('brand.index'))}>
        <div className="grid grid-flow-row p-5 gap-5 w-full">
          <div className="flex justify-between items-center ">
            <h1>Add Brand</h1>
            <span className="items-start cursor-pointer" onClick={() => setShowModal(false)}>
              <FaX />
            </span>
          </div>
          <LabelRow>
            <SpanLabel>Brand name:*</SpanLabel>
            <TextInput className="p-2 text-xs w-full" placeholder="Brand" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Short Description:*</SpanLabel>
            <TextInput className="p-2 text-xs w-full" placeholder="Description" />
          </LabelRow>

          <div className="flex justify-end gap-3">
            <hr />
            <button className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">Save</button>
            <button className="rounded-lg px-5 py-1 bg-red-500 text-white font-medium" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <ContentTitle>
        Brands <span className="text-xs">Manage your brands</span>
      </ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>All your brands</CardTitle>
          <SecondaryButton type="button" onClick={() => setShowModal(!showModal)} className="rounded-lg px-5 py-1 bg-cyan-500 font-medium gap-2">
            <FaPlus /> Add
          </SecondaryButton>
        </CardHeader>
        <div className="flex justify-end">
          <div className=" relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                <FaSearch size={20} />
              </div>
            </div>
            <input className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " type="search" name="" id="" />
          </div>
        </div>

        <Table>
          <TableHead>
            <tr>
              <th scope="col" className="px-6 py-3">
                Brands
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Note
                  <a href="#"></a>
                </div>
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <span></span>
                </div>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
              <td className="px-6 py-4 text-right"></td>
              <td className="px-6 py-4 text-right">
                <div className="flex gap-2 text-xs">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]"> Edit</button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]"> Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
