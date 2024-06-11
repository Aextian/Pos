import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'

const SmsSetting: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'SMS Settings' ? '' : 'hidden'} grid grid-cols-2 gap-3`}>
        <div className="col-span-2 flex flex-col justify-around gap-5 md:flex-row">
          <LabelRow>
            <SpanLabel>URL:</SpanLabel>
            <TextInput className="mt-2 w-full rounded-none p-1" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Send to parameter name:</SpanLabel>
            <TextInput className="mt-2 w-full rounded-none p-1" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Message parameter name:</SpanLabel>
            <TextInput className="mt-2 w-full rounded-none p-1" />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Request method:</SpanLabel>
            <TextInput className="mt-2 w-full rounded-none p-1" />
          </LabelRow>
        </div>

        <LabelRow>
          <SpanLabel>Parameter 1 key:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 1 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 2 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 2 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 3 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 3 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 4 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 4 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 5 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 5 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          Parameter 6 key
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 6 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 7 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 7 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 8 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 8 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 9 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 9 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 10 key</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Parameter 10 value:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
      </div>
    </>
  )
}

export default SmsSetting
