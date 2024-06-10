import React from 'react'

interface Props {
  notification: boolean
}
const Notification: React.FC<Props> = ({ notification }) => {
  return (
    <>
      <div className={`bg-white  p-3 absolute w-72 top-[44px] md:right-0 right-[-160px] rounded shadow-lg border flex justify-center items-center ${notification ? '' : 'hidden'}`}>
        <p className="text-xs text-dark">No Notifications</p>
      </div>
    </>
  )
}

export default Notification
