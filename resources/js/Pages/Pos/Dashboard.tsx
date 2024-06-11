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
      <div className="mx-5 mb-5 flex flex-col justify-center gap-5 rounded-md">
        <div>
          <button
            type="button"
            className="border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            Profile
          </button>
          <button
            type="button"
            className="border-b border-t border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            Settings
          </button>
          <button
            type="button"
            className="border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            Messages
          </button>
          <button
            type="button"
            className="border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
          >
            This Financial Year
          </button>
        </div>
      </div>
      <LabelRow>
        <SpanLabel>Date Range:</SpanLabel>
        <TextInput type="date" className="w-1/3 rounded-none text-xs" />
      </LabelRow>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card>
          <div className="flex items-center justify-center bg-cyan-600 p-4 text-white">
            <FaMoneyBill size={40} />
          </div>
          <div className="grid-flow-row-[auto_1fr_auto] grid gap-3">
            <h2 className="text-sm font-bold">TOTAL STOCK VALUE</h2>
            <p className="text-xs font-normal leading-6 text-slate-500">
              ( TOTAL PURCHASE - PURCHASE RETURN - STOCK ADJUSTMENT )
            </p>
            <p className="text-sm font-extrabold">= Php 0.00</p>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-center bg-cyan-600 p-4 text-white">
            <FaCartPlus size={40} />
          </div>
          <div className="grid-flow-row-[auto_1fr_auto] grid">
            <h2 className="text-sm font-bold">TOTAL SALES</h2>
            <p className="text-sm font-extrabold">Php 0.00</p>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-center bg-orange-400 p-4 text-white">
            <FaPaperclip size={40} />
          </div>

          <div className="grid-flow-row-[auto_1fr_auto] grid">
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

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="grid w-full grid-flow-row gap-2 rounded-sm border-t-2 border-t-amber-700 bg-slate-100 p-2 shadow-lg">
          <div className="flex items-center justify-start gap-2">
            <IoIosWarning size={20} />
            <h1 className="text-md">Sales Payment Due</h1>
            <Info
              title="Pending payment for Sales."
              content="Based on invoice pay term.Showing payments to be received in 7 days or less."
            >
              <FaCircleInfo />
            </Info>
          </div>
          <div className="grid-flow-col-[1fr_1fr_1fr] grid gap-3 rounded-xl bg-slate-50 p-3 text-xs shadow-sm">
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

        <div className="grid w-full grid-flow-row gap-2 rounded-sm border-t-2 border-t-amber-700 bg-slate-100 p-2 shadow-lg">
          <div className="flex items-center justify-start gap-2">
            <IoIosWarning size={20} />
            <h1 className="text-md">Purchase Payment Due</h1>
            <Info
              title="Pending payment for Purchases."
              content="Based on supplier's pay term. Showing payments to be received in 7 days or less."
            >
              <FaCircleInfo />
            </Info>
          </div>

          <div className="grid-flow-col-[1fr_1fr_1fr] grid gap-3 rounded-xl bg-slate-50 p-3 text-xs shadow-sm">
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

        <div className="grid w-full grid-flow-row gap-2 rounded-sm border-t-2 border-t-amber-700 bg-slate-100 p-2 shadow-lg">
          <div className="flex items-center justify-start gap-2">
            <IoIosWarning size={20} />
            <h1 className="text-md">Stock Expiry Alert</h1>
            <Info
              title="List of stocks expiring in 180 days"
              content="You can set the no. of days in Business Settings"
            >
              <FaCircleInfo />
            </Info>
          </div>

          <div className="grid-flow-col-[1fr_1fr_1fr] grid gap-3 rounded-xl bg-slate-50 p-3 text-xs shadow-sm">
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
      <div className="flex justify-start gap-2 rounded-sm rounded-br-2xl rounded-tl-2xl border-t-2 bg-slate-100 p-3 shadow-lg">
        {children}
      </div>
    </>
  )
}
export default Dashboard
