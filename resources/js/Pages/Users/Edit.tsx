import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import CardBorderTop from '@/shared/components/CardBorderTop'
import Select from 'react-dropdown-select'

interface Contact {
  id: number
  name: string
  contact_id: string
}
interface User {
  id: number
  username: string
  prefix: string
  first_name: string
  last_name: string
  email: string
  cmmsn_percent: string
  selected_contacts: boolean
  status: string
  contacts: {
    id: number
    name: string
    contact_id: string
  }[]

  roles: {
    id: number
    name: string
  }[]
}
interface Roles {
  id: number
  name: string
}
interface Errors {
  first_name: string
  last_name: string
  cmmsn_percent: string
  email: string
  username: string
  password: string
  password_confirmation: string
  roles: string
  status: string
}

type Props = {
  user: User
  errors: Errors
  roles: Roles[]
  contacts: Contact[]
}

const Edit: React.FC<Props> = ({ user, roles, errors, contacts }) => {
  const [showContacts, setContacts] = useState<boolean>(user.selected_contacts)

  const [isActive, setActive] = useState<boolean>(user.status === 'active' ? true : false)

  const [values, setValues] = useState({
    username: user.username,
    prefix: user.prefix,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    cmmsn_percent: user.cmmsn_percent,
    selected_contacts: user.selected_contacts,
    contacts: user.contacts,
    status: user.status,
    roles: user.roles.map((role) => role.name) || [],
  })

  console.log('values:', values, 'status:', user.status)

  const [processing, setProgress] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('users.update', user.id)
      const response = router.put(url, values, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => setProgress(true),
        onFinish: () => setProgress(false),
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const target = e.target as HTMLInputElement
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

      if (target.checked && target.name === 'show_contacts') {
        console.log('show contacts')
      }

      if (type === 'checkbox' && e.target.name === 'show_contacts') {
        setContacts((prevValue) => !prevValue)
        setValues((prevValues) => ({
          ...prevValues,
          contacts: (e.target as HTMLInputElement).checked ? prevValues.contacts : [],
        }))
      }

      if (type === 'checkbox' && e.target.name === 'status') {
        setActive((prevValue) => !prevValue)
        setValues((prevValues) => ({
          ...prevValues,
          status: (e.target as HTMLInputElement).checked ? 'active' : 'inactive',
        }))
      }
    }
  }

  return (
    <MainLayout>
      <ContentTitle>Edit user</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Content>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <LabelRow>
                <SpanLabel>Prefix</SpanLabel>
                <TextInput
                  type="text"
                  name="prefix"
                  className="w-full text-xs"
                  placeholder="Mr/Mrs/Miss"
                  onChange={handleChange}
                  value={values.prefix || ''}
                />
              </LabelRow>

              <LabelRow>
                <SpanLabel>First Name:*</SpanLabel>
                <TextInput
                  type="text"
                  name="first_name"
                  className="w-full text-xs"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={values.first_name}
                />
                <span className="text-red-600">{errors.first_name ? errors.first_name : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Last Name:</SpanLabel>
                <TextInput
                  type="text"
                  name="last_name"
                  className="w-full text-xs"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={values.last_name}
                />
                <span className="text-red-600">{errors.last_name ? errors.last_name : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Email:*</SpanLabel>
                <TextInput
                  type="text"
                  name="email"
                  className="w-full text-xs"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                <span className="text-red-600">{errors.email ? errors.email : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Role:*</SpanLabel>
                <select
                  className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                  name="roles"
                  onChange={handleChange}
                  value={values.roles}
                  multiple>
                  {roles.map((role, index) => (
                    <option key={index} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
                <span className="text-red-600">{errors.roles ? errors.roles : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Username:</SpanLabel>
                <TextInput
                  type="text"
                  name="username"
                  className="w-full text-xs"
                  placeholder="Username"
                  onChange={handleChange}
                  value={values.username}
                />
                <span className="text-red-600">{errors.username ? errors.username : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Password:</SpanLabel>
                <TextInput
                  type="text"
                  name="password"
                  className="w-full text-xs"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.password ? errors.password : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Current Password:*:</SpanLabel>
                <TextInput
                  type="text"
                  name="current_password"
                  className="w-full text-xs"
                  placeholder="Current Password"
                  onChange={handleChange}
                />
                <span className="text-red-600">
                  {errors.password_confirmation ? errors.password_confirmation : ''}
                </span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Sales Commision Percentage(%):</SpanLabel>
                <TextInput
                  type="number"
                  step="0.01"
                  name="cmmsn_percent"
                  className="w-full text-xs"
                  placeholder="Sales Commission Percentage (%)"
                  onChange={handleChange}
                  value={values.cmmsn_percent}
                />
                <span className="text-red-600">{errors.cmmsn_percent ? errors.cmmsn_percent : ''}</span>
              </LabelRow>

              <label className="inline-flex gap-3 items-center dark:text-white">
                <TextInput
                  className="rounded p-2"
                  name="show_contacts"
                  type="checkbox"
                  onChange={handleChange}
                  checked={showContacts}
                />
                Restricted Commision Percentage
              </label>

              {showContacts ? (
                <LabelRow>
                  <SpanLabel>Select Contacts:</SpanLabel>
                  <Select
                    multi={true}
                    options={contacts}
                    labelField="name"
                    values={values.contacts}
                    valueField="id"
                    onChange={(selected) => setValues({ ...values, contacts: selected })}
                  />
                </LabelRow>
              ) : null}

              <label className="inline-flex gap-3 items-center dark:text-white">
                <TextInput
                  className="rounded p-2"
                  type="checkbox"
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                  checked={isActive}
                />
                Is active
              </label>
            </div>

            <div className="flex justify-end">
              <PrimaryButton type="submit" disabled={processing}>
                {processing ? <span className="animate-pulse">Saving...</span> : 'Save'}
              </PrimaryButton>
            </div>
          </form>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Edit
