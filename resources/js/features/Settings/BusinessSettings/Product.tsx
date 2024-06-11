import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React, { useState } from 'react'
import { BiCalendar } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { FaBalanceScale, FaClock, FaDollarSign } from 'react-icons/fa'
import { PiEnvelope } from 'react-icons/pi'

const Product: React.FC<{ open: string }> = ({ open }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <>
      <div className={`${open === 'Product' ? '' : 'hidden'} grid grid-cols-1 gap-5 md:grid-cols-3`}>
        <LabelRow>
          <SpanLabel>SKU prefix: *</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-2 text-xs" placeholder="SKU prefix" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Enable Product Expiry: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 px-3 py-1 dark:border-slate-500">
              <TextInput
                defaultChecked={isChecked}
                onChange={handleExpiry}
                type="checkbox"
                className="w-full rounded-none px-2 text-xs"
              />
            </div>
            <select
              name="time_format"
              className="w-full rounded-none p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
            >
              <option value="">FI</option>
              <option value="">FO</option>
            </select>
          </div>
        </LabelRow>
        {isChecked && <ProductExpiry />}
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Brands</span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Categories</span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Sub-Categories</span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Price & Tax Info</span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Brands</span>
        </label>
        <LabelRow>
          <SpanLabel>Default Unit:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="mt-2 border border-r-0 p-2 dark:border-slate-500 dark:text-white">
              <FaBalanceScale size={16} />
            </div>
            <select
              name="time_format"
              className="mt-2 w-full rounded-none p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
            >
              <option value="" selected>
                Please Select
              </option>
              <option value="">FO</option>
            </select>
          </div>
        </LabelRow>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Racks</span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Row</span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none" />
          <span className="text-xs font-bold">Enable Position</span>
        </label>
      </div>
    </>
  )
}

const ProductExpiry = () => {
  return (
    <>
      <LabelRow>
        <SpanLabel>On Product Expiry</SpanLabel>
        <div className="flex items-center justify-center">
          <select
            name="time_format"
            className="w-full rounded-none p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
          >
            <option value="">FI</option>
            <option value="">FO</option>
          </select>
          <TextInput className="w-full rounded-none p-2 text-xs" value={0} />
        </div>
      </LabelRow>
    </>
  )
}
export default Product
