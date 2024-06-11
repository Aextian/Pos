import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const OpeningStockReport = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>Opening Stock Report</ContentTitle>

        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table>
              <TableHead>
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantity
                  </th>
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
                <NoDataAvailable span={3} />
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} className="text-right">
                    Total
                  </td>
                  <td className="text-center" colSpan={3}>
                    612.00 Pc(s)
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
          <div className="flex items-center justify-center">pagination</div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default OpeningStockReport
