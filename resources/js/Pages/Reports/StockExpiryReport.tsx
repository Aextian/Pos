import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const StockExpiryReport = () => {
  const Thead = [
    'Product',
    ' SKU',
    'Reference No',
    'Location',
    'Stock Left',
    'Lot Number',
    'EXP Date',
    'MFG Date',
    'Edit',
  ]
  return (
    <>
      <MainLayout>
        <ContentTitle>Customer Groups Report</ContentTitle>
        <CardBorderTop>
          <div className="flex flex-col justify-start items-start gap-5">
            <CardTitle>Filters</CardTitle>
            <hr className=" w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              <LabelRow>
                <SpanLabel>Business Location:</SpanLabel>
                <select
                  className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
                  name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Category:</SpanLabel>
                <select
                  className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
                  name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
              <LabelRow>
                <SpanLabel>Sub Category:</SpanLabel>
                <select
                  className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
                  name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
              <LabelRow>
                <SpanLabel>Brand:</SpanLabel>
                <select
                  className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
                  name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
              <LabelRow>
                <SpanLabel>Unit:</SpanLabel>
                <select
                  className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
                  name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
              <LabelRow>
                <SpanLabel>View Stock:</SpanLabel>
                <select
                  className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300"
                  name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
            </div>
          </div>
        </CardBorderTop>
        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              <tfoot>
                <tr>
                  <td colSpan={4}>
                    <div className="p-5 flex items-center">Total</div>
                  </td>
                  <td colSpan={5}>
                    <ul>
                      <li>sd</li>
                    </ul>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
          <div className="flex justify-center items-center">pagination</div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default StockExpiryReport
