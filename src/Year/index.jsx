import React from 'react'
import './style.scss'

export default (props) => {
  const now = props.time
  const { setTime, months, epoch } = props

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

  console.info('D', days)

  return (
    <ol className='months'
      style={{
        fontSize: '2.5rem',
        marginLeft: `calc(${-1 * (days + 1) * pxPerDay}px - 3rem)`,
      }}
    >
      {months.map((month, idx) => {
        let delta = (month.end.getTime() - month.start.getTime()) / 1000
        let days = delta / day
        return (
          <li
            title={month.name}
            style={{width: days * pxPerDay}}
            key={idx}
            onClick={() => setTime(month.start)}
          >
            <span
              className='icon'
              style={{borderRadius: '2.5rem'}}
            >
              {month.symbol}
            </span>
          </li>
        )
      })}
    </ol>
  )
}