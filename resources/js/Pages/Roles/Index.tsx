import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/ContentTitle'
import DeleteModal from '@/Components/DeleteModal'
import Success from '@/Components/GlobalComponent/AlertMessage/Success'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'

interface Role {
  id: number
  name: string
}

type Props = {
  roles: Role[]
  successMessage: string
}

const Index: React.FC<Props> = ({ roles, successMessage }) => {
  const [isDelete, setDelete] = useState<number | null>(0)

  const handleDelete = (id: number) => {
    router.delete(route('roles.destroy', id))
    setDelete(null)
  }

  const handleShowDelete = (id: number) => {
    setDelete(id)
  }

  return (
    <>
      <MainLayout>
        <ContentTitle>Manage roles</ContentTitle>
        <DeleteModal isDelete={isDelete} handleDelete={handleDelete} handleShowDelete={handleShowDelete} onCloseRoute="roles.index">
          <FaTrashAlt size={35} />
          <h2>Are you sure you want to delete this?</h2>
        </DeleteModal>

        <CardBorderTop>
          {/* success error message */}
          {successMessage ? <Success message={successMessage} /> : null}

          <CardHeader>
            <CardTitle>All roles</CardTitle>
            <Link
              href={route('roles.create')}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
              <FaPlus /> Add
            </Link>
          </CardHeader>

          <Table>
            <TableHead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Role</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    <span className="sr-only"></span>
                  </div>
                </th>
              </tr>
            </TableHead>
            <tbody>
              {roles.map((role, index) => (
                <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {role.name}
                  </th>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 text-xs">
                      <Link href={route('roles.edit', role.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                        Edit
                      </Link>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]" onClick={() => handleShowDelete(role.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Index
