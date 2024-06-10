import { useState, useCallback } from 'react'
import { router } from '@inertiajs/react'

interface SortParams {
  // Define your sort parameters type
  sort_field: string
  sort_direction: 'asc' | 'desc'
  search: string
}

interface PageManagementResult<T> {
  isDelete: number | null | string
  setDelete: React.Dispatch<React.SetStateAction<number | null | string>>
  isCreateModal: boolean
  handleShowCreateModal: () => void
  isEditModal: boolean
  handleShowEditModal: (data: T) => void
  isEdit: T
  setEdit: React.Dispatch<React.SetStateAction<T>>
  sortChanged: any // Adjust the type according to the return type of useSort
}

const useGlobalModalSortControl = <T>(
  queryParams: SortParams,
  url: string,
  initialEditState?: T,
): PageManagementResult<T> => {
  const [isDelete, setDelete] = useState<number | null | string>(0)
  const [isCreateModal, showCreateModal] = useState<boolean>(false)
  const [isEditModal, showEditModal] = useState<boolean>(false)
  const [isEdit, setEdit] = useState<T>(initialEditState || ({} as T))

  const handleShowCreateModal = useCallback(() => {
    showCreateModal((prevState) => !prevState)
  }, [])

  const handleShowEditModal = useCallback((data: T) => {
    showEditModal((prevState) => !prevState)
    setEdit(data)
  }, [])

  const sortChanged = useCallback(
    (name: string) => {
      const sortField = name
      const sortDirection =
        name === queryParams.sort_field ? (queryParams.sort_direction === 'asc' ? 'desc' : 'asc') : 'asc'

      router.get(
        route(url),
        {
          ...queryParams,
          sort_field: sortField,
          sort_direction: sortDirection,
        },
        {
          preserveState: true,
          preserveScroll: true,
        },
      )
    },

    [queryParams, url],
  )

  return {
    isDelete,
    setDelete,
    isCreateModal,
    handleShowCreateModal,
    isEditModal,
    handleShowEditModal,
    isEdit,
    setEdit,
    sortChanged,
  }
}

export default useGlobalModalSortControl
