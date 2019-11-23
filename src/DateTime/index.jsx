import React from 'react'
import months from '../zodiac'
import './style.scss'

export default (props) => {
	const epoch = new Date(2021, 1, 20)

	// https://stackoverflow.com/questions/6220693/string-format-in-javascript
	let zeroPad = (nr, base = 10) => {
		var len = (String(base).length - String(nr).length) + 1;
		return len > 0 ? new Array(len).join('0') + nr : nr;
	}

	const now = props.time
	let idx = 0
	while(
		months.length > idx + 1
		&& (
			now.getMonth() > months[idx].end.getMonth()
			|| (
				now.getMonth() === months[idx].end.getMonth()
				&& now.getDate() > months[idx].end.getDate()
			)
		)
	) {
		idx++
	}
	var currentSign = months[idx];

	let msecs = now.getTime() - epoch.getTime()

	// ToDo: Hours begin counting from sunrise. For simplcity's sake, everything is from sunrise at the American Meridian in Washington, DC January 20, 2021: 6:18ᴀᴍ.

	let percentDay = now.getHours() / 24;
	percentDay += now.getMinutes() / (24 * 60);
	percentDay += now.getSeconds() / (24 * 60 * 60);

	let altSeconds = (10 * 100 * 100) * (1 - percentDay);
	let altHours = Math.floor(altSeconds / (100 * 100));
	altSeconds -= altHours * 100 * 100;
	let altMinutes = Math.floor(altSeconds / 100);
	altSeconds -= altMinutes * 100;

	let year = Math.ceil(
		msecs / 1000 / 60 / 60 / 24 / 365.2425
	)
	let month = (months.length - idx) % months.length
	let title = `${currentSign.symbol}: ${currentSign.name}`
	let day = (
		currentSign.end.getDate()
		- now.getDate()
	)
	let hour = altHours
	let minute = zeroPad(altMinutes)
	let second = zeroPad(Math.floor(altSeconds))

	return (
		<React.Fragment>
			<div id="date">
				<span id='year'>{year}</span>
				/
				<span id='month' title={title}>{month}</span>
				/
				<span id='day'>{day}</span>
  	  </div>
  		<div id='time'>
				<span id='hour'>{hour}</span>
				:
				<span id='minute'>{minute}</span>
				.
				<span id='second'>{second}</span>
			</div>
		</React.Fragment>
  )
}