import TextInput from '@/Components/TextInput'
import React from 'react'

const Pos: React.FC<{ open: string }> = ({ open }) => {
  return (
    <>
      <div className={`${open === 'POS' ? '' : 'hidden'}  grid gap-5 `}>
        <div className="text-[10px] space-y-3 dark:text-white">
          <h2 className="text-lg">Add Keyboard shorcuts:</h2>
          <p>
            Shortcut should be the names of the keys separated by '+'; Example: <span className="font-bold">ctrl+shift+b, ctrl+h</span>
          </p>
          <p className="font-bold">Available key names are:</p>
          <p> shift, ctrl, alt, backspace, tab, enter, return, capslock, esc, escape, space, pageup, pagedown, end, home, left, up, right, down, ins, del, and plus</p>
        </div>
        <table>
          <thead className="bg-gray-200">
            <tr className="text-xs text-left ">
              <th className="p-3">Operations</th>
              <th className="p-3 whitespace-nowrap">Keyboard Shorcut</th>
            </tr>
          </thead>
          <tbody className="text-[10px] dark:text-white">
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Express Checkout:</td>
              <td>
                <TextInput className="w-full text-xs" value=" ctrl+shift+e" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Pay & Checkout::</td>
              <td>
                <TextInput className="w-full text-xs" value="shift+p" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Draft:</td>
              <td>
                <TextInput className="w-full text-xs" value=" shift+d" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Cancel:</td>
              <td>
                <TextInput className="w-full text-xs" value="shift+c" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Go to product quantity:</td>
              <td>
                <TextInput className="w-full text-xs" value="f2" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Edit Discount:</td>
              <td>
                <TextInput className="w-full text-xs" value="shift+i" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Edit Order tax:</td>
              <td>
                <TextInput className="w-full text-xs" value="shift+t" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Add Payment Row:</td>
              <td>
                <TextInput className="w-full text-xs" value="shift+r" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Finalize Payment:</td>
              <td>
                <TextInput className="w-full text-xs" value="shift+f" />
              </td>
            </tr>
            <tr className="even:bg-gray-100 even:text-black">
              <td className="p-3">Add New Product:</td>
              <td>
                <TextInput className="w-full text-xs" value="f4" />
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-bold dark:text-white">Pos Settings:</h2>
        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Disable pay & checkout</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Disable Draft</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Disable Express Checkout</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Don't show product suggestion</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Don't show recent transaction</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Disable Discount</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Disable Order tax</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Subtotal Editable</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Disable Suspend Sale</span>
        </label>

        <label className="inline-flex items-center gap-3 dark:text-white">
          <TextInput type="checkbox" className="rounded-none p-2 outline-none" />
          <span className="text-[10px]">Enabled service staff in product line</span>
        </label>
      </div>
    </>
  )
}

export default Pos
