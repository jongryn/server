const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' })
		// 83. Additional Proxy Rules
		// proxy(['/api/*', '/auth/google'], { target: 'http://localhost:5000' })
	);
};
