import React, { useState, memo } from 'react'
import PrimaryButton from '../../../shared/components/Button/PrimaryButton'
import SecondaryButton from '../../../shared/components/Button/SecondaryButton'
import LabelRow from '../../../shared/components/LabelRow'
import SpanLabel from '../../../shared/components/SpanLabel'
import TextInput from '../../../shared/components/TextInput'
import { FaX } from 'react-icons/fa6'
import Modal from '../../../shared/components/Modal/Modal'
import { router } from '@inertiajs/react'
import InputError from '../../../shared/components/InputError'
import { useForm } from '@inertiajs/react'
import { toast } from 'react-toastify'
import { Category } from '../types/categories-types'
import { FormEvent } from '@/shared/types/events'

type Props = {
  handleShowModal: () => void
  showModal: boolean
  categories: Category[]
}

const CreateCategoryModal: React.FC<Props> = ({ handleShowModal, showModal, categories }) => {
  const [showParentCategory, setParentCategory] = useState<boolean>(false)

  const { reset, setData, post, processing, errors, clearErrors, data } = useForm<Category>({
    id: null,
    name: '',
    short_code: '',
    parent_id: null,
  })

  const handleCloseModal = () => {
    handleShowModal()
    clearErrors()
  }

  const handleParentCategory = () => {
    setData('parent_id', null)
    setParentCategory(!showParentCategory)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const url = route('categories.store')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal()
        reset()
        toast.success('Category created successfully')
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
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Add Category</h1>
          <button
            type="button"
            className="items-start p-2 hover:text-red-500"
            onClick={handleCloseModal}
            disabled={processing}>
            <FaX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-flow-row gap-5 p-5 dark:bg-gray-700">
          <LabelRow>
            <SpanLabel>Category name:*</SpanLabel>
            <TextInput
              name="name"
              onChange={(e) => setData('name', e.target.value)}
              className="w-full p-2 text-xs"
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
              className="w-full p-2 text-xs"
              placeholder="Category code"
              required
            />
            <InputError message={errors.short_code} />
          </LabelRow>

          <span className="text-[10px] dark:text-slate-200">Category code is same as HSN code</span>

          <label className="inline-flex items-center gap-3 text-[10px] dark:text-slate-200">
            <TextInput type="checkbox" onChange={handleParentCategory} checked={showParentCategory} />
            Add as Sub-category
          </label>

          {showParentCategory && (
            <LabelRow>
              <SpanLabel>Select as sub-category</SpanLabel>
              <select
                onChange={(e) => setData('parent_id', Number(e.target.value))}
                className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                name="parent_id"
                value={data.parent_id ?? undefined}
                required>
                <option value="" selected>
                  NONE
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id ?? undefined} className="p-2">
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
