import React from 'react'
import ballot from '../ballot.svg'
import './style.scss'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const BigTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);


export default (props) => {
  return <div>
    <BigTooltip title='Election Day'>
      <object data={ballot}/>
    </BigTooltip>
  </div>
}