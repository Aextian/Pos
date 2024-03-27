import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { PropsWithChildren, useState } from 'react'

interface Roles {
    id: number
    name: string
}

interface Errors {
    first_name: string
    last_name: string
    email: string
    username: string
    password: string
    confirm_password: string
    roles: string
    status: string
}
type Props = {
    roles: Roles[]
    errors: Errors
}

const Create: React.FC<Props> = ({ roles, errors }) => {
    console.log('eerrt', errors)
    const [values, setValues] = useState({
        prefix: '',
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        roles: [],
        commision: '',
        restricted_commision: '',
        status: '',
    })

    const handleChage = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        // Handle select element separately
        if (type === 'select-multiple') {
            const selectedOptions = Array.from((e.target as HTMLSelectElement).options)
                .filter((option) => option.selected)
                .map((option) => option.value)

            setValues((prevValues) => ({
                ...prevValues,
                [name]: selectedOptions,
            }))
        } else {
            // Handle other input types, such as checkbox
            setValues((prevValues) => ({
                ...prevValues,
                [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
            }))
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const url = route('users.store')
            const response = router.post(url, values)
            console.log(response)
        } catch (error) {
            console.error('Error:', error)
        }
    }
    return (
        <MainLayout>
            <div className="mb-5 px-5 md:px-2">
                <h1 className="text-lg">Add user</h1>
            </div>
            <div className=" flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor=""> Prefix</label>
                            <input type="text" name="prefix" className="mb-3 rounded-md p-1" placeholder="Mr/Mrs/Miss" onChange={handleChage} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor=""> First Name:*</label>
                            <input type="text" name="first_name" className={`mb-3 rounded-md p-1 ${errors.first_name ? ' border-red-500' : ''}`} placeholder="First Name" onChange={handleChage} />
                            <span className="text-red-600">{errors.first_name ? errors.first_name : ''}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor=""> Last Name:</label>

                            <input type="text" name="last_name" className={`mb-3 rounded-md p-1 ${errors.last_name ? ' border-red-500' : ''}`} placeholder="Last Name" onChange={handleChage} />
                            <span className="text-red-600">{errors.last_name ? errors.last_name : ''}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email:*</label>
                            <input type="text" name="email" className={`mb-3 rounded-md p-1 ${errors.email ? ' border-red-500' : ''}`} placeholder="Email" onChange={handleChage} />
                            <span className="text-red-600">{errors.email ? errors.email : ''}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Role:*</label>
                            <select className="p-1 rounded-md" name="roles" onChange={handleChage} multiple>
                                {roles?.map((role, index) => (
                                    <option key={index} value={role.name}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Username:</label>
                            <input type="text" name="username" className={`mb-3 rounded-md p-1 ${errors.username ? ' border-red-500' : ''}`} placeholder="Username" onChange={handleChage} />
                            <span className="text-red-600">{errors.username ? errors.username : ''}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Password:</label>
                            <input type="text" name="password" className={`mb-3 rounded-md p-1 ${errors.password ? ' border-red-500' : ''}`} placeholder="Password" onChange={handleChage} />
                            <span className="text-red-600">{errors.password ? errors.password : ''}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Confirm Password:*:</label>
                            <input
                                type="text"
                                name="confirm_password"
                                className={`mb-3 rounded-md p-1  ${errors.confirm_password ? ' border-red-500' : ''}`}
                                placeholder="Confirm Password"
                                onChange={handleChage}
                            />

                            <span className="text-red-600">{errors.confirm_password ? errors.confirm_password : ''}</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Sales Commision Percentage(%):</label>
                            <input type="text" name="commision" className="mb-3 rounded-md p-1" placeholder="Sales Commission Percentage (%)" onChange={handleChage} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="space-x-3">
                                <input className="rounded p-2" id="restricted_commision" type="checkbox" name="restricted_commision" onChange={handleChage} />
                                <label htmlFor="restricted_commision">Restricted Commision Percentage</label>
                            </div>
                            <div className="space-x-3">
                                <input className="rounded p-2" id="is_active" type="checkbox" name="status" onChange={handleChage} />
                                <label htmlFor="is_active">Is active</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <PrimaryButton type="submit">Save</PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    )
}

export default Create
