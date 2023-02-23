import React from 'react'

export function BtnClear({setValue}) {
  return (
    <div onClick={()=>setValue('')}
    className='w-full h-[50px] bg-red-900 rounded-[20px] flex justify-center items-center cursor-pointer'>
      Clear
    </div>
  )
}
