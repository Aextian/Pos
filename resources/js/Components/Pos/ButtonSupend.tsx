import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const ButtonSupend = () => {
  return (
    <button className=" bg-orange-600 text-md font-bold text-white px-10 py-2 inline-flex items-center justify-center gap-3">
      <FaArrowLeft />
      Suspend
    </button>
  )
}

export default ButtonSupend
