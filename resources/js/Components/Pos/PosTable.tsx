import React from 'react'

const PosTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full">
        <thead className="border text-[10px] md:text-sm ">
          <tr>
            <th className="px-2 border-r">Product</th>
            <th className="px-2 border-r">Quantity</th>
            <th className="px-2 border-r">Price inc tax</th>
            <th className="px-2 border-r">Discount(%)</th>
            <th className="px-2 border-r">Subtotal</th>
            <th className="px-2 border-r">x</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PosTable
