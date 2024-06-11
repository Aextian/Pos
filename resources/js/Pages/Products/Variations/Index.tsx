import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import DangerButton from '@/shared/components/Button/DangerButton'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Modal from '@/shared/components/Modal/Modal'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
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
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('variation-template.index'))}
      >
        <div className="flex items-center justify-between border-b-2 p-5">
          <h1>Add Variation</h1>
          <span className="cursor-pointer items-start" onClick={handleModal}>
            x
          </span>
        </div>
        <div className="w-full space-y-4 p-5 text-xs">
          <div className="space-y-2">
            <label htmlFor="">Variation Name:*</label>
            <TextInput className="w-full rounded p-1" type="text" />
          </div>
          <div className="space-y-2">
            <label htmlFor="">Add variation values:*</label>
            <div>
              <TextInput className="w-full rounded p-1" type="text" />
              <PrimaryButton onClick={addInput}>+</PrimaryButton>
            </div>
          </div>
          {inputs.map((input, index) => (
            <div className="space-y-2" key={index}>
              <label htmlFor="">Add variation values:*</label>
              <div>
                <TextInput
                  className="w-full rounded p-1"
                  value={input}
                  type="text"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
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
          <SecondaryButton
            onClick={handleModal}
            className="gap-2 rounded-lg bg-cyan-500 px-5 py-1 font-medium"
          >
            <FaPlus /> Add
          </SecondaryButton>
        </CardHeader>

        <div className="flex justify-end">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                <FaSearch size={15} />
              </div>
            </div>
            <TextInput className="bg-slate-200 py-1 ps-10 text-[12px]" type="search" name="" id="" />
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
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Action
                  <a href="#">
                    <svg
                      className="ms-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <tr className="border- bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="px-6 py-4 text-right"></td>
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
