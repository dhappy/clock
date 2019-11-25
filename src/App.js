import React from 'react'
import './App.scss'
import CountdownClock from './CountdownClock'
import { Building } from './Building'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DateTable } from './DateTable'

export default () => {
  return (
    <Router>
      <div className="App">
        <Route path='/map' component={Building} />
        <Route path='/cal' component={DateTable} />
        <Route path='/' exact={true} component={CountdownClock}/>
      </div>
    </Router>
  );
}