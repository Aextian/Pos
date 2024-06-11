import React from 'react'

const NoDataAvailable: React.FC<{ span: number }> = ({ span }) => {
  return (
    <>
      <tr className="dark:border-gray-70 border-b bg-white dark:bg-gray-800">
        <td colSpan={span}>
          <div className="p-5 text-center">
            <span className="text-xs md:text-lg">No data available in table</span>
          </div>
        </td>
      </tr>
    </>
  )
}

export default NoDataAvailable
