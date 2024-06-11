import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const ImportOpeningStock = () => {
  const data = [
    {
      number: 1,
      name: '	SKU(Required)',
    },
    {
      number: 2,
      name: 'Location (Optional)If blank first business location will be used',
      instruction: 'Name of the business location',
    },
    {
      number: 3,
      name: 'Quantity (Required)',
    },
    {
      number: 4,
      name: '	Unit Cost (Before Tax) (Required)',
    },
    {
      number: 5,
      name: '	Lot Number (Optional)',
    },
    {
      number: 6,
      name: '	Expiry Date (Optional)',
      instruction: 'Stock expiry date in Business date formatmm/dd/yyyy',
    },
  ]
  return (
    <MainLayout>
      <ContentTitle>Import Opening Stock</ContentTitle>
      <CardBorderTop>
        <div className="flex flex-col items-start justify-start gap-5">
          <h5 className="dark:text-white">File to Import</h5>
          <TextInput type="file" name="" />
          <button className="rounded-lg bg-cyan-500 px-5 py-1 font-medium text-white">Upload</button>
          <button className="rounded-lg bg-emerald-400 px-5 py-1 font-medium text-white">
            Download CSV file template
          </button>
        </div>
      </CardBorderTop>
      <CardBorderTop>
        <div className="space-y-5 dark:text-white">
          <h3>Instructions</h3>
          <p>
            Follow the instructions carefully before importing the file. The columns of the CSV file should be
            in the following order.
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full table-fixed text-left text-[8px] text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th>Column Number</th>
                  <th>Column Name</th>
                  <th>Instruction</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <td className="px-3 py-3">{item.number}</td>
                    <td>{item.name}</td>
                    <td>{item.instruction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ImportOpeningStock
