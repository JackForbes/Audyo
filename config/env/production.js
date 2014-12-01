'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '730316797058028',
		clientSecret: process.env.FACEBOOK_SECRET || 'be9124da1ece5bc114f27e8569c4176a',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'zyJD8qwBPLyQJWmMyg76F17KA',
		clientSecret: process.env.TWITTER_SECRET || 'mT7idPYC7MzvCU6n0YY5LgBvSHS1Zuf5v5rlTUKSSxcAhmZTjB',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '424754169069-1vlerjbslfu5hkt5jmdhiiifjivq9mgd.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'R7wWGJN68P2imdOSAuKmHFRL',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '78v1q1bx46lxvz',
		clientSecret: process.env.LINKEDIN_SECRET || 'pKlryFdYo4cUg2kK',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || '135f5e4bb343ade90726',
		clientSecret: process.env.GITHUB_SECRET || '3d7fa2b6ea8fd2efa74ceaf5ef6899f9f5df4f4a',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
