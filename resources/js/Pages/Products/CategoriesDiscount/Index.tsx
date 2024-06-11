import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Index = () => {
  return (
    <MainLayout>
      {/* <Modal show={showModal} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('categories.index'))}>
        <div className="grid grid-flow-row p-5 gap-5">
          <div className="flex justify-between items-center ">
            <h1>Add Category</h1>
            <span className="items-start cursor-pointer" onClick={handleShowModal}>
              x
            </span>
          </div>
          <div className="text-[10px]">
            <label htmlFor="">Category name:*</label>
            <TextInput className="p-1 w-full" />
          </div>
          <div className="text-[10px]">
            <label htmlFor="">Category Code:*</label>
            <TextInput className="p-1 w-full" />
          </div>
          <p className="text-[10px]">Category code is same as HSN code</p>
          <label className="inline-flex items-center gap-3 text-[10px]">
            <TextInput type="checkbox" onChange={() => setParentCategory(!showParentCategory)} checked={showParentCategory} />
            Add as Sub-category
          </label>
          {showParentCategory && (
            <div>
              <label className="text-[10px]">Select as sub-category</label>
              <select className="p-1 w-full rounded" name="cars" id="cars">
                <option value="" selected>
                  NONE
                </option>
                <option value=""></option>
              </select>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <hr />
            <button className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">Save</button>
            <button className="rounded-lg px-5 py-1 bg-red-500 text-white font-medium" onClick={handleShowModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal> */}
      <ContentTitle>
        Categories <span className="text-xs text-gray-300">Manage categories discount</span>
      </ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>Manage your categories</CardTitle>
          {/* <button type="button" onClick={handleShowModal} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
                Add
            </button> */}
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
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Discount</div>
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
              <td className="gap-2 whitespace-nowrap px-6 py-4 text-right">
                <button className="rounded bg-red-500 px-3 py-1 text-[10px] font-bold text-white hover:bg-red-700">
                  {' '}
                  Manage Discount
                </button>
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
