import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import Modal from '@/Components/Shared/ui/Modal/Modal'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'

const Index = () => {
  const Thead = ['Category name', 'Category code', 'Action']
  const [open, setOpen] = useState(false)

  const handleShowModal = () => {
    setOpen(!open)
  }

  return (
    <MainLayout>
      <Modal show={open} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('category.index'))}>
        <div className="grid gap-3 p-3 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between">
            <h1 className="font-bold dark:text-white">Add Tax Rate</h1>
            <button onClick={() => setOpen(false)}>
              <FaX className="dark:text-white" />
            </button>
          </div>
          <hr />
          <div>
            <label>
              <SpanLabel>Category name:*</SpanLabel>
              <TextInput className="text-xs p-2 w-full" placeholder="Category name" />
            </label>
            <label>
              <SpanLabel> Category code:*</SpanLabel>
              <TextInput className="text-xs p-2 w-full" placeholder="Category code" />
            </label>
          </div>
          <div className="flex justify-end gap-3">
            <SecondaryButton onClick={() => setOpen(false)}>Cancel</SecondaryButton>
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </Modal>
      <ContentTitle>
        Expense <span className="text-xs">Categories</span>
      </ContentTitle>
      <span className="text-xs text-gray-400">Manage your expense categories</span>

      <CardBorderTop>
        {/* <span>{successMessage ? successMessage : ''}</span> */}
        <CardHeader>
          <CardTitle>All your expense categories</CardTitle>
          <SecondaryButton onClick={handleShowModal}>Add</SecondaryButton>
        </CardHeader>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table>
            <TableHead>
              <tr>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-4 py-3">
                    {item}
                  </th>
                ))}
              </tr>
            </TableHead>
            <tbody>
              {/* {data.map((product, index) => (
              <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                <td className="rtl:text-center">02.03.2024</td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.sku}
                </td>
                <td className="px-6 py-4">{product.product}</td>
                <td className="px-6 py-4">{product.category}</td>

                <td className="px-6 py-4">{product.unit}</td>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.tax}</td>
                <td className="px-6 py-4">{product.price}</td>

                <td className="px-6 py-4">
                  <button className="px-2 text-white rounded bg-cyan-500">Action</button>
                </td>
              </tr>
            ))} */}
              <NoDataAvailable span={Thead.length} />
            </tbody>
          </Table>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
