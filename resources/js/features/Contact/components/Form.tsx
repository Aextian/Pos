import React, { PropsWithChildren } from 'react'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import InputError from '@/shared/components/InputError'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextInput from '@/shared/components/TextInput'
import { FaCircleInfo, FaLocationPin, FaPersonArrowUpFromLine, FaUser, FaUserGroup } from 'react-icons/fa6'
import Tooltip from '@/shared/components/Tooltip'
import { FaEnvelope, FaInfo, FaMap, FaMobile, FaMoneyBill, FaPhone } from 'react-icons/fa'
import Select from '@/shared/components/Select'
import { Contact } from '../types/contact-types'

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
  data: Contact
  errors: any
  processing: boolean
}

export const Form: React.FC<PropsWithChildren<FormProps>> = ({
  handleChange,
  data,
  onSubmit,
  errors,
  processing,
}) => {
  return (
    <>
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <LabelRow>
            <SpanLabel>Contact type:*</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaPersonArrowUpFromLine size={15} />
                </div>
              </div>
              <select
                onChange={handleChange}
                name="type"
                className="w-full rounded-md border-gray-300 p-2 ps-10 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
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
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaUser size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="name"
                className="w-full p-2 ps-10 text-xs"
                placeholder="Name"
              />
            </div>
            <InputError message={errors.name} className="mt-2" />
          </LabelRow>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {(data.type === 'supplier' || data.type === 'both') && (
            <LabelRow>
              <SpanLabel>Business Name:*</SpanLabel>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                    <FaPersonArrowUpFromLine size={15} />
                  </div>
                </div>
                <TextInput
                  onChange={handleChange}
                  name="supplier_business_name"
                  className="w-full ps-10 text-xs"
                />
              </div>
              <InputError message={errors.supplier_business_name} className="mt-2" />
            </LabelRow>
          )}

          <LabelRow>
            <SpanLabel>Contact ID:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaPersonArrowUpFromLine size={15} />
                </div>
              </div>
              <TextInput onChange={handleChange} name="contact_id" className="w-full ps-10 text-xs" />
            </div>
            <InputError message={errors.contact_id} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Tax Number:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaInfo size={15} />
                </div>
              </div>
              <TextInput onChange={handleChange} name="tax_number" className="w-full ps-10 text-xs" />
            </div>
            <InputError message={errors.tax_number} className="mt-2" />
          </LabelRow>
        </div>

        <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
          <LabelRow>
            <SpanLabel>Opening Balance:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaPersonArrowUpFromLine size={15} />
                </div>
              </div>
              <TextInput onChange={handleChange} value={0} className="w-full ps-10 text-xs" type="number" />
            </div>
          </LabelRow>
          <LabelRow>
            <SpanLabel>
              Pay term:
              <Tooltip
                title="Payments to be paid for purchases/sales within the given time period"
                content="All upcomming or due payments will be displayed in dashboard-Payment Due section">
                <FaCircleInfo />
              </Tooltip>
            </SpanLabel>
            <div className="flex">
              <TextInput
                onChange={handleChange}
                name="pay_term_number"
                className="w-full rounded-none text-xs"
                placeholder="Pay term"
              />
              <select
                onChange={handleChange}
                name="pay_term_type"
                className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
                value={data.pay_term_type}>
                <option value="">Please Select</option>
                <option value="days">Days</option>
                <option value="months">Months</option>
              </select>
            </div>
            <InputError message={errors.pay_term_number} className="mt-2" />
            <InputError message={errors.pay_term_type} className="mt-2" />
          </LabelRow>
          {(data.type === 'customer' || data.type === 'both') && (
            <>
              <LabelRow>
                <SpanLabel>Customer Group:</SpanLabel>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                      <FaUserGroup size={15} />
                    </div>
                  </div>
                  <Select className="w-full rounded-md ps-10 text-xs" onChange={handleChange} name="type">
                    <option value="">None</option>
                    <option value="Group1">Group1</option>
                    <option value="Group2">Group2</option>
                  </Select>
                </div>
              </LabelRow>

              <LabelRow>
                <SpanLabel>Credit Limit:</SpanLabel>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                      <FaMoneyBill size={15} />
                    </div>
                  </div>
                  <TextInput
                    onChange={handleChange}
                    name="credit_limit"
                    className="w-full ps-10 text-xs"
                    type="number"
                  />
                </div>
              </LabelRow>
            </>
          )}

          <label className="flex items-center gap-3">
            <TextInput onChange={handleChange} className="rounded" type="checkbox" name="points_status" />
            <span className="flex items-center gap-2 dark:text-white">
              Allow gain points{' '}
              <Tooltip title="Check if customer can gain points">
                <FaCircleInfo />
              </Tooltip>
            </span>
            <InputError message={errors.points_status} className="mt-2" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 border-t pt-5 md:grid-cols-2 lg:grid-cols-4">
          <LabelRow>
            <SpanLabel>Email:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaEnvelope size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="email"
                className="w-full ps-10 text-xs"
                placeholder="Email"
              />
            </div>
            <InputError message={errors.email} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Mobile:*</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaMobile size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="mobile"
                className="w-full ps-10 text-xs"
                placeholder="Mobile"
              />
            </div>
            <InputError message={errors.mobile} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Alternate contact number:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaPhone size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="alternate_number"
                className="w-full ps-10 text-xs"
                placeholder="Alternate contact number"
              />
            </div>
            <InputError message={errors.alternate_number} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Landline:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaPhone size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="landline"
                className="w-full ps-10 text-xs"
                placeholder="Landline"
              />
            </div>
            <InputError message={errors.landline} className="mt-2" />
          </LabelRow>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <LabelRow>
            <SpanLabel>City:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaMap size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="city"
                className="w-full ps-10 text-xs"
                placeholder="City"
              />
            </div>
            <InputError message={errors.city} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>State:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaLocationPin size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="state"
                className="w-full ps-10 text-xs"
                placeholder="State"
              />
            </div>
            <InputError message={errors.state} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Country:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaMap size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="country"
                className="w-full ps-10 text-xs"
                placeholder="Country"
              />
            </div>
            <InputError message={errors.country} className="mt-2" />
          </LabelRow>

          <LabelRow>
            <SpanLabel>Landmark:</SpanLabel>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                  <FaLocationPin size={15} />
                </div>
              </div>
              <TextInput
                onChange={handleChange}
                name="landmark"
                className="w-full ps-10 text-xs"
                placeholder="Landmark"
              />
            </div>
            <InputError message={errors.landmark} className="mt-2" />
          </LabelRow>

          <hr className="my-5 md:col-span-4" />

          <LabelRow>
            <SpanLabel>Custom Field 1:</SpanLabel>
            <div className="relative">
              <TextInput
                onChange={handleChange}
                name="custom_field1"
                className="w-full text-xs"
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
                className="w-full text-xs"
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
                className="w-full text-xs"
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
                className="w-full text-xs"
                placeholder="Custom Field 1"
              />
            </div>
          </LabelRow>
        </div>

        <div className="flex justify-end">
          <PrimaryButton type="submit" className="md:px-10" disabled={processing}>
            {processing ? 'Submitting...' : 'Submit'}
          </PrimaryButton>
        </div>
      </form>
    </>
  )
}
