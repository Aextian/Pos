import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import TextInput from '@/Components/TextInput'
import React from 'react'
import { FaInfo } from 'react-icons/fa'

const Tax: React.FC<{ open?: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Tax' ? '' : 'hidden'}  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 `}>
        <LabelRow>
          <SpanLabel>Tax Name:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 mt-2 p-2 dark:text-white dark:border-slate-500 ">
              <FaInfo size={16} />
            </div>
            <TextInput className="text-xs p-2 mt-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Tax 1 No:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 mt-2 p-2 dark:text-white dark:border-slate-500">
              <FaInfo size={16} />
            </div>
            <TextInput className="text-xs p-2 mt-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Tax 2 Name:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 mt-2 p-2 dark:text-white dark:border-slate-500">
              <FaInfo size={16} />
            </div>
            <TextInput className="text-xs p-2 mt-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Tax 2 No:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 mt-2 p-2 dark:text-white dark:border-slate-500">
              <FaInfo size={16} />
            </div>
            <TextInput className="text-xs p-2 mt-2 w-full rounded-none" />
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
