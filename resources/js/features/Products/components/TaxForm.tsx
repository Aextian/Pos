import TextInput from '@/shared/components/TextInput'
import Tooltip from '@/shared/components/Tooltip'
import { FaExclamationCircle } from 'react-icons/fa'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
  data: any
  setData: any
  errors: any
}

const TaxForm: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-flow-row-dense gap-3 md:grid-cols-3">
        <LabelRow>
          <SpanLabel>Applicable Tax::</SpanLabel>
          <select
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
            name="type">
            <option value="" selected>
              All
            </option>
            <option value="">Single</option>
            <option value="">Variable</option>
          </select>
        </LabelRow>
        <LabelRow>
          <SpanLabel>Selling Price Tax Type:*:</SpanLabel>
          <select
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
            name="type">
            <option value="" selected>
              All
            </option>
            <option value="">Single</option>
            <option value="">Variable</option>
          </select>
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

          <select
            className="w-full border-gray-300 p-2 text-xs focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
            name="type">
            <option value="" selected>
              All
            </option>
            <option value="">Single</option>
            <option value="">Variable</option>
          </select>
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
