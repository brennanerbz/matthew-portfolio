const config = {
	'localhost': {
		apiUrl: 'http://localhost:5000/api/v1'
	},
	'matt-wizan.surge.sh': {
		apiUrl: 'https://matthew-portfolio.herokuapp.com/api/v1'
	},
	'mattwizan.com': {
		apiUrl: 'https://matthew-portfolio.herokuapp.com/api/v1'
	}
}[window.location.hostname];

export default config;