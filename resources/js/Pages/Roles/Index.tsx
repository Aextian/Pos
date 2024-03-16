import DangerButton from '@/Components/DangerButton'
import Modal from '@/Components/Modal'
import RolesData from '@/Data/RolesData'
import Roles from '@/Data/RolesData'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

interface Role {
    id: number
    name: string
}

type Props = {
    roles: Role[]
    successMessage: string
}

const Index: React.FC<Props> = ({ roles, successMessage }) => {
    const [isDelete, setDelete] = useState<number | null>(null)

    const handleDelete = (id: number) => {
        router.delete(route('roles.destroy', id))
        setDelete(null)
    }

    const handleShowDelete = (id: number) => {
        setDelete(id)
    }

    return (
        <>
            <MainLayout>
                {isDelete && (
                    <Modal show={isDelete ? true : false} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('roles.index'))}>
                        <div className="flex justify-end px-5 py-1">
                            <button onClick={() => handleShowDelete(0)}>
                                <span className="text-red-500">x</span>
                            </button>
                        </div>
                        <div className=" flex flex-col gap-5 justify-center items-center px-10">
                            <FaTrashAlt size={35} />
                            <h2>Are you sure you want to delete this?</h2>
                        </div>
                        <div className="flex justify-between mx-10 px-2 pb-3">
                            <button className="bg-black text-white px-3 rounded-lg" onClick={() => handleShowDelete(0)}>
                                No, cancel
                            </button>
                            <DangerButton onClick={() => handleDelete(isDelete)}>Yes I'm sure</DangerButton>
                        </div>
                    </Modal>
                )}

                <div className=" h-screen bg-slate-200 w-screen py-5 md:px-10">
                    <div className="mb-10 px-5 md:px-2">
                        <h1 className="text-lg">Users Manage users</h1>
                    </div>

                    <div className="relative flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
                        {/* success error message */}
                        <span>{successMessage ? successMessage : ''}</span>

                        <div className="flex flex-row justify-between items-center gap-2">
                            <h1 className="text-lg font-medium">All roles</h1>
                            <Link href={route('roles.create')} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
                                Add
                            </Link>
                        </div>

                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-[10px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                Role
                                                <a href="#">
                                                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            <div className="flex items-center">
                                                <span className="sr-only"></span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.map((role, index) => (
                                        <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {role.name}
                                            </th>

                                            <td className="px-6 py-4 text-right">
                                                <div className="flex gap-2 text-xs">
                                                    <Link href={route('roles.edit', role.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                                                        Edit
                                                    </Link>

                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]" onClick={() => handleShowDelete(role.id)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center items-center">pagination</div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Index
