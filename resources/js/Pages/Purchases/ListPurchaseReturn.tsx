import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Datepicker from 'react-tailwindcss-datepicker'

const ListPurchaseReturn = () => {
  const Thead = [
    'Date',
    'Reference No',
    'Parent Purchase',
    'Location',
    'Supplier',
    'Payment Status',
    'Grand Total',
    'Payment due',
    'action',
  ]
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue)
  }
  return (
    <MainLayout>
      <ContentTitle>Purchase Return</ContentTitle>
      <CardBorderTop>
        {/* <span>{successMessage ? successMessage : ''}</span> */}
        <CardHeader>
          <div className="space-y-2">
            <CardTitle>All Purchase Returns</CardTitle>
            <Datepicker primaryColor="cyan" value={date} onChange={handleValueChange} showShortcuts={true} />
          </div>
        </CardHeader>
        <Table>
          <TableHead>
            <tr>
              {Thead.map((item, index) => (
                <th scope="col" className="px-4 py-3" key={index}>
                  {item}
                </th>
              ))}

              <th scope="col" className="px-4 py-3">
                <div className="flex items-center">action</div>
              </th>
            </tr>
          </TableHead>
          <tbody>
            <NoDataAvailable span={Thead.length} />
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="p-5 text-center text-lg font-bold">
                Total
              </td>
              <td></td>
              <td>Php 0.00</td>
              <td>Php 0.00</td>
            </tr>
          </tfoot>
        </Table>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ListPurchaseReturn
