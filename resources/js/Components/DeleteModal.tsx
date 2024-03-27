import React, { PropsWithChildren } from 'react'
import Modal from './Modal'
import { FaTrashAlt } from 'react-icons/fa'
import DangerButton from './DangerButton'
import { router } from '@inertiajs/react'

interface Props {
    isDelete?: number | null
    handleDelete: Function
    handleShowDelete: Function
    onCloseRoute: string
    children?: React.ReactNode
}

const DeleteModal: React.FC<Props> = ({ isDelete, handleDelete, handleShowDelete, onCloseRoute, children }) => {
    return (
        <>
            <Modal show={isDelete ? true : false} maxWidth="2xl" closeable={true} onClose={() => router.visit(route(onCloseRoute))}>
                <div>
                    <div className="flex justify-end px-5 py-1">
                        <button onClick={() => handleShowDelete(0)}>
                            <span className="text-red-500">x</span>
                        </button>
                    </div>
                    <div className=" flex flex-col gap-5 justify-center items-center px-10">{children}</div>
                    <div className="flex justify-between mx-10 px-2 pb-3">
                        <button className="bg-black text-white px-3 rounded-lg" onClick={() => handleShowDelete(0)}>
                            No, cancel
                        </button>
                        <DangerButton onClick={() => handleDelete(isDelete)}>Yes I'm sure</DangerButton>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DeleteModal
