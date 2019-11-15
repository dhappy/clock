import React from 'react'

export const MoonPhase = (props) => {
  let start = new Date(props.start)
  let end = new Date(props.end)

  if(start.getTime() > end.getTime()) {
    [ start, end ] = { end, start }
  }

  console.log("SE", start, end)

  let delta = (end.getTime() - start.getTime()) / 1000
  let months = (
    // Each month is 2.55ᴇ6s.
    delta / (2.55 * Math.pow(10, 6))
  )

  return (
    <div id='phases'>
      {Array.from(
        //{length: Math.ceil(months * 4)},
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