import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Modal from '@/shared/components/Modal/Modal'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Index = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <MainLayout>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('brand.index'))}
      >
        <div className="grid w-full grid-flow-row gap-5 p-5">
          <div className="flex items-center justify-between">
            <h1>Add Brand</h1>
            <span className="cursor-pointer items-start" onClick={() => setShowModal(false)}>
              <FaX />
            </span>
          </div>
          <LabelRow>
            <SpanLabel>Brand name:*</SpanLabel>
            <TextInput className="w-full p-2 text-xs" placeholder="Brand" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Short Description:*</SpanLabel>
            <TextInput className="w-full p-2 text-xs" placeholder="Description" />
          </LabelRow>

          <div className="flex justify-end gap-3">
            <hr />
            <button className="rounded-lg bg-cyan-500 px-5 py-1 font-medium text-white">Save</button>
            <button
              className="rounded-lg bg-red-500 px-5 py-1 font-medium text-white"
              onClick={() => setShowModal(false)}
            >
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
          <SecondaryButton
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="gap-2 rounded-lg bg-cyan-500 px-5 py-1 font-medium"
          >
            <FaPlus /> Add
          </SecondaryButton>
        </CardHeader>
        <div className="flex justify-end">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                <FaSearch size={20} />
              </div>
            </div>
            <input className="rounded-lg bg-slate-200 px-5 py-1 ps-10" type="search" name="" id="" />
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
            <tr className="border- bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              ></th>
              <td className="px-6 py-4 text-right"></td>
              <td className="px-6 py-4 text-right">
                <div className="flex gap-2 text-xs">
                  <button className="rounded bg-red-500 px-3 py-1 text-[10px] font-bold text-white hover:bg-red-700">
                    {' '}
                    Edit
                  </button>
                  <button className="rounded bg-blue-500 px-3 py-1 text-[10px] font-bold text-white hover:bg-blue-700">
                    {' '}
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="flex items-center justify-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
