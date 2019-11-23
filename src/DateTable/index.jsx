import React from 'react'
import months from '../zodiac'
import './style.scss'

let year = 365.2425 * 24 * 60 * 60

function percentThroughYear(time) {
  let start = new Date(`1/1/${time.getFullYear()}`)
  let delta = (time.getTime() - start.getTime()) / 1000
  return delta / year
}

function weight(month) {
  let delta = (month.end.getTime() - month.start.getTime()) / 1000
  return (delta / year) * 100
}

export const DateTable = (props) => (
  <React.Fragment>
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
            <td>{month.start.toISOString()}</td>
            <td>{percentThroughYear(month.start)}</td>
            <td>{weight(month)}</td>
          </tr>
        ))}
        <tr>
          <td colspan='4'></td>
          <td>∑ = {
            months.reduce(
              (acc, m) => acc + weight(m),
              0
            )
          }</td>
        </tr>
      </tbody>
    </table>
    <div></div>
  </React.Fragment>
)