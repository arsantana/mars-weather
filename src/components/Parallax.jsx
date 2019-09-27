import React, { Component } from 'react';
import M from 'materialize-css';
import mars from '../assets/mars-daybreak.jpg';

class Parallaxs extends Component {
	componentDidMount() {
		const elems = document.querySelectorAll('.parallax');
		M.Parallax.init(elems);
	}

	render() {
		return(
			<div>
			<div className="parallax-container">
				<div className="parallax">
					<img className="px-img no-autoinit" src={mars} alt="Mars at Daybreak via NASA" />
				</div>
			</div>
			<div className="section white">
			<h1>hello</h1> 
			</div>
			<div className="parallax-container">
				<div className="parallax">
					<img className="px-img no-autoinit" src={mars} alt="Mars at Daybreak via NASA" />
				</div>
			</div>
			</div>
		)
	}
}

export default Parallaxs;