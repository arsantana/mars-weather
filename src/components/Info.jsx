import React from 'react';
import Collapse from './Collapse';

const Info = () => {
	return(
		<div className="info section white">
			<div className="row">
				<div className="col s12 m6">
					<h4>The Red Planet</h4>
					<Collapse />
				</div>
				<div className="col s12 m6">
					<p>The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.
					</p>
					<p>
						This dynamic planet has seasons, polar ice caps, weather, canyons and extinct volcanoes, evidence of an even more active past.
					</p>
					<p>
						Mars is one of the most explored bodies in our solar sytem, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars.
					</p>
					<p>
						These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Info;