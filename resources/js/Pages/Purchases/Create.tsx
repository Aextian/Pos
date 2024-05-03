import CardBorderTop from '@/Components/CardBorderTop'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import Tooltip from '@/Components/Tooltip'
import MainLayout from '@/Layouts/MainLayout'
import { FaMoneyBillWaveAlt, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { FaExclamationCircle, FaRegCalendarAlt } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'

const Create = () => {
  return (
    <MainLayout>
      <div className="px-5 md:px-2">
        <h1 className="text-lg">Add Purchase</h1>
      </div>
      <CardBorderTop>
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Supplier:*</label>
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 flex items-center">
                <FaUser size={18} />
              </div>
              <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full">
                <option value="" selected>
                  Please Select
                </option>
                <option value="">Suppliers</option>
                <option value="">Customers</option>
                <option value="">Both (Suppliers and Customer)</option>
              </select>
              <button className="bg-white-500 border px-2 text-cyan-600">
                <IoIosAddCircle size={24} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Reference No:</label>
            <TextInput className="w-full rounded p-1" type="text" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Purchase Date:*</label>
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 flex items-center">
                <FaRegCalendarAlt size={18} />
              </div>
              <TextInput className="w-full  p-1 rounded-none" type="date" />
            </div>
          </div>
          <label className="w-full">
            Purchase Status:*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label className="w-full">
            Business Location:*
            <select className="w-full p-2 text-xs" name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </label>
          <label className="w-full">
            Attach Document:
            <input type="file" name="" id="" className="w-full border p-1" />
          </label>
          <span className="text-[10px]">Max File size:1MB</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <button className="text-left  text-cyan-600"> View Supplier Products</button>

        <div className="flex w-full flex-nowrap">
          <div className="border px-2 grid place-items-center">
            <FaSearch size={15} />
          </div>
          <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Enter Product name/Sku/Scan bar code" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[8px] text-left  text-gray-500 dark:text-gray-400 ">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-cyan-600 text-white">
                <th className="whitespace-nowrap border-r p-1">#</th>
                <th className="whitespace-nowrap border-r p-1">Product Name</th>
                <th className="whitespace-nowrap border-r p-1">Purchases Quantity</th>
                <th className="whitespace-nowrap border-r p-1">Unit Cost(Before Discount)</th>
                <th className="whitespace-nowrap border-r p-1">Discount Percent</th>
                <th className="whitespace-nowrap border-r p-1">Unit Cost(Before Tax)</th>
                <th className="whitespace-nowrap border-r p-1">Subtotal(Before Tax)</th>
                <th className="whitespace-nowrap border-r p-1">Product Tax</th>
                <th className="whitespace-nowrap border-r p-1">Net Cost</th>
                <th className="whitespace-nowrap border-r p-1">Line Total</th>
                <th className="whitespace-nowrap border-r p-1">Profit Margin %</th>
                <th className="whitespace-nowrap border-r p-1">Unit Selling Price</th>
                <th className="whitespace-nowrap border-r p-1">MFG Date / EXP Date</th>
                <th className="whitespace-nowrap border-r p-1">
                  <FaTrash size={10} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white ">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-t text-right p-3 space-x-3">
          <h5 className="text-xs inline font-bold">Net Total Amount </h5> <span className="text-[10px]">0.00</span>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid gap-5">
          <div className="flex gap-5 border-b pb-3">
            <label>
              Discount Type:
              <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500">
                <option value="" selected>
                  None
                </option>
              </select>
            </label>
            <label>
              Discount Amount:
              <TextInput className="rounded-none p-2 w-20 text-xs" value={0} />
            </label>
            <p>Discount:(-)</p>
          </div>

          <div className="flex justify-between gap-5 border-b pb-3">
            <label>
              Purchase Tax: <span className="text-red-500">(Not Required!)</span>
              <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500">
                <option value="" selected>
                  None
                </option>
              </select>
            </label>
            <p>Discount:(+) 0.00</p>
          </div>

          <div className="flex justify-between gap-5 border-b pb-3">
            <label className="">
              Shipping Details:
              <TextInput className="rounded-none p-2 w-20 text-xs" />
            </label>
            <label className="">
              (+) Additional Shipping charges:
              <TextInput className="rounded-none p-2 w-20 text-xs" value={0} />
            </label>
          </div>

          <label htmlFor="">
            Additional Notes
            <textarea className="w-full" name="" id="" cols={20}></textarea>
          </label>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <div className="grid gap-5">
          <h5 className="text-lg"> Add payment</h5>
          <label>
            Amount
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 grid place-items-center">
                <FaMoneyBillWaveAlt size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Enter Product name/Sku/Scan bar code" />
            </div>
          </label>
          <label>
            Payment Method"*
            <div className="flex w-full flex-nowrap">
              <div className="border px-2 grid place-items-center">
                <FaMoneyBillWaveAlt size={15} />
              </div>
              <TextInput className="w-full  p-2 rounded-none text-xs " type="search" placeholder="Enter Product name/Sku/Scan bar code" />
            </div>
          </label>
          <label htmlFor="">
            Payment Notes
            <textarea className="w-full" name="" id="" cols={20}></textarea>
          </label>

          <div className="border-t  p-3 gap-5 flex flex-col items-end justify-end">
            <h5 className="text-xs inline font-bold">Payment due:0.00</h5>
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
