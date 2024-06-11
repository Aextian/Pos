import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaInfoCircle, FaUser, FaPlusCircle, FaBarcode, FaEdit } from 'react-icons/fa'
import TextInput from '../../shared/components/TextInput'
import ButtonCancel from '@/features/Pos/ButtonCancel'
import ButtonMakePayment from '@/features/Pos/ButtonMakePayment'
import ButtonSupend from '@/features/Pos/ButtonSupend'
import PosButtonIcon from '@/features/Pos/PosButtonIcon'
import PosTable from '@/features/Pos/PosTable'

const PosForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex flex-row">
          <div className="grid items-center border p-2">
            <FaLocationDot />
          </div>
          <select className="w-full p-1 text-[10px]" name="cars">
            <option value="">Select Location</option>
            <option value="">Mian</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <div className="grid items-center border p-2">
            <FaInfoCircle />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="grid items-center border p-2">
            <FaUser />
          </div>
          <select className="w-full p-1 text-[10px]" name="cars">
            <option value="">Walk-in Customer</option>
            <option value="">Mian</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <div className="grid items-center border p-2">
            <FaPlusCircle />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="grid items-center border p-2">
            <FaBarcode />
          </div>
          <TextInput
            className="w-full rounded-none p-1 text-xs"
            type="search"
            readOnly
            placeholder="Enter Product name /SKU/Scan bar"
          />
          <div className="grid items-center border p-2">
            <FaPlusCircle />
          </div>
        </div>
      </div>
      <PosTable />
      <div className="space-y-5 bg-gray-200 p-5">
        <div className="grid grid-flow-row flex-row gap-6 md:flex">
          <div className="flex flex-row gap-5">
            <div>
              <h1 className="text-lg font-bold">Total</h1>
              <span>0</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Discount(-):</h1>
              <button>
                <FaEdit size={20} />
              </button>
              <span>0</span>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Total Payable:</h1>
            <span>0</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">Items:</h1>
            <span>0</span>
          </div>
        </div>

        <ButtonCancel />
        <div className="grid items-center gap-2">
          <ButtonMakePayment />
          <ButtonSupend />
        </div>
      </div>
    </>
  )
}

export default PosForm
