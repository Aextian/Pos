import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/Components/ContentTitle'
import Table from '@/Components/GlobalComponent/Table/Table'
import TableHead from '@/Components/GlobalComponent/Table/TableHead'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const ImportProducts = () => {
  return (
    <MainLayout>
      <ContentTitle>Import Contacts</ContentTitle>
      <CardBorderTop>
        <div className="flex flex-col justify-start items-start gap-5">
          <h5 className="dark:text-white">File to Import</h5>
          <TextInput type="file" name="" id="" />
          <button className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">Upload</button>
          <button className="rounded-lg px-5 py-1 bg-emerald-400 text-white font-medium">Download CSV file template</button>
        </div>
      </CardBorderTop>
      <CardBorderTop>
        <div className="space-y-5 dark:text-white">
          <h3>Instructions</h3>
          <p>Follow the instructions carefully before importing the file. The columns of the CSV file should be in the following order.</p>
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
