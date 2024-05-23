import React, { useState } from 'react'
import PrimaryButton from '../Shared/ui/Button/PrimaryButton'
import SecondaryButton from '../Shared/ui/Button/SecondaryButton'
import LabelRow from '../Shared/ui/LabelRow'
import SpanLabel from '../Shared/ui/SpanLabel'
import TextInput from '../Shared/ui/TextInput'
import { FaX } from 'react-icons/fa6'
import Modal from '../Shared/ui/Modal/Modal'
import { router } from '@inertiajs/react'

interface Props {
  handleShowModal: () => void
  showModal: boolean
}

const CreateCategoryModal: React.FC<Props> = ({ handleShowModal, showModal }) => {
  const [showParentCategory, setParentCategory] = useState(false)

  const [values, setValues] = useState({
    name: '',
    short_code: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('categories.store')
      const response = router.post(url, values)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <Modal show={showModal} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('categories.index'))}>
        <form className="grid grid-flow-row p-5 gap-5">
          <div className="flex justify-between items-center ">
            <h1>Add Category</h1>
            <span className="items-start cursor-pointer" onClick={handleShowModal}>
              <FaX />
            </span>
          </div>

          <LabelRow>
            <SpanLabel>Category name:*</SpanLabel>
            <TextInput name="name" className="p-2 text-xs w-full" placeholder="Category name" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Category Code:*</SpanLabel>
            <TextInput name="short_code" className="p-2 text-xs w-full" placeholder="Category code" />
          </LabelRow>

          <span className="text-[10px]">Category code is same as HSN code</span>

          <label className="inline-flex items-center gap-3 text-[10px]">
            <TextInput type="checkbox" onChange={() => setParentCategory(!showParentCategory)} checked={showParentCategory} />
            Add as Sub-category
          </label>

          {showParentCategory && (
            <LabelRow>
              <SpanLabel>Select as sub-category</SpanLabel>
              <select
                className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="cars">
                <option value="" selected>
                  NONE
                </option>
                <option value=""></option>
              </select>
            </LabelRow>
          )}

          <div className="flex justify-end gap-3">
            <PrimaryButton type="submit">Save</PrimaryButton>
            <SecondaryButton onClick={handleShowModal}>Cancel</SecondaryButton>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default CreateCategoryModal
