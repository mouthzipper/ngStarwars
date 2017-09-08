(function() {
	'use strict';

	function getStates() {
		return [
			{
				state: 'dashboard',
				config: {
					url: '/',
					templateUrl: 'app/dashboard/dashboard.html',
					controller: 'DashboardController',
					controllerAs: 'vm',
					title: 'dashboard'
				}
			}
		];
	}

	/* @ngInject */
	function appRun( routerHelper ) {
		routerHelper.configureStates( getStates() );
	}

	angular
		.module('app.dashboard')
		.run( appRun );
})();
