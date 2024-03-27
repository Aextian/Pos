import CardBorderTop from '@/Components/CardBorderTop'
import Modal from '@/Components/Modal'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Index = () => {
    const [showModal, setShowModal] = useState(false)
    const [showParentCategory, setParentCategory] = useState(false)

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    return (
        <MainLayout>
            <Modal show={showModal} maxWidth="2xl" closeable={true} onClose={() => router.visit(route('categories.index'))}>
                <div className="grid grid-flow-row p-5 gap-5">
                    <div className="flex justify-between items-center ">
                        <h1>Add Category</h1>
                        <span className="items-start cursor-pointer" onClick={handleShowModal}>
                            x
                        </span>
                    </div>
                    <div className="text-[10px]">
                        <label htmlFor="">Category name:*</label>
                        <TextInput className="p-1 w-full" />
                    </div>
                    <div className="text-[10px]">
                        <label htmlFor="">Category Code:*</label>
                        <TextInput className="p-1 w-full" />
                    </div>
                    <p className="text-[10px]">Category code is same as HSN code</p>
                    <label className="inline-flex items-center gap-3 text-[10px]">
                        <TextInput type="checkbox" onChange={() => setParentCategory(!showParentCategory)} checked={showParentCategory} />
                        Add as Sub-category
                    </label>
                    {showParentCategory && (
                        <div>
                            <label className="text-[10px]">Select as sub-category</label>
                            <select className="p-1 w-full rounded" name="cars" id="cars">
                                <option value="" selected>
                                    NONE
                                </option>
                                <option value=""></option>
                            </select>
                        </div>
                    )}

                    <div className="flex justify-end gap-3">
                        <hr />
                        <button className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">Save</button>
                        <button className="rounded-lg px-5 py-1 bg-red-500 text-white font-medium" onClick={handleShowModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
            <div className="mb-10 px-5 md:px-2">
                <h1 className="text-lg">
                    Categories <span className="text-xs">Manage your categories</span>
                </h1>
            </div>
            <CardBorderTop>
                <div className="flex flex-row justify-between items-center gap-2">
                    <h1 className="text-lg">Manage your categories</h1>
                    <button type="button" onClick={handleShowModal} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
                        Add
                    </button>
                </div>

                <div className="self-end relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                            <FaSearch size={20} />
                        </div>
                    </div>
                    <input className="rounded-lg px-5 py-1 bg-slate-200 ps-10 " type="search" name="" id="" />
                </div>

                <div className=" overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-[10px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-[8px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Category Code
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        <span></span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                                <td className="px-6 py-4 text-right"></td>

                                <td className="px-6 py-4 text-right">
                                    <div className="flex gap-2 text-xs">
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-[10px]"> Edit</button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-[10px]"> Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center">pagination</div>
            </CardBorderTop>
        </MainLayout>
    )
}

export default Index
