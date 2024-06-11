import React, { PropsWithChildren } from 'react'

const PostLabel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <label htmlFor="" className="block w-full text-xs font-medium text-gray-700">
        {children}
      </label>
    </>
  )
}
export default PostLabel
