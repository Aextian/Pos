import React from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
interface Props {
  sortChaged: Function
  sort_field: string
  sort_direction: string
  children: any
  name: any
}
const TableHeading: React.FC<Props> = ({ sortChaged, sort_field, sort_direction, children, name }) => {
  return (
    <>
      <th scope="col" className="px-4 py-3 text-[10px]">
        <div className="flex items-center gap-2">
          <span> {children} </span>
          <div className="cursor-pointer" onClick={(e) => sortChaged(name)}>
            {name && (
              <>
                <FaChevronUp className={` ${sort_direction === 'asc' && sort_field === name ? 'text-cyan-500' : 'text-gray-500'}`} />
                <FaChevronDown className={` ${sort_direction === 'desc' && sort_field === name ? ' text-cyan-500 ' : 'text-gray-500'}`} />
              </>
            )}
          </div>
        </div>
      </th>
    </>
  )
}

export default TableHeading
