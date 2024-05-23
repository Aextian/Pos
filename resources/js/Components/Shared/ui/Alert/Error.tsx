import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'
const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <div className="w-full p-3 border-l-4 bg-red-200  border-l-red-600 text-cyan-800 ">
        <span className="inline-flex items-center gap-3 text-sm md:text-lg">
          <FiAlertCircle /> {message}
        </span>
      </div>
    </>
  )
}

export default Error
