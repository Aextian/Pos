import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Success from '@/shared/components/Alert/Success'
import SearchBar from '@/shared/components/Table/SearchBar'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Pagination from '@/shared/components/Table/Pagination'
import CardBorderTop from '@/shared/components/CardBorderTop'
import TableRow from '@/features/Suppliers/TableRow'
import TableHeading from '@/shared/components/Table/TableHeading'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import TableBody from '@/shared/components/Table/TableBody'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import { QueryParam } from '@/shared/types/queryparams'

interface Supplier {
  id: number
  contact_id: number
  supplier_business_name: string
  name: string
  mobile: string
}

type Props = {
  suppliers: {
    data: Supplier[]
    links: []
    sort_field: string
    sort_direction: string
  }
  queryParams: QueryParam
  successMessage: string
}

const Index: React.FC<Props> = ({ successMessage, suppliers, queryParams }) => {
  const Thead = [
    { name: 'Contact ID', sort_field: 'contact_Id' },
    { name: 'Business name', sort_field: 'supplier_business_name' },
    { name: 'Name', sort_field: 'name' }, // Assuming no sort field for this column
    { name: 'Contact', sort_field: 'email' },
    { name: 'Total Purchase Due', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]

  const url = 'contacts.supplier'

  const { isDelete, setDelete, sortChanged } = useGlobalModalSortControl(queryParams, url)

  return (
    <MainLayout>
      <Success message={successMessage} />

      <DeleteModal
        isDelete={isDelete}
        setDelete={setDelete}
        url="supplier.destroy"
        onCloseRoute="supplier.index"
        success="Supplier deleted successfully"
      />

      <ContentTitle>
        Suppliers <span className="text-xs text-gray-300">Manage your suppliers</span>
      </ContentTitle>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All your Suppliers</CardBorderTop.Title>
          <Link
            href={route('contacts.create')}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>

        <SearchBar queryParams={queryParams} url="supplier.index" />

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
        </CardBorderTop.Content>
        <Pagination links={suppliers.links} />
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
