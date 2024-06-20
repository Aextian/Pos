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
import { ChangeEvent, FormEvent } from '@/shared/types/events'
import { Tax } from '../types/taxes-types'

type Props = {
  handleShowModal: Function
  showModal: boolean
  tax: Tax
}

const CreateTaxRateModal: React.FC<Props> = ({ handleShowModal, showModal, tax }) => {
  const { reset, setData, post, processing, errors, clearErrors, data } = useForm<Tax>({
    id: null,
    name: '',
    amount: null,
    is_tax_group: false,
  })

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      name: tax.name,
      amount: tax.amount,
    }))
  }, [tax])

  const handleCloseModal = () => {
    handleShowModal(tax)
    clearErrors()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const url = route('tax-rates.update')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal(tax)
        reset()
        toast.success('Tax rates updated successfully')
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
        onClose={() => router.visit(route('categories.index'))}>
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Edit Tax Rate</h1>
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
            <SpanLabel> Name:*</SpanLabel>
            <TextInput
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-2 text-xs"
              placeholder="Name"
              required
            />
            <InputError message={errors.name} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Tax Rate %:*</SpanLabel>
            <TextInput
              name="amount"
              value={data.amount ?? 0}
              onChange={handleChange}
              className="w-full p-2 text-xs"
              required
            />
            <InputError message={errors.amount} />
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

export default memo(CreateTaxRateModal)
