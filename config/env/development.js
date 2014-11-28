'use strict';

module.exports = {
	db: 'mongodb://jack:BeSoMean@dogen.mongohq.com:10097/hearnow',
	// db: 'mongodb://localhost/mean-dev',
	app: {
		title: 'Audyo'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '399827270181318',
		clientSecret: process.env.FACEBOOK_SECRET || 'cb03edeb903104ca1221d5861f47d900',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || '4rfPLw6fWDDkkRPfa5C3YFEgi',
		clientSecret: process.env.TWITTER_SECRET || 'Hyoxs4EsC1XYIrSX98Ov1TMaU7sOjdqUHckuvwjfSYMvrHwGl8',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '354030878362-2oabfqgr3912ah5iiag2n5hqai0tub8e.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || '1m38iRR2dFFYENR2q6tbQqtf',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '77qd07i7lv81aa',
		clientSecret: process.env.LINKEDIN_SECRET || 'wUkhIsO7r3VDN5dt',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'c4b1c31747be4d16377e',
		clientSecret: process.env.GITHUB_SECRET || 'a8675a621babed119d2a77740bce820ec2cd1daa',
		callbackURL: '/auth/github/callback'
	},
	digital: {
		clientID: process.env.DIGITAL_KEY || '7dkr2wrg7j3g',
		clientSecret: process.env.DIGITAL_SECRET || '87kkysmmnumnvnfs',
		callbackURL: '/7digital/callback'
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
