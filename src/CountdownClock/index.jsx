import React, { useState } from 'react'
import DateTime from '../DateTime'
import { LunarYear } from '../LunarYear'
import ZodiacYear from '../ZodiacYear'
import EventList from '../EventList'

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/#article-header-id-4
const useAnimationFrame = callback => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  
  const animate = time => {
    if(previousTimeRef.current !== undefined) {
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

export default () => {
  const [time, setTime] = (
    React.useState(new Date())
  )

  useAnimationFrame(deltaTime => {
    setTime(oldTime => new Date(oldTime.getTime() + deltaTime))
  })

  React.useEffect(() => {
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

  let downRef = React.useRef()

  React.useEffect(() => {
    let listeners = {
      mousedown: evt => {
        console.debug('MD!!', downRef.current)
        downRef.current = true
      },
      mouseup: evt => {
        console.debug('MU!!', downRef.current)
        downRef.current = false
      },
      mousemove: evt => {
        console.debug('MM!!', downRef.current)
        downRef.current = false
      },
    }

    for(let key in listeners) {
      document.addEventListener(key, listeners[key])
    }
      
    return () => {
      for(let key in listeners) {
        document.removeEventListener(key, listeners[key])
      }
    }
  })

  return <React.Fragment>
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
}