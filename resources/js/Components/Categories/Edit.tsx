import React, { useEffect, useState, memo } from 'react'
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

interface Props {
  categories: Category[]
  showModal: boolean
  handleShowModal: Function
  category: {
    id: any
    name: string
    short_code: string
    parent_id: string
  }
}

const EditCategoryModal: React.FC<Props> = ({ showModal, category, handleShowModal, categories }) => {
  const [showParentCategory, setParentCategory] = useState(false)

  const { processing, errors, put, setData, data, clearErrors, reset } = useForm({
    name: '',
    short_code: '',
    parent_id: '',
  })

  useEffect(() => {
    setData({
      name: category.name,
      short_code: category.short_code,
      parent_id: category.parent_id,
    })

    if (category.parent_id) {
      setParentCategory(true)
    } else {
      setParentCategory(false)
    }
  }, [category])

  const handleShowParentCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked

    if (!checked) setData((prevValues) => ({ ...prevValues, parent_id: '' }))

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
        <form onSubmit={handleSubmit} className="grid grid-flow-row p-5 gap-5 dark:bg-gray-700">
          <div className="flex justify-between items-center ">
            <h1 className="dark:text-white">Edit Category</h1>
            <button
              type="button"
              className="items-start hover:text-red-500"
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
              value={data.name}
              className="p-2 text-xs w-full"
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
              className="p-2 text-xs w-full"
              placeholder="Category code"
            />
            <InputError message={errors.short_code} />
          </LabelRow>
          <span className="text-[10px] dark:text-slate-200">Category code is same as HSN code</span>

          <label className="inline-flex items-center gap-3 text-[10px] dark:text-slate-200 ">
            <TextInput type="checkbox" onChange={handleShowParentCategory} checked={showParentCategory} />
            Add as Sub-category
          </label>

          {showParentCategory && (
            <LabelRow>
              <SpanLabel>Select as sub-category</SpanLabel>
              <select
                onChange={(e) => setData('parent_id', e.target.value)}
                value={data.parent_id}
                className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="parent_id">
                <option value="">NONE</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id} hidden={cat.id === category.id}>
                    {cat.name}
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

export default memo(EditCategoryModal)
