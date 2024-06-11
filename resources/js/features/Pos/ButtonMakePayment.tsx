import React from 'react'
import { FaCheck } from 'react-icons/fa'

const ButtonMakePayment = () => {
  return (
    <button className="inline-flex items-center justify-center gap-3 bg-cyan-950 px-10 py-5 text-2xl font-bold text-white">
      <FaCheck />
      Make Payment
    </button>
  )
}

export default ButtonMakePayment
