import React from 'react'
import TextInput from '../Shared/ui/TextInput'

interface Props {
  handleButtonClick: Function
  input: string
  setInput: Function
  clearInput: Function
  calculateResult: Function
  calcutor: boolean
}
const Calculator: React.FC<Props> = ({ handleButtonClick, input, setInput, calcutor, clearInput, calculateResult }) => {
  return (
    <>
      <div className={`absolute  bg-white  w-48 h-72 top-16 grid grid-rows-[40px__50px_1fr] border shadow-lg ${calcutor ? '' : 'hidden'}`}>
        <span className="absolute inset-x-0 flex items-center justify-center top-[-11px] z-[-1]">
          <span className="h-5 w-5 bg-slate-200 transform rotate-45"></span>
        </span>
        <div className="bg-slate-100 p-3 border border-b">
          <h1 className="text-black">Calculator</h1>
        </div>
        <div className="p-2 ">
          <TextInput className="bg-gray-400 w-full  h-9 rounded-lg flex justify-start items-center px-2 text-black text-sm overflow-x-aut text-right" value={input} readOnly />
        </div>
        <div className="grid grid-cols-4 gap-1 text-xs px-2 text-black pb-3">
          <button className="p-2 border rounded-md bg-red-800 text-white active:shadow-inner" onClick={() => clearInput()}>
            AC
          </button>
          <button className="p-2 border rounded-md bg-orange-400 text-white active:shadow-inner" onClick={() => clearInput()}>
            CE
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('%')}>
            %
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('/')}>
            ÷
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('*')}>
            X
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('-')}>
            -
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('+')}>
            +
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('0')}>
            0
          </button>
          <button className="p-2 border rounded-md bg-slate-200 active:shadow-inner" onClick={() => handleButtonClick('.')}>
            .
          </button>
          <button className="p-2 border rounded-md bg-green-800 text-white" onClick={() => calculateResult()}>
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default Calculator
