import React from 'react'

// Each month is 2.55ᴇ6s.

export const MoonPhase = (props) => {
  let start = new Date(props.start)
  let end = new Date(props.end)

  if(start.getTime() > end.getTime()) {
    [ start, end ] = { end, start }
  }

  console.log("SE", start, end)

  return (
    <div class='phases'>
      {for(let i = 0; end.getTime() )}
      <span>🌑</span>
      <span>🌓</span>
      <span>🌕</span>
      <span>🌗</span>
    </div>
  )
}