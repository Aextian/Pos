import Business from '@/features/Settings/BusinessSettings/Business'
import Product from '@/features/Settings/BusinessSettings/Product'
import Sale from '@/features/Settings/BusinessSettings/Sale'
import Tax from '@/features/Settings/BusinessSettings/Tax'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Pos from '@/features/Settings/BusinessSettings/Pos'
import Purchases from '@/features/Settings/BusinessSettings/Purchases'
import Dashboard from '@/features/Settings/BusinessSettings/Dashboard'
import System from '@/features/Settings/BusinessSettings/System'
import Prefixes from '@/features/Settings/BusinessSettings/Prefixes'
import EmailSetting from '@/features/Settings/BusinessSettings/EmailSetting'
import SmsSetting from '@/features/Settings/BusinessSettings/SmsSetting'
import Modules from '@/features/Settings/BusinessSettings/Modules'
import SecondaryButton from '@/shared/components/Button/SecondaryButton'

interface Props {
  business: {
    name: string
    currency: [
      {
        country: string
      },
    ]
  }
  currencies: {
    id: number
    currency: string
  }[]
}

const Index: React.FC<Props> = ({ business, currencies }) => {
  const list = [
    'Bussiness',
    'Tax',
    'Product',
    'Sale',
    'POS',
    'Purchases',
    'Dashboard',
    'System',
    'Prefixes',
    'Email Settings',
    'SMS Settings',
    'Modules',
  ]
  const [open, setOpen] = useState('Bussiness')

  const handleClick = (name: string) => {
    setOpen(name)
    console.log(name)
  }

  return (
    <MainLayout>
      <div className="shadow-xl">
        <aside className="flex flex-row border">
          <ul className="flex basis-[200px] flex-col border-r text-xs">
            {list.map((item, index) => (
              <li
                className={`relative flex items-center justify-center dark:text-gray-400 ${
                  open === item ? 'bg-cyan-600 text-white dark:text-white' : ''
                }`}
                key={index}
              >
                <button className="w-full border-b p-3" onClick={() => handleClick(item)}>
                  <span className="inline-block pr-3">{item}</span>
                </button>
                {open === item && (
                  <span className="absolute inset-y-0 right-[-10px] flex items-center">
                    <span className="h-5 w-5 rotate-45 transform bg-cyan-600"></span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="p-5">
            <Business open={open} business={business} currencies={currencies} />
            <Tax open={open} />
            <Product open={open} />
            <Pos open={open} />
            <Sale open={open} />
            <Purchases open={open} />
            <Dashboard open={open} />
            <System open={open} />
            <Prefixes open={open} />
            <EmailSetting open={open} />
            <SmsSetting open={open} />
            <Modules open={open} />
          </div>
        </aside>
      </div>
      <div className="mt-5 text-right">
        <SecondaryButton>Update Settings</SecondaryButton>
      </div>
    </MainLayout>
  )
}

export default Index
