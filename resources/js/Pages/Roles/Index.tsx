import CardBorderTop from '@/Components/CardBorderTop'
import DeleteModal from '@/Components/DeleteModal'
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
    const [isDelete, setDelete] = useState<number | null>(0)

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
                <DeleteModal isDelete={isDelete} handleDelete={handleDelete} handleShowDelete={handleShowDelete} onCloseRoute="roles.index">
                    <FaTrashAlt size={35} />
                    <h2>Are you sure you want to delete this?</h2>
                </DeleteModal>

                <div className="mb-10 px-5 md:px-2">
                    <h1 className="text-lg">Users Manage users</h1>
                </div>

                <CardBorderTop>
                    {/* success error message */}
                    <span>{successMessage ? successMessage : ''}</span>

                    <div className="flex flex-row justify-between items-center gap-2">
                        <h1 className="text-lg font-medium">All roles</h1>
                        <Link href={route('roles.create')} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
                            Add
                        </Link>
                    </div>

                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
                </CardBorderTop>
            </MainLayout>
        </>
    )
}

export default Index
