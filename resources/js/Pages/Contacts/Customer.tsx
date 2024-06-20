import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Success from '@/shared/components/Alert/Success'
import SearchBar from '@/shared/components/Table/SearchBar'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Pagination from '@/shared/components/Table/Pagination'
import CardBorderTop from '@/shared/components/CardBorderTop'
import TableRow from '@/features/Contact/components/CustomerTableRow'
import TableHeading from '@/shared/components/Table/TableHeading'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import TableBody from '@/shared/components/Table/TableBody'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import { QueryParam } from '@/shared/types/params'
import { Contact } from '@/features/Contact/types/contact-types'

type Props = {
  customers: {
    data: Contact[]
    links: []
    sort_field: string
    sort_direction: string
  }
  queryParams: QueryParam
  successMessage: string
}

const Customer: React.FC<Props> = ({ successMessage, customers, queryParams }) => {
  const Thead = [
    { name: 'Contact ID', sort_field: 'contact_Id' },
    { name: 'name', sort_field: 'name' },
    { name: 'Customer Group', sort_field: 'customer_group_id' },
    { name: 'Address', sort_field: 'city' },
    { name: 'Contact', sort_field: 'mobile' },
    { name: 'Total Points', sort_field: '' },
    { name: 'Can Gain Points', sort_field: '' },
    { name: 'Total Sale Due', sort_field: '' },
    { name: 'Total Sell Return Due', sort_field: '' },
    { name: 'Action', sort_field: '' },
  ]

  const url = 'contacts.customer'

  const { isDelete, setDelete, sortChanged } = useGlobalModalSortControl(queryParams, url)

  return (
    <MainLayout>
      <Success message={successMessage} />
      <DeleteModal
        isDelete={isDelete}
        setDelete={setDelete}
        url="contacts.destroy"
        onCloseRoute="supplier.index"
        success="Contact deleted successfully"
      />
      <ContentTitle>
        Customers <span className="text-xs text-gray-300">Manage your customer</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All your Customers</CardBorderTop.Title>
          <Link
            href={route('contacts.create', { type: 'customer' })}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25">
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>
        <SearchBar queryParams={queryParams} url="contacts.customer" />
        <CardBorderTop.Content>
          <Table>
            <TableHead>
              <TableHead.Row>
                {Thead.map((item, index) => (
                  <TableHeading
                    sort_field={queryParams.sort_field || ''}
                    sortChanged={sortChanged}
                    key={index}
                    sort_direction={queryParams.sort_direction}
                    name={item.sort_field}>
                    {item.name}
                  </TableHeading>
                ))}
              </TableHead.Row>
            </TableHead>
            <TableBody>
              {customers.data.map((customer, index) => (
                <TableRow key={index} customer={customer} setDelete={setDelete} />
              ))}
            </TableBody>
          </Table>
          <Pagination links={customers.links} />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Customer
