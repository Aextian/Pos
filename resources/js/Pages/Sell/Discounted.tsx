import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import PosTitle from '@/Components/Pos/PosTitle'
import PostLabel from '@/Components/Shared/ui/PostLabel'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Discounted = () => {
  const Thead = ['Date', 'Invoice No', 'Customer Name', 'Location', 'Payment Status', 'Total Amount', 'Discount', 'Discounted Amount', 'Payment due']
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }

  return (
    <MainLayout>
      <ContentTitle>
        Sell <span className="text-xs text-gray-300">Discounted</span>
      </ContentTitle>
      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <LabelRow>
            <SpanLabel>Business Location</SpanLabel>
            <select
              className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Customer</SpanLabel>
            <select
              className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Payment Status</SpanLabel>
            <select
              className="w-full p-3 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
              name="type">
              <option value="" selected>
                Please Select
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
      </CardBorderTop>
      <CardBorderTop>
        <CardTitle>Discounted Sales</CardTitle>
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
          </tbody>
        </Table>
        <div className="flex justify-center items-center">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Discounted