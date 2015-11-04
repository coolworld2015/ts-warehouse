/// <reference path='../common/lib/angular.d.ts' />
  
function ClientsCtrl_js() {
	var vm = this;
	
	vm.title = 'TypeScript'; 
	
	angular.extend(vm, {
		init: init
	});

	function init() {
		vm.title = 'CoolWorldJS';
	}		
}		

interface IClientsCtrl {
	title: string;
	init(): void;
}

class ClientsCtrl implements IClientsCtrl{
	title: string;
	
	constructor() {
		this.title = 'TypeScript'; 
	}
	
	init(): void {
		this.title = 'CoolWorld';
	};
}

angular
	.module('app')
	.controller('ClientsCtrl', ClientsCtrl);