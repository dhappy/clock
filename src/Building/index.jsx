import './style.scss'
import teams from '../realms'
import spaces from '../spaces'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export const Building = (props) => {
  let spaceFor = {
    ᚦ: 'bodega',
    ᛗ: 'kitchen',
    ᛁ: 'lounge',
    ᚡ: 'bar',
    ᛠ: 'office space',
    ᛃ: 'gym',
    ᚫ: 'brothel',
    ᛏ: 'pharmacopia',
    ᛊ: 'hotel',
    '🌳': 'park',
  }

  let interests = {
    pink: 'peace',
    silver: 'trade',
    cyan: 'war',
    copper: 'shelter',
    gold: 'worship',
    white: 'substances',
    black: 'sustenance',
    green: 'non-represented life',
    orange: 'threat mitigation',
    yellow: 'over-taxed',
  }

  return <table>
    {teams.reverse().map((team, idx) => {
      let space = spaces[spaceFor[team.rune]]
      if(space) {
        return <tr key={idx}>
          <td className='rune'>{team.rune}</td>
          <td className='name'>
            {team.name + (team.inhabitants ? ` (${team.inhabitants})` : '')}
          </td>
          <td className='desc'>
            <ReactMarkdown source={spaces[spaceFor[team.rune]]}/>
          </td>
        </tr>
      }
    })}
  </table>
}