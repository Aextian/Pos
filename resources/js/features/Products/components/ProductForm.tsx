import TextInput from '@/shared/components/TextInput'
import { IoIosAddCircle } from 'react-icons/io'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import Select from '@/shared/components/Select'
import useImageStore from '@/shared/stores/useImageStore'
import React, { useState } from 'react'
import { Unit } from '@/features/Units/types/unit-types'
import { Brand } from '@/features/Brands/types/brand-types'
import { Category } from '@/features/Categories/types/categories-types'
import { Barcode } from '@/features/Barcode/types/barcodes-types'
import { Product } from '../types/products-type'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  data: Product
  setData: React.Dispatch<React.SetStateAction<Product>>
  errors: Error
  units: Unit[]
  brands: Brand[]
  categories: Category[]
  barcodes: Barcode[]
}

const ProductForm: React.FC<Props> = ({
  handleChange,
  data,
  units,
  brands,
  categories,
  barcodes,
  setData,
  errors,
}) => {
  const { image, fileSize, handleImageChange, formatBytes } = useImageStore()

  const [alertQty, setAlertQty] = useState(false)

  const BarcodeTypes = ['C39', 'C128', 'EAN13', 'EAN8', 'UPCA', 'UPCE']

  const handleQty = () => {
    setAlertQty(!alertQty) // Toggles alertQty state
    setData({ ...data, alert_quantity: null }) // Updates alert_quantity in data state
  }

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <LabelRow>
          <SpanLabel>Product Name:*</SpanLabel>
          <TextInput
            name="name"
            onChange={handleChange}
            className="w-full rounded-none p-2 text-xs"
            placeholder="Product Name"
          />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Brand:</SpanLabel>
          <div className="flex w-full flex-nowrap">
            <Select
              name="brand_id"
              onChange={handleChange}
              value={data.brand_id ? data.brand_id : ''}
              required>
              <option value="">Please Select</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id || ''}>
                  {brand.name}
                </option>
              ))}
            </Select>
            <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500">
              <IoIosAddCircle size={24} />
            </button>
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Unit:*</SpanLabel>
          <div className="flex w-full flex-nowrap">
            <Select name="unit_id" onChange={handleChange} value={data.unit_id ? data.unit_id : ''} required>
              <option value="">Please Select</option>
              {units.map((unit) => (
                <option key={unit.id} value={unit.id || ''}>
                  {unit.actual_name}
                </option>
              ))}
            </Select>
            <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500">
              <IoIosAddCircle size={24} />
            </button>
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Category:</SpanLabel>
          <Select name="category_id" onChange={handleChange} value={data.category_id ? data.category_id : ''}>
            <option value="">Please Select</option>
            {categories.map(
              (category) =>
                category.parent_id === null && (
                  <option key={category.id} value={category.id || ''}>
                    {category.name}
                  </option>
                ),
            )}
          </Select>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sub Category:</SpanLabel>
          <Select name="sub_category_id" value={data.sub_category_id ? data.sub_category_id : ''}>
            <option value="">Please Select</option>
            {categories.map(
              (category) =>
                category.parent_id !== null && (
                  <option key={category.id} value={category.id || ''}>
                    {category.name}
                  </option>
                ),
            )}
          </Select>
        </LabelRow>
        <LabelRow>
          <SpanLabel>SKU:</SpanLabel>
          <TextInput className="w-full rounded-none p-2 text-xs" placeholder="SKU" />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Barcode Type:*</SpanLabel>
          <Select name="type" onChange={handleChange} value={data.type}>
            <option value="" >
              All
            </option>
            {BarcodeTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </LabelRow>

        <div className="flex flex-col gap-3 dark:text-white">
          <div className="space-x-3">
            <label className="flex items-center gap-3">
              <TextInput type="checkbox" name="" checked={alertQty} onChange={handleQty} />
              Manage Stock?
            </label>
          </div>
          <span className="text-[10px] italic">Enable stock management at product level</span>
        </div>

        {alertQty && (
          <LabelRow>
            <SpanLabel>Alert quantity:*</SpanLabel>
            <TextInput
              name="alert_quantity"
              onChange={handleChange}
              className="w-full rounded-none p-2 text-xs"
              placeholder="Product Name"
            />
          </LabelRow>
        )}

        <div className="md:col-span-2">
          <LabelRow>
            <SpanLabel>Product Description:*</SpanLabel>
            <TextArea
              name="product_description"
              onChange={handleChange}
              className="w-full rounded"></TextArea>
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
            name="image"
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
