import CardBorderTop from '@/Components/CardBorderTop'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { IoSearch } from 'react-icons/io5'
import { FaInfo } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import CardTitle from '@/Components/CardTitle'

const PrintLabels = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Print <span className="text-xs text-gray-300">Labels</span>
      </ContentTitle>
      <CardBorderTop>
        <CardTitle>Add products to generate Labels</CardTitle>
        <div className="md:px-44 flex flex-col items-center gap-3">
          <div className="flex w-full">
            <div className="px-3 border dark:border-slate-500 dark:text-white flex items-center ">
              <IoSearch size={20} />
            </div>
            <TextInput className="w-full border rounded-none p-1" placeholder="Enter product name to print labels" />
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full border text-[10px] text-left ">
              <thead>
                <tr className="dark:text-white border ">
                  <th className="p-2">Products</th>
                  <th className="p-2">No.of labels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ETEROCOXIB 120MG()SAPHERETOR</td>
                  <td>
                    <input className="p-1 rounded" type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <CardTitle>Information to show in Labels</CardTitle>
        <div className="grid grid-flow-dense md:grid-cols-4 dark:text-white gap-3">
          <label className="inline-flex items-center gap-3">
            <input className="rounded" type="checkbox" name="" />
            Product Name
          </label>
          <label className="inline-flex items-center gap-3">
            <input className="rounded" type="checkbox" name="" />
            Product Variation (recommended)
          </label>
          <label className="inline-flex items-center gap-3">
            <input className="rounded" type="checkbox" name="" />
            Product Price
          </label>
          <div className=" flex-row">
            <label> Show Price:</label>
            <div className="flex">
              <div className="px-3 border flex items-center ">
                <FaInfo />
              </div>
              <select
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                name="cars">
                <option value="">Inc Tax</option>
                <option value="">Exc Tax</option>
              </select>
            </div>
          </div>
          <label className="inline-flex items-center gap-3">
            <input className="rounded" type="checkbox" name="" />
            Business name
          </label>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <h5 className="dark:text-white">Barcode setting:</h5>
          <div className="flex  w-full max-w-80 ">
            <div className="px-3 dark:border-slate-500 dark:text-white border flex items-center ">
              <CiSettings size={20} />
            </div>
            <select
              className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
              name="cars">
              <option value="">Inc Tax</option>
              <option value="">Exc Tax</option>
            </select>
          </div>
          <button className="btn rounded-md bg-cyan-600 p-2 text-white uppercase font-bold md:self-end md:w-80">Preview</button>
        </div>
      </CardBorderTop>
      <div>
        <h1>Preview</h1>
        <div className="w-full border h-96 px-12">
          <div className=" mx-auto mt-5 border border-dotted w-full h-20 "></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PrintLabels
