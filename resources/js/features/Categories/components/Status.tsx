import React from 'react'

const Status: React.FC<{ status: boolean }> = ({ status }) => {
  return (
    <>
      <span
        className={`rounded-sm ${status ? 'bg-green-600' : 'bg-red-600'} px-2 py-1 text-[10px] font-bold text-white`}>
        {status ? 'On' : 'Off'}
      </span>
    </>
  )
}

export default Status
