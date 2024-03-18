import React, { PropsWithChildren } from 'react'

const ContentTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="mb-8 px-5 md:px-2">
            <h1 className="text-lg">{children}</h1>
        </div>
    )
}
export default ContentTitle
