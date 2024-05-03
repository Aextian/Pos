import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import TextInput from '@/Components/TextInput'
import React from 'react'

const SmsSetting: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'SMS Settings' ? '' : 'hidden'}  grid gap-3 grid-cols-2`}>
        <div className="flex flex-col md:flex-row gap-5 col-span-2 justify-around">
          <LabelRow>
            <SpanLabel>URL:</SpanLabel>
            <TextInput className="p-1 mt-2 w-full rounded-none" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Send to parameter name:</SpanLabel>
            <TextInput className="p-1 mt-2 w-full rounded-none" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Message parameter name:</SpanLabel>
            <TextInput className="p-1 mt-2 w-full rounded-none" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Request method:</SpanLabel>
            <TextInput className="p-1 mt-2 w-full rounded-none" />
          </LabelRow>
        </div>

        <LabelRow>
          <SpanLabel>Parameter 1 key:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 1 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 2 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 2 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 3 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 3 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 4 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 4 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 5 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 5 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          Parameter 6 key
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 6 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 7 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 7 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 8 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 8 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 9 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 9 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 10 key</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 10 value:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
      </div>
    </>
  )
}

export default SmsSetting
