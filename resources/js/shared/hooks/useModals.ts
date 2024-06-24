import { useState, useCallback } from 'react'
import { router } from '@inertiajs/react'

interface PageManagementResult<T> {
  isDelete: number | null | string
  setDelete: React.Dispatch<React.SetStateAction<number | null | string>>
  isCreateModal: boolean
  handleShowCreateModal: () => void
  isEditModal: boolean
  handleShowEditModal: (data: T) => void
  editState: T
  setEditState: React.Dispatch<React.SetStateAction<T>>
}

const useModals = <T>(initialEditState?: T): PageManagementResult<T> => {
  const [isDelete, setDelete] = useState<number | null | string>(0)
  const [isCreateModal, showCreateModal] = useState<boolean>(false)
  const [isEditModal, showEditModal] = useState<boolean>(false)
  const [editState, setEditState] = useState<T>(initialEditState || ({} as T))

  const handleShowCreateModal = useCallback(() => {
    showCreateModal((prevState) => !prevState)
  }, [])

  const handleShowEditModal = useCallback((data: T) => {
    showEditModal((prevState) => !prevState)
    setEditState(data)
  }, [])

  return {
    isDelete,
    setDelete,
    isCreateModal,
    handleShowCreateModal,
    isEditModal,
    handleShowEditModal,
    editState,
    setEditState,
  }
}

export default useModals
