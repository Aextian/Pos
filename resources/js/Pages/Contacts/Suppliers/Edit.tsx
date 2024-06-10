import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import CardBorderTop from '@/shared/components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import InputError from '@/shared/components/InputError'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { useForm } from '@inertiajs/react'
import { FaPersonArrowUpFromLine, FaUser } from 'react-icons/fa6'
import { Supplier } from '@/features/Suppliers/types/supplier-types'

type Props = {
  supplier: Supplier
}

const Edit: React.FC<Props> = ({ supplier }) => {
  const { reset, setData, put, processing, errors, data } = useForm({
    name: supplier.name,
    email: supplier.email,
    supplier_business_name: supplier.supplier_business_name,
    contact_id: supplier.contact_id,
    contact_type: supplier.type,
    points_status: Number(supplier.points_status) == 1 ? true : false,
    type: supplier.type,
    tax_number: supplier.tax_number,
    city: supplier.city,
    state: supplier.state,
    country: supplier.country,
    landmark: supplier.landmark,
    opening_balance: supplier.opening_balance,
    mobile: supplier.mobile,
    landline: supplier.landline,
    alternate_number: supplier.alternate_number,
    pay_term_number: supplier.pay_term_number,
    pay_term_type: supplier.pay_term_type,
    custom_field1: supplier.custom_field1,
    custom_field2: supplier.custom_field2,
    custom_field3: supplier.custom_field3,
    custom_field4: supplier.custom_field4,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    setData((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? ((e.target as HTMLInputElement).checked ? true : false) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('supplier.update', supplier.id)
      const response = put(url, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          reset()
        },
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  console.log(data)

  return (
    <MainLayout>
      <ContentTitle>
        Suppliers <span className="text-xs text-gray-300">Manage your suppliers</span>
      </ContentTitle>

      <CardBorderTop>
        <CardBorderTop.Header>
          <CardBorderTop.Title>Edit contact</CardBorderTop.Title>
        </CardBorderTop.Header>
        <CardBorderTop.Content>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <LabelRow>
                <SpanLabel>Contact type:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <select
                    onChange={handleChange}
                    name="type"
                    className="ps-10 w-full p-2 text-xs rounded-md  dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                    value={data.contact_type}>
                    <option value="">Please Select</option>
                    <option value="supplier">Suppliers</option>
                    <option value="customer">Customers</option>
                    <option value="both">Both (Suppliers and Customer)</option>
                  </select>
                </div>
                <InputError message={errors.type} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Name:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaUser size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.name}
                    name="name"
                    className=" ps-10 w-full p-2 text-xs"
                  />
                </div>
                <InputError message={errors.name} className="mt-2" />
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <LabelRow>
                <SpanLabel>Business Name:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.supplier_business_name}
                    name="supplier_business_name"
                    className="ps-10 w-full text-xs"
                  />
                </div>
                <InputError message={errors.supplier_business_name} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Contact ID:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.contact_id}
                    name="contact_id"
                    className="ps-10 w-full text-xs"
                  />
                </div>
                <InputError message={errors.contact_id} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Tax Number:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.tax_number}
                    name="tax_number"
                    className="ps-10 w-full text-xs"
                  />
                </div>
                <InputError message={errors.tax_number} className="mt-2" />
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <LabelRow>
                <SpanLabel>Opening Balance:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.opening_balance}
                    name="opening_balance"
                    className="ps-10 w-full text-xs"
                  />
                </div>
                <InputError message={errors.opening_balance} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Pay term:</SpanLabel>
                <div className="flex">
                  <TextInput
                    onChange={handleChange}
                    value={data.pay_term_number}
                    name="pay_term_number"
                    className="w-full text-xs rounded-none"
                    placeholder="Pay term"
                  />
                  <select
                    onChange={handleChange}
                    name="pay_term_type"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={data.pay_term_type}>
                    <option value="">Please Select</option>
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                <InputError message={errors.pay_term_type} className="mt-2" />
              </LabelRow>

              <label className="inline-flex items-center gap-3 ">
                <TextInput
                  onChange={handleChange}
                  className="mt-2 rounded"
                  type="checkbox"
                  name="points_status"
                  checked={data.points_status}
                />
                <span className="dark:text-white">Allow gain points</span>
              </label>
              <InputError message={errors.points_status} className="mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <LabelRow>
                <SpanLabel>Email:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.email}
                    name="email"
                    className="ps-10 w-full text-xs"
                    placeholder="Email"
                  />
                </div>
                <InputError message={errors.email} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Mobile:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.mobile}
                    name="mobile"
                    className="ps-10 w-full text-xs"
                    placeholder="Mobile"
                  />
                </div>
                <InputError message={errors.mobile} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Alternate contact number:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.alternate_number}
                    name="alternate_number"
                    className="ps-10 w-full text-xs"
                    placeholder="Alternate contact number"
                  />
                </div>
                <InputError message={errors.alternate_number} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Landline:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.landline}
                    name="landline"
                    className="ps-10 w-full text-xs"
                    placeholder="Landline"
                  />
                </div>
                <InputError message={errors.landline} className="mt-2" />
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <LabelRow>
                <SpanLabel>City:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.city}
                    name="city"
                    className="ps-10 w-full text-xs"
                    placeholder="City"
                  />
                </div>
                <InputError message={errors.city} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>State:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.state}
                    name="state"
                    className="ps-10 w-full text-xs"
                    placeholder="State"
                  />
                </div>
                <InputError message={errors.state} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Country:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.country}
                    name="country"
                    className="ps-10 w-full text-xs"
                    placeholder="Country"
                  />
                </div>
                <InputError message={errors.country} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Landmark:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    value={data.landmark}
                    name="landmark"
                    className="ps-10 w-full text-xs"
                    placeholder="Landmark"
                  />
                </div>
                <InputError message={errors.landmark} className="mt-2" />
              </LabelRow>

              <hr className="md:col-span-4 my-5" />

              <LabelRow>
                <SpanLabel>Custom Field 1:</SpanLabel>
                <div className="relative">
                  <TextInput
                    onChange={handleChange}
                    value={data.custom_field1}
                    name="custom_field1"
                    className=" w-full text-xs"
                    placeholder="Custom Field 1"
                  />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 2:</SpanLabel>
                <div className="relative">
                  <TextInput
                    onChange={handleChange}
                    value={data.custom_field2}
                    name="custom_field2"
                    className=" w-full text-xs"
                    placeholder="Custom Field 2"
                  />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 3:</SpanLabel>
                <div className="relative">
                  <TextInput
                    onChange={handleChange}
                    value={data.custom_field3}
                    name="custom_field3"
                    className=" w-full text-xs"
                    placeholder="Custom Field 3"
                  />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 4:</SpanLabel>
                <div className="relative">
                  <TextInput
                    onChange={handleChange}
                    value={data.custom_field4}
                    name="custom_field4"
                    className=" w-full text-xs"
                    placeholder="Custom Field 4"
                  />
                </div>
              </LabelRow>
            </div>

            <div className="flex justify-end">
              <PrimaryButton type="submit" className=" md:px-10" disabled={processing}>
                {processing ? 'Updating...' : 'Update'}
              </PrimaryButton>
            </div>
          </form>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Edit
