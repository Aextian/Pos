import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import TextInput from '@/Components/TextInput'
import React from 'react'

const Modules: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'Modules' ? '' : 'hidden'}  grid gap-5 grid-rows-1 md:grid-cols-2 lg:grid-cols-3`}>
        <label className="inline-flex gap-3 items-center">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Tables</SpanLabel>
        </label>
        <label className="inline-flex gap-3 items-center">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Modifiers</SpanLabel>
        </label>
        <label className="inline-flex gap-3 items-center">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Service staff</SpanLabel>
        </label>
        <label className="inline-flex gap-3 items-center">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Kitchen (For restaurants)</SpanLabel>
        </label>
        <label className="inline-flex gap-3 items-center">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Account</SpanLabel>
        </label>
        <label className="inline-flex gap-3 items-center">
          <TextInput type="checkbox" className="p-3" />
          <SpanLabel>Enable Subcription</SpanLabel>
        </label>
      </div>
    </>
  )
}

export default Modules
