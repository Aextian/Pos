import React from 'react'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  children: React.ReactNode
}

const Select: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <select
      {...props}
      className={`${className} w-full p-2 text-xsdark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 text-xs`}>
      {children}
    </select>
  )
}

export default Select
