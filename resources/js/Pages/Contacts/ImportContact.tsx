import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import TextInput from '@/shared/components/TextInput'
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
          <div className="flex flex-col items-start justify-start gap-5 dark:text-white">
            <h5>File to Import</h5>
            <TextInput type="file" name="" id="" />
            <button className="rounded-lg bg-cyan-500 px-5 py-1 font-medium text-white">Upload</button>
            <button className="rounded-lg bg-emerald-400 px-5 py-1 font-medium text-white">
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
              <table className="w-full table-fixed text-left text-[8px] text-gray-500 dark:text-gray-400 md:text-xs rtl:text-right">
                <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th>Column Number</th>
                    <th>Column Name</th>
                    <th>Instruction</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                      key={index}
                    >
                      <td className="px-3 py-3">{item.id}</td>
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
