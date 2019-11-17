import React from 'react'

export const LunarYear = (props) => {
  let now = props.time
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

  return (
    <div id='phases'
      style={{
        width: daysPerYear * pxPerDay,
        marginLeft: -1 * days * pxPerDay,
      }}
    >
      {Array.from(
        {length: 12 * 4},
        (_, i) => {
          switch(i % 4) {
            case 0: return <span>🌑</span>
            case 1: return <span>🌓</span>
            case 2: return <span>🌕</span>
            case 3: return <span>🌗</span>
          }
        }
      )}
    </div>
  )
}