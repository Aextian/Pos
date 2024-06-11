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
import TextArea from '../../../shared/components/TextArea'
import { toast } from 'react-toastify'

type Props = {
  handleShowModal: () => void
  showModal: boolean
}

const AddCommissionAgentModal: React.FC<Props> = ({ handleShowModal, showModal }) => {
  const { reset, setData, post, processing, errors, clearErrors } = useForm({
    first_name: '',
    last_name: '',
    prefix: '',
    email: '',
    contact_no: '',
    address: '',
    cmmsn_percent: '',
  })

  const handleCloseModal = () => {
    handleShowModal()
    clearErrors()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('sales-commission-agents.store')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Sales commission agent added successfully')
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
        onClose={() => router.visit(route('sales-commission-agents.index'))}
      >
        <div className="flex items-center justify-between border-b p-5 dark:bg-gray-700">
          <h1 className="dark:text-white">Add Commission Agent</h1>
          <button
            type="button"
            className="items-start p-2 hover:text-red-500"
            onClick={handleCloseModal}
            disabled={processing}
          >
            <FaX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <LabelRow>
              <SpanLabel>Prefix</SpanLabel>
              <TextInput
                name="prefix"
                onChange={(e) => setData('prefix', e.target.value)}
                className="w-full p-2 text-xs"
                placeholder="Mr/Mrs"
              />
              <InputError message={errors.prefix} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>First name:*</SpanLabel>
              <TextInput
                name="first_name"
                onChange={(e) => setData('first_name', e.target.value)}
                className="w-full p-2 text-xs"
                placeholder="First name"
              />
              <InputError message={errors.first_name} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Last name:*</SpanLabel>
              <TextInput
                name="last_name"
                onChange={(e) => setData('last_name', e.target.value)}
                className="w-full p-2 text-xs"
                placeholder="Last name"
              />
              <InputError message={errors.last_name} />
            </LabelRow>
          </div>

          <div className="col-span-3 gap-5 md:grid md:grid-cols-2">
            <LabelRow>
              <SpanLabel>Email:</SpanLabel>
              <TextInput
                name="email"
                onChange={(e) => setData('email', e.target.value)}
                className="w-full p-2 text-xs"
                placeholder="Email"
              />
              <InputError message={errors.email} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Contact No:</SpanLabel>
              <TextInput
                name="contact_no"
                onChange={(e) => setData('contact_no', e.target.value)}
                className="w-full p-2 text-xs"
                placeholder="Contact No."
              />
              <InputError message={errors.contact_no} />
            </LabelRow>
          </div>

          <LabelRow>
            <SpanLabel>Address:</SpanLabel>
            <TextArea
              name="address"
              onChange={(e) => setData('address', e.target.value)}
              placeholder="Address"
            ></TextArea>
            <InputError message={errors.address} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Sales Commission Percentage(%):</SpanLabel>
            <TextInput
              name="cmmsn_percent"
              onChange={(e) => setData('cmmsn_percent', e.target.value)}
              className="w-full max-w-[450px] p-2 text-xs"
              placeholder="Sales Commission Percentage(%)."
            />
            <InputError message={errors.cmmsn_percent} />
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

export default memo(AddCommissionAgentModal)
