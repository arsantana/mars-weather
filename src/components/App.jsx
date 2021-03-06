import React, { Component } from 'react';
import M from 'materialize-css';

import '../css/app.css';
import CurrentWeather from './CurrentWeather';
import Info from './Info';



class App extends Component {
	componentDidMount() {
		M.AutoInit();
	}

	render() {

		return(
			<div className="App container">
				<CurrentWeather />
				<Info />
			</div>
		)
	}
}

export default App;