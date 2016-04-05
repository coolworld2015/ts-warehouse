module app.clients.services {
    export class ClientsService{
        public getClients = () => {
            let clients = localStorage.getItem('ui-warehouse.clients');
            clients = JSON.parse(clients);
            return clients.splice(0,10);
        }
    }

    angular
        .module('app')
        .service('ClientsService', ClientsService);
}
