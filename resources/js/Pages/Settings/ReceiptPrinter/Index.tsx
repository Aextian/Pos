import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Index = () => {
  const Thead = [
    'Printer Name',
    'Connection Type',
    'Capability Profile',
    ' Character per line',
    'IP Address',
    'Port',
    'Path',
    'Action',
  ]
  return (
    <>
      <MainLayout>
        <ContentTitle>
          Printers <span className="text-xs text-gray-300">Manage your Printers</span>
        </ContentTitle>

        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}
          <CardHeader>
            <CardTitle>All Configure Printers</CardTitle>
            <div className="flex gap-2 ">
              {/* <SearchBar queryParams={queryParams} handleSearchChange={handleSearchChange} /> */}
              <Link
                href={route('printer.create')}
                className="inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
                <FaPlus /> Add Printer
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
