import CardBorderTop from '@/Components/CardBorderTop'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import Error from '@/Components/Shared/ui/Alert/Error'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import TextInput from '@/Components/Shared/ui/TextInput'
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

type Props = {
  permissions: Permission[]
  role: Role
  rolePermissions: number[]
  errors: Error
}

const Edit: React.FC<Props> = ({ permissions, role, rolePermissions, errors }) => {
  const [values, setValues] = useState({
    name: '',
    permissions: [] as number[], // Changed from permission to permissions and defined it as an array of numbers
  })

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
      <ContentTitle>Add Role</ContentTitle>
      <CardBorderTop>
        <CardTitle>All roles</CardTitle>
        {errors['name'] && <Error message={errors['name']} />}

        <form onSubmit={(e) => handleSubmit(e)}>
          <LabelRow>
            <SpanLabel>Role Names</SpanLabel>
            <TextInput type="text" className="w-full text-xs" onChange={(e) => handleChange(e)} value={values.name} name="name" placeholder="Role Name" />
          </LabelRow>
          <div className="flex flex-col justify-center gap-5 dark:text-white mt-3">
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

          <div className="flex justify-content-end flex-col mt-5">
            <button className="rounded-lg px-5 text-lg bg-cyan-600" type="submit">
              Submit
            </button>
          </div>
        </form>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Edit
