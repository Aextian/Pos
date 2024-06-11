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
              className="w-full p-2 text-xs"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Connect Type:*</SpanLabel>
            <TextInput
              placeholder="Short Descriptive Name to recognize printer"
              className="w-full p-2 text-xs"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Capability Profile:*</SpanLabel>
            <select className="w-full rounded-md border-gray-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400">
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
              className="w-full p-2 text-xs"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Port:*</SpanLabel>
            <TextInput className="w-full p-2 text-xs" value={9100} />
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
