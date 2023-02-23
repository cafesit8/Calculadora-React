import React from 'react'

export function Botones3({addValue}) {
  return (
    <div className='flex justify-between'>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-blue-700 w-[80px] h-[50px] flex justify-center items-center text-[20px] rounded-xl max-[425px]:w-[60px] cursor-pointer'>
        7
      </div>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-blue-700 w-[80px] h-[50px] flex justify-center items-center text-[20px] rounded-xl max-[425px]:w-[60px] cursor-pointer'>
        8
      </div>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-blue-700 w-[80px] h-[50px] flex justify-center items-center text-[20px] rounded-xl max-[425px]:w-[60px] cursor-pointer'>
        9
      </div>
      <div onClick={e=>addValue(e.target.textContent)}
      className='bg-green-900 w-[80px] h-[50px] flex justify-center items-center text-[25px] rounded-xl max-[425px]:w-[60px] cursor-pointer'>
        *
      </div>
    </div>
  )
}
