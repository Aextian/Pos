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
        }  grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        <LabelRow>
          <SpanLabel>Purchase Order:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="PO" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Purchase Return:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="PR" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Stock Transfer:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="ST" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Stock Adjustment:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="SA" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sell Return:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="SR" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Expenses:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="Expenses" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Contacts:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="Contacts" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Purchase Payment:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="PP" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sell Payment:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="SP" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Expense Payment:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="EP" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Business Location:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="BL" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Username:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="Usernmae" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Subscription No.:</SpanLabel>
          <TextInput className="p-1 mt-2 w-full rounded-none" placeholder="Sub No" />
        </LabelRow>
      </div>
    </>
  )
}

export default Prefixes
