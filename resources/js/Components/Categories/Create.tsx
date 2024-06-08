import React, { useState, memo } from 'react'
import PrimaryButton from '../Shared/ui/Button/PrimaryButton'
import SecondaryButton from '../Shared/ui/Button/SecondaryButton'
import LabelRow from '../Shared/ui/LabelRow'
import SpanLabel from '../Shared/ui/SpanLabel'
import TextInput from '../Shared/ui/TextInput'
import { FaX } from 'react-icons/fa6'
import Modal from '../Shared/ui/Modal/Modal'
import { router } from '@inertiajs/react'
import InputError from '../Shared/ui/InputError'
import { useForm } from '@inertiajs/react'

interface Category {
  id: number
  name: string
  short_code: string
  parent_id: string
}

type Props = {
  handleShowModal: () => void
  showModal: boolean
  data: Category[]
}

const CreateCategoryModal: React.FC<Props> = ({ handleShowModal, showModal, data }) => {
  const [showParentCategory, setParentCategory] = useState(false)
  const { reset, setData, post, processing, errors, clearErrors } = useForm({
    name: '',
    short_code: '',
    parent_id: '',
  })

  const handleCloseModal = () => {
    handleShowModal()
    clearErrors()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('categories.store')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal()
        reset()
      },
    })
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('categories.index'))}>
        <form onSubmit={handleSubmit} className="grid grid-flow-row p-5 gap-5 dark:bg-gray-700">
          <div className="flex justify-between items-center ">
            <h1 className="dark:text-white">Add Category</h1>
            <button
              type="button"
              className="items-start p-2 hover:text-red-500"
              onClick={handleCloseModal}
              disabled={processing}>
              <FaX />
            </button>
          </div>

          <LabelRow>
            <SpanLabel>Category name:*</SpanLabel>
            <TextInput
              name="name"
              onChange={(e) => setData('name', e.target.value)}
              className="p-2 text-xs w-full"
              placeholder="Category name"
              required
            />
            <InputError message={errors.name} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Category Code:*</SpanLabel>
            <TextInput
              name="short_code"
              onChange={(e) => setData('short_code', e.target.value)}
              className="p-2 text-xs w-full"
              placeholder="Category code"
              required
            />
            <InputError message={errors.short_code} />
          </LabelRow>

          <span className="text-[10px] dark:text-slate-200">Category code is same as HSN code</span>

          <label className="inline-flex items-center gap-3 text-[10px] dark:text-slate-200">
            <TextInput
              type="checkbox"
              onChange={() => {
                setParentCategory(!showParentCategory), setData('parent_id', '')
              }}
              checked={showParentCategory}
            />
            Add as Sub-category
          </label>

          {showParentCategory && (
            <LabelRow>
              <SpanLabel>Select as sub-category</SpanLabel>
              <select
                onChange={(e) => setData('parent_id', e.target.value)}
                className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="parent_id"
                value={''}
                required>
                <option value="" selected>
                  NONE
                </option>
                {data.map((category) => (
                  <option key={category.id} value={category.id} className="p-2">
                    {category.name}
                  </option>
                ))}
              </select>
            </LabelRow>
          )}

          <div className="flex justify-end gap-3">
            <PrimaryButton type="submit" disabled={processing}>
              {processing ? <span className="animate-pulse">Saving...</span> : 'Save'}
            </PrimaryButton>
            <SecondaryButton onClick={handleCloseModal} disabled={processing}>
              Cancel
            </SecondaryButton>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default memo(CreateCategoryModal)
