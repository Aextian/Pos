import CreateGroup from '@/features/CustomerGroup/components/CreateGroup'
import EditGroup from '@/features/CustomerGroup/components/EditGroup'
import Success from '@/shared/components/Alert/Success'
import DangerButton from '@/shared/components/Button/DangerButton'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import Pagination from '@/shared/components/Table/Pagination'
import SearchBar from '@/shared/components/Table/SearchBar'
import Table from '@/shared/components/Table/Table'
import TableBody from '@/shared/components/Table/TableBody'
import TableHead from '@/shared/components/Table/TableHead'
import TableHeading from '@/shared/components/Table/TableHeading'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { QueryParam } from '@/shared/types/params'
import { IGroup, IGroupData } from '@/features/CustomerGroup/types/group-types'
import useModals from '@/shared/hooks/useModals'
import useSorts from '@/shared/hooks/useSorts'
import { Thead, url, initialEditState } from '@/features/CustomerGroup/constants/customer-group-constants'

type Props = {
  groups: IGroupData
  successMessage: string
  queryParams: QueryParam
}

const CustomerGroup: React.FC<Props> = ({ groups, queryParams, successMessage }) => {
  const {
    isDelete,
    setDelete,
    isCreateModal,
    handleShowCreateModal,
    isEditModal,
    handleShowEditModal,
    editState,
  } = useModals<IGroup>(initialEditState)

  const { sortChanged } = useSorts(queryParams, url)

  return (
    <MainLayout>
      {/* modal */}
      <CreateGroup showModal={isCreateModal} handleShowModal={handleShowCreateModal} />
      <EditGroup showModal={isEditModal} group={editState} handleShowModal={handleShowEditModal} />
      <DeleteModal
        setDelete={setDelete}
        isDelete={isDelete}
        url="customer-group.destroy"
        onCloseRoute="customer-group.index"
        success="Customer Group deleted successfully" // TODO: Custom Success Message
      />
      <Success message={successMessage} />
      <ContentTitle>Customer Groups</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All Customer Group</CardBorderTop.Title>
          <SecondaryButton className="gap-3" onClick={handleShowCreateModal}>
            <FaPlus /> Add
          </SecondaryButton>
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
              {groups.data.map((item) => (
                <TableBody.Row key={item.id}>
                  <td className="px-6 py-3">{item.name}</td>
                  <td className="px-6 py-3">{item.amount}</td>
                  <td className="space-x-3 whitespace-nowrap px-6 py-3">
                    <PrimaryButton onClick={() => handleShowEditModal(item)}>Edit</PrimaryButton>
                    <DangerButton onClick={() => setDelete(item.id)}>Delete</DangerButton>
                  </td>
                </TableBody.Row>
              ))}
            </TableBody>
            <tfoot>
              <tr className="bg-gray-100 text-black">
                <td colSpan={2} className="px-6 py-4 text-right font-bold">
                  Total
                </td>
                <td className="px-6 py-4 text-right font-bold">00</td>
              </tr>
            </tfoot>
          </Table>
          <Pagination links={groups.links} />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default CustomerGroup
