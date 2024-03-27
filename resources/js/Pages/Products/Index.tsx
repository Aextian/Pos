import CardBorderTop from '@/Components/CardBorderTop'
import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

const Index = () => {
    const data = [
        {
            sku: '00912',
            product: '	Abbocath/ iv Cath (g-20)',
            category: 'MED-SUP',
            unit: 'pcs',
            brand: 'CAN-CARE',
            tax: 'VAT@12%',
            price: '20.00',
        },
        {
            sku: '0092',
            product: '	Abbocath/ iv Cath (g-21)',
            category: 'SUP-MED',
            unit: 'box',
            brand: 'CAN-CARE',
            tax: 'VAT@20%',
            price: '20.00',
        },
    ]
    return (
        <MainLayout>
            <div className=" px-5 md:px-2">
                <h1 className="text-lg">
                    Produdcts <span className="text-xs">Manage your products</span>
                </h1>
            </div>

            <CardBorderTop>
                <div className="flex flex-col justify-start items-start gap-5">
                    <h5>Filters</h5>
                    <hr className=" w-full" />

                    <label htmlFor="" className="w-full">
                        Product Type:
                        <select className="w-full p-2 text-xs" name="type" id="cars">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>

                    <label htmlFor="" className="w-full">
                        Category:
                        <select className="w-full p-2 text-xs" name="type" id="cars">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>

                    <label htmlFor="" className="w-full">
                        Unit:
                        <select className="w-full p-2 text-xs" name="type" id="cars">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>

                    <label htmlFor="" className="w-full">
                        Tax:
                        <select className="w-full p-2 text-xs" name="type" id="cars">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>
                    <label htmlFor="" className="w-full">
                        Brand:
                        <select className="w-full p-2 text-xs" name="type" id="cars">
                            <option value="" selected>
                                All
                            </option>
                            <option value="">Single</option>
                            <option value="">Variable</option>
                        </select>
                    </label>
                </div>
            </CardBorderTop>

            <CardBorderTop>
                {/* <span>{successMessage ? successMessage : ''}</span> */}
                <div className="flex flex-row justify-between items-center gap-2">
                    <h1 className="text-lg font-medium">All Products</h1>
                    <Link href={route('users.create')} className="rounded-lg px-5 py-1 bg-cyan-500 text-white font-medium">
                        Add
                    </Link>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-[8px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th>
                                    <input className="rounded" type="checkbox" name="" id="" />
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    SKU
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Product
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Category
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Unit
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Brand
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Tax
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">
                                        Price
                                        <a href="#">
                                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>

                                <th scope="col" className="px-4 py-3">
                                    <div className="flex items-center">action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index) => (
                                <tr className="bg-white border- dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600" key={index}>
                                    <td className="rtl:text-center">
                                        <input className="rounded" type="checkbox" name="" id="" />
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {product.sku}
                                    </td>
                                    <td className="px-6 py-4">{product.product}</td>
                                    <td className="px-6 py-4">{product.category}</td>

                                    <td className="px-6 py-4">{product.unit}</td>
                                    <td className="px-6 py-4">{product.brand}</td>
                                    <td className="px-6 py-4">{product.tax}</td>
                                    <td className="px-6 py-4">{product.price}</td>
                                    <td className="px-6 py-4">
                                        <button className="px-2 text-white rounded bg-cyan-500">Action</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="my-2 text-white space-x-3 ml-2">
                        <button className="bg-red-500 px-3 rounded">Delete Selected</button>
                        <button className="bg-yellow-500 px-3 rounded">Delete Selected</button>
                    </div>
                </div>
                <div className="flex justify-center items-center">pagination</div>
            </CardBorderTop>
        </MainLayout>
    )
}

export default Index
