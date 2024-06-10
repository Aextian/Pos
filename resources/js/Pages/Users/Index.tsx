import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Pagination from '@/shared/components/Table/Pagination'
import TableHeading from '@/shared/components/Table/TableHeading'
import SearchBar from '@/shared/components/Table/SearchBar'
import { FaPlus } from 'react-icons/fa'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Success from '@/shared/components/Alert/Success'
import CardBorderTop from '@/shared/components/CardBorderTop'
import DangerButton from '@/shared/components/Button/DangerButton'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import TableBody from '@/shared/components/Table/TableBody'
import { toast } from 'react-toastify'
import useSort from '@/shared/hooks/useSort'

interface User {
  id: number
  username: string
  first_name: string
  last_name: string
  email: string
  full_name: string
  roles?: {
    name: string
  }[]
}

type Props = {
  users: { data: User[]; links: []; sort_field: string; sort_direction: string }
  successMessage: string
  queryParams: { sort_field: string; sort_direction: 'asc' | 'desc'; search: string }
}

const Index: React.FC<Props> = ({ users, successMessage, queryParams }) => {
  const [isDelete, setDelete] = useState<number | null>(0)

  // table Head
  const Thead = [
    { name: 'Username', sort_field: 'username' },
    { name: 'Name', sort_field: 'first_name' },
    { name: 'Role', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Email', sort_field: 'email' },
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]

  // function for sorting
  const url = 'users.index'
  const sortChanged = useSort(queryParams, url)

  return (
    <MainLayout>
      <ContentTitle>Manage users</ContentTitle>
      <DeleteModal
        setDelete={setDelete}
        isDelete={isDelete}
        url="users.destroy"
        onCloseRoute="users.index"
        success="User deleted successfully"
      />
      <Success message={successMessage} />
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All users</CardBorderTop.Title>
          <Link
            preserveScroll
            preserveState
            href={route('users.create')}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
            <FaPlus /> Add
          </Link>
        </CardBorderTop.Header>
        <SearchBar queryParams={queryParams} url={url} />
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
              {users.data.map((user, index) => (
                <TableBody.Row key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.username}
                  </th>
                  <td className="px-6 py-4">{user.full_name} </td>
                  <td className="px-6 py-4">
                    {user.roles?.map((role, indexRole) => (
                      <span key={indexRole}>{role.name},</span>
                    ))}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 text-xs">
                      <DangerButton className="text-[10px]" onClick={() => setDelete(user.id)}>
                        Delete
                      </DangerButton>
                      <Link
                        href={route('users.edit', user.id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                        Edit
                      </Link>
                    </div>
                  </td>
                </TableBody.Row>
              ))}
              {users.data.length === 0 ? <NoDataAvailable span={Thead.length} /> : ''}
            </TableBody>
          </Table>
        </CardBorderTop.Content>
        <Pagination links={users.links} />
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
