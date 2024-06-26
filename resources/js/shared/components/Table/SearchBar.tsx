import TextInput from '@/shared/components/TextInput'
import { router, usePage } from '@inertiajs/react'
import { FaSearch } from 'react-icons/fa'

type Props = {
  url: string
  type?: string
  queryParams: { search: string }
}

const SearchBar: React.FC<Props> = ({ queryParams, url, type }) => {
  // Define a variable to store the timer ID
  let debounceTimer: NodeJS.Timeout

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Clear the previous timer if it exists
    clearTimeout(debounceTimer)

    debounceTimer = setTimeout(() => {
      router.get(
        route(url),
        { type: type, search: e.target.value },
        { preserveScroll: true, preserveState: true },
      )
    }, 800) // Adjust the delay as needed
  }

  return (
    <>
      <div className="flex justify-end">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <div className="flex h-4 w-4 items-center text-gray-500 dark:text-gray-400">
              <FaSearch size={15} />
            </div>
          </div>
          <TextInput
            className="rounded-lg px-5 py-1 ps-10 focus:bg-slate-200"
            defaultValue={queryParams.search}
            onChange={handleSearchChange}
            type="search"
            name="search"
            tabIndex={0}
            isFocused
          />
        </div>
      </div>
    </>
  )
}

export default SearchBar
