import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const Create = () => {
  return (
    <MainLayout>
      <div className=" bg-slate-200 py-3 md:px-10 ">
        <div className="mb-5 px-5 md:px-2">
          <h1 className="text-lg">Add user</h1>
        </div>
        <div className="relative flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
          <div className="flex flex-row justify-between items-center gap-2"></div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor=""> Prefix</label>
              <input type="text" className="mb-3 rounded-md p-1" placeholder="Mr/Mrs/Miss" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor=""> First Name:*</label>

              <input type="text" className="mb-3 rounded-md p-1" placeholder="First Name" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor=""> Last Name:</label>

              <input type="text" className="mb-3 rounded-md p-1" placeholder="Last Name" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email:*</label>

              <input type="text" className="mb-3 rounded-md p-1" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Role:*</label>
              <select className="p-1 rounded-md">
                <option value="">Admin</option>
                <option value="">Super Admin</option>
                <option value="">Price Checker</option>
                <option value="">Cashier Roxas</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Username:</label>
              <input type="text" className="mb-3 rounded-md p-1" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password:</label>
              <input type="text" className="mb-3 rounded-md p-1" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Current Password:*:</label>
              <input type="text" className="mb-3 rounded-md p-1" placeholder="Email" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Sales Commision Percentage(%):</label>
              <input type="text" className="mb-3 rounded-md p-1" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-x-3">
                <input type="checkbox" name="" id="" />
                <span>Restricted Commision Percentage</span>
              </div>
              <div className="space-x-3">
                <input type="checkbox" name="" id="" />
                <span>Is active</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
          <div className="flex justify-center items-center">pagination</div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Create
