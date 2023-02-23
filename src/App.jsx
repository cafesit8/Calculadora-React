import { useState } from 'react'
import {Screen} from './components/Screen'
import { Botones1 } from './components/Botones1'
import { Botones2 } from './components/Botones2'
import { Botones3 } from './components/Botones3'
import { Botones4 } from './components/Botones4'
import { BtnClear } from './components/BtnClear'

function App() {
  const [value, setValue] = useState('')

  const addValue=(btnValue)=>{
    setValue(value + btnValue)
  }

  return (
    <div className="App bg-sky-900 w-[400px] flex flex-col gap-3 p-3 rounded-lg max-[425px]:w-[90%]">
      <Screen value={value} />
      <Botones1 addValue={(btnValue)=>addValue(btnValue)} />
      <Botones2 addValue={(btnValue)=>addValue(btnValue)} />
      <Botones3 addValue={(btnValue)=>addValue(btnValue)} />
      <Botones4 addValue={(btnValue)=>addValue(btnValue)} setValue={(btnValue)=>setValue(btnValue)} 
      value={value} />
      <BtnClear setValue={(eliminatedValue)=>setValue(eliminatedValue)}/>
    </div>
  )
}

export default App