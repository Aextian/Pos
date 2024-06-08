import React, { memo, useEffect, useState } from 'react'
import PrimaryButton from '../Shared/ui/Button/PrimaryButton'
import SecondaryButton from '../Shared/ui/Button/SecondaryButton'
import LabelRow from '../Shared/ui/LabelRow'
import SpanLabel from '../Shared/ui/SpanLabel'
import TextInput from '../Shared/ui/TextInput'
import { FaX } from 'react-icons/fa6'
import Modal from '../Shared/ui/Modal/Modal'
import { router, useForm } from '@inertiajs/react'
import InputError from '../Shared/ui/InputError'

import TextArea from '../Shared/ui/TextArea'
import { toast } from 'react-toastify'

interface User {
  id: string
  full_name: string
  first_name: string
  last_name: string
  email: string
  contact_no: string
  prefix: string
  address: string
  cmmsn_percent: string
}

type Props = {
  handleShowModal: Function
  showModal: boolean
  user: User
}

const EditCommissionAgent: React.FC<Props> = ({ handleShowModal, showModal, user }) => {
  const { data, reset, setData, processing, errors, clearErrors, put } = useForm({
    id: '',
    first_name: '',
    last_name: '',
    prefix: '',
    email: '',
    contact_no: '',
    address: '',
    cmmsn_percent: '',
  })

  useEffect(() => {
    setData({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      prefix: user.prefix,
      email: user.email,
      contact_no: user.contact_no,
      address: user.address,
      cmmsn_percent: user.cmmsn_percent,
    })
  }, [user])

  const handleCloseModal = () => {
    clearErrors()
    reset()
    handleShowModal(data)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('sales-commission-agents.update', { id: user.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Sales commission agent updated successfully')
        reset()
        handleShowModal(data)
      },
    })
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('sales-commission-agents.index'))}>
        <div className="flex justify-between items-center border border-b p-3">
          <h1 className="text-lg text-slate-500">Edit sales commission agent</h1>
          <button
            type="button"
            className="items-start text-xs text-slate-400 hover:text-slate-500 "
            onClick={handleCloseModal}
            disabled={processing}>
            <FaX size={10} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <LabelRow>
              <SpanLabel>Prefix</SpanLabel>
              <TextInput
                name="prefix"
                onChange={(e) => setData('prefix', e.target.value)}
                className="p-2 text-xs w-full"
                value={data.prefix || ''}
                placeholder="Mr/Mrs"
              />
              <InputError message={errors.prefix} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>First name:*</SpanLabel>
              <TextInput
                name="first_name"
                value={data.first_name}
                onChange={(e) => setData('first_name', e.target.value)}
                className="p-2 text-xs w-full"
                placeholder="First name"
              />
              <InputError message={errors.first_name} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Last name:*</SpanLabel>
              <TextInput
                name="last_name"
                value={data.last_name || ''}
                onChange={(e) => setData('last_name', e.target.value)}
                className="p-2 text-xs w-full"
                placeholder="Last name"
              />
              <InputError message={errors.last_name} />
            </LabelRow>
          </div>

          <div className="col-span-3 md:grid md:grid-cols-2 gap-5">
            <LabelRow>
              <SpanLabel>Email:</SpanLabel>
              <TextInput
                name="email"
                value={data.email || ''}
                onChange={(e) => setData('email', e.target.value)}
                className="p-2 text-xs w-full"
                placeholder="Email"
              />
              <InputError message={errors.email} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Contact No:</SpanLabel>
              <TextInput
                name="contact_no"
                value={data.contact_no || ''}
                onChange={(e) => setData('contact_no', e.target.value)}
                className="p-2 text-xs w-full"
                placeholder="Contact No."
              />
              <InputError message={errors.contact_no} />
            </LabelRow>
          </div>

          <LabelRow>
            <SpanLabel>Address:</SpanLabel>
            <TextArea
              name="address"
              value={data.address || ''}
              onChange={(e) => setData('address', e.target.value)}
              placeholder="Address"></TextArea>
            <InputError message={errors.address} />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Sales Commission Percentage(%):</SpanLabel>
            <TextInput
              name="cmmsn_percent"
              value={data.cmmsn_percent || ''}
              onChange={(e) => setData('cmmsn_percent', e.target.value)}
              className="p-2 text-xs max-w-[450px] w-full"
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

export default memo(EditCommissionAgent)
