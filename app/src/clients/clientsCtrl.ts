/// <reference path='../common/lib/angularjs/angular.d.ts' />

module app.clients {
	interface IClients {
		title: string;
		init(): void;
		setClients(): void;
		clients: any[];
	}

	class ClientsCtrl implements IClients{
		static $inject = ['$state', 'ClientsService', 'ClientsFactory'];

		title: string;
		clients: any[];

		constructor(private $state: any, private ClientsService: any, private ClientsFactory: any) {
			this.clients = ClientsService.getClients();
			this.title = 'TypeScript';

			this.getClients();
		}

		public init = (): void => {
			this.title = 'CoolWorld';
			let newProduct = new app.product.Product("item2", 333);
			this.clients.splice(0,10);
			this.clients.push(newProduct);
		};

		public getClients = (): void => {
			this.ClientsFactory.getClients()
				.then(function(data){
					this.clients = data.data.splice(0,5);
				}.bind(this));
		};

		public setClients = (): void => {
			this.clients = this.ClientsService.getClients();
		};

		public clientsBack = (): void => {
			this.$state.go('main');
		};
	}

	angular
		.module('app')
		.controller('ClientsCtrl', ClientsCtrl);
}

module app.services {
	export function ClientsFactory($http: ng.IHttpService): any {
		return {
			getClients: getClients
		};

		function getClients() {
            var url = 'http://coolworld2015a1.herokuapp.com/api/clients/get';
            return $http.get(url)
                .then(function (result) {
                    return result;
                });
		}

	}
	
	ClientsFactory.$inject = ["$http"];

	angular
		.module('app')
		.factory("ClientsFactory", app.services.ClientsFactory);
}

module app.data {
	export class ClientsService{
		public getClients() {
			let clients = localStorage.getItem('warehouse_clients');
			clients = JSON.parse(clients);
			return clients.splice(0,10);
		}
	}

	angular
		.module('app')
		.service('ClientsService', ClientsService);
}

module app.product {
	export interface IProduct {
		name: string;
		price: number;
		showName(): string;
		showPrice(): number;
	}

	export class Product implements IProduct{
		constructor(public name: string,
					public price: number) {
		}

		showName(): string {
			return this.name;
		}

		showPrice(): number {
			return this.price;
		}
	}
}	