import React, { PropsWithChildren } from 'react'
import Modal from './Modal'
import { FaTrashAlt } from 'react-icons/fa'
import DangerButton from './DangerButton'
import { router } from '@inertiajs/react'
import { FaX } from 'react-icons/fa6'
import PrimaryButton from './PrimaryButton'

interface Props {
  isDelete?: number | null
  handleDelete: Function
  handleShowDelete: Function
  onCloseRoute: string
  children?: React.ReactNode
}

const DeleteModal: React.FC<Props> = ({ isDelete, handleDelete, handleShowDelete, onCloseRoute }) => {
  return (
    <>
      <Modal show={isDelete ? true : false} maxWidth="sm" closeable={true} onClose={() => router.visit(route(onCloseRoute))}>
        <div className="p-3 space-y-3 ">
          <div className="flex justify-end px-5 py-1">
            <button onClick={() => handleShowDelete(0)}>
              <span className="text-red-500">
                <FaX />
              </span>
            </button>
          </div>
          <div className=" flex flex-col gap-5 justify-center items-center px-10">
            <FaTrashAlt size={35} />
            <p className="text-sm">Are you sure you want to delete this?</p>
          </div>
          <div className="flex justify-between px-2 pb-3">
            <PrimaryButton className="bg-black text-white px-3 rounded-lg" onClick={() => handleShowDelete(0)}>
              No, cancel
            </PrimaryButton>
            <DangerButton onClick={() => handleDelete(isDelete)}>Yes I'm sure</DangerButton>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DeleteModal
