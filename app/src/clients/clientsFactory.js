var app;
(function (app) {
    var clients;
    (function (clients) {
        var factory;
        (function (factory) {
            function ClientsFactory($http) {
                return {
                    getClients: getClients
                };
                function getClients() {
                    var url = 'http://coolworld2015a1.herokuapp.com/api/clients/get';
                    return $http.get(url).then(function (result) {
                        return result;
                    });
                }
            }
            factory.ClientsFactory = ClientsFactory;
            angular.module('app').factory("ClientsFactory", app.clients.factory.ClientsFactory);
            ClientsFactory.$inject = ["$http"];
        })(factory = clients.factory || (clients.factory = {}));
    })(clients = app.clients || (app.clients = {}));
})(app || (app = {}));
//# sourceMappingURL=clientsFactory.js.map