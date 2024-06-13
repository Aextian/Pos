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
import { Brand } from '@/features/Brands/types/brand-types'
import { Unit } from '@/features/Units/types/unit-types'
import useImageHandler from '@/shared/hooks/useImageHandler'
import { useForm } from '@inertiajs/react'
import Select from '@/shared/components/Select'
import useImageStore from '@/shared/stores/useImageStore'
import ProductForm from '@/features/Products/components/ProductForm'
import TaxForm from '@/features/Products/components/TaxForm'

type Props = {
  brands: Brand
  units: Unit
}

const Create: React.FC<Props> = ({ brands, units }) => {
  // const { image, fileSize, handleImageChange, formatBytes } = useImageHandler()

  const { reset, setData, post, processing, errors, clearErrors, data } = useForm({
    id: null,
    name: '',
    type: '',
    unit_id: null,
    brand_id: null,
    category_id: null,
    sub_category_id: null,
    tax: null,
    tax_type: '',
    enabled_stock: null,
    alert_quantity: null,
    sku: '',
    barcode_type: '',
    expiry_period: null,
    expiry_period_type: null,
    enable_sr_no: null,
    weight: '',
    product_custom_field1: '',
    product_custom_field2: '',
    product_custom_field3: '',
    product_custom_field4: '',
    image: '',
    product_description: '',
    is_inactive: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
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
          <ProductForm handleChange={handleChange} setData={setData} errors={errors} data={data}/>
        </CardBorderTop.Content>
      </CardBorderTop>
      <CardBorderTop>
        <CardBorderTop.Content>
          <TaxForm handleChange={handleChange} setData={setData} errors={errors} data={data}/>
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
