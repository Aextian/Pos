import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const ButtonSupend = () => {
  return (
    <button className="text-md inline-flex items-center justify-center gap-3 bg-orange-600 px-10 py-2 font-bold text-white">
      <FaArrowLeft />
      Suspend
    </button>
  )
}

export default ButtonSupend
