/// <reference path='../common/lib/angularjs/angular.d.ts' />

module app.clients {
	interface IClients {
		title: string;
		init(): void;
		setClients(): void;
		clients: any[];
	}

	class ClientsCtrl implements IClients{
		public static $inject = ['$state', 'ClientsService', 'ClientsFactory'];

		public title: string;
		public clients: any[];

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



