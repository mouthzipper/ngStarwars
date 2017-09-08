( function () {
	'use strict';

	/* @ngInject */
	function LayoutController( $rootScope, config, logger ) {
		activate();

		function activate() {
			logger.success( config.appTitle + ' loaded!', null );
		}
	}

	angular
		.module('app.layout')
		.controller('LayoutController', LayoutController);

} ) ();
