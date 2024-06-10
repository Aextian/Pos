import React, { useEffect, useState, memo } from 'react'
import Modal from '../../shared/components/Modal/Modal'
import PrimaryButton from '../../shared/components/Button/PrimaryButton'
import SecondaryButton from '../../shared/components/Button/SecondaryButton'
import SpanLabel from '../../shared/components/SpanLabel'
import LabelRow from '../../shared/components/LabelRow'
import TextInput from '../../shared/components/TextInput'
import { FaX } from 'react-icons/fa6'
import { router, useForm } from '@inertiajs/react'
import InputError from '../../shared/components/InputError'
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
  handleShowModal: Function
  unit: Unit
  units: Unit[]
}

const Editunit: React.FC<Props> = ({ showModal, handleShowModal, unit, units }) => {
  const [showUnit, setShowUnit] = useState(false)

  const { reset, setData, put, processing, errors, data } = useForm({
    actual_name: '',
    short_name: '',
    allow_decimal: 0,
    base_unit_multiplier: 0 as null | number,
    base_unit_id: 0 as null | number,
  })

  useEffect(() => {
    setShowUnit(unit.base_unit_id ? true : false)
    setData({
      actual_name: unit.actual_name,
      short_name: unit.short_name,
      allow_decimal: unit.allow_decimal,
      base_unit_multiplier: unit.base_unit_multiplier ?? null,
      base_unit_id: unit.base_unit_id ?? null,
    })
  }, [unit])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('unit.update', { id: unit.id })
    put(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Unit Updated successfully')
        reset()
        handleShowModal(data)
      },
    })
  }

  const handleShowUnit = () => {
    setShowUnit((prevShowUnit) => !prevShowUnit)
    setData((prevState) => ({
      ...prevState,
      base_unit_multiplier: null,
      base_unit_id: null,
    }))
  }

  const handleCloseModal = () => {
    reset()
    handleShowModal(data)
  }

  return (
    <>
      <Modal
        show={showModal}
        maxWidth="2xl"
        closeable={true}
        onClose={() => router.visit(route('unit.index'))}>
        <div className="flex justify-between items-center p-5 border-b  dark:bg-gray-700">
          <h1 className="dark:text-white">Edit Unit</h1>
          <button
            type="button"
            className="items-start p-2 hover:text-red-500"
            onClick={handleCloseModal}
            disabled={processing}>
            <FaX />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-between border-b-2 items-center p-5">
          <div className="text-xs   space-y-3 w-full">
            <LabelRow>
              <SpanLabel>Name:*</SpanLabel>
              <TextInput
                name="actual_name"
                value={data.actual_name}
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
                value={data.short_name}
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
                <option value="">Please Select</option>
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
              <>
                <div className="flex items-center gap-2 w-full border-t border-b py-2">
                  <p className="text-[10px] md:text-xs font-bold whitespace-nowrap">1 {data.actual_name}</p>
                  <span>=</span>
                  <TextInput
                    value={data.base_unit_multiplier || ''}
                    onChange={(e) => setData('base_unit_multiplier', parseFloat(e.target.value) ?? null)}
                    type="number"
                    min={0}
                    name="base_unit_multiplier"
                    className="w-full text-xs p-2 "
                    placeholder="times base unit"
                  />
                  <select
                    name="base_unit_id"
                    value={data.base_unit_id || ''}
                    onChange={(e) => setData('base_unit_id', parseFloat(e.target.value) ?? null)}
                    className="w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600">
                    <option value="">Select base unit</option>
                    {units.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.actual_name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-gray-500 py-5">
                  *Editing this value will hange the purchase & sales stocks accordingly
                </span>
              </>
            )}
            <div className="w-full border-t pt-10  flex justify-end gap-3">
              <PrimaryButton disabled={processing}>{processing ? 'Updating...' : 'Update'}</PrimaryButton>
              <SecondaryButton onClick={handleCloseModal}>Close</SecondaryButton>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default memo(Editunit)
