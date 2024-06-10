import React, { PropsWithChildren } from 'react'

interface Props {
  title?: string
  children: React.ReactNode
  content: React.ReactNode
}

const Tooltip: React.FC<Props> = ({ title, children, content }) => {
  return (
    <>
      <div className="text-cyan-500 relative  group cursor-help inline-flex justify-center">
        {children}
        {/* left-[-145px]  */}
        <div className="tooltip absolute  p-3 mt-4 shadow-lg rounded-lg outline-2 bg-white border-2 w-48 md:w-[300px]  border-slate-200 scale-0 text-black group-hover:scale-100 transition-all z-10">
          <h1 className="font-semibold text-xs ">{title}</h1>
          <span className="text-[10px] font-normal mt-3 heading-5">{content}</span>
        </div>
      </div>
    </>
  )
}

export default Tooltip
