import React, { useEffect, useState, memo } from 'react'
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

type Props = {
  categories: Category[]
  category: Category
  showModal: boolean
  handleShowModal: Function
}

const EditCategoryModal: React.FC<Props> = ({ showModal, category, handleShowModal, categories }) => {
  const [showParentCategory, setParentCategory] = useState(false)

  const { processing, errors, put, setData, data, clearErrors, reset } = useForm<Category>({
    id: null,
    name: '',
    short_code: '',
    parent_id: null,
  })

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      name: category.name,
      short_code: category.short_code,
      parent_id: category.parent_id,
    }))

    if (category.parent_id) {
      setParentCategory(true)
    } else {
      setParentCategory(false)
    }
  }, [category])

  const handleShowParentCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    if (!checked) setData((prevValues) => ({ ...prevValues, parent_id: null }))
    setParentCategory(!showParentCategory)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('categories.update', { id: category.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal(data)
        reset()
        toast.success('Category updated successfully')
      },
    })
  }

  const handleCloseModal = () => {
    clearErrors()
    reset()
    handleShowModal(data)
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('categories.index'))}>
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Edit Category</h1>
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
              value={data.name}
              className="w-full p-2 text-xs"
              placeholder="Category name"
            />
            <InputError message={errors.name} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Category Code:*</SpanLabel>
            <TextInput
              name="short_code"
              onChange={(e) => setData('short_code', e.target.value)}
              value={data.short_code}
              className="w-full p-2 text-xs"
              placeholder="Category code"
            />
            <InputError message={errors.short_code} />
          </LabelRow>
          <span className="text-[10px] dark:text-slate-200">Category code is same as HSN code</span>

          <label className="inline-flex items-center gap-3 text-[10px] dark:text-slate-200">
            <TextInput type="checkbox" onChange={handleShowParentCategory} checked={showParentCategory} />
            Add as Sub-category
          </label>

          {showParentCategory && (
            <LabelRow>
              <SpanLabel>Select as sub-category</SpanLabel>
              <select
                onChange={(e) => setData('parent_id', Number(e.target.value))}
                value={data.parent_id ?? undefined}
                className="w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                name="parent_id">
                <option value="">NONE</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id ?? undefined} hidden={cat.id === category.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </LabelRow>
          )}
          <div className="flex justify-end gap-3">
            <PrimaryButton type="submit" disabled={processing}>
              {processing ? <span className="animate-pulse">Updating...</span> : 'Update'}
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

export default memo(EditCategoryModal)
