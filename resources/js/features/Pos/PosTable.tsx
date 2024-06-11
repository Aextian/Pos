import React from 'react'

const PosTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead className="border text-[10px] md:text-sm">
          <tr>
            <th className="border-r px-2">Product</th>
            <th className="border-r px-2">Quantity</th>
            <th className="border-r px-2">Price inc tax</th>
            <th className="border-r px-2">Discount(%)</th>
            <th className="border-r px-2">Subtotal</th>
            <th className="border-r px-2">x</th>
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
