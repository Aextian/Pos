import TextInput from '@/shared/components/TextInput'
import Tooltip from '@/shared/components/Tooltip'
import { FaExclamationCircle } from 'react-icons/fa'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import { Tax } from '@/features/Tax/types/taxes-types'
import Select, { ActionMeta, SingleValue } from 'react-select'
import { ChangeEvent } from '@/shared/types/events'
import { primarySelectStyle, selectTheme } from '@/shared/utils/styleUtils'
import { useState } from 'react'
import { SelectOption } from '@/shared/types/options'
import { Product } from '../types/products-type'

type Props = {
  handleChange: (e: ChangeEvent) => void
  handleSelectChange: (
    fieldName: string,
  ) => (selectedOption: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void
  data: Product
  setData: React.Dispatch<React.SetStateAction<Product>>
  errors: Error
  taxes: Tax[]
}

const TaxForm: React.FC<Props> = ({ handleChange, data, setData, errors, taxes, handleSelectChange }) => {
  const taxType = [
    { value: 'inclusive', label: 'Inclusive' },
    { value: 'exclusive', label: 'Exclusive' },
  ]

  const selectTaxes = taxes.map((tax) => ({
    value: tax.id,
    label: tax.name,
  }))

  const productType = [
    { value: 'single', label: 'Single' },
    { value: 'variable', label: 'Variable' },
  ]

  return (
    <>
      <div className="grid grid-flow-row-dense gap-3 md:grid-cols-3">
        <LabelRow>
          <SpanLabel>Applicable Tax::</SpanLabel>
          <Select
            styles={primarySelectStyle}
            options={selectTaxes}
            className="text-xs"
            onChange={handleSelectChange('tax_id')}
            theme={selectTheme}
          />
        </LabelRow>

        <LabelRow>
          <SpanLabel>Selling Price Tax Type:*:</SpanLabel>
          <Select
            styles={primarySelectStyle}
            defaultValue={[taxType[0]]}
            isSearchable={false}
            options={taxType}
            theme={selectTheme}
            onChange={handleSelectChange('tax_type')}
          />
        </LabelRow>

        <LabelRow>
          <div className="flex items-center gap-3">
            <SpanLabel> Product Type:* :</SpanLabel>
            <Tooltip
              title="Default profit margin for the product"
              content="(You can manage default profit margin in Business Settings.)">
              <FaExclamationCircle size={15} />
            </Tooltip>
          </div>
          <Select
            defaultValue={[productType[0]]}
            styles={primarySelectStyle}
            isSearchable={false}
            classNamePrefix="select"
            name="colors"
            options={productType}
            className="text-xs"
            onChange={handleSelectChange('type')}
            theme={selectTheme}
          />
        </LabelRow>
      </div>

      <div className="overflow-auto md:p-8">
        <table className="w-full text-left text-[8px] text-gray-500 shadow-lg dark:text-gray-400">
          <thead className="text-bold bg-green-400 uppercase text-white dark:bg-gray-700 dark:text-gray-400 md:text-sm">
            <tr>
              <th scope="col" className="py-3 md:px-2">
                Default Purchase Price
              </th>
              <th scope="col" className="flex items-center gap-3 py-3 md:px-2">
                <span>x Margin(%)</span>
                <Tooltip
                  title="Default profit margin for the product"
                  content="(You can manage default profit margin in Business Settings.)">
                  <FaExclamationCircle size={15} />
                </Tooltip>
              </th>

              <th scope="col" className="nowrap py-3 md:px-2">
                Default Selling Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-r px-3 py-4">
                <div className="flex w-40 flex-col text-xs font-bold text-black md:w-full md:max-w-80">
                  <LabelRow>
                    <SpanLabel>Exc.tax:*</SpanLabel>
                    <TextInput type="text" className="w-full p-2 text-xs" placeholder="Exc.tax" />
                  </LabelRow>
                  <LabelRow>
                    <SpanLabel>Inc.tax:*</SpanLabel>
                    <TextInput type="text" className="w-full p-2 text-xs" placeholder="Inc.tax" />
                  </LabelRow>
                </div>
              </td>
              <td className="border-r px-3 py-4">
                <div className="flex w-40 flex-col text-xs font-bold text-black md:w-full md:max-w-80">
                  <TextInput type="text" className="w-full p-2 text-xs" />
                </div>
              </td>
              <td className="border-r px-3 py-4">
                <div className="flex w-40 flex-col text-xs font-bold text-black md:w-full md:max-w-80">
                  <LabelRow>
                    <SpanLabel>Ixc.tax:*</SpanLabel>
                  </LabelRow>
                  <TextInput type="text" className="w-full p-2 text-xs" placeholder="Inc.tax" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TaxForm
