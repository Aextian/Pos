import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import DangerButton from '@/Components/Shared/ui/Button/DangerButton'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import Modal from '@/Components/Shared/ui/Modal/Modal'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

const Index = () => {
  const [inputs, setInputs] = useState<string[]>([])
  const [showModal, setShowModal] = useState(false)

  const addInput = () => {
    setInputs([...inputs, ''])
  }
  const removeInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index)
    setInputs(newInputs)
  }
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
  }
  const handleModal = () => {
    setShowModal(!showModal)
    setInputs([])
  }

  return (
    <MainLayout>
      <Modal show={showModal} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('variation-template.index'))}>
        <div className="flex justify-between border-b-2 items-center p-5">
          <h1>Add Variation</h1>
          <span className="items-start cursor-pointer" onClick={handleModal}>
            x
          </span>
        </div>
        <div className="text-xs p-5 space-y-4 w-full">
          <div className="space-y-2">
            <label htmlFor="">Variation Name:*</label>
            <TextInput className=" w-full rounded p-1" type="text" />
          </div>
          <div className="space-y-2">
            <label htmlFor="">Add variation values:*</label>
            <div>
              <TextInput className=" w-full rounded p-1" type="text" />
              <PrimaryButton onClick={addInput}>+</PrimaryButton>
            </div>
          </div>
          {inputs.map((input, index) => (
            <div className="space-y-2" key={index}>
              <label htmlFor="">Add variation values:*</label>
              <div>
                <TextInput className=" w-full rounded p-1" value={input} type="text" onChange={(e) => handleInputChange(index, e.target.value)} />
                <DangerButton onClick={() => removeInput(index)}>-</DangerButton>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <ContentTitle>
        Variations <span className="text-xs text-gray-300">Manage product variations</span>
      </ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>All variations</CardTitle>
          <SecondaryButton onClick={handleModal} className="rounded-lg px-5 py-1 bg-cyan-500  font-medium gap-2">
            <FaPlus /> Add
          </SecondaryButton>
        </CardHeader>

        <div className="flex justify-end">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                <FaSearch size={15} />
              </div>
            </div>
            <TextInput className="py-1 bg-slate-200 ps-10  text-[12px]" type="search" name="" id="" />
          </div>
        </div>

        <Table>
          <TableHead>
            <tr>
              <th scope="col" className="px-6 py-3">
                Variations
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  entries
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Action
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600">
              <td className="px-6 py-4 text-right"></td>
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
