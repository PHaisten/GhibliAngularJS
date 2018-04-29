var app = angular.module('ghibli', ['ngRoute', 'ngResource']);

app.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.when('/film/:id', {
				templateUrl: './views/singleFilm.html',
				controller: 'SingleFilmController'
			});
	}
]);
