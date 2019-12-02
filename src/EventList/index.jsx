import React from 'react'
import ballot from '../ballot.svg'
import './style.scss'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import turkey from '../turkey.svg'
import donkey from '../democrat.svg'
import seal from '../seal.svg'

const BigTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 15,
  },
}))(Tooltip);

const entries = [
  {
    title: 'Thanksgiving',
    img: turkey,
    bg: 'green',
    at: new Date('2019-11-28'),
  },
  {
    title: 'Democratic Convention',
    img: donkey,
    bg: 'orange',
    at: new Date('2020-05-20'),
  },
  {
    title: 'Election Day',
    img: ballot,
    bg: '#B85627',
    border: '3px solid darkslateblue',
    at: new Date('2020-11-08'),
  },
  {
    title: 'Innaguration',
    img: seal,
    bg: 'ivory',
    at: new Date('2021-01-20'),
  },
]

export default (props) => {
  const onClick = (entry) => {
    console.log('AT', entry.at)
    props.setTime(entry.at)
  }
  
  return <ul>
    {entries.map((e, idx) => (
      <BigTooltip title={e.title} key={idx}>
        <li className='event'
          style={{
            backgroundColor: e.bg,
            border: e.border || '3px solid darkslateblue',
          }}
          onClick={() => onClick(e)}
        >
          <object data={e.img}/>
        </li>
      </BigTooltip>
    ))}
  </ul>
}