import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useCallback, useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import CreateCategoryModal from '@/Components/Categories/Create'
import Success from '@/Components/Shared/ui/Alert/Success'
import SearchBar from '@/Components/Shared/ui/Table/SearchBar'
import useSort from '@/Hooks/useSort'
import TableHeading from '@/Components/Shared/ui/Table/TableHeading'
import DeleteModal from '@/Components/Shared/ui/Modal/DeleteModal'
import DangerButton from '@/Components/Shared/ui/Button/DangerButton'
import EditCategoryModal from '@/Components/Categories/Edit'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import Pagination from '@/Components/Shared/ui/Table/Pagination'

interface Category {
  id: any
  name: string
  short_code: string
  parent_id: string
}

type Props = {
  categories: {
    data: Category[]
    links: []
    sort_field: string
    sort_direction: string
  }
  successMessage: string
  queryParams: {
    sort_field: string
    sort_direction: 'asc' | 'desc'
    search: string
  }
}

const Index: React.FC<Props> = ({ successMessage, categories, queryParams }) => {
  const [isCreateModal, showCreateModal] = useState<boolean>(false)

  const [isEditModal, showEdiModal] = useState<boolean>(false)

  const [isEdit, setEdit] = useState<Category>({
    id: '',
    name: '',
    short_code: '',
    parent_id: '',
  })

  const [isDelete, setDelete] = useState<number | null>(0)

  const handleCreateModal = useCallback(() => {
    showCreateModal((prevState) => !isCreateModal)
  }, [isCreateModal])

  const handleEditModal = useCallback(
    (data: Category) => {
      showEdiModal((prevState) => !isEditModal)
      setEdit(data)
    },
    [isEditModal],
  )

  // table Head
  const Thead = [
    { name: 'Category', sort_field: 'name' },
    {
      name: 'Category Code',
      sort_field: 'short_code',
    },
    { name: 'Action', sort_field: '' },
  ]
  // function for sorting
  const url = 'categories.index'

  const sortChanged = useSort(queryParams, url)

  return (
    <MainLayout>
      {/* modal */}
      <CreateCategoryModal
        showModal={isCreateModal}
        handleShowModal={handleCreateModal}
        data={categories.data}
      />

      <EditCategoryModal
        categories={categories.data}
        showModal={isEditModal}
        category={isEdit}
        handleShowModal={handleEditModal}
      />

      <DeleteModal
        url="categories.destroy"
        setDelete={setDelete}
        isDelete={isDelete}
        onCloseRoute="categories.index"
        message="This category along with all sub-categories under it will be deleted."
      />

      <Success message={successMessage} />

      <ContentTitle>
        Categories <span className="text-xs text-gray-300">Manage your categories</span>
      </ContentTitle>

      <CardBorderTop>
        {/*success message */}

        <CardBorderTop.Header>
          <CardBorderTop.Title>Manage your categories</CardBorderTop.Title>
          <SecondaryButton
            type="button"
            onClick={handleCreateModal}
            className="rounded-lg px-5 py-1 bg-cyan-500  font-medium gap-2">
            <FaPlus /> Add
          </SecondaryButton>
        </CardBorderTop.Header>

        <SearchBar queryParams={queryParams} url={url} />

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
            <tbody>
              {categories.data.map((category, index) => (
                <tr
                  className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600"
                  key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {category.name}
                  </th>
                  <td className="px-6 py-4">{category.short_code} </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 text-xs">
                      <DangerButton onClick={() => setDelete(category.id)}>Delete</DangerButton>
                      <PrimaryButton onClick={() => handleEditModal(category)}>Edit</PrimaryButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination links={categories.links} />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
