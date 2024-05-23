import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import SearchBar from '@/Components/Shared/ui/Table/SearchBar'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import Modal from '@/Components/Shared/ui/Modal/Modal'
import Pagination from '@/Components/Shared/ui/Table/Pagination'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import TableHeading from '@/Components/Shared/ui/Table/TableHeading'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Index = () => {
  const Thead = ['name', 'Location ID', 'Landmark', 'City', 'Zip Code', 'State', 'Country', ' Invoice scheme', 'Invoice layout', 'Action']
  return (
    <>
      <MainLayout>
        {/* <DeleteModal isDelete={isDelete} handleDelete={handleDelete} handleShowDelete={handleShowDelete} onCloseRoute="users.index" /> */}
        <ContentTitle>Business Locations</ContentTitle>
        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}
          <CardHeader>
            <CardTitle>All your business locations</CardTitle>
            <div className="flex gap-2 ">
              {/* <SearchBar queryParams={queryParams} handleSearchChange={handleSearchChange} /> */}
              <Link
                href={route('location.create')}
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
                <FaPlus /> Add
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                <TableHead>
                  <tr>
                    {Thead.map((item, index) => (
                      <th scope="col" className="px-4 py-3 text-[10px]" key={index}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </TableHead>
                <tbody>
                  {/* {users.data.map((user, index) => (
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
                ))} */}
                  <NoDataAvailable span={10} />
                </tbody>
              </Table>
            </div>
          </CardContent>
          {/* <Pagination links={users.links} /> */}
        </CardBorderTop>
      </MainLayout>
    </>
  )
}
export default Index
