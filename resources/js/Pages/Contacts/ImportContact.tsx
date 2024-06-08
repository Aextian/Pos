import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const ImportContact = () => {
  const data = [
    {
      id: 1,
      name: 'Contact type (Required)',
      instruction: 'Available Options: customer, supplier & both',
    },

    {
      id: 2,
      name: 'Name (Required)',
    },
    {
      id: 3,
      name: ' Business Name (Required if contact type is supplier or both)',
    },
    {
      id: 4,
      name: 'Contact ID (Optional)',
      instruction: 'Leave blank to auto generate Contact ID',
    },
    {
      id: 5,
      name: 'Tax number (Optional)',
    },
    {
      id: 6,
      name: '	Opening Balance (Optional)',
    },
    {
      id: 7,
      name: 'Pay term(Required if contact type is supplier or both)',
    },
    {
      id: 8,
      name: 'Pay term period(Required if contact type is supplier or both)',
      instruction: 'Available Options: days, months, years',
    },
    {
      id: 9,
      name: 'Credit Limit (Optional)',
    },
    {
      id: 10,
      name: 'Email (Optional)',
    },
    {
      id: 11,
      name: '	Mobile (Required)0',
    },
    {
      id: 12,
      name: '	Alternate contact number (Optional)',
    },
    {
      id: 13,
      name: 'Landline (Optional)',
    },
    {
      id: 14,
      name: 'City (Optional)',
    },
    {
      id: 15,
      name: '	State (Optional)',
    },
    {
      id: 16,
      name: 'Country (Optional)',
    },
    {
      id: 17,
      name: 'Landmark (Optional)',
    },
    {
      id: 18,
      name: '	Custom Field 1 (Optional)',
    },
    {
      id: 19,
      name: '	Custom Field 2 (Optional)',
    },
    {
      id: 20,
      name: '	Custom Field 3 (Optional)',
    },
    {
      id: 21,
      name: '	Custom Field 4 (Optional)',
    },
  ]

  return (
    <MainLayout>
      <ContentTitle>Import Contacts</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Content>
          <div className="flex flex-col justify-start items-start gap-5 dark:text-white">
            <h5>File to Import</h5>
            <TextInput type="file" name="" id="" />
            <button className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">Upload</button>
            <button className="rounded-lg px-5 py-1 bg-emerald-400 text-white font-medium">
              Download CSV file template
            </button>
          </div>
        </CardBorderTop.Content>
      </CardBorderTop>
      <CardBorderTop>
        <CardBorderTop.Content>
          <div className="space-y-5">
            <h3 className="dark:text-white">Instructions</h3>
            <p className="dark:text-white">
              Follow the instructions carefully before importing the file. The columns of the CSV file should
              be in the following order.
            </p>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="table-fixed w-full text-[8px] md:text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th>Column Number</th>
                    <th>Column Name</th>
                    <th>Instruction</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      key={index}>
                      <td className="py-3 px-3">{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.instruction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ImportContact
