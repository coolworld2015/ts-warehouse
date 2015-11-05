/// <reference path='../common/lib/angular.d.ts' />
  
module app.clients {  
	interface IClient {
		title: string;
		init(): void;
		setClients(clientsService): void;
		clients: any[];
	}

	class ClientsCtrl implements IClient{
		static $inject = ['ClientsService'];
		
		title: string;
		clients: any[];
		
		constructor(clientsService) {
			this.clients = clientsService.getClients();
			this.title = 'TypeScript';
 
			//this.init();
			//this.setClients();
		}
		
		init(): void {
			this.title = 'CoolWorld';
			let newProduct = new app.product.Product("item2", 333);
			this.clients.splice(0,10);
			console.log(this.clients)
			this.clients.push(newProduct);
		}; 
		
		setClients(clientsService): void {
				console.log(clientsService)
			//this.clients = clientsService.getClients();
		};
	}

	angular
		.module('app')
		.controller('ClientsCtrl', ClientsCtrl);
	
}

module app.data {  
	class ClientsService{
		getClients() {
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
	} 

	export class Product implements IProduct{
	
		constructor(public name: string,
					public price: number) {
		}
		
		showName(): string {
			return this.name;
		}
	}
}	