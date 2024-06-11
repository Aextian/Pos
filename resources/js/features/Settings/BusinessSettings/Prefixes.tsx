import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'

const Prefixes: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div
        className={`${
          open === 'Prefixes' ? '' : 'hidden'
        } grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3`}
      >
        <LabelRow>
          <SpanLabel>Purchase Order:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="PO" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Purchase Return:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="PR" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Stock Transfer:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="ST" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Stock Adjustment:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="SA" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sell Return:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="SR" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Expenses:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="Expenses" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Contacts:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="Contacts" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Purchase Payment:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="PP" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sell Payment:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="SP" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Expense Payment:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="EP" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Business Location:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="BL" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Username:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="Usernmae" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Subscription No.:</SpanLabel>
          <TextInput className="mt-2 w-full rounded-none p-1" placeholder="Sub No" />
        </LabelRow>
      </div>
    </>
  )
}

export default Prefixes
