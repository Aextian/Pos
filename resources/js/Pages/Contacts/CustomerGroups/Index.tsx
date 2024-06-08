import CreateGroup from '@/Components/CustomerGroup/CreateGroup'
import EditGroup from '@/Components/CustomerGroup/EditGroup'
import Success from '@/Components/Shared/ui/Alert/Success'
import DangerButton from '@/Components/Shared/ui/Button/DangerButton'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import DeleteModal from '@/Components/Shared/ui/Modal/DeleteModal'
import Pagination from '@/Components/Shared/ui/Table/Pagination'
import SearchBar from '@/Components/Shared/ui/Table/SearchBar'
import Table from '@/Components/Shared/ui/Table/Table'
import TableBody from '@/Components/Shared/ui/Table/TableBody'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import TableHeading from '@/Components/Shared/ui/Table/TableHeading'
import useSort from '@/Hooks/useSort'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

interface Group {
  id: number
  name: string
  amount: string
}

type Props = {
  groups: { data: Group[]; links: []; sort_field: string; sort_direction: string }
  successMessage: string
  queryParams: { sort_field: string; sort_direction: 'asc' | 'desc'; search: string }
}

const Index: React.FC<Props> = ({ groups, queryParams, successMessage }) => {
  const Thead = [
    { name: 'Name', sort_field: 'name' }, // Assuming no sort field for this column
    { name: 'Amount', sort_field: 'amount' },
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]

  const [isCreatemodal, setCreateModal] = useState<boolean>(false)
  const [isEditModal, setEditModal] = useState<boolean>(false)
  const [isDelete, setDelete] = useState<number | null>(0)

  const [isEdit, setEdit] = useState<Group>({
    id: 0,
    name: '',
    amount: '',
  })

  const handleShowCreateModal = useCallback(() => {
    setCreateModal((prevState) => !isCreatemodal)
  }, [isCreatemodal])

  const handleShowEditModal = useCallback(
    (data: Group) => {
      setEditModal((prevState) => !isEditModal)
      setEdit(data)
    },
    [isEditModal],
  )

  // function for sorting
  const url = 'customer-group.index'
  const sortChanged = useSort(queryParams, url)

  return (
    <MainLayout>
      {/* modal */}
      <CreateGroup showModal={isCreatemodal} handleShowModal={handleShowCreateModal} />
      <EditGroup showModal={isEditModal} group={isEdit} handleShowModal={handleShowEditModal} />
      <DeleteModal
        setDelete={setDelete}
        isDelete={isDelete}
        url="customer-group.destroy"
        onCloseRoute="customer-group.index"
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
                  <td className="px-6 py-3 space-x-3 whitespace-nowrap">
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

export default Index
