/// <reference path='../common/lib/angularjs/angular.d.ts' />
/// <reference path='../common/lib/angular-ui-router.d.ts' />

module app {
    angular
        .module('app', ['ui.router']);

    angular
        .module('app')
        .config(routeConfig);


    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/login');  //TODO
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/main.html'
                //controller: 'ClientsCtrl',
                //controllerAs: 'loginCtrl',
            })

            .state('clients', {
                url: '/clients',
                templateUrl: 'clients/clients.html',
                controller: 'ClientsCtrl',
                controllerAs: 'loginCtrl'
            })
    }
}