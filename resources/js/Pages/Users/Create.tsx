import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'

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
  password_confirmation: string
  roles: string
  status: string
}
type Props = {
  roles: Roles[]
  errors: Errors
}

const Create: React.FC<Props> = ({ roles, errors }) => {
  const [values, setValues] = useState({
    prefix: '',
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
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
      // Handle other TextInput types, such as checkbox
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
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <MainLayout>
      <ContentTitle>Add user</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Content>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <LabelRow>
                <SpanLabel>Prefix</SpanLabel>
                <TextInput type="text" name="prefix" className="w-full text-xs" placeholder="Mr/Mrs/Miss" onChange={handleChage} />
              </LabelRow>

              <LabelRow>
                <SpanLabel>First Name:*</SpanLabel>
                <TextInput type="text" name="first_name" className={`w-full text-xs ${errors.first_name ? ' border-red-500' : ''}`} placeholder="First Name" onChange={handleChage} />
                <span className="text-red-600">{errors.first_name ? errors.first_name : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Last Name:*</SpanLabel>
                <TextInput type="text" name="last_name" className={`w-full text-xs ${errors.last_name ? ' border-red-500' : ''}`} placeholder="Last Name" onChange={handleChage} />
                <span className="text-red-600">{errors.last_name ? errors.last_name : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Email:*</SpanLabel>
                <TextInput type="text" name="email" className={`w-full text-xs ${errors.email ? ' border-red-500' : ''}`} placeholder="Email" onChange={handleChage} />
                <span className="text-red-600">{errors.email ? errors.email : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Role:*</SpanLabel>
                <select
                  className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                  name="roles"
                  onChange={handleChage}
                  multiple>
                  {roles?.map((role, index) => (
                    <option key={index} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
                <span className="text-red-600">{errors.roles ? errors.roles : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Username:</SpanLabel>
                <TextInput type="text" name="username" className={`w-full text-xs ${errors.username ? ' border-red-500' : ''}`} placeholder="Username" onChange={handleChage} />
                <span className="text-red-600">{errors.username ? errors.username : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Password:</SpanLabel>
                <TextInput type="text" name="password" className={`w-full text-xs ${errors.password ? ' border-red-500' : ''}`} placeholder="Password" onChange={handleChage} />
                <span className="text-red-600">{errors.password ? errors.password : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Confirm Password:*:</SpanLabel>
                <TextInput
                  type="text"
                  name="password_confirmation"
                  className={`w-full text-xs  ${errors.password_confirmation ? ' border-red-500' : ''}`}
                  placeholder="Confirm Password"
                  onChange={handleChage}
                />
                <span className="text-red-600">{errors.password_confirmation ? errors.password_confirmation : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Sales Commision Percentage(%):</SpanLabel>
                <TextInput type="text" name="commision" className="w-full text-xs" placeholder="Sales Commission Percentage (%)" onChange={handleChage} />
              </LabelRow>

              <label className="inline-flex gap-3 items-center dark:text-white">
                Restricted Commision Percentage
                <TextInput className="rounded p-2" id="restricted_commision" type="checkbox" name="restricted_commision" onChange={handleChage} />
              </label>

              <label className="inline-flex gap-3 items-center dark:text-white">
                <TextInput className="rounded p-2" id="is_active" type="checkbox" name="status" onChange={handleChage} />
                Is active
              </label>
            </div>

            <div className="flex justify-end">
              <PrimaryButton type="submit">Save</PrimaryButton>
            </div>
          </form>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
