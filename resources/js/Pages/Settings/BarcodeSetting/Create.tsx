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
              className="p-2 text-xs mt-2 w-full rounded-none "
              placeholder="Sticker Sheet Setting Name"
            />
          </LabelRow>
          <LabelRow>
            <SpanLabel>Sticker Sheet setting Description:*</SpanLabel>
            <TextArea cols={30} rows={3} placeholder="Sticker Sheet setting Description"></TextArea>
          </LabelRow>
          <label className="flex gap-3 items-center">
            <TextInput
              type="checkbox"
              className="p-2 rounded-none"
              placeholder="Sticker Sheet Setting Name"
            />
            <SpanLabel> Continous feed or rolls:*</SpanLabel>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <LabelRow>
              <SpanLabel>Additional top margin (in inches)</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0  dark:text-white dark:border-slate-500 ">
                  <FaArrowLeft />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Width left margin (in inches)</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaTextWidth />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Width of sticker (in inches)</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaTextHeight />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Paper width (in inches)</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaTextWidth />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Paper height (in inches)</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaTextHeight />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="Sticker Sheet Setting Name"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Stickers in one row:*</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaEllipsis />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="Sticker in one row "
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Distance between two rows (In Inches):*</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaArrowsUpDown />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="0"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>Distance between two columns (In Inches):*</SpanLabel>
              <div className="flex">
                <div className="border px-3 grid place-content-center border-r-0 dark:text-white dark:border-slate-500">
                  <FaArrowsLeftRight />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="0"
                />
              </div>
            </LabelRow>
            <LabelRow>
              <SpanLabel>No.of Sticker per sheet:</SpanLabel>
              <div className="flex">
                <div className="border dark:border-slate-500 px-3 grid place-content-center border-r-0 dark:text-white">
                  <FaTh />
                </div>
                <TextInput
                  className="p-2 text-xs rounded-none w-full  focus:border focus:border-cyan-50 "
                  placeholder="No.of Sticker per sheet"
                />
              </div>
            </LabelRow>
          </div>
          <label className="flex gap-3 items-center">
            <TextInput
              type="checkbox"
              className="p-2 rounded-none"
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
