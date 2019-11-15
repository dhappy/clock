import React from 'react'
import months from './zodiac'

let year = 365.2425 * 24 * 60 * 60

function percentThroughYear(time) {
  let start = new Date(`1/1/${time.getFullYear()}`)
  let delta = (time.getTime() - start.getTime()) / 1000
  return delta / year
}

function weight(month) {
  let delta = (month.ends.getTime() - month.starts.getTime()) / 1000
  console.log('w', delta, year)
  return (delta / year) * 100
}

export const DateTable = (props) => (
  <table>
    <thead><tr>
      <th>Month</th>
      <th>Symbol</th>
      <th>Starts</th>
      <th>Percent</th>
      <th>Weight</th>
    </tr></thead>
    <tbody>
      {months.map(month => (
        <tr>
          <td>{month.name}</td>
          <td>{month.symbol}</td>
          <td>{month.starts.toISOString()}</td>
          <td>{percentThroughYear(month.starts)}</td>
          <td>{weight(month)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)