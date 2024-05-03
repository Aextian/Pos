import React from 'react'
import { FaCheck } from 'react-icons/fa'

const ButtonMakePayment = () => {
  return (
    <button className=" bg-cyan-950 text-2xl font-bold text-white px-10 py-5 inline-flex items-center justify-center gap-3">
      <FaCheck />
      Make Payment
    </button>
  )
}

export default ButtonMakePayment
