import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const StockValueReport = () => {
  const Thead = ['Product', 'Quantity', 'Unit Price', 'Total']
  return (
    <MainLayout>
      <ContentTitle>
        Stock
        <span className="text-xs text-gray-300"> Value Report</span>
      </ContentTitle>
      <CardBorderTop>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
              <NoDataAvailable span={Thead.length} />
            </tbody>
            <tfoot className="dark:border-gray-70 dark:bg-gray-600">
              <tr className="">
                <td className="border-r p-16 text-xs font-bold text-black dark:text-white md:text-lg">
                  Total
                </td>
                <td className="border-r text-xs md:text-lg">
                  <ul>
                    <li>16,316.00 Pc(s)</li>
                  </ul>
                </td>
                <td className="border-r px-16"></td>
                <td className="text-xs md:text-lg"> Php 1,359,280.84</td>
              </tr>
            </tfoot>
          </Table>
        </div>
        <div className="flex items-center justify-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default StockValueReport
