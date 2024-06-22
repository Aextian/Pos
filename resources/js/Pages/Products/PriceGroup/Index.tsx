import ContentTitle from '@/shared/components/ContentTitle'
import DangerButton from '@/shared/components/Button/DangerButton'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import NoDataAvailable from '@/shared/components/Table/NoDataAvailable'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextArea from '@/shared/components/TextArea'
import Modal from '@/shared/components/Modal/Modal'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import { QueryParam } from '@/shared/types/params'
import CreatePriceGroup from '@/features/PriceGroup/components/CreatePriceGroup'
import TableBody from '@/shared/components/Table/TableBody'
import TableHeading from '@/shared/components/Table/TableHeading'
import { PriceGroup, PriceGroupData } from '@/features/PriceGroup/types/price-groups-types'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import EditPriceGroup from '@/features/PriceGroup/components/EditPriceGroup'
import Pagination from '@/shared/components/Table/Pagination'
import SearchBar from '@/shared/components/Table/SearchBar'

type Props = {
  queryParams: QueryParam
  price_groups: PriceGroupData
}
const Index: React.FC<Props> = ({ queryParams, price_groups }) => {
  const Thead = [
    { name: 'Name', sort_field: 'name' },
    { name: 'Description', sort_field: 'description' },
    { name: 'Action', sort_field: '' },
  ]

  const url = 'price-group.index'

  const initialEditState = {
    id: null,
    name: '',
    description: '',
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
  } = useGlobalModalSortControl<PriceGroup>(queryParams, url, initialEditState)

  return (
    <MainLayout>
      <DeleteModal
        url="price-group.destroy"
        setDelete={setDelete}
        isDelete={isDelete}
        onCloseRoute="categories.index"
        success="Price Group deleted successfully"
      />

      <CreatePriceGroup showModal={isCreateModal} handleShowModal={handleShowCreateModal} />
      <EditPriceGroup showModal={isEditModal} handleShowModal={handleShowEditModal} price_group={isEdit} />

      <ContentTitle>Selling Price Group</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All Selling Price Group</CardBorderTop.Title>
          <SecondaryButton onClick={handleShowCreateModal} className="gap-2">
            <FaPlus />
            Add
          </SecondaryButton>
        </CardBorderTop.Header>
        <SearchBar queryParams={queryParams} url={url} />

        <CardBorderTop.Content>
          <Table>
            <TableHead>
              <TableHead.Row>
                {Thead.map((item, index) => (
                  <TableHeading
                    key={index}
                    sort_field={queryParams.sort_field || ''}
                    sortChanged={sortChanged}
                    sort_direction={queryParams.sort_direction}
                    name={item.sort_field}>
                    {item.name}
                  </TableHeading>
                ))}
              </TableHead.Row>
            </TableHead>
            <TableBody>
              {price_groups.data.map((price_group, index) => (
                <TableBody.Row key={index}>
                  <th className="px-6 py-4">{price_group.name}</th>
                  <td className="px-6 py-4">{price_group.description} </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 text-xs">
                      <DangerButton onClick={() => setDelete(price_group.id)}>Delete</DangerButton>
                      <PrimaryButton onClick={() => handleShowEditModal(price_group)}>Edit</PrimaryButton>
                    </div>
                  </td>
                </TableBody.Row>
              ))}
            </TableBody>
          </Table>

          <Pagination links={price_groups.links} />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
