import CardBorderTop from '@/Components/CardBorderTop'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { BiTrashAlt } from 'react-icons/bi'

const Create = () => {
    return (
        <MainLayout>
            <div className="px-5 md:px-2">
                <h1 className="text-lg">
                    Request <span className="text-xs">Stock</span>
                </h1>
            </div>

            <CardBorderTop>
                <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-xs">
                            Date:*
                        </label>

                        <div className="inline-flex">
                            <div className="p-1 border">
                                <MdOutlineCalendarMonth size={22} />
                            </div>
                            <TextInput className="w-full p-2 text-xs rounded-none" type="date" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-xs">
                            Request(From):*
                        </label>

                        <select name="cars" id="cars" className="w-full p-2 text-xs rounded-none">
                            <option value="" selected>
                                Please Select
                            </option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-xs">
                            Request(To):*
                        </label>

                        <select name="cars" id="cars" className="w-full p-2 rounded-none text-xs">
                            <option value="" selected>
                                Please Select
                            </option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </CardBorderTop>
            <CardBorderTop>
                <h1>Search Product</h1>
                <div className="inline-flex">
                    <div className="px-2 border items-center justify-center inline-flex">
                        <IoIosSearch size={22} />
                    </div>
                    <TextInput className="w-full p-2 text-xs rounded-none" type="search" placeholder="Search products for stock adjustment" />
                </div>

                <table className="text-[10px]">
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
