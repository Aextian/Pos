import React from 'react'

interface Props {
  cols?: number
  rows?: number
  placeholder?: string
  className?: string
  name?: string
}
const TextArea: React.FC<Props> = ({ cols, rows, placeholder, className, name }) => {
  return (
    <>
      <textarea
        className={`w-full text-xs dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 ${className} `}
        name=""
        id=""
        cols={cols}
        rows={rows}
        placeholder={placeholder}></textarea>
    </>
  )
}

export default TextArea
