module app.clients.factory {
    export function ClientsFactory($http: ng.IHttpService): any {
        return {
            getClients: getClients
        };

        function getClients() {
            var url = 'http://ui-warehouse.herokuapp.com/api/clients/get';
            return $http.get(url)
                .then(function (result) {
                    return result;
                });
        }

    }

    angular
        .module('app')
        .factory("ClientsFactory", app.clients.factory.ClientsFactory);

    ClientsFactory.$inject = ["$http"];
}
