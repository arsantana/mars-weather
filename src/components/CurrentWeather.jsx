import React, { Component } from 'react';
import axios from 'axios';

import mars from '../assets/mars-daybreak.jpg'

class CurrentWeather extends Component {
	constructor(props){
		super(props);

		this.state = {
		currentWeatherData: '',
		averageAT: '',
		minAT: '',
		maxAT: '',
		currentHWS: '',
		currentPRE: '',
		weatherData: '',
		season: '',
		sol: '',
		}
	}

	componentDidMount() {

		const API_KEY = 'PGnGcdJW5GMx3XEqDByRZ9sCX4aG5xLUOfjs2dBL';
		const END_POINT = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

		axios.get(END_POINT)
			.then(response => {
				this.setState({
					weatherData: response.data,
					averageAT: response.data[295].AT.av,
					minAT: response.data[295].AT.mn,
					maxAT: response.data[295].AT.mx,
					currentHWS: response.data[295].HWS.av,
					currentPRE: response.data[295].PRE.av,
					season: response.data[295].Season,
					currentWeatherData: response.data[295],
					sol: response.data.sol_keys[6]
				})
			})
			.catch(error => {
				console.log(error, 'failed to fetch data')
			});

	}
	render() {
		const {sol, season, currentAT, currentHWS, currentPRE, minAT, maxAT, averageAT} = this.state;

		console.log('this is current state', sol, season)
		return(
			<div className="section">
				<div className="current-weather card center-align">
					<div className="card-image">
						<img src={mars} alt="Mars at Daybreak via NASA" />
						<h2 className="white-text card-title">SOL {sol}</h2>
					</div>
					<div className="card-content">
						<p>NASA's InSight Mars Lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars' equator. </p>
					</div>
					<div className="card-tabs">
						<ul className="tabs tabs-fixed-width">
							<li className="tab"><a href="#tab1">Temperature</a></li>
							<li className="tab"><a href="#tab2">Pressure</a></li>
							<li className="tab"><a href="#tab3">Wind Speed</a></li>
						</ul>
						<div className="card-content grey lighten 4">
							<div id="tab1">
								<h5>Atmospheric Temperature</h5>
								<p>Air temperature is in degrees Celsius, as measured by the Temperature and Wind for InSight (TWINS) instrument.</p>
								<br/>
								<div>
									<p><b>High:</b> {maxAT} &deg;C</p>
									<p><b>Low:</b> {minAT} &deg;C</p>
									<p><b>Avg:</b> {averageAT} &deg;C</p>
								</div>
							</div>
							<div id="tab2">
								<h6>Pressure</h6>
								<span>{currentPRE} Pascals</span>
							</div>
							<div id="tab3">
								<h6>Horizontal Wind Speed</h6>
								<span>{currentHWS} m/s</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CurrentWeather;

