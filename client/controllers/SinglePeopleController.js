app.controller('SinglePeopleController', [
	'$scope',
	'$routeParams',
	'PeopleFactory',
	function($scope, $routeParams, PeopleFactory) {
		$scope.people = PeopleFactory.get({ id: $routeParams.id });
	}
]);
