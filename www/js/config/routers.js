'use strict';
(function(app){
	app.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('ex',{
				url:'/ex',
				templateUrl:'views/ex.html',
				controller:"exCtrl"
			})
			.state('ex.intern',{
				url:'/intern',
				views:{
					'intern':{
						templateUrl:'views/intern.html',
						controller:'intern'
					}
				}
			});

			$urlRouterProvider.otherwise('/ex');
	});
})(angular.module('starter'));