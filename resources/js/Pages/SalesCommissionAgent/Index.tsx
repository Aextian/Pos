import AddCommissionAgentModal from '@/features/SalesCommissionAgent/components/CreateSalesCommission'
import EditCommissionAgent from '@/features/SalesCommissionAgent/components/EditSalesCommission'
import DangerButton from '@/shared/components/Button/DangerButton'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Table from '@/shared/components/Table/Table'
import TableBody from '@/shared/components/Table/TableBody'
import TableHead from '@/shared/components/Table/TableHead'
import TableHeading from '@/shared/components/Table/TableHeading'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import useSort from '@/shared/hooks/useSort'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import { QueryParam } from '@/shared/types/queryparams'

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
  queryParams: QueryParam
}
const Index: React.FC<Props> = ({ queryParams, users }) => {
  const Thead = [
    { name: 'Name', sort_field: 'username' },
    { name: 'Email', sort_field: 'first_name' },
    { name: 'Contact No', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Address', sort_field: 'email' },
    { name: 'Sales Commission Percentage', sort_field: '' }, // Assuming no sort field for this column
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]
  const url = 'sales-commission-agents.index'

  const initialEditState = {
    id: '',
    full_name: '',
    first_name: '',
    last_name: '',
    email: '',
    contact_no: '',
    prefix: '',
    address: '',
    cmmsn_percent: '',
  }

  const {
    isDelete,
    setDelete,
    isCreateModal,
    handleShowCreateModal,
    isEditModal,
    handleShowEditModal,
    isEdit,
    sortChanged,
  } = useGlobalModalSortControl(queryParams, url, initialEditState)

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

        <AddCommissionAgentModal handleShowModal={handleShowCreateModal} showModal={isCreateModal} />

        <EditCommissionAgent handleShowModal={handleShowEditModal} user={isEdit} showModal={isEditModal} />

        <ContentTitle>Sales Commission Agents</ContentTitle>
        <CardBorderTop>
          <CardBorderTop.Header>
            <CardBorderTop.Title></CardBorderTop.Title>
            <SecondaryButton onClick={handleShowCreateModal} className="gap-3">
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
                        <PrimaryButton onClick={() => handleShowEditModal(user)}>Edit</PrimaryButton>
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
