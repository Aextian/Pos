import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'
import { FaInfo } from 'react-icons/fa'

const Tax: React.FC<{ open?: string }> = ({ open }) => {
  return (
    <>
      <div
        className={`${open === 'Tax' ? '' : 'hidden'} grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3`}
      >
        <LabelRow>
          <SpanLabel>Tax Name:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="mt-2 border border-r-0 p-2 dark:border-slate-500 dark:text-white">
              <FaInfo size={16} />
            </div>
            <TextInput className="mt-2 w-full rounded-none p-2 text-xs" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Tax 1 No:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="mt-2 border border-r-0 p-2 dark:border-slate-500 dark:text-white">
              <FaInfo size={16} />
            </div>
            <TextInput className="mt-2 w-full rounded-none p-2 text-xs" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Tax 2 Name:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="mt-2 border border-r-0 p-2 dark:border-slate-500 dark:text-white">
              <FaInfo size={16} />
            </div>
            <TextInput className="mt-2 w-full rounded-none p-2 text-xs" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Tax 2 No:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="mt-2 border border-r-0 p-2 dark:border-slate-500 dark:text-white">
              <FaInfo size={16} />
            </div>
            <TextInput className="mt-2 w-full rounded-none p-2 text-xs" />
          </div>
        </LabelRow>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px] dark:text-white">Enable inline tax in purchase and sell</span>
        </label>
      </div>
    </>
  )
}

export default Tax
