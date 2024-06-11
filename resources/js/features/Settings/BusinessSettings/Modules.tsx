import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import React from 'react'

const Modules: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div
        className={`${
          open === 'Modules' ? '' : 'hidden'
        } grid grid-rows-1 gap-5 md:grid-cols-2 lg:grid-cols-3`}
      >
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Tables</SpanLabel>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Modifiers</SpanLabel>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Service staff</SpanLabel>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Kitchen (For restaurants)</SpanLabel>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Account</SpanLabel>
        </label>
        <label className="inline-flex items-center gap-3">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Enable Subcription</SpanLabel>
        </label>
      </div>
    </>
  )
}

export default Modules
