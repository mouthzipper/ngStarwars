( function () {
	'use strict';

	/* @ngInject */
	function DashboardController( $q, logger, SwapiService, $window ) {
		var vm = this;

		vm.searchText;
		vm.films = [];
		vm.title = 'Dashboard';
		vm.searchFilms = searchFilms;

		searchFilms( vm.searchText );

		function searchFilms( searchText, pageNumber ) {
			vm.searchText = searchText || '';
			vm.loading = true;
			SwapiService.searchFilms( searchText )
				.then( function ( data ) {
					if (searchText) {
						logger.info('Search result loaded.');
					} else {
						logger.info('Films loaded.')
					}
					vm.loading = false;
					vm.films = data.results;
				})
				.catch( errorHandler );
		}

		function errorHandler( error ) {
			var msg = 'Error in fetching films';
			logger.error( msg) ;
			return $q.reject(msg);
		}

	}


	angular
		.module( 'app.dashboard' )
		.controller( 'DashboardController', DashboardController );

} ) ();
