import { FaArrowCircleDown, FaEdit, FaLink, FaMoneyBill, FaPlus, FaTrash } from 'react-icons/fa'
import Dropdown from '../Shared/ui/Dropdown'

interface Supplier {
  id: number
  contact_id: number
  supplier_business_name: string
  name: string
  mobile: string
}

type Props = {
  handleShowDelete: Function
  supplier: Supplier
}

const TableRow: React.FC<Props> = ({ supplier, handleShowDelete }) => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4 text-left">{supplier.contact_id}</td>
        <td className="px-6 py-4 text-left">{supplier.supplier_business_name}</td>
        <td className="px-6 py-4 text-left">{supplier.name}</td>
        <td className="px-6 py-4 text-left">{supplier.mobile}</td>
        <td className="px-6 py-4 text-left"></td>
        <td className="px-6 py-4 text-left relative">
          <div className="p-1 md:p-2 md:text-sm text-xs  rounded-tl-lg rounded-br-lg dark:bg-white dark:text-slate-800 bg-cyan-300 text-white active:bg-cyan-400 cursor-pointer">
            <Dropdown>
              <Dropdown.Trigger>
                <div className=" flex items-center gap-2 justify-center  ">
                  Actions <FaArrowCircleDown />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Link href={route('supplier.show', supplier.id)}>
                  <div className=" flex items-center gap-2  text-slate-500">
                    <FaLink size={15} /> View
                  </div>
                </Dropdown.Link>

                <Dropdown.Link href={route('supplier.edit', supplier.id)}>
                  <div className=" flex items-center gap-2 text-slate-500 ">
                    <FaEdit size={15} /> Edit
                  </div>
                </Dropdown.Link>
                <Dropdown.Link href={route('supplier.index')}>
                  <div className=" flex items-center gap-2 text-slate-500 ">
                    <FaPlus size={15} /> Add Product
                  </div>
                </Dropdown.Link>
                <button
                  onClick={() => handleShowDelete(supplier.id)}
                  className="w-full hover:bg-slate-200 py-2 px-3 gap-3 flex items-center space-x-2 whitespace-nowrap text-slate-500">
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
