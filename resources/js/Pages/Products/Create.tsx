import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import TextInput from '@/shared/components/TextInput'
import Tooltip from '@/shared/components/Tooltip'
import MainLayout from '@/Layouts/MainLayout'
import { FaExclamationCircle } from 'react-icons/fa'
import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import CardBorderTop from '@/shared/components/CardBorderTop'

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
      <ContentTitle>Add new Product</ContentTitle>

      <CardBorderTop>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 items-center">
          <LabelRow>
            <SpanLabel>Product Name:*</SpanLabel>
            <TextInput className="w-full rounded-none p-2 text-xs" placeholder="Product Name" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Brand:</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <select
                name="type"
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600">
                <option value="">Please Select</option>
                <option value="" selected>
                  Suppliers
                </option>
                <option value="">Customers</option>
                <option value="">Both (Suppliers and Customer)</option>
              </select>
              <button className="bg-white-500 border dark:border-slate-500 px-2 text-cyan-600">
                <IoIosAddCircle size={24} />
              </button>
            </div>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Unit:*</SpanLabel>
            <div className="flex w-full flex-nowrap">
              <select
                name="type"
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600   ">
                <option value="">Please Select</option>
                <option value="" selected>
                  Suppliers
                </option>
                <option value="">Customers</option>
                <option value="">Both (Suppliers and Customer)</option>
              </select>
              <button className="bg-white-500 border dark:border-slate-500 px-2 text-cyan-600">
                <IoIosAddCircle size={24} />
              </button>
            </div>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Category:</SpanLabel>
            <select
              className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Sub Category:</SpanLabel>
            <select
              className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
              name="type">
              <option value="" selected>
                Please Select
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>

          <LabelRow>
            <SpanLabel>SKU:</SpanLabel>
            <select
              className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
              name="type">
              <option value="" selected>
                All
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>

          <LabelRow>
            <SpanLabel>Barcode Type:*</SpanLabel>
            <select
              className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
              name="type">
              <option value="" selected>
                All
              </option>
              <option value="">Single</option>
              <option value="">Variable</option>
            </select>
          </LabelRow>
          <div className="flex flex-col gap-3 dark:text-white">
            <div className="space-x-3">
              <input type="checkbox" name="" id="m-stock" />
              <label htmlFor="m-stock">Manage Stock?</label>
            </div>
            <span className="italic text-[10px]">Enable stock management at product level</span>
          </div>
          <LabelRow>
            <SpanLabel>Alert quantity:*</SpanLabel>
            <TextInput className="w-full p-2 text-xs rounded-none" placeholder="Product Name" />
          </LabelRow>

          <div className="md:col-span-2">
            <LabelRow>
              <SpanLabel>Product Description:*</SpanLabel>
              <TextArea className="w-full rounded"></TextArea>
            </LabelRow>
          </div>
          <LabelRow>
            <SpanLabel>Product Image:*</SpanLabel>
            {image && (
              <div className="flex items-start justify-start flex-col gap-5 p-3 w-full border max-h-60 shadow-xl">
                <img className="object-fit shadow-lg" src={image} alt="Preview" />
                {fileSize && <span className="dark:text-white text-[10px]">{formatBytes(fileSize)} MB</span>}
              </div>
            )}
            <TextInput
              className="border p-1 rounded-none w-full"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <h6 className="text-[10px] dark:text-white">Max File:1MB</h6>
            <h6 className="text-[10px] dark:text-white">Aspect ratio should be 1:1</h6>
          </LabelRow>
        </div>
      </CardBorderTop>

      <CardBorderTop>
        <CardBorderTop.Content>
          <div className="grid grid-flow-row-dense md:grid-cols-3 gap-3">
            <LabelRow>
              <SpanLabel>Applicable Tax::</SpanLabel>
              <select
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Selling Price Tax Type:*:</SpanLabel>
              <select
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>

            <LabelRow>
              <div className="flex items-center gap-3">
                <SpanLabel> Product Type:* :</SpanLabel>
                <Tooltip
                  title="Default profit margin for the product"
                  content="(You can manage default profit margin in Business Settings.)">
                  <FaExclamationCircle size={15} />
                </Tooltip>
              </div>

              <select
                className="w-full p-2 text-xs dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                name="type">
                <option value="" selected>
                  All
                </option>
                <option value="">Single</option>
                <option value="">Variable</option>
              </select>
            </LabelRow>
          </div>
          <div className="overflow-auto md:p-8">
            <table className="w-full text-[8px] text-left  text-gray-500 dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 md:px-2">
                    Default Purchase Price
                  </th>
                  <th scope="col" className="py-3 flex items-center gap-3 md:px-2">
                    <span>x Margin(%)</span>
                    <Tooltip
                      title="Default profit margin for the product"
                      content="(You can manage default profit margin in Business Settings.)">
                      <FaExclamationCircle size={15} />
                    </Tooltip>
                  </th>

                  <th scope="col" className=" py-3 nowrap md:px-2">
                    Default Selling Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white ">
                  <td className="px-3 py-4 border-r">
                    <div className="flex flex-col text-xs font-bold text-black w-40 md:w-full md:max-w-80">
                      <LabelRow>
                        <SpanLabel>Exc.tax:*</SpanLabel>
                        <TextInput type="text" className="w-full  text-xs p-2  " placeholder="Exc.tax" />
                      </LabelRow>
                      <LabelRow>
                        <SpanLabel>Inc.tax:*</SpanLabel>
                        <TextInput type="text" className=" w-full  text-xs p-2 " placeholder="Inc.tax" />
                      </LabelRow>
                    </div>
                  </td>
                  <td className="px-3 py-4  border-r">
                    <div className="flex flex-col text-xs font-bold text-black w-40 md:w-full md:max-w-80">
                      <TextInput type="text" className=" w-full text-xs p-2 " />
                    </div>
                  </td>
                  <td className="px-3 py-4  border-r">
                    <div className="flex flex-col text-xs font-bold text-black w-40 md:w-full md:max-w-80">
                      <LabelRow>
                        <SpanLabel>Ixc.tax:*</SpanLabel>
                      </LabelRow>
                      <TextInput type="text" className=" w-full text-xs p-2 " placeholder="Inc.tax" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBorderTop.Content>
      </CardBorderTop>

      <div className="flex items-center justify-center gap-2 ">
        <PrimaryButton className="rounded-none">
          <span className="text-[10px] md:text-sm">Save & Continue</span>
        </PrimaryButton>
        <SecondaryButton className="rounded-none text-xs p-2">
          {' '}
          <span className="text-[10px] md:text-sm">Save & Exit </span>
        </SecondaryButton>
        <PrimaryButton className="rounded-none text-xs px-10">
          {' '}
          <span className="text-[10px] md:text-sm">Save </span>
        </PrimaryButton>
      </div>
    </MainLayout>
  )
}

export default Create
