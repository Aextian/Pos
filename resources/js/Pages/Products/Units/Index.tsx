import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import Modal from '@/Components/Shared/ui/Modal/Modal'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import CreateUnit from '@/Components/Units/CreateUnit'
import TableHeading from '@/Components/Shared/ui/Table/TableHeading'
import useSort from '@/Hooks/useSort'
import TableBody from '@/Components/Shared/ui/Table/TableBody'
import SearchBar from '@/Components/Shared/ui/Table/SearchBar'
import DangerButton from '@/Components/Shared/ui/Button/DangerButton'
import Editunit from '@/Components/Units/EditUnit'
import DeleteModal from '@/Components/Shared/ui/Modal/DeleteModal'

interface Unit {
  id: number
  actual_name: string
  short_name: string
  allow_decimal: number
  base_unit_multiplier: number | null
  base_unit_id: number | null
}

type Props = {
  units: { data: Unit[]; links: []; sort_field: string; sort_direction: string }
  queryParams: { sort_field: string; sort_direction: 'asc' | 'desc'; search: string }
}

const Index: React.FC<Props> = ({ units, queryParams }) => {
  const Thead = [
    { name: 'Name', sort_field: 'actual_name' },
    { name: 'short name', sort_field: 'short_name' },
    { name: 'Allow Decimal', sort_field: 'allow_decimal' }, // Assuming no sort field for this column
    { name: 'Action', sort_field: '' }, // Assuming no sort field for this column
  ]
  const [isCreateModal, setCreateModal] = useState<boolean>(false)
  const [isEditModal, setEditModal] = useState<boolean>(false)
  const [isDelete, setDelete] = useState<number | null>(0)
  const [isEdit, setEdit] = useState<Unit>({
    id: 0,
    actual_name: '',
    short_name: '',
    allow_decimal: 0,
    base_unit_multiplier: 0 as null | number,
    base_unit_id: 0 as null | number,
  })

  const handleShowCreate = useCallback(() => {
    setCreateModal((prevState) => !isCreateModal)
  }, [isCreateModal])

  const handleShowEditModal = useCallback(
    (data: Unit) => {
      setEditModal((prevState) => !isEditModal)
      setEdit(data)
    },
    [isEditModal],
  )

  // function for sorting
  const url = 'unit.index'
  const sortChanged = useSort(queryParams, url)

  return (
    <>
      <MainLayout>
        <CreateUnit showModal={isCreateModal} handleShowModal={handleShowCreate} units={units.data} />

        <Editunit
          showModal={isEditModal}
          handleShowModal={handleShowEditModal}
          unit={isEdit}
          units={units.data}
        />

        <DeleteModal
          success="Unit deleted successfully"
          setDelete={setDelete}
          isDelete={isDelete}
          url="unit.destroy"
          onCloseRoute="unit.index"
        />

        <ContentTitle>
          Units <span className="text-xs text-gray-300">Manage your units</span>
        </ContentTitle>
        <CardBorderTop>
          <CardBorderTop.Header>
            <CardBorderTop.Title>All your units</CardBorderTop.Title>
            <SecondaryButton
              onClick={handleShowCreate}
              className="rounded-lg px-5 py-1 bg-cyan-500  font-medium gap-2">
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
                {units.data.map((unit, index) => (
                  <TableBody.Row key={index}>
                    <td className="px-6 py-4">{unit.actual_name}</td>
                    <td className="px-6 py-4">{unit.short_name}</td>
                    <td className="px-6 py-4">{unit.allow_decimal}</td>
                    <td className="px-6 py-4 space-x-3 whitespace-nowrap">
                      <PrimaryButton onClick={() => handleShowEditModal(unit)}>Edit</PrimaryButton>
                      <DangerButton onClick={() => setDelete(unit.id)}>Delete</DangerButton>
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
