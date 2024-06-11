import TextInput from '@/shared/components/TextInput'
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
      <div className={`${open === 'System' ? '' : 'hidden'} grid grid-cols-2 gap-5 dark:text-white`}>
        <label className="flex w-full flex-col gap-3 md:flex-row">
          Theme Color
          <TextInput type="color" className="w-full max-w-xs" defaultValue="#ff0000" />
        </label>

        <label className="flex w-full flex-col items-center gap-3 whitespace-nowrap md:flex-row">
          <TextInput type="checkbox" />
          Show help text
        </label>
      </div>
    </>
  )
}

export default System
