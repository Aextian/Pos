import React, { PropsWithChildren } from 'react'
interface MainCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

interface CardBorderTopComponent extends React.FC<MainCardProps> {
  Header: React.FC<PropsWithChildren>
  Title: React.FC<PropsWithChildren>
  Content: React.FC<PropsWithChildren>
}

const CardBorderTop: CardBorderTopComponent = ({ children, className }) => {
  return (
    <>
      <div
        className={`grid gap-5 rounded-md border-t-4 border-cyan-500 bg-white p-4 text-xs shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`}
      >
        {children}
      </div>
    </>
  )
}

const CardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-row justify-between">{children}</div>
}

const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1 className="flex items-center gap-3 text-sm font-semibold dark:text-white md:text-lg">{children}</h1>
    </>
  )
}

const CardContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid gap-5">{children}</div>
}

CardBorderTop.Header = CardHeader
CardBorderTop.Title = CardTitle
CardBorderTop.Content = CardContent

export default CardBorderTop
