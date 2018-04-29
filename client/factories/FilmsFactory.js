app.factory('FilmsFactory', [
	'$resource',
	function($resource) {
		return $resource('https://ghibliapi.herokuapp.com/films/:id', {
			id: '@id'
		});
	}
]);
