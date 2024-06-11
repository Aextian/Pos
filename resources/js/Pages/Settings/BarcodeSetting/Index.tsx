import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import { Link } from '@inertiajs/react'
import CardHeader from '@/Components/CardHeader'
import CardContent from '@/Components/CardContent'
import ContentTitle from '@/shared/components/ContentTitle'
import { FaPlus } from 'react-icons/fa'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
const Index = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>
          Barcodes <span className="text-xs text-gray-300">Mange your barcode settings</span>
        </ContentTitle>
        <CardBorderTop>
          <CardHeader>
            <CardTitle>Barcode Setting</CardTitle>
            <div className="flex gap-2">
              {/* <SearchBar queryParams={queryParams} handleSearchChange={handleSearchChange} /> */}
              <Link
                href={route('barcode.create')}
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
              >
                <FaPlus />
                Add new setting
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                <TableHead>
                  <tr>
                    <th scope="col" className="px-4 py-3 text-[10px]">
                      Sticker Sheet setting Name
                    </th>
                    <th scope="col" className="px-4 py-3 text-[10px]">
                      Sticker Sheet setting Description
                    </th>
                    <th scope="col" className="px-4 py-3 text-[10px]">
                      Action
                    </th>
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
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Index
