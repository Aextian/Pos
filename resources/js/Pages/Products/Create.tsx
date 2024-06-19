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

type Props = {
  brands: Brand[]
  units: Unit[]
  categories: Category[]
  barcodes: Barcode[]
}

const Create: React.FC<Props> = ({ brands, units, categories, barcodes }) => {
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

  useEffect(() => {
    setData((prevValues) => ({
      ...prevValues,
      image: file ? file : prevValues.image,
    }))
  }, [file])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = route('brand.store')
    post(url, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        reset()
      },
    })
  }

  return (
    <MainLayout>
      <ContentTitle>Add new Product</ContentTitle>
      <CardBorderTop>
        <CardBorderTop.Content>
          <ProductForm
            handleChange={handleChange}
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
          <TaxForm handleChange={handleChange} setData={setData} errors={errors} data={data} />
        </CardBorderTop.Content>
      </CardBorderTop>

      <div className="flex items-center justify-center gap-2">
        <PrimaryButton className="rounded-none">
          <span className="text-[10px] md:text-sm">Save & Continue</span>
        </PrimaryButton>
        <SecondaryButton className="rounded-none p-2 text-xs">
          {' '}
          <span className="text-[10px] md:text-sm">Save & Exit </span>
        </SecondaryButton>
        <PrimaryButton className="rounded-none px-10 text-xs">
          {' '}
          <span className="text-[10px] md:text-sm">Save </span>
        </PrimaryButton>
      </div>
    </MainLayout>
  )
}

export default Create
