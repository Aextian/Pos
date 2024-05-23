import Business from '@/Components/Settings/BusinessSettings/Business'
import Product from '@/Components/Settings/BusinessSettings/Product'
import Sale from '@/Components/Settings/BusinessSettings/Sale'
import Tax from '@/Components/Settings/BusinessSettings/Tax'
import MainLayout from '@/Layouts/MainLayout'
import React, { useState } from 'react'
import Pos from '@/Components/Settings/BusinessSettings/Pos'
import Purchases from '@/Components/Settings/BusinessSettings/Purchases'
import Dashboard from '@/Components/Settings/BusinessSettings/Dashboard'
import System from '@/Components/Settings/BusinessSettings/System'
import Prefixes from '@/Components/Settings/BusinessSettings/Prefixes'
import EmailSetting from '@/Components/Settings/BusinessSettings/EmailSetting'
import SmsSetting from '@/Components/Settings/BusinessSettings/SmsSetting'
import Modules from '@/Components/Settings/BusinessSettings/Modules'
import SecondaryButton from '@/Components/Shared/ui/Button/SecondaryButton'

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
  const list = ['Bussiness', 'Tax', 'Product', 'Sale', 'POS', 'Purchases', 'Dashboard', 'System', 'Prefixes', 'Email Settings', 'SMS Settings', 'Modules']
  const [open, setOpen] = useState('Bussiness')

  const handleClick = (name: string) => {
    setOpen(name)
    console.log(name)
  }

  return (
    <MainLayout>
      <div className="shadow-xl">
        <aside className="flex flex-row border">
          <ul className=" flex flex-col  border-r text-xs basis-[200px]">
            {list.map((item, index) => (
              <li className={`relative flex justify-center dark:text-gray-400  items-center ${open === item ? 'bg-cyan-600 text-white dark:text-white' : ''}`} key={index}>
                <button className="w-full border-b p-3 " onClick={() => handleClick(item)}>
                  <span className="inline-block pr-3">{item}</span>
                </button>
                {open === item && (
                  <span className="absolute inset-y-0 right-[-10px] flex items-center">
                    <span className="h-5 w-5 bg-cyan-600 transform rotate-45"></span>
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
      <div className="text-right mt-5">
        <SecondaryButton>Update Settings</SecondaryButton>
      </div>
    </MainLayout>
  )
}

export default Index
