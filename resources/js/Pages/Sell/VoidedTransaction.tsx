import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import PostLabel from '@/Components/PostLabel'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const VoidedTransaction = () => {
  const Thead = ['Date', 'Invoice No', 'Customer Name', 'Location', 'Payment Status', 'Total Amount', 'MAC Address', 'Ip Address']
  return (
    <MainLayout>
      <div className="px-5 md:px-2">Void Transaction</div>

      <CardBorderTop>
        <CardTitle>Filters</CardTitle>
        <hr />
        <PostLabel>
          Business Location:
          <select className="w-full p-2 text-xs" name="type">
            <option value="" selected>
              All
            </option>
            <option value="Single">Single</option>
            <option value="Variable">Variable</option>
          </select>
        </PostLabel>

        <PostLabel>
          Customer:
          <select className="w-full p-2 text-xs" name="type">
            <option value="" selected>
              All
            </option>
            <option value="">Single</option>
            <option value="">Variable</option>
          </select>
        </PostLabel>

        <PostLabel>
          <TextInput className="w-full p-2 text-xs" type="date" />
        </PostLabel>
      </CardBorderTop>

      <CardBorderTop>
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
            Date Range:
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
                <td className="border-l">Received -1</td>
                <td className="border-l">Due -1</td>
                <td className="border-l">Php 17/86</td>
                <td className="border-l">Purchase Due - Php 17.86 Purchase Return - Php 0.00</td>
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

export default VoidedTransaction
