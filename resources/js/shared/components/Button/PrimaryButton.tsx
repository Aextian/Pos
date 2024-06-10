import { ButtonHTMLAttributes } from 'react'

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center  py-1 px-3 bg-gray-800 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 dark:bg-gray-500 dark:hover:bg-gray-400  ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}>
      {children}
    </button>
  )
}
