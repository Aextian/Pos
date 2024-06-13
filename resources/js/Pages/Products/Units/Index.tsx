import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import CreateUnit from '@/features/Units/components/CreateUnit'
import TableHeading from '@/shared/components/Table/TableHeading'
import TableBody from '@/shared/components/Table/TableBody'
import SearchBar from '@/shared/components/Table/SearchBar'
import DangerButton from '@/shared/components/Button/DangerButton'
import Editunit from '@/features/Units/components/EditUnit'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import { QueryParam } from '@/shared/types/queryparams'
import { Unit, UnitData } from '@/features/Units/types/unit-types'

type Props = {
  units: UnitData
  queryParams: QueryParam
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
    id: null,
    actual_name: '',
    short_name: '',
    allow_decimal: null,
    base_unit_multiplier: null,
    base_unit_id: null,
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
  } = useGlobalModalSortControl<Unit>(queryParams, url, initialEditState)

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
              className="gap-2 rounded-lg bg-cyan-500 px-5 py-1 font-medium">
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
                    <td className="space-x-3 whitespace-nowrap px-6 py-4">
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
