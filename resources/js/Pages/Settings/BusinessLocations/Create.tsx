import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const Create = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>Add a new business location</ContentTitle>
        <CardBorderTop>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <LabelRow>
              <SpanLabel>Name:*</SpanLabel>
              <TextInput placeholder="Location ID" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Location ID:*</SpanLabel>
              <TextInput placeholder="Name" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Landmark:*</SpanLabel>
              <TextInput placeholder="Landmark" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>City:*</SpanLabel>
              <TextInput placeholder="City" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Zip Code:*</SpanLabel>
              <TextInput placeholder="Zip code" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>State:*</SpanLabel>
              <TextInput placeholder="State" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Country:*</SpanLabel>
              <TextInput placeholder="Country" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Mobile:*</SpanLabel>
              <TextInput placeholder="Mobile" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Alternative contact number:*</SpanLabel>
              <TextInput placeholder="Alternative contact number" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Email:*</SpanLabel>
              <TextInput placeholder="Email" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Website:*</SpanLabel>
              <TextInput placeholder="Website" className="text-xs p-2 w-full" />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Invoice scheme:*</SpanLabel>
              <select className="text-xs p-2 w-full rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">Please Select</option>
                <option value="">Default</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Invoice layout:*</SpanLabel>
              <select className="text-xs p-2 w-full rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="">Please Select</option>
                <option value="">Default</option>
              </select>
            </LabelRow>
          </div>

          <hr className="my-3" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <LabelRow>
              <SpanLabel>Custome Field 1:</SpanLabel>
              <TextInput placeholder="Name" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Custome Field 2:</SpanLabel>
              <TextInput placeholder="Name" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Custome Field 3:</SpanLabel>
              <TextInput placeholder="Name" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Custome Field 4:</SpanLabel>
              <TextInput placeholder="Name" className="text-xs p-2 w-full" />
            </LabelRow>
          </div>
          <div className="text-right space-x-3 mt-3">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Create
