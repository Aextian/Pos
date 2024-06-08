import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import DeleteModal from '@/Components/Shared/ui/Modal/DeleteModal'
import Success from '@/Components/Shared/ui/Alert/Success'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import DangerButton from '@/Components/Shared/ui/Button/DangerButton'

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
        <DeleteModal
          url="roles.destroy"
          setDelete={setDelete}
          isDelete={isDelete}
          onCloseRoute="roles.index"
          message="Are you sure you want to delete this role?"
          success="Role deleted successfully"
        />
        <CardBorderTop className=" max-w-2xl">
          <CardBorderTop.Header>
            <CardBorderTop.Title>All roles</CardBorderTop.Title>
            <Link
              href={route('roles.create')}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 gap-2">
              <FaPlus /> Add
            </Link>
          </CardBorderTop.Header>
          <CardBorderTop.Content>
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
                  <tr
                    className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600"
                    key={index}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {role.name}
                    </th>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 text-xs">
                        <DangerButton onClick={() => handleShowDelete(role.id)}>Delete</DangerButton>
                        <Link
                          href={route('roles.edit', role.id)}
                          className="
        `inline-flex items-center  py-1 px-3 bg-gray-800 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 dark:bg-gray-500 dark:hover:bg-gray-400">
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBorderTop.Content>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Index
