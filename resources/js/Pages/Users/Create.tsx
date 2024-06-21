import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import CardBorderTop from '@/shared/components/CardBorderTop'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { _readValueToProps } from 'chart.js/helpers'

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
  cmmsn_percent: string
}
interface Contact {
  id: number
  name: string
  contact_id: string
}
type Props = {
  roles: Roles[]
  errors: Errors
  contacts: Contact[]
}

const Create: React.FC<Props> = ({ roles, errors, contacts }) => {
  const [values, setValues] = useState({
    prefix: '',
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    roles: [],
    cmmsn_percent: 0 as number | null,
    restricted_commision: '',
    selected_contacts: '',
    contacts: [] as any,
    status: '',
  })
  const [processing, setProgress] = useState(false)
  const [showContacs, setContacts] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

      if (type === 'checkbox' && e.target.name === 'show_contacts') {
        setContacts((prevValue) => !prevValue)
        setValues((prevValues) => ({
          ...prevValues,
          contacts: (e.target as HTMLInputElement).checked ? prevValues.contacts : [],
        }))
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('users.store')
      const response = router.post(url, values, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => setProgress(true),
        onFinish: () => setProgress(false),
        onSuccess: () => {
          setValues({
            prefix: '',
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            password_confirmation: '',
            roles: [],
            cmmsn_percent: 0 as number | null,
            contacts: [],
            selected_contacts: '',
            restricted_commision: '',
            status: '',
          })
        },
      })
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
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              <LabelRow>
                <SpanLabel>Prefix</SpanLabel>
                <TextInput
                  type="text"
                  name="prefix"
                  className="w-full text-xs"
                  placeholder="Mr/Mrs/Miss"
                  onChange={handleChange}
                />
              </LabelRow>

              <LabelRow>
                <SpanLabel>First Name:*</SpanLabel>
                <TextInput
                  type="text"
                  name="first_name"
                  className={`w-full text-xs ${errors.first_name ? 'border-red-500' : ''}`}
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.first_name ? errors.first_name : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Last Name:*</SpanLabel>
                <TextInput
                  type="text"
                  name="last_name"
                  className={`w-full text-xs ${errors.last_name ? 'border-red-500' : ''}`}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.last_name ? errors.last_name : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Email:*</SpanLabel>
                <TextInput
                  type="text"
                  name="email"
                  className={`w-full text-xs ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.email ? errors.email : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Role:*</SpanLabel>
                <select
                  className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                  name="roles"
                  onChange={handleChange}
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
                <TextInput
                  type="text"
                  name="username"
                  className={`w-full text-xs ${errors.username ? 'border-red-500' : ''}`}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.username ? errors.username : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Password:</SpanLabel>
                <TextInput
                  type="text"
                  name="password"
                  className={`w-full text-xs ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.password ? errors.password : ''}</span>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Confirm Password:*:</SpanLabel>
                <TextInput
                  type="text"
                  name="password_confirmation"
                  className={`w-full text-xs ${errors.password_confirmation ? 'border-red-500' : ''}`}
                  placeholder="Confirm Password"
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
                  step={0.01}
                  name="cmmsn_percent"
                  className="w-full text-xs"
                  placeholder="Sales Commission Percentage (%)"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.cmmsn_percent ? errors.cmmsn_percent : ''}</span>
              </LabelRow>

              <label className="inline-flex items-center gap-3 dark:text-white">
                Restricted Commision Percentage
                <TextInput
                  className="rounded p-2"
                  type="checkbox"
                  name="show_contacts"
                  onChange={handleChange}
                  checked={showContacs}
                />
              </label>

              {showContacs && (
                <LabelRow>
                  <SpanLabel>Select Contacts:</SpanLabel>
                  <Select
                    isMulti
                    options={contacts}
                    defaultValue={values.contacts}
                    onChange={(selected) => setValues({ ...values, contacts: selected })}
                  />
                </LabelRow>
              )}

              <label className="inline-flex items-center gap-3 dark:text-white">
                <TextInput className="rounded p-2" type="checkbox" name="status" onChange={handleChange} />
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

export default Create
