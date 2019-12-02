import React from 'react'
import DateTime from '../DateTime'
import LunarYear from '../LunarYear'
import Year from '../Year'
import EventList from '../EventList'
import './style.scss'
import gregorian from '../gregorian'
import zodiac from '../zodiac'
import { motion } from "framer-motion"

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

  const onpan = (evt, info) => {
    let dir = info.delta.x / Math.abs(info.delta.x)
    if(info.delta.x === 0) dir = 0

    setTime(currTime => new Date(
      currTime.getTime() + dir * (24 * 60 * 60 * 1000)
    ))
  }

  return <motion.div onPan={onpan}>
    <div id='iso'>{time.toISOString()}</div>
    <DateTime time={time}/>
    <div className='center'>
      <div style={{
        position: 'absolute',
        left: '50%',
        border: '1px dashed black',
        height: '45vh',
      }} />
      <EventList time={time} setTime={setTime}/>
      <Year months={zodiac} epoch={new Date('2021-1-20')} time={time} setTime={setTime}/>
      <Year months={gregorian} epoch={new Date('2021-1-1')} time={time} setTime={setTime}/>
      <LunarYear time={time} setTime={setTime}/>
    </div>
  </motion.div>
}