import CardBorderTop from '@/Components/CardBorderTop'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { IoSearch } from 'react-icons/io5'
import { FaInfo } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import ContentTitle from '@/shared/components/ContentTitle'
import CardTitle from '@/Components/CardTitle'

const PrintLabels = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Print <span className="text-xs text-gray-300">Labels</span>
      </ContentTitle>
      <CardBorderTop>
        <CardTitle>Add products to generate Labels</CardTitle>
        <div className="flex flex-col items-center gap-3 md:px-44">
          <div className="flex w-full">
            <div className="flex items-center border px-3 dark:border-slate-500 dark:text-white">
              <IoSearch size={20} />
            </div>
            <TextInput
              className="w-full rounded-none border p-1"
              placeholder="Enter product name to print labels"
            />
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full border text-left text-[10px]">
              <thead>
                <tr className="border dark:text-white">
                  <th className="p-2">Products</th>
                  <th className="p-2">No.of labels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ETEROCOXIB 120MG()SAPHERETOR</td>
                  <td>
                    <input className="rounded p-1" type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <CardTitle>Information to show in Labels</CardTitle>
        <div className="grid grid-flow-dense gap-3 dark:text-white md:grid-cols-4">
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
          <div className="flex-row">
            <label> Show Price:</label>
            <div className="flex">
              <div className="flex items-center border px-3">
                <FaInfo />
              </div>
              <select
                className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                name="cars"
              >
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
          <div className="flex w-full max-w-80">
            <div className="flex items-center border px-3 dark:border-slate-500 dark:text-white">
              <CiSettings size={20} />
            </div>
            <select
              className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              name="cars"
            >
              <option value="">Inc Tax</option>
              <option value="">Exc Tax</option>
            </select>
          </div>
          <button className="btn rounded-md bg-cyan-600 p-2 font-bold uppercase text-white md:w-80 md:self-end">
            Preview
          </button>
        </div>
      </CardBorderTop>
      <div>
        <h1>Preview</h1>
        <div className="h-96 w-full border px-12">
          <div className="mx-auto mt-5 h-20 w-full border border-dotted"></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PrintLabels
