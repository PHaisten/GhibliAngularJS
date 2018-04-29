app.controller('SingleFilmController', [
	'$scope',
	'$routeParams',
	'FilmsFactory',
	function($scope, $routeParams, FilmsFactory) {
		$scope.film = FilmsFactory.get({ id: $routeParams.id });
	}
]);
