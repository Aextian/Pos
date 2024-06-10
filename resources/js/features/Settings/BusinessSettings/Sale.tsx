import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'
import { FaInfo, FaPercent } from 'react-icons/fa'

const Sale: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Sale' ? '' : 'hidden'} grid grid-cols-1 md:grid-cols-3 gap-5 `}>
        <LabelRow>
          <SpanLabel>Default Sale Discount: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 p-2 dark:text-white dark:border-slate-500">
              <FaPercent size={16} />
            </div>
            <TextInput className="text-xs p-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Default Sale Tax: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 p-2 dark:text-white dark:border-slate-500">
              <FaInfo size={16} />
            </div>
            <TextInput className="text-xs p-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sale Commission Agent: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 p-2 dark:text-white dark:border-slate-500">
              <FaInfo size={16} />
            </div>
            <TextInput className="text-xs p-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sales item Additional Method: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 p-2 dark:text-white dark:border-slate-500">
              <FaInfo size={16} />
            </div>
            <select className="w-full text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              <option value="">Add item new row</option>
              <option value="">Increase item quantity if it already exist</option>
            </select>
          </div>
        </LabelRow>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px] md:text-xs font-bold">Sales price is minimum selling price </span>
        </label>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px] md:text-xs font-bold">Allow Overselling</span>
        </label>
      </div>
    </>
  )
}

export default Sale
