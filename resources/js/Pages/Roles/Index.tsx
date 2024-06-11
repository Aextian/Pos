import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Success from '@/shared/components/Alert/Success'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import DangerButton from '@/shared/components/Button/DangerButton'

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
        <CardBorderTop className="max-w-2xl">
          <CardBorderTop.Header>
            <CardBorderTop.Title>All roles</CardBorderTop.Title>
            <Link
              href={route('roles.create')}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
            >
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
                    className="border- bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {role.name}
                    </th>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 text-xs">
                        <DangerButton onClick={() => setDelete(role.id)}>Delete</DangerButton>
                        <Link
                          href={route('roles.edit', role.id)}
                          className="`inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-500 dark:hover:bg-gray-400"
                        >
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
