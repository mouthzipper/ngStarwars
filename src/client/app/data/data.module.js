( function () {
	'use strict';

	angular
		.module( 'app.data', [ 'app.core' ] )
		.constant('API_CONFIG', {
			'URL' : 'https://swapi.co/api/',
			} );
})();