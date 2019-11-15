import React from 'react'
import months from './zodiac'

export const ZodiacMonth = () => {
  let now = new Date()
  let epoch = new Date('2021-1-20')
  let delta = (now.getTime() - epoch.getTime()) / 1000
  let size = 365.25 * 24 * 60 * 60
  let offset = delta % size
  let days = offset / (24 * 60 * 60)

  return (
    <div id='months' style={{marginLeft: days * 100}}>
      {months.map(month => (
        <span title={month.name}>{month.symbol}</span>
      ))}
    </div>
  )
}