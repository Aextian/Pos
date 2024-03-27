import React, { PropsWithChildren } from 'react'

const CardBorderTop: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div className=" flex flex-col gap-1 bg-white border-t-4 border-cyan-500 text-xs overflow-x-auto  p-4 rounded-md shadow-lg">{children}</div>
        </>
    )
}

export default CardBorderTop
