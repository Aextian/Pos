import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import { router, useForm } from '@inertiajs/react'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import Error from '@/shared/components/Alert/Error'
import { error } from 'console'
import CardBorderTop from '@/shared/components/CardBorderTop'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'

interface Permission {
  id: number
  category: string
  name: number
  permissions: []
}

type Props = {
  permissions: Permission[]
  index: number
}

const Create: React.FC<Props> = ({ permissions }) => {
  const { setData, post, processing, errors } = useForm({
    name: '',
    permissions: [] as number[],
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('roles.store')
    try {
      post(url, {
        preserveState: true,
        preserveScroll: true,
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target

    setData((prevValues) => {
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
          <CardBorderTop.Header>
            <CardBorderTop.Title>All roles</CardBorderTop.Title>
          </CardBorderTop.Header>
          <CardBorderTop.Content>
            <form onSubmit={(e) => handleSubmit(e)}>
              <LabelRow>
                <SpanLabel>Role Names</SpanLabel>
                <TextInput
                  type="text"
                  className=" text-xs w-full"
                  onChange={(e) => handleChange(e)}
                  name="name"
                  placeholder="Role Name"
                />
              </LabelRow>

              <div className="flex flex-col justify-center gap-5 dark:text-white mt-3">
                {permissions.map((data, index) => (
                  <div className="space-y-5" key={index}>
                    <div className="flex gap-2 items-center rounded-lg">
                      <label className="text-lg font-bold flex items-center">
                        <input
                          className="mr-5 "
                          name={`bulk-${index}`}
                          type="checkbox"
                          onChange={(e) => handleBulkChange(e, data.permissions)}
                        />
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

              <div className="mt-5 flex justify-end">
                <PrimaryButton type="submit" disabled={processing}>
                  {processing ? <span className="animate-pulse">Submiting...</span> : 'Submit'}
                </PrimaryButton>
              </div>
            </form>
          </CardBorderTop.Content>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Create
