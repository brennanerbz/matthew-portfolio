import React  from 'react';
import Link from './link';

export default React.createClass({
	displayName: 'Logo',

	render() {
		const logo = require('../images/astronaut.jpeg');
		return(
			<a href="/">
				<div className="logo group">
					<div className="float-left">
						<img className="logo-icon" src={logo}/>
					</div>
					<div className="float-left">
						<div className="margin-small ml">
							<h2 className="no-padding no-margin logo-name black">Matt Wizan</h2>
							<p className="no-padding no-margin logo-title grey">Creative Director</p>
						</div>
					</div>
				</div>
			</a>
		);
	}
});