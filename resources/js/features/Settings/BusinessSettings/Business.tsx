import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { FaClock, FaDollarSign } from 'react-icons/fa'
import { PiEnvelope } from 'react-icons/pi'

interface Props {
  open?: string
  business?: {
    name: string
  }
  currencies: {
    currency: string
    id: number
  }[]
}

const Business: React.FC<Props> = ({ open, business, currencies }) => {
  return (
    <>
      <div
        className={`${
          open === 'Bussiness' ? '' : 'hidden'
        }  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 `}>
        <LabelRow>
          <SpanLabel>Business Name: *</SpanLabel>
          <TextInput
            className="p-2 text-xs mt-2 w-full rounded-none"
            placeholder="Business Name"
            defaultValue={business?.name}
          />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Start Date: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2  dark:text-white dark:border-slate-500">
              <BiCalendar size={16} />
            </div>
            <TextInput type="date" className="text-xs p-2 w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Default profit percent: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0 p-2  dark:border-slate-500 dark:text-white">
              <BsPlus size={16} />
            </div>
            <TextInput type="date" className="text-xs p-2  w-full rounded-none" />
          </div>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Currency:</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <FaDollarSign size={16} />
            </div>
            <select
              name="time_format"
              className="text-xs p-2  w-full rounded-none  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
              {currencies.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.currency}
                </option>
              ))}
            </select>
          </div>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Current Symbol Placement:</SpanLabel>
          <select
            name="time_format"
            className="text-xs p-2  w-full rounded-none  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
            <option value="">Before amount</option>
            <option value="">After amount</option>
          </select>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Time zone</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <FaClock size={16} />
            </div>
            <TextInput type="date" className="text-xs p-2  w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Upload Logo: *</SpanLabel>
          <TextInput type="file" className="p-1  text-xs w-full rounded-none border" />
          <span className="text-[10px] italic dark:text-white">Previos logo(if exist) will be upload</span>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Financial year start month: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <BiCalendar size={16} />
            </div>
            <TextInput type="month" className="text-xs p-2  w-full rounded-none" />
          </div>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Stock Account Method: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <BiCalendar size={16} />
            </div>
            <select
              name="time_format"
              className="text-xs p-2  w-full rounded-none  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
              <option value="">FI</option>
              <option value="">FO</option>
            </select>
          </div>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Transaction Edit Days: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <PiEnvelope size={16} />
            </div>
            <TextInput className="text-xs p-2  w-full rounded-none" placeholder="Transaction Edit Days" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Date Format: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <BiCalendar size={16} />
            </div>
            <TextInput type="date" className="text-xs p-2  w-full rounded-none" />
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Time Format: *</SpanLabel>
          <div className="flex items-center justify-center">
            <div className="border border-r-0  p-2 dark:border-slate-500  dark:text-white">
              <BiCalendar size={16} />
            </div>
            <select
              name="time_format"
              className="text-xs p-2  w-full rounded-none  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
              <option value="">12</option>
              <option value="">24</option>
            </select>
          </div>
        </LabelRow>
      </div>
    </>
  )
}

export default Business
