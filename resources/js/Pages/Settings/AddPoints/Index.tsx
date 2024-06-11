import CardBorderTop from '@/Components/CardBorderTop'
import CardContent from '@/Components/CardContent'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

const Index = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>Add Points</ContentTitle>
        <div className="max-w-4xl">
          <CardBorderTop>
            <LabelRow>
              <SpanLabel>Amount.*</SpanLabel>
              <TextInput placeholder="Amount" className="w-full p-2 text-xs" />
            </LabelRow>
            <LabelRow>
              <SpanLabel>
                A percentage of the purchase amount to be credited to the points account of the customer
              </SpanLabel>
              <TextInput placeholder="Amount" className="w-full p-2 text-xs" />
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
