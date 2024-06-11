import CardBorderTop from '@/Components/CardBorderTop'
import CardHeader from '@/Components/CardHeader'
import CardTitle from '@/Components/CardTitle'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const Create = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>
          Add <span className="text-xs text-gray-300">new invoice layout</span>
        </ContentTitle>
        <CardBorderTop>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            <LabelRow>
              <SpanLabel>Layout name:*</SpanLabel>
              <TextInput placeholder="Layout name" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Design:*</SpanLabel>
              <select
                name="cars"
                className="mt-2 w-full rounded-md border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
              >
                <option value="">New Reciept</option>
                <option value="" selected>
                  Classic
                </option>
                <option value="">Teleclick</option>
                <option value="">Pos</option>
                <option value="">Pos2</option>
                <option value="">Elegant</option>
                <option value="">Detaild</option>
                <option value="">Columnize taxes</option>
              </select>
              <span className="text-[10px] dark:text-white">Used for browser based printing</span>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Invoice Logo:</SpanLabel>
              <TextInput type="file" placeholder="Layout name" className="w-full p-2 text-xs" />
              <span className="text-[10px] dark:text-white">Max 1 MB,jpeg,gif,png formats only</span>
            </LabelRow>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-2" />
              <SpanLabel>Show invoice Logo</SpanLabel>
            </label>
          </div>
          <LabelRow>
            <SpanLabel>Sub Heading Line 1:</SpanLabel>
            <TextArea className="w-full" cols={30} rows={10}></TextArea>
          </LabelRow>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <LabelRow>
              <SpanLabel>Sub Heading Line 2:</SpanLabel>
              <TextInput placeholder="Sub Heading Line 1" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Sub Heading Line 3:</SpanLabel>
              <TextInput placeholder="Sub Heading Line 2" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Sub Heading Line 4:</SpanLabel>
              <TextInput placeholder="Sub Heading Line 3" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Sub Heading Line 4:</SpanLabel>
              <TextInput placeholder="Sub Heading Line 4" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Sub Heading Line 5:</SpanLabel>
              <TextInput placeholder="Sub Heading Line 5" className="w-full p-2 text-xs" />
            </LabelRow>
          </div>
        </CardBorderTop>

        <CardBorderTop>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <LabelRow>
              <SpanLabel>Invoice heading</SpanLabel>
              <TextInput placeholder="Invoice" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Heading Suffix for not paid</SpanLabel>
              <TextInput placeholder="Heading Suffix for not paid" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Heading suffix for paid:</SpanLabel>
              <TextInput placeholder="Heading suffix for paid" className="w-full p-2 text-xs" />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Quatation Heading</SpanLabel>
              <TextInput placeholder="Quatation" className="w-full p-2 text-xs" />
            </LabelRow>

            <LabelRow>
              <SpanLabel>Invoice no.label</SpanLabel>
              <TextInput placeholder="Invoice No." className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Quatation no label:</SpanLabel>
              <TextInput placeholder="Quatation No." className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Date Label</SpanLabel>
              <TextInput placeholder="Date" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Date time format</SpanLabel>
              <TextInput placeholder="Date time format" className="w-full p-2 text-xs" />
              <span className="text-[10px]">
                Enter date and time format in PHP datetime format. If blank business date time format will be
                applied
              </span>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Sales Person Label</SpanLabel>
              <TextInput placeholder="Sales Person Label" className="w-full p-2 text-xs" />
            </LabelRow>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show business name</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show location name</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show sales name</SpanLabel>
            </label>
          </div>

          <CardTitle>Fields for customer details:</CardTitle>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show client ID</SpanLabel>
            </label>
            <LabelRow>
              <SpanLabel>Client ID Label</SpanLabel>
              <TextInput placeholder="Client ID Label" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Client tax number label</SpanLabel>
              <TextInput placeholder="Client tax number label" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 1</SpanLabel>
            </LabelRow>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 2</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 3</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 4</SpanLabel>
            </label>
          </div>

          <CardTitle>Fields To Be Shown In Location Address:</CardTitle>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Landmark</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>City</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>State</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Country</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Zip Code</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 1</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 2</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 3</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field 4</SpanLabel>
            </label>
          </div>

          <CardTitle>Fields For Communication Details:</CardTitle>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Mobile number</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Alternate number</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Email</SpanLabel>
            </label>
          </div>

          <CardTitle>Fields For Tax Details:</CardTitle>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Tax 1 details</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Tax 2 details</SpanLabel>
            </label>
          </div>
        </CardBorderTop>

        <CardBorderTop>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <LabelRow>
              <SpanLabel>Product Label</SpanLabel>
              <TextInput placeholder="Product" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Quantity Label</SpanLabel>
              <TextInput placeholder="Quantity" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Unit Price Label</SpanLabel>
              <TextInput placeholder="Unit Price" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Subtotal Label</SpanLabel>
              <TextInput placeholder="Subtotal" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Category or HSN code Label</SpanLabel>
              <TextInput placeholder="HSN" className="w-full p-2 text-xs" />
            </LabelRow>
          </div>
          <CardTitle>Product details to be shown</CardTitle>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Show brand</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Show SKU</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Show category code or HSN code</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>show sale description</SpanLabel>
            </label>
            <span className="text-[10px] text-gray-400">(Product IMEI or Serial Number)</span>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field1</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field2</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field3</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>Custom Field4</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
              <SpanLabel>show product expiry</SpanLabel>
            </label>
          </div>
        </CardBorderTop>

        <CardBorderTop>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <LabelRow>
              <SpanLabel>Subtotal Label</SpanLabel>
              <TextInput placeholder="Subtotal" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Discount Label</SpanLabel>
              <TextInput placeholder="Discount" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Tax Label</SpanLabel>
              <TextInput placeholder="Tax" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Total Label</SpanLabel>
              <TextInput placeholder="Layout name" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Total Due Label (Current sale):</SpanLabel>
              <TextInput placeholder="Total" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Amount Paid Label:</SpanLabel>
              <TextInput placeholder="Total Due" className="w-full p-2 text-xs" />
            </LabelRow>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show Payment information</SpanLabel>
            </label>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show Barcode</SpanLabel>
            </label>
            <LabelRow>
              <SpanLabel>Total Due Label (All sale):</SpanLabel>
              <TextInput placeholder="All Balance Due" className="w-full p-2 text-xs" />
            </LabelRow>
            <label className="inline-flex items-center gap-3">
              <TextInput type="checkbox" className="p-3" />
              <SpanLabel>Show total balance due (All sale)</SpanLabel>
            </label>
          </div>
        </CardBorderTop>

        <CardBorderTop>
          <LabelRow>
            <SpanLabel>Footer text:</SpanLabel>
            <TextArea cols={30} rows={10}></TextArea>
          </LabelRow>
          <label className="inline-flex items-center gap-3">
            <TextInput type="checkbox" placeholder="Layout name" className="p-3" />
            <SpanLabel>Set as default </SpanLabel>
          </label>
        </CardBorderTop>

        <CardBorderTop>
          <CardHeader>
            <CardTitle>Credit Note/Sell Return Details</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <LabelRow>
              <SpanLabel>Heading:</SpanLabel>
              <TextInput placeholder="Credit Note" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Reference Number</SpanLabel>
              <TextInput placeholder="Ref. No" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>Total Amount</SpanLabel>
              <TextInput placeholder="Credit Amount" className="w-full p-2 text-xs" />
            </LabelRow>
          </div>
        </CardBorderTop>
        <div className="flex justify-end">
          <PrimaryButton>Save</PrimaryButton>
        </div>
      </MainLayout>
    </>
  )
}

export default Create
