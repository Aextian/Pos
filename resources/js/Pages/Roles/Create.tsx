import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { GiClawString } from 'react-icons/gi'
import Modal from '@/Components/Modal'

interface Permission {
    id: number
    category: string
    name: number
    permissions: []
}
interface ErrorResponse {
    name: string
}
type Props = {
    permissions: Permission[]
    errors: ErrorResponse
    index: number
}

const Create: React.FC<Props> = ({ permissions, errors }) => {
    const [values, setValues] = useState({
        name: '',
        permissions: [] as number[],
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const url = route('roles.store')
            const response = router.post(url, values)
            console.log(response)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target

        setValues((prevValues) => {
            if (type === 'checkbox') {
                return {
                    ...prevValues,
                    permissions: checked
                        ? [...prevValues.permissions, parseInt(value)] // Add permission if checkbox is checked
                        : prevValues.permissions.filter((permissionId) => permissionId !== parseInt(value)), // Remove permission if checkbox is unchecked,
                }
            } else {
                return { ...prevValues, [name]: value }
            }
        })
    }

    const handleBulkChange = (e: React.ChangeEvent<HTMLInputElement>, permissions: Permission[]) => {
        const isChecked = e.target.checked

        permissions.forEach((permission, index) => {
            const checkbox = document.getElementById(`permission-${permission['id']}`) as HTMLInputElement
            if (checkbox) {
                checkbox.checked = isChecked
                const syntheticEvent = {
                    target: checkbox,
                } as React.ChangeEvent<HTMLInputElement>
                // console.log(checkbox)
                handleChange(syntheticEvent)
            }
        })
    }

    return (
        <>
            <MainLayout>
                <div className=" bg-slate-200 w-screen py-5 md:px-10">
                    <div className="mb-10 px-5 md:px-2"></div>

                    <div className="relative flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
                        <div className="">
                            <h1 className="text-lg font-medium">All roles</h1>
                        </div>

                        {errors['name'] && <span className="text-red-500 bg-red-200 rounded-lg p-2 text-md">{errors['name']}</span>}

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">Role Names</label>
                                <TextInput type="text" className="mb-3 w-full" onChange={(e) => handleChange(e)} value={values.name} name="name" placeholder="Role Name" />
                            </div>

                            <div className="flex flex-col justify-center gap-5">
                                {permissions.map((data, index) => (
                                    <div className="space-y-5" key={index}>
                                        <div className="flex gap-2 items-center rounded-lg">
                                            <label className="text-lg font-bold flex items-center">
                                                <input className="mr-5 " name={`bulk-${index}`} type="checkbox" onChange={(e) => handleBulkChange(e, data.permissions)} />
                                                {data['category']}
                                            </label>
                                        </div>

                                        <div className="flex flex-col justify-center gap-5">
                                            {data.permissions.map((permission, permissionindex) => (
                                                <label key={permissionindex}>
                                                    <TextInput
                                                        id={`permission-${permission['id']}`}
                                                        type="checkbox"
                                                        name="permission"
                                                        value={permission['id']}
                                                        onChange={(e) => handleChange(e)}
                                                        className="mr-5 p-2 "
                                                        placeholder="Role Name"
                                                    />
                                                    {permission['name']}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-content-end flex-col mt-5">
                                <button className="rounded-lg px-5 text-lg bg-cyan-600" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Create
