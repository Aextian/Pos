import React from 'react'
import { FaXmark, FaHardDrive } from 'react-icons/fa6'
import { FaCalculator, FaBackward, FaPlay } from 'react-icons/fa'

const PosButtonIcon = () => {
  return (
    <div className="ml-5 flex flex-row gap-3">
      <span className="text-[10px]">04/04/2024</span>
      <button className="bg-cyan-700 p-2 text-white">
        <FaHardDrive />
      </button>
      <button className="bg-yellow-400 p-2 text-white">
        <FaPlay />
      </button>
      <button className="bg-green-700 p-2 text-white">
        <FaCalculator size={15} />
      </button>
      <button className="bg-red-500 p-2 text-white">
        <FaXmark />
      </button>
      <button className="bg-cyan-400 p-2 text-white">
        <FaBackward />
      </button>
    </div>
  )
}

export default PosButtonIcon
