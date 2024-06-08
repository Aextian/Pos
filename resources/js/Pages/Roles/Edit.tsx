import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import Error from '@/Components/Shared/ui/Alert/Error'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'

interface Permission {
  id: number
  name: number
}
interface Role {
  id: number
  name: string
  permission: Permission
}

type Props = {
  permissions: Permission[]
  role: Role

  rolePermissions: number[]
}

const Edit: React.FC<Props> = ({ permissions, role, rolePermissions }) => {
  const { setData, data, processing, errors, put } = useForm({
    name: '',
    permissions: [] as number[],
  })

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      name: role.name,
      permissions: rolePermissions,
    }))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target

    if (name === 'permission') {
      setData((prevValues) => {
        if (checked) {
          return {
            ...prevValues,
            permissions: [...prevValues.permissions, parseInt(value)],
          }
        } else {
          return {
            ...prevValues,
            permissions: prevValues.permissions.filter((permissionId) => permissionId !== parseInt(value)),
          }
        }
      })
    } else {
      // For other inputs, update the state normally
      setData((prevValues) => ({
        ...prevValues,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route(`roles.update`, role.id)
      const response = put(url, {
        preserveScroll: true,
        preserveState: true,
      })
      console.log(url)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <MainLayout>
      <ContentTitle>Add Role</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>All roles</CardBorderTop.Title>
        </CardBorderTop.Header>
        {errors['name'] && <Error message={errors['name']} />}
        <CardBorderTop.Content>
          <form className="my-5" onSubmit={(e) => handleSubmit(e)}>
            <LabelRow>
              <SpanLabel>Role Names</SpanLabel>
              <TextInput
                type="text"
                className="w-full text-xs"
                onChange={(e) => handleChange(e)}
                value={data.name}
                name="name"
                placeholder="Role Name"
              />
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

            <div className="flex justify-end  mt-5">
              <PrimaryButton className="md:px-10 " type="submit" disabled={processing}>
                {processing ? <span className="animate-pulse">Updating...</span> : 'Update'}
              </PrimaryButton>
            </div>
          </form>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Edit
