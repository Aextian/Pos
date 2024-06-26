import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const ListSellReturn = () => {
  const Thead = [
    'Date',
    'Invoice No',
    'Parent Sale',
    'Customer Name',
    'Location',
    'Payment status',
    'Total amount',
    'Payment due',
    'Action',
  ]
  return (
    <MainLayout>
      <ContentTitle>Sell Return</ContentTitle>

      <CardBorderTop>
        <div className="relative self-end">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
              <FaSearch size={20} />
            </div>
          </div>
          <TextInput
            className="rounded-lg bg-slate-200 px-5 py-2 ps-10 text-xs"
            type="search"
            name=""
            id=""
          />
        </div>
        <Table>
          <TableHead>
            <tr>
              {Thead.map((item, index) => (
                <th scope="col" className="border-r px-4 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </TableHead>
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
          {/* <tfoot className="bg-gray-300 text-black">
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
          </tfoot> */}
        </Table>

        <div className="flex items-center justify-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ListSellReturn
