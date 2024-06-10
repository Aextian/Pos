import React, { memo, useEffect } from 'react'
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
  handleShowModal: Function
  showModal: boolean
  group: {
    id: any
    name: string
    amount: string
  }
}

const Editgroup: React.FC<Props> = ({ handleShowModal, showModal, group }) => {
  const { reset, setData, put, data, processing, errors } = useForm({
    id: 0,
    name: '',
    amount: '',
  })

  useEffect(() => {
    setData({
      id: group.id,
      name: group.name,
      amount: group.amount,
    })
  }, [group])

  const handleCloseModal = () => {
    reset()
    handleShowModal(data)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('customer-group.update', { id: group.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal(data)
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
        onClose={() => router.visit(route('customer-group.index'))}>
        <div className="flex justify-between items-center p-5 border-b  dark:bg-gray-700">
          <h1 className="dark:text-white">Add Customer Group</h1>
          <button
            type="button"
            className="items-start p-2 hover:text-red-500"
            onClick={handleCloseModal}
            disabled={processing}>
            <FaX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-flow-row p-5 gap-5  dark:bg-gray-700">
          <LabelRow>
            <SpanLabel>Customer Group Name:*</SpanLabel>
            <TextInput
              name="name"
              onChange={(e) => setData('name', e.target.value)}
              value={data.name}
              className="p-2 text-xs w-full"
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
                  content="You can specify percentage as positive to increase and negative to decrease selling price">
                  <FaCircleInfo />
                </Tooltip>
              </div>
            </SpanLabel>
            <TextInput
              step={0.01}
              type="number"
              name="amount"
              onChange={(e) => setData('amount', e.target.value)}
              value={data.amount}
              className="p-2 text-xs w-full"
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

export default memo(Editgroup)
