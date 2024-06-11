import { FaArrowCircleDown, FaEdit, FaLink, FaMoneyBill, FaPlus, FaTrash } from 'react-icons/fa'
import Dropdown from '../../../shared/components/Dropdown'
import { Contact } from '../types/contact-types'

type Props = {
  setDelete: Function
  supplier: Contact
}

const TableRow: React.FC<Props> = ({ supplier, setDelete }) => {
  return (
    <>
      <tr className="whitespace-nowrap border-b text-[8px] odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800 md:text-xs">
        <td className="border-r py-4 pl-2 pr-6 text-left">{supplier.contact_id}</td>
        <td className="border-r py-4 pl-2 pr-6 text-left">{supplier.supplier_business_name}</td>
        <td className="border-r py-4 pl-2 pr-6 text-left uppercase">{supplier.name}</td>
        <td className="border-r py-4 pl-2 pr-6 text-left">{supplier.mobile}</td>
        <td className="border-r py-4 pl-2 pr-6 text-left"></td>
        <td className="border-r py-4 pl-2 pr-6 text-left"></td>
        <td className="relative border-r py-2 pl-2 pr-6 text-left">
          <div className="cursor-pointer rounded-br-lg rounded-tl-lg bg-cyan-300 px-1 py-1 text-xs text-white active:bg-cyan-400 dark:bg-white dark:text-slate-800 md:px-2 md:text-sm">
            <Dropdown>
              <Dropdown.Trigger>
                <div className="flex items-center justify-center gap-2">
                  Actions <FaArrowCircleDown />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Link href={route('contacts.show', supplier.id)}>
                  <div className="flex items-center gap-2 text-slate-500">
                    <FaLink size={15} /> View
                  </div>
                </Dropdown.Link>

                <Dropdown.Link href={route('contacts.edit', supplier.id) + '?type=supplier'}>
                  <div className="flex items-center gap-2 text-slate-500">
                    <FaEdit size={15} /> Edit
                  </div>
                </Dropdown.Link>
                <Dropdown.Link href={route('contacts.index')}>
                  <div className="flex items-center gap-2 text-slate-500">
                    <FaPlus size={15} /> Add Product
                  </div>
                </Dropdown.Link>
                <button
                  onClick={() => setDelete(supplier.id)}
                  className="hover:bg-customer-200 flex w-full items-center gap-3 space-x-2 whitespace-nowrap px-3 py-2 text-slate-500">
                  <FaTrash size={15} /> Delete
                </button>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableRow
