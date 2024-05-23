import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import InputError from '@/Components/Shared/ui/InputError'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPersonArrowUpFromLine, FaUser } from 'react-icons/fa6'

interface Error {
  name: string
  supplier_business_name: string
  type: string
}
const Create: React.FC<{ errors: Error }> = ({ errors }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    supplier_business_name: '',
    contact_id: '',
    contact_type: '',
    points_status: '',
    type: '',
    tax_number: '',
    city: '',
    state: '',
    country: '',
    landmark: '',
    mobile: '',
    landline: '',
    alternate_number: '',
    pay_term_number: '',
    pay_term_type: '',
    custom_field1: '',
    custom_field2: '',
    custom_field3: '',
    custom_field4: '',
  })

  const handleChage = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('supplier.store')
      const response = router.post(url, values)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <MainLayout>
      <ContentTitle>
        Suppliers <span className="text-xs text-gray-300">Manage your suppliers</span>
      </ContentTitle>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Add new contact</CardBorderTop.Title>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <LabelRow>
                <SpanLabel>Contact type:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <select
                    onChange={handleChage}
                    name="type"
                    className="ps-10 w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                    defaultValue="">
                    <option value="">Please Select</option>
                    <option value="supplier">Suppliers</option>
                    <option value="customer">Customers</option>
                    <option value="both">Both (Suppliers and Customer)</option>
                  </select>
                </div>
                <InputError message={errors.type} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Name:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaUser size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="name" className=" ps-10 w-full p-2 text-xs" />
                </div>
                <InputError message={errors.name} className="mt-2" />
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <LabelRow>
                <SpanLabel>Business Name:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="supplier_business_name" className="ps-10 w-full text-xs" />
                </div>
                <InputError message={errors.supplier_business_name} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Contact ID:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="contact_id" className="ps-10 w-full text-xs" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Tax Number:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="tax_number" className="ps-10 w-full text-xs" />
                </div>
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <LabelRow>
                <SpanLabel>Opening Balance:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} className="ps-10 w-full text-xs" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Pay term:</SpanLabel>
                <div className="flex">
                  <TextInput onChange={handleChage} name="pay_term_number" className="w-full text-xs rounded-none" placeholder="Pay term" />
                  <select
                    name="pay_term_type"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue="">
                    <option value="">Please Select</option>
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </LabelRow>

              <label className="inline-flex items-center gap-3 ">
                <TextInput onChange={handleChage} className="mt-2 rounded" type="checkbox" name="points_status" value={1} />
                <span className="dark:text-white">Allow gain points</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <LabelRow>
                <SpanLabel>Email:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="email" className="ps-10 w-full text-xs" placeholder="Email" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Mobile:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="mobile" className="ps-10 w-full text-xs" placeholder="Mobile" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Alternate contact number:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="alternate_number" className="ps-10 w-full text-xs" placeholder="Alternate contact number" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Landline:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="landline" className="ps-10 w-full text-xs" placeholder="Landline" />
                </div>
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <LabelRow>
                <SpanLabel>City:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="city" className="ps-10 w-full text-xs" placeholder="City" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>State:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="state" className="ps-10 w-full text-xs" placeholder="State" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Country:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="country" className="ps-10 w-full text-xs" placeholder="Country" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Landmark:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChage} name="landmark" className="ps-10 w-full text-xs" placeholder="Landmark" />
                </div>
              </LabelRow>

              <hr className="col-span-2 my-5" />

              <LabelRow>
                <SpanLabel>Custom Field 1:</SpanLabel>
                <div className="relative">
                  <TextInput onChange={handleChage} name="custom_field1" className=" w-full text-xs" placeholder="Custom Field 1" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 2:</SpanLabel>
                <div className="relative">
                  <TextInput onChange={handleChage} name="custom_field2" className=" w-full text-xs" placeholder="Custom Field 2" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 3:</SpanLabel>
                <div className="relative">
                  <TextInput onChange={handleChage} name="custom_field3" className=" w-full text-xs" placeholder="Custom Field 1" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 4:</SpanLabel>
                <div className="relative">
                  <TextInput onChange={handleChage} name="custom_field4" className=" w-full text-xs" placeholder="Custom Field 1" />
                </div>
              </LabelRow>
            </div>

            <div className="flex justify-content-end flex-col mt-5">
              <button className="rounded-lg px-5 text-lg bg-cyan-600 text-white" type="submit">
                Submit
              </button>
            </div>
          </form>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
