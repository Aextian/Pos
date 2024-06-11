import React from 'react'

interface Props {
  notification: boolean
}
const Notification: React.FC<Props> = ({ notification }) => {
  return (
    <>
      <div
        className={`absolute right-[-160px] top-[44px] flex w-72 items-center justify-center rounded border bg-white p-3 shadow-lg md:right-0 ${notification ? '' : 'hidden'}`}
      >
        <p className="text-dark text-xs">No Notifications</p>
      </div>
    </>
  )
}

export default Notification
