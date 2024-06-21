import TextInput from '@/shared/components/TextInput'
import { IoIosAddCircle } from 'react-icons/io'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import useImageStore from '@/shared/stores/useImageStore'
import React, { useState } from 'react'
import { Unit } from '@/features/Units/types/unit-types'
import { Brand } from '@/features/Brands/types/brand-types'
import { Category } from '@/features/Categories/types/categories-types'
import { Barcode } from '@/features/Barcode/types/barcodes-types'
import { Product } from '../types/products-type'
import { ChangeEvent } from '@/shared/types/events'
import Select, { ActionMeta, SingleValue } from 'react-select'
import { primarySelectStyle, secondarySelectStyle, selectTheme } from '@/shared/utils/styleUtils'
import { SelectOption } from '@/shared/types/options'
import InputError from '@/shared/components/InputError'

type Props = {
  handleChange: (e: ChangeEvent) => void
  data: Product
  setData: React.Dispatch<React.SetStateAction<Product>>
  handleSelectChange: (
    fieldName: string,
  ) => (selectedOption: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void
  errors: Error
  units: Unit[]
  brands: Brand[]
  categories: Category[]
  barcodes: Barcode[]
}

const ProductForm: React.FC<Props> = ({
  handleChange,
  handleSelectChange,
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
    setAlertQty(!alertQty)
    setData({ ...data, alert_quantity: null })
  }

  const selectBrands = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }))

  const selectUnits = units.map((unit) => ({
    value: unit.id,
    label: unit.actual_name,
  }))

  const selectCategories = categories
    .filter((category) => category.parent_id === null)
    .map((category) => ({
      value: category.id,
      label: category.name,
    }))

  const selectSubCategories = categories
    .filter((category) => category.parent_id !== null)
    .map((category) => ({
      value: category.id,
      label: category.name,
    }))

  const selectBarcodes = barcodes.map((barcode) => ({
    value: barcode.id,
    label: barcode.name,
  }))

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3">
        <LabelRow>
          <SpanLabel>Product Name:*</SpanLabel>
          <TextInput
            name="name"
            onChange={handleChange}
            className="w-full rounded-none p-2 text-xs"
            placeholder="Product Name"
          />
          <InputError message={errors.name} />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Brand:</SpanLabel>
          <div className="flex w-full flex-nowrap">
            <Select
              styles={secondarySelectStyle}
              options={selectBrands}
              className="my-react-select-container w-full"
              classNamePrefix="my-react-select"
              theme={selectTheme}
              onChange={handleSelectChange('brand_id')}
            />
            <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500">
              <IoIosAddCircle size={24} />
            </button>
          </div>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Unit:*</SpanLabel>
          <div className="flex w-full flex-nowrap">
            <Select
              styles={secondarySelectStyle}
              options={selectUnits}
              className="my-react-select-container w-full"
              classNamePrefix="my-react-select"
              theme={selectTheme}
              onChange={handleSelectChange('unit_id')}
            />
            <button className="bg-white-500 border px-2 text-cyan-600 dark:border-slate-500">
              <IoIosAddCircle size={24} />
            </button>
          </div>
          {/* <InputError message={errors.unit_id} /> */}
        </LabelRow>
        <LabelRow>
          <SpanLabel>Category:</SpanLabel>
          <Select
            styles={secondarySelectStyle}
            options={selectCategories}
            className="my-react-select-container w-full"
            classNamePrefix="my-react-select"
            theme={selectTheme}
            onChange={handleSelectChange('category_id')}
          />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Sub Category:</SpanLabel>
          <Select
            styles={secondarySelectStyle}
            options={selectSubCategories}
            className="my-react-select-container w-full"
            classNamePrefix="my-react-select"
            theme={selectTheme}
            onChange={handleSelectChange('sub_category_id')}
          />
        </LabelRow>
        <LabelRow>
          <SpanLabel>SKU:</SpanLabel>
          <TextInput
            name="sku"
            onChange={handleChange}
            className="w-full rounded-none p-2 text-xs"
            placeholder="SKU"
          />
        </LabelRow>
        <LabelRow>
          <SpanLabel>Barcode Type:*</SpanLabel>
          <Select
            styles={secondarySelectStyle}
            options={selectBarcodes}
            className="my-react-select-container w-full"
            classNamePrefix="my-react-select"
            theme={selectTheme}
            onChange={handleSelectChange('barcode_id')}
          />
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
