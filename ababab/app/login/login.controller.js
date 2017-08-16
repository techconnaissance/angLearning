'use strict';

angular.module('ababab').controller('LoginCtrl', function () {
	var login = this;
	
	login.user = {
		username: '',
		password: ''
	}
	
	login.submitUser = function (user) {
		console.log(user);
		login.currentUser = user;
	}
})