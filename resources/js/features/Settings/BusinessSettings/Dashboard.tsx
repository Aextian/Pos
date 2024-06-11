import TextInput from '@/shared/components/TextInput'
import React from 'react'
import { BiCalendar } from 'react-icons/bi'

const Dashboard: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Dashboard' ? '' : 'hidden'} grid gap-5`}>
        <label className="text-[10px]">
          Start Date: *
          <div className="flex items-center justify-center">
            <div className="mt-2 border border-r-0 p-2 dark:border-slate-500 dark:text-white">
              <BiCalendar size={16} />
            </div>
            <TextInput
              type="text"
              className="mt-2 w-full rounded-none p-2 text-xs"
              placeholder="Start Date"
            />
            <div className="mt-2 border p-2 dark:border-slate-500 dark:text-white">
              <span className="text-xs">Days</span>
            </div>
          </div>
        </label>
      </div>
    </>
  )
}

export default Dashboard
