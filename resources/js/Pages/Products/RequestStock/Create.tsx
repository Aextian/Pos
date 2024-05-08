import CardBorderTop from '@/Components/CardBorderTop'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { BiTrashAlt } from 'react-icons/bi'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import CardTitle from '@/Components/CardTitle'

const Create = () => {
  return (
    <MainLayout>
      <ContentTitle>
        Request <span className="text-xs text-gray-300">Stock</span>
      </ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <LabelRow>
            <SpanLabel>Date:*</SpanLabel>
            <div className="flex flex-col gap-1">
              <div className="inline-flex">
                <div className="p-1 border dark:border-slate-500 dark:text-white">
                  <MdOutlineCalendarMonth size={22} />
                </div>
                <TextInput className="w-full p-2 text-xs rounded-none" type="date" />
              </div>
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>Request(From):*</SpanLabel>
            <select
              name="cars"
              id="cars"
              className="w-full p-2 text-xs   dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600">
              <option value="" selected>
                Please Select
              </option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Request(To):*</SpanLabel>

            <select
              name="cars"
              id="cars"
              className="w-full p-2 text-xs   dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600">
              <option value="" selected>
                Please Select
              </option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </LabelRow>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <CardTitle>Search Product</CardTitle>
        <div className="inline-flex">
          <div className="px-2 border dark:border-slate-500 dark:text-white items-center justify-center inline-flex">
            <IoIosSearch size={22} />
          </div>
          <TextInput className="w-full p-2 text-xs rounded-none" type="search" placeholder="Search products for stock adjustment" />
        </div>
        <table className="text-[10px] dark:text-white">
          <thead>
            <tr className="border">
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Unit Price</th>
              <th className="border p-2">Subtotal</th>
              <th className="border p-2">
                <BiTrashAlt size={15} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td colSpan={3} className="border p-2"></td>
              <td colSpan={4} className="border p-2">
                Total Amount:
              </td>
            </tr>
          </tbody>
        </table>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
