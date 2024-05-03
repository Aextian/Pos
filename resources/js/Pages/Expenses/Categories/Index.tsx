import CardBorderTop from '@/Components/CardBorderTop'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'

const Index = () => {
  const Thead = ['Category name', 'Category code', 'Action']
  const [open, setOpen] = useState(false)

  const handleShowModal = () => {
    setOpen(!open)
  }

  return (
    <MainLayout>
      
      <Modal show={open} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('category.index'))}>
        <div className="p-5 grid gap-5">
          <div className="flex justify-between px-5 py-2 text-xs border-b">
            <div>Add Expense Category</div>
            <button className="text-red-500" onClick={handleShowModal}>
              X
            </button>
          </div>

          <div className="text-xs">
            <label htmlFor="">Category name:*</label>
            <TextInput className="p-2 text-xs w-full" placeholder="Category name" />
          </div>
          <div className="text-xs">
            <label htmlFor="">Category code:*</label>
            <TextInput className="p-2 text-xs w-full" placeholder="Category code" />
          </div>
          <div className="border-t">
            <div className="flex justify-end gap-2">
              <PrimaryButton>Save</PrimaryButton>
              <PrimaryButton onClick={handleShowModal}>Cancel</PrimaryButton>
            </div>
          </div>
        </div>
      </Modal>

      <div className=" px-5 md:px-2">
        <h1 className="text-lg">
          Expense <span className="text-xs">Categories</span>
        </h1>
        <span className="text-xs text-gray-400">Manage your expense categories</span>
      </div>

      <CardBorderTop>
        {/* <span>{successMessage ? successMessage : ''}</span> */}
        <div className="flex flex-row justify-between items-center gap-2">
          <h1 className="text-lg font-medium">All your expense categories</h1>
          <button onClick={handleShowModal} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
            Add
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-[8px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-4 py-3">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
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
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
