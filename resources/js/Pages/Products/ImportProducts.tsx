import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import Table from '@/shared/components/Table/Table'
import TableHead from '@/shared/components/Table/TableHead'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const ImportProducts = () => {
  return (
    <MainLayout>
      <ContentTitle>Import Contacts</ContentTitle>
      <CardBorderTop>
        <div className="flex flex-col items-start justify-start gap-5">
          <h5 className="dark:text-white">File to Import</h5>
          <TextInput type="file" name="" id="" />
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
          <Table>
            <TableHead>
              <tr>
                <th>Column Number</th>
                <th>Column Name</th>
                <th>Instruction</th>
              </tr>
            </TableHead>
            <tbody>
              {/* {data.map((item) => (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="py-3 px-3">{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.instruction}</td>
                            </tr>
                        ))} */}
            </tbody>
          </Table>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default ImportProducts
