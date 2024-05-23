import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import TextInput from '@/Components/Shared/ui/TextInput'
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
        <div className="flex flex-col justify-start items-start gap-5">
          <h5 className="dark:text-white">File to Import</h5>
          <TextInput type="file" name="" />
          <button className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">Upload</button>
          <button className="rounded-lg px-5 py-1 bg-emerald-400 text-white font-medium">Download CSV file template</button>
        </div>
      </CardBorderTop>
      <CardBorderTop>
        <div className="space-y-5 dark:text-white">
          <h3>Instructions</h3>
          <p>Follow the instructions carefully before importing the file. The columns of the CSV file should be in the following order.</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="table-fixed w-full text-[8px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th>Column Number</th>
                  <th>Column Name</th>
                  <th>Instruction</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="py-3 px-3">{item.number}</td>
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
