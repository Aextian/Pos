import React from 'react'
import { FaXmark, FaHardDrive } from 'react-icons/fa6'
import { FaCalculator, FaBackward, FaPlay } from 'react-icons/fa'

const PosButtonIcon = () => {
  return (
    <div className="flex flex-row gap-3 ml-5">
      <span className="text-[10px]">04/04/2024</span>
      <button className="p-2 bg-cyan-700 text-white">
        <FaHardDrive />
      </button>
      <button className="p-2 bg-yellow-400 text-white">
        <FaPlay />
      </button>
      <button className="p-2 bg-green-700 text-white">
        <FaCalculator size={15} />
      </button>
      <button className="p-2 bg-red-500 text-white">
        <FaXmark />
      </button>
      <button className="p-2 bg-cyan-400 text-white">
        <FaBackward />
      </button>
    </div>
  )
}

export default PosButtonIcon
