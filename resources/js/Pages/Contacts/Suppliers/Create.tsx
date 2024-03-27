import CardBorderTop from '@/Components/CardBorderTop'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaPersonArrowUpFromLine } from 'react-icons/fa6'

const Create = () => {
    return (
        <MainLayout>
            <div className="mb-10 px-5 md:px-2">
                <h1 className="text-lg">
                    Suppliers <span className="text-xs">Manage your suppliers</span>
                </h1>
            </div>
            <CardBorderTop>
                <div className="">
                    <h1 className="text-lg font-medium">Add new contact</h1>
                </div>
                <form>
                    <div className="flex flex-col md:flex-row gap-3 mb-5 ">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Contact type:*</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>

                                <select
                                    name="cars"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Please Select</option>
                                    <option value="" selected>
                                        Suppliers
                                    </option>
                                    <option value="">Customers</option>
                                    <option value="">Both (Suppliers and Customer)</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Name:*</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Business Name:*</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>

                                <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Contact ID:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>

                                <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Tax Number:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>

                                <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="md:basis-[24rem] flex flex-col gap-1 w-full">
                            <label htmlFor="name">Opening Balance:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        <div className="flex-0 flex flex-col gap-1 w-full">
                            <label htmlFor="name">Pay term:</label>
                            <div className="grid grid-cols-3 gap-3">
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1"
                                    placeholder="Pay term"
                                />
                                <select
                                    name="cars"
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2 md:col-span-1">
                                    <option value="">Please Select</option>
                                    <option value="" selected>
                                        Suppliers
                                    </option>
                                    <option value="">Customers</option>
                                    <option value="">Both (Suppliers and Customer)</option>
                                </select>
                                <div className="space-x-2 col-span-2 md:col-span-1">
                                    <label className="inline-flex items-center gap-3">
                                        <input className="mt-2 rounded" type="checkbox" name="" id="" /> Allow gain points
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Email:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Mobile:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Mobile"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Alternate contact number:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Alternate contact number"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Landline:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Landline"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">City:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="City"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">State:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="State"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Country:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Country"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name">Landmark:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                        <FaPersonArrowUpFromLine size={20} />
                                    </div>
                                </div>
                                <TextInput
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Landmark"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-content-end flex-col mt-5">
                        <button className="rounded-lg px-5 text-lg bg-cyan-600" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </CardBorderTop>
        </MainLayout>
    )
}

export default Create
