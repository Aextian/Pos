import React, { useState, memo } from 'react'
import Modal from '../Shared/ui/Modal/Modal'
import PrimaryButton from '../Shared/ui/Button/PrimaryButton'
import SecondaryButton from '../Shared/ui/Button/SecondaryButton'
import SpanLabel from '../Shared/ui/SpanLabel'
import LabelRow from '../Shared/ui/LabelRow'
import TextInput from '../Shared/ui/TextInput'
import { FaX } from 'react-icons/fa6'
import { router, useForm } from '@inertiajs/react'
import InputError from '../Shared/ui/InputError'
import { toast } from 'react-toastify'

interface Unit {
  id: number
  actual_name: string
  short_name: string
  allow_decimal: number
  base_unit_multiplier: number | null
  base_unit_id: number | null
}

interface Props {
  showModal: boolean
  handleShowModal: () => void
  units: Unit[]
}

const CreateUnit: React.FC<Props> = ({ showModal, handleShowModal, units }) => {
  const [showUnit, setShowUnit] = useState(false)
  const { reset, setData, post, processing, errors, data, clearErrors } = useForm({
    actual_name: '',
    short_name: '',
    allow_decimal: 0,
    base_unit_multiplier: 0 as null | number,
    base_unit_id: 0 as null | number,
  })

  const handleShowUnit = () => {
    setShowUnit((prevShowUnit) => !prevShowUnit)
    setData((prevState) => ({
      ...prevState,
      base_unit_multiplier: null,
      base_unit_id: null,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('unit.store')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        handleShowModal()
        toast.success('Unit added successfully')
        reset()
      },
    })
  }

  const handleCloseModal = () => {
    handleShowModal()
    clearErrors()
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('unit.index'))}>
        <div className="flex justify-between items-center p-5 border-b  dark:bg-gray-700">
          <h1 className="dark:text-white">Add Unit</h1>
          <button
            type="button"
            className="items-start p-2 hover:text-red-500"
            onClick={handleCloseModal}
            disabled={processing}>
            <FaX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-between border-b-2 items-center p-5">
          <div className="text-xs  space-y-3 w-full">
            <LabelRow>
              <SpanLabel>Name:*</SpanLabel>
              <TextInput
                name="actual_name"
                onChange={(e) => setData('actual_name', e.target.value)}
                className="w-full rounded p-2 text-xs"
                type="text"
                placeholder="Name"
              />
              <InputError message={errors.actual_name} />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Short name:*</SpanLabel>
              <TextInput
                name="short_name"
                onChange={(e) => setData('short_name', e.target.value)}
                className=" w-full rounded p-2 text-xs"
                type="text"
                placeholder="Short Name"
              />
              <InputError message={errors.short_name} />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Allow decimal:*</SpanLabel>
              <select
                onChange={(e) => setData('allow_decimal', parseFloat(e.target.value))}
                className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="allow_decimal"
                required
                value={data.allow_decimal}>
                <option value="" selected>
                  Please Select
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </LabelRow>
            <div className="space-y-2">
              <label className="inline-flex items-center gap-3">
                <input type="checkbox" onChange={handleShowUnit} checked={showUnit} />
                Add as multiple of other unit:
              </label>
            </div>
            {showUnit && (
              <div className="flex items-center gap-2 w-full ">
                <p className="text-[10px] whitespace-nowrap">1 Unit</p>
                <span>=</span>
                <TextInput
                  onChange={(e) => setData('base_unit_multiplier', parseFloat(e.target.value))}
                  type="number"
                  min={0}
                  name="base_unit_multiplier"
                  className="w-full text-xs p-2 "
                  placeholder="times base unit"
                />
                <select
                  name="base_unit_id"
                  onChange={(e) => setData('base_unit_id', parseFloat(e.target.value))}
                  className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600">
                  <option value="">Select base unit</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.actual_name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="w-full border-t p-5 flex justify-end gap-3">
              <PrimaryButton disabled={processing}>{processing ? 'Saving...' : 'Save'}</PrimaryButton>
              <SecondaryButton onClick={handleShowModal}>Close</SecondaryButton>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default memo(CreateUnit)
