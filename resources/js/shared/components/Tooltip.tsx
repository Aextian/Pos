import React, { PropsWithChildren } from 'react'

interface Props {
  title?: string
  children: React.ReactNode
  content?: React.ReactNode
}

const Tooltip: React.FC<Props> = ({ title, children, content }) => {
  return (
    <>
      <div className="group relative inline-flex cursor-help justify-center text-cyan-500">
        {children}
        <div className="tooltip absolute z-10 mt-4 w-48 scale-0 rounded-lg border-2 border-slate-200 bg-white p-3 text-black shadow-lg outline-2 transition-all group-hover:scale-100 md:w-[300px]">
          <h1 className="text-xs font-semibold text-slate-600">{title}</h1>
          <span className="heading-5 mt-3 text-[10px] font-normal text-slate-500">{content}</span>
        </div>
      </div>
    </>
  )
}

export default Tooltip
