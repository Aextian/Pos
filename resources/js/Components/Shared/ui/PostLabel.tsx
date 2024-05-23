import React, { PropsWithChildren } from 'react'

const PostLabel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <label htmlFor="" className="block font-medium text-xs text-gray-700 w-full">
        {children}
      </label>
    </>
  )
}
export default PostLabel
