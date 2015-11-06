/// <reference path='../common/lib/angularjs/angular.d.ts' />
/// <reference path='../common/lib/angular-ui-router.d.ts' />
 
angular
	.module('app', ['ui.router']);
	
    angular
        .module('app')
        .config(routeConfig); 

	routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/login');  //TODO
        $urlRouterProvider.otherwise('/main');
		
		$stateProvider
            .state('main', {
                url: '/main',
                template: 'Main'
                //controller: 'LoginCtrl',
                //controllerAs: 'loginCtrl',

            })
	}		
