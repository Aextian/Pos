import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaInfoCircle, FaUser, FaPlusCircle, FaBarcode, FaEdit } from 'react-icons/fa'
import TextInput from '../TextInput'
import ButtonCancel from '@/Components/Pos/ButtonCancel'
import ButtonMakePayment from '@/Components/Pos/ButtonMakePayment'
import ButtonSupend from '@/Components/Pos/ButtonSupend'
import PosButtonIcon from '@/Components/Pos/PosButtonIcon'
import PosTable from '@/Components/Pos/PosTable'

const PosForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-row">
          <div className="border items-center grid p-2">
            <FaLocationDot />
          </div>
          <select className="w-full p-1 text-[10px]" name="cars">
            <option value="">Select Location</option>
            <option value="">Mian</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <div className="border grid items-center p-2">
            <FaInfoCircle />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="border items-center grid p-2">
            <FaUser />
          </div>
          <select className="w-full p-1 text-[10px]" name="cars">
            <option value="">Walk-in Customer</option>
            <option value="">Mian</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <div className="border grid items-center p-2">
            <FaPlusCircle />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="border items-center grid p-2">
            <FaBarcode />
          </div>
          <TextInput className="w-full p-1 rounded-none text-xs" type="search" readOnly placeholder="Enter Product name /SKU/Scan bar" />
          <div className="border grid items-center p-2">
            <FaPlusCircle />
          </div>
        </div>
      </div>
      <PosTable />
      <div className="bg-gray-200 space-y-5 p-5">
        <div className="grid grid-flow-row md:flex flex-row gap-6">
          <div className="flex flex-row gap-5">
            <div>
              <h1 className="font-bold text-lg">Total</h1>
              <span>0</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Discount(-):</h1>
              <button>
                <FaEdit size={20} />
              </button>
              <span>0</span>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">Total Payable:</h1>
            <span>0</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">Items:</h1>
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
