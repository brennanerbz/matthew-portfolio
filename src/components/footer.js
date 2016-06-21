import React  from 'react';

export default React.createClass({
	displayName: 'Footer',

	render() {
		return(
			<footer className="footer">
				<div className="container group">
					<div className="float left not-on-mobile second center">
						<div className="margin-small ml mt mb padding-small pr">
							<p className="grey">&copy; Matthew Wizan 2012-2016</p>
						</div>
					</div>
					<div className="float right not-on-mobile first center">
						<ul className="links flat margin-small mr no-padding">
							<li>
								<a href="mailto:matt.wizan@gmail.com" className="grey padding-small pr">
									Email
								</a>
							</li>
							<li>
								<a href="https://linkedin.com/in/mattwizan" className="twitter padding-small pr">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="https://instagram.com/kingmattwiz" className="instagram">
									Instagram
								</a>
							</li>
							<li>
								<a href="https://facebook.com/kingmattwiz" className="blue padding-small pl">
									Facebook
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
});