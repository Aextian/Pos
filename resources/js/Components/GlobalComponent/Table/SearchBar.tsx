import TextInput from '@/Components/TextInput'
import { usePage } from '@inertiajs/react'
import React, { PropsWithChildren, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {
  handleSearchChange: any
  queryParams: { search: string }
}

const SearchBar: React.FC<Props> = ({ queryParams, handleSearchChange }) => {
  return (
    <>
      <div className="flex justify-end">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <FaSearch size={20} />
            </div>
          </div>
          <TextInput className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " defaultValue={queryParams.search} onChange={handleSearchChange} type="search" name="search" tabIndex={0} isFocused />
        </div>
      </div>
    </>
  )
}

export default SearchBar
