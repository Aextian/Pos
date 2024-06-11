import React, { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Success: React.FC<{ message: string }> = ({ message }) => {
  if (!message) return null

  return (
    <>
      <div className="w-full border-l-4 border-l-green-600 bg-green-100 p-3 text-cyan-800">
        <span className="inline-flex items-center gap-3 text-sm md:text-lg">
          <FaCheckCircle /> {message}
        </span>
      </div>
    </>
  )
}

export default Success
