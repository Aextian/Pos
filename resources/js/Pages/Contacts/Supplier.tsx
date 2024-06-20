import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Success from '@/shared/components/Alert/Success'
import SearchBar from '@/shared/components/Table/SearchBar'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Pagination from '@/shared/components/Table/Pagination'
import CardBorderTop from '@/shared/components/CardBorderTop'
import TableRow from '@/features/Contact/components/SupplierTableRow'
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
  suppliers: {
    data: Contact[]
    links: []
    sort_field: string
    sort_direction: string
  }
  queryParams: QueryParam
  successMessage: string
}

const Supplier: React.FC<Props> = ({ successMessage, suppliers, queryParams }) => {
  const Thead = [
    { name: 'Contact ID', sort_field: 'contact_Id' },
    { name: 'Business name', sort_field: 'supplier_business_name' },
    { name: 'Name', sort_field: 'name' },
    { name: 'Contact', sort_field: 'email' },
    { name: 'Total Purchase Due', sort_field: '' },
    { name: 'Total Purchase Return', sort_field: '' },
    { name: 'Action', sort_field: '' },
  ]

  const url = 'contacts.supplier'

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
        Suppliers <span className="text-xs text-gray-300">Manage your suppliers</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All your Suppliers</CardBorderTop.Title>
          <Link
            href={route('contacts.create', { type: 'supplier' })}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25">
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>
        <SearchBar queryParams={queryParams} url="contacts.supplier" />
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
              {suppliers.data.map((supplier, index) => (
                <TableRow key={index} supplier={supplier} setDelete={setDelete} />
              ))}
            </TableBody>
          </Table>
          <Pagination links={suppliers.links} />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Supplier
