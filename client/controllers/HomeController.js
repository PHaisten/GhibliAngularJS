app.controller('HomeController', [
	'$scope',
	'FilmsFactory',
	'PeopleFactory',
	function($scope, FilmsFactory, PeopleFactory) {
		$scope.films = FilmsFactory.query();
		$scope.people = PeopleFactory.query();
	}
]);
