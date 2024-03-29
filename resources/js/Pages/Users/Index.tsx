import DangerButton from '@/Components/DangerButton'
import PrimaryButton from '@/Components/PrimaryButton'
import UsersData from '@/Data/UsersData'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { PageProps } from '@/types'
import ContentTitle from '@/Components/ContentTitle'
import DeleteModal from '@/Components/DeleteModal'
import { FaTrashAlt } from 'react-icons/fa'

interface User {
    id: number
    username: string
    first_name: string
    last_name: string
    email: string
    roles?: []
}

type Props = {
    users: User[]
    successMessage: string
}

const Index: React.FC<Props> = ({ users, successMessage }) => {
    const [isDelete, setDelete] = useState<number | null>(0)

    const handleDelete = (id: number) => {
        router.delete(route('users.destroy', id))
        setDelete(null)
    }

    const handleShowDelete = (id: number) => {
        setDelete(id)
    }

    return (
        <MainLayout>
            <DeleteModal isDelete={isDelete} handleDelete={handleDelete} handleShowDelete={handleShowDelete} onCloseRoute="users.index">
                <FaTrashAlt size={35} />
                <h2>Are you sure you want to delete this?</h2>
            </DeleteModal>

            <ContentTitle>Manage users</ContentTitle>

            <div className="flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
                <span>{successMessage ? successMessage : ''}</span>

                <div className="flex flex-row justify-between items-center gap-2">
                    <h1 className="text-lg font-medium">All users</h1>
                    <Link href={route('users.create')} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
                        Add
                    </Link>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-[10px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Name
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Role
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Email
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        <span className="sr-only"></span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.username}
                                        </th>
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4">
                                            {user.roles?.map((role: { name: string }, indexRole: number) => (
                                                <label htmlFor="" key={indexRole}>
                                                    {role.name}
                                                </label>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex gap-2 text-xs">
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]" onClick={() => handleShowDelete(user.id)}>
                                                    {' '}
                                                    Delete
                                                </button>
                                                <Link href={route('users.edit', user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                                                    Edit
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center">pagination</div>
            </div>
        </MainLayout>
    )
}

export default Index
