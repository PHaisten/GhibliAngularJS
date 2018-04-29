app.controller('HomeController', [
	'$scope',
	'FilmsFactory',
	function($scope, FilmsFactory) {
		$scope.films = FilmsFactory.query();
	}
]);
