import React from 'react'
import './App.scss'
import { Fecha as DateTime } from './Date'
import { MoonPhase } from './MoonPhase'
import { ZodiacMonth } from './ZodiacMonth'
import { Building } from './Building'

function App() {
  return (
    <div className="App">
      <Building />
      <DateTime />
      <div className='center'>
        <MoonPhase start='2020/1/21' end='2021/1/20'/>
        <ZodiacMonth />
      </div>
    </div>
  );
}

export default App;
