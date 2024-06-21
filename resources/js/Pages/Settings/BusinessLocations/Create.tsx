import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import CardBorderTop from '@/shared/components/CardBorderTop'

const Create = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>Add a new business location</ContentTitle>
        <CardBorderTop>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <LabelRow>
              <SpanLabel>Name:*</SpanLabel>
              <TextInput placeholder="Location ID" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Location ID:*</SpanLabel>
              <TextInput placeholder="Name" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Landmark:*</SpanLabel>
              <TextInput placeholder="Landmark" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>City:*</SpanLabel>
              <TextInput placeholder="City" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Zip Code:*</SpanLabel>
              <TextInput placeholder="Zip code" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>State:*</SpanLabel>
              <TextInput placeholder="State" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Country:*</SpanLabel>
              <TextInput placeholder="Country" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Mobile:*</SpanLabel>
              <TextInput placeholder="Mobile" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Alternative contact number:*</SpanLabel>
              <TextInput placeholder="Alternative contact number" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Email:*</SpanLabel>
              <TextInput placeholder="Email" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Website:*</SpanLabel>
              <TextInput placeholder="Website" className="w-full p-2 text-xs" />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Invoice scheme:*</SpanLabel>
              <select className="w-full rounded-md p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400">
                <option value="">Please Select</option>
                <option value="">Default</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Invoice layout:*</SpanLabel>
              <select className="w-full rounded-md p-2 text-xs dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400">
                <option value="">Please Select</option>
                <option value="">Default</option>
              </select>
            </LabelRow>
          </div>

          <hr className="my-3" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <LabelRow>
              <SpanLabel>Custome Field 1:</SpanLabel>
              <TextInput placeholder="Name" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Custome Field 2:</SpanLabel>
              <TextInput placeholder="Name" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Custome Field 3:</SpanLabel>
              <TextInput placeholder="Name" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Custome Field 4:</SpanLabel>
              <TextInput placeholder="Name" className="w-full p-2 text-xs" />
            </LabelRow>
          </div>
          <div className="mt-3 space-x-3 text-right">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Create
