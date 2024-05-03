import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import ContentTitle from '@/Components/ContentTitle'
import LabelRow from '@/Components/GlobalComponent/LabelRow'
import SpanLabel from '@/Components/GlobalComponent/SpanLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const Index = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>Add Points</ContentTitle>
        <div className="max-w-4xl ">
          <CardBorderTop>
            <LabelRow>
              <SpanLabel>Amount.*</SpanLabel>
              <TextInput placeholder="Amount" className="text-xs p-2 w-full" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>A percentage of the purchase amount to be credited to the points account of the customer</SpanLabel>
              <TextInput placeholder="Amount" className="text-xs p-2 w-full" />
            </LabelRow>
            <div className="flex justify-end">
              <PrimaryButton>Update</PrimaryButton>
            </div>
          </CardBorderTop>
        </div>
      </MainLayout>
    </>
  )
}
export default Index
