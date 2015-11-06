/// <reference path='../common/lib/angularjs/angular.d.ts' />
  
module app.clients {  
	interface IClients {
		title: string;
		init(): void;
		setClients(): void;
		clients: any[];
	}

	class ClientsCtrl implements IClients{
		static $inject = ['ClientsService', 'ClientsFactory'];
		
		title: string;
		clients: any[];
		
		constructor(ClientsService, ClientsFactory) {
			this.clients = ClientsService.getClients();
			this.title = 'TypeScript';
			
			let vm = this; 
			ClientsFactory.getClients() 
				.then(function(data){
					vm.clients = data.data.splice(0,5); 
				})

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
		
		setClients(): void {
				//console.log(vm.ClientsService) 
			//this.clients = ClientsService.getClients();
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
		}
		
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