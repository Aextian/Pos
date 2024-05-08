import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { GiClawString } from 'react-icons/gi'
import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import Error from '@/Components/GlobalComponent/AlertMessage/Error'
import { error } from 'console'

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
        <CardBorderTop>
          {/* errors message */}
          {errors['name'] && <Error message={errors['name']} />}

          <CardHeader>
            <CardTitle>All roles</CardTitle>
          </CardHeader>
          <form onSubmit={(e) => handleSubmit(e)}>
            <LabelRow>
              <SpanLabel>Role Names</SpanLabel>
              <TextInput type="text" className=" text-xs w-full" onChange={(e) => handleChange(e)} value={values.name} name="name" placeholder="Role Name" />
            </LabelRow>

            <div className="flex flex-col justify-center gap-5 dark:text-white mt-3">
              {permissions.map((data, index) => (
                <div className="space-y-5" key={index}>
                  <div className="flex gap-2 items-center rounded-lg">
                    <label className="text-lg font-bold flex items-center">
                      <input className="mr-5 " name={`bulk-${index}`} type="checkbox" onChange={(e) => handleBulkChange(e, data.permissions)} />
                      {data['category']}
                    </label>
                  </div>

                  <div className="flex flex-col justify-center gap-5 ml-5">
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
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Create
