import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import Modal from '@/shared/components/Modal/Modal'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import CardBorderTop from '@/shared/components/CardBorderTop'
import TableHeading from '@/shared/components/Table/TableHeading'
import { QueryParam } from '@/shared/types/params'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import { Brand, BrandData } from '@/features/Brands/types/brand-types'
import TableBody from '@/shared/components/Table/TableBody'
import DangerButton from '@/shared/components/Button/DangerButton'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import Pagination from '@/shared/components/Table/Pagination'
import CreateBrandModal from '@/features/Brands/components/CreateBrandModal'
import SearchBar from '@/shared/components/Table/SearchBar'
import EditBrandModal from '@/features/Brands/components/EditBrandModal'
import DeleteModal from '@/shared/components/Modal/DeleteModal'

type Props = {
  queryParams: QueryParam
  brands: BrandData
}

const Index: React.FC<Props> = ({ queryParams, brands }) => {
  const Thead = [
    { name: 'Brands', sort_field: 'name' },
    { name: 'Note', sort_field: 'description' },
    { name: 'Action', sort_field: '' },
  ]
  const url = 'brand.index'
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
  } = useGlobalModalSortControl<Brand>(queryParams, url, initialEditState)

  return (
    <MainLayout>
      <CreateBrandModal showModal={isCreateModal} handleShowModal={handleShowCreateModal} />
      <EditBrandModal showModal={isEditModal} handleShowModal={handleShowEditModal} brand={isEdit} />

      <DeleteModal
        url="brand.destroy"
        setDelete={setDelete}
        isDelete={isDelete}
        onCloseRoute="brand.index"
        success="Brand deleted successfully"
      />

      <ContentTitle>
        Brands <span className="text-xs text-gray-300">Manage your brands</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All your brands</CardBorderTop.Title>
          <SecondaryButton
            type="button"
            onClick={() => handleShowCreateModal()}
            className="gap-2 rounded-lg bg-cyan-500 px-5 py-1 font-medium">
            <FaPlus /> Add
          </SecondaryButton>
        </CardBorderTop.Header>
        <SearchBar queryParams={queryParams} url={url} />

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
            {brands.data.map((brand, index) => (
              <TableBody.Row key={index}>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {brand.name}
                </th>
                <td className="px-6 py-4">{brand.description} </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-2 text-xs">
                    <DangerButton onClick={() => setDelete(brand.id)}>Delete</DangerButton>
                    <PrimaryButton onClick={() => handleShowEditModal(brand)}>Edit</PrimaryButton>
                  </div>
                </td>
              </TableBody.Row>
            ))}
          </TableBody>
        </Table>
        <Pagination links={brands.links} />
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
