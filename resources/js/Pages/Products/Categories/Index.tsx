import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import Modal from '@/Components/Shared/ui/Modal/Modal'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import CreateCategoryModal from '@/Components/Categories/Create'

const Index = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showParentCategory, setParentCategory] = useState<boolean>(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <MainLayout>
      <CreateCategoryModal showModal={showModal} handleShowModal={handleShowModal} />

      <ContentTitle>
        Categories <span className="text-xs text-gray-300">Manage your categories</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Manage your categories</CardBorderTop.Title>
          <SecondaryButton type="button" onClick={handleShowModal} className="rounded-lg px-5 py-1 bg-cyan-500  font-medium gap-2">
            <FaPlus /> Add
          </SecondaryButton>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <Table>
            <TableHead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Category Code
                    <a href="#">
                      <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
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
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
