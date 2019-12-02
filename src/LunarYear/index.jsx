import React from 'react'
import './style.scss'

export default function LunarYear(props) {
  const now = props.time
  const setTime = props.setTime
  let epoch = new Date('2021-1-13')
  let delta = (now.getTime() - epoch.getTime()) / 1000
  let month = 2.55 * Math.pow(10, 6)
  let year = month * 12
  let day = 24 * 60 * 60
  let daysPerYear = year / day
  let offset = delta % year
  let days = offset / day
  let pxPerDay = 10

  if(days < 0) {
    days = daysPerYear + days
  }

  let phase = (idx) => {
    switch(idx % 4) {
      case 0: return '🌑'
      case 1: return '🌓'
      case 2: return '🌕'
      default: return '🌗'
    }
  }

  return (
    <div id='phases'
      style={{
        fontSize: '5vh',
        width: daysPerYear * pxPerDay,
        marginLeft: `calc(${-1 * days * pxPerDay}px - 5vh)`,
      }}
    >
      {Array.from(
        {length: 12 * 4},
        (_, i) => (
          <span key={i}>{phase(i % 4)}</span>
        )
      )}
    </div>
  )
}