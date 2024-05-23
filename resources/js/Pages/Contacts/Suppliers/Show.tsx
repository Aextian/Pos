import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaBriefcase, FaCalendar, FaHandshake, FaInfo, FaMoneyBill, FaPhone, FaUser } from 'react-icons/fa'
import { FaMarkdown } from 'react-icons/fa6'

interface Supplier {
  id: number
  name: string
  email: string
  supplier_business_name: string
  contact_id: string
  points_status: string
  type: string
  tax_number: string
  city: string
  state: string
  country: string
  landmark: string
  mobile: string
  landline: string
  opening_balance: string | number
  alternate_number: string
  pay_term_number: string | number // Assuming pay_term_number could be a string or number
  pay_term_type: string
  custom_field1: string
  custom_field2: string
  custom_field3: string
  custom_field4: string
}
const Show: React.FC<{ supplier: Supplier }> = ({ supplier }) => {
  const Thead = ['Date', 'Ref No', 'Supplier', 'Purchase Status', 'Payment Status', 'Grand Total', 'Payment due', 'action']

  const Card2Thead = ['Reference No', 'Paid on', 'Amount', 'Payment Method', 'action']

  return (
    <MainLayout>
      <CardBorderTop.Header>
        <ContentTitle>View Contact</ContentTitle>
      </CardBorderTop.Header>
      <CardBorderTop>
        <CardBorderTop.Title>
          <FaUser />
          Supplier info
        </CardBorderTop.Title>
        <CardBorderTop.Content>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
            <div className="flex gap-5 flex-col p-3 bg-slate-50  shadow-inner">
              <h5 className="font-semibold">{supplier.supplier_business_name}</h5>
              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaMarkdown /> Address
                </h5>
                <span className="text-slate-500"></span>
              </div>
              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaBriefcase /> Business name
                </h5>
                <span className="text-slate-500">{supplier.supplier_business_name}</span>
              </div>
            </div>

            <div className="flex gap-5 flex-col p-3 md:max-h-16  bg-slate-50 shadow-inner">
              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaPhone /> Mobile
                </h5>
                <span className="text-slate-500">{supplier.mobile}</span>
              </div>
            </div>

            <div className="flex gap-5 flex-col p-3 bg-slate-50  shadow-inner ">
              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaInfo /> Tax number
                </h5>
                <span className="text-slate-500">{supplier.tax_number}</span>
              </div>

              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaCalendar /> Pay term
                </h5>
                <span className="text-slate-500">{supplier.pay_term_number}</span>
              </div>

              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaHandshake /> Pay term
                </h5>
                <span className="text-slate-500">{supplier.pay_term_type}</span>
              </div>
            </div>

            <div className="flex gap-5 flex-col p-3 bg-slate-50  shadow-inner ">
              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">Total Purchase</h5>
                <span className="text-slate-500">Php 13,172.00</span>
              </div>

              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">Total Purchase Payment</h5>
                <span className="text-slate-500">Php 7,542.00</span>
              </div>

              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">Total Purchase Due</h5>
                <span className="text-slate-500">Php 5,630.00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <PrimaryButton className="gap-3">
              <FaMoneyBill />
              Pay Due Amount
            </PrimaryButton>
          </div>
        </CardBorderTop.Content>
      </CardBorderTop>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>
            <FaMoneyBill /> All purchases related to this contact
          </CardBorderTop.Title>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <Table>
            <TableHead>
              <tr>
                {Thead.map((item, index) => (
                  <th key={index} scope="col" className="px-4 py-3 text-[10px]">
                    {item}
                  </th>
                ))}
              </tr>
            </TableHead>
            <tbody>
              <NoDataAvailable span={Thead.length} />
            </tbody>
          </Table>
        </CardBorderTop.Content>
      </CardBorderTop>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Opening Balance Payments</CardBorderTop.Title>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <Table>
            <TableHead>
              <tr>
                {Card2Thead.map((item, index) => (
                  <th key={index} scope="col" className="px-4 py-3 text-[10px]">
                    {item}
                  </th>
                ))}
              </tr>
            </TableHead>
            <tbody>
              <NoDataAvailable span={Thead.length} />
            </tbody>
          </Table>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Show
