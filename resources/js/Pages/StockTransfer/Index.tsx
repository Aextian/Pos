import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import PostLabel from '@/shared/components/PostLabel'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

const Index = () => {
  const Thead = [
    'Date',
    'Reference No',
    'Location(From)',
    'Location(To)',
    'Shipping Charges',
    'Total Amount',
    'Additional Notes',
    'Action',
  ]
  return (
    <MainLayout>
      <ContentTitle>
        Stock<span className="text-xs text-gray-300"> Transfer</span>
      </ContentTitle>
      <CardBorderTop>
        <CardHeader>
          <CardTitle>All Stock Transfer</CardTitle>
          <Link
            href={route('users.create')}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
          >
            Add
          </Link>
        </CardHeader>
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
          </Table>
        </div>
        <div className="flex items-center justify-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
