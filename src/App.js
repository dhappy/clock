import React, { useState, useEffect } from 'react'
import './App.scss'
import DateTime from './DateTime'
import { LunarYear } from './LunarYear'
import ZodiacYear from './ZodiacYear'
import { Building } from './Building'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DateTable } from './DateTable'
import EventList from './EventList'

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/#article-header-id-4
const useAnimationFrame = callback => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  
  const animate = time => {
    if(previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }
  
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, []) // Make sure the effect runs only once
}

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(function setupListener() {
    let listener = evt => {
      let code = evt.keyCode
      if(code < 37 || code > 40) {
        return
      }
      let dir = -1
      if(code >= 39) { dir *= -1 }
      if(code === 38 || code === 40) { dir *= 10 }
      setTime(new Date(
        time.getTime() + dir * (24 * 60 * 60 * 1000)
      ))
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  })

  useAnimationFrame(deltaTime => {
    setTime(oldTime => new Date(oldTime.getTime() + deltaTime))
  })

  return (
    <Router>
      <div className="App">
        <Route path='/map' component={Building} />
        <Route path='/cal' component={DateTable} />
        <Route path='/' exact={true} render={() => (
          <React.Fragment>
            <div id='iso'>{time.toISOString()}</div>
            <DateTime time={time}/>
            <div className='center'>
              <div style={{
                position: 'absolute',
                left: '50%',
                border: '1px dashed black',
                height: '45vh',
              }} />
              <LunarYear time={time}/>
              <ZodiacYear time={time}/>
              <EventList time={time}/>
            </div>
          </React.Fragment>
        )} />
      </div>
    </Router>
  );
}

export default App;
