import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import DangerButton from '@/shared/components/Button/DangerButton'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextArea from '@/shared/components/TextArea'
import Modal from '@/shared/components/Modal/Modal'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

const Index = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <MainLayout>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('price-group.index'))}>
        <div className="flex justify-between border-b-2 items-center p-5">
          <h5>Add Selling Price Group</h5>
          <span className="items-start cursor-pointer" onClick={handleModal}>
            x
          </span>
        </div>
        <div className="text-xs p-5 space-y-4 w-full">
          <div className="space-y-2">
            <LabelRow>
              <SpanLabel>Name:*</SpanLabel>
              <TextInput className=" w-full rounded p-1" type="text" />
            </LabelRow>
          </div>
          <div className="space-y-2">
            <LabelRow>
              <SpanLabel>Description:</SpanLabel>
              <TextArea className="w-full" cols={30} rows={3}></TextArea>
            </LabelRow>
          </div>
        </div>
        <div className="w-full border-t p-5 flex justify-end gap-3">
          <PrimaryButton>Save</PrimaryButton>
          <SecondaryButton onClick={handleModal}>Close</SecondaryButton>
        </div>
      </Modal>
      <ContentTitle>Selling Price Group</ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>All Selling Price Group</CardTitle>
          <SecondaryButton onClick={handleModal} className="gap-2">
            <FaPlus />
            Add
          </SecondaryButton>
        </CardHeader>
        <div className="flex justify-end">
          <div className=" relative">
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Description
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Action</div>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
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
            <NoDataAvailable span={3} />
          </tbody>
        </Table>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
