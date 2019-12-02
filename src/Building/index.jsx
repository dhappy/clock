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

  let colorFor = {
    ᚦ: '#8F8F8F',
    ᛗ: '#FC8403',
    ᛁ: 'white',
    ᚡ: 'yellow',
    ᛠ: '#0DD',
    ᛃ: 'pink',
    ᚫ: '#B87333',
    ᛏ: '#987122',
    ᛊ: 'rgba(0,0,0,.9)',
    '🌳': '#0D0',
  }

  let colorNameFor = {
    ᚦ: 'silver',
    ᛗ: 'orange',
    ᛁ: 'white',
    ᚡ: 'yellow',
    ᛠ: 'cyan',
    ᛃ: 'pink',
    ᚫ: 'copper',
    ᛏ: 'gold',
    ᛊ: 'black',
    '🌳': 'green',
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

  return <React.Fragment>
    <p>The Revolution came in three parts. They all "started" with the same guy — a burned-out schiophrenic hacker who believed a compelling vision of an attainable utopia would spur the social action necessary to bring it about.</p>
    <p>These parts were:</p>
    <ul>
      <li>The Gaianist Church</li>
      <li>The Department of Happiness</li>
      <li>The Open Market</li>
    </ul>
    <p>The driving force behind the changes was software. The <acronym title='Department of Happiness'>DoH</acronym> <acronym title='headquarters'>HQ</acronym> was geared toward satisfying the whims of the onsite development team.</p>
    <p></p>
    <hr/>
    <table id='hq'><tbody>
      {teams.map((team, idx) => {
        let space = spaces[spaceFor[team.rune]]
        if(space) {
          return <tr key={idx}>
            <td
              className='rune'
              style={{backgroundColor: colorFor[team.rune]}}
            >
              {team.rune}
            </td>
            <td className='name'>
              {team.name + (team.inhabitants ? ` (${team.inhabitants})` : '')}
            </td>
            <td className='desc'>
              <ReactMarkdown source={spaces[spaceFor[team.rune]]}/>
            </td>
          </tr>
        }
      })}
    </tbody></table>
  </React.Fragment>
}