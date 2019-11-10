import React from 'react'

export const MoonPhase = (props) => {
  let start = new Date(props.start)
  let end = new Date(props.end)

  if(start.getTime() > end.getTime()) {
    [ start, end ] = { end, start }
  }

  console.log("SE", start, end)

  let delta = (end.getTime() - start.getTime()) / 1000
  let quarters = new Array(Math.floor(
    // Each month is 2.55ᴇ6s.
    (delta / (2.55 * Math.pow(10, 6))) * 4
  ))

  quarters = [1,2,3,4,5,6,7,8,9,1,11,1,1,1,1,1,1,1,1,11,1,11,1,1,1,1]

  return (
    <div className='phases'>
      {quarters.map((_, i) => {
        switch(i % 4) {
          case 0: return <span>🌑</span>
          case 1: return <span>🌓</span>
          case 2: return <span>🌕</span>
          case 3: return <span>🌗</span>
        }
      })}
    </div>
  )
}