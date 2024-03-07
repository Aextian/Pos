import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const Create = () => {
  return (
    <MainLayout>
      <div className=" h-screen bg-slate-200 w-screen py-5 md:px-10">
        <div className="mb-10 px-5 md:px-2">
          <h1 className="text-lg">Users Manage users</h1>
        </div>

        <div className="relative flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
          <div className="flex flex-row justify-between items-center gap-2">
            <h1 className="text-lg font-medium">All users</h1>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
          <div className="flex justify-center items-center">pagination</div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Create
