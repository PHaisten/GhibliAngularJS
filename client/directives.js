app.directive('jumbotron', [
	function() {
		return {
			templateUrl: './directives/jumbotron.html',
			resrict: 'E',
			scope: {
				activePage: '='
			}
		};
	}
]);
