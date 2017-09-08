( function () {
	'use strict';

	/* @ngInject */
	function SwapiService( $http, $q, API_CONFIG, $state ) {
		var vm = this;

		vm.API_URL = API_CONFIG.URL;

		function searchFilms( search ) {
			var searchQuery = '';
			if (search && search.length > 0 ) {
				searchQuery = '?search=' + search;
			}
			var url = vm.API_URL + 'films' + searchQuery;
			var deferred = $q.defer();

			$http
				.get(url)
				.success(function( data ) {
					deferred.resolve(data);
				})
				.error(function( data ) {
					deferred.reject(status);
				});

			return deferred.promise;
		}

		var service = {
			searchFilms   : searchFilms
		};

		return service;
	}

	angular
		.module( 'app.data' )
		.factory( 'SwapiService', SwapiService );

} ) ();
