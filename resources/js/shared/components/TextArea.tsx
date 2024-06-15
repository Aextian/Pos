import React, { HtmlHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

const TextArea: React.FC<InputHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => {
  return (
    <>
      <textarea
        className={
          `w-full border-gray-300 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 ` +
          className
        }
        {...props}></textarea>
    </>
  )
}

export default TextArea
