import React, { PropsWithChildren } from 'react'
import { FaMoneyBill, FaPaperclip } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import ContentTitle from '@/shared/components/ContentTitle'
import { Line } from 'react-chartjs-2'
import Info from '@/shared/components/Tooltip'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { FaCartPlus, FaCircleInfo, FaInfo } from 'react-icons/fa6'
import CardBorderTop from '@/shared/components/CardBorderTop'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface LineChartProps {
  height?: number
  width?: number
  // Add any other props that you want to pass to the Line component
}

const Dashboard: React.FC<LineChartProps> = (props) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
  return (
    <MainLayout>
      <ContentTitle>Welcome Mlya Pos</ContentTitle>
      <div className="flex flex-col rounded-md mb-5 mx-5 justify-center gap-5">
        <div>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            Profile
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            Settings
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            Messages
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            This Financial Year
          </button>
        </div>
      </div>
      <LabelRow>
        <SpanLabel>Date Range:</SpanLabel>
        <TextInput type="date" className="w-1/3 text-xs rounded-none" />
      </LabelRow>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
        <Card>
          <div className=" bg-cyan-600 flex items-center justify-center text-white p-4">
            <FaMoneyBill size={40} />
          </div>
          <div className="grid grid-flow-row-[auto_1fr_auto] gap-3">
            <h2 className="text-sm font-bold">TOTAL STOCK VALUE</h2>
            <p className="text-xs font-normal leading-6 text-slate-500">
              ( TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT )
            </p>
            <p className="text-sm font-extrabold">= Php 0.00</p>
          </div>
        </Card>

        <Card>
          <div className="bg-cyan-600 flex items-center justify-center text-white p-4">
            <FaCartPlus size={40} />
          </div>
          <div className="grid grid-flow-row-[auto_1fr_auto]">
            <h2 className="text-sm  font-bold">TOTAL SALES</h2>
            <p className="text-sm font-extrabold">Php 0.00</p>
          </div>
        </Card>

        <Card>
          <div className="bg-orange-400 flex items-center justify-center text-white p-4">
            <FaPaperclip size={40} />
          </div>

          <div className="grid grid-flow-row-[auto_1fr_auto]">
            <h2 className="text-sm font-bold">INVOICE DUE</h2>
            <p className="text-sm font-extrabold">Php 0.00</p>
          </div>
        </Card>
      </div>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Sales Last 30 Days</CardBorderTop.Title>
        </CardBorderTop.Header>
        <Line data={data} options={options} {...props} height={70} />
      </CardBorderTop>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Sales Current Financial Year</CardBorderTop.Title>
        </CardBorderTop.Header>
        <Line data={data} options={options} {...props} height={70} />
      </CardBorderTop>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3">
        <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700 w-full">
          <div className="flex items-center justify-start gap-2">
            <IoIosWarning size={20} />
            <h1 className="text-md">Sales Payment Due</h1>
            <Info
              title="Pending payment for Sales."
              content="Based on invoice pay term.Showing payments to be received in 7 days or less.">
              <FaCircleInfo />
            </Info>
          </div>
          <div className="grid gap-3 grid-flow-col-[1fr_1fr_1fr] shadow-sm bg-slate-50 rounded-xl p-3 text-xs">
            <div>
              Customer: <span>Walk-in Customer</span>
            </div>
            <div>
              Invoice No. <span>S-0000000019</span>
            </div>
            <div>
              Due Amount: <span>Php 1,1433.13</span>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700 w-full">
          <div className="flex items-center justify-start gap-2">
            <IoIosWarning size={20} />
            <h1 className="text-md">Purchase Payment Due</h1>
            <Info
              title="Pending payment for Purchases."
              content="Based on supplier's pay term. Showing payments to be received in 7 days or less.">
              <FaCircleInfo />
            </Info>
          </div>

          <div className="grid gap-3 grid-flow-col-[1fr_1fr_1fr] shadow-sm bg-slate-50 rounded-xl p-3 text-xs">
            <div>
              Customer: <span>Walk-in Customer</span>
            </div>
            <div>
              Invoice No. <span>S-0000000019</span>
            </div>
            <div>
              Due Amount: <span>Php 1,1433.13</span>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row  bg-slate-100 shadow-lg p-2 rounded-sm border-t-2 gap-2 border-t-amber-700 w-full">
          <div className="flex items-center justify-start gap-2">
            <IoIosWarning size={20} />
            <h1 className="text-md">Stock Expiry Alert</h1>
            <Info
              title="List of stocks expiring in 180 days"
              content="You can set the no. of days in Business Settings">
              <FaCircleInfo />
            </Info>
          </div>

          <div className="grid gap-3 grid-flow-col-[1fr_1fr_1fr] shadow-sm bg-slate-50 rounded-xl p-3 text-xs">
            <div>
              Customer: <span>Walk-in Customer</span>
            </div>
            <div>
              Invoice No. <span>S-0000000019</span>
            </div>
            <div>
              Due Amount: <span>Php 1,1433.13</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className=" flex justify-start  bg-slate-100 shadow-lg p-3 rounded-sm border-t-2 gap-2  rounded-br-2xl rounded-tl-2xl ">
        {children}
      </div>
    </>
  )
}
export default Dashboard
