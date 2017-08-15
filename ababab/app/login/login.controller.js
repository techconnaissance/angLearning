'use strict';

var myApp = angular.module('routing', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
	.state('login', {
		url: '/login',
		templateUrl: 'login.html'
	})
	.state('home', {
            url: '/home',
            templateUrl: 'home.html'
    })
	
	.state('home.login', {
              url: "/working",
              templateUrl: "home.hlogin.html",
              controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }
    })
});