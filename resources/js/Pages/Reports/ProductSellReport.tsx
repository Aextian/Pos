import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import NoDataAvailable from '@/Components/GlobalComponent/Table/NoDataAvailable'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const ProductSellReport = () => {
  const TheadGrouped = ['Product', 'Date', 'Current Stock', 'Total unit sold', 'Total']
  const TheadDetailed = ['Product', 'Customer name', 'Invoice No', 'Date', 'Quantity', 'Unit price', 'Discount', 'Tax', 'Price inc.tax', 'Total']

  const [show, setShow] = useState('detailed')

  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }
  const handleClick = ({ name }: { name: string }) => {
    setShow(name)
  }

  return (
    <>
      <MainLayout>
        <ContentTitle>Product Purchase Report</ContentTitle>
        <CardBorderTop>
          <div className="flex flex-col justify-start items-start gap-5">
            <CardTitle>Filters</CardTitle>
            <hr className=" w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              <LabelRow>
                <SpanLabel>Search Product:</SpanLabel>
                <TextInput placeholder="Enter Product name /SKU/Scan bar code" className=" p-2 w-full" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Customer:</SpanLabel>
                <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
              <LabelRow>
                <SpanLabel>Business Location:</SpanLabel>
                <select className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300" name="type">
                  <option value="" selected>
                    All
                  </option>
                  <option value="">Single</option>
                  <option value="">Variable</option>
                </select>
              </LabelRow>
              <LabelRow>
                <SpanLabel>Date Range:</SpanLabel>
                <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
              </LabelRow>
            </div>
          </div>
        </CardBorderTop>
        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}
          <div className="text-sm font-bold md:text-2xl dark:text-white">
            <button className={`border p-3 ${show === 'detailed' ? 'border-t-cyan-600  border-b-0 border-r-0' : ''} dark:border-slate-500 `} onClick={(e) => handleClick({ name: 'detailed' })}>
              Detailed
            </button>
            <button className={`border p-3 ${show === 'grouped' ? 'border-t-cyan-600 border-b-0 border-l-0' : ''} dark:border-slate-500 `} onClick={(e) => handleClick({ name: 'grouped' })}>
              Grouped
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {show === 'detailed' ? (
              <Table>
                <TableHead>
                  <tr>
                    {TheadDetailed.map((item, key) => (
                      <th scope="col" className="px-4 py-3" key={key}>
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
                  <NoDataAvailable span={TheadDetailed.length} />
                </tbody>
              </Table>
            ) : (
              ''
            )}

            {show === 'grouped' ? (
              <Table>
                <TableHead>
                  <tr>
                    {TheadGrouped.map((item, key) => (
                      <th scope="col" className="px-4 py-3" key={key}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </TableHead>
                <tbody>
                  <NoDataAvailable span={TheadGrouped.length} />
                </tbody>
              </Table>
            ) : (
              ''
            )}
          </div>

          <div className="flex justify-center items-center">pagination</div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default ProductSellReport
