import React from 'react'
import months from '../zodiac'
import './style.scss'

export const ZodiacYear = (props) => {
  let now = props.time
  let epoch = new Date('2021-1-20')
  let delta = (now.getTime() - epoch.getTime()) / 1000
  let daysPerYear = 365.2425
  let day = 24 * 60 * 60
  let year = daysPerYear * day
  let offset = delta % year
  let days = offset / day
  let pxPerDay = 10

  if(days < 0) {
    days = daysPerYear + days
  }

  return (
    <div id='months'
      style={{
        width: daysPerYear * pxPerDay,
        marginLeft: -1 * days * pxPerDay,
      }}
    >
      {months.map(month => (
        <span title={month.name}>{month.symbol}</span>
      ))}
    </div>
  )
}