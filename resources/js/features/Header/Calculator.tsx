import React from 'react'
import TextInput from '../../shared/components/TextInput'

interface Props {
  handleButtonClick: Function
  input: string
  setInput: Function
  clearInput: Function
  calculateResult: Function
  calcutor: boolean
}
const Calculator: React.FC<Props> = ({
  handleButtonClick,
  input,
  setInput,
  calcutor,
  clearInput,
  calculateResult,
}) => {
  return (
    <>
      <div
        ref={close}
        className={`absolute top-16 grid h-72 w-48 grid-rows-[40px__50px_1fr] border bg-white shadow-lg ${
          calcutor ? '' : 'hidden'
        }`}
      >
        <span className="absolute inset-x-0 top-[-11px] z-[-1] flex items-center justify-center">
          <span className="h-5 w-5 rotate-45 transform bg-slate-200"></span>
        </span>
        <div className="border border-b bg-slate-100 p-3">
          <h1 className="text-black">Calculator</h1>
        </div>
        <div className="p-2">
          <TextInput
            className="overflow-x-aut flex h-9 w-full items-center justify-start rounded-lg bg-gray-400 px-2 text-right text-sm text-black"
            value={input}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-1 px-2 pb-3 text-xs text-black">
          <button
            className="rounded-md border bg-red-800 p-2 text-white active:shadow-inner"
            onClick={() => clearInput()}
          >
            AC
          </button>
          <button
            className="rounded-md border bg-orange-400 p-2 text-white active:shadow-inner"
            onClick={() => clearInput()}
          >
            CE
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('%')}
          >
            %
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('/')}
          >
            ÷
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('*')}
          >
            X
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('4')}
          >
            4
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            className="rounded-md border bg-slate-200 p-2 active:shadow-inner"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button className="rounded-md border bg-green-800 p-2 text-white" onClick={() => calculateResult()}>
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default Calculator
