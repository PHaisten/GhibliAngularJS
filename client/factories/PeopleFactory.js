app.factory('PeopleFactory', [
	'$resource',
	function($resource) {
		return $resource('https://ghibliapi.herokuapp.com/people/:id', {
			id: '@id'
		});
	}
]);
