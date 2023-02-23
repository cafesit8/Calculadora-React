import React from 'react'

export function Screen({value}) {
  return (
    <div className='bg-black w-full h-[50px] rounded-lg flex justify-end items-center p-3'>
      {value}
    </div>
  )
}
