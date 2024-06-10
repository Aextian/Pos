import React from 'react'

const NoDataAvailable: React.FC<{ span: number }> = ({ span }) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-70">
        <td colSpan={span}>
          <div className="text-center p-5 ">
            <span className="text-xs md:text-lg">No data available in table</span>
          </div>
        </td>
      </tr>
    </>
  )
}

export default NoDataAvailable
