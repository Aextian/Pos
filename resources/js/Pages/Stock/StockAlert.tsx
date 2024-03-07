import TextInput from '@/Components/TextInput'
import Tooltip from '@/Components/Tooltip'
import StockData from '@/Data/StockAlertData'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

const StockAlert = () => {
  return (
    <MainLayout>
      <div className=" h-screen bg-slate-200 w-screen py-5 md:px-10">
        <div className="mb-10 px-5 md:px-2">
          <h1 className="text-lg">Welcome Mlya Pos</h1>
        </div>

        <div className="relative flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-lg font-medium">Product Stock Alert</h1>
            <Tooltip
              title="Product with low stock."
              content="
              Based on product alert quantity set in add product screen . Purchases this produc ts before stock ends
              ">
              <RiErrorWarningFill size={20} />
            </Tooltip>
          </div>

          <TextInput type="search" className="mb-3" />

          {StockData.map((data, index) => (
            <div className=" flex flex-col gap-1 p-3 shadow-md bg-white rounded-lg" key={index}>
              <div>
                Product: <span>{data.product}</span>
              </div>
              <div>
                Location: <span>{data.location}</span>
              </div>
              <div>
                Current Stock: <span>{data.stock}</span>
              </div>
              <div>
                Action: <button className="bg-cyan-500 px-2 rounded-md py-1 text-white">View Location</button>{' '}
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-3">pagination</div>
        </div>
      </div>
    </MainLayout>
  )
}

export default StockAlert
