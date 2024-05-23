import React from 'react'
import SecondaryButton from '../Shared/ui/Button/SecondaryButton'
import { Link } from '@inertiajs/react'

const Profile: React.FC<{ profile: boolean }> = ({ profile }) => {
  return (
    <>
      <div className={`bg-slate-800 w-72 h-64 absolute top-[44px] md:right-0  right-[-35px] grid  grid-rows-[1fr_60px] shadow-lg ${profile ? '' : 'hidden'}`}>
        <div className="flex justify-center text-white mt-5">
          <h5>Pos</h5>
        </div>
        <div className="bg-white flex justify-between p-3 ">
          <SecondaryButton>Profile</SecondaryButton>
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
            Sign out
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
