import TextInput from '@/Components/Shared/ui/TextInput'
import React from 'react'
import { BiCalendar } from 'react-icons/bi'

const Dashboard: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Dashboard' ? '' : 'hidden'}  grid gap-5 `}>
        <label className="text-[10px]">
          Start Date: *
          <div className="flex items-center justify-center">
            <div className="border border-r-0 mt-2 p-2 dark:text-white dark:border-slate-500">
              <BiCalendar size={16} />
            </div>
            <TextInput type="text" className="text-xs p-2 mt-2 w-full rounded-none" placeholder="Start Date" />
            <div className="border p-2 mt-2 dark:text-white dark:border-slate-500">
              <span className="text-xs">Days</span>
            </div>
          </div>
        </label>
      </div>
    </>
  )
}

export default Dashboard
