import PrimaryButton from '@/Components/PrimaryButton'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'

interface Role {
  id: number
  name: string
}
interface User {
  id: number
  username: string
  prefix: string
  first_name: string
  last_name: string
  email: string
  commision: string
  restricted_commision: string
  status: boolean
  roles: Role[]
}

type Props = {
  user: User
}

const Edit: React.FC<Props> = ({ user }) => {
  const [values, setValues] = useState({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('users.update')
      const response = router.post(url, values)
      console.log(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }
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

  return (
    <MainLayout>
      <div className="px-5 md:px-2">
        <h1 className="text-lg">Edit user</h1>
      </div>
      <div className=" flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor=""> Prefix</label>
              <input type="text" name="prefix" className="mb-3 rounded-md p-1" placeholder="Mr/Mrs/Miss" onChange={handleChage} value={user.prefix} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor=""> First Name:*</label>

              <input type="text" name="first_name" className="mb-3 rounded-md p-1" placeholder="First Name" onChange={handleChage} value={user.first_name} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor=""> Last Name:</label>

              <input type="text" name="last_name" className="mb-3 rounded-md p-1" placeholder="Last Name" onChange={handleChage} value={user.last_name} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email:*</label>

              <input type="text" name="email" className="mb-3 rounded-md p-1" placeholder="Email" onChange={handleChage} value={user.email} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Role:*</label>
              <select className="p-1 rounded-md" name="roles" onChange={handleChage} multiple>
                {user.roles?.map((role, index) => (
                  <option key={index} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Username:</label>
              <input type="text" name="username" className="mb-3 rounded-md p-1" placeholder="Username" onChange={handleChage} value={user.username} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password:</label>
              <input type="text" name="password" className="mb-3 rounded-md p-1" placeholder="Password" onChange={handleChage} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Current Password:*:</label>
              <input type="text" name="current_password" className="mb-3 rounded-md p-1" placeholder="Current Password" onChange={handleChage} />
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
                <input className="rounded p-2" id="is_active" type="checkbox" name="status" onChange={handleChage} defaultChecked={user.status} />
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

export default Edit
