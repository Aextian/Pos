import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import Tooltip from '@/shared/components/Tooltip'
import StockData from '@/shared/data/StockAlertData'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { RiErrorWarningFill } from 'react-icons/ri'
import CardBorderTop from '@/shared/components/CardBorderTop'

const StockAlert: React.FC<{ props: any }> = ({ props }) => {
  console.log('sds', props)
  return (
    <MainLayout>
      <ContentTitle>Welcome Mlya Pos</ContentTitle>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Product Stock Alert</CardBorderTop.Title>
          <Tooltip
            title="Product with low stock."
            content="
              Based on product alert quantity set in add product screen . Purchases this produc ts before stock ends
              ">
            <RiErrorWarningFill size={20} />
          </Tooltip>
        </CardBorderTop.Header>

        <div className="flex justify-end">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                <FaSearch size={20} />
              </div>
            </div>
            <TextInput className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " type="search" name="" id="" />
          </div>
        </div>

        {StockData.map((data, index) => (
          <div
            className="md:hidden flex flex-col gap-1 p-3 after:rounded-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            key={index}>
            <div>
              Product: <span>{data.product}</span>
            </div>
            <div>
              p Location: <span>{data.location}</span>
            </div>
            <div>
              Current Stock: <span>{data.stock}</span>
            </div>
            <div>
              Action: <button className="bg-cyan-500 px-2 rounded-md py-1 text-white">View Location</button>
            </div>
          </div>
        ))}
        <div className="hidden md:block">
          <Table>
            <TableHead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Current Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </TableHead>
            <tbody>
              {StockData.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{data.product}</td>
                  <td className="px-6 py-4">{data.location}</td>
                  <td className="px-6 py-4">{data.stock}</td>
                  <td className="px-6 py-4">
                    <button className="bg-cyan-500 px-2 rounded-md py-1 text-white">View Location</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="flex justify-end mt-3">pagination</div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default StockAlert
