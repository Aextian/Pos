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
        <ContentTitle>Add Printer</ContentTitle>
        <CardBorderTop>
          <LabelRow>
            <SpanLabel>Printer Name:*</SpanLabel>
            <TextInput
              placeholder="Short Descriptive Name to recognize printer"
              className="text-xs p-2 w-full"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Connect Type:*</SpanLabel>
            <TextInput
              placeholder="Short Descriptive Name to recognize printer"
              className="text-xs p-2 w-full"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Capability Profile:*</SpanLabel>
            <select className="w-full text-xs rounded-md dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 ">
              <option value="">Default</option>
              <option value="">Simple</option>
              <option value="">Star Branded</option>
              <option value="">Espon Tep</option>
              <option value="">P822D</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>IP Address:*</SpanLabel>
            <TextInput
              placeholder="IP address for connecting to the printer"
              className="text-xs p-2 w-full"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Port:*</SpanLabel>
            <TextInput className="text-xs p-2 w-full" value={9100} />
            <span className="text-[10px]">Most printer on port 9100</span>
          </LabelRow>
          <div className="flex justify-end">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Create
