import TextInput from '@/shared/components/TextInput'
import { IoIosAddCircle } from 'react-icons/io'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import Select from '@/shared/components/Select'
import useImageStore from '@/shared/stores/useImageStore'



type Props = {
handleChange:() => void
data:
}

const ProductForm = ({handleChange,data,setData,errors}) => {
  const { image, fileSize, handleImageChange, formatBytes } = useImageStore()

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <LabelRow>
          <SpanLabel>Product Name:*</SpanLabel>
          <TextInput className="w-full rounded-none p-2 text-xs" placeholder="Product Name" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Brand:</SpanLabel>
          <div className="flex w-full flex-nowrap">
            <Select>
              <option value="">Please Select</option>
              <option value="" selected>
                Suppliers
              </option>
              <option value="">Customers</option>
              <option value="">Both (Suppliers and Customer)</option>
            </Select>
            <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500">
              <IoIosAddCircle size={24} />
            </button>
          </div>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Unit:*</SpanLabel>
          <div className="flex w-full flex-nowrap">
            <Select>
              <option value="">Please Select</option>
              <option value="" selected>
                Suppliers
              </option>
              <option value="">Customers</option>
              <option value="">Both (Suppliers and Customer)</option>
            </Select>
            <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500">
              <IoIosAddCircle size={24} />
            </button>
          </div>
        </LabelRow>

        <LabelRow>
          <SpanLabel>Category:</SpanLabel>
          <select
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
          <span className="text-[10px] italic">Enable stock management at product level</span>
        </div>
        <LabelRow>
          <SpanLabel>Alert quantity:*</SpanLabel>
          <TextInput className="w-full rounded-none p-2 text-xs" placeholder="Product Name" />
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
            <div className="flex max-h-60 w-full flex-col items-start justify-start gap-5 border p-3 shadow-xl">
              <img className="object-fit shadow-lg" src={image} alt="Preview" />
              {fileSize && <span className="text-[10px] dark:text-white">{formatBytes(fileSize)} MB</span>}
            </div>
          )}
          <TextInput
            className="w-full rounded-none border p-1"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <h6 className="text-[10px] dark:text-white">Max File:1MB</h6>
          <h6 className="text-[10px] dark:text-white">Aspect ratio should be 1:1</h6>
        </LabelRow>
      </div>
    </>
  )
}

export default ProductForm
