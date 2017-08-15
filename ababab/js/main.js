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
	
});