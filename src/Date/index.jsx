import React from 'react'
import months from '../zodiac'

export class Fecha extends React.Component {
	epoch = new Date(2021, 1, 20)

	constructor(props) {
		super(props)

		this.state = {
			year: 0, month: 0, day: 0,
			hour: 0, minute: 0, second: 0,
		}

		window.requestAnimationFrame(this.step)
	}

	// https://stackoverflow.com/questions/6220693/string-format-in-javascript
	zeroPad = (nr, base) => {
		base = 10;
		var len = (String(base).length - String(nr).length) + 1;
		return len > 0 ? new Array(len).join('0') + nr : nr;
	}

	step = () => {
		const now = new Date()
		let idx = 0
		while(months.length > idx && now.getMonth() > months[idx].ends.getMonth()) {
			// ToDo: Handle case where month is the same, but the day is too late
			idx++
		}
		var currentSign = months[idx];

		let msecs = now.getTime() - this.epoch.getTime()

		// ToDo: Hours begin counting from sunrise. For simplcity's sake, everything is from sunrise at the American Meridian in Washington, DC January 20, 2021: 6:18ᴀᴍ.

		let percentDay = now.getHours() / 24;
		percentDay += now.getMinutes() / (24 * 60);
		percentDay += now.getSeconds() / (24 * 60 * 60);
	
		let altSeconds = (10 * 100 * 100) * (1 - percentDay);
		let altHours = Math.floor(altSeconds / (100 * 100));
		altSeconds -= altHours * 100 * 100;
		let altMinutes = Math.floor(altSeconds / 100);
		altSeconds -= altMinutes * 100;
	
		this.setState({
			year: Math.ceil(
				msecs / 1000 / 60 / 60 / 24 / 365.25
			),
			month: months.length - idx,
			title: `${currentSign.symbol}: ${currentSign.name}`,
			day: (
				currentSign.ends.getDate()
				- now.getDate()
			),
			hour: altHours,
			minute: this.zeroPad(altMinutes),
			second: this.zeroPad(Math.floor(altSeconds)),
		})

		window.requestAnimationFrame(this.step)
	}

	render = () => (
		<React.Fragment>
			<div id="date">
				<span id='year'>{this.state.year}</span>
				/
				<span id='month' title={this.state.title}>{this.state.month}</span>
				/
				<span id='day'>{this.state.day}</span>
  	  </div>
  		<div id='time'>
				<span id='hour'>{this.state.hour}</span>
				:
				<span id='minute'>{this.state.minute}</span>
				.
				<span id='second'>{this.state.second}</span>
			</div>
		</React.Fragment>
  )
}