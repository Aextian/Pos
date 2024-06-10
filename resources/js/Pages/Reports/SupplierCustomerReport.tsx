import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const SupplierCustomerReport = () => {
  const Thead = [
    'Contact',
    'Total Purchase',
    'Total Purchase Return',
    'Total Sale',
    'Total Sell Return',
    'Opening Balance Due',
    'Due',
  ]
  return (
    <MainLayout>
      <ContentTitle>Customer & Supplier Report</ContentTitle>
      <CardBorderTop>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <Table>
            <TableHead>
              <tr>
                {Thead.map((item, index) => (
                  <th scope="col" className="px-4 py-3 border-r" key={index}>
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
              <NoDataAvailable span={Thead.length} />
            </tbody>
            <tfoot className="border-t-2 ">
              <tr className="bg-gray-300 text-black">
                <td className="p-5">Total:</td>
                <td className="p-5">Php 0.00</td>
                <td className="p-5">Php 0.00</td>
                <td className="p-5">Php 0.00</td>
                <td className="p-5">Php 0.00</td>
                <td className="p-5">Php 0.00</td>
                <td className="p-5"></td>
              </tr>
            </tfoot>
          </Table>
        </div>
        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default SupplierCustomerReport
