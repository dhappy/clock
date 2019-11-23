import React from 'react'
import months from '../zodiac'
import './style.scss'

export default (props) => {
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
        fontSize: '11vh',
        width: daysPerYear * pxPerDay,
        marginLeft: `calc(${-1 * days * pxPerDay}px - 5.5vh)`,
      }}
    >
      {months.map((month, idx) => {
        let len = (month.end.getTime() - month.start.getTime()) / 1000
        let weight = len / year
        return (
          <span
            title={month.name}
            style={{flexGrow: weight * 100}}
            key={idx}
          >
            {month.symbol}
          </span>
        )
      })}
    </div>
  )
}