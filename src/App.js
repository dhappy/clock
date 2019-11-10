import React from 'react'
import './App.css'
import { Fecha as DateTime } from './Date'
import { MoonPhase } from './MoonPhase'

function App() {
  return (
    <div className="App">
		<DateTime />
    <MoonPhase start='2020/1/21' end='2021/1/20'/>
    <div id='phase'>
      <img src='.../moon/phase/0/svg.svg'/>
      <img src='.../moon/phase/2/svg.svg'/>
      <img src='.../moon/phase/4/svg.svg'/>
      <img src='.../moon/phase/6/svg.svg'/>
      <div id='months'>
        <span title='Capricorn'>♑</span>
        <span title='Aquarius'>♒</span>
        <span title='Pisces'>♓</span>
        <span title='Aries'>♈</span>
        <span title='Taurus'>♉</span>
        <span title='Gemini'>♊</span>
        <span title='Cancer'>♋</span>
        <span title='Leo'>♌</span>
        <span title='Virgo'>♍</span>
        <span title='Libra'>♎</span>
        <span title='Scorpio'>♏</span>
        <span title='Ophiuchus'>⛎</span>
        <span title='Sagittarius'>♐</span>
      </div>
    </div>
    </div>
  );
}

export default App;
