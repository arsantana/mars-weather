import React, { Component } from 'react';


class Collapse extends Component {
	render() {
		return(
			<ul className="collapsible">
				<li>
					<div className="collapsible-header">
					Quick Facts
					</div>
					<div className="collapsible-body">
						<h6>Day</h6>
						<p>24.6 hours</p>
						<br/>
						<h6>Year</h6>
						<p>669.6 sols | 687 Earth days</p>
						<br/>
						<h6>Radius</h6>
						<p>2,106 miles | 3,390 kilometers</p>
						<br />
						<h6>Planet Type</h6>
						<p>Terrestrial</p>
						<br />
						<h6>Moons</h6>
						<p>2</p>
					</div>
				</li>
				<li>
					<div className="collapsible-header">
					Atmosphere
					</div>
					<div className="collapsible-body">
						<p>
							Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen and argon gases. To our eyes, the sky would be hazy and red because of suspended dust instead of the familiar blue tint we see on Earth. Mars' sparse atmosphere doesn't offer much protection from impacts by such objects as meteorites, asteroids and comets.
						</p>
						<p>
							The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or as low as about -225 degrees Fahrenheit (-153 degrees Celsius). And because the atmosphere is so thin, heat from the Sun easily escapes this planet. If you were to stand on the surface of Mars on the equator at noon, it would feel like spring at your feet (75 degrees Fahrenheit or 24 degrees Celsius) and winter at your head (32 degrees Fahrenheit or 0 degrees Celsius).
						</p>
						<p>
							Occasionally, winds on Mars are strong enough to create dust storms that cover much of the planet. After such storms, it can be months before all of the dust settles.
						</p>
					</div>
				</li>
				<li>
					<div className="collapsible-header">
					Exploration
					</div>
					<div className="collapsible-body">
						<p>
						The goal of the Mars Exploration Program is to explore Mars and to provide a continuous flow of scientific information and discovery through a carefully selected series of robotic orbiters, landers and mobile laboratories interconnected by a high-bandwidth Mars/Earth communications network.
						</p>
					</div>
				</li>
			</ul>
		)
	}
}

export default Collapse;