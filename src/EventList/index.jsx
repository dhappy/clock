import React from 'react'
import ballot from '../ballot.svg'
import './style.scss'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import turkey from '../turkey.svg'
import donkey from '../democrat.svg'

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
  },
  {
    title: 'Democratic Convention',
    img: donkey,
    bg: 'orange',
  },
  {
    title: 'Election Day',
    img: ballot,
    bg: '#B85627',
    border: '3px solid darkslateblue',
  },
]

export default (props) => {
  return <ul>
    {entries.map((e, idx) => (
      <BigTooltip title={e.title}>
        <li className='event' key={idx}
          style={{
            backgroundColor: e.bg,
            border: e.border || '3px solid darkslateblue',
          }}
        >
          <object data={e.img}/>
        </li>
      </BigTooltip>
    ))}
  </ul>
}