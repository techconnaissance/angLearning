'use strict';

var myApp = angular.module('ababab', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/home/home.tmpl.html',
		controller: 'HomeCtrl',
        controllerAs: 'home'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'app/about/about.tmpl.html',
		controller: 'AboutCtrl',
        controllerAs: 'about'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'app/login/login.tmpl.html',
		controller: 'LoginCtrl',
        controllerAs: 'login'
	})
	
});

myApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);