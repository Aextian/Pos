import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import TextInput from '@/Components/TextInput'
import React from 'react'

const EmailSetting: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Email Settings' ? '' : 'hidden'}  grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        <LabelRow>
          <SpanLabel>Mail Driver:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Host:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Port:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Username:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Password:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Encryption:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>From Address:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>From Name:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" />
        </LabelRow>
      </div>
    </>
  )
}

export default EmailSetting
