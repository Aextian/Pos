import React, { useState, memo, useEffect } from 'react'
import PrimaryButton from '../../../shared/components/Button/PrimaryButton'
import SecondaryButton from '../../../shared/components/Button/SecondaryButton'
import LabelRow from '../../../shared/components/LabelRow'
import SpanLabel from '../../../shared/components/SpanLabel'
import TextInput from '../../../shared/components/TextInput'
import { FaCircleInfo, FaX } from 'react-icons/fa6'
import Modal from '../../../shared/components/Modal/Modal'
import { router } from '@inertiajs/react'
import InputError from '../../../shared/components/InputError'
import { useForm } from '@inertiajs/react'
import { toast } from 'react-toastify'
import TextArea from '@/shared/components/TextArea'
import { ChangeEvent } from '@/shared/types/events'
import { PriceGroup } from '../types/price-groups-types'

type Props = {
  handleShowModal: Function
  showModal: boolean
  price_group: PriceGroup
}

const EditPriceGroup: React.FC<Props> = ({ handleShowModal, showModal, price_group }) => {
  const { reset, setData, data, put, processing, errors, clearErrors } = useForm({
    id: null,
    name: '',
    description: '',
  })

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      name: price_group.name,
      description: price_group.description,
    }))
  }, [price_group])

  const handleCloseModal = () => {
    handleShowModal(price_group)
    clearErrors()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('price-group.update', { id: price_group.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal(price_group)
        reset()
        toast.success('Price Group created successfully')
      },
    })
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target
    setData((prevValues) => ({ ...prevValues, [name]: value }))
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('customer-group.index'))}>
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Add Selling Price Group</h1>
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
            <SpanLabel>Name:*</SpanLabel>
            <TextInput
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-2 text-xs"
              placeholder="Name"
            />
            <InputError message={errors.name} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Description:</SpanLabel>
            <TextArea
              name="description"
              value={data.description || ''}
              onChange={handleChange}
              className="w-full p-2 text-xs"
              placeholder="Description:"
            />
            <InputError message={errors.description} />
          </LabelRow>

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

export default memo(EditPriceGroup)
