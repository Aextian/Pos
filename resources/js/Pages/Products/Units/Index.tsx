import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Modal from '@/shared/components/Modal/Modal'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import CreateUnit from '@/features/Units/CreateUnit'
import TableHeading from '@/shared/components/Table/TableHeading'
import TableBody from '@/shared/components/Table/TableBody'
import SearchBar from '@/shared/components/Table/SearchBar'
import DangerButton from '@/shared/components/Button/DangerButton'
import Editunit from '@/features/Units/EditUnit'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'

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

  // function for sorting
  const url = 'unit.index'

  const initialEditState = {
    id: 0,
    actual_name: '',
    short_name: '',
    allow_decimal: 0,
    base_unit_multiplier: 0 as null | number,
    base_unit_id: 0 as null | number,
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
        <CreateUnit showModal={isCreateModal} handleShowModal={handleShowCreateModal} units={units.data} />

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
              onClick={handleShowCreateModal}
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
