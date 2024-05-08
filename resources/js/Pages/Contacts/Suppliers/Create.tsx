import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaPersonArrowUpFromLine } from 'react-icons/fa6'

const Create = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Suppliers <span className="text-xs text-gray-300">Manage your suppliers</span>
      </ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>Add new contact</CardTitle>
        </CardHeader>
        <form className="space-y-3">
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
                  name="cars"
                  className="ps-10 w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 ">
                  <option value="">Please Select</option>
                  <option value="" selected>
                    Suppliers
                  </option>
                  <option value="">Customers</option>
                  <option value="">Both (Suppliers and Customer)</option>
                </select>
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Name:*</SpanLabel>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    <FaPersonArrowUpFromLine size={20} />
                  </div>
                </div>
                <TextInput className="w-full p-2 text-xs" />
              </div>
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
                <TextInput className="ps-10 w-full text-xs" />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Contact ID:</SpanLabel>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    <FaPersonArrowUpFromLine size={20} />
                  </div>
                </div>
                <TextInput className="ps-10 w-full text-xs" />
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

                <TextInput className="ps-10 w-full text-xs" />
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
                <TextInput className="ps-10 w-full text-xs" />
              </div>
            </LabelRow>

            <LabelRow>
              <SpanLabel>Pay term:</SpanLabel>
              <div className="flex">
                <TextInput className="w-full text-xs rounded-none" placeholder="Pay term" />
                <select
                  name="cars"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Please Select</option>
                  <option value="" selected>
                    Suppliers
                  </option>
                  <option value="">Customers</option>
                  <option value="">Both (Suppliers and Customer)</option>
                </select>
              </div>
            </LabelRow>

            <label className="inline-flex items-center gap-3">
              <TextInput className="mt-2 rounded" type="checkbox" name="" id="" /> <span className="dark:text-white">Allow gain points</span>
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
                <TextInput className="ps-10 w-full text-xs" placeholder="Email" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="Mobile" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="Alternate contact number" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="Landline" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="City" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="State" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="Country" />
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
                <TextInput className="ps-10 w-full text-xs" placeholder="Landmark" />
              </div>
            </LabelRow>
          </div>

          <div className="flex justify-content-end flex-col mt-5">
            <button className="rounded-lg px-5 text-lg bg-cyan-600" type="submit">
              Submit
            </button>
          </div>
        </form>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
