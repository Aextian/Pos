import TextInput from '@/shared/components/TextInput'
import Tooltip from '@/shared/components/Tooltip'
import { FaExclamationCircle } from 'react-icons/fa'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
// import Select from '@/shared/components/Select'
import { Tax } from '@/features/Tax/types/taxes-types'
import Select from 'react-dropdown-select'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  data: any
  setData: any
  errors: any
  taxes: Tax[]
}

const TaxForm: React.FC<Props> = ({ handleChange, data, setData, errors, taxes }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <>
      <div className="grid grid-flow-row-dense gap-3 md:grid-cols-3">
        {/* <LabelRow>
          <SpanLabel>Applicable Tax::</SpanLabel>
          <Select name="type" value={data.type}>
            <option value="single">Single</option>
            <option value="variable">Variable</option>
          </Select>
        </LabelRow> */}

        {/* <LabelRow>
          <SpanLabel>Selling Price Tax Type:*:</SpanLabel>
          <Select name="tax_type" onChange={handleChange} value={data.tax_type}>
            <option value="inclusive">Inclusive</option>
            <option value="exclusive">Exclusive</option>
          </Select>
        </LabelRow> */}

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
            className={{
              control: (state: any) => (state.isFocused ? 'border-red-600' : 'border-grey-300'),
            }}
            options={options}
            values={[]}
            onChange={function (value: { value: string; label: string }[]): void {
              throw new Error('Function not implemented.')
            }}
          />
        </LabelRow>
      </div>
      <div className="overflow-auto md:p-8">
        <table className="w-full text-left text-[8px] text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
