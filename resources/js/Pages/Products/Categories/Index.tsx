import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import { FaPlus } from 'react-icons/fa'
import CardBorderTop from '@/shared/components/CardBorderTop'
import CreateCategoryModal from '@/features/Categories/Create'
import SearchBar from '@/shared/components/Table/SearchBar'
import TableHeading from '@/shared/components/Table/TableHeading'
import DeleteModal from '@/shared/components/Modal/DeleteModal'
import DangerButton from '@/shared/components/Button/DangerButton'
import EditCategoryModal from '@/features/Categories/Edit'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import Pagination from '@/shared/components/Table/Pagination'
import useGlobalModalSortControl from '@/shared/hooks/useGlobalModalSortControl'
import TableBody from '@/shared/components/Table/TableBody'

interface Category {
  id: number
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
  queryParams: {
    sort_field: string
    sort_direction: 'asc' | 'desc'
    search: string
  }
}

const Index: React.FC<Props> = ({ categories, queryParams }) => {
  // table Head
  const Thead = [
    { name: 'Category', sort_field: 'name' },
    { name: 'Category Code', sort_field: 'short_code' },
    { name: 'Action', sort_field: '' },
  ]

  // function for sorting
  const url = 'categories.index'

  const initialEditState = {
    id: null as number | null,
    name: '',
    short_code: '',
    parent_id: '',
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
    <MainLayout>
      <CreateCategoryModal
        showModal={isCreateModal}
        handleShowModal={handleShowCreateModal}
        categories={categories.data}
      />

      <EditCategoryModal
        categories={categories.data}
        showModal={isEditModal}
        category={isEdit}
        handleShowModal={handleShowEditModal}
      />

      <DeleteModal
        url="categories.destroy"
        setDelete={setDelete}
        isDelete={isDelete}
        onCloseRoute="categories.index"
        message="This category along with all sub-categories under it will be deleted."
        success="Category deleted successfully"
      />

      <ContentTitle>
        Categories <span className="text-xs text-gray-300">Manage your categories</span>
      </ContentTitle>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Manage your categories</CardBorderTop.Title>
          <SecondaryButton
            type="button"
            onClick={handleShowCreateModal}
            className="gap-2 rounded-lg bg-cyan-500 px-5 py-1 font-medium"
          >
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
                    name={item.sort_field}
                  >
                    {item.name}
                  </TableHeading>
                ))}
              </tr>
            </TableHead>
            <TableBody>
              {categories.data.map((category, index) => (
                <TableBody.Row key={index}>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {category.name}
                  </th>
                  <td className="px-6 py-4">{category.short_code} </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 text-xs">
                      <DangerButton onClick={() => setDelete(category.id)}>Delete</DangerButton>
                      <PrimaryButton onClick={() => handleShowEditModal(category)}>Edit</PrimaryButton>
                    </div>
                  </td>
                </TableBody.Row>
              ))}
            </TableBody>
          </Table>
          <Pagination links={categories.links} />
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Index
