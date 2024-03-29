import React, { PropsWithChildren } from 'react'

interface Props {
    title: string
    children: React.ReactNode
    content: React.ReactNode
}

const Tooltip: React.FC<Props> = ({ title, children, content }) => {
    return (
        <>
            <div className="text-cyan-500 relative group cursor-help inline-block">
                {children}
                <div className="tooltip absolute left-[-145px] p-5 mt-4 shadow-lg rounded-lg outline-2 bg-white border-1 w-[300px]  border-black scale-0 text-black group-hover:scale-100 transition-all mouseover">
                    <h1 className="font-medium">{title}</h1>
                    <span className="font=sm">{content}</span>
                </div>
            </div>
        </>
    )
}

export default Tooltip
