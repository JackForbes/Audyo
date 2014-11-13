'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]).factory('UsersModel', function() {
  var factory = {};

  factory.socialAccounts = ['facebook', 'twitter', 'google', 'linkedin', 'github'];

  return factory;
});
