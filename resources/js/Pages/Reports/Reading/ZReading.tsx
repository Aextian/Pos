import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const ZReading = () => {
  const Thead = [
    'Start Date',
    'End Date',
    'Starting Invoice',
    'Ending Invoice',
    'Total Invoice',
    'Success Transactions',
    'Void Transactions',
    'Sales Amount',
    'Vatable',
    'Vat Exempt',
    'Zero Rated',
    'Total Vat',
    'Prevoius Reading',
    'Current Sales',
    'Running Total',
    'Mac Address',
    'Mac Name',
    'Action',
  ]
  return (
    <MainLayout>
      <ContentTitle>
        Z <span className="text-xs text-gray-300">Reading</span>
      </ContentTitle>
      <CardBorderTop>
        <CardTitle>Z Reading</CardTitle>
        <CardContent>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <Table>
              <TableHead>
                <tr>
                  {Thead.map((item, XReading) => (
                    <th scope="col" className="px-4 py-3 border-r" key={XReading}>
                      {item}
                    </th>
                  ))}
                </tr>
              </TableHead>
              <tbody>
                {/* {data.map((product, XReading) => (
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
                <NoDataAvailable span={18} />
              </tbody>
            </Table>
          </div>
        </CardContent>
        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ZReading
