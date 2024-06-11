import React from 'react'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  children: React.ReactNode
}

const Select: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <select
      {...props}
      className={`${className} text-xsdark:bg-slate-800 w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:text-white dark:placeholder-gray-400`}
    >
      {children}
    </select>
  )
}

export default Select
