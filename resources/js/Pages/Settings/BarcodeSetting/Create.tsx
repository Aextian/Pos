import CardBorderTop from '@/Components/CardBorderTop'
import ContentTitle from '@/shared/components/ContentTitle'
import LabelRow from '@/shared/components/LabelRow'
import SpanLabel from '@/shared/components/SpanLabel'
import TextArea from '@/shared/components/TextArea'
import PrimaryButton from '@/shared/components/Button/PrimaryButton'
import TextInput from '@/shared/components/TextInput'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import { FaArrowLeft, FaArrowUp, FaTextHeight, FaTextWidth, FaTh } from 'react-icons/fa'
import { FaArrowsLeftRight, FaArrowsUpDown, FaEllipsis } from 'react-icons/fa6'

const Create = () => {
  return (
    <>
      <MainLayout>
        <ContentTitle>Add Barcode Sticker Setting</ContentTitle>
        <CardBorderTop>
          <LabelRow>
            <SpanLabel>Sticker Sheet setting Name:*</SpanLabel>
            <TextInput
              className="mt-2 w-full rounded-none p-2 text-xs"
              placeholder="Sticker Sheet Setting Name"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Sticker Sheet setting Description:*</SpanLabel>
            <TextArea cols={30} rows={3} placeholder="Sticker Sheet setting Description"></TextArea>
          </LabelRow>
          <label className="flex items-center gap-3">
            <TextInput
              type="checkbox"
              className="rounded-none p-2"
              placeholder="Sticker Sheet Setting Name"
            />
            <SpanLabel> Continous feed or rolls:*</SpanLabel>
          </label>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <LabelRow>
              <SpanLabel>Additional top margin (in inches)</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaArrowLeft />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Width left margin (in inches)</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaTextWidth />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Width of sticker (in inches)</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaTextHeight />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Paper width (in inches)</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaTextWidth />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Paper height (in inches)</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaTextHeight />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Stickers in one row:*</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaEllipsis />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="Sticker in one row "
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Distance between two rows (In Inches):*</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaArrowsUpDown />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="0"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Distance between two columns (In Inches):*</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaArrowsLeftRight />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="0"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>No.of Sticker per sheet:</SpanLabel>
              <div className="flex">
                <div className="grid place-content-center border border-r-0 px-3 dark:border-slate-500 dark:text-white">
                  <FaTh />
                </div>
                <TextInput
                  className="w-full rounded-none p-2 text-xs focus:border focus:border-cyan-50"
                  placeholder="No.of Sticker per sheet"
                />
              </div>
            </LabelRow>
          </div>
          <label className="flex items-center gap-3">
            <TextInput
              type="checkbox"
              className="rounded-none p-2"
              placeholder="Sticker Sheet Setting Name"
            />
            <SpanLabel>Set as default:*</SpanLabel>
          </label>
          <div className="flex justify-end">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </CardBorderTop>
      </MainLayout>
    </>
  )
}

export default Create
