import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DeleteModal from '@/Components/DeleteModal'
import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import CardContent from '@/Components/CardContent'
import Pagination from '@/Components/Pagination'
import TableHeading from '@/Components/Table/TableHeading'
import TextInput from '@/Components/TextInput'
import SearchBar from '@/Components/GlobalComponent/Table/SearchBar'
import { FaCheckCircle, FaPlus } from 'react-icons/fa'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import Success from '@/Components/GlobalComponent/AlertMessage/Success'

interface User {
  id: number
  username: string
  first_name: string
  last_name: string
  email: string
  roles?: []
}

type Props = {
  users: { data: User[]; links: []; sort_field: string; sort_direction: string }
  successMessage: string
  queryParams: { sort_field: string; sort_direction: string; search: string }
}

const Index: React.FC<Props> = ({ users, successMessage, queryParams }) => {
  const [isDelete, setDelete] = useState<number | null>(0)

  const handleDelete = (id: number) => {
    router.delete(route('users.destroy', id))
    setDelete(null)
  }

  const handleShowDelete = (id: number) => {
    setDelete(id)
  }
  const sortChaged = (name: string) => {
    if (name === queryParams.sort_field) {
      console.log('tes')
      if (queryParams.sort_direction === 'asc') {
        router.get(route('users.index'), { sort_field: name, sort_direction: 'desc', search: queryParams.search })
      } else {
        router.get(route('users.index'), { sort_field: name, sort_direction: 'asc', search: queryParams.search })
      }
    } else {
      router.get(route('users.index'), { sort_field: name, sort_direction: 'asc', search: queryParams.search })
    }
  }

  const Thead = [
    { name: 'Username', sort_field: 'username' },
    { name: 'Name', sort_field: 'first_name' },
    { name: 'Role', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Email', sort_field: 'email' },
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.get(route('users.index'), { search: e.target.value })
  }

  return (
    <MainLayout>
      <DeleteModal isDelete={isDelete} handleDelete={handleDelete} handleShowDelete={handleShowDelete} onCloseRoute="users.index" />
      <ContentTitle>Manage users</ContentTitle>
      <CardBorderTop>
        {/* success error message */}
        {successMessage && <Success message={successMessage} />}
        <CardHeader>
          <CardTitle>All users</CardTitle>
          <Link
            href={route('users.create')}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
            <FaPlus /> Add
          </Link>
        </CardHeader>
        <SearchBar queryParams={queryParams} handleSearchChange={handleSearchChange} />
        <CardContent>
          <Table>
            <TableHead>
              <tr>
                {Thead.map((item, index) => (
                  <TableHeading sort_field={queryParams.sort_field || ''} sortChaged={sortChaged} key={index} sort_direction={queryParams.sort_direction} name={item.sort_field}>
                    {item.name}
                    {item.sort_field}
                  </TableHeading>
                ))}
              </tr>
            </TableHead>
            <tbody>
              {users.data.map((user, index) => (
                <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.username}
                  </th>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">
                    {user.roles?.map((role: { name: string }, indexRole: number) => (
                      <label htmlFor="" key={indexRole}>
                        {role.name}
                      </label>
                    ))}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 text-xs">
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]" onClick={() => handleShowDelete(user.id)}>
                        Delete
                      </button>
                      <Link href={route('users.edit', user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
        <Pagination links={users.links} />
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
