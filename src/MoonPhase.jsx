import React from 'react'

// Each month is 2.55ᴇ6s.

export const MoonPhase = (props) => {
  let start = new Date(props.start)
  let end = new Date(props.end)

  if(start.getTime() > end.getTime()) {
    [ start, end ] = { end, start }
  }

  console.log("SE", start, end)

  let delta = (end.getTime() - start.getTime()) / 1000
  let months = delta / (2.55 * Math.pow(10, 6))

  console.log("DM", delta, months)

  return (
    <div class='phases'>
      {months.map((_, i) => (
        switch(i % 4) {
          case 0: <span>'🌑'</span>
          case 1: <span>🌓</span>
          case 2: <span>🌕</span>
          case 3: <span>🌗</span>
        }
      )


          }
        }
      <span>🌗</span>
    </div>
  )
}