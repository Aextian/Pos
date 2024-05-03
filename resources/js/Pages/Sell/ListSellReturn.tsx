import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const ListSellReturn = () => {
  const Thead = ['Date', 'Invoice No', 'Parent Sale', 'Customer Name', 'Location', 'Payment status', 'Total amount', 'Payment due', 'Action']
  return (
    <MainLayout>
      <div className="px-5 md:px-2"></div>

      <CardBorderTop>
        <div className="flex flex-row justify-between items-center gap-2">
          <h1 className="text-lg font-medium">Sell Return</h1>
        </div>

        <div className="self-end relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
              <FaSearch size={20} />
            </div>
          </div>
          <input className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " type="search" name="" id="" />
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-[8px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase bg-gray-50 border">
              <tr>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-4 py-3 border-r" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* {data.map((product, index) => (
                        <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                            <td className="rtl:text-center">02.03.2024</td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.sku}
                            </td>
                            <td className="px-6 py-4">{product.product}</td>
                            <td className="px-6 py-4">{product.category}</td>
    
                            <td className="px-6 py-4">{product.unit}</td>
                            <td className="px-6 py-4">{product.brand}</td>
                            <td className="px-6 py-4">{product.tax}</td>
                            <td className="px-6 py-4">{product.price}</td>
    
                            <td className="px-6 py-4">
                                <button className="px-2 text-white rounded bg-cyan-500">Action</button>
                            </td>
                        </tr>
                    ))} */}
            </tbody>
            <tfoot className="bg-gray-300 text-black">
              <tr className="text-[12px]">
                <td className="text-center py-10 " colSpan={5}>
                  Total
                </td>
                <td className="border-l"></td>
                <td className="border-l">Php 0.00</td>
                <td className="border-l">Php 17/86</td>
                <td className="border-l"></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ListSellReturn
