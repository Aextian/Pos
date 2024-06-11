import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaBriefcase, FaCalendar, FaHandshake, FaInfo, FaMoneyBill, FaPhone, FaUser } from 'react-icons/fa'
import { FaMarkdown } from 'react-icons/fa6'
import { Contact } from '@/features/Contact/types/contact-types'

const Show: React.FC<{ supplier: Contact }> = ({ supplier }) => {
  const Thead = [
    'Date',
    'Ref No',
    'Supplier',
    'Purchase Status',
    'Payment Status',
    'Grand Total',
    'Payment due',
    'action',
  ]

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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="flex flex-col gap-5 bg-slate-50 p-3 shadow-inner">
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

            <div className="flex flex-col gap-5 bg-slate-50 p-3 shadow-inner md:max-h-16">
              <div className="space-y-3">
                <h5 className="flex items-center gap-3 font-semibold">
                  <FaPhone /> Mobile
                </h5>
                <span className="text-slate-500">{supplier.mobile}</span>
              </div>
            </div>

            <div className="flex flex-col gap-5 bg-slate-50 p-3 shadow-inner">
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

            <div className="flex flex-col gap-5 bg-slate-50 p-3 shadow-inner">
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
