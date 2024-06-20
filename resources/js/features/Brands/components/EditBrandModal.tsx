import React, { memo, useEffect } from 'react'
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
import { Brand } from '../types/brand-types'
import { ChangeEvent, FormEvent } from '@/shared/types/events'

type Props = {
  handleShowModal: Function
  showModal: boolean
  brand: Brand
}

const EditBrandModal: React.FC<Props> = ({ handleShowModal, showModal, brand }) => {
  const { reset, setData, put, processing, errors, clearErrors, data } = useForm<Brand>({
    id: null,
    name: '',
    description: '',
  })

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      name: brand.name,
      description: brand.description,
    }))
  }, [brand])

  const handleCloseModal = () => {
    handleShowModal(data)
    clearErrors()
  }

  const handleChange = (e: ChangeEvent) => {
    setData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const url = route('brand.update', { id: brand.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal(data)
        reset()
        toast.success('Brand updated successfully')
      },
    })
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('brand.index'))}>
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Edit Brand</h1>
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
            <SpanLabel>Brand name:*</SpanLabel>
            <TextInput
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-2 text-xs"
              placeholder="Brand name"
            />
            <InputError message={errors.name} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Short Description:*</SpanLabel>
            <TextInput
              name="description"
              value={data.description}
              onChange={handleChange}
              className="w-full p-2 text-xs"
              placeholder="Brand name"
            />
            <InputError message={errors.description} />
          </LabelRow>

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

export default memo(EditBrandModal)
