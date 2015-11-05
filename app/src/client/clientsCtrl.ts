/// <reference path='../common/lib/angular.d.ts' />
  
module app.clients {  
	interface IClientsCtrl {
		title: string;
		init(): void;
	}

	class ClientsCtrl implements IClientsCtrl{
		title: string;
		
		constructor() {
			this.title = 'TypeScript'; 
			//this.init();
		}
		
		init(): void {
			this.title = 'CoolWorld';
		};

	}

	angular
		.module('app')
		.controller('ClientsCtrl', ClientsCtrl);
	
}
 