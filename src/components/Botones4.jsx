import React from 'react'
import {evaluate} from 'mathjs'

export function Botones4({addValue, setValue, value}) {

  function calculate(){
    if ((value)) {
      const result = evaluate(value)
      setValue(result)
    }
  }

  return (
    <div className='flex justify-between'>
      <div onClick={calculate}
      className='bg-blue-700 w-[80px] h-[50px] flex justify-center items-center text-[20px] rounded-xl max-[425px]:w-[60px]'>
        =
      </div>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-blue-700 w-[80px] h-[50px] flex justify-center items-center text-[20px] rounded-xl max-[425px]:w-[60px]'>
        0
      </div>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-blue-700 w-[80px] h-[50px] flex justify-center items-center text-[20px] rounded-xl max-[425px]:w-[60px]'>
        .
      </div>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-green-900 w-[80px] h-[50px] flex justify-center items-center text-[25px] rounded-xl max-[425px]:w-[60px]'>
        /
      </div>
    </div>
  )
}
