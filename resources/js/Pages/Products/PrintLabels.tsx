import CardBorderTop from '@/Components/CardBorderTop'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { IoSearch } from 'react-icons/io5'
import { FaInfo } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'

const PrintLabels = () => {
    return (
        <MainLayout>
            <div className=" px-5 md:px-2">
                <h1 className="text-lg">
                    Print <span className="text-xs">Labels</span>
                </h1>
            </div>
            <CardBorderTop>
                <div className="space-y-5">
                    <h5>Add products to generate Labels</h5>
                    <div className="flex">
                        <div className="px-3 border flex items-center ">
                            <IoSearch size={20} />
                        </div>
                        <TextInput className="w-full border rounded-none p-1" placeholder="Enter product name to print labels" />
                    </div>
                    <div>
                        <table className="border text-[10px] text-left ">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>No.of labels</th>
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
                <h5>Information to show in Labels</h5>
                <div className="mt-5 grid grid-rows-3 gap-5">
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
                                <FaInfo size={20} />
                            </div>
                            <select className="w-full p-1 border" name="cars">
                                <option value="">Inc Tax</option>
                                <option value="">Exc Tax</option>
                            </select>
                        </div>
                    </div>
                    <label className="inline-flex items-center gap-3">
                        <input className="rounded" type="checkbox" name="" />
                        Business name
                    </label>
                    <hr />
                    <div className="flex flex-col  gap-3">
                        <label>Barcode setting:</label>
                        <div className="flex">
                            <div className="px-3 border flex items-center ">
                                <CiSettings size={20} />
                            </div>
                            <select className="w-full p-1 border" name="cars">
                                <option value="">Inc Tax</option>
                                <option value="">Exc Tax</option>
                            </select>
                        </div>
                        <button className="btn rounded-md bg-cyan-600 p-2 text-white uppercase font-bold ">Preview</button>
                    </div>
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
