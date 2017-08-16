'use strict';

angular.module('ababab').controller('HomeCtrl', function () {
	var home = this;
	home.title = "Partial Home";
	
	home.departments = [
		{name: 'ISTD', description : 'IT Department'},
		{name: 'WPD', description : 'Work force Department'},
	]
	
	
	home.setCurrentDepartment = function (dept) {
		home.currentDepartment = dept;
	}
})