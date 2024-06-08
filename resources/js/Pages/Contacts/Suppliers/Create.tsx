import PrimaryButton from '@/Components/Shared/ui/Button/PrimaryButton'
import CardBorderTop from '@/Components/Shared/ui/CardBorderTop'
import ContentTitle from '@/Components/Shared/ui/ContentTitle'
import InputError from '@/Components/Shared/ui/InputError'
import LabelRow from '@/Components/Shared/ui/LabelRow'
import SpanLabel from '@/Components/Shared/ui/SpanLabel'
import TextInput from '@/Components/Shared/ui/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import { useForm } from '@inertiajs/react'
import { FaPersonArrowUpFromLine, FaUser } from 'react-icons/fa6'

const Create = () => {
  const { reset, setData, post, processing, errors, data } = useForm({
    name: '',
    email: '',
    supplier_business_name: '',
    contact_id: '',
    points_status: '',
    type: '',
    tax_number: '',
    city: '',
    state: '',
    country: '',
    landmark: '',
    mobile: '',
    landline: '',
    alternate_number: '',
    pay_term_number: '',
    pay_term_type: '',
    custom_field1: '',
    custom_field2: '',
    custom_field3: '',
    custom_field4: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target

    setData((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? ((e.target as HTMLInputElement).checked ? true : false) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const url = route('supplier.store')
      const response = post(url, {
        preserveScroll: true,
        preserveState: true,
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
          <CardBorderTop.Title>Add new contact</CardBorderTop.Title>
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
                    value={data.type}>
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
                  <TextInput onChange={handleChange} name="name" className=" ps-10 w-full p-2 text-xs" />
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
                  <TextInput onChange={handleChange} name="contact_id" className="ps-10 w-full text-xs" />
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
                  <TextInput onChange={handleChange} name="tax_number" className="ps-10 w-full text-xs" />
                </div>
                <InputError message={errors.tax_number} className="mt-2" />
              </LabelRow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center ">
              <LabelRow>
                <SpanLabel>Opening Balance:</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput onChange={handleChange} className="ps-10 w-full text-xs" />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Pay term:</SpanLabel>
                <div className="flex">
                  <TextInput
                    onChange={handleChange}
                    name="pay_term_number"
                    className="w-full text-xs rounded-none"
                    placeholder="Pay term"
                  />
                  <select
                    onChange={handleChange}
                    name="pay_term_type"
                    className=" w-full p-2 text-xs   dark:bg-slate-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 "
                    value={data.pay_term_type}>
                    <option value="">Please Select</option>
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                <InputError message={errors.pay_term_number} className="mt-2" />
                <InputError message={errors.pay_term_type} className="mt-2" />
              </LabelRow>

              <label className="flex items-center gap-3 ">
                <TextInput
                  onChange={handleChange}
                  className=" rounded"
                  type="checkbox"
                  name="points_status"
                  value={1}
                />
                <span className="dark:text-white">Allow gain points</span>
                <InputError message={errors.points_status} className="mt-2" />
              </label>
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
                    name="email"
                    className="ps-10 w-full text-xs"
                    placeholder="Email"
                  />
                </div>
                <InputError message={errors.email} className="mt-2" />
              </LabelRow>

              <LabelRow>
                <SpanLabel>Mobile:*</SpanLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                      <FaPersonArrowUpFromLine size={20} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
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
                    name="custom_field3"
                    className=" w-full text-xs"
                    placeholder="Custom Field 1"
                  />
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Custom Field 4:</SpanLabel>
                <div className="relative">
                  <TextInput
                    onChange={handleChange}
                    name="custom_field4"
                    className=" w-full text-xs"
                    placeholder="Custom Field 1"
                  />
                </div>
              </LabelRow>
            </div>
            <div className="flex justify-end">
              <PrimaryButton type="submit" className=" md:px-10" disabled={processing}>
                {processing ? 'Submitting...' : 'Submit'}
              </PrimaryButton>
            </div>
          </form>
        </CardBorderTop.Content>
      </CardBorderTop>
    </MainLayout>
  )
}

export default Create
