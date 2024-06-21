import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'
import MainLayout from '@/Layouts/MainLayout'
import React, { useEffect } from 'react'
import ContentTitle from '@/shared/components/ContentTitle'
import CardBorderTop from '@/shared/components/CardBorderTop'
import { Brand } from '@/features/Brands/types/brand-types'
import { Unit } from '@/features/Units/types/unit-types'
import { useForm } from '@inertiajs/react'
import useImageStore from '@/shared/stores/useImageStore'
import ProductForm from '@/features/Products/components/ProductForm'
import TaxForm from '@/features/Products/components/TaxForm'
import { Category } from '@/features/Categories/types/categories-types'
import { Barcode } from '@/features/Barcode/types/barcodes-types'
import { Product } from '@/features/Products/types/products-type'
import { Tax } from '@/features/Tax/types/taxes-types'
import { ChangeEvent, FormEvent } from '@/shared/types/events'
import { SelectOption } from '@/shared/types/options'
import Select, { SingleValue, ActionMeta } from 'react-select'
import { toast } from 'react-toastify'

type Props = {
  brands: Brand[]
  units: Unit[]
  categories: Category[]
  barcodes: Barcode[]
  taxes: Tax[]
}

const Create: React.FC<Props> = ({ brands, units, categories, barcodes, taxes }) => {
  const { file } = useImageStore()

  const { reset, setData, post, processing, errors, clearErrors, data } = useForm<Product>({
    id: null,
    name: '',
    type: 'single',
    unit_id: null,
    brand_id: null,
    category_id: null,
    sub_category_id: null,
    tax: null,
    tax_type: 'inclusive',
    enabled_stock: false,
    alert_quantity: null,
    sku: '',
    barcode_type: 'C128',
    expiry_period: null,
    expiry_period_type: null,
    enable_sr_no: false,
    weight: '',
    product_custom_field1: '',
    product_custom_field2: '',
    product_custom_field3: '',
    product_custom_field4: '',
    image: '',
    product_description: '',
    is_inactive: false,
  })

  console.log(data)
  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      image: file ? file : prevValues.image,
    }))
  }, [file])

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target
    setData((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSelectChange =
    (fieldName: string) =>
    (selectedOption: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => {
      setData((prevValues) => ({
        ...prevValues,
        [fieldName]: selectedOption?.value, // Use optional chaining to handle null case
      }))
    }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('sdsd')
    const url = route('product.store')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        reset()
      },
      onError: () => {
        toast.error('Invalid inputs, Check & try again!!')
      },
    })
    console.log(errors)
  }

  return (
    <MainLayout>
      <ContentTitle>Add new Product</ContentTitle>
      <form onSubmit={handleSubmit} className="space-y-8">
        <CardBorderTop>
          <CardBorderTop.Content>
            <ProductForm
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              setData={setData as unknown as React.Dispatch<React.SetStateAction<Product>>}
              errors={errors as Error}
              data={data}
              units={units}
              brands={brands}
              categories={categories}
              barcodes={barcodes}
            />
          </CardBorderTop.Content>
        </CardBorderTop>

        <CardBorderTop>
          <CardBorderTop.Content>
            <TaxForm
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              taxes={taxes}
              setData={setData as unknown as React.Dispatch<React.SetStateAction<Product>>}
              errors={errors as Error}
              data={data}
            />
          </CardBorderTop.Content>
        </CardBorderTop>

        {/* button */}
        <div className="flex items-center justify-center gap-2">
          <PrimaryButton className="rounded-none" type="submit">
            {processing ? <span className="text-[10px] md:text-sm">Saving...</span> : 'Save'}
          </PrimaryButton>
          {/* <SecondaryButton className="rounded-none p-2 text-xs">
          {' '}
          <span className="text-[10px] md:text-sm">Save & Exit </span>
        </SecondaryButton>
        <PrimaryButton className="rounded-none px-10 text-xs">
          {' '}
          <span className="text-[10px] md:text-sm">Save </span>
        </PrimaryButton> */}
        </div>
      </form>
    </MainLayout>
  )
}

export default Create
