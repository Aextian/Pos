import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
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
      // Handle other TextInput types, such as checkbox
      setValues((prevValues) => ({
        ...prevValues,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }))
    }
  }

  return (
    <MainLayout>
      <ContentTitle>Edit user</ContentTitle>
      <CardBorderTop>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <LabelRow>
              <SpanLabel>Prefix</SpanLabel>
              <TextInput type="text" name="prefix" className="w-full text-xs" placeholder="Mr/Mrs/Miss" onChange={handleChage} value={user.prefix} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>First Name:*</SpanLabel>
              <TextInput type="text" name="first_name" className="w-full text-xs" placeholder="First Name" onChange={handleChage} value={user.first_name} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Last Name:</SpanLabel>
              <TextInput type="text" name="last_name" className="w-full text-xs" placeholder="Last Name" onChange={handleChage} value={user.last_name} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Email:*</SpanLabel>
              <TextInput type="text" name="email" className="w-full text-xs" placeholder="Email" onChange={handleChage} value={user.email} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Role:*</SpanLabel>
              <select
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                name="roles"
                onChange={handleChage}
                multiple>
                {user.roles?.map((role, index) => (
                  <option key={index} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
            </LabelRow>

            <LabelRow>
              <SpanLabel>Username:</SpanLabel>
              <TextInput type="text" name="username" className="w-full text-xs" placeholder="Username" onChange={handleChage} value={user.username} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Password:</SpanLabel>
              <TextInput type="text" name="password" className="w-full text-xs" placeholder="Password" onChange={handleChage} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Current Password:*:</SpanLabel>
              <TextInput type="text" name="current_password" className="w-full text-xs" placeholder="Current Password" onChange={handleChage} />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Sales Commision Percentage(%):</SpanLabel>
              <TextInput type="text" name="commision" className="w-full text-xs" placeholder="Sales Commission Percentage (%)" onChange={handleChage} />
            </LabelRow>

            <label className="inline-flex gap-3 items-center dark:text-white">
              <TextInput className="rounded p-2" id="restricted_commision" type="checkbox" name="restricted_commision" onChange={handleChage} />
              Restricted Commision Percentage
            </label>

            <label className="inline-flex gap-3 items-center dark:text-white">
              <TextInput className="rounded p-2" id="is_active" type="checkbox" name="status" onChange={handleChage} defaultChecked={user.status} />
              Is active{' '}
            </label>
          </div>
          <div className="flex justify-end">
            <PrimaryButton type="submit">Save</PrimaryButton>
          </div>
        </form>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Edit
