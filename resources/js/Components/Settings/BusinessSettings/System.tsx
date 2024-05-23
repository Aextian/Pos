import TextInput from '@/Components/Shared/ui/TextInput'
import React, { useState } from 'react'
import Select from 'react-select'

const System: React.FC<{ open: string }> = ({ open }) => {
  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)

  return (
    <>
      <div className={`${open === 'System' ? '' : 'hidden'} dark:text-white grid gap-5 grid-cols-2`}>
        <label className="w-full flex flex-col gap-3 md:flex-row">
          Theme Color
          <TextInput type="color" className="w-full max-w-xs " defaultValue="#ff0000" />
        </label>

        <label className="w-full flex flex-col gap-3 items-center whitespace-nowrap md:flex-row">
          <TextInput type="checkbox" />
          Show help text
        </label>
      </div>
    </>
  )
}

export default System
