import MainLayout from '@/Layouts/MainLayout'
import React, { PropsWithChildren, useState } from 'react'

const Index: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleClick = (e, newActiveTab) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  return (
    <>
      <MainLayout>
        <div className=" h-screen bg-slate-200 w-screen py-5 md:px-10">
          <div className="mb-10 px-5 md:px-2">
            <h1 className="text-lg">Business Settings</h1>
          </div>

          <div className="relative flex flex-col gap-1 bg-white  border-t-4 border-cyan-500 text-xs overflow-x-auto mx-3 p-4 rounded-md">
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="max-w-md mx-auto">
                <div className="flex border-b border-gray-300">
                  {children.map((child) => (
                    <button
                      key={child.props.label}
                      className={`${activeTab === child.props.label ? 'border-b-2 border-purple-500' : ''} flex-1 text-gray-700 font-medium py-2`}
                      onClick={(e) => handleClick(e, child.props.label)}>
                      {child.props.label}
                    </button>
                  ))}
                </div>
                <div className="py-4">
                  {children.map((child) => {
                    if (child.props.label === activeTab) {
                      return <div key={child.props.label}>{child.props.children}</div>
                    }
                    return null
                  })}
                </div>
              </div>
              <div>2</div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Index
