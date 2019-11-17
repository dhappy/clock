import React, { useState } from 'react'
import './App.scss'
import { DateTime } from './DateTime'
import { LunarYear } from './LunarYear'
import { ZodiacYear } from './ZodiacYear'
import { Building } from './Building'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DateTable } from './DateTable'

function App() {
  const [time, setTime] = useState(new Date())

  document.onkeyup = evt => {
    let code = evt.keyCode
    if(code < 37 || code > 40) {
      return
    }
    let dir = 1
    if(code >= 39) { dir = -1 }
    if(code == 38 || code == 40) { dir *= 10 }
    setTime(new Date(
      time.getTime() + dir * (24 * 60 * 60 * 1000)
    ))
  }

  return (
    <Router>
      <div className="App">
        <Route path='/map' component={Building} />
        <Route path='/cal' component={DateTable} />
        <Route path='/' exact={true} render={() => (
          <React.Fragment>
            <div style={{
              position: 'absolute',
              left: '50%',
              border: '1px dashed black',
              height: '95vh',
            }} />
            <div>{time.toISOString()}</div>
            <DateTime time={time}/>
            <div className='center'>
              <LunarYear time={time}/>
              <ZodiacYear time={time}/>
            </div>
          </React.Fragment>
        )} />
      </div>
    </Router>
  );
}

export default App;
