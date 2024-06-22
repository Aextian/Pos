import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaEdit, FaSearch } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import { Category, CategoryData } from '@/features/Categories/types/categories-types'
import { QueryParam } from '@/shared/types/params'
import TableHeading from '@/shared/components/Table/TableHeading'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import TableBody from '@/shared/components/Table/TableBody'
import DangerButton from '@/shared/components/Button/DangerButton'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import Status from '@/features/Categories/components/Status'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import ManageDiscount from '@/features/Categories/components/ManageDiscount'
import Pagination from '@/shared/components/Table/Pagination'
import SearchBar from '@/shared/components/Table/SearchBar'

type Props = {
  categories: CategoryData
  queryParams: QueryParam
}

const Index: React.FC<Props> = ({ categories, queryParams }) => {
  const Thead = [
    { name: 'Category', sort_field: 'name' },
    { name: 'Discount', sort_field: '' },
    { name: 'Status', sort_field: 'cat_status' },
    { name: 'Action', sort_field: '' },
  ]

  const url = 'discount-categories.index'

  const { isEditModal, handleShowEditModal, isEdit, sortChanged } = useGlobalModalSortControl<Category>(
    queryParams,
    url,
  )

  return (
    <MainLayout>
      <ManageDiscount
        categories={categories.data}
        showModal={isEditModal}
        category={isEdit}
        handleShowModal={handleShowEditModal}
      />

      <ContentTitle>
        Categories <span className="text-xs text-gray-300">Manage categories discount</span>
      </ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Manage your categories</CardBorderTop.Title>
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
              {categories.data.map((category, index) => (
                <TableBody.Row key={index}>
                  <td className="px-6 py-4">{category.name}</td>
                  <td className="px-6 py-4">{category.cat_discount} </td>
                  <td className="px-6 py-4">
                    <Status status={category.cat_status} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <PrimaryButton
                      className="items-center gap-3"
                      onClick={() => handleShowEditModal(category)}>
                      <FaEdit /> Manage Discounts
                    </PrimaryButton>
                  </td>
                </TableBody.Row>
              ))}
            </TableBody>
          </Table>
        </CardBorderTop.Content>

        <Pagination links={categories.links} />
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
