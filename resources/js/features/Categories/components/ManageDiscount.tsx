import React, { useEffect, useState, memo, useCallback } from 'react'
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
import { ChangeEvent, FormEvent } from '@/shared/types/events'

type Props = {
  categories: Category[]
  category: Category
  showModal: boolean
  handleShowModal: Function
}

const ManageDiscount: React.FC<Props> = ({ showModal, category, handleShowModal }) => {
  const { processing, errors, put, setData, data, clearErrors, reset } = useForm<Category>({
    id: null,
    name: '',
    cat_discount: 0,
    cat_status: false,
    short_code: '',
    parent_id: null,
  })

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      cat_discount: category.cat_discount,
      cat_status: category.cat_status,
    }))
  }, [category])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const url = route('discount-categories.update', { id: category.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal(category)
        reset()
        toast.success('Category updated successfully')
      },
    })
  }

  const handleCloseModal = useCallback(() => {
    clearErrors()
    reset()
    handleShowModal(category)
  }, [category])

  const handleChange = (e: ChangeEvent) => {
    const { name, value, type } = e.target
    setData((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? ((e.target as HTMLInputElement).checked ? true : false) : value,
    }))
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('discount-categories.index'))}>
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Set discount for {category.name}</h1>
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
            <SpanLabel>Category Discount:*</SpanLabel>
            <TextInput
              name="cat_discount"
              onChange={handleChange}
              value={data.cat_discount}
              className="w-full p-2 text-xs"
              placeholder="Category name"
            />
            <InputError message={errors.cat_discount} />
          </LabelRow>
          <label className="flex items-center gap-3 text-xs">
            <TextInput type="checkbox" onChange={handleChange} name="cat_status" checked={data.cat_status} />
            Activate Account
          </label>

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

export default memo(ManageDiscount)
