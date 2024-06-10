import TextInput from '@/shared/components/TextInput'
import React from 'react'

const Purchases: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Purchases' ? '' : 'hidden'} dark:text-white grid gap-5 `}>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Enable editing product price from purchase screen</span>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Enable Purchase Status</span>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Enable Lot Number</span>
        </label>
      </div>
    </>
  )
}

export default Purchases
