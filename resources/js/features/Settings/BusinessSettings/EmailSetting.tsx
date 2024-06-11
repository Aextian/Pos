import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'

const EmailSetting: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div
        className={`${
          open === 'Email Settings' ? '' : 'hidden'
        } grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3`}
      >
        <LabelRow>
          <SpanLabel>Mail Driver:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Host:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Port:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Username:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Password:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Encryption:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>From Address:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>From Name:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" />
        </LabelRow>
      </div>
    </>
  )
}

export default EmailSetting
