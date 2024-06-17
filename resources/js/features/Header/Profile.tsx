import React from 'react'
import SecondaryButton from '../../shared/components/Button/SecondaryButton'
import { Link } from '@inertiajs/react'

const Profile: React.FC<{ profile: boolean }> = ({ profile }) => {
  return (
    <>
      <div
        className={`absolute right-[-35px] top-[44px] grid grid-rows-[1fr_60px] bg-slate-800 shadow-lg md:right-0 md:h-64 md:w-72 ${
          profile ? '' : 'hidden'
        }`}>
        <div className="mt-5 flex justify-center text-white">
          <h5>Pos</h5>
        </div>
        <div className="flex justify-between space-x-3 bg-white p-3">
          <SecondaryButton className="text-xs">Profile</SecondaryButton>
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25">
            Sign out
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
