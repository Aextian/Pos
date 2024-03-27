import CardBorderTop from '@/Components/CardBorderTop'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import Tooltip from '@/Components/Tooltip'
import MainLayout from '@/Layouts/MainLayout'
import { FaExclamationCircle } from 'react-icons/fa'
import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'

const Create = () => {
    const [image, setImage] = useState<string | null>(null)
    // const [fileName, setFileName] = useState<string | null>(null)
    const [fileSize, setFileSize] = useState<number | null>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            // setFileName(file.name) // Set file name
            setFileSize(file.size)
            const reader = new FileReader()
            reader.onload = () => {
                const result = reader.result as string // Assert type to string
                setImage(result)
            }
            reader.readAsDataURL(file)
        } else {
            setImage(null)
        }
    }
    const formatBytes = (bytes: number) => {
        const mb = bytes / (1024 * 1024) // Convert bytes to MB
        return mb.toFixed(2) // Return MB formatted to two decimal places
    }
    return (
        <MainLayout>
            <div className=" px-5 md:px-2">
                <h1 className="text-lg">Add new Product</h1>
            </div>

            <CardBorderTop>
                <div className="flex flex-col justify-start items-start gap-5">
                    <label htmlFor="" className="w-full">
                        Product Name:*
                        <TextInput className="w-full p-1" placeholder="Product Name" />
                    </label>

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="name">Brand:</label>
                        <div className="flex w-full flex-nowrap">
                            <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full">
                                <option value="">Please Select</option>
                                <option value="" selected>
                                    Suppliers
                                </option>
                                <option value="">Customers</option>
                                <option value="">Both (Suppliers and Customer)</option>
                            </select>
                            <button className="bg-white-500 border px-2 text-cyan-600">
                                <IoIosAddCircle size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="name">Unit:*</label>
                        <div className="flex w-full flex-nowrap">
                            <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full   ">
                                <option value="">Please Select</option>
                                <option value="" selected>
                                    Suppliers
                                </option>
                                <option value="">Customers</option>
                                <option value="">Both (Suppliers and Customer)</option>
                            </select>
                            <button className="bg-white-500 border px-2 text-cyan-600">
                                <IoIosAddCircle size={24} />
                            </button>
                        </div>
                    </div>

                    <label htmlFor="" className="w-full">
                        Sub Category:
                        <select className="w-full p-2 text-xs" name="type">
                            <option value="" selected>
                                Please Select
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>

                    <label htmlFor="" className="w-full">
                        Sku:
                        <select className="w-full p-2 text-xs" name="type">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>

                    <label htmlFor="" className="w-full">
                        Barcode Type:*
                        <select className="w-full p-2 text-xs" name="type">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>
                    <div className="flex flex-col gap-3">
                        <div className="space-x-3">
                            <input type="checkbox" name="" id="m-stock" />
                            <label htmlFor="m-stock">Manage Stock?</label>
                        </div>
                        <span className="italic text-[10px]">Enable stock management at product level</span>
                    </div>
                    <label htmlFor="" className="w-full">
                        Alert quantity:*
                        <input className="w-full p-1" placeholder="Product Name" />
                    </label>

                    <label htmlFor="" className="w-full">
                        Product Description:*
                        <textarea className="w-full rounded" name=""></textarea>
                    </label>

                    {image && (
                        <div className="flex items-start justify-start flex-col gap-5 p-3 w-full border max-h-60 shadow-xl">
                            <img className="object-fit shadow-lg" src={image} alt="Preview" />
                            {fileSize && <p>{formatBytes(fileSize)} MB</p>}
                        </div>
                    )}

                    <div>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                </div>
            </CardBorderTop>

            <CardBorderTop>
                <label htmlFor="" className="w-full">
                    Applicable Tax::
                    <select className="w-full p-2 text-xs" name="type">
                        <option value="" selected>
                            All
                        </option>
                        <option value="">Single</option>
                        <option value="">Variable</option>
                    </select>
                </label>
                <label htmlFor="" className="w-full">
                    Selling Price Tax Type:*:
                    <select className="w-full p-2 text-xs" name="type">
                        <option value="" selected>
                            All
                        </option>
                        <option value="">Single</option>
                        <option value="">Variable</option>
                    </select>
                </label>

                <label htmlFor="" className="w-full">
                    <div className="flex items-center gap-3">
                        <span> Product Type:* :</span>
                        <Tooltip title="Default profit margin for the product" content="(You can manage default profit margin in Business Settings.)">
                            <FaExclamationCircle size={15} />
                        </Tooltip>
                    </div>

                    <select className="w-full p-2 text-xs" name="type">
                        <option value="" selected>
                            All
                        </option>
                        <option value="">Single</option>
                        <option value="">Variable</option>
                    </select>
                </label>

                <table className="w-full text-[8px] text-left  text-gray-500 dark:text-gray-400">
                    <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className=" py-3">
                                Default Purchase Price
                            </th>

                            <th scope="col" className=" py-3 flex items-center gap-3">
                                <span>x Margin(%)</span>

                                <Tooltip title="Default profit margin for the product" content="(You can manage default profit margin in Business Settings.)">
                                    <FaExclamationCircle size={15} />
                                </Tooltip>
                            </th>

                            <th scope="col" className=" py-3 nowrap">
                                Default Selling Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white ">
                            <td className="px-3 py-4">
                                <div className="flex flex-col text-xs font-bold text-black">
                                    <label htmlFor="">Exc.tax:*</label>

                                    <input type="text" className="p-0 w-16" />
                                </div>
                            </td>
                            <td className="px-3 py-4">
                                <input type="text" className="p-0 w-16" />
                            </td>
                            <td className="px-3 py-4">
                                <div className="flex flex-col text-xs font-bold text-black">
                                    <label htmlFor="">Ixc.tax:*</label>
                                    <input type="text" className="p-0 w-16" />
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white ">
                            <td className="px-3 py-4 " colSpan={3}>
                                <div className="flex flex-col text-xs font-bold text-black">
                                    <label htmlFor="">Inc.tax:*</label>
                                    <input type="text" className="p-0 w-16" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CardBorderTop>
            <div className="flex gap-2">
                <PrimaryButton>Save & Continue</PrimaryButton>
                <SecondaryButton>Save & Exit</SecondaryButton>
                <PrimaryButton>Save</PrimaryButton>
            </div>
        </MainLayout>
    )
}

export default Create
