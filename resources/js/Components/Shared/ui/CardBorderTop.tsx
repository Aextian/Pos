import React, { PropsWithChildren } from 'react'

// Define an interface that extends React.FC and includes the custom properties
interface CardBorderTopComponent extends React.FC<PropsWithChildren> {
  Header: React.FC<PropsWithChildren>
  Title: React.FC<PropsWithChildren>
  Content: React.FC<PropsWithChildren>
}

const CardBorderTop: CardBorderTopComponent = ({ children }) => {
  return (
    <>
      <div className=" grid gap-5 bg-white border-t-4 border-cyan-500  text-xs p-4 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 ">{children}</div>
    </>
  )
}

const CardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex justify-between">{children}</div>
}

const CardTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1 className="text-sm md:text-lg font-bold dark:text-white flex gap-3 items-center">{children}</h1>
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
