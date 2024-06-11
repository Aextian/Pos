import React, { useState, memo } from 'react'
import PrimaryButton from '../../shared/components/Button/PrimaryButton'
import SecondaryButton from '../../shared/components/Button/SecondaryButton'
import LabelRow from '../../shared/components/LabelRow'
import SpanLabel from '../../shared/components/SpanLabel'
import TextInput from '../../shared/components/TextInput'
import { FaCircleInfo, FaX } from 'react-icons/fa6'
import Modal from '../../shared/components/Modal/Modal'
import { router } from '@inertiajs/react'
import InputError from '../../shared/components/InputError'
import { useForm } from '@inertiajs/react'
import Tooltip from '../../shared/components/Tooltip'

type Props = {
  handleShowModal: () => void
  showModal: boolean
}

const CreateGroup: React.FC<Props> = ({ handleShowModal, showModal }) => {
  const { reset, setData, post, processing, errors, clearErrors } = useForm({
    name: '',
    amount: '',
  })

  const handleCloseModal = () => {
    handleShowModal()
    clearErrors()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('customer-group.store')
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
        onClose={() => router.visit(route('customer-group.index'))}
      >
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Add Customer Group</h1>
          <button
            type="button"
            className="items-start p-2 hover:text-red-500"
            onClick={handleCloseModal}
            disabled={processing}
          >
            <FaX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-flow-row gap-5 p-5 dark:bg-gray-700">
          <LabelRow>
            <SpanLabel>Customer Group Name:*</SpanLabel>
            <TextInput
              name="name"
              onChange={(e) => setData('name', e.target.value)}
              className="w-full p-2 text-xs"
              placeholder="Customer Group Name"
              required
            />
            <InputError message={errors.name} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>
              <div className="flex items-center gap-2">
                Calculation Percentage (%):
                <Tooltip
                  title="Selling price = Selling price Set For the product + Calculation percentage"
                  content="You can specify percentage as positive to increase and negative to decrease selling price"
                >
                  <FaCircleInfo />
                </Tooltip>
              </div>
            </SpanLabel>
            <TextInput
              type="number"
              name="amount"
              onChange={(e) => setData('amount', e.target.value)}
              className="w-full p-2 text-xs"
              placeholder="Calculation Percentage (%):"
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

export default memo(CreateGroup)
