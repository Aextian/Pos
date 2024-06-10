import React, { InputHTMLAttributes } from 'react'

const TextArea: React.FC<InputHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => {
  return (
    <>
      <textarea
        className={
          `w-full text-xs dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  border-gray-300 focus:border-cyan-600 focus:ring-cyan-600  ` +
          className
        }
        {...props}></textarea>
    </>
  )
}

export default TextArea
