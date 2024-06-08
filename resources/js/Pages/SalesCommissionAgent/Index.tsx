import AddCommissionAgentModal from '@/Components/SalesCommissionAgent/Create'
import EditCommissionAgent from '@/Components/SalesCommissionAgent/Edit'
import Success from '@/Components/Shared/ui/Alert/Success'
import DangerButton from '@/Components/Shared/ui/Button/DangerButton'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import DeleteModal from '@/Components/Shared/ui/Modal/DeleteModal'
import Table from '@/Components/Shared/ui/Table/Table'
import TableBody from '@/Components/Shared/ui/Table/TableBody'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import TableHeading from '@/Components/Shared/ui/Table/TableHeading'
import useSort from '@/Hooks/useSort'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { isStringObject } from 'util/types'

interface User {
  id: string
  full_name: string
  first_name: string
  last_name: string
  email: string
  contact_no: string
  prefix: string
  address: string
  cmmsn_percent: string
}

type Props = {
  users: { data: User[]; links: []; sort_field: string; sort_direction: string }
  successMessage: string
  queryParams: { sort_field: string; sort_direction: 'asc' | 'desc'; search: string }
}
const Index: React.FC<Props> = ({ queryParams, users, successMessage }) => {
  const Thead = [
    { name: 'Name', sort_field: 'username' },
    { name: 'Email', sort_field: 'first_name' },
    { name: 'Contact No', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Address', sort_field: 'email' },
    { name: 'Sales Commission Percentage', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]

  const [isDelete, setDelete] = useState<number | null | string>(0)

  const [isCreateModal, showCreateModal] = useState<boolean>(false)

  const [isEditModal, showEditModal] = useState<boolean>(false)

  const [isEdit, setEdit] = useState<User>({
    id: '',
    full_name: '',
    first_name: '',
    last_name: '',
    email: '',
    contact_no: '',
    prefix: '',
    address: '',
    cmmsn_percent: '',
  })

  const url = 'sales-commission-agents.index'

  const sortChanged = useSort(queryParams, url)

  const handleCreateModal = useCallback(() => {
    showCreateModal((prevState) => !isCreateModal)
  }, [isCreateModal])

  const handleEditModal = useCallback(
    (data: User) => {
      showEditModal((prevState) => !isEditModal)
      setEdit(data)
    },
    [isEditModal],
  )

  return (
    <>
      <MainLayout>
        <DeleteModal
          setDelete={setDelete}
          isDelete={isDelete}
          url="sales-commission-agents.destroy"
          onCloseRoute="sales-commission-agents.index"
          success="Commission Agent deleted successfully"
        />

        <AddCommissionAgentModal handleShowModal={handleCreateModal} showModal={isCreateModal} />

        <EditCommissionAgent handleShowModal={handleEditModal} user={isEdit} showModal={isEditModal} />

        <ContentTitle>Sales Commission Agents</ContentTitle>
        <CardBorderTop>
          <CardBorderTop.Header>
            <CardBorderTop.Title></CardBorderTop.Title>
            <SecondaryButton onClick={handleCreateModal} className="gap-3">
              <FaPlus /> Add
            </SecondaryButton>
          </CardBorderTop.Header>
          <CardBorderTop.Content>
            <Table>
              <TableHead>
                <tr>
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
                </tr>
              </TableHead>
              <TableBody>
                {users.data.map((user, index) => (
                  <TableBody.Row key={index}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.full_name}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.contact_no}</td>
                    <td className="px-6 py-4">{user.address}</td>
                    <td className="px-6 py-4">{user.cmmsn_percent}%</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 text-xs">
                        <DangerButton onClick={() => setDelete(user.id)}>Delete</DangerButton>
                        <PrimaryButton onClick={() => handleEditModal(user)}>Edit</PrimaryButton>
                      </div>
                    </td>
                  </TableBody.Row>
                ))}
              </TableBody>
            </Table>
          </CardBorderTop.Content>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Index
