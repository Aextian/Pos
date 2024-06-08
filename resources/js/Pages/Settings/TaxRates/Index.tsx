import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import NoDataAvailable from '@/Components/Shared/ui/Table/NoDataAvailable'
import Table from '@/Components/Shared/ui/Table/Table'
import TableHead from '@/Components/Shared/ui/Table/TableHead'
import Modal from '@/Components/Shared/ui/Modal/Modal'
import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Index = () => {
  const [TaxRate, setTaxRate] = useState(false)

  const [TaxGroup, setTaxGroup] = useState(false)

  return (
    <>
      <MainLayout>
        <Modal show={TaxRate} onClose={() => {}} maxWidth="2xl" closeable>
          <div className="grid gap-3 p-3 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between">
              <h1 className="font-bold dark:text-white">Add Tax Rate</h1>
              <button onClick={() => setTaxRate(false)}>
                <FaX className="dark:text-white" />
              </button>
            </div>
            <hr />
            <div>
              <label>
                <SpanLabel>Name:*</SpanLabel>
                <TextInput className="text-xs p-2 w-full" placeholder="Name" />
              </label>
              <label>
                <SpanLabel> Tax Rate %:*</SpanLabel>
                <TextInput className="text-xs p-2 w-full" placeholder="Sub taxes" />
              </label>
            </div>
            <div className="flex justify-end gap-3">
              <SecondaryButton onClick={() => setTaxRate(false)}>Cancel</SecondaryButton>
              <PrimaryButton>Save</PrimaryButton>
            </div>
          </div>
        </Modal>

        <Modal show={TaxGroup} onClose={() => {}} maxWidth="2xl" closeable>
          <div className="grid gap-3 p-3 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between">
              <h1 className="font-bold dark:text-white">Add Tax Group</h1>
              <button onClick={() => setTaxGroup(false)}>
                {' '}
                <FaX className="dark:text-white" />
              </button>
            </div>
            <hr />
            <div>
              <label>
                <SpanLabel>Name:*</SpanLabel>
                <TextInput className="text-xs p-2 w-full" placeholder="Name" />
              </label>
              <label>
                <SpanLabel> Sub taxes:*</SpanLabel>
                <TextInput className="text-xs p-2 w-full" placeholder="Sub taxes" />
              </label>
            </div>
            <div className="flex justify-end gap-3">
              <SecondaryButton onClick={() => setTaxGroup(false)}>Cancel</SecondaryButton>
              <PrimaryButton>Save</PrimaryButton>
            </div>
          </div>
        </Modal>

        <ContentTitle>
          Tax Rates<span className="text-xs text-gray-300"> Manage your Tax rates</span>
        </ContentTitle>

        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}
          <CardHeader>
            <CardTitle>All your tax rates</CardTitle>
            {/* <SearchBar queryParams={queryParams} handleSearchChange={handleSearchChange} /> */}
            <SecondaryButton onClick={() => setTaxRate(true)} className="gap-2">
              <FaPlus /> Add
            </SecondaryButton>
          </CardHeader>

          <CardContent>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                <TableHead>
                  <tr>
                    <th scope="col" className="px-4 py-3  ">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Tax Rate %
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Action
                    </th>
                  </tr>
                </TableHead>

                <tbody>
                  {/* {users.data.map((user, index) => (
                  <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.username}</td>
                    <td className="px-6 py-4">
                      {user.roles?.map((role: { name: string }, indexRole: number) => (
                        <label htmlFor="" key={indexRole}>
                          {role.name}
                        </label>
                      ))}
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 text-xs">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]" onClick={() => handleShowDelete(user.id)}>
                          Delete
                        </button>
                        <Link href={route('users.edit', user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))} */}

                  <NoDataAvailable span={10} />
                </tbody>
              </Table>
            </div>
          </CardContent>
          {/* <Pagination links={users.links} /> */}
        </CardBorderTop>

        <CardBorderTop>
          {/* <span>{successMessage ? successMessage : ''}</span> */}
          <CardHeader>
            <CardTitle>
              <span className="text-xs md:text-lg font-bold">Tax groups (Combination of multiple)</span>
            </CardTitle>
            <div className="flex gap-2 ">
              {/* <SearchBar queryParams={queryParams} handleSearchChange={handleSearchChange} /> */}
              <SecondaryButton onClick={() => setTaxGroup(true)} className="gap-2">
                <FaPlus /> Add
              </SecondaryButton>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                <TableHead>
                  <tr>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">
                      Tax Rate %
                    </th>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">
                      Sub taxes %
                    </th>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </TableHead>
                <tbody>
                  {/* {users.data.map((user, index) => (
                  <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.username}</td>
                    <td className="px-6 py-4">
                      {user.roles?.map((role: { name: string }, indexRole: number) => (
                        <label htmlFor="" key={indexRole}>
                          {role.name}
                        </label>
                      ))}
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex gap-2 text-xs">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]" onClick={() => handleShowDelete(user.id)}>
                          Delete
                        </button>
                        <Link href={route('users.edit', user.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]">
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))} */}

                  <NoDataAvailable span={10} />
                </tbody>
              </Table>
            </div>
          </CardContent>
          {/* <Pagination links={users.links} /> */}
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Index