import React, { useState, memo } from 'react'
import Modal from './Modal'
import { FaTrashAlt } from 'react-icons/fa'
import DangerButton from '../Button/DangerButton'
import { router } from '@inertiajs/react'
import { FaX } from 'react-icons/fa6'
import PrimaryButton from '../Button/PrimaryButton'
import { useForm } from '@inertiajs/react'
import { toast } from 'react-toastify'

interface Props {
  isDelete?: number | null | string
  onCloseRoute: string
  children?: React.ReactNode
  url: string
  setDelete: Function
  message?: string
  success?: string
}

const DeleteModal: React.FC<Props> = ({ isDelete, onCloseRoute, url, setDelete, message, success }) => {
  const { delete: destroy, processing } = useForm()
  const handleDelete = () => {
    destroy(route(url, { id: isDelete }), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setDelete(0)
        toast.success(success)
      },
    })
  }

  return (
    <>
      <Modal
        show={isDelete ? true : false}
        maxWidth="sm"
        closeable={true}
        onClose={() => router.visit(route(onCloseRoute))}>
        <div className="p-3 space-y-5 dark:bg-gray-700">
          <div className="flex justify-end px-5 py-1">
            <button onClick={() => setDelete(0)}>
              <span className="dark:text-white hover:text-red-500">
                <FaX />
              </span>
            </button>
          </div>
          <div className=" flex flex-col gap-5 justify-center items-center px-10 dark:text-slate-200">
            <FaTrashAlt size={35} />
            <p className="text-sm">{message ? message : 'Are you sure you want to delete this?'}</p>
          </div>
          <div className="flex justify-between px-2 pb-3">
            <PrimaryButton
              className="bg-black text-white px-3 rounded-lg"
              onClick={() => setDelete(0)}
              disabled={processing}>
              No, cancel
            </PrimaryButton>
            <DangerButton onClick={handleDelete} disabled={processing}>
              Yes I'm sure
            </DangerButton>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default memo(DeleteModal)
