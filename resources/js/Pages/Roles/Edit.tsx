import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

interface Permission {
    id: number
    name: number
}
interface Role {
    id: number
    name: string
    permission: Permission
}

interface Error {
    name: string
}

type props = {
    permissions: Permission[]
    role: Role
    rolePermissions: number[]
    errors: Error
}

const Edit: React.FC<props> = ({ permissions, role, rolePermissions, errors }) => {
    const [values, setValues] = useState({
        name: '',
        permissions: [] as number[], // Changed from permission to permissions and defined it as an array of numbers
    })
    // console.log(errors)
    useEffect(() => {
        setValues((prevValues) => ({
            ...prevValues,
            name: role.name,
            permissions: rolePermissions,
        }))
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target

        if (name === 'permission') {
            setValues((prevValues) => {
                if (checked) {
                    return {
                        ...prevValues,
                        permissions: [...prevValues.permissions, parseInt(value)],
                    }
                } else {
                    console.log('not checked')

                    return {
                        ...prevValues,
                        permissions: prevValues.permissions.filter((permissionId) => permissionId !== parseInt(value)),
                    }
                }
            })
        } else {
            // For other inputs, update the state normally
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }))
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const url = route(`roles.update`, role.id)
            const response = router.put(url, values)
            console.log(url)
        } catch (error) {
            console.error('Error:', error)
        }
    }
    return (
        <MainLayout>
            <div className=" bg-slate-200 w-screen py-5 md:px-10">
                <div className="mb-10 px-5 md:px-2">
                    <h1 className="text-lg">Add Role</h1>
                </div>

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
                                <label key={index}>
                                    <TextInput
                                        type="checkbox"
                                        defaultChecked={rolePermissions.includes(data.id)}
                                        name="permission"
                                        value={data.id}
                                        onChange={(e) => handleChange(e)}
                                        className="mr-5 p-2 "
                                        placeholder="Role Name"
                                    />
                                    {data.name}
                                </label>
                            ))}
                        </div>
                        <button className="rounded px-5 bg-cyan-600" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default Edit
