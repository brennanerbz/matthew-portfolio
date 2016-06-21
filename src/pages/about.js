import React  from 'react';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'About',

	getInitialState() {
		return {
			photos: [
				'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/1173217_690825600942509_1234812613_n.jpg?ig_cache_key=NjAxNjc2Mzk2MjIyNTQ0MDU3.2',
				'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/1690083_247937685389039_1950703556_n.jpg?ig_cache_key=NjQ1MDc2OTQ5OTgzODg2MTgz.2',
				'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/11098302_802222803197204_2055629007_n.jpg?ig_cache_key=OTU3NDczOTkzODk5OTY1NDMx.2'
			]
		};
	},

	render() {
		const { photos } = this.state;
		return(
			<div className="container">
				<div style={{marginTop: '8em', marginBottom: '2em'}} 
					className="about-content margin-small mt ml mr mb no-margin-on-mobile nmr nml">
					<div className="about-body padding-med pt pr pb pl">
						<div className="profile-pic-circle block">
							<div className="profile-pic-img">
								<img style={{width: '100%', borderRadius: '50%'}} src={'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p320x320/1551592_10152200980906289_552896239_n.jpg?oh=d2388cd36d803b702bd149c19922b480&oe=57DB1477'}/>
							</div>
						</div>
						<div className="info margin-large mt">
							<h1 className="name black bold no-margin text-center">Matt Wizan</h1>
							<h3 className="title grey no-margin text-center">Creative Director</h3>
							<div className="about-bio margin-med mt padding-large pl pr no-padding-on-mobile npl npr">
								<p className="about-info">
									I am a filmmaker and content marketing consultant, born and bred in Los Angeles, CA.
								</p>
								<p className="about-info">Well that's the business card...</p>
								<p className="about-info">
									Basically, I'm a storyteller. I tell stories that are as vivid and diverse as the neighborhood and community I’ve grown up in. The unique people I meet and the variety of experiences that occupy my time have allowed me my voice, and with that voice I choose to communicate the stories that show that no matter who we are as individuals, our humanity is what makes us the same.  
								</p>
								<p className="about-info">
										As much as I participate in the world around me, I also live my life as an observer, and my desire is to share what I see and what I learn. And when I share, no matter the medium, my goal is to involve the audience in a multiplicity of viewpoints, highlighting a range of cultures and communities with humor and compassion in order to push society to become more empathetic.
								</p>
								<p className="about-info">
									I am also an explorer. I’ve been found walking through hundreds of cities, in dozens of different countries, on three separate continents. I choose not to explore alone. I enjoy being apart of an expedition, both as the point man and the wing, and when I collaborate with my clients, from conception to delivery, I always maintain the highest level of professionalism, creativity, and enthusiasm, delivering their projects on time and above expectations to help them share the best possible version of their stories.
								</p>
								<p className="about-info">Let’s explore together. Let’s share stories. Let’s go.</p>
							</div>
							<div className="about-pics margin-med mt padding-med pl pr group no-padding-on-mobile npl npr">
								{
									false && photos.map(function(photo, i) {
										return (
											<a key={i} className="flex-third">
												<img style={{width: '100%'}} src={photo}/>
											</a>
										);
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
