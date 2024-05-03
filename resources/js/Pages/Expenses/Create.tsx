import CardBorderTop from '@/Components/CardBorderTop'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaMoneyBill, FaRegCalendar, FaSearch, FaTrash } from 'react-icons/fa'

const Create = () => {
  return (
    <MainLayout>
      <div className="px-5 md:px-2">
        <h1 className="text-lg">
          Add <span className="text-xs">Stock Expense</span>
        </h1>
      </div>

      <CardBorderTop>
        <div className="flex flex-col justify-start items-start gap-5">
          <label className="w-full">
            Business Location (To):*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label className="w-full">
            Expense Category:*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label className="w-full">
            Reference No:
            <TextInput className="w-full p-2 text-xs" type="text" />
          </label>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Date:*</label>
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 flex items-center">
                <FaRegCalendar size={18} />
              </div>
              <TextInput className="w-full  p-1 rounded-none" type="date" />
            </div>
          </div>
          <label className="w-full">
            Total Amount:
            <TextInput className="w-full p-2 text-xs" type="text" />
          </label>
          <label className="w-full">
            Expense for:*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>

          <label className="w-full">
            Attach Document:
            <TextInput className="w-full p-2 text-xs" type="file" />
            <span className="text-xs">Max file size: 1MB</span>
          </label>
          <div className="grid gap-5 w-full">
            <label htmlFor="">
              Reason
              <textarea className="w-full" name="" id="" cols={20}></textarea>
            </label>
            <div className="border-t  p-3 gap-5 flex flex-col items-end justify-end">
              <PrimaryButton>Save</PrimaryButton>
            </div>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
