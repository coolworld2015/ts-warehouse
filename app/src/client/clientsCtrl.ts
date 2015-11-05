/// <reference path='../common/lib/angular.d.ts' />
  
module app.clients {  
	interface IClient {
		title: string;
		init(): void;
		products: app.product.IProduct[];
	}

	class ClientsCtrl implements IClient{
		title: string;
		products: app.product.IProduct[];
		
		constructor() {
			this.title = 'TypeScript'; 
			this.products = [
				{
					"name": "item1",
					"price": 555
				}
			]; 
			this.init();
		}
		
		init(): void {
			this.title = 'CoolWorld';
			let newProduct = new app.product.Product("item2", 333);
			this.products.push(newProduct);			
		};
	}

	angular
		.module('app')
		.controller('ClientsCtrl', ClientsCtrl);
	
}

module app.product {  
	export interface IProduct {
		name: string;
		price: number;
		//showName(): string;
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